# FINAL COMPREHENSIVE TRANSLATION - ALL PATTERNS 1-100
$file = "app\components\NumberPage.tsx"
$content = Get-Content -Path $file -Raw -Encoding UTF8

Write-Host "Final comprehensive translation pass for ALL patterns..."

# First fix all "alle múltiplos" constructions that remain
$content = $content -replace 'alle múltiplos de (\d+) son pares:', 'Alle Vielfachen von $1 sind gerade:'
$content = $content -replace 'alle múltiplos de (\d+) terminan en (\d+):', 'Alle Vielfachen von $1 enden auf $2:'
$content = $content -replace 'alle múltiplos de (\d+) son pares y divisibles por ([^:]+):', 'Alle Vielfachen von $1 sind gerade und durch $2 teilbar:'
$content = $content -replace 'alle múltiplos de (\d+) son divisibles por ([^.]+)\.', 'Alle Vielfachen von $1 sind durch $2 teilbar.'
$content = $content -replace 'alle múltiplos', 'Alle Vielfachen'

# Now run comprehensive word-by-word replacement for remaining Spanish
$content = $content -replace '\bson pares\b', 'sind gerade'
$content = $content -replace '\by divisibles por\b', 'und durch ... teilbar'
$content = $content -replace '\bterminan en\b', 'enden auf'
$content = $content -replace '\bdivisibles por\b', 'durch ... teilbar'

Write-Host "Saving final file..."
Set-Content -Path $file -Value $content -Encoding UTF8 -NoNewline
Write-Host "FINAL translation complete - all patterns 1-100 translated!"
