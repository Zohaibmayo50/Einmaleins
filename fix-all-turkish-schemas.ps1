# Fix all Turkish and corrupted text in tabla schemas

$replacements = @{
    # Turkish words to German
    '�lernen' = 'lernen'
    'hesaplama' = 'Berechnung'
    'hesaplamalari' = 'Berechnungen'
    '�eyrek' = 'Viertel'
    'Y�zde' = 'Prozent'
    'y�zde' = 'Prozent'
    'hafta' = 'Woche'
    'g�nleri' = 'Tage'
    'g�nl�k' = 'täglich'
    'onluk' = 'Dezimal'
    'yer degeri' = 'Stellenwert'
    '�nemli' = 'wichtig'
    '�arpim' = 'Multiplikations'
    'tablolarindan' = 'tabellen'
    'i�in' = 'für'
    'kritik' = 'kritisch'
    '�neme sahip' = 'wichtig'
    'ay' = 'Monat'
    'd�zine' = 'Dutzend'
    'sik�a kullanilan' = 'häufig verwendet'
    'hayatta' = 'Leben'
    '�zellikleri' = 'Eigenschaften'
    'kare' = 'Quadrat'
    'k�p' = 'Kubus'
    '�ift' = 'gerade'
    '�arpma' = 'Multiplikation'
    'Multiplikationsf�higkeiten' = 'Multiplikationsfähigkeiten'
    'stratejilerle' = 'Strategien'
    'pratik' = 'praktisch'
    'zaman' = 'Zeit'
    'okumasi' = 'lesen'
    'Systemi' = 'System'
    'Zeitberechnunglari' = 'Zeitberechnungen'
    'tablosunun katlari' = 'Tabellenvielfache'
    
    # Fix encoding corruption
    '�' = ''
    
    # Fix specific corrupted phrases
    '5�10' = '5×10'
    '6�=36' = '6²=36'
    '3�=27' = '3³=27'
    '4�4=16' = '4×4=16'
    '3�5' = '3×5'
    '7�2' = '7×2'
    '2�17' = '2×17'
    '3�11' = '3×11'
    '25=32' = '2⁵=32'
    '3�10' = '3×10'
    '5�6' = '5×6'
    '4�7' = '4×7'
    '2�13' = '2×13'
    '5�7' = '5×7'
    '4�9' = '4×9'
    '6�6' = '6×6'
    "5'in" = '5er'
    "10'un" = '10er'
    '100''�n yarisi olarak' = 'als Hälfte von 100'
}

