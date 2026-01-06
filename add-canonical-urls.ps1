# Add canonical URLs to all range and number pages
$baseDir = "C:\Users\Zohaib Meo\Desktop\tables\app"

# Process range pages
$ranges = @("1-10", "11-20", "21-30", "31-40", "41-50", "51-60", "61-70", "71-80", "81-90", "91-100")
foreach ($range in $ranges) {
    $filePath = Join-Path $baseDir "$range\page.tsx"
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw
        
        # Check if already has alternates.canonical
        if ($content -notmatch "alternates:") {
            # Add alternates.canonical after keywords line
            $content = $content -replace "(keywords:.*?,)\s*\n}", "`$1`n  alternates: {`n    canonical: '/$range',`n  },`n}"
            
            Set-Content -Path $filePath -Value $content -NoNewline
            Write-Host "Updated $range"
        } else {
            Write-Host "Skipped $range (already has canonical)"
        }
    }
}

# Process number pages
for ($num = 1; $num -le 100; $num++) {
    $filePath = Join-Path $baseDir "sayi\$num\page.tsx"
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw
        
        # Check if already has alternates.canonical
        if ($content -notmatch "alternates:") {
            # Add alternates.canonical after keywords line
            $content = $content -replace "(keywords:.*?,)\s*\n}", "`$1`n  alternates: {`n    canonical: '/sayi/$num',`n  },`n}"
            
            Set-Content -Path $filePath -Value $content -NoNewline
            Write-Host "Updated sayi/$num"
        } else {
            Write-Host "Skipped sayi/$num (already has canonical)"
        }
    }
}

Write-Host "`nDone! Added canonical URLs to all pages."
