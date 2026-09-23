param([switch]$CheckOnly, [string]$ExpectedCommit, [switch]$Pause)
$ErrorActionPreference = 'Stop'
. (Join-Path $PSScriptRoot 'tools.ps1')
$site = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$git = Resolve-PortfolioTool 'git' 'native\git\cmd\git.exe'
$node = Resolve-PortfolioTool 'node' 'node\bin\node.exe'
# Git for Windows keeps remote helpers in libexec/git-core. Override the path
# only when that complete helper directory is present.
$helpers = Join-Path (Split-Path (Split-Path $git -Parent) -Parent) 'mingw64\libexec\git-core'
if (Test-Path -LiteralPath (Join-Path $helpers 'git-remote-https.exe')) { $env:GIT_EXEC_PATH = $helpers }
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
    if ($branch -ne 'main') { throw 'Автопубликация разрешена только из ветки main.' }
    Push-Location $site
    try {
        & $node --check assets/site.js
        if ($LASTEXITCODE -ne 0) { throw 'Ошибка синтаксиса JavaScript.' }
        & $node scripts/check.mjs
        if ($LASTEXITCODE -ne 0) { throw 'Проверка ресурсов не пройдена. Выполните pnpm install --frozen-lockfile и pnpm run verify.' }
    } finally { Pop-Location }
    if ($CheckOnly) {
        $changes = @(Run-Git status --porcelain).Count
        Write-Output "Быстрая проверка пройдена. Локальных изменений: $changes. Коммит и отправка не выполнялись."
    } else {
        Run-Git add --all
        & $git -C $site diff --cached --quiet
        if ($LASTEXITCODE -eq 1) {
            $stamp = Get-Date -Format 'yyyy-MM-dd HH:mm'
            Run-Git commit -m "Update site $stamp"
        } elseif ($LASTEXITCODE -ne 0) {
            throw 'Не удалось проверить подготовленные к коммиту изменения.'
        }
        Run-Git fetch origin main
        if ([int](Run-Git rev-list --count HEAD..origin/main) -gt 0) {
            Write-Output 'В origin/main есть новые коммиты. Выполняется автоматическая синхронизация.'
            & $git -C $site rebase origin/main
            if ($LASTEXITCODE -ne 0) {
                & $git -C $site rebase --abort | Out-Null
                throw 'Автоматическая синхронизация не удалась. Локальный коммит сохранён, публикация остановлена.'
            }
        }
        $head = Run-Git rev-parse HEAD
        Run-Git push origin "${head}:refs/heads/main"
        $remoteHead = ((Run-Git ls-remote origin refs/heads/main) -split '\s+')[0]
        if ($remoteHead -ne $head) { throw 'Не удалось подтвердить отправленный коммит.' }
        Write-Output "Готово: коммит $head отправлен в main. GitHub Pages применит изменения автоматически."
        Write-Output 'Статус публикации: https://github.com/L35H4/Portfolio/actions'
    }
} catch {
    Write-Host $_ -ForegroundColor Red
    $failed = $true
} finally {
    if ($locked) { $mutex.ReleaseMutex() }
    $mutex.Dispose()
}
if ($failed) { exit 1 }
