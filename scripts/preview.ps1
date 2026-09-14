param([switch]$NoBrowser)
$ErrorActionPreference = 'Stop'
. (Join-Path $PSScriptRoot 'tools.ps1')
$site = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$node = Resolve-PortfolioTool 'node' 'node\bin\node.exe'
$url = 'http://127.0.0.1:8767/'
$ready = $false
try {
    $response = Invoke-WebRequest $url -UseBasicParsing -TimeoutSec 2
    $ready = $response.Headers['X-Portfolio-Preview'] -eq '1' -and $response.Content -ceq [IO.File]::ReadAllText((Join-Path $site 'index.html'))
} catch {}
if (-not $ready) {
    if (Get-NetTCPConnection -LocalPort 8767 -State Listen -ErrorAction SilentlyContinue) {
        throw 'Порт 8767 занят другим сервером. Остановите его перед запуском этой копии.'
    }
    Start-Process -FilePath $node -ArgumentList @('scripts/serve.mjs') -WorkingDirectory $site -WindowStyle Hidden
    for ($attempt = 0; $attempt -lt 20; $attempt++) {
        Start-Sleep -Milliseconds 250
        try { $response = Invoke-WebRequest $url -UseBasicParsing -TimeoutSec 2; $ready = $response.Headers['X-Portfolio-Preview'] -eq '1'; if ($ready) { break } } catch {}
    }
    if (-not $ready) { throw 'Предпросмотр не запустился.' }
}
Write-Output "Предпросмотр: $url"
if (-not $NoBrowser) { Start-Process $url }
