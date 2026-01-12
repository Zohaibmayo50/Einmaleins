# Translate number page files from Spanish to German
# Handles numbers 3-20 for Batch 15

$numbers = 3..20

foreach ($num in $numbers) {
    $filePath = "c:\Users\Zohaib Meo\Desktop\Einmaleins\app\tabla\$num\page.tsx"
    
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw -Encoding UTF8
        
        # Replace domain
        $content = $content -replace 'tablasdemultiplicar\.online', 'einmaleins.online'
        
        # Replace URL paths
        $content = $content -replace '/tabla/', '/einmaleins/'
        
        # Replace language
        $content = $content -replace '"es-MX"', '"de"'
        $content = $content -replace '"es"', '"de"'
        
        # Replace breadcrumb "Inicio" with "Startseite"
        $content = $content -replace '"Inicio"', '"Startseite"'
        
        # Replace "Tablas 1-10" with "Einmaleins 1-10"
        $content = $content -replace '"Tablas 1-10"', '"Einmaleins 1-10"'
        $content = $content -replace '"1-10 Tabla de Multiplicar"', '"Einmaleins 1-10"'
        
        # Replace individual table names
        $content = $content -replace "Tabla del $num", "${num}er-Einmaleins"
        $content = $content -replace "$num Tabla de Multiplicar", "${num}er-Einmaleins"
        
        # Replace educational level
        $content = $content -replace '"Principiante"', '"Beginner"'
        
        # Replace specific phrases for each number
        $content = $content -replace 'Recurso de aprendizaje:', 'Lernressource:'
        $content = $content -replace 'Multiplicar por \d+', "Multiplikation mit $num"
        $content = $content -replace 'Aprende', 'Lerne'
        $content = $content -replace 'Domina', 'Meistere'
        
        # Replace metadata titles and descriptions
        $content = $content -replace "title: 'Tabla del $num[^']*'", "title: '${num}er-Einmaleins | Lerne Multiplikation mit $num'"
        $content = $content -replace "description: '[^']*'", "description: 'Meistere das ${num}er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.'"
        
        # Replace keywords if present
        $content = $content -replace "keywords: '[^']*'", "keywords: '${num}er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen'"
        
        # Replace canonical URL
        $content = $content -replace "canonical: '/tabla/$num'", "canonical: '/einmaleins/$num'"
        
        # Write back to file
        $content | Set-Content $filePath -Encoding UTF8 -NoNewline
        
        Write-Host "Translated file: $filePath" -ForegroundColor Green
    } else {
        Write-Host "File not found: $filePath" -ForegroundColor Yellow
    }
}

Write-Host "`nTranslation complete for numbers 3-20!" -ForegroundColor Cyan
