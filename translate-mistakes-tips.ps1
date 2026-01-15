# Translate Common Mistakes and Tips sections to German
$ErrorActionPreference = "Stop"
$file = "C:\Users\Zohaib Meo\Desktop\Einmaleins\app\components\NumberPage.tsx"

Write-Host "Loading file..."
$content = Get-Content $file -Raw -Encoding UTF8

Write-Host "Translating tips section..."

# Tips - Basic phrases
$content = $content -replace 'Di cada multiplicación', 'Sage jede Multiplikation'
$content = $content -replace 'Practica escribir', 'Übe das Schreiben'
$content = $content -replace 'una vez al día durante una semana', 'einmal täglich für eine Woche'
$content = $content -replace 'Busca el patrón:', 'Suche das Muster:'
$content = $content -replace 'la respuesta siempre es el mismo número que el segundo número', 'die Antwort ist immer dieselbe Zahl wie die zweite Zahl'
$content = $content -replace 'Usa tarjetas didácticas', 'Nutze Lernkarten'
$content = $content -replace 'aunque esta tabla generalmente se aprende muy rápido', 'obwohl diese Tabelle normalerweise sehr schnell gelernt wird'
$content = $content -replace 'Cuenta de dos en dos mientras caminas o subes escaleras:', 'Zähle in Zweierschritten beim Gehen oder Treppensteigen:'
$content = $content -replace 'Usa tus dedos:', 'Nutze deine Finger:'
$content = $content -replace 'sostén dedos en pares y cuenta de dos en dos', 'halte Finger in Paaren und zähle in Zweierschritten'
$content = $content -replace 'Practica duplicar números en tu cabeza durante el día', 'Übe das Verdoppeln von Zahlen im Kopf während des Tages'
$content = $content -replace 'Dílo en voz alta:', 'Sage es laut:'
$content = $content -replace 'es 5 más 5, lo que hace', 'ist 5 plus 5, was'

# Tips - Common patterns
$content = $content -replace 'Cuenta rítmicamente de tres en tres:', 'Zähle rhythmisch in Dreierschritten:'
$content = $content -replace 'sostén dedos en grupos de 3', 'halte Finger in 3er-Gruppen'
$content = $content -replace 'para verificar tus respuestas', 'um deine Antworten zu überprüfen'
$content = $content -replace 'repite 3-6-9', 'wiederholt 3-6-9'
$content = $content -replace 'Practica 5-10 minutos diarios en lugar de una sesión larga', 'Übe täglich 5-10 Minuten statt einer langen Sitzung'
$content = $content -replace 'Aprende primero la tabla del 2', 'Lerne zuerst die 2er-Tabelle'
$content = $content -replace 'luego duplica cada respuesta para obtener los 4s', 'dann verdopple jede Antwort um die 4er zu erhalten'
$content = $content -replace 'Cuenta de cuatro en cuatro:', 'Zähle in Viererschritten:'
$content = $content -replace 'Usa objetos en grupos de 4 para visualizar', 'Nutze Objekte in 4er-Gruppen zur Visualisierung'
$content = $content -replace 'patas de silla, ruedas de auto', 'Stuhlbeine, Autoräder'
$content = $content -replace 'Practica por separado los más difíciles', 'Übe die schwierigsten separat'

