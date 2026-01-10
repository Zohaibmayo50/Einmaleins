# PowerShell script to translate all number pages (1-100) from Turkish to Spanish

$baseDir = "app/sayi"

# Read and process each file 1-100
for ($i = 1; $i -le 100; $i++) {
    $filePath = Join-Path $baseDir $i "page.tsx"
    
    if (Test-Path $filePath) {
        Write-Host "Processing $filePath..."
        
        $content = Get-Content $filePath -Raw -Encoding UTF8
        
        # Basic replacements
        $content = $content.Replace("carpimtablosu.com.tr", "tablasdemultiplicar.online")
        $content = $content.Replace("/sayi/", "/tabla/")
        $content = $content.Replace("tr-TR", "es-MX")
        $content = $content.Replace("Ana Sayfa", "Inicio")
        
        # Save back to file
        Set-Content $filePath -Value $content -Encoding UTF8 -NoNewline
        Write-Host "Translated $filePath"
    } else {
        Write-Host "File not found: $filePath"
    }
}

Write-Host "Translation complete!"
