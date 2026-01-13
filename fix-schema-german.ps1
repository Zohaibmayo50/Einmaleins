# Fix Schema.org metadata to be 100% German
# This script fixes all Spanish and Turkish text in tabla page schemas

Write-Host "Fixing Schema.org metadata in all tabla pages..." -ForegroundColor Green

$fixedCount = 0
$files = Get-ChildItem "app/tabla/*/page.tsx" -Recurse

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    
    # Extract number from path
    $number = $file.Directory.Name
    
    # Fix "Recurso de Aprendizaje" to "Lernressource"
    $content = $content -replace '"name":\s*"(\d+)er-Einmaleins Recurso de Aprendizaje"', '"name": "$1er-Einmaleins Lernressource"'
    
    # Fix "Multiplikation por" and "Multiplicar por" patterns with generic German descriptions
    $content = $content -replace '(\d+)\s*Multiplikation por[^"]*', 'Multiplikation mit $1: Fortgeschrittene Rechenmethoden und Muster'
    $content = $content -replace '(\d+)\s*Multiplicar por[^"]*', 'Multiplikation mit $1: Fortgeschrittene Rechenmethoden und Muster'
    
    # Fix specific Turkish patterns in descriptions
    $turkishReplacements = @{
        'Yedili sayma, hafta günleri ilişkisi ve zorlayıcı ama düzenli desenleri ile 7 tablosunu keşfedin\.' = 'Siebener-Zählung, Wochentagsbeziehungen und herausfordernde aber regelmäßige Muster.'
        'Parmak trikleri, basamak toplama kuralı \(sonuçların rakamları toplamı=9\), 10-1 ilişkisi ve sihirli desenler\.' = 'Fingertricks, Quersummenregel (Summe der Ziffern=9), 10-1-Beziehung und magische Muster.'
        '4 tablosunu ikiye katlama \(4×2=8\), sekizli sayma ve 2ün kuvvetleri \(2³=8\)\.' = 'Verdopplung der 4er-Reihe (4×2=8), Achterzählung und Zweierpotenzen (2³=8).'
        '2 ve 3 tablolarının birleşimi \(2×3\), altışar sayma ve çift sayı desenleri\.' = 'Kombination der 2er- und 3er-Reihe (2×3), Sechserzählung und gerade Zahlenmuster.'
        'Yirmili sayma sistemi, 2×10 ilişkisi, sonu 0 ile biten sayı deseni, para hesaplama \(20 TL\)\.' = 'Zwanzigersystem, 2×10-Beziehung, Zahlenmuster mit Endziffer 0, Geldrechnung.'
        'Asal sayı özellikleri, 20-1 yaklaşım stratejisi, ileri düzey zihinsel matematik\.' = 'Primzahleigenschaften, 20-1-Annäherungsstrategie, fortgeschrittene Kopfrechenmethoden.'
        '9×2 ve 6×3 ilişkisi, çift sayı desenleri, rakamlar toplamı 9\'un katı kuralı\.' = '9×2- und 6×3-Beziehung, gerade Zahlenmuster, Regel der durch 9 teilbaren Quersumme.'
        'Asal sayı özellikleri, 10\+7 ayrıştırma stratejisi, zihinsel matematik teknikleri\.' = 'Primzahleigenschaften, 10+7-Zerlegungsstrategie, Kopfrechentechniken.'
        '4\'ün karesi \(4×4=16\), ikili katlar \(8×2\), çift sayı desenleri ve geometrik uygulamalar\.' = 'Quadrat von 4 (4×4=16), Doppelvielfache (8×2), gerade Zahlenmuster und geometrische Anwendungen.'
        'Çeyrek saat \(15 dakika\), 3×5 ilişkisi, 5\'in son rakam deseni \(5-0-5-0\) ve saat okuma uygulamaları\.' = 'Viertelstunde (15 Minuten), 3×5-Beziehung, Endstellenmuster der 5 (5-0-5-0) und Uhrzeitanwendungen.'
        'İki hafta \(14 gün\), 7×2 ilişkisi, çift sayı desenleri ve günlük hayat uygulamaları\.' = 'Zwei Wochen (14 Tage), 7×2-Beziehung, gerade Zahlenmuster und Alltagsanwendungen.'
        'Asal sayı özellikleri, zihinsel matematik stratejileri, 10\+3 ayrıştırma yöntemi\.' = 'Primzahleigenschaften, Kopfrechenstrategien, 10+3-Zerlegungsmethode.'
        'Düzine kavramı, saat sistemi \(12 saat\), 3×4 ilişkisi ve günlük hayat uygulamaları\.' = 'Dutzendkonzept, 12-Stunden-System, 3×4-Beziehung und Alltagsanwendungen.'
        'Introducción a números de dos dígitos, patrón de repetición de dígitos \(11×2=22, 11×3=33\), estrategias fáciles de memorización\.' = 'Einführung in zweistellige Zahlen, Ziffernwiederholungsmuster (11×2=22, 11×3=33), einfache Einprägungsstrategien.'
        '2 ve 11 tablolarının birleşimi \(2×11=22\), çift sayı desenleri ve ikiye katlama\.' = 'Kombination der 2er- und 11er-Reihe (2×11=22), gerade Zahlenmuster und Verdopplung.'
        'Asal sayı özellikleri ve orta-ileri seviye çarpma pratikleri\.' = 'Primzahleigenschaften und Multiplikationsübungen der mittleren-fortgeschrittenen Stufe.'
        '24 saat gün sistemi, 3×8, 4×6, 2×12 çarpan ilişkileri ve zaman hesaplama\.' = '24-Stunden-Tagessystem, 3×8-, 4×6-, 2×12-Faktorbeziehungen und Zeitberechnung.'
        'Çeyrek \(1/4\) kavramı, yüzde hesaplamaları \(25%=1/4\), para hesaplama ve 25-50-75-00 son rakam deseni\.' = 'Viertelkonzept (1/4), Prozentberechnungen (25%=1/4), Geldrechnung und 25-50-75-00-Endstellenmuster.'
        '2 ve 13 tablolarının birleşimi \(2×13=26\), çift sayı desenleri\.' = 'Kombination der 2er- und 13er-Reihe (2×13=26), gerade Zahlenmuster.'
        '3 küp \(3³=27\), 3×9 ilişkisi ve ileri seviye çarpma becerileri\.' = '3 hoch 3 (3³=27), 3×9-Beziehung und fortgeschrittene Multiplikationsfähigkeiten.'
        '4 hafta=28 gün, 4×7 ilişkisi ve zaman hesaplama becerileri\.' = '4 Wochen=28 Tage, 4×7-Beziehung und Zeitberechnungsfähigkeiten.'
        'Asal sayı özellikleri ve ileri düzey çarpma pratikleri\.' = 'Primzahleigenschaften und fortgeschrittene Multiplikationsübungen.'
        'Yarım saat \(30 dakika\), ay günleri \(~30 gün\), 3×10 ve 5×6 çarpan ilişkileri\.' = 'Halbe Stunde (30 Minuten), Monatstage (~30 Tage), 3×10- und 5×6-Faktorbeziehungen.'
        'Ay günleri \(31 gün\), asal sayı özellikleri ve ileri çarpma becerileri\.' = 'Monatstage (31 Tage), Primzahleigenschaften und fortgeschrittene Multiplikationsfähigkeiten.'
        '2 üssü 5 \(2⁵=32\), ikinin kuvvetleri ve 4×8 ilişkisi\.' = '2 hoch 5 (2⁵=32), Zweierpotenzen und 4×8-Beziehung.'
        '3 ve 11 tablolarının birleşimi \(3×11=33\), çift basamak desenleri\.' = 'Kombination der 3er- und 11er-Reihe (3×11=33), doppelte Stellenmuster.'
        '2×17 ilişkisi, çift sayı özellikleri ve ikiye katlama\.' = '2×17-Beziehung, gerade Zahleneigenschaften und Verdopplung.'
        '5×7 ilişkisi, beşlik ve yedilik sistem bağlantıları, pratik uygulamalar\.' = '5×7-Beziehung, Fünfer- und Siebener-Systemverbindungen, praktische Anwendungen.'
        '6 kare \(6²=36\), 4×9 ilişkisi ve çoklu çarpan kombinasyonları\.' = '6 Quadrat (6²=36), 4×9-Beziehung und Mehrfachfaktorenkombinationen.'
        'Asal sayı özellikleri ve ileri düzey çarpma pratikleri\.' = 'Primzahleigenschaften und fortgeschrittene Multiplikationsübungen.'
        'Yarım \(1/2\) kavramı, yüzde hesaplamaları \(50%=1/2\), 100\'ün yarısı stratejisi ve 5×10 ilişkisi\.' = 'Halbkonzept (1/2), Prozentberechnungen (50%=1/2), Hälfte-von-100-Strategie und 5×10-Beziehung.'
        'Onluk sistemin temeli, yer değeri kavramı, yüzde hesaplamaları \(100%=tam\), sonuna iki sıfır ekleme kuralı\. En kullanışlı çarpım tablolarından biri\.' = 'Grundlage des Zehnersystems, Stellenwertkonzept, Prozentberechnungen (100%=vollständig), Regel zum Anhängen zweier Nullen. Eines der nützlichsten Einmaleins.'
        'Onluk sistem temeli, yer değeri kavramı ve sonuna sıfır ekleme kuralı ile en kolay Tabla de Multiplicar\.' = 'Grundlage des Zehnersystems, Stellenwertkonzept und Null-Anhängen-Regel. Die einfachste Multiplikationstabelle.'
        '3 ve 7 tablolarının birleşimi \(3×7=21\), yirmili sistem ve orta seviye çarpma becerileri\.' = 'Kombination der 3er- und 7er-Reihe (3×7=21), Zwanzigersystem und mittlere Multiplikationsfähigkeiten.'
        'becerileri\.' = 'Multiplikationsfähigkeiten.'
    }
    
    foreach ($pattern in $turkishReplacements.Keys) {
        $content = $content -replace $pattern, $turkishReplacements[$pattern]
    }
    
    # Fix "teaches" field Turkish text
    $content = $content -replace '"teaches":\s*"([^"]+),\s*yedili sayma,\s*hafta günleri kavramı"', '"teaches": "$1, Siebener-Zählung, Wochentagskonzept"'
    $content = $content -replace '"teaches":\s*"([^"]+),\s*altışar sayma,\s*2 ve 3 tablolarının ilişkisi"', '"teaches": "$1, Sechserzählung, Beziehung der 2er- und 3er-Tabelle"'
    $content = $content -replace '"teaches":\s*"([^"]+),\s*yirmili sistem,\s*10 tablosunun katları,\s*para hesaplama"', '"teaches": "$1, Zwanzigersystem, Vielfache der 10er-Tabelle, Geldrechnung"'
    $content = $content -replace '"teaches":\s*"([^"]+),\s*asal sayılar,\s*20-1 çıkarma stratejisi"', '"teaches": "$1, Primzahlen, 20-1-Subtraktionsstrategie"'
    $content = $content -replace '"teaches":\s*"([^"]+),\s*yarım kavramı,\s*yüzde hesaplama,\s*5×10 ilişkisi"', '"teaches": "$1, Halbkonzept, Prozentrechnung, 5×10-Beziehung"'
    $content = $content -replace '"teaches":\s*"([^"]+),\s*çeyrek kavramı,\s*yüzde hesaplama,\s*para hesaplama,\s*5\'in karesi"', '"teaches": "$1, Viertelkonzept, Prozentrechnung, Geldrechnung, Quadrat von 5"'
    $content = $content -replace '"teaches":\s*"([^"]+),\s*yarım saat kavramı,\s*3×10 ve 5×6 ilişkisi"', '"teaches": "$1, Halbe-Stunde-Konzept, 3×10- und 5×6-Beziehung"'
    $content = $content -replace '"teaches":\s*"([^"]+),\s*ay günleri kavramı,\s*asal sayı"', '"teaches": "$1, Monatstageskonzept, Primzahl"'
    $content = $content -replace '"teaches":\s*"([^"]+),\s*2⁵ kavramı,\s*ikinin kuvvetleri"', '"teaches": "$1, 2⁵-Konzept, Zweierpotenzen"'
    $content = $content -replace '"teaches":\s*"([^"]+),\s*4×7 ilişkisi,\s*ay ve hafta kavramı"', '"teaches": "$1, 4×7-Beziehung, Monats- und Wochenkonzept"'
    $content = $content -replace '"teaches":\s*"([^"]+),\s*asal sayı kavramı,\s*ileri çarpma"', '"teaches": "$1, Primzahlkonzept, fortgeschrittene Multiplikation"'
    $content = $content -replace '"teaches":\s*"([^"]+),\s*asal sayı kavramı"', '"teaches": "$1, Primzahlkonzept"'
    $content = $content -replace '"teaches":\s*"([^"]+),\s*6² kavramı,\s*4×9 ve 6×6 ilişkisi"', '"teaches": "$1, 6²-Konzept, 4×9- und 6×6-Beziehung"'
    $content = $content -replace '"teaches":\s*"([^"]+),\s*números de dos dígitos,\s*patrones de dígitos"', '"teaches": "$1, zweistellige Zahlen, Ziffernmuster"'
    
    # Fix WebPage name fields with Turkish
    $content = $content -replace '"name":\s*"(\d+)er-Einmaleins - Yarım ve Yüzde Kavramı"', '"name": "$1er-Einmaleins - Halb- und Prozentkonzept"'
    $content = $content -replace '"name":\s*"(\d+)er-Einmaleins - Çeyrek ve Yüzde Kavramı"', '"name": "$1er-Einmaleins - Viertel- und Prozentkonzept"'
    $content = $content -replace '"name":\s*"(\d+)er-Einmaleins - Yarım Saat Kavramı"', '"name": "$1er-Einmaleins - Halbe-Stunde-Konzept"'
    $content = $content -replace '"name":\s*"(\d+)er-Einmaleins - 3 Küp Kavramı"', '"name": "$1er-Einmaleins - 3-Kubikkonzept"'
    $content = $content -replace '"name":\s*"(\d+)er-Einmaleins - 6 Kare Kavramı"', '"name": "$1er-Einmaleins - 6-Quadratkonzept"'
    $content = $content -replace '"name":\s*"(\d+)er-Einmaleins - Asal Sayı Ustası"', '"name": "$1er-Einmaleins - Primzahlmeister"'
    
    # Fix WebPage description fields with Turkish
    $content = $content -replace '"description":\s*"(\d+)er-Einmaleins ile yarım \(1/2\) kavramı ve yüzde hesaplamalarını öğrenin\. 100\'ün yarısı olarak pratik hesaplama yöntemleri\."', '"description": "Lerne das $1er-Einmaleins mit dem Halbkonzept (1/2) und Prozentberechnungen. Praktische Rechenmethoden als Hälfte von 100."'
    $content = $content -replace '"description":\s*"(\d+)er-Einmaleins ile çeyrek kavramı ve yüzde hesaplamalarını öğrenin\. Para hesaplama için kritik öneme sahip desenleri keşfedin\."', '"description": "Lerne das $1er-Einmaleins mit dem Viertelkonzept und Prozentberechnungen. Entdecke kritische Muster für Geldrechnungen."'
    $content = $content -replace '"description":\s*"(\d+)er-Einmaleins ile yarım saat \(30 dakika\) ve ay kavramlarını öğrenin\. 3×10, 5×6 ilişkileri\."', '"description": "Lerne das $1er-Einmaleins mit halben Stunden (30 Minuten) und Monatskonzepten. 3×10-, 5×6-Beziehungen."'
    $content = $content -replace '"description":\s*"(\d+)er-Einmaleins ile 3³=27 küp kavramını öğrenin\. 3×9 ilişkisi ve geometrik desenler\."', '"description": "Lerne das $1er-Einmaleins mit dem Kubikkonzept 3³=27. 3×9-Beziehung und geometrische Muster."'
    $content = $content -replace '"description":\s*"(\d+)er-Einmaleins ile 4×7 ilişkisini öğrenin\. Hafta günleri ve ay kavramları ile pratik uygulamalar\."', '"description": "Lerne die 4×7-Beziehung im $1er-Einmaleins. Praktische Anwendungen mit Wochentagen und Monatskonzepten."'
    $content = $content -replace '"description":\s*"(\d+)er-Einmaleins ile ay günleri kavramını öğrenin\. Asal sayı özellikleri ve zaman hesaplama\."', '"description": "Lerne das $1er-Einmaleins mit dem Monatstageskonzept. Primzahleigenschaften und Zeitberechnungen."'
    $content = $content -replace '"description":\s*"(\d+)er-Einmaleins ile 2⁵=32 kavramını öğrenin\. İkinin kuvvetleri ve geometrik desenler\."', '"description": "Lerne das $1er-Einmaleins mit dem 2⁵=32-Konzept. Zweierpotenzen und geometrische Muster."'
    $content = $content -replace '"description":\s*"(\d+)er-Einmaleins ile 3×11 ilişkisini öğrenin\. Basamak desenleri ve çarpma stratejileri\."', '"description": "Lerne die 3×11-Beziehung im $1er-Einmaleins. Stellenmuster und Multiplikationsstrategien."'
    $content = $content -replace '"description":\s*"(\d+)er-Einmaleins ile 2×17 ilişkisini öğrenin\. Çift sayı desenleri ve çarpma becerileri\."', '"description": "Lerne die 2×17-Beziehung im $1er-Einmaleins. Gerade Zahlenmuster und Multiplikationsfähigkeiten."'
    $content = $content -replace '"description":\s*"(\d+)er-Einmaleins ile 5×7 ilişkisini öğrenin\. Hafta ve beşlik sistem bağlantıları\."', '"description": "Lerne die 5×7-Beziehung im $1er-Einmaleins. Wochen- und Fünfersystemverbindungen."'
    $content = $content -replace '"description":\s*"(\d+)er-Einmaleins ile 6²=36 kare kavramını öğrenin\. 4×9, 6×6 ilişkileri ve geometrik desenler\."', '"description": "Lerne das $1er-Einmaleins mit dem Quadratkonzept 6²=36. 4×9-, 6×6-Beziehungen und geometrische Muster."'
    $content = $content -replace '"description":\s*"(\d+)er-Einmaleins ile asal sayılarda ustalaşın\. 20-1 stratejisi ve zihinsel matematik teknikleri\."', '"description": "Meistere Primzahlen im $1er-Einmaleins. 20-1-Strategie und Kopfrechentechniken."'
    $content = $content -replace '"description":\s*"(\d+)er-Einmaleins Multiplicar por becerilerinizi güçlendirin\. 9×2 ve 6×3 ilişkileri ile (\d+) Multiplicar por stratejileri\."', '"description": "Stärke deine $1er-Einmaleins-Fähigkeiten. Strategien mit 9×2- und 6×3-Beziehungen."'
    $content = $content -replace '"description":\s*"(\d+)er-Einmaleins ile asal sayı kavramını keşfedin\. Zihinsel matematik ve pratik stratejilerle (\d+) Multiplicar por\."', '"description": "Entdecke das Primzahlkonzept im $1er-Einmaleins. Kopfrechnen und praktische Strategien."'
    $content = $content -replace '"description":\s*"(\d+)er-Einmaleins ile kare sayı kavramını öğrenin\. 4×4=16 ilişkisi ve kolay stratejilerle (\d+) Multiplicar por\."', '"description": "Lerne das Quadratzahlkonzept im $1er-Einmaleins. 4×4=16-Beziehung und einfache Strategien."'
    $content = $content -replace '"description":\s*"(\d+)er-Einmaleins ile çeyrek saat ve zaman okumasını öğrenin\. 3×5 ilişkisi ve pratik stratejilerle (\d+) Multiplicar por\."', '"description": "Lerne Viertelstunden und Zeitablesen im $1er-Einmaleins. 3×5-Beziehung und praktische Strategien."'
    $content = $content -replace '"description":\s*"(\d+)er-Einmaleins ile hafta ve zaman kavramlarını öğrenin\. 7×2 ilişkisi ve pratik stratejilerle (\d+) Multiplicar por\."', '"description": "Lerne Wochen- und Zeitkonzepte im $1er-Einmaleins. 7×2-Beziehung und praktische Strategien."'
    $content = $content -replace '"description":\s*"(\d+)er-Einmaleins ile matematik becerilerinizi geliştirin\. Desenler ve kolay stratejilerle (\d+) Multiplicar por işleminde ustalaşın\."', '"description": "Verbessere deine Mathematikfähigkeiten im $1er-Einmaleins. Meistere Muster und einfache Strategien."'
    $content = $content -replace '"description":\s*"(\d+)er-Einmaleins ile düzine kavramını öğrenin\. Saat sistemi ve günlük hayatta sıkça kullanılan (\d+) tablosunda ustalaşın\."', '"description": "Lerne das Dutzendkonzept im $1er-Einmaleins. Meistere das häufig im Alltag verwendete 12-Stunden-System."'
    $content = $content -replace '"description":\s*"(\d+)er-Einmaleins y transiciona a números de dos dígitos\. Con patrones y estrategias fáciles, Lerne a Multiplikation mit (\d+) Multiplicar por \."', '"description": "Das $1er-Einmaleins: Übergang zu zweistelligen Zahlen. Mit einfachen Mustern und Strategien lernen."'
    $content = $content -replace '"description":\s*"(\d+)er-Einmaleins ile yirmili sayma sistemini öğrenin\. Kolay 0 ekleme stratejisi ve pratik uygulamalar\."', '"description": "Lerne das Zwanzigersystem im $1er-Einmaleins. Einfache Null-Anhängen-Strategie und praktische Anwendungen."'
    $content = $content -replace '"description":\s*"(\d+)er-Einmaleins ile 2 ve 11 tablolarının ilişkisini öğrenin\. Çift sayı desenleri ve kolay çarpma stratejileri\."', '"description": "Lerne die Beziehung der 2er- und 11er-Tabelle im $1er-Einmaleins. Gerade Zahlenmuster und einfache Multiplikationsstrategien."'
    $content = $content -replace '"description":\s*"(\d+)er-Einmaleins ile 24 saat sistemi ve günlük zaman hesaplamalarını öğrenin\. 3×8, 4×6, 2×12 ilişkilerini keşfedin\."', '"description": "Lerne das 24-Stunden-System und tägliche Zeitberechnungen im $1er-Einmaleins. Entdecke 3×8-, 4×6-, 2×12-Beziehungen."'
    $content = $content -replace '"description":\s*"(\d+)er-Einmaleins ile 2×13 ilişkisini ve çift sayı desenlerini öğrenin\. Orta seviye çarpma becerileri\."', '"description": "Lerne die 2×13-Beziehung und gerade Zahlenmuster im $1er-Einmaleins. Multiplikationsfähigkeiten der mittleren Stufe."'
    
    # Fix Spanish patterns
    $content = $content -replace '"name":\s*"Tabla del (\d+) - Multiplicar por 1"', '"name": "$1er-Einmaleins - Grundlagen der Multiplikation"'
    $content = $content -replace '"description":\s*"Aprende el concepto básico de multiplicar por 1\. Propiedad de identidad, patrones y estrategias prácticas para comprender las multiplicaciones por 1\."', '"description": "Lerne die Grundlagen der Multiplikation mit 2. Gerade Zahlen, Verdoppelungsmuster und praktische Strategien."'
    $content = $content -replace '"name":\s*"(\d+)er-Einmaleins - Contar de Seis en Seis"', '"name": "$1er-Einmaleins - Zählen in Sechserschritten"'
    $content = $content -replace '"description":\s*"Lerne a contar de seis en seis con la (\d+)er-Einmaleins\. Descubre las relaciones 2×3 y 3×2 con patrones geométricos\."', '"description": "Lerne in Sechserschritten zu zählen mit dem $1er-Einmaleins. Entdecke die 2×3- und 3×2-Beziehungen mit geometrischen Mustern."'
    $content = $content -replace '"name":\s*"(\d+)er-Einmaleins - Introducción a Números de Dos Dígitos"', '"name": "$1er-Einmaleins - Einführung in zweistellige Zahlen"'
    $content = $content -replace '"name":\s*"11-20 Tabla de Multiplicar"', '"name": "Einmaleins 11-20"'
    
    # Save if changed
    if ($content -ne $originalContent) {
        Set-Content $file.FullName -Value $content -NoNewline
        $fixedCount++
        Write-Host "Fixed: $($file.FullName)" -ForegroundColor Yellow
    }
}

Write-Host "`nCompleted! Fixed $fixedCount files." -ForegroundColor Green
Write-Host "All Spanish and Turkish text has been replaced with German." -ForegroundColor Green
