param([switch]$CheckOnly, [string]$ExpectedCommit, [switch]$Pause)
$ErrorActionPreference = 'Stop'
. (Join-Path $PSScriptRoot 'tools.ps1')
$site = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$git = Resolve-PortfolioTool 'git' 'native\git\cmd\git.exe'
$node = Resolve-PortfolioTool 'node' 'node\bin\node.exe'
# The optional Codex-bundled Git keeps its network helpers beside cmd/.
$helpers = Join-Path (Split-Path (Split-Path $git -Parent) -Parent) 'mingw64\bin'
if (Test-Path -LiteralPath $helpers) { $env:GIT_EXEC_PATH = $helpers }
function Run-Git {
    & $git -C $site @args
    if ($LASTEXITCODE -ne 0) { throw 'Команда Git завершилась ошибкой. Изменения не перезаписывались.' }
}
$mutex = New-Object System.Threading.Mutex($false, 'Local\KorepanovPortfolioPublish')
$locked = $false
$failed = $false
try {
    $locked = $mutex.WaitOne(0)
    if (-not $locked) { throw 'Публикация уже запущена.' }
    if ((Run-Git remote get-url origin) -ne 'https://github.com/L35H4/Portfolio.git') { throw 'Неожиданный origin.' }
    $branch = Run-Git branch --show-current
    if (-not $CheckOnly -and $branch -ne 'main') { throw 'Публикация разрешена только из main после согласования и слияния.' }
    if (Run-Git status --porcelain) { throw 'Есть незакоммиченные изменения. Сначала проверьте и закоммитьте нужные файлы.' }
    Push-Location $site
    try {
        & $node --check assets/site.js
        if ($LASTEXITCODE -ne 0) { throw 'Ошибка синтаксиса JavaScript.' }
        & $node scripts/check.mjs
        if ($LASTEXITCODE -ne 0) { throw 'Проверка ресурсов не пройдена. Выполните pnpm install --frozen-lockfile и pnpm run verify.' }
        & $node --test
        if ($LASTEXITCODE -ne 0) { throw 'Тесты не пройдены.' }
    } finally { Pop-Location }
    Run-Git fetch origin main
    if ([int](Run-Git rev-list --count HEAD..origin/main) -gt 0) { throw 'В main есть новые коммиты. Сначала синхронизируйте и повторите проверки.' }
    $head = Run-Git rev-parse HEAD
    $ahead = [int](Run-Git rev-list --count origin/main..HEAD)
    if ($CheckOnly) {
        Write-Output "Проверки пройдены. Ветка: $branch; коммит: $head; новых коммитов: $ahead. Отправка не выполнялась."
    } else {
        if (-not $ExpectedCommit) {
            if ((Read-Host "Опубликовать коммит $head на www.korepanov.art? Введите ДА") -cne 'ДА') { throw 'Публикация отменена.' }
            $ExpectedCommit = $head
        }
        if ($ExpectedCommit -ne $head) { throw 'Коммит изменился после проверки. Повторно проверьте изменения.' }
        Run-Git push origin "${head}:refs/heads/main"
        $remoteHead = ((Run-Git ls-remote origin refs/heads/main) -split '\s+')[0]
        if ($remoteHead -ne $head) { throw 'Не удалось подтвердить отправленный коммит.' }
        Write-Output "Коммит $head подтверждён на GitHub. Проверьте результат Pages: https://github.com/L35H4/Portfolio/actions"
        Write-Output 'Push сам по себе не подтверждает успешную публикацию или исправность HTTPS.'
    }
} catch {
    Write-Host $_ -ForegroundColor Red
    $failed = $true
} finally {
    if ($locked) { $mutex.ReleaseMutex() }
    $mutex.Dispose()
    if ($Pause) { Read-Host 'Нажмите Enter, чтобы закрыть окно' | Out-Null }
}
if ($failed) { exit 1 }
