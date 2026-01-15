# Translate pattern descriptions for numbers 31-100
$file = "app\components\NumberPage.tsx"
$content = Get-Content -Path $file -Raw -Encoding UTF8

Write-Host "Translating patterns 31-100..."

# Common pattern title translations
$titles = @{
    'Estrategia (\d+)\+(\d+)' = '$1+$2 Strategie'
    'Estrategia (\d+)-(\d+)' = '$1-$2 Strategie'
    'Descomposición (\d+)\+(\d+)' = '$1+$2 Zerlegung'
    'Relación (\d+)×(\d+)' = '$1×$2 Beziehung'
    'Doble del (\d+)' = 'Doppelte der $1'
    'Triple del (\d+)' = 'Dreifache der $1'
    'Cuadrado del (\d+)' = 'Quadrat von $1'
    'Potencia de (\d+)' = 'Potenz von $1'
    'Relación con Días del Mes' = 'Monatstage-Beziehung'
    'Relación Mágica con 111' = 'Magische Beziehung zu 111'
    'Singularidad de Número Primo' = 'Primzahl-Einzigartigkeit'
    'Propiedades de Número Primo' = 'Primzahl-Eigenschaften'
    'Patrón de Número Primo' = 'Primzahl-Muster'
    'Patrón Repdigit' = 'Repdigit-Muster'
    'Similar a Repdigit' = 'Repdigit-ähnlich'
    'Patrón de Número Cuadrado' = 'Quadratzahl-Muster'
    'Patrón de Número de Semanas' = 'Wochen-Muster'
    'Muchos Divisores' = 'Viele Teiler'
    'Divisible por (\d+)' = 'Durch $1 Teilbar'
    'Divisible por (\d+) y (\d+)' = 'Durch $1 und $2 Teilbar'
    'Termina en (\d+) o (\d+)' = 'Endet auf $1 oder $2'
    'Siempre Termina en (\d+)' = 'Endet Immer auf $1'
    'Siempre Números Pares' = 'Immer Gerade Zahlen'
    'Siempre Par y Divisible por (\d+)' = 'Immer Gerade und durch $1 Teilbar'
    'Siempre Par y Múltiples Divisores' = 'Immer Gerade und Mehrere Teiler'
    'Relaciones de Múltiples Factores' = 'Mehrfach-Faktor-Beziehungen'
    'Cincos del (\d+)' = 'Fünfer von $1'
    'Sietes del (\d+)' = 'Siebener von $1'
    'Cuatro Veces el (\d+)' = 'Vierfache der $1'
    'Cinco Veces el (\d+)' = 'Fünffache der $1'
    'Cuatro Veces las Decenas' = 'Vierfache der Zehner'
    'Cinco Veces las Decenas' = 'Fünffache der Zehner'
    'Mitad de (\d+)' = 'Hälfte von $1'
    'Alternativa (\d+)\+(\d+)' = '$1+$2 Alternative'
    'Alternativa (\d+)-(\d+)' = '$1-$2 Alternative'
}

foreach ($k in $titles.Keys) {
    $content = $content -replace $k, $titles[$k]
}

