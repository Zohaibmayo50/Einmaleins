# Generate schema additions for remaining number pages
$baseDir = "C:\Users\Zohaib Meo\Desktop\tables\app\sayi"
$remaining = 41..49 + 51..99

function Get-RangeInfo($num) {
    if ($num -le 10) { return @{start=1; end=10; level="Beginner"; age="6-9"} }
    elseif ($num -le 20) { return @{start=11; end=20; level="Beginner"; age="7-10"} }
    elseif ($num -le 30) { return @{start=21; end=30; level="Intermediate"; age="8-11"} }
    elseif ($num -le 40) { return @{start=31; end=40; level="Intermediate"; age="8-11"} }
    elseif ($num -le 50) { return @{start=41; end=50; level="Intermediate"; age="8-11"} }
    elseif ($num -le 60) { return @{start=51; end=60; level="Advanced"; age="9-12"} }
    elseif ($num -le 70) { return @{start=61; end=70; level="Advanced"; age="9-12"} }
    elseif ($num -le 80) { return @{start=71; end=80; level="Advanced"; age="10-12"} }
    elseif ($num -le 90) { return @{start=81; end=90; level="Advanced"; age="10-12"} }
    else { return @{start=91; end=100; level="Advanced"; age="10-12"} }
}

foreach ($num in $remaining) {
    $range = Get-RangeInfo $num
    $filePath = Join-Path $baseDir "$num\page.tsx"
    
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw
        
        # Check if schema already exists
        if ($content -match "const schemaData") {
            Write-Host "Skip $num - already has schema" -ForegroundColor Yellow
            continue
        }
        
        # Generate schema
        $schema = @"
const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://carpimtablosu.com.tr/sayi/$num#webpage", "url": "https://carpimtablosu.com.tr/sayi/$num", "name": "$num Çarpım Tablosu", "description": "$num çarpım tablosu ile çarpma becerileri.", "isPartOf": {"@id": "https://carpimtablosu.com.tr/#website"}, "about": {"@id": "https://carpimtablosu.com.tr/sayi/$num#learningresource"}, "breadcrumb": {"@id": "https://carpimtablosu.com.tr/sayi/$num#breadcrumb"}, "inLanguage": "tr-TR"}, {"@type": "BreadcrumbList", "@id": "https://carpimtablosu.com.tr/sayi/$num#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://carpimtablosu.com.tr/", "name": "Ana Sayfa"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://carpimtablosu.com.tr/$($range.start)-$($range.end)", "name": "$($range.start)-$($range.end) Çarpım Tablosu"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://carpimtablosu.com.tr/sayi/$num", "name": "$num Çarpım Tablosu"}}]}, {"@type": "LearningResource", "@id": "https://carpimtablosu.com.tr/sayi/$num#learningresource", "name": "$num Çarpım Tablosu", "description": "$num ile çarpma", "educationalLevel": "$($range.level)", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "$num çarpım tablosu", "typicalAgeRange": "$($range.age)", "inLanguage": "tr-TR", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://carpimtablosu.com.tr/$($range.start)-$($range.end)#learningresource"}}]}

"@
        
        # Insert schema after imports
        $newContent = $content -replace "(import NumberPage[^\n]+\n)", "`$1`n$schema"
        
        # Update return statement
        $newContent = $newContent -replace "return <NumberPage", "return (<><script type=`"application/ld+json`" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage"
        $newContent = $newContent -replace "(<NumberPage[^/]+/>)", "`$1</>)"
        
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Updated $num" -ForegroundColor Green
    }
}

Write-Host "`nDone! Updated $($remaining.Count) files"
