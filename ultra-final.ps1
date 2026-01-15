# Ultra-comprehensive final translation - handles all edge cases
$file = "app\components\NumberPage.tsx"
$content = Get-Content -Path $file -Raw -Encoding UTF8

Write-Host "Ultra-comprehensive translation..."

# Fix all encoding issues first
$content = $content -replace 'erhÃ¶ht', 'erhöht'
$content = $content -replace 'fÃ¼ge', 'füge'
$content = $content = $content -replace 'FÃ¼nfer', 'Fünfer'

# Translate mixed German-Spanish phrases
$content = $content -replace 'alle múltiplos de (\d+) son pares y divisibles por', 'Alle Vielfachen von $1 sind gerade und durch ... teilbar:'
$content = $content -replace 'alle múltiplos de (\d+) son divisibles por', 'Alle Vielfachen von $1 sind durch ... teilbar:'
$content = $content -replace 'alle múltiplos de (\d+) son pares:', 'Alle Vielfachen von $1 sind gerade:'
$content = $content -replace 'alle múltiplos de (\d+) terminan en', 'Alle Vielfachen von $1 enden auf'
$content = $content -replace 'alle múltiplos preservan este patrón', 'Alle Vielfachen bewahren dieses Muster'
$content = $content -replace 'alle múltiplos', 'Alle Vielfachen'

# Additional Spanish-to-German patterns
$content = $content -replace 'tiene patrón especial', 'hat ein spezielles Muster'
$content = $content -replace 'hat spezielle Muster', 'hat spezielle Muster'
$content = $content -replace 'Método de cálculo fácil', 'Einfache Berechnungsmethode'
$content = $content -replace 'Relación de número cúbico:', 'Kubikzahl-Beziehung:'
$content = $content -replace 'Puede calcularse de múltiples formas:', 'Kann auf mehrere Arten berechnet werden:'
$content = $content -replace ' días = ', ' Tage = '
$content = $content -replace 'Esta relación es útil', 'Diese Beziehung ist nützlich'
$content = $content -replace 'en cálculos de calendario', 'für Kalenderberechnungen'
$content = $content -replace 'es la longitud máxima de un mes', 'ist die maximale Monatslänge'
$content = $content -replace 'Cadena de duplicación:', 'Verdopplungskette:'
$content = $content -replace 'Oder multipliziere die (\d+)er-Tabelle mit (\d+)', 'Oder multipliziere die $1er-Tabelle mit $2'
$content = $content -replace 'dígitos dobles', 'Doppelziffern'
$content = $content -replace 'La suma de dígitos es múltiplo de (\d+)', 'Die Quersumme ist ein Vielfaches von $1'
$content = $content -replace 'Multiplica múltiplos del (\d+) por (\d+)', 'Multipliziere Vielfache von $1 mit $2'
$content = $content -replace 'O múltiplos del (\d+) por (\d+)', 'Oder Vielfache von $1 mit $2'
$content = $content -replace 'Además', 'Außerdem'
$content = $content -replace 'Relaciones de múltiples factores', 'Mehrfach-Faktor-Beziehungen'
$content = $content -replace 'Esto lo hace muy útil para fracciones', 'Das macht es sehr nützlich für Brüche'
$content = $content -replace '¡En cada múltiplo de (\d+) hay resultado repdigit!', 'Bei jedem Vielfachen von $1 gibt es ein Repdigit-Ergebnis!'
$content = $content -replace 'Esta relación especial:', 'Diese spezielle Beziehung:'
$content = $content -replace 'Las estrategias (\d+)\+(\d+) o (\d+)-(\d+) son útiles', 'Die Strategien $1+$2 oder $3-$4 sind nützlich'
$content = $content -replace '¡Muy práctico!', 'Sehr praktisch!'
$content = $content -replace 'multiplica por (\d+), fÃ¼ge', 'mit $1 multiplizieren, füge'
$content = $content -replace 'multiplica por (\d+),', 'mit $1 multiplizieren,'
$content = $content -replace 'agrega (\d+):', 'füge $1 hinzu:'
$content = $content -replace 'agrega', 'füge hinzu'
$content = $content -replace 'Son (\d+) veces las decenas', 'Sie sind das $1-fache der Zehner'
$content = $content -replace ' o \(', ' oder ('

# Fix specific mixed phrases
$content = $content -replace 'Durch 9 Teilbar y 4', 'Durch 4 und 9 Teilbar'
$content = $content -replace 'Siempre Par y Durch', 'Immer Gerade und Durch'
$content = $content -replace 'Siempre Durch 3 Teilbar', 'Immer durch 3 Teilbar'
$content = $content -replace 'Siempre Números Pares', 'Immer Gerade Zahlen'
$content = $content -replace 'Siempre Números', 'Immer'
$content = $content -replace 'Patrón del Dígito de las Unidades', 'Einerziffer-Muster'
$content = $content -replace 'Propiedad de Número Primo', 'Primzahl-Eigenschaft'
$content = $content -replace 'Potencia del (\d+)', 'Potenz von $1'
$content = $content -replace 'Relación con la Semana', 'Wochen-Beziehung'
$content = $content -replace 'Múltiplos Triples de las Decenas', 'Dreifache Zehner-Vielfache'
$content = $content -replace 'Relación con Días del Mes', 'Monatstage-Beziehung'
$content = $content -replace 'Patrón Repdigit', 'Repdigit-Muster'
$content = $content -replace 'Relación Mágica con', 'Magische Beziehung zu'
$content = $content -replace 'Singularidad de Número Primo', 'Primzahl-Einzigartigkeit'
$content = $content -replace 'Relación (\d+)×(\d+)', '$1×$2 Beziehung'

# Last passes for any remaining
$content = $content -replace '25\+1 o 30-4', '25+1 oder 30-4'
$content = $content -replace '35-1 o 30\+4', '35-1 oder 30+4'
$content = $content -replace '4×7 o 2×14', '4×7 oder 2×14'
$content = $content -replace 'Dígito de las unidades:', 'Einerziffer:'

Write-Host "Saving..."
Set-Content -Path $file -Value $content -Encoding UTF8 -NoNewline
Write-Host "Translation complete!"
