function Resolve-PortfolioTool([string]$Name, [string]$BundledPath) {
    $command = Get-Command $Name -ErrorAction SilentlyContinue
    if ($command) { return $command.Source }
    $fallback = Join-Path $env:USERPROFILE ('.cache\codex-runtimes\codex-primary-runtime\dependencies\' + $BundledPath)
    if (Test-Path -LiteralPath $fallback) { return $fallback }
    throw "Не найден $Name. Установите Node.js 24 LTS и Git либо откройте проект через Codex."
}
