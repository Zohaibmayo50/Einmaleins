# Translation script for all tabla pages
$pages = Get-ChildItem -Path "app/tabla" -Recurse -Filter "page.tsx"
$translatedCount = 0

foreach ($page in $pages) {
    $content = Get-Content $page.FullName -Raw -Encoding UTF8
    $originalContent = $content
    
    # Schema translations
    $content = $content -replace '"name": "(\d+) Çarpım Tablosu"', '"name": "Tabla del $1"'
    $content = $content -replace '"name": "(\d+) Çarpım Tablosu - ([^"]+)"', '"name": "Tabla del $1 - $2"'
    $content = $content -replace '(\d+) çarpım tablosu ile çarpma becerileri\.', 'Habilidades de multiplicación con la tabla del $1.'
    $content = $content -replace '(\d+) ile çarpma', 'Multiplicar por $1'
    $content = $content -replace '(\d+) çarpım tablosu', 'tabla de multiplicar del $1'
    $content = $content -replace '(\d+)-(\d+) Çarpım Tablosu', 'Tabla de Multiplicar $1-$2'
    
    # Metadata translations
    $content = $content -replace "title: '(\d+) Çarpım Tablosu - Kolay Öğrenme Yöntemleri'", "title: 'Tabla del `$1 - Métodos Fáciles de Aprendizaje'"
    $content = $content -replace "title: '(\d+) Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri'", "title: 'Tabla del `$1 - Juegos Divertidos y Ejercicios Prácticos'"
    $content = $content -replace "title: '(\d+) Çarpım Tablosu - ([^']+)'", "title: 'Tabla del `$1 - `$2'"
    
    # Description translations
    $content = $content -replace '(\d+) çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin\. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri\.', 'Aprende la tabla del $1 con juegos divertidos y ejercicios interactivos. Ayudas visuales para niños, consejos prácticos y técnicas fáciles de memorización.'
    $content = $content -replace '(\d+) çarpım tablosunu eğlenceli oyunlar, interaktif alıştırmalar ve yazdırılabilir çalışma kağıtları ile öğrenin\. Ücretsiz pratik araçları keşfedin\.', 'Aprende la tabla del $1 con juegos divertidos, ejercicios interactivos y hojas de trabajo imprimibles. Descubre herramientas de práctica gratuitas.'
    $content = $content -replace '(\d+) çarpım tablosunu öğrenmek için eğlenceli ve etkili yöntemler\. Görsel araçlar ve pratik ipuçlarıyla (\d+) tablosunda ustalaşın\.', 'Métodos divertidos y efectivos para aprender la tabla del $1. Domina la tabla del $2 con herramientas visuales y consejos prácticos.'
    
    # Keywords translations
    $content = $content -replace "keywords: '(\d+) çarpım tablosu, ([^']+) çarpım tablosu, (\d+) ile çarpma, çarpım tablosu öğrenme, matematik oyunları'", "keywords: 'tabla del `$1, tabla de multiplicar del `$1, multiplicar por `$3, aprendizaje de tablas de multiplicar, juegos de matemáticas'"
    $content = $content -replace "keywords: '(\d+) çarpım tablosu, (\d+) tablosu, çarpım tablosu (\d+), matematik, çarpma işlemi'", "keywords: 'tabla del `$1, tabla de multiplicar del `$1, multiplicación, matemáticas, operación de multiplicación'"
    
    # Common Turkish words
    $content = $content -replace 'Öğrenme Kaynağı', 'Recurso de Aprendizaje'
    $content = $content -replace 'çarpma becerileri', 'habilidades de multiplicación'
    $content = $content -replace 'matematik oyunları', 'juegos de matemáticas'
    $content = $content -replace 'çarpma alıştırmaları', 'ejercicios de multiplicación'
    
    # Save if modified
    if ($content -ne $originalContent) {
        Set-Content -Path $page.FullName -Value $content -Encoding UTF8 -NoNewline
        $translatedCount++
    }
}

Write-Host "Translated $translatedCount files"