# Tips - Table 5-7
$content = $content -replace 'cada dedo representa 5', 'jeder Finger steht für 5'
$content = $content -replace 'Mira un reloj y cuenta en intervalos de 5 minutos', 'Schau auf eine Uhr und zähle in 5-Minuten-Intervallen'
$content = $content -replace 'Practica con dinero:', 'Übe mit Geld:'
$content = $content -replace 'cuenta monedas de 5 centavos', 'zähle 5-Cent-Münzen'
$content = $content -replace 'multiplicadores pares', 'gerade Multiplikatoren'
$content = $content -replace 'impares en 5', 'ungerade auf 5'
$content = $content -replace 'Memoriza la tabla del 3', 'Lerne die 3er-Tabelle auswendig'
$content = $content -replace 'para encontrar los 6s', 'um die 6er zu finden'
$content = $content -replace 'Estrategia de la caja de huevos:', 'Eierkarton-Strategie:'
$content = $content -replace 'cuenta de seis en seis', 'zähle in Sechserschritten'
$content = $content -replace 'Enfócate en los pares difíciles:', 'Konzentriere dich auf die schwierigen Paare:'
$content = $content -replace 'estudia (.+) por separado', 'übe $1 separat'
$content = $content -replace 'Memoriza el patrón de unidades:', 'Lerne das Einer-Muster auswendig:'
$content = $content -replace 'y repite', 'und wiederhole'
$content = $content -replace 'ya que 6 es múltiplo de ambos', 'da 6 ein Vielfaches von beiden ist'

# Tips - Table 7-9
$content = $content -replace 'Memoriza el par más difícil:', 'Lerne das schwierigste Paar auswendig:'
$content = $content -replace 'rima ', 'reimt sich '
$content = $content -replace "'cinco seis, siete ocho'", "'fünf sechs, sieben acht'"
$content = $content -replace 'Conéctalo con los días de la semana:', 'Verbinde es mit den Wochentagen:'
$content = $content -replace 'Memoriza especialmente', 'Lerne besonders'
$content = $content -replace 'calcula otros desde ahí', 'berechne andere davon ausgehend'
$content = $content -replace 'Truco de dedos:', 'Finger-Trick:'
$content = $content -replace 'Cuenta (\d+) dedos desde la izquierda', 'Zähle $1 Finger von links'
$content = $content -replace 'los restantes son unidades', 'die übrigen sind Einer'
$content = $content -replace 'los contados son decenas', 'die gezählten sind Zehner'
$content = $content -replace '¡Solo practica 3-4 hechos reales al día\. El 7 requiere paciencia!', 'Übe nur 3-4 echte Aufgaben pro Tag. Die 7 erfordert Geduld!'
$content = $content -replace 'Memoriza la tabla del 4', 'Lerne die 4er-Tabelle auswendig'
$content = $content -replace 'para encontrar los 8s', 'um die 8er zu finden'
$content = $content -replace "'ocho ocho sesenta y cuatro'", "'acht acht vierundsechzig'"
$content = $content -replace 'Cuenta de ocho en ocho:', 'Zähle in Achterschritten:'
$content = $content -replace 'Duplica el número', 'Verdopple die Zahl'
$content = $content -replace 'luego otra vez', 'dann nochmal'
$content = $content -replace 'Las unidades son siempre pares y descienden:', 'Die Einer sind immer gerade und absteigend:'

# Tips - Table 9-10
$content = $content -replace 'Aprende el truco de los dedos:', 'Lerne den Finger-Trick:'
$content = $content -replace 'usa tus 10 dedos para mostrar la tabla del 9', 'nutze deine 10 Finger um die 9er-Tabelle zu zeigen'
$content = $content -replace 'Usa la regla de suma de dígitos:', 'Nutze die Quersummen-Regel:'
$content = $content -replace 'suma los dígitos de la respuesta, siempre da 9', 'addiere die Ziffern der Antwort, ergibt immer 9'
$content = $content -replace 'Resta desde 10:', 'Subtrahiere von 10:'
$content = $content -replace 'Patrón de decenas:', 'Zehner-Muster:'
$content = $content -replace 'el dígito de las decenas siempre es n-1', 'die Ziffer der Zehner ist immer n-1'
$content = $content -replace '¡La regla más fácil:', 'Die einfachste Regel:'
$content = $content -replace 'Solo', 'Einfach nur'
$content = $content -replace 'Cuenta de diez en diez:', 'Zähle in Zehnerschritten:'
$content = $content -replace 'Entiende la relación de valor posicional:', 'Verstehe die Stellenwert-Beziehung:'
$content = $content -replace 'multiplicar por 10 desplaza un dígito a la izquierda', 'Multiplikation mit 10 verschiebt eine Ziffer nach links'
$content = $content -replace 'Practica con números grandes:', 'Übe mit großen Zahlen:'
$content = $content -replace 'Usa esta tabla para verificar otras tablas', 'Nutze diese Tabelle um andere Tabellen zu überprüfen'

