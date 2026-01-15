# Final comprehensive translation cleanup
$file = "app\components\NumberPage.tsx"
$content = Get-Content -Path $file -Raw -Encoding UTF8

Write-Host "Final translation pass..."

# Fix UTF-8 encoding issues
$content = $content -replace 'FÃ¼nfer', 'Fünfer'
$content = $content -replace 'erhÃ¶ht', 'erhöht'
$content = $content -replace 'Ã¼', 'ü'
$content = $content -replace 'Ã¤', 'ä'
$content = $content -replace 'Ã¶', 'ö'
$content = $content -replace 'ÃŸ', 'ß'

# Translate all remaining "Todos los" patterns
$content = $content -replace 'Todos los múltiplos de', 'Alle Vielfachen von'
$content = $content -replace 'todos los múltiplos de', 'alle Vielfachen von'
$content = $content -replace 'todos los', 'alle'

# Spanish keywords to German
$content = $content -replace '(\d+) días = (\d+) semanas?', '$1 Tage = $2 Wochen'
$content = $content -replace 'días', 'Tage'
$content = $content -replace 'semanas', 'Wochen'
$content = $content -replace 'meses', 'Monate'
$content = $content -replace 'en cálculos de calendario', 'für Kalenderberechnungen'
$content = $content -replace 'Esta relación es útil', 'Diese Beziehung ist nützlich'
$content = $content -replace 'Esto lo hace muy útil para fracciones', 'Das macht es sehr nützlich für Brüche'
$content = $content -replace 'es la longitud máxima de un mes', 'ist die maximale Monatslänge'
$content = $content -replace 'múltiplos de (\d+)', 'Vielfache von $1'
$content = $content -replace 'dígitos dobles', 'Doppelziffern'
$content = $content -replace 'Dígito de las unidades:', 'Einerziffer:'
$content = $content -replace '\(orden descendente\)', '(absteigende Reihenfolge)'
$content = $content -replace 'Predecible', 'Vorhersehbar'
$content = $content -replace 'tiene patrón especial', 'hat ein spezielles Muster'
$content = $content -replace 'Relación de número cúbico', 'Kubikzahl-Beziehung'
$content = $content -replace 'Puede calcularse de múltiples formas', 'Kann auf mehrere Arten berechnet werden'
$content = $content -replace 'Multiplica múltiplos del (\d+) por (\d+)', 'Multipliziere Vielfache von $1 mit $2'
$content = $content -replace 'O múltiplos del (\d+) por (\d+)', 'Oder Vielfache von $1 mit $2'
$content = $content -replace 'Los primeros (\d+) muestran', 'Die ersten $1 zeigen'
$content = $content -replace 'Luego (\d+), (\d+)', 'Dann $1, $2'
$content = $content -replace '¡El método más efectivo!', 'Die effektivste Methode!'

Write-Host "Saving file..."
Set-Content -Path $file -Value $content -Encoding UTF8 -NoNewline
Write-Host "Final cleanup complete"