# Common description patterns
$content = $content -replace 'Ejemplo:', 'Beispiel:'
$content = $content -replace 'ejemplo:', 'Beispiel:'
$content = $content -replace '¡Muy práctico!', 'Sehr praktisch!'
$content = $content -replace '¡Muy fácil!', 'Sehr einfach!'
$content = $content -replace '¡El método más práctico!', 'Die praktischste Methode!'
$content = $content -replace '¡El método más efectivo!', 'Die effektivste Methode!'
$content = $content -replace '¡El más efectivo!', 'Am effektivsten!'
$content = $content -replace 'Método de cálculo fácil', 'Einfache Berechnungsmethode'
$content = $content -replace 'Método muy efectivo', 'Sehr effektive Methode'
$content = $content -replace 'Restar de números redondos', 'Von runden Zahlen subtrahieren'
$content = $content -replace 'Como (\d+) es primo', 'Da $1 eine Primzahl ist'
$content = $content -replace 'Dígito de las unidades:', 'Einerziffer:'
$content = $content -replace 'Todos los múltiplos de (\d+) son pares', 'Alle Vielfachen von $1 sind gerade'
$content = $content -replace 'Todos los múltiplos de (\d+) terminan en', 'Alle Vielfachen von $1 enden auf'
$content = $content -replace 'Todos los múltiplos de (\d+) son divisibles por', 'Alle Vielfachen von $1 sind durch ... teilbar'
$content = $content -replace 'Si conoces la tabla del (\d+) duplica', 'Wenn du die $1er-Tabelle kennst, verdopple'
$content = $content -replace 'Duplica la tabla del (\d+)', 'Verdopple die $1er-Tabelle'
$content = $content -replace 'Triplica la tabla del (\d+)', 'Verdreifache die $1er-Tabelle'
$content = $content -replace 'Cuadruplica la tabla del (\d+)', 'Vervierfache die $1er-Tabelle'
$content = $content -replace 'Puedes usar ambas tablas del (\d+) y (\d+)', 'Du kannst beide Tabellen ($1 und $2) nutzen'
$content = $content -replace 'Puede calcularse de muchas formas', 'Kann auf viele Arten berechnet werden'
$content = $content -replace 'Se puede calcular de múltiples maneras', 'Kann auf mehrere Arten berechnet werden'
$content = $content -replace 'Puede calcularse de múltiples formas', 'Kann auf mehrere Arten berechnet werden'
$content = $content -replace 'Cada uno aumenta en (\d+)', 'Jede Zahl erhöht sich um $1'
$content = $content -replace 'La suma de dígitos es múltiplo de (\d+)', 'Die Quersumme ist ein Vielfaches von $1'
$content = $content -replace 'requiere estrategias especiales', 'erfordert spezielle Strategien'
$content = $content -replace 'tiene patrones especiales', 'hat spezielle Muster'
$content = $content -replace 'tiene patrón especial', 'hat ein spezielles Muster'
$content = $content -replace 'solo es divisible por 1 y (\d+)', 'ist nur durch 1 und $1 teilbar'
$content = $content -replace 'Útil en cálculos de', 'Nützlich für'
$content = $content -replace 'Útil cuando multiplicar por (\d+) es más fácil', 'Nützlich wenn Multiplikation mit $1 einfacher ist'
$content = $content -replace 'Restar de (\d+) es un método alternativo', 'Von $1 subtrahieren ist eine alternative Methode'
$content = $content -replace 'agrega un 0 al final', 'füge eine 0 am Ende hinzu'
$content = $content -replace 'entonces (\d+)×(\d+)=(\d+)', 'also $1×$2=$3'
$content = $content -replace ', entonces', ', also'

# Specific translations for numbers 31-54
$content = $content -replace '(\d+) días es la longitud máxima de un mes', '$1 Tage ist die maximale Monatslänge'
$content = $content -replace 'en cálculos de calendario', 'für Kalenderberechnungen'
$content = $content -replace 'Cadena de duplicación', 'Verdopplungskette'
$content = $content -replace 'Todos los múltiplos preservan este patrón', 'Alle Vielfachen bewahren dieses Muster'
$content = $content -replace 'Los primeros (\d+) muestran dígitos dobles', 'Die ersten $1 zeigen ein Doppelziffern-Muster'
$content = $content -replace 'O multiplica la tabla del (\d+) por (\d+)', 'Oder multipliziere die $1er-Tabelle mit $2'
$content = $content -replace '¡En cada múltiplo de (\d+) hay resultado repdigit!', 'Bei jedem Vielfachen von $1 gibt es ein Repdigit-Ergebnis!'
$content = $content -replace 'Esta relación especial:', 'Diese spezielle Beziehung:'
$content = $content -replace 'Esta relación es útil en cálculos de porcentajes', 'Diese Beziehung ist nützlich für Prozentberechnungen'
$content = $content -replace 'O múltiplos del (\d+) por (\d+)', 'Oder Vielfache von $1 mit $2'
$content = $content -replace 'Multiplica múltiplos del (\d+) por (\d+)', 'Multipliziere Vielfache von $1 mit $2'
$content = $content -replace 'Además (\d+)=', 'Außerdem $1='
$content = $content -replace '(\d+) tiene (\d+) divisores:', '$1 hat $2 Teiler:'
$content = $content -replace 'Esto lo hace muy útil para fracciones', 'Das macht es sehr nützlich für Brüche'
$content = $content -replace '(\d+) semanas = 1 año', '$1 Wochen = 1 Jahr'
$content = $content -replace 'Multiplica por (\d+), agrega un 0 al final', 'Mit $1 multiplizieren, eine 0 am Ende hinzufügen'
$content = $content -replace 'multiplica por (\d+), luego por (\d+)', 'mit $1 multiplizieren, dann mit $2'
$content = $content -replace 'Multiplicar por (\d+):', 'Mit $1 multiplizieren:'

Write-Host "Saving file..."
Set-Content -Path $file -Value $content -Encoding UTF8 -NoNewline
Write-Host "Patterns 31-100 translated"
