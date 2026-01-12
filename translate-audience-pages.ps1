# Translate and rename audience page folders
# para-estudiantes → fuer-schueler
# para-padres → fuer-eltern  
# para-profesores → fuer-lehrer

Write-Host "Starting translation of audience pages..." -ForegroundColor Cyan

# Step 1: Create new folders
$folders = @(
    @{old = "para-estudiantes"; new = "fuer-schueler"},
    @{old = "para-padres"; new = "fuer-eltern"},
    @{old = "para-profesores"; new = "fuer-lehrer"}
)

foreach ($folder in $folders) {
    $oldPath = "c:\Users\Zohaib Meo\Desktop\Einmaleins\app\$($folder.old)"
    $newPath = "c:\Users\Zohaib Meo\Desktop\Einmaleins\app\$($folder.new)"
    
    # Create new folder
    if (-not (Test-Path $newPath)) {
        New-Item -ItemType Directory -Path $newPath | Out-Null
        Write-Host "Created folder: $($folder.new)" -ForegroundColor Green
    }
    
    # Copy files
    if (Test-Path $oldPath) {
        Copy-Item "$oldPath\*" -Destination $newPath -Recurse -Force
        Write-Host "Copied files from $($folder.old) to $($folder.new)" -ForegroundColor Green
    }
}

# Step 2: Translate fuer-schueler (students) page
Write-Host "`nTranslating fuer-schueler page..." -ForegroundColor Yellow
$studentFile = "c:\Users\Zohaib Meo\Desktop\Einmaleins\app\fuer-schueler\page.tsx"
if (Test-Path $studentFile) {
    $content = Get-Content $studentFile -Raw -Encoding UTF8
    
    # Metadata
    $content = $content -replace "title: 'Guía de Tablas de Multiplicar para Estudiantes.*?'", "title: 'Einmaleins-Leitfaden für Schüler | Schritt für Schritt Lernen'"
    $content = $content -replace "description: 'Guía paso a paso.*?'", "description: 'Schritt-für-Schritt-Anleitung zum einfachen Erlernen des Einmaleins. Visuelle Materialien, praktische Aktivitäten und unterhaltsame Spiele.'"
    $content = $content -replace "keywords: 'aprender tablas.*?'", "keywords: 'einmaleins lernen, mathematik für schüler, einmaleins leitfaden, multiplikation schritt für schritt'"
    $content = $content -replace "canonical: '/para-estudiantes'", "canonical: '/fuer-schueler'"
    
    # Hero section
    $content = $content -replace "¡Aprender las Tablas de Multiplicar es Muy Fácil!", "Das Einmaleins zu lernen ist ganz einfach!"
    $content = $content -replace "¡Avanza a tu propio ritmo.*?paso a paso\.", "Lerne in deinem eigenen Tempo, hab Spaß dabei und werde ein Mathe-Held! Dieser Leitfaden hilft dir, das Einmaleins Schritt für Schritt zu lernen."
    $content = $content -replace "¡Tú también puedes hacerlo!", "Du schaffst das auch!"
    
    # Section headings
    $content = $content -replace "¿Por Qué Debo Aprender las Tablas de Multiplicar\?", "Warum sollte ich das Einmaleins lernen?"
    $content = $content -replace "¡Las tablas de multiplicar son el súper poder del mundo matemático!", "Das Einmaleins ist die Superkraft der Mathematik!"
    $content = $content -replace "Esto es lo que te darán:", "Das bringt es dir:"
    $content = $content -replace "Cálculo Rápido", "Schnelles Rechnen"
    $content = $content -replace "¡Podrás resolver problemas matemáticos mucho más rápido!", "Du kannst Matheaufgaben viel schneller lösen!"
    $content = $content -replace "Uso en la Vida Diaria", "Nutzen im Alltag"
    $content = $content -replace "¡Te será útil al hacer compras, en juegos, en todas partes!", "Nützlich beim Einkaufen, bei Spielen, überall!"
    $content = $content -replace "Aumento de Confianza", "Mehr Selbstvertrauen"
    $content = $content -replace "¡Tu confianza en matemáticas aumentará y tendrás más éxito!", "Dein Selbstvertrauen in Mathe steigt und du wirst erfolgreicher!"
    $content = $content -replace "Poder Cerebral", "Gehirnpower"
    $content = $content -replace "¡Tu memoria se fortalecerá y aprenderás a pensar más rápido!", "Dein Gedächtnis wird stärker und du lernst schneller zu denken!"
    $content = $content -replace "Camino de Aprendizaje Paso a Paso", "Schritt-für-Schritt Lernpfad"
    
    $content | Set-Content $studentFile -Encoding UTF8 -NoNewline
    Write-Host "Translated fuer-schueler page" -ForegroundColor Green
}