# Tips - Table 11-15
$content = $content -replace 'Memoriza el patrón de dígitos dobles:', 'Lerne das Doppelziffern-Muster auswendig:'
$content = $content -replace 'Practica el truco de suma de dígitos:', 'Übe den Quersummen-Trick:'
$content = $content -replace 'Crea canción o rima:', 'Erstelle ein Lied oder Reim:'
$content = $content -replace "'Once por cinco, cincuenta y cinco'", "'Elf mal fünf, fünfundfünfzig'"
$content = $content -replace 'Encuentra un múltiplo de 11 en la vida real cada día', 'Finde täglich ein Vielfaches von 11 im echten Leben'
$content = $content -replace 'Practica contando docenas:', 'Übe Dutzende zu zählen:'
$content = $content -replace 'cuenta cajas de huevos', 'zähle Eierschachteln'
$content = $content -replace 'Calcula 12 usando tabla del 3 oder 4:', 'Berechne 12 mit der 3er oder 4er-Tabelle:'
$content = $content -replace 'Usa el reloj:', 'Nutze die Uhr:'
$content = $content -replace 'Usa 12 en vida diaria:', 'Nutze 12 im Alltag:'
$content = $content -replace 'Monate, horas, docenas', 'Monate, Stunden, Dutzende'
$content = $content -replace 'Usa siempre la 10\+3 Strategie:', 'Nutze immer die 10+3 Strategie:'
$content = $content -replace 'Convierte la tabla del 13 en canción o encuentra un ritmo', 'Verwandle die 13er-Tabelle in ein Lied oder finde einen Rhythmus'
$content = $content -replace 'Enfócate en los pares más difíciles:', 'Konzentriere dich auf die schwierigsten Paare:'
$content = $content -replace 'Practica 2-3 múltiplos diferentes de (\d+) cada día', 'Übe täglich 2-3 verschiedene Vielfache von $1'
$content = $content -replace 'no todos a la vez', 'nicht alle auf einmal'
$content = $content -replace 'Trabaja hacia atrás:', 'Arbeite rückwärts:'
$content = $content -replace 'resta (\d+) desde (\d+)', 'subtrahiere $1 von $2'

# Tips - Table 14-21
$content = $content -replace 'Memoriza la tabla del 7', 'Lerne die 7er-Tabelle auswendig'
$content = $content -replace 'Usa un calendario bisemanal:', 'Nutze einen zweiwöchigen Kalender:'
$content = $content -replace 'períodos de 14 días', '14-Tage-Zeiträume'
$content = $content -replace 'Usa 14 para verificar la tabla del 7:', 'Nutze 14 um die 7er-Tabelle zu überprüfen:'
$content = $content -replace 'Memoriza los múltiplos más útiles de (\d+):', 'Lerne die nützlichsten Vielfachen von $1 auswendig:'
$content = $content -replace 'Cuenta de (\d+) en (\d+):', 'Zähle in $1er-Schritten:'
$content = $content -replace 'Busca múltiplos de (\d+) en la vida real:', 'Suche Vielfache von $1 im echten Leben:'
$content = $content -replace 'Practica los múltiplos más difíciles:', 'Übe die schwierigsten Vielfachen:'
$content = $content -replace 'Practica los múltiplos más difíciles de (\d+):', 'Übe die schwierigsten Vielfachen von $1:'

Write-Host "Saving file..."
[IO.File]::WriteAllText($file, $content, [Text.Encoding]::UTF8)

Write-Host "Translation complete!"
Write-Host "Common mistakes section translated"
Write-Host "Tips section translated"
