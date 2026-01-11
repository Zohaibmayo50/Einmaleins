# Translation script for all tabla pages
$pages = Get-ChildItem -Path "app/tabla" -Recurse -Filter "page.tsx"

foreach ($page in $pages) {
    $content = Get-Content $page.FullName -Raw -Encoding UTF8
    
    # Skip if already translated (no Turkish text)
    if ($content -notmatch "Çarpım Tablosu") {
        continue
    }
    
    # Replace Turkish schema and metadata with Spanish
    $content = $content -replace 'Çarpım Tablosu', 'Tabla de Multiplicar'
    $content = $content -replace 'çarpım tablosu ile çarpma becerileri\.', 'con habilidades de multiplicación.'
    $content = $content -replace 'ile çarpma', 'Multiplicar por'
    $content = $content -replace 'çarpım tablosu', 'tabla de multiplicar'
    $content = $content -replace 'Kolay Öğrenme Yöntemleri', 'Métodos Fáciles de Aprendizaje'
    $content = $content -replace 'öğrenmek için eğlenceli ve etkili yöntemler\. Görsel araçlar ve pratik ipuçlarıyla .+ tablosunda ustalaşın\.', 'con métodos divertidos y efectivos. Domina la tabla con herramientas visuales y consejos prácticos.'
    $content = $content -replace 'tablosu, .+ tablosu, çarpım tablosu .+, matematik, çarpma işlemi', 'de multiplicar, tabla del $1, multiplicación, matemáticas'
    $content = $content -replace '(\d+) Çarpım Tablosu - ', 'Tabla del $1 - '
    
    # Save the file
    Set-Content -Path $page.FullName -Value $content -Encoding UTF8 -NoNewline
}

Write-Host "Translation completed for $($pages.Count) files"
