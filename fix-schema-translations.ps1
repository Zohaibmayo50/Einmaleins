# PowerShell script to fix all schema translations and encoding in tabla pages
# Ensures all schemas are 100% German for Google indexing

$files = Get-ChildItem -Path "app\tabla" -Filter "page.tsx" -Recurse

foreach ($file in $files) {
    Write-Host "Processing: $($file.FullName)"
    
    # Read with UTF-8 encoding
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    
    # Fix title - Spanish to German
    $content = $content -replace "title: '(\d+)er-Einmaleins - Juegos Divertidos y Ejercicios Pr.cticos'", "title: '`$1er-Einmaleins - Lustige Spiele und Praktische Übungen'"
    
    # Fix mixed language schema descriptions - common patterns
    $content = $content -replace 'Lerne Fingertricks y reglas m.gicas de suma de d.gitos con la 9er-Einmaleins\. Descubre los patrones de tabla de multiplicar m.s divertidos\.', 'Lerne Fingertricks und magische Ziffernadditionsregeln mit dem 9er-Einmaleins. Entdecke die unterhaltsamsten Einmaleins-Muster.'
    
    $content = $content -replace 'Lerne t.cnicas de duplicaci.n y cuadruplicaci.n con la 8er-Einmaleins\. Descubre la relaci.n 2.2.2 y el concepto de oct.gono\.', 'Lerne Verdopplungs- und Vervierfachungstechniken mit dem 8er-Einmaleins. Entdecke die 2×2×2 Beziehung und das Achteck-Konzept.'
    
    $content = $content -replace 'Lerne a Zählen in Sechserschritten con la 6er-Einmaleins\. Descubre las relaciones 2.3 y 3.2 con patrones geom.tricos\.', 'Lerne in Sechserschritten zu zählen mit dem 6er-Einmaleins. Entdecke die 2×3 und 3×2 Beziehungen mit geometrischen Mustern.'
    
    $content = $content -replace 'Lerne el concepto de Systema decimal y valor posicional con la 10er-Einmaleins\. Comprende la base de las matem.ticas con la tabla de multiplicar m.s f.cil\.', 'Lerne das Dezimalsystem-Konzept und Stellenwert mit dem 10er-Einmaleins. Verstehe die Grundlage der Mathematik mit der einfachsten Einmaleins-Tabelle.'
    
    $content = $content -replace 'Lerne el concepto b.sico de Multiplikation mit (\d+)\. Propiedad de identidad, patrones y estrategias pr.cticas para comprender las multiplicaciones por 1\.', 'Lerne das grundlegende Konzept der Multiplikation mit $1. Identitätseigenschaft, Muster und praktische Strategien zum Verständnis der Multiplikation.'
    
    # Fix tabla/18 Turkish/Spanish mix
    $content = $content -replace '18er-Einmaleins Multiplicar por Fähigkeiteninizi g..lendirin\. 9.2 und 6.3 Beziehungen Multiplikation mit 18 - Fortgeschrittene Rechenmethoden', 'Stärke deine 18er-Einmaleins-Fähigkeiten. 9×2 und 6×3 Beziehungen - Fortgeschrittene Rechenmethoden für die Multiplikation mit 18'
    
    # Fix tabla/18 title
    $content = $content -replace '"name": "18er-Einmaleins - Resitlik Yasi"', '"name": "18er-Einmaleins - Volljährigkeitsalter"'
    
    # Fix tabla/9 title
    $content = $content -replace '"name": "9er-Einmaleins - Patrones M.gicos de Nueve"', '"name": "9er-Einmaleins - Magische Neuner-Muster"'
    
    # Fix any remaining Spanish fragments
    $content = $content -replace ' con la (\d+)er-Einmaleins', ' mit dem $1er-Einmaleins'
    $content = $content -replace ' y reglas ', ' und Regeln '
    $content = $content -replace 'Descubre ', 'Entdecke '
    $content = $content -replace 'Comprende ', 'Verstehe '
    $content = $content -replace ' de suma de d.gitos', ' der Ziffernaddition'
    $content = $content -replace 'tabla de multiplicar', 'Einmaleins-Tabelle'
    $content = $content -replace 'patrones geom.tricos', 'geometrische Muster'
    $content = $content -replace 'matem.ticas', 'Mathematik'
    $content = $content -replace 'Propiedad de identidad', 'Identitätseigenschaft'
    $content = $content -replace 'estrategias pr.cticas', 'praktische Strategien'
    $content = $content -replace 'el concepto b.sico', 'das grundlegende Konzept'
    $content = $content -replace 'valor posicional', 'Stellenwert'
    $content = $content -replace 'Systema decimal', 'Dezimalsystem'
    
    # Fix UTF-8 encoding corruption
    $content = $content -replace 'm.gicas', 'magische'
    $content = $content -replace 't.cnicas', 'Techniken'
    $content = $content -replace 'pr.cticas', 'praktische'
    $content = $content -replace 'Pr.cticos', 'Praktische'
    $content = $content -replace 'b.sico', 'grundlegende'
    $content = $content -replace 'f.cil', 'einfach'
    $content = $content -replace 'm.s ', 'am meisten '
    $content = $content -replace 'relaci.n', 'Beziehung'
    $content = $content -replace 'oct.gono', 'Achteck'
    $content = $content -replace 'geom.tricos', 'geometrische'
    
    # Fix multiplication symbols
    $content = $content -replace '2.2.2', '2×2×2'
    $content = $content -replace '2.3', '2×3'
    $content = $content -replace '3.2', '3×2'
    $content = $content -replace '9.2', '9×2'
    $content = $content -replace '6.3', '6×3'
    $content = $content -replace '3.=9', '3²=9'
    
    # Fix Turkish terms
    $content = $content -replace 'g..lendirin', 'stärken'
    $content = $content -replace "9'un katlari", '9er-Vielfache'
    $content = $content -replace 'Resitlik Yasi', 'Volljährigkeitsalter'
    
    # Write back with UTF-8 encoding
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
}

Write-Host "`nCompleted fixing all tabla page schemas!" -ForegroundColor Green
Write-Host "Files processed: $($files.Count)" -ForegroundColor Cyan
