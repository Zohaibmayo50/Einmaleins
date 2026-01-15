# Complete remaining Spanish descriptions
$file = "app\components\NumberPage.tsx"
$content = Get-Content -Path $file -Raw -Encoding UTF8

Write-Host "Translating remaining Spanish descriptions..."

# Replace all "Todos los múltiplos de X son/terminan" patterns
$content = $content -replace 'Todos los múltiplos de (\d+) son pares:', 'Alle Vielfachen von $1 sind gerade:'
$content = $content -replace 'Todos los múltiplos de (\d+) terminan en (\d+):', 'Alle Vielfachen von $1 enden auf $2:'
$content = $content -replace 'Todos los múltiplos de (\d+) son divisibles por ([^.]+)\.', 'Alle Vielfachen von $1 sind durch $2 teilbar.'
$content = $content -replace 'Todos los múltiplos de (\d+) son pares y divisibles por ([^:]+):', 'Alle Vielfachen von $1 sind gerade und durch $2 teilbar:'
$content = $content -replace 'Todos los múltiplos preservan este patrón', 'Alle Vielfachen bewahren dieses Muster'

# More specific patterns
$content = $content -replace 'Cadena de duplicación:', 'Verdopplungskette:'
$content = $content -replace 'La suma de dígitos es múltiplo de (\d+)', 'Die Quersumme ist ein Vielfaches von $1'
$content = $content -replace 'Útil si conoces la tabla del (\d+)', 'Nützlich wenn du die $1er-Tabelle kennst'
$content = $content -replace 'Usa la tabla del (\d+):', 'Nutze die $1er-Tabelle:'
$content = $content -replace 'O (\d+)×(\d+)×(\d+)', 'Oder $1×$2×$3'

Write-Host "Saving..."
Set-Content -Path $file -Value $content -Encoding UTF8 -NoNewline
Write-Host "Remaining descriptions translated"
