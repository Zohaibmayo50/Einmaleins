# Complete translation of ALL remaining Spanish pattern text
$file = "app\components\NumberPage.tsx"
$content = Get-Content -Path $file -Raw -Encoding UTF8

Write-Host "Translating all remaining Spanish text in patterns..."

# Fix encoding issues first
$content = $content -replace 'FÃ¼nfer', 'Fünfer'
$content = $content -replace 'erhÃ¶ht', 'erhöht'
$content = $content -replace 'fÃ¼ge', 'füge'

# Title translations still needed
$content = $content -replace 'Patrón del Dígito de las Unidades', 'Einerziffer-Muster'
$content = $content -replace 'Relación con la Semana', 'Wochen-Beziehung'
$content = $content -replace 'Múltiplos Triples de las Decenas', 'Dreifache Zehner-Vielfache'
$content = $content -replace 'Patrón de Número Primo', 'Primzahl-Muster'
$content = $content -replace 'Relación con Días del Mes', 'Monatstage-Beziehung'
$content = $content -replace 'Relación Mágica con', 'Magische Beziehung zu'
$content = $content -replace 'Singularidad de Número Primo', 'Primzahl-Einzigartigkeit'
$content = $content -replace 'Propiedades de Número Primo', 'Primzahl-Eigenschaften'
$content = $content -replace 'Potencia del (\d+)', 'Potenz von $1'
$content = $content -replace '(\d+)×(\d+) o (\d+)×(\d+)', '$1×$2 oder $3×$4'

# Description translations - common patterns
$content = $content -replace 'Puede calcularse de múltiples formas:', 'Kann auf mehrere Arten berechnet werden:'
$content = $content -replace 'Se puede calcular de múltiples maneras:', 'Kann auf mehrere Arten berechnet werden:'
$content = $content -replace 'Relación de número cúbico:', 'Kubikzahl-Beziehung:'
$content = $content -replace 'Método de cálculo fácil', 'Einfache Berechnungsmethode'
$content = $content -replace '¡El método más efectivo!', 'Die effektivste Methode!'
$content = $content -replace '¡El método más práctico!', 'Die praktischste Methode!'
$content = $content -replace '¡Muy práctico!', 'Sehr praktisch!'
$content = $content -replace 'Dígito de las unidades:', 'Einerziffer:'
$content = $content -replace 'días = (\d+) Wochen', 'Tage = $1 Wochen'
$content = $content -replace 'Esta relación es útil en cálculos de calendario', 'Diese Beziehung ist nützlich für Kalenderberechnungen'
$content = $content -replace 'en cálculos de calendario', 'für Kalenderberechnungen'
$content = $content -replace 'es la longitud máxima de un mes', 'ist die maximale Monatslänge'
$content = $content -replace 'tiene patrón especial', 'hat ein spezielles Muster'
$content = $content -replace 'Multiplica múltiplos del (\d+) por (\d+)', 'Multipliziere Vielfache von $1 mit $2'
$content = $content -replace 'O múltiplos del (\d+) por (\d+)', 'Oder Vielfache von $1 mit $2'
$content = $content -replace 'Esto lo hace muy útil para fracciones', 'Das macht es sehr nützlich für Brüche'
$content = $content -replace 'La suma de dígitos es múltiplo de (\d+)', 'Die Quersumme ist ein Vielfaches von $1'
$content = $content -replace 'alle múltiplos de (\d+) son durch \.\.\. teilbar (\d+) y (\d+)', 'Alle Vielfachen von $1 sind durch $2 und $3 teilbar'
$content = $content -replace 'Esta relación especial:', 'Diese spezielle Beziehung:'
$content = $content -replace '¡En cada múltiplo de (\d+) hay resultado repdigit!', 'Bei jedem Vielfachen von $1 gibt es ein Repdigit-Ergebnis!'
$content = $content -replace 'Las estrategias (\d+)\+(\d+) o (\d+)-(\d+) son útiles', 'Die Strategien $1+$2 oder $3-$4 sind nützlich'
$content = $content -replace 'solo es Durch 1 Teilbar y (\d+)', 'ist nur durch 1 und $1 teilbar'
$content = $content -replace 'Además', 'Außerdem'

# Fix mixed German-Spanish constructions
$content = $content -replace 'multiplica por (\d+),', 'mit $1 multiplizieren,'
$content = $content -replace 'agrega (\d+):', 'füge $1 hinzu:'
$content = $content -replace 'Son (\d+) veces las decenas', 'Sie sind das $1-fache der Zehner'

Write-Host "Phase 2: Translating longer phrases..."

# Longer phrase patterns (need exact matches)
$content = $content -replace 'Cadena de duplicación:', 'Verdopplungskette:'
$content = $content -replace 'Die ersten 3 zeigen dígitos dobles', 'Die ersten 3 zeigen Doppelziffern'
$content = $content -replace 'dígitos dobles', 'Doppelziffern'
$content = $content -replace 'en cálculos de calendario', 'für Kalenderberechnungen'

Write-Host "Saving final file..."
Set-Content -Path $file -Value $content -Encoding UTF8 -NoNewline
Write-Host "Translation phase complete"