# Step 3: Translate fuer-eltern (parents) page  
Write-Host "Translating fuer-eltern page..." -ForegroundColor Yellow
$parentFile = "c:\Users\Zohaib Meo\Desktop\Einmaleins\app\fuer-eltern\page.tsx"
if (Test-Path $parentFile) {
    $content = Get-Content $parentFile -Raw -Encoding UTF8
    
    # Metadata
    $content = $content -replace "title: 'Guía de Tablas de Multiplicar para Padres.*?'", "title: 'Einmaleins-Leitfaden für Eltern | Unterstützen Sie das Lernen zu Hause'"
    $content = $content -replace "description: 'Cómo ayudar.*?'", "description: 'Wie Sie Ihrem Kind helfen können, das Einmaleins zu Hause zu lernen. Praktische Tipps, Lernspiele und Motivationsstrategien.'"
    $content = $content -replace "keywords: 'ayudar a niños.*?'", "keywords: 'kindern beim einmaleins helfen, mathematik zu hause, elternbildung, bildungsaktivitäten'"
    $content = $content -replace "canonical: '/para-padres'", "canonical: '/fuer-eltern'"
    
    # Hero section
    $content = $content -replace "Guía de Tablas de Multiplicar para Padres", "Einmaleins-Leitfaden für Eltern"
    $content = $content -replace "¿Cómo apoyar a tu hijo en el aprendizaje.*?consejos prácticos\.", "Wie können Sie Ihr Kind beim Lernen des Einmaleins unterstützen? Dieser Leitfaden enthält effektive Strategien und praktische Tipps."
    $content = $content -replace "Tu guía para el éxito de tu hijo", "Ihr Leitfaden für den Erfolg Ihres Kindes"
    
    # Section headings
    $content = $content -replace "¿Por Qué es Importante\?", "Warum ist es wichtig?"
    $content = $content -replace "Las tablas de multiplicar son uno.*?confianza en sí mismo\.", "Das Einmaleins ist einer der wichtigsten Schritte in der mathematischen Entwicklung Ihres Kindes. Es ist entscheidend nicht nur für Mathematik, sondern auch für Problemlösungsfähigkeiten, logisches Denken und Selbstvertrauen."
    $content = $content -replace "Base para Matemáticas Avanzadas", "Grundlage für fortgeschrittene Mathematik"
    $content = $content -replace "División, fracciones, álgebra - todos dependen de las tablas de multiplicar\.", "Division, Brüche, Algebra - alles basiert auf dem Einmaleins."
    $content = $content -replace "Confianza Académica", "Akademisches Selbstvertrauen"
    $content = $content -replace "El éxito en las tablas de multiplicar aumenta la confianza general en la escuela\.", "Erfolg beim Einmaleins stärkt das allgemeine Selbstvertrauen in der Schule."
    $content = $content -replace "Habilidades para la Vida", "Lebenskompetenzen"
    $content = $content -replace "Cálculos rápidos son útiles al hacer compras, cocinar y en la vida diaria\.", "Schnelles Rechnen ist beim Einkaufen, Kochen und im Alltag nützlich."
    $content = $content -replace "Estrategias de Apoyo en Casa", "Unterstützungsstrategien zu Hause"
    $content = $content -replace "Hazlo Concreto", "Machen Sie es konkret"
    $content = $content -replace "Enseña las tablas de multiplicar con situaciones de la vida real en lugar de números abstractos\.", "Vermitteln Sie das Einmaleins mit realen Situationen statt abstrakten Zahlen."
    
    $content | Set-Content $parentFile -Encoding UTF8 -NoNewline
    Write-Host "Translated fuer-eltern page" -ForegroundColor Green
}

