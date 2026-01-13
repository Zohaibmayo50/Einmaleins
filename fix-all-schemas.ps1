# Fix all schema.org metadata for German indexing
$files = Get-ChildItem -Path "app/tabla" -Filter "page.tsx" -Recurse

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    
    # Fix domain URLs
    $content = $content -replace 'https://tablasdemultiplicar\.online/', 'https://einmaleins.online/'
    
    # Fix language tags
    $content = $content -replace '"inLanguage":\s*"es-MX"', '"inLanguage": "de"'
    
    # Fix breadcrumb labels
    $content = $content -replace '"name":\s*"Inicio"', '"name": "Startseite"'
    $content = $content -replace '"name":\s*"Tablas (\d+-\d+)"', '"name": "Einmaleins $1"'
    
    # Fix encoding issues
    $content = $content -replace 'Multiplikationsf�higkeiten', 'Multiplikationsfähigkeiten'
    $content = $content -replace 'Erkl�rungen', 'Erklärungen'
    $content = $content -replace 'Verst�ndnis', 'Verständnis'
    $content = $content -replace '�higkeiten', 'ähigkeiten'
    $content = $content -replace 'F�higkeiten', 'Fähigkeiten'
    $content = $content -replace 'Interactiund', 'Interactive'
    
    # Save with UTF-8 encoding
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
}

Write-Host "Fixed all schema files!" -ForegroundColor Green
