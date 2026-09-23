$ErrorActionPreference = 'Stop'
$site = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$desktop = [Environment]::GetFolderPath('Desktop')
if (-not $desktop -or -not (Test-Path -LiteralPath $desktop)) {
    $desktopCandidates = @(
        (Join-Path $env:USERPROFILE 'OneDrive\Desktop'),
        (Join-Path $env:USERPROFILE 'Desktop')
    )
    $desktop = $desktopCandidates | Where-Object { Test-Path -LiteralPath $_ } | Select-Object -First 1
}
if (-not $desktop) { throw 'Не найдена папка рабочего стола текущего пользователя.' }
$backup = Join-Path $site '.local-context\shortcut-backup'
New-Item -ItemType Directory -Path $backup -Force | Out-Null
$shell = New-Object -ComObject WScript.Shell
foreach ($entry in @(@('Предпросмотр сайта', 'preview.ps1', ''), @('Опубликовать сайт', 'publish.ps1', ''))) {
    $linkPath = Join-Path $desktop ($entry[0] + '.lnk')
    if (Test-Path -LiteralPath $linkPath) {
        $backupPath = Join-Path $backup ($entry[0] + '-' + (Get-Date -Format 'yyyyMMdd-HHmmss') + '.lnk')
        Copy-Item -LiteralPath $linkPath -Destination $backupPath
    }
    # WScript can mis-handle Cyrillic filenames under a UTF-8 system locale.
    # Create at an ASCII path, then copy with Unicode-aware filesystem APIs.
    $temporaryLink = Join-Path $backup ($entry[1] + '.lnk')
    $link = $shell.CreateShortcut($temporaryLink)
    $link.TargetPath = Join-Path $env:WINDIR 'System32\WindowsPowerShell\v1.0\powershell.exe'
    $link.Arguments = '-NoProfile -ExecutionPolicy Bypass -File "' + (Join-Path $PSScriptRoot $entry[1]) + '"' + $entry[2]
    $link.WorkingDirectory = $site
    $link.Description = 'Portfolio - ' + $entry[1]
    $link.Save()
    if ($shell.CreateShortcut($temporaryLink).WorkingDirectory -ne $site) { throw "Не удалось проверить ярлык: $linkPath" }
    Copy-Item -LiteralPath $temporaryLink -Destination $linkPath -Force
    if ((Get-FileHash -LiteralPath $temporaryLink).Hash -ne (Get-FileHash -LiteralPath $linkPath).Hash) { throw "Не удалось сохранить ярлык: $linkPath" }
    Write-Output $linkPath
}
