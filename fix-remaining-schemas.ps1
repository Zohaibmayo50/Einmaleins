# Fix remaining schema issues in tabla pages

$files = Get-ChildItem -Path "app\tabla" -Filter "page.tsx" -Recurse

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    
    # Fix tabla/18 Spanish fragment
    $content = $content -replace '18er-Einmaleins Multiplicar por Fähigkeiteninizi stärken\.', 'Stärke deine 18er-Einmaleins-Fähigkeiten.'
    
    # Fix any remaining "Multiplicar por"
    $content = $content -replace 'Multiplicar por', 'Multiplikation mit'
    
    # Fix encoding issues with simple patterns
    $content = $content -replace 'Ã¤', 'ä'
    $content = $content -replace 'Ã¼', 'ü'
    $content = $content -replace 'Ã–', 'Ö'
    $content = $content -replace 'Ã—', '×'
    $content = $content -replace 'Â²', '²'
    
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
}

Write-Host "Fixed remaining schema encoding issues!" -ForegroundColor Green
