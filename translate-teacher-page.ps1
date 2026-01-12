# Comprehensive German translation replacement for teacher page

$teacherFile = "c:\Users\Zohaib Meo\Desktop\Einmaleins\app\para-profesores\page.tsx"
$outputFile = "c:\Users\Zohaib Meo\Desktop\Einmaleins\app\fuer-lehrer\page.tsx"

$content = Get-Content $teacherFile -Raw -Encoding UTF8

# Domain and canonical updates
$content = $content -replace "tablas-de-multiplicar\.com", "einmaleins.online"
$content = $content -replace "tablasdemultiplicar\.online", "einmaleins.online"
$content = $content -replace "'es-MX': 'https://einmaleins\.online/para-profesores'", "'de': 'https://einmaleins.online/fuer-lehrer'"
$content = $content -replace "'es': 'https://einmaleins\.online/para-profesores'", "'de': 'https://einmaleins.online/fuer-lehrer'"
$content = $content -replace "canonical: 'https://einmaleins\.online/para-profesores'", "canonical: 'https://einmaleins.online/fuer-lehrer'"
$content = $content -replace "locale: 'es_MX'", "locale: 'de_DE'"
$content = $content -replace "siteName: 'Tablas de Multiplicar'", "siteName: 'Einmaleins'"

# Titles and headings
$content = $content -replace "Guía de Tablas de Multiplicar para Profesores", "Einmaleins-Leitfaden für Lehrer"
$content = $content -replace "Estrategias de Enseñanza", "Unterrichtsstrategien"
$content = $content -replace "Recursos completos para profesores sobre cómo enseñar tablas de multiplicar de manera efectiva\. Incluye estrategias pedagógicas, actividades de aula, instrucción diferenciada y métodos de evaluación\.", "Umfassende Ressourcen für Lehrer zum effektiven Unterrichten des Einmaleins. Enthält pädagogische Strategien, Klassenzimmeraktivitäten, differenzierte Unterrichtsmethoden und Bewertungsmethoden."
$content = $content -replace "enseñar tablas de multiplicar, estrategias pedagógicas, actividades de matemáticas, instrucción diferenciada, recursos para profesores", "Einmaleins unterrichten, pädagogische Strategien, Mathematikaktivitäten, differenzierter Unterricht, Lehrerressourcen"
$content = $content -replace "Estrategias efectivas, actividades de aula y recursos para enseñar(\s+)las tablas de multiplicar de manera que todos los estudiantes puedan dominarlas\.", "Effektive Strategien, Klassenzimmeraktivitäten und Ressourcen zum Unterrichten\$1des Einmaleins, damit alle Schüler es meistern können."

# Section headings
$content = $content -replace "Estrategias de Enseñanza Efectivas", "Effektive Unterrichtsstrategien"
$content = $content -replace "Visualización", "Visualisierung"
$content = $content -replace "Descomposición", "Zerlegung"
$content = $content -replace "Patrones", "Muster"
$content = $content -replace "Aplicaciones Reales", "Reale Anwendungen"
$content = $content -replace "Actividades para el Aula", "Aktivitäten für das Klassenzimmer"
$content = $content -replace "Instrucción Diferenciada", "Differenzierter Unterricht"
$content = $content -replace "Estrategias de Evaluación", "Bewertungsstrategien"
$content = $content -replace "Errores Conceptuales Comunes", "Häufige Fehlvorstellungen"
$content = $content -replace "Consejos y Mejores Prácticas", "Tipps und Best Practices"
$content = $content -replace "Recursos Adicionales", "Zusätzliche Ressourcen"

# Content words
$content = $content -replace "estudiantes", "Schüler"
$content = $content -replace "Estudiantes", "Schüler"
$content = $content -replace "profesores", "Lehrer"
$content = $content -replace "Profesores", "Lehrer"
$content = $content -replace "aula", "Klassenzimmer"
$content = $content -replace "multiplicación", "Multiplikation"

# Links
$content = $content -replace "/para-estudiantes", "/fuer-schueler"
$content = $content -replace "/para-padres", "/fuer-eltern"
$content = $content -replace "Para Estudiantes", "Für Schüler"
$content = $content -replace "Para Padres", "Für Eltern"
$content = $content -replace "Guía de aprendizaje", "Lernleitfaden"
$content = $content -replace "Apoyo en casa", "Unterstützung zu Hause"

# Common phrases
$content = $content -replace "Ver Todas las Tablas", "Alle Reihen ansehen"
$content = $content -replace "¿Necesita Más Ayuda\?", "Benötigen Sie mehr Hilfe?"
$content = $content -replace "Explore nuestras tablas individuales", "Erkunden Sie unsere einzelnen Reihen"
$content = $content -replace "Recursos básicos", "Grundlegende Ressourcen"
$content = $content -replace "Nivel intermedio", "Mittleres Niveau"

# Activity titles
$content = $content -replace "Bingo de Multiplicación", "Multiplikations-Bingo"
$content = $content -replace "Carreras de Multiplicación", "Multiplikations-Rennen"
$content = $content -replace "Dominó de Multiplicación", "Multiplikations-Domino"
$content = $content -replace "Arte con Arreglos", "Kunst mit Anordnungen"
$content = $content -replace "Estaciones de Práctica", "Übungsstationen"
$content = $content -replace "Historias de Multiplicación", "Multiplikations-Geschichten"

# Level descriptions
$content = $content -replace "Principiante", "Anfänger"
$content = $content -replace "Principiantes", "Anfänger"
$content = $content -replace "Intermedio", "Fortgeschrittene"
$content = $content -replace "Intermedios", "Fortgeschrittene"
$content = $content -replace "Avanzado", "Experten"
$content = $content -replace "Avanzados", "Experten"

# Assessment terms
$content = $content -replace "Evaluación Formativa", "Formative Bewertung"
$content = $content -replace "Evaluación Sumativa", "Summative Bewertung"
$content = $content -replace "Seguimiento del Progreso", "Fortschrittsverfolgung"

# Misco recommendations  
$content = $content -replace "Secuencia Sugerida", "Empfohlene Reihenfolge"
$content = $content -replace "Consejos para el Éxito", "Tipps für den Erfolg"

# Save translated content
$content | Set-Content $outputFile -Encoding UTF8 -NoNewline

Write-Host "✅ Teacher page translated and saved to fuer-lehrer/" -ForegroundColor Green
