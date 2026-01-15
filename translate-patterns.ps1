# Translate all pattern descriptions from Spanish to German
$file = "app\components\NumberPage.tsx"
$content = Get-Content -Path $file -Raw -Encoding UTF8

Write-Host "Translating pattern descriptions..."

# Pattern titles (continuing from where we left off)
$content = $content -replace '22=2×11\. Si conoces la tabla del 11 duplica: 11×3=33, entonces 22×3=66\.', '22=2×11. Wenn du die 11er-Tabelle kennst, verdopple: 11×3=33, also 22×3=66.'
$content = $content -replace 'Todos los múltiplos de 22 son pares: 22, 44, 66, 88, 110, 132, 154, 176, 198, 220\.', 'Alle Vielfachen von 22 sind gerade: 22, 44, 66, 88, 110, 132, 154, 176, 198, 220.'
$content = $content -replace '22×1=22, 22×2=44, 22×3=66, 22×4=88\. Los primeros 4 muestran patrón de dígitos dobles\.', '22×1=22, 22×2=44, 22×3=66, 22×4=88. Die ersten 4 zeigen ein Doppelziffern-Muster.'

$content = $content -replace '23×n = \(20×n\) \+ \(3×n\)\. Ejemplo: 23×5 = 100 \+ 15 = 115\.', '23×n = (20×n) + (3×n). Beispiel: 23×5 = 100 + 15 = 115.'
$content = $content -replace '23=25-2\. Ejemplo: 23×4 = 100 - 8 = 92\. Útil cuando multiplicar por 25 es más fácil\.', '23=25-2. Beispiel: 23×4 = 100 - 8 = 92. Nützlich wenn Multiplikation mit 25 einfacher ist.'
$content = $content -replace 'Como 23 es primo tiene patrón especial\. Dígito de las unidades: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0\.', 'Da 23 eine Primzahl ist, hat sie ein spezielles Muster. Einerziffer: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0.'

$content = $content -replace '24=2×12=3×8=4×6\. Puede calcularse de muchas formas\. 24×5 = 12×10 = 120\.', '24=2×12=3×8=4×6. Kann auf viele Arten berechnet werden. 24×5 = 12×10 = 120.'
$content = $content -replace 'Todos los múltiplos de 24 son pares y divisibles por 3, 4, 6 y 8\.', 'Alle Vielfachen von 24 sind gerade und durch 3, 4, 6 und 8 teilbar.'
$content = $content -replace '24 horas = 1 día\. 48 horas = 2 días, 72 horas = 3 días\. Útil en cálculos de tiempo\.', '24 Stunden = 1 Tag. 48 Stunden = 2 Tage, 72 Stunden = 3 Tage. Nützlich für Zeitberechnungen.'

$content = $content -replace 'Todos los múltiplos de 25 terminan en 25, 50, 75 o 00\. Muy regular y predecible\.', 'Alle Vielfachen von 25 enden auf 25, 50, 75 oder 00. Sehr regelmäßig und vorhersehbar.'
$content = $content -replace '25 = 100÷4\. Entonces 25×4=100\. Esta relación es muy útil en cálculos de porcentajes y fracciones\.', '25 = 100÷4. Also 25×4=100. Diese Beziehung ist sehr nützlich für Prozent- und Bruchrechnungen.'
$content = $content -replace '25=5²\. Esta relación especial: 25×n = 5×5×n\. Ejemplo: 25×8 = 5×40 = 200\.', '25=5². Diese spezielle Beziehung: 25×n = 5×5×n. Beispiel: 25×8 = 5×40 = 200.'

$content = $content -replace '26=2×13\. Si conoces la tabla del 13 duplica: 13×7=91, entonces 26×7=182\.', '26=2×13. Wenn du die 13er-Tabelle kennst, verdopple: 13×7=91, also 26×7=182.'
$content = $content -replace 'Todos los múltiplos de 26 son pares: 26, 52, 78, 104, 130, 156, 182, 208, 234, 260\.', 'Alle Vielfachen von 26 sind gerade: 26, 52, 78, 104, 130, 156, 182, 208, 234, 260.'
$content = $content -replace '26×n = \(25×n\) \+ n o \(30×n\) - \(4×n\)\. Ejemplo: 26×4 = 100\+4 = 104\.', '26×n = (25×n) + n oder (30×n) - (4×n). Beispiel: 26×4 = 100+4 = 104.'

$content = $content -replace '27=3³ \(3×3×3\)\. Relación de número cúbico: 27, 54, 81, 108\.\.\. \(múltiplos de 3\)\.', '27=3³ (3×3×3). Kubikzahl-Beziehung: 27, 54, 81, 108... (Vielfache von 3).'
$content = $content -replace '27=3×9\. Triplica la tabla del 9: 9×4=36, entonces 27×4=108\.', '27=3×9. Verdreifache die 9er-Tabelle: 9×4=36, also 27×4=108.'
$content = $content -replace '27=30-3\. Ejemplo: 27×6 = 180-18 = 162\. Método de cálculo fácil\.', '27=30-3. Beispiel: 27×6 = 180-18 = 162. Einfache Berechnungsmethode.'

$content = $content -replace '28=4×7=2×14\. Puede calcularse de múltiples formas: 28×3 = 4×3×7 = 12×7 = 84\.', '28=4×7=2×14. Kann auf mehrere Arten berechnet werden: 28×3 = 4×3×7 = 12×7 = 84.'
$content = $content -replace 'Todos los múltiplos de 28 son pares y divisibles por 4 y 7: 28, 56, 84, 112, 140\.\.\.', 'Alle Vielfachen von 28 sind gerade und durch 4 und 7 teilbar: 28, 56, 84, 112, 140...'
$content = $content -replace '28 días = 4 semanas\. Esta relación es útil en cálculos de calendario\.', '28 Tage = 4 Wochen. Diese Beziehung ist nützlich für Kalenderberechnungen.'

$content = $content -replace '29=30-1\. 29×n = \(30×n\) - n\. Ejemplo: 29×7 = 210-7 = 203\. ¡El método más efectivo!', '29=30-1. 29×n = (30×n) - n. Beispiel: 29×7 = 210-7 = 203. Die effektivste Methode!'
$content = $content -replace 'Dígito de las unidades: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 \(orden descendente\)\. Predecible\.', 'Einerziffer: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 (absteigende Reihenfolge). Vorhersehbar.'
$content = $content -replace 'Como 29 es primo no tiene relaciones simples de factores\. Requiere estrategias mentales\.', 'Da 29 eine Primzahl ist, hat sie keine einfachen Faktor-Beziehungen. Erfordert mentale Strategien.'

$content = $content -replace '30=3×10\. Multiplicar por 30: multiplica por 10, luego por 3\. 7×30 = 70×3 = 210\.', '30=3×10. Mit 30 multiplizieren: Multipliziere mit 10, dann mit 3. 7×30 = 70×3 = 210.'
$content = $content -replace 'Todos los múltiplos de 30 terminan en 0: 30, 60, 90, 120, 150, 180, 210, 240, 270, 300\.', 'Alle Vielfachen von 30 enden auf 0: 30, 60, 90, 120, 150, 180, 210, 240, 270, 300.'
$content = $content -replace '30, 60, 90, 120, 150\.\.\. Cada uno aumenta en 30\. Son 3 veces las decenas\.', '30, 60, 90, 120, 150... Jede Zahl erhöht sich um 30. Sie sind das Dreifache der Zehner.'

Write-Host "Saving translated content..."
Set-Content -Path $file -Value $content -Encoding UTF8 -NoNewline
Write-Host "Pattern translations complete for numbers 15-30"