# Step 4: Translate fuer-lehrer (teachers) page
Write-Host "Translating fuer-lehrer page..." -ForegroundColor Yellow
$teacherFile = "c:\Users\Zohaib Meo\Desktop\Einmaleins\app\fuer-lehrer\page.tsx"
if (Test-Path $teacherFile) {
    $content = Get-Content $teacherFile -Raw -Encoding UTF8
    
    # Metadata
    $content = $content -replace "title: 'Guía de Tablas de Multiplicar para Profesores.*?'", "title: 'Einmaleins-Leitfaden für Lehrer | Unterrichtsstrategien'"
    $content = $content -replace "description: 'Recursos completos para profesores.*?métodos de evaluación\.'", "description: 'Umfassende Ressourcen für Lehrer zum effektiven Unterrichten des Einmaleins. Enthält pädagogische Strategien, Klassenaktivitäten, differenzierten Unterricht und Bewertungsmethoden.'"
    $content = $content -replace "keywords: 'enseñar tablas.*?'", "keywords: 'einmaleins unterrichten, pädagogische strategien, mathematikaktivitäten, differenzierter unterricht, lehrerressourcen'"
    $content = $content -replace "canonical: 'https://tablas-de-multiplicar\.com/para-profesores'", "canonical: 'https://einmaleins.online/fuer-lehrer'"
    $content = $content -replace "'es-MX': 'https://tablas-de-multiplicar\.com/para-profesores'", "'de': 'https://einmaleins.online/fuer-lehrer'"
    $content = $content -replace "'es': 'https://tablas-de-multiplicar\.com/para-profesores'", "'de': 'https://einmaleins.online/fuer-lehrer'"
    $content = $content -replace "title: 'Guía de Tablas de Multiplicar para Profesores'", "title: 'Einmaleins-Leitfaden für Lehrer'"
    $content = $content -replace "description: 'Recursos completos para profesores sobre cómo enseñar tablas de multiplicar de manera efectiva\.'", "description: 'Umfassende Ressourcen für Lehrer zum effektiven Unterrichten des Einmaleins.'"
    $content = $content -replace "url: 'https://tablas-de-multiplicar\.com/para-profesores'", "url: 'https://einmaleins.online/fuer-lehrer'"
    $content = $content -replace "siteName: 'Tablas de Multiplicar'", "siteName: 'Einmaleins'"
    $content = $content -replace "locale: 'es_MX'", "locale: 'de_DE'"
    
    # Hero section
    $content = $content -replace "Guía de Tablas de Multiplicar para Profesores", "Einmaleins-Leitfaden für Lehrer"
    $content = $content -replace "Estrategias efectivas, actividades de aula.*?puedan dominarlas\.", "Effektive Strategien, Klassenaktivitäten und Ressourcen, um das Einmaleins so zu unterrichten, dass alle Schüler es beherrschen können."
    
    # Section headings
    $content = $content -replace "Estrategias de Enseñanza Efectivas", "Effektive Unterrichtsstrategien"
    $content = $content -replace "Visualización", "Visualisierung"
    $content = $content -replace "Use representaciones visuales para ayudar a los estudiantes a comprender la multiplicación como grupos repetidos\.", "Verwenden Sie visuelle Darstellungen, um Schülern zu helfen, Multiplikation als wiederholte Gruppen zu verstehen."
    $content = $content -replace "Arreglos rectangulares", "Rechteckige Anordnungen"
    $content = $content -replace "Modelos de área usando papel cuadriculado", "Flächenmodelle mit Karopapier"
    $content = $content -replace "Diagramas de saltos en la recta numérica", "Sprungdiagramme auf dem Zahlenstrahl"
    $content = $content -replace "Manipulativos concretos", "Konkrete Manipulatoren"
    $content = $content -replace "Descomposición", "Zerlegung"
    $content = $content -replace "Enseñe a los estudiantes a descomponer multiplicaciones difíciles en operaciones más simples\.", "Lehren Sie Schüler, schwierige Multiplikationen in einfachere Operationen zu zerlegen."
    
    $content | Set-Content $teacherFile -Encoding UTF8 -NoNewline
    Write-Host "Translated fuer-lehrer page" -ForegroundColor Green
}

Write-Host "`n✅ Translation complete!" -ForegroundColor Cyan
Write-Host "`nNew folder structure created:" -ForegroundColor Yellow
Write-Host "  - app/fuer-schueler/" -ForegroundColor Green
Write-Host "  - app/fuer-eltern/" -ForegroundColor Green
Write-Host "  - app/fuer-lehrer/" -ForegroundColor Green
Write-Host "`nOld folders can be removed manually once verified." -ForegroundColor Yellow