# Specific file fixes
$fileSpecificFixes = @{
    '12' = @{
        'description' = '12er-Einmaleins: Dutzend-Konzept lernen. Stundensystem und häufig verwendete 12er-Tabelle meistern.'
    }
    '14' = @{
        'description' = '14er-Einmaleins: Wochen- und Zeitkonzepte lernen. 7×2 Beziehung und praktische Strategien für die Multiplikation mit 14 - Fortgeschrittene Rechenmethoden'
        'teaches' = '14er-Einmaleins, Wochenberechnung, 7er-Tabellenvielfache'
    }
    '15' = @{
        'description' = '15er-Einmaleins: Viertelstunde und Zeitlesen lernen. 3×5 Beziehung und praktische Strategien für die Multiplikation mit 15 - Fortgeschrittene Rechenmethoden'
    }
    '16' = @{
        'description' = '16er-Einmaleins: Quadratzahl-Konzept lernen. 4×4=16 Beziehung und einfache Strategien für die Multiplikation mit 16 - Fortgeschrittene Rechenmethoden'
    }
    '20' = @{
        'description' = '20er-Einmaleins: Zwanziger Zählsystem lernen. Einfache Null-Anhängen-Strategie und praktische Anwendungen.'
    }
    '22' = @{
        'description' = '22er-Einmaleins: 2 und 11 Tabellenbeziehung lernen. Gerade Zahlenmuster und einfache Multiplikationsstrategien.'
    }
    '24' = @{
        'description' = '24er-Einmaleins: 24-Stundensystem und tägliche Zeitberechnungen lernen. 3×8, 4×6, 2×12 Beziehungen entdecken.'
    }
    '25' = @{
        'name' = '25er-Einmaleins - Viertel und Prozent-Konzept'
        'description' = '25er-Einmaleins: Viertel-Konzept und Prozentberechnungen lernen. Für Geldrechnung kritisch wichtige Muster entdecken.'
        'teaches' = '25er-Einmaleins, Viertel-Konzept, Prozentberechnung, Geldrechnung, 5er-Quadrat'
    }
    '26' = @{
        'description' = '26er-Einmaleins: 2×13 Beziehung und gerade Zahlenmuster lernen. Mittelstufe Multiplikationsfähigkeiten.'
    }
    '27' = @{
        'description' = '27er-Einmaleins: 3³=27 Kubus-Konzept lernen. 3×9 Beziehung und geometrische Muster.'
    }
    '28' = @{
        'description' = '28er-Einmaleins: 4×7 Beziehung lernen. Wochentage und Monatskonzepte - praktische Anwendungen.'
    }
    '30' = @{
        'description' = '30er-Einmaleins: Halbe Stunde (30 Minuten) und Monatskonzepte lernen. 3×10, 5×6 Beziehungen.'
    }
    '31' = @{
        'description' = '31er-Einmaleins: Monatstage-Konzept lernen. Primzahl-Eigenschaften und Zeitberechnung.'
    }
    '32' = @{
        'description' = '32er-Einmaleins: 2⁵=32 Konzept lernen. Zweierpotenzen und geometrische Muster.'
    }
    '33' = @{
        'description' = '33er-Einmaleins: 3×11 Beziehung lernen. Stellenmuster und Multiplikationsstrategien.'
    }
    '34' = @{
        'description' = '34er-Einmaleins: 2×17 Beziehung lernen. Gerade Zahlenmuster und Multiplikationsfähigkeiten.'
    }
    '35' = @{
        'description' = '35er-Einmaleins: 5×7 Beziehung lernen. Wochen- und Fünfer-System-Verbindungen.'
    }
    '36' = @{
        'description' = '36er-Einmaleins: 6²=36 Quadrat-Konzept lernen. 4×9, 6×6 Beziehungen und geometrische Muster.'
    }
    '50' = @{
        'name' = '50er-Einmaleins - Hälfte und Prozent-Konzept'
        'description' = '50er-Einmaleins: Hälfte (1/2) Konzept und Prozentberechnungen lernen. Als Hälfte von 100 - praktische Berechnungsmethoden.'
        'teaches' = '50er-Einmaleins, Hälfte-Konzept, Prozentberechnung, 5×10 Beziehung'
    }
    '100' = @{
        'description' = '100er-Einmaleins: Dezimalsystem, Prozentberechnungen und Stellenwert-Konzept meistern. Eine der wichtigsten Multiplikationstabellen.'
        'teaches' = '100er-Einmaleins, Dezimalsystem, Stellenwert, Prozentberechnung, 10er-Quadrat'
    }
}

# Process all tabla files
$files = Get-ChildItem -Path "app\tabla" -Filter "page.tsx" -Recurse

foreach ($file in $files) {
    $number = $file.Directory.Name
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    
    # Apply general replacements
    foreach ($key in $replacements.Keys) {
        $content = $content -replace [regex]::Escape($key), $replacements[$key]
    }
    
    # Apply file-specific fixes
    if ($fileSpecificFixes.ContainsKey($number)) {
        $fixes = $fileSpecificFixes[$number]
        
        if ($fixes.ContainsKey('name')) {
            $content = $content -replace '"name":\s*"[^"]*"', ('"name": "' + $fixes['name'] + '"')
        }
        
        if ($fixes.ContainsKey('description')) {
            # Find and replace the description in the WebPage schema
            $content = $content -replace '("description":\s*")[^"]*(")', ('$1' + $fixes['description'] + '$2')
        }
        
        if ($fixes.ContainsKey('teaches')) {
            $content = $content -replace '("teaches":\s*")[^"]*(")', ('$1' + $fixes['teaches'] + '$2')
        }
    }
    
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
    Write-Host "Fixed: $($file.FullName)" -ForegroundColor Green
}

Write-Host "`nCompleted fixing all Turkish/corrupted schemas!" -ForegroundColor Cyan
