# Crawl amatholefunerals.co.za and download referenced images into public/amathole
$base = "https://www.amatholefunerals.co.za"
$outRoot = Join-Path (Get-Location) "public\amathole"
if (-not (Test-Path $outRoot)) { New-Item -ItemType Directory -Force -Path $outRoot | Out-Null }

$toVisit = New-Object System.Collections.ArrayList
$toVisit.Add($base + "/") | Out-Null
$visited = @{}
$images = New-Object System.Collections.ArrayList
$maxPages = 400

function Add-Image($img) {
    if (-not [string]::IsNullOrWhiteSpace($img) -and -not $images.Contains($img)) { $images.Add($img) | Out-Null }
}

while ($toVisit.Count -gt 0 -and $visited.Count -lt $maxPages) {
    $page = $toVisit[0]
    $toVisit.RemoveAt(0)
    if ($visited.ContainsKey($page)) { continue }
    Write-Output "Crawling: $page"
    try {
        $resp = Invoke-WebRequest -Uri $page -UseBasicParsing -TimeoutSec 30 -ErrorAction Stop
        $visited[$page] = $true
    } catch {
        Write-Warning "Failed to fetch $page : $_"
        continue
    }
    $content = $resp.Content

    # <img src="...">  (handles src="..." or src='...')
    $imgPattern = '<img[^>]+src=(?:"(?<src>[^"]+)"|''(?<src>[^'']+)'')'
    $imgMatches = [regex]::Matches($content, $imgPattern, [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
    foreach ($m in $imgMatches) {
        $src = $m.Groups['src'].Value
        if ($src -match '^data:') { continue }
        try {
            if ($src -match '^https?:') { $abs = $src }
            elseif ($src -match '^//') { $abs = 'https:' + $src }
            elseif ($src.StartsWith('/')) { $abs = $base + $src }
            else { $abs = (New-Object System.Uri((New-Object System.Uri($page)), $src)).AbsoluteUri }
        } catch { $abs = $src }
        Add-Image $abs
    }

    # CSS url(...)  (handles url("..."), url('...') and url(...))
    $urlPattern = 'url\((?:"(?<u>[^"]+)"|''(?<u>[^'']+)'')\)'
    $urlMatches = [regex]::Matches($content, $urlPattern, [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
    foreach ($m in $urlMatches) {
        $src = $m.Groups['u'].Value
        if ($src -match '^data:') { continue }
        try {
            if ($src -match '^https?:') { $abs = $src }
            elseif ($src -match '^//') { $abs = 'https:' + $src }
            elseif ($src.StartsWith('/')) { $abs = $base + $src }
            else { $abs = (New-Object System.Uri((New-Object System.Uri($page)), $src)).AbsoluteUri }
        } catch { $abs = $src }
        Add-Image $abs
    }

    # follow internal links (handles href="..." or href='...')
    $linkPattern = '<a[^>]+href=(?:"(?<h>[^"]+)"|''(?<h>[^'']+)'')'
    $linkMatches = [regex]::Matches($content, $linkPattern, [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
    foreach ($m in $linkMatches) {
        $h = $m.Groups['h'].Value
        if ($h -match '^(mailto:|tel:|javascript:|#)') { continue }
        try {
            if ($h -match '^https?:') { $abs = $h }
            elseif ($h -match '^//') { $abs = 'https:' + $h }
            elseif ($h.StartsWith('/')) { $abs = $base + $h }
            else { $abs = (New-Object System.Uri((New-Object System.Uri($page)), $h)).AbsoluteUri }
        } catch { continue }
        if ($abs.StartsWith($base)) {
            if (-not $visited.ContainsKey($abs) -and -not $toVisit.Contains($abs)) { $toVisit.Add($abs) | Out-Null }
        }
    }
}

Write-Output "Found $($images.Count) unique image URLs. Starting downloads..."

$downloaded = 0
foreach ($img in $images) {
    try {
        $u = [uri]$img
        $localRel = $u.AbsolutePath.TrimStart('/')
        if ([string]::IsNullOrWhiteSpace($localRel)) { continue }
        $local = Join-Path $outRoot $localRel
        $dir = Split-Path $local -Parent
        if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
        if (Test-Path $local) { Write-Output "Skipping exists: $local"; continue }
        Write-Output "Downloading: $img"
        Invoke-WebRequest -Uri $img -OutFile $local -UseBasicParsing -TimeoutSec 60 -ErrorAction Stop
        $downloaded++
    } catch {
        Write-Warning "Failed to download $img : $_"
    }
}

Write-Output "Done. Images saved to $outRoot. Attempted downloads: $downloaded; total discovered: $($images.Count)"
