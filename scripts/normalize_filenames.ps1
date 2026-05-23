$root = Join-Path -Path (Get-Location) -ChildPath 'public\amathole\assets\img'
Get-ChildItem -Path $root -Recurse -File | Where-Object { $_.Name -like '*%*' } | ForEach-Object {
    $old = $_.FullName
    $newName = ($_.Name -replace '%20','-') -replace '%','-'
    try {
        Rename-Item -LiteralPath $old -NewName $newName -Force
        Write-Output "Renamed: $old -> $newName"
    } catch {
        Write-Output "Failed: $old -> $newName : $_"
    }
}