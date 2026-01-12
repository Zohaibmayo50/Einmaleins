# Comprehensive translation script for remaining number pages (21-100)
# Translates all Spanish/Turkish content to German

$numbers = 21..100

foreach ($num in $numbers) {
    $filePath = "c:\Users\Zohaib Meo\Desktop\Einmaleins\app\tabla\$num\page.tsx"
    
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw -Encoding UTF8
        
        # Replace domain
        $content = $content -replace 'tablasdemultiplicar\.online', 'einmaleins.online'
        
        # Replace URL paths
        $content = $content -replace '/tabla/', '/einmaleins/'
        
        # Replace language codes
        $content = $content -replace '"es-MX"', '"de"'
        $content = $content -replace '"es"', '"de"'
        
        # Replace breadcrumb text
        $content = $content -replace '"Inicio"', '"Startseite"'
        $content = $content -replace '"Tablas? \d+-\d+"', '"Einmaleins $0"'
        $content = $content -replace '"(\d+)-(\d+) Tabla de Multiplicar"', '"Einmaleins $1-$2"'
        
        # Replace table names
        $content = $content -replace "Tabla del $num", "${num}er-Einmaleins"
        $content = $content -replace "$num Tabla de Multiplicar", "${num}er-Einmaleins"
        
        # Educational level
        $content = $content -replace '"Principiante"', '"Beginner"'
        $content = $content -replace '"Intermedio"', '"Intermediate"'
        $content = $content -replace '"Avanzado"', '"Advanced"'
        
        # Resource names
        $content = $content -replace 'Recurso de [aA]prendizaje:', 'Lernressource:'
        $content = $content -replace "$num Tabla de Multiplicar Recurso de Aprendizaje", "${num}er-Einmaleins Lernressource"
        
        # Common verbs
        $content = $content -replace 'Aprende', 'Lerne'
        $content = $content -replace 'Domina', 'Meistere'
        $content = $content -replace 'Descubre', 'Entdecke'
        $content = $content -replace 'Multiplica(r|ción)', 'Multiplikation'
        
        # Update metadata title
        $content = $content -replace "title: '[^']*'", "title: '${num}er-Einmaleins | Lerne Multiplikation mit $num'"
        
        # Update description
        $content = $content -replace "description: '[^']*'", "description: 'Meistere das ${num}er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.'"
        
        # Update keywords
        $content = $content -replace "keywords: '[^']*'", "keywords: '${num}er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen'"
        
        # Update canonical URL  
        $content = $content -replace "canonical: '/tabla/$num'", "canonical: '/einmaleins/$num'"
        $content = $content -replace "canonical: '/einmaleins/einmaleins/$num'", "canonical: '/einmaleins/$num'"
        
        # Write back
        $content | Set-Content $filePath -Encoding UTF8 -NoNewline
        
        Write-Host "Translated: $num" -ForegroundColor Green
    } else {
        Write-Host "Not found: $num" -ForegroundColor Yellow
    }
}

Write-Host "`nCompleted translation for numbers 21-100!" -ForegroundColor Cyan
