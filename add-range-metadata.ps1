# Add metadata with canonical URLs to all range pages
$baseDir = "C:\Users\Zohaib Meo\Desktop\tables\app"

$ranges = @(
    @{path="1-10"; title="1-10 Çarpım Tablosu - Temel Çarpma Öğrenme"; desc="1'den 10'a kadar çarpım tablolarını öğrenin. Başlangıç seviyesi için ideal eğitim materyalleri, interaktif alıştırmalar ve pratik ipuçları."},
    @{path="11-20"; title="11-20 Çarpım Tablosu - İki Basamaklı Çarpma"; desc="11'den 20'ye kadar çarpım tablolarını öğrenin. İki basamaklı sayıların çarpımı için interaktif alıştırmalar."},
    @{path="21-30"; title="21-30 Çarpım Tablosu - Orta Seviye Çarpma"; desc="21'den 30'a kadar çarpım tablolarını öğrenin. Orta seviye çarpma becerileri için eğitim kaynakları."},
    @{path="31-40"; title="31-40 Çarpım Tablosu - İleri Seviye Çarpma"; desc="31'den 40'a kadar çarpım tablolarını öğrenin. İleri seviye çarpma becerileri geliştirin."},
    @{path="41-50"; title="41-50 Çarpım Tablosu - Orta-İleri Seviye"; desc="41'den 50'ye kadar çarpım tablolarını öğrenin. Orta-ileri seviye çarpma becerileri."},
    @{path="51-60"; title="51-60 Çarpım Tablosu - İleri Seviye"; desc="51'den 60'a kadar çarpım tablolarını öğrenin. İleri seviye çarpma becerileri."},
    @{path="61-70"; title="61-70 Çarpım Tablosu - İleri Seviye"; desc="61'den 70'e kadar çarpım tablolarını öğrenin. İleri seviye çarpma becerileri."},
    @{path="71-80"; title="71-80 Çarpım Tablosu - İleri Seviye"; desc="71'den 80'e kadar çarpım tablolarını öğrenin. İleri seviye çarpma becerileri."},
    @{path="81-90"; title="81-90 Çarpım Tablosu - Uzman Seviye"; desc="81'den 90'a kadar çarpım tablolarını öğrenin. Uzman seviye çarpma becerileri."},
    @{path="91-100"; title="91-100 Çarpım Tablosu - Uzman Seviye"; desc="91'den 100'e kadar çarpım tablolarını öğrenin. Uzman seviye çarpma becerileri."}
)

foreach ($range in $ranges) {
    $filePath = Join-Path $baseDir "$($range.path)\page.tsx"
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw
        
        # Check if already has metadata
        if ($content -notmatch "export const metadata") {
            $metadata = @"

export const metadata = {
  title: '$($range.title)',
  description: '$($range.desc)',
  keywords: '$($range.path) çarpım tablosu, çarpım tablosu, çarpma işlemi, matematik öğrenme',
  alternates: {
    canonical: '/$($range.path)',
  },
}
"@
            
            # Insert metadata before the export default function
            $content = $content -replace "(export default function)", "$metadata`n`n`$1"
            
            Set-Content -Path $filePath -Value $content -NoNewline
            Write-Host "Added metadata to $($range.path)"
        } else {
            Write-Host "Skipped $($range.path) (already has metadata)"
        }
    }
}

Write-Host "`nDone! Added metadata to all range pages."
