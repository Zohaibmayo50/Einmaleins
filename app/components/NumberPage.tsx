'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Footer from './Footer'
import PracticePreview from './PracticePreview'
import PrintableExercises from './PrintableExercises'
import NumberGames from './NumberGames'

interface NumberPageProps {
  number: number
  rangeStart: number
  rangeEnd: number
}

export default function NumberPage({ number, rangeStart, rangeEnd }: NumberPageProps) {
  const tableRef = useRef<HTMLDivElement>(null)
  
  const colors = [
    'from-blue-500 to-indigo-600',
    'from-purple-500 to-pink-600',
    'from-green-500 to-teal-600',
    'from-orange-500 to-red-600',
    'from-cyan-500 to-blue-600',
  ]
  
  const colorIndex = (number - 1) % colors.length

  // Print function
  const handlePrint = () => {
    if (tableRef.current) {
      const printWindow = window.open('', '', 'width=800,height=600')
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Einmaleins-Tabelle von ${number}</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  padding: 20px;
                  max-width: 600px;
                  margin: 0 auto;
                }
                h1 {
                  text-align: center;
                  color: #1e40af;
                  margin-bottom: 30px;
                }
                .table-item {
                  display: flex;
                  justify-content: space-between;
                  padding: 12px 20px;
                  margin: 8px 0;
                  background: #f0f9ff;
                  border-radius: 8px;
                  font-size: 18px;
                }
                .equation {
                  font-weight: 500;
                }
                .result {
                  font-weight: bold;
                  color: #1e40af;
                }
                @media print {
                  body { padding: 10px; }
                  .table-item { page-break-inside: avoid; }
                }
              </style>
            </head>
            <body>
              <h1>Einmaleins-Tabelle von ${number}</h1>
              ${Array.from({ length: 10 }, (_, i) => `
                <div class="table-item">
                  <span class="equation">${number} × ${i + 1}</span>
                  <span class="result">= ${number * (i + 1)}</span>
                </div>
              `).join('')}
            </body>
          </html>
        `)
        printWindow.document.close()
        printWindow.focus()
        setTimeout(() => {
          printWindow.print()
          printWindow.close()
        }, 250)
      }
    }
  }

  // Download as image function
  const handleDownload = async () => {
    if (tableRef.current) {
      try {
        // Create a canvas to draw the table
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Set canvas size
        canvas.width = 600
        canvas.height = 700
        
        // Background gradient
        const gradient = ctx.createLinearGradient(0, 0, 600, 700)
        const gradients: { [key: number]: [string, string] } = {
          0: ['#3b82f6', '#4f46e5'],
          1: ['#a855f7', '#ec4899'],
          2: ['#10b981', '#14b8a6'],
          3: ['#f97316', '#ef4444'],
          4: ['#06b6d4', '#3b82f6']
        }
        const [color1, color2] = gradients[colorIndex]
        gradient.addColorStop(0, color1)
        gradient.addColorStop(1, color2)
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, 600, 700)

        // Title
        ctx.fillStyle = '#ffffff'
        ctx.font = 'bold 36px Arial'
        ctx.textAlign = 'center'
        ctx.fillText(number + 'er-Einmaleins', 300, 60)

        // Table items
        ctx.font = '24px Arial'
        let y = 120
        for (let i = 1; i <= 10; i++) {
          // Background for each row
          ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
          ctx.beginPath()
          ctx.roundRect(30, y - 30, 540, 50, 10)
          ctx.fill()

          // Text
          ctx.fillStyle = '#ffffff'
          ctx.textAlign = 'left'
          ctx.font = '22px Arial'
          ctx.fillText(number + ' × ' + i, 50, y)
          
          ctx.textAlign = 'right'
          ctx.font = 'bold 26px Arial'
          ctx.fillText('= ' + (number * i), 550, y)
          
          y += 60
        }

        // Convert to blob and download
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.download = number + '-einmaleins-tabelle.png'
            link.click()
            URL.revokeObjectURL(url)
          }
        })
      } catch (error) {
        console.error('Download failed:', error)
      }
    }
  }

  // Number-specific content
  const getNumberMeaning = () => {
    const meanings: { [key: number]: string} = {
      1: "Mit 1 multiplizieren ist ein Spezialfall in der Mathematik. Wenn du eine beliebige Zahl mit 1 multiplizierst, ist das Ergebnis immer diese Zahl selbst. Das nennt man die Identitätseigenschaft der Multiplikation. Stell es dir so vor: 'Wie viele Gruppen von etwas habe ich?' Wenn du nur 1 Gruppe hast, hast du genau das, womit du angefangen hast.",
      2: "Mit 2 multiplizieren bedeutet, eine Zahl zu verdoppeln. Wenn du etwas mit 2 multiplizierst, addierst du es zu sich selbst. Das ist eine der praktischsten Multiplikationsoperationen, weil wir im Alltag häufig Dinge verdoppeln müssen—Schuhpaare zählen, Fahrradräder oder etwas gleichmäßig zwischen zwei Personen aufteilen.",
      3: "Mit 3 multiplizieren bedeutet, eine Zahl dreimal zu nehmen. Du kannst es dir vorstellen, als würdest du dieselbe Zahl dreimal zu sich selbst addieren. Diese Reihe ist wichtig, um Dreiecke, Trios und alles zu verstehen, was in Dreiergruppen kommt.",
      4: "Mit 4 multiplizieren ist wie zweimal verdoppeln. Da 4 = 2 × 2 ist, kannst du eine Zahl verdoppeln und dann das Ergebnis nochmal verdoppeln. Das macht das Lernen der 4er-Reihe einfacher, wenn du die 2er-Reihe schon kennst. Die Zahl 4 kommt häufig in der Geometrie vor (Quadrate haben 4 Seiten) und bei der Zeitmessung (es gibt 4 Viertelstunden).",
      5: "Mit 5 multiplizieren erzeugt eines der schönsten Muster in der Mathematik. Alle Vielfachen von 5 enden auf 0 oder 5, was diese Reihe sehr vorhersagbar macht. Es ist extrem nützlich zum Geld zählen (5-Cent-Münzen, 5-Euro-Scheine) und zum Ablesen der Uhrzeit (5-Minuten-Intervalle).",
      6: "Mit 6 multiplizieren bedeutet, sechs Gruppen einer Zahl zu nehmen. Die 6 ist die erste 'echte' Einmaleinsreihe, weil sie nicht einfach Vielfache von 2 oder 3 ist. Da aber 6 = 2 × 3 ist, kannst du eine Zahl mit 2 und dann mit 3 multiplizieren (oder umgekehrt), um mit 6 zu multiplizieren. Die Zahl 6 kommt häufig in der Natur vor (Bienenwaben-Zellen) und im Alltag (Eierkartons, Würfelseiten).",
      7: "Mit 7 multiplizieren ist normalerweise eine der Reihen, mit denen Schüler am meisten Schwierigkeiten haben, weil 7 eine Primzahl ist und nicht einfach von anderen Reihen abgeleitet werden kann. Trotzdem gibt es schöne Muster in allen Vielfachen der 7, und sie kann mit Übung gelernt werden. Die 7 ist eine wichtige Zahl bei Wochentagen, Kontinenten der Welt und vielen kulturellen Bezügen.",
      8: "Mit 8 multiplizieren ist wie dreimal verdoppeln (8 = 2 × 2 × 2). Verdopple eine Zahl, verdopple das Ergebnis nochmal, und verdopple es noch einmal—dann hast du mit 8 multipliziert. Diese Reihe ist leichter zu lernen, wenn du die 2er- und 4er-Reihe gut kennst. Die 8 ist eine wichtige Zahl in der Geometrie (Oktogone) und Musik (Oktave).",
      9: "Mit 9 multiplizieren hat eines der faszinierendsten Muster in der Mathematik. Wenn du die Ziffern aller Vielfachen von 9 addierst, ist das Ergebnis immer durch 9 teilbar. Außerdem ist die Zehnerstelle von 9 × n immer n-1. Diese Reihe kann auch mit dem Finger-Trick gelernt werden. Da 9 nur 1 weniger als 10 ist, kann sie auch mit der 10er-Reihe berechnet werden.",
      10: "Mit 10 multiplizieren ist eine der einfachsten Einmaleinsreihen. Wenn du eine beliebige Zahl mit 10 multiplizierst, hängst du einfach eine Null ans Ende. Das bildet die Grundlage unseres Dezimalsystems. Das Lernen der Multiplikation mit 10 lehrt Schüler das Konzept des Stellenwerts und wie man mit großen Zahlen arbeitet. Die 10er-Reihe ist ein Bezugspunkt, um alle anderen Einmaleinsreihen zu verstehen.",
      11: "Mit 11 multiplizieren hat eines der interessantesten Muster in der Mathematik. Wenn du einstellige Zahlen mit 11 multiplizierst, ist das Ergebnis diese Zahl zweimal wiederholt (11×3=33, 11×7=77). Beim Multiplizieren von zweistelligen Zahlen mit 11 gibt es auch ein schönes Muster: Du addierst die Ziffern und platzierst sie in der Mitte. Die 11 ist eine Primzahl und hat besondere mathematische Eigenschaften.",
      12: "Mit 12 multiplizieren ist eine der praktischsten Reihen, weil 12 durch viele Zahlen teilbar ist (1, 2, 3, 4, 6, 12). Diese Eigenschaft macht die 12 sehr nützlich im Alltag – es gibt 12 Objekte in einem Dutzend, 12 Stunden auf einer Uhr, 12 Monate in einem Jahr. Da 12 = 3 × 4 = 2 × 6, kannst du diese Reihe auf mehrere Arten lernen.",
      13: "Mit 13 multiplizieren entwickelt die Mustererkennung der Schüler. Die 13 ist eine Primzahl, daher kann sie nicht einfach aus anderen Reihen abgeleitet werden. Es ist jedoch sehr hilfreich, 13 als 10+3 zu denken: Eine Zahl mit 13 multiplizieren bedeutet, sie mit 10 zu multiplizieren und das Ergebnis der Multiplikation mit 3 zu addieren. Die 13 ist eine Zahl mit besonderer Bedeutung in vielen Kulturen.",
      14: "Mit 14 multiplizieren ist das Doppelte der 7er-Reihe. Da 14 = 2 × 7, kannst du, wenn du die 7er-Reihe kennst, jedes Ergebnis verdoppeln, um die 14er-Reihe zu erhalten. Die 14 ist wichtig in der Wochenplanung (2 Wochen = 14 Tage) und zeigt Eigenschaften gerader Zahlen.",
      15: "Mit 15 multiplizieren kombiniert die Vielfachen von 3 und 5. Da 15 = 3 × 5, trägt diese Reihe die Eigenschaften beider Zahlen. Alle Vielfachen von 15 sind sowohl durch 3 als auch durch 5 teilbar. Da 15 Minuten eine Viertelstunde sind, wird es häufig in Zeitberechnungen verwendet.",
      16: "Mit 16 multiplizieren ist die vierte Potenz von 2 (2×2×2×2=16). Das macht es möglich, die 16er-Reihe durch Verdopplungsketten zu lernen. Du kannst 8 verdoppeln, um 16 zu erhalten. In der Informatik ist die 16 eine wichtige Zahl (Hexadezimalsystem) und erscheint auch häufig im Alltag.",
      17: "Mit 17 multiplizieren kann aufgrund ihrer Primzahleigenschaften schwierig sein. Die 17 kann nicht einfach aus anderen Reihen abgeleitet werden. Es erleichtert jedoch die Berechnungen, 17 als 20-3 oder 10+7 zu denken. Das Lernen der 17er-Reihe entwickelt Kopfrechenfähigkeiten und Problemlösungsstrategien.",
      18: "Mit 18 multiplizieren enthält viele Beziehungen. Da 18 = 2 × 9 = 3 × 6, kannst du diese Reihe auf mehrere Arten lernen. Das Verdoppeln der 9er-Reihe oder das Verdreifachen der 6er-Reihe ergibt die 18er-Reihe. Die 18 ist wichtig als Volljährigkeitsalter in vielen Ländern.",
      19: "Mit 19 multiplizieren kann nicht aus anderen Reihen abgeleitet werden, weil 19 eine Primzahl ist. Es ist jedoch sehr praktisch, 19 als 20-1 zu denken: Multipliziere eine Zahl mit 20 und ziehe die Zahl selbst ab. Diese Strategie erleichtert das Kopfrechnen der 19er-Reihe erheblich.",
      20: "Mit 20 multiplizieren ist die natürliche Erweiterung der 10er-Reihe. Wenn du eine beliebige Zahl mit 20 multiplizierst, kannst du sie mit 10 multiplizieren und das Ergebnis verdoppeln. Oder füge einfach eine Null am Ende hinzu und verdopple. Die 20er-Reihe wird ständig in Geldberechnungen (20 Euro) und Messungen (20 Meter, 20 Kilogramm) verwendet.",
      21: "Mit 21 multiplizieren erfordert das Verstehen der Beziehung 3×7. Da 21=3×7, trägt diese Reihe die Eigenschaften der 3er- und 7er-Reihe. Die 21 ist wichtig als gesetzliches Volljährigkeitsalter in vielen Ländern. 21 als 20+1 zu denken erleichtert die Berechnungen: Multipliziere eine Zahl mit 20 und addiere die Zahl selbst.",
      22: "Mit 22 multiplizieren ist das Doppelte von 11 (22=2×11). Wenn du die 11er-Reihe kennst, kannst du jedes Ergebnis verdoppeln, um die 22er-Reihe zu erhalten. Da 22 auch 2×11 ist, zeigt es Eigenschaften gerader Zahlen. Die 22 erscheint häufig im Sport (Fußballmannschaft) und im täglichen Zählen.",
      23: "Mit 23 multiplizieren kann aufgrund ihrer Primzahleigenschaften nicht aus anderen Reihen abgeleitet werden. Es erleichtert jedoch die Berechnungen, 23 als 20+3 oder 25-2 zu denken. Die 23 ist eine wichtige Zahl in der Biologie (Anzahl der menschlichen Chromosomenpaare). Das Lernen der 23er-Reihe stärkt die Kopfrechenfähigkeiten.",
      24: "Mit 24 multiplizieren ist eine der vielseitigsten Reihen. Da 24=2×12=3×8=4×6, kann sie auf viele verschiedene Arten berechnet werden. Aufgrund der Tag-Stunden-Beziehung (24 Stunden) ist es eine grundlegende Zahl in Zeitberechnungen. Die 24 sind auch 2 Dutzend und werden häufig beim Verpacken und Gruppieren verwendet.",
      25: "Mit 25 multiplizieren nutzt die Beziehung 5×5 (5²). Da 25 das Quadrat von 5 ist, hat es sehr besondere mathematische Eigenschaften. Es ist wichtig in Geldberechnungen (25 Cent sind ein Viertel). Alle Vielfachen von 25 enden auf 25, 50, 75, 00 – ein sehr regelmäßiges Muster.",
      26: "Mit 26 multiplizieren ist das Doppelte von 13 (26=2×13). Wenn du die 13er-Reihe kennst, kannst du jedes Ergebnis verdoppeln, um die 26er-Reihe zu erhalten. Die 26 ist die Anzahl der Buchstaben im englischen Alphabet. 26 als 25+1 oder 30-4 zu denken erleichtert die Berechnungen.",
      27: "Mit 27 multiplizieren ist die dritte Potenz von 3 (27=3³=3×3×3). Diese besondere Beziehung macht die 27 wichtig in Mathematik und Geometrie. Da 27=3×9, kann sie mithilfe der 3er- oder 9er-Reihe berechnet werden. 27 als 30-3 zu denken erleichtert das Kopfrechnen.",
      28: "Mit 28 multiplizieren nutzt die Beziehung 4×7. Da 28=4×7=2×14, kann sie auf mehrere Arten gelernt werden. 28 Tage ist die Anzahl der Tage im Februar (wenn es kein Schaltjahr ist). Die 28 ist auch eine vollkommene Zahl (die Summe ihrer Teiler ist gleich sich selbst: 1+2+4+7+14=28).",
      29: "Mit 29 multiplizieren erfordert besondere Strategien, da es eine Primzahl ist. Die praktischste Methode ist, 29 als 30-1 zu denken: Multipliziere eine Zahl mit 30 und ziehe die Zahl selbst ab. 29 Tage ist die Anzahl der Tage im Februar in Schaltjahren. Das Lernen der 29er-Reihe entwickelt Problemlösungsfähigkeiten.",
      30: "Mit 30 multiplizieren nutzt die Beziehung 10×3. Um eine Zahl mit 30 zu multiplizieren, kannst du sie mit 10 multiplizieren und dann das Ergebnis mit 3 multiplizieren. 30 Tage ist die Anzahl der Tage in vielen Monaten (April, Juni, September, November). Die 30 ist auch eine halbe Stunde (30 Minuten). Die 30er-Reihe wird häufig in Prozentberechnungen verwendet (30% Rabatt).",
      31: "Mit 31 multiplizieren erfordert besondere Strategien aufgrund ihrer Primzahleigenschaften. Die praktischste Methode ist, 31 als 30+1 zu denken: Multipliziere eine Zahl mit 30 und addiere die Zahl selbst. 31 Tage ist die maximale Anzahl von Tagen in vielen Monaten (Januar, März, Mai, Juli, August, Oktober, Dezember). Das Lernen der 31er-Reihe entwickelt Kopfrechenfähigkeiten mit großen Zahlen.",
      32: "Mit 32 multiplizieren ist die fünfte Potenz von 2 (2⁵=2×2×2×2×2=32). Das macht es möglich, die 32 durch Verdopplungsketten zu lernen. Du kannst 16 verdoppeln, um 32 zu erhalten. 32 Grad Fahrenheit ist der Gefrierpunkt von Wasser. In der Informatik sind 32-Bit-Systeme verbreitet. Die Beziehungen 32=4×8=2×16 bieten verschiedene Rechenmethoden.",
      33: "Mit 33 multiplizieren nutzt die Beziehung 3×11. Wenn du die 11er-Reihe kennst, kannst du sie verdreifachen, oder wenn du die 3er-Reihe kennst, kannst du sie mit 11 multiplizieren, um die 33er-Reihe zu finden. Die 33 ist die größte zweistellige Schnapszahl (Wiederholung derselben Ziffern). Dass alle Ziffern der 33 gleich sind, erzeugt interessante Muster.",
      34: "Mit 34 multiplizieren ist das Doppelte von 17 (34=2×17). Wenn du die 17er-Reihe kennst, kannst du jedes Ergebnis verdoppeln, um die 34er-Reihe zu erhalten. Die Summe der Ziffern von 34 ist 7 (3+4=7), was zu Mustern führt, die mit der 7 verbunden sind. 34 als 35-1 oder 30+4 zu denken erleichtert die Berechnungen.",
      35: "Mit 35 multiplizieren nutzt die Beziehung 5×7. Wenn beide Reihen bekannt sind, ist das Multiplizieren mit 35 ziemlich einfach. Alle Vielfachen von 35 enden auf 5 oder 0 (wie die Vielfachen von 5). 35 Minuten sind 5 Minuten mehr als eine halbe Stunde. Die Beziehung 35=5×7 kombiniert die Eigenschaften beider Reihen.",
      36: "Mit 36 multiplizieren ist eine der vielseitigsten Reihen. Da 36=6×6=4×9=3×12=2×18, kann sie auf viele verschiedene Arten berechnet werden. Die 36 ist das Quadrat von 6 (6²). Die 36 sind Vielfache eines vollen Dutzends (1 Dutzend = 12, 3 Dutzend = 36). Die 36 hat viele Teiler, was sie sehr nützlich für Brüche macht.",
      37: "Mit 37 multiplizieren erfordert besondere Strategien, da es eine Primzahl ist. 37 als 40-3 oder 35+2 zu denken erleichtert die Berechnungen. Die 37 hat interessante Beziehungen zu Schnapszahlen: 37×3=111. Diese besondere Eigenschaft der 37 kann für einige Rechentricks verwendet werden.",
      38: "Mit 38 multiplizieren ist das Doppelte von 19 (38=2×19). Wenn du die 19er-Reihe kennst, kannst du jedes Ergebnis verdoppeln, um die 38er-Reihe zu erhalten. 38 als 40-2 zu denken erleichtert das Kopfrechnen. 38 Grad Celsius ist leichtes Fieber für die menschliche Körpertemperatur.",
      39: "Mit 39 multiplizieren nutzt die Beziehung 3×13. Da 39=3×13, kann sie berechnet werden, indem man die 13er-Reihe verdreifacht oder die 3er-Reihe mit 13 multipliziert. Die praktischste Methode ist, 39 als 40-1 zu denken. Die 39 ist eine interessante Zahl, die sowohl durch 3 als auch durch 13 teilbar ist.",
      40: "Mit 40 multiplizieren nutzt die Beziehung 4×10. Um eine Zahl mit 40 zu multiplizieren, kannst du sie mit 10 multiplizieren und dann das Ergebnis mit 4 multiplizieren. Oder multipliziere mit 4 und füge eine Null am Ende hinzu. Die 40 wird häufig im Alltag verwendet: 40-Stunden-Arbeitswoche, 40 Jahre gilt als mittleres Alter. Die 40er-Reihe ist sehr regelmäßig, weil sie die 10er mit 4 multipliziert.",
      41: "Mit 41 multiplizieren entwickelt Kopfrechenfähigkeiten aufgrund ihrer Primzahleigenschaften. Die praktischste Methode ist, 41 als 40+1 zu denken: Multipliziere eine Zahl mit 40 und addiere die Zahl selbst. Die 41 ist eine Primzahl und kann nicht einfach aus anderen Reihen abgeleitet werden. Das Lernen der 41er-Reihe erhöht die Fähigkeit, schnell mit großen Zahlen zu rechnen.",
      42: "Mit 42 multiplizieren ist eine der vielseitigsten Reihen. Da 42=6×7=2×21=3×14, kann sie auf mehrere Arten berechnet werden. Die 42 ist berühmt in der Science-Fiction-Kultur als 'Die Antwort auf alles' (Per Anhalter durch die Galaxis). Da sie die 6er- und 7er-Reihe kombiniert, verstärkt sie beide.",
      43: "Mit 43 multiplizieren erfordert besondere Strategien, da es eine Primzahl ist. 43 als 40+3 oder 45-2 zu denken erleichtert die Berechnungen. Die 43 ist eine Primzahl und nur durch 1 und 43 teilbar. Das Lernen der 43er-Reihe entwickelt die Fähigkeit, kreativ mit Zahlen zu denken.",
      44: "Mit 44 multiplizieren ist viermal die 11 (44=4×11). Wenn du die 11er-Reihe kennst, kannst du sie vervierfachen, oder die 4er-Reihe mit 11 multiplizieren, um sie zu berechnen. Die Beziehung 44=2×22 bietet auch eine andere Methode. Die 44 zeigt ein schnapszahlähnliches Muster und hat Eigenschaften gerader Zahlen.",
      45: "Mit 45 multiplizieren nutzt die Beziehung 5×9. Wenn beide Reihen bekannt sind, ist das Multiplizieren mit 45 einfach. 45 Grad ist ein halber rechter Winkel, ein wichtiger Winkel in der Geometrie. 45 Minuten sind drei Viertel einer Stunde (45 Minuten = 0,75 Stunden). Alle Vielfachen von 45 enden auf 5 oder 0.",
      46: "Mit 46 multiplizieren ist das Doppelte von 23 (46=2×23). Wenn du die 23er-Reihe kennst, kannst du jedes Ergebnis verdoppeln, um die 46er-Reihe zu erhalten. 46 als 45+1 oder 50-4 zu denken erleichtert die Berechnungen. Die 46 ist die Gesamtzahl der menschlichen Chromosomen (23 Paare).",
      47: "Mit 47 multiplizieren erfordert mentale Strategien aufgrund ihrer Primzahleigenschaften. Die effektivsten Methoden sind, 47 als 50-3 oder 45+2 zu denken. Die 47 ist eine Primzahl und hat besondere mathematische Eigenschaften. Das Lernen der 47er-Reihe entwickelt die Fähigkeit, komfortabel mit komplexen Zahlen zu arbeiten.",
      48: "Mit 48 multiplizieren hat viele Faktorbeziehungen. Da 48=6×8=4×12=3×16=2×24, kann sie auf mehrere Arten berechnet werden. Da 48 4-mal 12 ist, ist sie nützlich für Dutzendberechnungen (4 Dutzend). 48 Stunden = 2 Tage, wird häufig in Zeitberechnungen gefunden.",
      49: "Mit 49 multiplizieren ist das Quadrat von 7 (49=7×7=7²). Diese besondere Beziehung erfordert perfekte Kenntnis der 7er-Reihe. 49 als 50-1 zu denken erleichtert das Kopfrechnen enorm. Da es eine Quadratzahl ist, ist die 49 wichtig in Geometrie und Flächenberechnungen.",
      50: "Mit 50 multiplizieren nutzt die Beziehung 5×10 und ist eine der einfachsten Reihen. Um eine Zahl mit 50 zu multiplizieren, kannst du sie mit 5 multiplizieren und eine Null am Ende hinzufügen. Oder denke daran als die Hälfte von 100. Die 50 wird häufig verwendet: halbes Jahrhundert und in Prozentberechnungen (50%=1/2).",
      51: "Mit 51 multiplizieren nutzt die Strategie 50+1. Um eine Zahl mit 51 zu multiplizieren, multipliziere sie mit 50 und addiere die Zahl selbst. Die Beziehung 51=3×17 bietet eine alternative Methode. Das Lernen der 51er-Reihe entwickelt die Fähigkeit, mit Zahlen nahe 50 zu rechnen.",
      52: "Mit 52 multiplizieren nutzt die Beziehung 4×13. Es ist die Anzahl der Wochen in einem Jahr (52 Wochen) und die Anzahl der Karten in einem Standard-Kartenspiel (52 Karten). Da 52=2×26, funktioniert auch das Verdoppeln der 26er-Reihe. 52 als 50+2 zu denken erleichtert das Kopfrechnen. Diese Reihe ist sehr nützlich für Zeit- und Kalenderberechnungen.",
      53: "Mit 53 multiplizieren entwickelt Kopfrechenstrategien aufgrund ihrer Primzahleigenschaften. Die praktischsten Methoden sind, 53 als 50+3 oder 55-2 zu denken. Die 53 ist eine Primzahl und nur durch 1 und 53 teilbar. Das Lernen der 53er-Reihe erhöht die Fähigkeit, mit großen Primzahlen zu arbeiten und vertieft das mathematische Denken.",
      54: "Mit 54 multiplizieren ist eine der vielseitigsten Reihen. Da 54=6×9=2×27=3×18, kann sie auf viele verschiedene Arten berechnet werden. Da sie die 6er- und 9er-Reihe kombiniert, verstärkt sie beide. Viele Teiler zu haben macht sie nützlich für Bruchberechnungen.",
      55: "Mit 55 multiplizieren nutzt die Beziehung 5×11. Wenn beide Reihen bekannt sind, ist das Multiplizieren mit 55 einfach. Die Strategie 55=50+5 ist auch sehr praktisch. Die 55 ist die Summe der Zahlen von 1 bis 10 (1+2+3+...+10=55), diese besondere mathematische Beziehung macht sie interessant. Das Muster der 5 (endet auf 5 oder 0) erleichtert die Berechnung.",
      56: "Mit 56 multiplizieren nutzt die Beziehung 7×8. Da sie diese beiden schwierigen Reihen kombiniert, verstärkt sie beide. Die Alternativen 56=4×14=2×28 bieten verschiedene Strategien. Die 56 ist die Gesamtanzahl der Stunden in 7 Tagen mit 8-Stunden-Arbeitstagen (7×8). 56 als 60-4 zu denken erleichtert auch das Kopfrechnen.",
      57: "Mit 57 multiplizieren nutzt die Beziehung 3×19. Die 19er-Reihe zu verdreifachen oder die 3er-Reihe mit 19 zu multiplizieren funktioniert. 57 als 60-3 oder 55+2 zu denken erleichtert die Berechnung. Da 57=3×19, ist sie sowohl durch 3 als auch durch 19 teilbar. Das Lernen der 57er-Reihe entwickelt die Fähigkeit, mit großen mittleren Zahlen zu arbeiten.",
      58: "Mit 58 multiplizieren ist das Doppelte von 29 (58=2×29). Wenn du die 29er-Reihe kennst, kannst du jedes Ergebnis verdoppeln, um die 58er-Reihe zu erhalten. 58 als 60-2 oder 50+8 zu denken erleichtert die Berechnung. Da es eine gerade Zahl ist, sind alle ihre Vielfachen auch gerade. Diese Reihe verstärkt Verdopplungs- und Annäherungsstrategien an runde Zahlen.",
      59: "Mit 59 multiplizieren erfordert besondere Strategien aufgrund ihrer Primzahleigenschaften und Nähe zur 60. Die effektivste Methode ist, 59 als 60-1 zu denken: Multipliziere eine Zahl mit 60 und ziehe die Zahl selbst ab. Die 59 ist eine Primzahl und nur durch 1 und 59 teilbar. Die 59er-Reihe bietet Kontext für Minuten- und Zeitberechnungen (59 Minuten) aufgrund ihrer Nähe zur 60.",
      60: "Mit 60 multiplizieren nutzt die Beziehung 6×10 und ist sehr nützlich. Um eine Zahl mit 60 zu multiplizieren, kannst du sie mit 6 multiplizieren und eine Null am Ende hinzufügen. Die 60 ist die Anzahl der Minuten in einer Stunde, die Anzahl der Sekunden in einer Minute und ein Sechstel der 360° eines Kreises. Es gibt viele Faktorbeziehungen wie 60=2×30=3×20=4×15=5×12. Diese Reihe ist kritisch für Zeitberechnungen.",
      61: "Mit 61 multiplizieren erfordert besondere Strategien aufgrund ihrer Primzahleigenschaften und Nähe zur 60. Die praktischste Methode ist, 61 als 60+1 zu denken: Multipliziere eine Zahl mit 60 und addiere die Zahl selbst. Die 61 ist eine Primzahl und nur durch 1 und 61 teilbar. Das Lernen der 61er-Reihe entwickelt die Fähigkeit zum Kopfrechnen mit Zahlen über 60.",
      62: "Mit 62 multiplizieren ist das Doppelte von 31 (62=2×31). Wenn du die 31er-Reihe kennst, kannst du jedes Ergebnis verdoppeln, um die 62er-Reihe zu erhalten. 62 als 60+2 oder 65-3 zu denken erleichtert die Berechnung. Da es eine gerade Zahl ist, sind alle ihre Vielfachen auch gerade. Diese Reihe ist nützlich für Verdopplungs- und Berechnungen nahe 60.",
      63: "Mit 63 multiplizieren nutzt die Beziehung 7×9. Da sie diese beiden wichtigen Reihen kombiniert, verstärkt sie beide. Die Alternative 63=3×21 bietet eine andere Strategie. 63 als 60+3 oder 65-2 zu denken erleichtert das Kopfrechnen. Die 63 ist sehr vielseitig, weil sie sowohl durch 7 als auch durch 9 teilbar ist.",
      64: "Mit 64 multiplizieren ist eine Potenz von 2 (64=2⁶=8×8). Da die 64-Bit-Architektur in der Informatik verbreitet ist, ist sie im technologischen Zeitalter wichtig. Die Beziehung 64=8² (acht zum Quadrat) ist entscheidend zum Verständnis von Quadratzahlen. 64 als 60+4 oder 65-1 zu denken erleichtert die Berechnung. Es gibt 64 Felder auf einem Schachbrett (8×8).",
      65: "Mit 65 multiplizieren nutzt die Beziehung 5×13. Wenn beide Reihen bekannt sind, ist das Multiplizieren mit 65 einfach. Die 65 wird in vielen Ländern als Rentenalter verwendet. 65 als 60+5 oder 70-5 zu denken erleichtert das Kopfrechnen. Das Muster der 5 (endet auf 5 oder 0) erleichtert die Berechnung.",
      66: "Mit 66 multiplizieren nutzt die Beziehung 6×11 oder die Beziehung 2×33. Da 66=6×11, hat sie schnapszahlähnliche Muster. 66 als 60+6 oder 70-4 zu denken erleichtert die Berechnung. Die 66 ist sowohl durch 6 als auch durch 11 teilbar. Da es eine gerade Zahl ist, sind alle ihre Vielfachen auch gerade.",
      67: "Mit 67 multiplizieren entwickelt Kopfrechenstrategien aufgrund ihrer Primzahleigenschaften. Die praktischsten Methoden sind, 67 als 70-3 oder 65+2 zu denken. Die 67 ist eine Primzahl und nur durch 1 und 67 teilbar. Das Lernen der 67er-Reihe erhöht die Fähigkeit, mit großen Primzahlen zu arbeiten.",
      68: "Mit 68 multiplizieren nutzt die Beziehung 4×17 oder die Beziehung 2×34. Die 17er-Reihe zu vervierfachen oder die 34er-Reihe zu verdoppeln funktioniert. 68 als 70-2 oder 60+8 zu denken erleichtert die Berechnung. Da es eine gerade Zahl ist, sind alle ihre Vielfachen auch gerade. Die 68 ist sowohl durch 4 als auch durch 17 teilbar.",
      69: "Mit 69 multiplizieren nutzt die Beziehung 3×23. Die 23er-Reihe zu verdreifachen oder die 3er-Reihe mit 23 zu multiplizieren funktioniert. Die einfachste Strategie ist, 69 als 70-1 zu denken: Multipliziere eine Zahl mit 70 und ziehe die Zahl selbst ab. Da 69=3×23, ist sie sowohl durch 3 als auch durch 23 teilbar. Diese Reihe ist nützlich für Berechnungen nahe 70.",
      70: "Mit 70 multiplizieren nutzt die Beziehung 7×10 und ist sehr nützlich. Um eine Zahl mit 70 zu multiplizieren, kannst du sie mit 7 multiplizieren und eine Null am Ende hinzufügen. Die 70 wird mit der durchschnittlichen Lebenserwartung assoziiert (zwischen 70-80 in den meisten Ländern). Es gibt alternative Faktorbeziehungen wie 70=2×35=5×14. Diese Reihe verstärkt die 7er-Reihe.",
      71: "Mit 71 multiplizieren entwickelt Kopfrechenstrategien aufgrund ihrer Primzahleigenschaften. Die praktischste Methode ist, 71 als 70+1 zu denken: Multipliziere eine Zahl mit 70 und addiere die Zahl selbst. Die 71 ist eine Primzahl und nur durch 1 und 71 teilbar. Das Lernen der 71er-Reihe entwickelt die Fähigkeit, schnell mit großen Primzahlen zu rechnen.",
      72: "Mit 72 multiplizieren ist eine der vielseitigsten Reihen. Da 72=8×9=6×12=4×18=3×24=2×36, kann sie auf viele verschiedene Arten berechnet werden. Die 72 ist 3-mal die Anzahl der Stunden an einem Tag (72 Stunden = 3 Tage). Viele Teiler zu haben macht sie extrem nützlich für Bruchberechnungen. Die 72 ist 6-mal 12 (6 Dutzend).",
      73: "Mit 73 multiplizieren entwickelt Primzahleigenschaften und Kopfrechenstrategien. Die praktischsten Methoden sind, 73 als 70+3 oder 75-2 zu denken. Die 73 ist eine Primzahl und nur durch 1 und 73 teilbar. Die 73 ist auch die 21. Primzahl und hat interessante mathematische Eigenschaften.",
      74: "Mit 74 multiplizieren nutzt die Beziehung 2×37. Wenn du die 37er-Reihe kennst, kannst du jedes Ergebnis verdoppeln, um die 74er-Reihe zu erhalten. 74 als 70+4 oder 75-1 zu denken erleichtert die Berechnung. Da es eine gerade Zahl ist, sind alle ihre Vielfachen auch gerade. Die 74 ist sowohl durch 2 als auch durch 37 teilbar.",
      75: "Mit 75 multiplizieren nutzt die Beziehungen 3×25=5×15. Die 75 ist drei Viertel von 100 (75%=3/4). Es kann auch als 75=3×5×5 ausgedrückt werden. 75 als 70+5 oder 80-5 zu denken erleichtert das Kopfrechnen. Das Muster der 5 (endet auf 5 oder 0) erleichtert die Berechnung. Sie wird häufig in Prozentberechnungen verwendet (75%=¾).",
      76: "Mit 76 multiplizieren nutzt die Beziehung 4×19 oder die Beziehung 2×38. Die 19er-Reihe zu vervierfachen oder die 38er-Reihe zu verdoppeln funktioniert. 76 als 75+1 oder 80-4 zu denken erleichtert die Berechnung. Da es eine gerade Zahl ist, sind alle ihre Vielfachen auch gerade. Die 76 ist sowohl durch 4 als auch durch 19 teilbar.",
      77: "Mit 77 multiplizieren nutzt die Beziehung 7×11. Wenn beide Reihen bekannt sind, ist das Multiplizieren mit 77 einfach. Die 77 zeigt ein schnapszahlähnliches Muster (Wiederholung der 7en). 77 als 80-3 oder 75+2 zu denken erleichtert die Berechnung. Da 77=7×11, ist sie sowohl durch 7 als auch durch 11 teilbar.",
      78: "Mit 78 multiplizieren nutzt die Beziehungen 2×39=3×26=6×13. Sie kann auf mehrere Arten berechnet werden. 78 als 80-2 oder 75+3 zu denken erleichtert das Kopfrechnen. Da es eine gerade Zahl ist, sind alle ihre Vielfachen auch gerade. Die 78 ist durch 2, 3, 6, 13, 26, 39 teilbar.",
      79: "Mit 79 multiplizieren erfordert besondere Strategien aufgrund ihrer Primzahleigenschaften. Die einfachste Strategie ist, 79 als 80-1 zu denken: Multipliziere eine Zahl mit 80 und ziehe die Zahl selbst ab. Die 79 ist eine Primzahl und nur durch 1 und 79 teilbar. Das Lernen der 79er-Reihe schafft eine perfekte Grundlage für Berechnungen nahe 80.",
      80: "Mit 80 multiplizieren nutzt die Beziehung 8×10 und ist sehr nützlich. Um eine Zahl mit 80 zu multiplizieren, kannst du sie mit 8 multiplizieren und eine Null am Ende hinzufügen. Es gibt alternative Faktorbeziehungen wie 80=2×40=4×20=5×16. Die 80 wird mit der oberen Grenze der durchschnittlichen Lebenserwartung assoziiert (zwischen 70-80 in den meisten Ländern). Diese Reihe verstärkt die 8er-Reihe.",
      81: "Mit 81 multiplizieren ist das Quadrat von 9 (81=9×9=9²). Diese besondere Beziehung erfordert perfekte Kenntnis der 9er-Reihe. Es ist auch interessant, dass 81=3⁴ (die vierte Potenz von 3) ist. 81 als 80+1 zu denken erleichtert das Kopfrechnen. Da 81 eine Quadratzahl ist, ist sie wichtig in Geometrie und Flächenberechnungen.",
      82: "Mit 82 multiplizieren nutzt die Beziehung 2×41. Wenn du die 41er-Reihe kennst, kannst du jedes Ergebnis verdoppeln, um die 82er-Reihe zu erhalten. 82 als 80+2 oder 85-3 zu denken erleichtert die Berechnung. Da es eine gerade Zahl ist, sind alle ihre Vielfachen auch gerade. Die 82 ist sowohl durch 2 als auch durch 41 teilbar.",
      83: "Mit 83 multiplizieren entwickelt Kopfrechenstrategien aufgrund ihrer Primzahleigenschaften. Die praktischsten Methoden sind, 83 als 80+3 oder 85-2 zu denken. Die 83 ist eine Primzahl und nur durch 1 und 83 teilbar. Das Lernen der 83er-Reihe erhöht die Fähigkeit, mit großen Primzahlen zu arbeiten.",
      84: "Mit 84 multiplizieren ist eine der vielseitigsten Reihen. Da 84=7×12=6×14=4×21=3×28=2×42, kann sie auf viele verschiedene Arten berechnet werden. Die 84 ist 12-mal die Anzahl der Stunden in einer Woche, oder 7-mal ein halber Tag von 12 Stunden. Viele Teiler zu haben macht sie nützlich für Bruchberechnungen.",
      85: "Mit 85 multiplizieren nutzt die Beziehung 5×17. Wenn beide Reihen bekannt sind, ist das Multiplizieren mit 85 einfach. Die Strategie 85=80+5 oder 90-5 ist auch sehr praktisch. Das Muster der 5 (endet auf 5 oder 0) erleichtert die Berechnung. Die 85 ist sowohl durch 5 als auch durch 17 teilbar.",
      86: "Mit 86 multiplizieren nutzt die Beziehung 2×43. Wenn du die 43er-Reihe kennst, kannst du jedes Ergebnis verdoppeln, um die 86er-Reihe zu erhalten. 86 als 90-4 oder 85+1 zu denken erleichtert die Berechnung. Da es eine gerade Zahl ist, sind alle ihre Vielfachen auch gerade. Die 86 ist sowohl durch 2 als auch durch 43 teilbar.",
      87: "Mit 87 multiplizieren nutzt die Beziehung 3×29. Die 29er-Reihe zu verdreifachen oder die 3er-Reihe mit 29 zu multiplizieren funktioniert. 87 als 90-3 oder 85+2 zu denken erleichtert die Berechnung. Da 87=3×29, ist sie sowohl durch 3 als auch durch 29 teilbar.",
      88: "Mit 88 multiplizieren nutzt die Beziehung 8×11 oder die Beziehung 4×22. Die 88 ist eine Schnapszahl (Wiederholung der 8en). Sie kann auch als 88=2×44 ausgedrückt werden. 88 als 90-2 oder 80+8 zu denken erleichtert das Kopfrechnen. Da es eine gerade Zahl ist, sind alle ihre Vielfachen auch gerade.",
      89: "Mit 89 multiplizieren erfordert besondere Strategien aufgrund ihrer Primzahleigenschaften. Die einfachste Strategie ist, 89 als 90-1 zu denken: Multipliziere eine Zahl mit 90 und ziehe die Zahl selbst ab. Die 89 ist eine Primzahl und nur durch 1 und 89 teilbar. Das Lernen der 89er-Reihe schafft eine perfekte Grundlage für Berechnungen nahe 90.",
      90: "Mit 90 multiplizieren nutzt die Beziehung 9×10 und ist sehr nützlich. Um eine Zahl mit 90 zu multiplizieren, kannst du sie mit 9 multiplizieren und eine Null am Ende hinzufügen. Es gibt viele Faktorbeziehungen wie 90=2×45=3×30=5×18=6×15. 90 Grad ist ein rechter Winkel, sehr wichtig in der Geometrie. Diese Reihe verstärkt die 9er-Reihe.",
      91: "Mit 91 multiplizieren nutzt die Beziehung 7×13. Wenn beide Reihen bekannt sind, ist das Multiplizieren mit 91 einfach. Dass 91=7×13 ist wichtig, um das Produkt von Primzahlen zu verstehen. 91 als 90+1 zu denken erleichtert das Kopfrechnen. Sie ist sowohl durch 7 als auch durch 13 teilbar.",
      92: "Mit 92 multiplizieren nutzt die Beziehung 4×23 oder die Beziehung 2×46. Die 23er-Reihe zu vervierfachen funktioniert. 92 als 90+2 oder 100-8 zu denken erleichtert die Berechnung. Da es eine gerade Zahl ist, sind alle ihre Vielfachen auch gerade. Die 92 ist sowohl durch 4 als auch durch 23 teilbar.",
      93: "Mit 93 multiplizieren nutzt die Beziehung 3×31. Die 31er-Reihe zu verdreifachen oder die 3er-Reihe mit 31 zu multiplizieren funktioniert. 93 als 90+3 oder 100-7 zu denken erleichtert die Berechnung. Da 93=3×31, ist sie sowohl durch 3 als auch durch 31 teilbar.",
      94: "Mit 94 multiplizieren nutzt die Beziehung 2×47. Wenn du die 47er-Reihe kennst, kannst du jedes Ergebnis verdoppeln, um die 94er-Reihe zu erhalten. 94 als 100-6 oder 90+4 zu denken erleichtert die Berechnung. Da es eine gerade Zahl ist, sind alle ihre Vielfachen auch gerade. Die 94 ist sowohl durch 2 als auch durch 47 teilbar.",
      95: "Mit 95 multiplizieren nutzt die Beziehung 5×19. Wenn beide Reihen bekannt sind, ist das Multiplizieren mit 95 einfach. Die Strategie 95=100-5 ist sehr praktisch. Das Muster der 5 (endet auf 5 oder 0) erleichtert die Berechnung. Die 95 ist sowohl durch 5 als auch durch 19 teilbar. Sie ist nützlich in Prozentberechnungen (95%).",
      96: "Mit 96 multiplizieren ist eine der vielseitigsten Reihen. Da 96=8×12=6×16=4×24=3×32=2×48, kann sie auf viele verschiedene Arten berechnet werden. Dass 96=2⁵×3 ist wichtig in Bezug auf Potenzen von 2. Viele Teiler zu haben macht sie nützlich für Bruchberechnungen.",
      97: "Mit 97 multiplizieren erfordert besondere Strategien aufgrund ihrer Primzahleigenschaften. Die einfachste Strategie ist, 97 als 100-3 zu denken: Multipliziere eine Zahl mit 100 und ziehe 3-mal die Zahl ab. Die 97 ist eine Primzahl und nur durch 1 und 97 teilbar. Als die Primzahl, die der 100 am nächsten ist, erleichtert sie das Kopfrechnen sehr.",
      98: "Mit 98 multiplizieren nutzt die Beziehung 2×49. Wenn du die 49er-Reihe kennst, kannst du jedes Ergebnis verdoppeln, um die 98er-Reihe zu erhalten. Die Beziehung 98=2×7² ist interessant. 98 als 100-2 zu denken ist die einfachste Strategie. Da es eine gerade Zahl ist, sind alle ihre Vielfachen auch gerade.",
      99: "Mit 99 multiplizieren nutzt die Beziehung 9×11. Die 99 ist eine Schnapszahl (Wiederholung der 9en). 99 als 100-1 zu denken ist die einfachste Strategie: Multipliziere eine Zahl mit 100 und ziehe die Zahl selbst ab. Da 99=9×11, ist sie sowohl durch 9 als auch durch 11 teilbar. Es ist eine der einfachsten Reihen für das Kopfrechnen.",
      100: "Mit 100 multiplizieren ist eine der allereinfachsten Reihen. Um eine beliebige Zahl mit 100 zu multiplizieren, füge einfach zwei Nullen am Ende hinzu. Die 100 ist die Grundlage unseres Dezimalsystems und wird ständig in Prozentberechnungen verwendet. Das Verstehen der 100er-Reihe ist grundlegend für das Arbeiten mit größeren Zahlen und das Dezimalsystem."
    }
    return meanings[number] || `Mit ${number} multiplizieren bedeutet, die Zahl ${number} wiederholt zu addieren. Jedes Mal, wenn du multiplizierst, zählst du Gruppen von ${number}.`
  }

  const getWhyImportant = () => {
    const importance: { [key: number]: string } = {
      1: "Die 1er-Einmaleins-Tabelle ist die Grundlage aller Multiplikationsoperationen. Sie lehrt Schüler, dass Zahlen eine Identität haben: Bei Multiplikation mit 1 bleiben sie unverändert. Dieses Konzept ist entscheidend für das Verständnis späterer algebraischer Eigenschaften. Obwohl es einfach erscheint, schafft das Lernen dieser Tabelle Vertrauen und etabliert das Muster, dass Multiplikation geordnet und vorhersehbar ist.",
      2: "Die 2er-Einmaleins-Tabelle ist in der Regel die erste echte Multiplikationstabelle, die Schüler lernen, und das aus gutem Grund. Verdoppeln ist ein natürliches Konzept, dem Kinder täglich begegnen. Das Lernen dieser Tabelle macht Kopfrechnen viel schneller und bereitet Schüler auf gerade Zahlen, Brüche (Hälften) und grundlegende Division vor. Viele Schüler empfinden sie als die einfachste Tabelle, was Vertrauen für schwierigere Tabellen schafft.",
      3: "Die 3er-Einmaleins-Tabelle schließt die Lücke zwischen einfachen und herausfordernden Tabellen. Sie erfordert, dass Schüler über einfaches Verdoppeln hinausgehen und neue Muster erkennen. Diese Tabelle erscheint ständig in realen Kontexten wie Zählen in Dreiergruppen, Verstehen dreieckiger Formen und Arbeiten mit Zeit (drei Perioden pro Tag). Schüler, die die 3er-Tabelle lernen, zeigen, dass sie abstraktes Zählen beherrschen.",
      4: "Das Lernen der 4er-Einmaleins-Tabelle verstärkt das Verständnis der Schüler für gerade Zahlen und geometrisches Denken. Da 4 das Doppelte von 2 ist, können Schüler die 2er-Tabelle als Sprungbrett nutzen, was mathematische Effizienz lehrt. Diese Tabelle ist notwendig zum Verstehen von Quadraten, Flächenberechnungen und Teilungen durch Viertel. Sie wird auch häufig in alltäglichen Situationen wie dem Zählen von Stuhlbeinen oder Autorädern verwendet.",
      5: "Die 5er-Einmaleins-Tabelle ist eine der praktischsten und musterreichsten. Schüler lieben sie, weil jede Antwort auf 0 oder 5 endet, was sie äußerst vorhersehbar macht. Diese Tabelle verbindet sich direkt mit Geld (in Fünfern zählen), Uhrzeiten (5-Minuten-Intervalle) und Messsystemen. Das Lernen der 5er-Tabelle gibt Schülern Vertrauen und zeigt, dass Mathematik schöne, konsistente Muster hat.",
      6: "Das Lernen der 6er-Einmaleins-Tabelle ermöglicht Schülern den Übergang zu komplexeren Multiplikationen. Dass 6 sowohl ein Vielfaches von 2 als auch von 3 ist, zeigt Schülern die distributive Eigenschaft der Multiplikation. Diese Tabelle erscheint ständig im Alltag: Eierkartons zählen, Würfelspiele, Sechserpacks. Das Lernen der 6er-Tabelle gibt Schülern Vertrauen für die Arbeit mit größeren Zahlen.",
      7: "Die 7er-Einmaleins-Tabelle testet wirklich die Gedächtnis- und Mustererkennungsfähigkeiten der Schüler. Da 7 eine Primzahl ist, kann sie nicht einfach von anderen Tabellen abgeleitet werden, was sie zu einer herausfordernden, aber lohnenden Lernerfahrung macht. Das Lernen der 7er-Tabelle gibt Schülern die Möglichkeit, Herausforderungen zu überwinden und neue Strategien zu entwickeln. Sie wird an vielen Stellen verwendet, vom Zählen der Wochentage bis zu Kalenderberechnungen.",
      8: "Das Lernen der 8er-Einmaleins-Tabelle hilft Schülern, Verdopplungsstrategien zu verstärken. Da 8 = 2 × 2 × 2, können Schüler die 8er-Tabelle mithilfe der 2er- und 4er-Tabellen lernen. Diese Tabelle ist wichtig für Flächenberechnungen (8-seitige Figuren), Musiktheorie (Oktaven) und Informatik (8 Bits = 1 Byte). Das Lernen der 8er-Tabelle entwickelt mathematische Denkfähigkeiten.",
      9: "Die 9er-Einmaleins-Tabelle hat eines der faszinierendsten mathematischen Muster. Die Quersummenregel und der Finger-Trick zeigen Schülern die magische Seite der Mathematik. Das Lernen der 9er-Tabelle ist nicht nur Auswendiglernen, es lehrt Mustererkennung und Verständnis mathematischer Beziehungen. Diese Tabelle ist perfekt zum Entwickeln von Kopfrechenfähigkeiten und zum Aufbau mathematischen Vertrauens.",
      10: "Die 10er-Einmaleins-Tabelle ist grundlegend für das Lehren des Stellenwertkonzepts. Wenn Schüler lernen, mit 10 zu multiplizieren, beginnen sie zu verstehen, wie unser Dezimalsystem funktioniert. Diese Tabelle ist vital für Geldberechnungen, Umrechnungen zwischen Maßeinheiten und Arbeiten mit großen Zahlen. Das Lernen der 10er-Tabelle schafft eine solide Grundlage zum Verstehen aller anderen Multiplikationstabellen und verbessert enorm die Kopfrechenfähigkeiten.",
      11: "Die 11er-Einmaleins-Tabelle ist perfekt zur Entwicklung von Mustererkennungsfähigkeiten. Das Wiederholungsmuster, das beim Multiplizieren mit einstelligen Zahlen entsteht (11×4=44), zeigt Schülern die Schönheit der Mathematik. Das Lernen der 11er-Tabelle entwickelt Kopfrechenstrategien und erhöht die Fähigkeit, Zahlenmuster zu erkennen. Diese Tabelle schafft Vertrauen für die Arbeit mit großen Zahlen.",
      12: "Die 12er-Einmaleins-Tabelle ist eine der am häufigsten im Alltag verwendeten. 12 wird in vielen Bereichen genutzt wie Dutzende zählen, Uhrzeiten lesen und Jahresplanung. Dass 12 viele Teiler hat (1,2,3,4,6,12), macht es ideal zum Verstehen von Brüchen und Verhältnissen. Das Lernen dieser Tabelle verbessert praktische mathematische Fähigkeiten erheblich.",
      13: "La tabla del 13 desarrolla la resiliencia matemática de los estudiantes. Por ser un número primo, no hay atajos fáciles, lo que requiere verdadera comprensión. Aprender la tabla del 13 fortalece las habilidades aritméticas mentales y enseña a pensar en los números de diferentes maneras (estrategia de descomposición 10+3).",
      14: "La tabla del 14 ayuda a reforzar la tabla del 7. La relación 14=2×7 muestra a los estudiantes la propiedad distributiva de la multiplicación. Es necesaria para calcular periodos semanales y quincenales. Esta tabla profundiza la comprensión de las propiedades de números pares y estrategias de duplicación.",
      15: "La tabla del 15 combina tanto la tabla del 3 como la del 5, lo cual es excelente para entender conexiones matemáticas. Es vital para cálculos de cuarto de hora (15 minutos). Aprender la tabla del 15 enseña a entender reglas de divisibilidad y ver relaciones entre números. Se usa frecuentemente en cálculos de porcentaje (como propina del 15%).",
      16: "La tabla del 16 es perfecta para entender sistemas binarios y números exponenciales. La relación 2⁴=16 muestra el poder de los exponentes. Tiene importancia crítica en ciencias de la computación (16 bits, sistema hexadecimal). Esta tabla desarrolla la comprensión de estrategias de múltiple duplicación y secuencias geométricas.",
      17: "La tabla del 17 es una herramienta excelente para desarrollar estrategias de matemática mental. Ser un número primo obliga a los estudiantes a encontrar métodos creativos de cálculo (estrategias 20-3 o 10+7). Esta tabla desarrolla habilidades de resolución de problemas y flexibilidad con los números.",
      18: "La tabla del 18 muestra la riqueza de las relaciones matemáticas. Que 18=2×9=3×6 enseña a entender diferentes combinaciones de factores. Tiene importancia cultural como edad de mayoría de edad. Esta tabla enseña a abordar un problema con múltiples estrategias y elegir el método más eficiente.",
      19: "La tabla del 19 maximiza las habilidades de cálculo mental. La estrategia '20-1' enseña a los estudiantes a usar números complementarios. Ser un número primo enfatiza la comprensión real más que el reconocimiento de patrones. Esta tabla desarrolla la habilidad de dividir cálculos complejos en pasos simples.",
      20: "La tabla del 20 es crítica para reforzar el sistema de valor posicional y trabajar cómodamente con números grandes. La relación 20=2×10 profundiza la comprensión del sistema decimal. Se usa constantemente en cálculos de dinero (billetes de 20) y mediciones. Esta tabla forma la base para cálculos de porcentaje (descuento del 20%).",
      21: "La tabla del 21 es perfecta para entender la relación de factorización 3×7. Esta tabla muestra a los estudiantes que un número puede tener más de un factor. El 21 tiene importancia social como edad para transacciones legales y mayoría de edad. Aprender esta tabla profundiza la comprensión de las relaciones entre factores y múltiplos.",
      22: "La tabla del 22 ayuda a reforzar la tabla del 11. La relación 22=2×11 fortalece las estrategias de duplicación. Se usa en deportes (equipo de fútbol) y conteo diario. Esta tabla desarrolla la comprensión de propiedades de números pares y relaciones matemáticas.",
      23: "La tabla del 23 desarrolla habilidades para trabajar con números primos. Como no se puede derivar de otras tablas, los estudiantes deben desarrollar nuevas estrategias. El 23 es un número importante en biología (pares de cromosomas). Aprender esta tabla aumenta la flexibilidad mental y capacidades de resolución de problemas.",
      24: "La tabla del 24 es una de las más útiles en la vida diaria. Se encuentra constantemente debido a la relación día-hora (24 horas). Que el 24 tenga muchos divisores (1,2,3,4,6,8,12,24) lo hace ideal para fracciones y proporciones. Esta tabla desarrolla habilidades de gestión del tiempo y planificación.",
      25: "La tabla del 25 es fundamental para entender números cuadrados (5²). Tiene un papel central en sistemas monetarios (25 centavos). El patrón regular del 25 (25,50,75,00) facilita mucho los cálculos. Esta tabla se usa frecuentemente en cálculos de porcentaje (25%=1/4) y fracciones.",
      26: "La tabla del 26 ayuda a reforzar la tabla del 13. Es importante en sistemas alfabéticos (26 letras). La relación 26=2×13 muestra la conexión entre números primos y pares. Aprender esta tabla desarrolla la capacidad de ver relaciones matemáticas.",
      27: "La tabla del 27 es crítica para entender números exponenciales (3³). Es importante en geometría (cubo 3×3×3 en espacio 3D) y cálculos de volumen. La relación 27=3×9 fortalece la conexión entre las tablas del 3 y 9. Esta tabla forma una base en pensamiento matemático y números exponenciales.",
      28: "La tabla del 28 es importante para conocimiento de calendario (mes de febrero). Que el 28 sea un número perfecto (suma de divisores igual a sí mismo) muestra propiedades matemáticas especiales. La relación 28=4×7 profundiza la comprensión de factorización. Esta tabla se usa en cálculos de tiempo y planificación semanal.",
      29: "La tabla del 29 es perfecta para perfeccionar estrategias de números primos. La relación 30-1 enseña a usar números complementarios. Es necesaria para conocimiento de calendario (febrero en año bisiesto). Aprender esta tabla maximiza las habilidades de cálculo mental.",
      30: "La tabla del 30 es el puente entre el sistema decimal y la multiplicación. La relación 30=3×10 fortalece la comprensión del valor posicional. Se usa constantemente en tiempo (media hora), calendario (días del mes) y medidas de ángulo (30°). Esta tabla forma la base de cálculos de porcentaje (descuento del 30%) y matemática práctica.",
      31: "Multiplicar por 31 es crítico para el conocimiento del calendario. Como la mayoría de los meses tienen 31 días, se usa constantemente en cálculos de fecha y tiempo. Como 31 es un número primo, es perfecto para desarrollar estrategias de cálculo mental. La estrategia 30+1 enseña a usar números complementarios y proporciona competencia en cálculos de números grandes.",
      32: "Multiplicar por 32 es importante para entender números exponenciales (2⁵) y sistemas binarios. Como la arquitectura de 32 bits es común en ciencias de la computación, tiene importancia práctica en la era de la tecnología. Es perfecto para perfeccionar cadenas de duplicación. Se usa en conversiones de temperatura (Fahrenheit).",
      33: "Multiplicar por 33 fortalece las relaciones matemáticas combinando las tablas del 3 y 11. La propiedad repdigit (33, 66, 99...) facilita el reconocimiento de patrones. La relación 33=3×11 profundiza la comprensión de las conexiones entre factores y múltiplos. Esta tabla enseña estrategias de multiplicación múltiple.",
      34: "Multiplicar por 34 ayuda a reforzar la tabla del 17. La relación 34=2×17 muestra la conexión entre números primos y pares. Esta tabla desarrolla flexibilidad mental y métodos de cálculo alternativos (35-1, 30+4). Refuerza propiedades de números pares y habilidades de duplicación.",
      35: "Multiplicar por 35 desarrolla habilidades de factorización como combinación de las tablas del 5 y 7. La relación 5×7 refuerza ambas tablas. Se usa en cálculos de tiempo (35 minutos) y matemática cotidiana. Esta tabla crea patrones reconocibles con el patrón del 5 (último dígito 5 o 0).",
      36: "Multiplicar por 36 es una de las tablas más útiles. Que 36=6² es crítico para entender números cuadrados. Tener muchos divisores (1,2,3,4,6,9,12,18,36) lo hace ideal para fracciones y proporciones. Se usa frecuentemente en el sistema de docenas (3 docenas) y medidas de ángulos (un décimo de 360°).",
      37: "Multiplicar por 37 perfecciona propiedades de números primos y estrategias de matemática mental. Relaciones especiales como 37×3=111 proporcionan comprensión profunda de patrones numéricos. Estrategias como 40-3 o 35+2 desarrollan habilidades creativas de resolución de problemas. Esta tabla fomenta la curiosidad matemática y el espíritu de descubrimiento.",
      38: "Multiplicar por 38 ayuda a reforzar la tabla del 19. La relación 38=2×19 combina estrategias de duplicación y números primos. El enfoque 40-2 enseña a usar números complementarios. Tiene importancia práctica en contexto de salud (temperatura corporal).",
      39: "Multiplicar por 39 fortalece las conexiones matemáticas combinando las tablas del 3 y 13. La estrategia 40-1 enseña a calcular rápidamente usando números redondos. Esta tabla desarrolla habilidades de factorización múltiple (3×13) y proporciona flexibilidad mental.",
      40: "La tabla del 40 es perfecta para comprender profundamente el sistema decimal. La relación 40=4×10 muestra la conexión entre valor posicional y multiplicación. Se usa mucho en la vida diaria debido a horas de trabajo (semana de 40 horas) y normas sociales (40 años). Esta tabla forma una base para números grandes y cálculos de porcentaje.",
      41: "La tabla del 41 lleva las estrategias de números primos a un nivel avanzado. El enfoque 40+1 proporciona dominio en el uso de números complementarios. Por ser un número primo, requiere flexibilidad mental y resolución creativa de problemas. Esta tabla desarrolla la habilidad de calcular rápidamente con números grandes.",
      42: "La tabla del 42 perfecciona las habilidades de factorización. Las relaciones 42=6×7=2×21=3×14 enseñan a ver conexiones matemáticas. Como combina las tablas del 6 y 7, refuerza ambas. Es memorable debido a referencias de la cultura pop (Guía del Autoestopista Galáctico).",
      43: "La tabla del 43 desarrolla propiedades de números primos y estrategias de cálculo mental. Enfoques alternativos como 40+3 o 45-2 proporcionan flexibilidad en el pensamiento matemático. Esta tabla aumenta la habilidad de trabajar creativamente con números y enriquece las estrategias de resolución de problemas.",
      44: "La tabla del 44 es perfecta para reforzar la tabla del 11. La relación 44=4×11 desarrolla habilidades de multiplicación múltiple. El patrón similar a repdigit (44, 88) facilita el reconocimiento visual. Profundiza la comprensión de propiedades de números pares y ser múltiplo de cuatro.",
      45: "La tabla del 45 fortalece las relaciones matemáticas combinando las tablas del 5 y 9. Se usa frecuentemente en geometría (ángulo de 45°) y cálculos de tiempo (tres cuartos de hora). La relación 5×9 refuerza tanto la tabla del 5 como la del 9. Esta tabla es muy útil para matemática práctica y cálculos cotidianos.",
      46: "La tabla del 46 ayuda a reforzar la tabla del 23. La relación 46=2×23 combina estrategias de duplicación y números primos. Es un número importante en biología (46 cromosomas). Esta tabla desarrolla propiedades de números pares y cálculos con números grandes.",
      47: "La tabla del 47 maximiza las estrategias de números primos. El enfoque 50-3 perfecciona la estrategia de restar de números redondos. Debido a propiedades primas, requiere flexibilidad mental y métodos de solución alternativos. Esta tabla proporciona habilidades avanzadas de matemática mental.",
      48: "La tabla del 48 es una de las más versátiles. Tener muchos divisores (1,2,3,4,6,8,12,16,24,48) lo hace ideal para fracciones y proporciones. Se usa en el sistema de docenas (4 docenas) y cálculos de tiempo (48 horas=2 días). Las relaciones de factores múltiples profundizan la comprensión de conexiones matemáticas.",
      49: "La tabla del 49 es crítica para entender números cuadrados (7²). Requiere conocer perfectamente la tabla del 7 y la refuerza. La estrategia 50-1 enseña cálculo rápido usando números redondos. Es importante en geometría y cálculos de área debido a propiedades cuadradas.",
      50: "La tabla del 50 forma la base de cálculos de porcentaje (50%=1/2). La relación 5×10 combina el sistema decimal y la multiplicación. Está directamente conectada con el concepto de mitad (½). Se usa constantemente en sistemas monetarios (50 centavos, 50 pesos), mediciones de tiempo y matemática cotidiana. Esta tabla mejora significativamente las habilidades de cálculo práctico.",
      51: "La tabla del 51 desarrolla la habilidad de trabajar con números cercanos a 50. La estrategia 50+1 refuerza el uso de números complementarios. La relación 3×17 fortalece las habilidades de factorización. Tiene importancia práctica en el contexto de juegos de cartas (52 cartas). Esta tabla enseña a calcular con pequeñas desviaciones de números redondos.",
      52: "La tabla del 52 es crítica para cálculos de tiempo y calendario. Debido al número de semanas en un año (52 semanas), se usa constantemente en planificación y cálculos anuales. La relación 4×13 refuerza tanto la tabla del 4 como la del 13. La baraja de cartas (52 cartas) proporciona contexto al pensamiento matemático. Esta tabla es muy importante para matemática de vida práctica.",
      53: "La tabla del 53 lleva las estrategias de números primos a un nivel avanzado. El enfoque 50+3 desarrolla flexibilidad mental y métodos alternativos de cálculo. Debido a propiedades primas, requiere resolución creativa de problemas. Esta tabla aumenta la habilidad de trabajar con números primos grandes y expande la profundidad del pensamiento matemático.",
      54: "La tabla del 54 perfecciona las habilidades de factorización múltiple. Las relaciones 54=6×9=2×27=3×18 enseñan a ver conexiones matemáticas. Como combina las tablas del 6 y 9, fortalece ambas. Tener muchos divisores (1,2,3,6,9,18,27,54) lo hace ideal para fracciones y proporciones. Esta tabla fomenta el pensamiento matemático flexible.",
      55: "La tabla del 55 refuerza las relaciones matemáticas combinando las tablas del 5 y 11. La propiedad de número triangular (1+2+...+10=55) profundiza la comprensión de patrones matemáticos. La relación 5×11 fortalece ambas tablas. Esta tabla forma una base para patrones numéricos y fórmulas de suma.",
      56: "La tabla del 56 refuerza tanto la tabla del 7 como la del 8. 7×8=56 es uno de los pares de multiplicación más difíciles y aprender esta tabla lo fortalece. Las alternativas 4×14=2×28 enseñan a usar múltiples estrategias. Tiene importancia práctica en cálculos laborales (semana de 7 días × día de 8 horas). Esta tabla proporciona dominio de multiplicaciones difíciles.",
      57: "La tabla del 57 fortalece las conexiones matemáticas combinando las tablas del 3 y 19. La estrategia 60-3 perfecciona la habilidad de restar de números redondos. La relación 3×19 combina estrategias de números primos y no primos. Esta tabla desarrolla el cálculo mental con números grandes de nivel medio.",
      58: "La tabla del 58 ayuda a reforzar la tabla del 29. La relación 58=2×29 combina estrategias de duplicación y números primos. El enfoque 60-2 enseña la estrategia de aproximarse a números redondos. Esta tabla forma una base para propiedades de números pares y cálculos cercanos a 60.",
      59: "La tabla del 59 maximiza las estrategias de números primos. El enfoque 60-1 perfecciona el cálculo rápido usando números redondos. Debido a propiedades primas, requiere flexibilidad mental y métodos creativos de solución. Tiene importancia práctica en contexto de tiempo (59 minutos, 59 segundos). Esta tabla proporciona habilidades avanzadas de matemática mental.",
      60: "La tabla del 60 forma la base de cálculos de tiempo (60 minutos=1 hora, 60 segundos=1 minuto). La relación 6×10 combina el sistema decimal y la multiplicación. Tener muchos divisores (1,2,3,4,5,6,10,12,15,20,30,60) lo hace ideal para fracciones y proporciones. Tiene importancia geométrica en medidas de ángulo (360°÷6=60°). Esta tabla es una de las más utilizadas en la vida diaria.",
      61: "La tabla del 61 lleva las estrategias de números primos a un nivel avanzado. El enfoque 60+1 proporciona asociación con unidades de tiempo (minuto 61, segundo 61). Debido a sus propiedades primas, requiere flexibilidad mental y resolución creativa de problemas. Esta tabla desarrolla la habilidad de calcular rápidamente con números mayores a 60.",
      62: "La tabla del 62 ayuda a reforzar la tabla del 31. La relación 62=2×31 combina estrategias de duplicación y números primos. El enfoque 60+2 enseña la estrategia de calcular cerca de números redondos. Esta tabla forma una base para propiedades de números pares y cálculos después de 60.",
      63: "La tabla del 63 refuerza tanto la tabla del 7 como la del 9 al combinarlas. 7×9=63 es un par de multiplicación importante. La alternativa 3×21 enseña a usar múltiples estrategias. Ser divisible tanto por 7 como por 9 lo hace útil para fracciones y proporciones. Esta tabla profundiza la comprensión de relaciones de factores múltiples.",
      64: "La tabla del 64 es crítica para entender potencias de 2 (números exponenciales). Las relaciones 64=2⁶=8² refuerzan tanto exponentes como números cuadrados. Tiene importancia tecnológica en ciencias de la computación debido a la arquitectura de 64 bits. El tablero de ajedrez (8×8=64 casillas) proporciona aplicaciones geométricas. Esta tabla es fundamental para números exponenciales y sistema binario.",
      65: "La tabla del 65 fortalece las relaciones matemáticas combinando las tablas del 5 y 13. La relación 5×13 refuerza ambas tablas. Tiene importancia práctica en contexto social (edad de jubilación 65 años). El patrón del 5 (termina en 5 o 0) facilita el cálculo. Esta tabla es útil para matemática de vida práctica.",
      66: "La tabla del 66 refuerza tanto la tabla del 6 como la del 11 al combinarlas. La relación 6×11=66 crea un patrón similar a repdigit. La alternativa 2×33 ofrece diferentes estrategias. Ser divisible tanto por 6 como por 11 proporciona usos múltiples. Esta tabla desarrolla habilidades de factores múltiples.",
      67: "La tabla del 67 maximiza las estrategias de números primos. El enfoque 70-3 perfecciona la estrategia de restar de números redondos. Debido a propiedades primas, requiere flexibilidad mental y métodos de solución alternativos. Esta tabla proporciona habilidades de matemática mental avanzada y comodidad con números primos grandes.",
      68: "La tabla del 68 fortalece las conexiones matemáticas combinando las tablas del 4 y 17. Las relaciones 4×17=2×34 enseñan a usar múltiples estrategias. El enfoque 70-2 desarrolla la habilidad de aproximarse a números redondos. Esta tabla forma una base para propiedades de números pares y cálculos cercanos a 70.",
      69: "La tabla del 69 refuerza tanto la tabla del 3 como la del 23 al combinarlas. La estrategia 70-1 enseña a calcular rápidamente usando números redondos. La relación 3×23 combina estrategias de factores pequeños y grandes. Esta tabla proporciona competencia en cálculos cercanos a 70.",
      70: "La tabla del 70 es perfecta para reforzar la tabla del 7. La relación 7×10 combina el sistema decimal y la tabla del 7. Tiene importancia social en el contexto de esperanza de vida (promedio 70-80 años). Las alternativas 2×35=5×14 enseñan a usar múltiples estrategias. Esta tabla es muy útil para cálculo práctico y gestión del tiempo.",
      71: "La tabla del 71 maximiza las estrategias de números primos. El enfoque 70+1 proporciona dominio en el uso de números complementarios. Debido a sus propiedades primas, requiere flexibilidad mental y resolución creativa de problemas. Esta tabla desarrolla la habilidad de calcular rápidamente con números primos grandes y profundiza el pensamiento matemático.",
      72: "La tabla del 72 es una de las más versátiles. Tener muchos divisores (1,2,3,4,6,8,9,12,18,24,36,72) lo hace ideal para fracciones y proporciones. Las relaciones 8×9=6×12 enseñan estrategias de factores múltiples. Tiene importancia práctica en cálculos de tiempo (72 horas=3 días). Esta tabla perfecciona la flexibilidad matemática y el uso de múltiples estrategias.",
      73: "La tabla del 73 lleva las estrategias de números primos a un nivel avanzado. El enfoque 70+3 desarrolla habilidades de cálculo mental. Ser el primo número 21 despierta curiosidad matemática. Debido a propiedades primas, requiere métodos de solución alternativos y pensamiento creativo. Esta tabla proporciona habilidades de matemática mental avanzada.",
      74: "La tabla del 74 ayuda a reforzar la tabla del 37. La relación 74=2×37 combina estrategias de duplicación y números primos. El enfoque 75-1 enseña la estrategia de aproximarse a números redondos. Esta tabla forma una base para propiedades de números pares y cálculos cercanos a 75.",
      75: "La tabla del 75 forma la base de cálculos de porcentaje (75%=3/4). Las relaciones 3×25=5×15 enseñan a usar múltiples estrategias. Está directamente conectada con el concepto de tres cuartos (¾). El patrón del 5 (termina en 5 o 0) facilita el cálculo. Esta tabla es extremadamente importante para matemática práctica y cálculos de porcentaje.",
      76: "La tabla del 76 fortalece las conexiones matemáticas combinando las tablas del 4 y 19. Las relaciones 4×19=2×38 enseñan estrategias de multiplicación múltiple. Los enfoques 75+1 o 80-4 proporcionan flexibilidad. Esta tabla prepara para cálculos cercanos a 80 con propiedades de números pares.",
      77: "La tabla del 77 refuerza tanto la tabla del 7 como la del 11 al combinarlas. La relación 7×11=77 crea un patrón similar a repdigit. Como ambas tablas son de dificultad media, la tabla del 77 es perfecta para reforzarlas. Ser divisible tanto por 7 como por 11 lo hace útil para fracciones.",
      78: "La tabla del 78 desarrolla habilidades de factorización múltiple. Las relaciones 78=2×39=3×26=6×13 proporcionan flexibilidad matemática. El enfoque 80-2 enseña la estrategia de restar de números redondos. Tener muchos divisores ofrece varios métodos de cálculo. Esta tabla perfecciona el uso de múltiples estrategias.",
      79: "La tabla del 79 maximiza las estrategias de números primos. El enfoque 80-1 perfecciona el cálculo rápido usando números redondos. Debido a propiedades primas, requiere flexibilidad mental y métodos de solución creativos. Esta tabla proporciona competencia en cálculos cercanos a 80 y desarrolla habilidades matemáticas avanzadas.",
      80: "La tabla del 80 es perfecta para reforzar la tabla del 8. La relación 8×10 combina el sistema decimal y la tabla del 8. Las alternativas 2×40=4×20=5×16 enseñan a usar múltiples estrategias. Tiene importancia social en el contexto de esperanza de vida (límite superior 80 años). Esta tabla mejora significativamente el cálculo práctico y la habilidad de trabajar con números grandes.",
      81: "Multiplicar por 81 usa la relación 81=9² (nueve al cuadrado) o 81=3⁴ (tres a la cuarta potencia). Como 81 es un cuadrado perfecto, todos sus múltiplos con cuadrados perfectos forman números cuadrados también. Pensar en 81 como 80+1 o 9×9 facilita el cálculo. El 81 es divisible tanto por 9 como por 27 (27=3³). Los múltiplos de 81 se dividen uniformemente por 9. El 81 es la suma de los números impares del 1 al 9 (1+3+5+7+9+11+13+15+17=81). Esta tabla desarrolla la comprensión de patrones matemáticos.",
      82: "Multiplicar por 82 usa la relación 2×41. Si conoces la tabla del 41, puedes duplicar cada resultado para encontrar la tabla del 82. Pensar en 82 como 80+2 o 85-3 facilita el cálculo. Como es un número par, todos sus múltiplos también son pares. El 82 es divisible tanto por 2 como por 41. Esta tabla establece una base para cálculos después de 80.",
      83: "Multiplicar por 83 desarrolla estrategias de matemática mental debido a sus propiedades de número primo. Los métodos más prácticos son pensar en 83 como 80+3 o 85-2. El 83 es un número primo y solo es divisible por 1 y 83. Aprender la tabla del 83 desarrolla la habilidad de calcular rápidamente con números primos grandes.",
      84: "Multiplicar por 84 es una de las tablas más versátiles. Como 84=12×7=6×14=4×21=3×28=2×42, se puede calcular de muchas maneras diferentes. El 84 es 7 veces 12 (7 docenas). Tener muchos divisores (1,2,3,4,6,7,12,14,21,28,42,84) lo hace extremadamente útil en cálculos de fracciones. El 84 es útil en cálculos de tiempo (84 horas=1 semana+1/2 día). Esta tabla perfecciona el uso de múltiples estrategias.",
      85: "Multiplicar por 85 usa la relación 5×17. Si ambas tablas son conocidas, multiplicar por 85 es fácil. Pensar en 85 como 80+5 o 90-5 facilita el cálculo mental. El patrón del 5 (termina en 5 o 0) facilita el cálculo. El 85 se usa frecuentemente en cálculos de porcentaje (85%=17/20). Esta tabla prepara para cálculos cercanos a 90.",
      86: "Multiplicar por 86 usa la relación 2×43. Si conoces la tabla del 43, puedes duplicar cada resultado para encontrar la tabla del 86. Pensar en 86 como 80+6 o 90-4 facilita el cálculo. Como es un número par, todos sus múltiplos también son pares. El 86 es divisible tanto por 2 como por 43. Esta tabla establece una base para cálculos cercanos a 90.",
      87: "Multiplicar por 87 usa la relación 3×29. Triplicar la tabla del 29 o multiplicar la tabla del 3 por 29 funciona. Pensar en 87 como 90-3 o 85+2 facilita el cálculo mental. Como 87=3×29, es divisible tanto por 3 como por 29. Esta tabla es útil para cálculos cercanos a 90 y perfecciona la habilidad de restar de números redondos.",
      88: "Multiplicar por 88 usa las relaciones 8×11=4×22=2×44. Se puede calcular de múltiples maneras. El 88 muestra un patrón similar a repdigit (repetición de 8s). Pensar en 88 como 90-2 o 80+8 facilita el cálculo. Como es un número par, todos sus múltiplos también son pares. El 88 tiene muchos divisores. La propiedad repdigit (88) facilita el reconocimiento visual y la memorización.",
      89: "Multiplicar por 89 requiere estrategias especiales debido a sus propiedades de número primo. La estrategia más fácil es pensar en 89 como 90-1: multiplica un número por 90 y réstale el número mismo. El 89 es un número primo y solo es divisible por 1 y 89. El 89 es muy cercano a 90, por lo que es útil para aproximaciones. Esta tabla proporciona competencia en cálculos cercanos a 90 y desarrolla habilidades matemáticas avanzadas.",
      90: "Multiplicar por 90 usa la relación 9×10 y es muy útil. Para multiplicar un número por 90, puedes multiplicarlo por 9 y agregar un cero al final. Hay relaciones de factores alternativos como 90=2×45=3×30=5×18=6×15. Un ángulo recto mide 90°. El 90 tiene importancia crítica en geometría (ángulo recto de 90°). El 90 se usa frecuentemente en medidas de ángulos y porcentajes. Esta tabla refuerza la tabla del 9 y es extremadamente importante para cálculos prácticos y medidas de ángulos.",
      91: "Multiplicar por 91 usa la relación 7×13. Si ambas tablas son conocidas, multiplicar por 91 es fácil. Pensar en 91 como 90+1 o 100-9 facilita el cálculo. Como 91=7×13, es divisible tanto por 7 como por 13. Esta tabla refuerza la comprensión de relaciones de factores. Como ambas tablas son de dificultad media, la tabla del 91 es ideal para reforzarlas. Es un concepto fundamental para matemáticas avanzadas y criptografía.",
      92: "Multiplicar por 92 usa las relaciones 4×23=2×46. Se puede calcular de múltiples maneras. Pensar en 92 como 90+2 o 100-8 facilita el cálculo mental. Como es un número par, todos sus múltiplos también son pares. El 92 es divisible tanto por 4 como por 23. Esta tabla prepara para cálculos cercanos a 100 y desarrolla habilidades de cálculo en los 90s.",
      93: "Multiplicar por 93 usa la relación 3×31. Triplicar la tabla del 31 o multiplicar la tabla del 3 por 31 funciona. Pensar en 93 como 90+3 o 100-7 facilita el cálculo. Como 93=3×31, es divisible tanto por 3 como por 31. Esta tabla es útil para cálculos cercanos a 100. Proporciona práctica de multiplicación con números grandes y desarrolla flexibilidad mental.",
      94: "Multiplicar por 94 usa la relación 2×47. Si conoces la tabla del 47, puedes duplicar cada resultado para encontrar la tabla del 94. Pensar en 94 como 100-6 o 90+4 facilita el cálculo. Como es un número par, todos sus múltiplos también son pares. El 94 es divisible tanto por 2 como por 47. La estrategia 100-6 perfecciona el método de restar de números redondos. Proporciona habilidades críticas para matemática mental avanzada.",
      95: "Multiplicar por 95 usa la relación 5×19. Si ambas tablas son conocidas, multiplicar por 95 es fácil. Pensar en 95 como 100-5 o 90+5 facilita el cálculo mental. El patrón del 5 (termina en 5 o 0) facilita el cálculo. El 95 se usa frecuentemente en cálculos de porcentaje (95%=19/20). La estrategia 100-5 es muy útil.",
      96: "Multiplicar por 96 usa las relaciones 32×3=16×6=12×8=4×24=2×48. Se puede calcular de muchas maneras diferentes. Pensar en 96 como 100-4 o 90+6 facilita el cálculo. Como es un número par, todos sus múltiplos también son pares. El 96 tiene muchos divisores (1,2,3,4,6,8,12,16,24,32,48,96), lo que lo hace útil en cálculos de fracciones. Muestra la relación entre potencias de 2 y 3 (2⁵×3). Esta tabla es perfecta para flexibilidad matemática y teoría de números.",
      97: "Multiplicar por 97 desarrolla estrategias de matemática mental debido a sus propiedades de número primo. La estrategia más fácil es pensar en 97 como 100-3: multiplica un número por 100 y réstale tres veces el número mismo. El 97 es un número primo y solo es divisible por 1 y 97. Aprender la tabla del 97 facilita cálculos cercanos a 100. Ser el primo más cercano a 100 facilita extremadamente el cálculo mental. Ser primo es importante para teoría de números y criptografía.",
      98: "Multiplicar por 98 usa las relaciones 2×49=7×14. Se puede calcular de múltiples maneras. La estrategia más fácil es pensar en 98 como 100-2: multiplica un número por 100 y réstale dos veces el número mismo. Como es un número par, todos sus múltiplos también son pares. El 98 es divisible tanto por 2 como por 7 y 49. La relación 98=2×49=2×7² combina números cuadrados y estrategias de duplicación. Esta tabla proporciona dominio en cálculos cercanos a 100.",
      99: "Multiplicar por 99 usa la relación 9×11. La estrategia más fácil es pensar en 99 como 100-1: multiplica un número por 100 y réstale el número mismo. El 99 muestra un patrón similar a repdigit (repetición de 9s). Como 99=9×11, es divisible tanto por 9 como por 11. Esta tabla es extremadamente útil para cálculos cercanos a 100. La estrategia 100-1 es PERFECTA para matemática mental. La propiedad repdigit (99) profundiza la comprensión de patrones. Esta tabla es extremadamente importante para habilidades de cálculo práctico.",
      100: "La tabla del 100 es la base del sistema decimal. Proporciona una comprensión perfecta del concepto de valor posicional. Forma la base de cálculos de porcentaje (100%=completo) y el sistema decimal. Tiene importancia crítica para unidades monetarias, unidades de medida y matemática cotidiana. ¡ES UNA DE LAS TABLAS MÁS ÚTILES E IMPORTANTES!",
    }
    return importance[number] || `Das Lernen der Einmaleins-Tabelle von ${number} hilft Schülern, Gewandtheit mit dieser wichtigen Zahl zu entwickeln. Sie erscheint häufig in Mathematik und Alltag und ist notwendig, um solide Rechenfähigkeiten aufzubauen.`
  }

  const getPatterns = () => {
    const patterns: { [key: number]: { title: string; description: string }[] } = {
      1: [
        { title: "Patrón de Identidad", description: "Todo número multiplicado por 1 es igual a sí mismo. Esto nunca cambia: 1×1=1, 1×2=2, 1×3=3, y así sucesivamente." },
        { title: "Secuencia Predecible", description: "Los resultados simplemente cuentan hacia arriba: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Solo estás listando números en orden." },
        { title: "Base de Todas las Tablas", description: "Cada tabla de multiplicar comienza con multiplicar por 1, por lo que este patrón aparece en todas las tablas." },
      ],
      2: [
        { title: "Solo Números Pares", description: "Todos los múltiplos de 2 son números pares. Los resultados siempre terminan en 0, 2, 4, 6 u 8." },
        { title: "Contar de Dos en Dos", description: "Cada respuesta es 2 más que la anterior: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20." },
        { title: "Patrón de Duplicación", description: "Cada resultado es exactamente el doble del factor: 2×5=10 es el doble de 5." },
      ],
      3: [
        { title: "Patrón de Suma de Dígitos", description: "Suma los dígitos de cada resultado: 3 (3), 6 (6), 9 (9), 12 (1+2=3), 15 (1+5=6), 18 (1+8=9). ¡El patrón 3-6-9 se repite!" },
        { title: "Contar de Tres en Tres", description: "Cada respuesta aumenta en 3: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30." },
        { title: "Alternancia Impar-Par", description: "Los resultados alternan: impar (3), par (6), impar (9), par (12), creando un ritmo predecible." },
      ],
      4: [
        { title: "Siempre Números Pares", description: "Como la tabla del 2, todos los múltiplos de 4 son pares, terminan en 0, 2, 4, 6 u 8." },
        { title: "Doble de la Tabla del 2", description: "Cada respuesta es exactamente el doble de la respuesta correspondiente en la tabla del 2: 4×3=12 es el doble de 2×3=6." },
        { title: "Contar de Cuatro en Cuatro", description: "Cada respuesta aumenta en 4: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40." },
      ],
      5: [
        { title: "Termina en 0 o 5", description: "Cada múltiplo de 5 termina en 0 o 5. Esto hace que el patrón sea instantáneamente reconocible." },
        { title: "Patrón Alternante", description: "Los resultados alternan entre terminar en 5 (impar) y 0 (par): 5, 10, 15, 20, 25, 30..." },
        { title: "Mitad de la Tabla del 10", description: "Cada resultado es exactamente la mitad de la tabla del 10: 5×4=20 es la mitad de 10×4=40." },
      ],
      6: [
        { title: "Siempre Números Pares", description: "Todos los múltiplos de 6 son pares. Los resultados progresan como 6, 12, 18, 24, 30... y todos son divisibles por 2." },
        { title: "Doble de la Tabla del 3", description: "Cada respuesta es exactamente el doble de la tabla del 3: 6×4=24 es el doble de 3×4=12." },
        { title: "Patrón del Dígito de las Unidades", description: "El dígito de las unidades sigue este patrón: 6, 2, 8, 4, 0 y se repite. Este patrón te ayuda a identificar la tabla del 6." },
      ],
      7: [
        { title: "Patrón de Suma de Dígitos", description: "Cuando sumas los dígitos de los múltiplos de 7, emerge un patrón interesante: 7, 14(1+4=5), 21(2+1=3), 28(2+8=10)..." },
        { title: "Repetición del Dígito de las Unidades", description: "El dígito de las unidades sigue esta secuencia: 7, 4, 1, 8, 5, 2, 9, 6, 3, 0 y se repite." },
        { title: "Propiedad de Número Primo", description: "El 7 es un número primo, por lo que no tiene relaciones simples con otras tablas. Sin embargo, memorizar pares especiales como 7×8=56 ayuda." },
      ],
      8: [
        { title: "Siempre Par y Divisible por 4", description: "Todos los múltiplos de 8 son tanto pares como divisibles por 4: 8, 16, 24, 32, 40, 48..." },
        { title: "Doble de la Tabla del 4", description: "Cada respuesta es exactamente el doble de la tabla del 4: 8×5=40 es el doble de 4×5=20." },
        { title: "Patrón del Dígito de las Unidades", description: "El dígito de las unidades sigue este patrón: 8, 6, 4, 2, 0 y se repite. Siempre un patrón descendente con números pares." },
      ],
      9: [
        { title: "Suma de Dígitos Siempre es 9", description: "Suma los dígitos de los múltiplos de 9: 18(1+8=9), 27(2+7=9), 36(3+6=9), 45(4+5=9). ¡Este patrón mágico siempre funciona!" },
        { title: "Patrón del Dígito de las Decenas", description: "Si haces 9×n, el dígito de las decenas es n-1: 9×3=27 (decenas:2), 9×6=54 (decenas:5), 9×9=81 (decenas:8)." },
        { title: "1 Menos que 10", description: "La fórmula 9×n = (10×n) - n es muy útil: 9×6 = 60-6 = 54, 9×8 = 80-8 = 72." },
      ],
      10: [
        { title: "Agrega un Cero al Final", description: "Cuando multiplicas cualquier número por 10, simplemente agregas un cero al final: 7×10=70, 23×10=230." },
        { title: "Siempre Termina en 0", description: "Todos los múltiplos de 10 terminan en 0: 10, 20, 30, 40, 50... Este patrón nunca cambia." },
        { title: "Sistema de Valor Posicional", description: "Multiplicar por 10 desplaza cada dígito una posición a la izquierda. Esta es la base de nuestro sistema decimal: 25×10=250." },
      ],
      11: [
        { title: "Patrón de Dígitos Dobles", description: "Cuando se multiplica por números de un dígito, el resultado es dígitos dobles: 11×2=22, 11×3=33, 11×7=77, 11×9=99." },
        { title: "Truco de Suma de Dígitos", description: "Multiplica un número de dos dígitos por 11: suma los dígitos y colócalos en el medio. 23×11: 2_(2+3)_3 = 253." },
        { title: "Incremento de Decenas", description: "Múltiplos de 11: 11, 22, 33, 44, 55, 66, 77, 88, 99, 110. Los primeros 9 muestran el patrón de dígitos dobles." },
      ],
      12: [
        { title: "Patrón de Docena", description: "Múltiplos de 12: 12, 24, 36, 48, 60, 72, 84, 96, 108, 120. Cada uno muestra un aumento de una docena." },
        { title: "Múltiplos de Ambos 3 y 4", description: "Como 12=3×4, todos los resultados son divisibles tanto por 3 como por 4. 12×5=60: 60÷3=20, 60÷4=15." },
        { title: "Patrón de Números Pares", description: "Todos los múltiplos de 12 son pares y divisibles por 4: 12, 24, 36, 48..." },
      ],
      13: [
        { title: "Descomposición 10+3", description: "13×n = (10×n) + (3×n). Ejemplo: 13×4 = 40 + 12 = 52. Esta estrategia facilita el cálculo." },
        { title: "Ciclo del Dígito de las Unidades", description: "Dígito de las unidades: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0 y se repite. Se completa un ciclo en exactamente 10 pasos." },
        { title: "Comportamiento de Número Primo", description: "Como 13 es primo, solo es divisible por 1 y 13. Esto requiere estrategias especiales de memorización." },
      ],
      14: [
        { title: "Doble del 7", description: "Como 14=2×7, si conoces la tabla del 7 duplica cada resultado: 7×6=42, entonces 14×6=84." },
        { title: "Siempre Números Pares", description: "Todos los múltiplos de 14 son pares: 14, 28, 42, 56, 70, 84, 98, 112, 126, 140." },
        { title: "Patrón de Dos Semanas", description: "14 días = 2 semanas. Los múltiplos de 14 se usan en planificación semanal: 28 días = 4 semanas." },
      ],
      15: [
        { title: "Termina en 0 o 5", description: "Todos los múltiplos de 15 terminan en 0 o 5: 15, 30, 45, 60, 75, 90, 105, 120, 135, 150." },
        { title: "Relación 3×5", description: "Como 15=3×5, está relacionado con las tablas del 3 y 5. 15×4=60: 3×4=12, 5×4=20, no es 12+20=32 pero sí 3×20=60 o 5×12=60." },
        { title: "Múltiplos de Cuarto de Hora", description: "15 minutos = cuarto de hora. 30 minutos = media hora, 45 minutos = tres cuartos, 60 minutos = 1 hora." },
      ],
      16: [
        { title: "Potencia de 2", description: "16=2⁴ (2×2×2×2). Cadena de duplicación: 2→4→8→16. Cada múltiplo preserva este patrón." },
        { title: "Doble del 8", description: "Como 16=2×8, si conoces la tabla del 8 duplica cada resultado: 8×3=24, entonces 16×3=48." },
        { title: "Siempre Par y Divisible por 8", description: "Todos los múltiplos de 16 son pares y divisibles por 4 y 8: 16, 32, 48, 64, 80..." },
      ],
      17: [
        { title: "Estrategia 20-3", description: "Piensa en 17=20-3. 17×6 = (20×6) - (3×6) = 120 - 18 = 102." },
        { title: "Descomposición 10+7", description: "17×n = (10×n) + (7×n). Ejemplo: 17×4 = 40 + 28 = 68." },
        { title: "Singularidad de Número Primo", description: "17 es primo, por lo que solo tiene patrones únicos. Dígito de las unidades: 7, 4, 1, 8, 5, 2, 9, 6, 3, 0." },
      ],
      18: [
        { title: "Doble del 9", description: "Como 18=2×9, duplica la tabla del 9: 9×5=45, entonces 18×5=90." },
        { title: "Triple del 6", description: "Como 18=3×6, triplica la tabla del 6: 6×4=24, entonces 18×4=72." },
        { title: "Siempre Par y Divisible por 9", description: "Los múltiplos de 18 son pares y divisibles por 9. La suma de dígitos es múltiplo de 9: 18(1+8=9), 36(3+6=9), 54(5+4=9)." },
      ],
      19: [
        { title: "Estrategia 20-1", description: "Piensa en 19=20-1. 19×6 = (20×6) - 6 = 120 - 6 = 114. ¡Método muy práctico!" },
        { title: "Descomposición 10+9", description: "19×n = (10×n) + (9×n). Ejemplo: 19×3 = 30 + 27 = 57." },
        { title: "Patrón de Número Primo", description: "Como 19 es primo tiene patrones especiales. Dígito de las unidades: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 (orden descendente)." },
      ],
      20: [
        { title: "Agrega Cero y Duplica", description: "20=10×2. Para multiplicar por 20: 7×10=70, luego 70×2=140. (No es 7×20: 70×2=140 directamente)." },
        { title: "Siempre Termina en 0", description: "Todos los múltiplos de 20 terminan en 0: 20, 40, 60, 80, 100, 120, 140, 160, 180, 200." },
        { title: "Decenas Pares", description: "20, 40, 60, 80, 100... Cada uno aumenta en 20. Son múltiplos pares de 10." },
      ],
      21: [
        { title: "Relación 3×7", description: "21=3×7. Puedes usar ambas tablas del 3 y 7: 21×4 = 3×4×7 = 12×7 = 84." },
        { title: "Estrategia 20+1", description: "21×n = (20×n) + n. Ejemplo: 21×6 = 120 + 6 = 126. ¡Muy práctico!" },
        { title: "Ciclo del Dígito de las Unidades", description: "Dígito de las unidades: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 y se repite. Patrón de incremento simple." },
      ],
      22: [
        { title: "Doble del 11", description: "22=2×11. Si conoces la tabla del 11 duplica: 11×3=33, entonces 22×3=66." },
        { title: "Siempre Números Pares", description: "Todos los múltiplos de 22 son pares: 22, 44, 66, 88, 110, 132, 154, 176, 198, 220." },
        { title: "Patrón de Dígitos Dobles", description: "22×1=22, 22×2=44, 22×3=66, 22×4=88. Los primeros 4 muestran patrón de dígitos dobles." },
      ],
      23: [
        { title: "Descomposición 20+3", description: "23×n = (20×n) + (3×n). Ejemplo: 23×5 = 100 + 15 = 115." },
        { title: "Estrategia 25-2", description: "23=25-2. Ejemplo: 23×4 = 100 - 8 = 92. Útil cuando multiplicar por 25 es más fácil." },
        { title: "Patrón de Número Primo", description: "Como 23 es primo tiene patrón especial. Dígito de las unidades: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0." },
      ],
      24: [
        { title: "Relaciones de Múltiples Factores", description: "24=2×12=3×8=4×6. Puede calcularse de muchas formas. 24×5 = 12×10 = 120." },
        { title: "Siempre Par y Divisible por 4", description: "Todos los múltiplos de 24 son pares y divisibles por 3, 4, 6 y 8." },
        { title: "Relación con las Horas", description: "24 horas = 1 día. 48 horas = 2 días, 72 horas = 3 días. Útil en cálculos de tiempo." },
      ],
      25: [
        { title: "Patrón 25, 50, 75, 00", description: "Todos los múltiplos de 25 terminan en 25, 50, 75 o 00. Muy regular y predecible." },
        { title: "Relación de Cuarto", description: "25 = 100÷4. Entonces 25×4=100. Esta relación es muy útil en cálculos de porcentajes y fracciones." },
        { title: "Cuadrado del 5", description: "25=5². Esta relación especial: 25×n = 5×5×n. Ejemplo: 25×8 = 5×40 = 200." },
      ],
      26: [
        { title: "Doble del 13", description: "26=2×13. Si conoces la tabla del 13 duplica: 13×7=91, entonces 26×7=182." },
        { title: "Siempre Números Pares", description: "Todos los múltiplos de 26 son pares: 26, 52, 78, 104, 130, 156, 182, 208, 234, 260." },
        { title: "25+1 o 30-4", description: "26×n = (25×n) + n o (30×n) - (4×n). Ejemplo: 26×4 = 100+4 = 104." },
      ],
      27: [
        { title: "Potencia del 3", description: "27=3³ (3×3×3). Relación de número cúbico: 27, 54, 81, 108... (múltiplos de 3)." },
        { title: "Triple del 9", description: "27=3×9. Triplica la tabla del 9: 9×4=36, entonces 27×4=108." },
        { title: "Estrategia 30-3", description: "27=30-3. Ejemplo: 27×6 = 180-18 = 162. Método de cálculo fácil." },
      ],
      28: [
        { title: "4×7 o 2×14", description: "28=4×7=2×14. Puede calcularse de múltiples formas: 28×3 = 4×3×7 = 12×7 = 84." },
        { title: "Siempre Par y Divisible por 4", description: "Todos los múltiplos de 28 son pares y divisibles por 4 y 7: 28, 56, 84, 112, 140..." },
        { title: "Relación con la Semana", description: "28 días = 4 semanas. Esta relación es útil en cálculos de calendario." },
      ],
      29: [
        { title: "Estrategia 30-1", description: "29=30-1. 29×n = (30×n) - n. Ejemplo: 29×7 = 210-7 = 203. ¡El método más efectivo!" },
        { title: "Patrón del Dígito de las Unidades", description: "Dígito de las unidades: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 (orden descendente). Predecible." },
        { title: "Propiedad de Número Primo", description: "Como 29 es primo no tiene relaciones simples de factores. Requiere estrategias mentales." },
      ],
      30: [
        { title: "Relación 3×10", description: "30=3×10. Multiplicar por 30: multiplica por 10, luego por 3. 7×30 = 70×3 = 210." },
        { title: "Siempre Termina en 0", description: "Todos los múltiplos de 30 terminan en 0: 30, 60, 90, 120, 150, 180, 210, 240, 270, 300." },
        { title: "Múltiplos Triples de las Decenas", description: "30, 60, 90, 120, 150... Cada uno aumenta en 30. Son 3 veces las decenas." },
      ],
      31: [
        { title: "Estrategia 30+1", description: "31=30+1. 31×n = (30×n) + n. Ejemplo: 31×7 = 210 + 7 = 217." },
        { title: "Patrón de Número Primo", description: "Como 31 es primo tiene patrón especial. Dígito de las unidades: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0." },
        { title: "Relación con Días del Mes", description: "31 días es la longitud máxima de un mes. 31, 62 (2 meses), 93 (3 meses), 124 (4 meses) en cálculos de calendario." },
      ],
      32: [
        { title: "Potencia de 2", description: "32=2⁵. Cadena de duplicación: 2→4→8→16→32. Todos los múltiplos preservan este patrón." },
        { title: "Doble del 16", description: "32=2×16. Si conoces la tabla del 16 duplica: 16×5=80, entonces 32×5=160." },
        { title: "Siempre Par y Divisible por 8", description: "Todos los múltiplos de 32 son pares y divisibles por 4, 8 y 16: 32, 64, 96, 128..." },
      ],
      33: [
        { title: "Relación 3×11", description: "33=3×11. Triplica la tabla del 11: 11×4=44, entonces 33×4=132. O multiplica la tabla del 3 por 11." },
        { title: "Patrón Repdigit", description: "33×1=33, 33×2=66, 33×3=99. Los primeros 3 muestran dígitos dobles. Luego 132, 165..." },
        { title: "Siempre Divisible por 3", description: "Todos los múltiplos de 33 son divisibles por 3 y 11. La suma de dígitos es múltiplo de 3." },
      ],
      34: [
        { title: "Doble del 17", description: "34=2×17. Duplica la tabla del 17: 17×6=102, entonces 34×6=204." },
        { title: "Siempre Números Pares", description: "Todos los múltiplos de 34 son pares: 34, 68, 102, 136, 170, 204, 238, 272, 306, 340." },
        { title: "35-1 o 30+4", description: "34×n = (35×n) - n o (30×n) + (4×n). Ejemplo: 34×5 = 175-5 = 170." },
      ],
      35: [
        { title: "Relación 5×7", description: "35=5×7. Puedes usar ambas tablas del 5 y 7: 35×4 = 5×4×7 = 20×7 = 140." },
        { title: "Termina en 5 o 0", description: "Todos los múltiplos de 35 terminan en 5 o 0: 35, 70, 105, 140, 175, 210, 245, 280..." },
        { title: "Cincos del 7", description: "35, 70, 105, 140, 175... Multiplica múltiplos del 7 por 5. O múltiplos del 5 por 7." },
      ],
      36: [
        { title: "Cuadrado del 6", description: "36=6². Además 36=4×9=3×12=2×18. Relaciones de múltiples factores." },
        { title: "Muchos Divisores", description: "36 tiene 9 divisores: 1,2,3,4,6,9,12,18,36. Esto lo hace muy útil para fracciones." },
        { title: "Divisible por 9 y 4", description: "Todos los múltiplos de 36 son divisibles por 4 y 9. La suma de dígitos es múltiplo de 9." },
      ],
      37: [
        { title: "Estrategia 40-3", description: "37=40-3. 37×n = (40×n) - (3×n). Ejemplo: 37×6 = 240 - 18 = 222." },
        { title: "Relación Mágica con 111", description: "37×3=111. Esta relación especial: 37×6=222, 37×9=333. ¡En cada múltiplo de 3 hay resultado repdigit!" },
        { title: "Singularidad de Número Primo", description: "Como 37 es primo tiene patrones especiales. Las estrategias 35+2 o 40-3 son útiles." },
      ],
      38: [
        { title: "Doble del 19", description: "38=2×19. Duplica la tabla del 19: 19×7=133, entonces 38×7=266." },
        { title: "Estrategia 40-2", description: "38=40-2. 38×n = (40×n) - (2×n). Ejemplo: 38×5 = 200 - 10 = 190." },
        { title: "Siempre Números Pares", description: "Todos los múltiplos de 38 son pares: 38, 76, 114, 152, 190, 228, 266, 304, 342, 380." },
      ],
      39: [
        { title: "Relación 3×13", description: "39=3×13. Triplica la tabla del 13: 13×4=52, entonces 39×4=156." },
        { title: "Estrategia 40-1", description: "39=40-1. 39×n = (40×n) - n. Ejemplo: 39×7 = 280 - 7 = 273. ¡Muy práctico!" },
        { title: "Divisible por 3", description: "Todos los múltiplos de 39 son divisibles por 3 y 13. La suma de dígitos es múltiplo de 3." },
      ],
      40: [
        { title: "Relación 4×10", description: "40=4×10. Multiplicar por 40: multiplica por 4, agrega un 0 al final. 7×40: 7×4=28, agrega 0: 280." },
        { title: "Siempre Termina en 0", description: "Todos los múltiplos de 40 terminan en 0: 40, 80, 120, 160, 200, 240, 280, 320, 360, 400." },
        { title: "Cuatro Veces las Decenas", description: "40, 80, 120, 160, 200... Cada uno aumenta en 40. Son 4 veces las decenas." },
      ],
      41: [
        { title: "Estrategia 40+1", description: "41=40+1. 41×n = (40×n) + n. Ejemplo: 41×6 = 240 + 6 = 246. ¡El método más práctico!" },
        { title: "Propiedades de Número Primo", description: "Como 41 es primo solo es divisible por 1 y 41. Dígito de las unidades: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0." },
        { title: "45-4 o 50-9", description: "Estrategias alternativas: 41×4 = 180-16 = 164. O 41×5 = 250-45 = 205." },
      ],
      42: [
        { title: "Relación 6×7", description: "42=6×7. Puedes usar ambas tablas del 6 y 7: 42×3 = 6×3×7 = 18×7 = 126." },
        { title: "2×21 o 3×14", description: "42=2×21=3×14. Se puede calcular de múltiples maneras: 42×5 = 21×10 = 210." },
        { title: "Siempre Divisible por 6", description: "Todos los múltiplos de 42 son divisibles por 2, 3, 6 y 7: 42, 84, 126, 168, 210..." },
      ],
      43: [
        { title: "40+3 o 45-2", description: "43=40+3 o 45-2. Ejemplo: 43×7 = 280+21 = 301 o 315-14 = 301." },
        { title: "Patrón de Número Primo", description: "Como 43 es primo requiere estrategias especiales. Dígito de las unidades: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0." },
        { title: "Estrategia 50-7", description: "Con números grandes: 43×8 = 400-56 = 344. Restar de 50 es un método alternativo." },
      ],
      44: [
        { title: "Cuatro Veces el 11", description: "44=4×11. Cuadruplica la tabla del 11: 11×6=66, entonces 44×6=264." },
        { title: "Similar a Repdigit", description: "44×1=44, 44×2=88. Los primeros 2 muestran dígitos dobles. Luego 132, 176, 220..." },
        { title: "Siempre Par y Divisible por 4", description: "Todos los múltiplos de 44 son pares y divisibles por 4 y 11: 44, 88, 132, 176, 220..." },
      ],
      45: [
        { title: "Relación 5×9", description: "45=5×9. Puedes usar ambas tablas del 5 y 9: 45×4 = 5×4×9 = 20×9 = 180." },
        { title: "Termina en 5 o 0", description: "Todos los múltiplos de 45 terminan en 5 o 0: 45, 90, 135, 180, 225, 270, 315, 360..." },
        { title: "Divisible por 9", description: "Todos los múltiplos de 45 son divisibles por 9. La suma de dígitos es múltiplo de 9: 135 (1+3+5=9)." },
      ],
      46: [
        { title: "Doble del 23", description: "46=2×23. Duplica la tabla del 23: 23×7=161, entonces 46×7=322." },
        { title: "45+1 o 50-4", description: "46×n = (45×n) + n o (50×n) - (4×n). Ejemplo: 46×5 = 225+5 = 230." },
        { title: "Siempre Números Pares", description: "Todos los múltiplos de 46 son pares: 46, 92, 138, 184, 230, 276, 322, 368, 414, 460." },
      ],
      47: [
        { title: "Estrategia 50-3", description: "47=50-3. 47×n = (50×n) - (3×n). Ejemplo: 47×6 = 300 - 18 = 282. ¡El más efectivo!" },
        { title: "Alternativa 45+2", description: "47=45+2. Ejemplo: 47×8 = 360 + 16 = 376. Útil si conoces la tabla del 45." },
        { title: "Singularidad de Número Primo", description: "Como 47 es primo tiene patrones especiales. Dígito de las unidades: 7, 4, 1, 8, 5, 2, 9, 6, 3, 0." },
      ],
      48: [
        { title: "Relaciones de Múltiples Factores", description: "48=6×8=4×12=3×16=2×24. Puede calcularse de muchas formas: 48×5 = 12×20 = 240." },
        { title: "Siempre Par y Múltiples Divisores", description: "Todos los múltiplos de 48 son divisibles por 2, 3, 4, 6, 8 y 12." },
        { title: "Estrategia 50-2", description: "48=50-2. Ejemplo: 48×7 = 350 - 14 = 336. Restar de números redondos." },
      ],
      49: [
        { title: "Cuadrado del 7", description: "49=7². Usa la tabla del 7: 49×3 = 7×7×3 = 7×21 = 147. O 7×3×7." },
        { title: "Estrategia 50-1", description: "49=50-1. 49×n = (50×n) - n. Ejemplo: 49×6 = 300 - 6 = 294. ¡Muy fácil!" },
        { title: "Patrón de Número Cuadrado", description: "49, 98, 147, 196, 245... Múltiplos del 7 por 7. También 7²×1, 7²×2, 7²×3..." },
      ],
      50: [
        { title: "Relación 5×10", description: "50=5×10. Multiplicar por 50: multiplica por 5, agrega un 0 al final. 8×50: 8×5=40, agrega 0: 400." },
        { title: "Siempre Termina en 0 o 50", description: "Todos los múltiplos de 50 terminan en 0 o 50: 50, 100, 150, 200, 250, 300, 350, 400..." },
        { title: "Mitad de 100", description: "50×n = (100×n)÷2. Ejemplo: 50×7 = 700÷2 = 350. Útil en cálculos de porcentajes." },
      ],
      51: [
        { title: "Estrategia 50+1", description: "51=50+1. 51×n = (50×n) + n. Ejemplo: 51×7 = 350 + 7 = 357. ¡Muy práctico!" },
        { title: "Relación 3×17", description: "51=3×17. Triplica la tabla del 17: 17×6=102, entonces 51×6=306." },
        { title: "Alternativa 55-4", description: "51=55-4. Ejemplo: 51×5 = 275-20 = 255. Útil cuando multiplicar por 55 es más fácil." },
      ],
      52: [
        { title: "Relación 4×13", description: "52=4×13. Cuadruplica la tabla del 13: 13×7=91, entonces 52×7=364." },
        { title: "50+2 o 2×26", description: "52×n = (50×n) + (2×n) o duplica la tabla del 26. Ejemplo: 52×5 = 250+10 = 260." },
        { title: "Patrón de Número de Semanas", description: "52 semanas = 1 año. 52, 104 (2 años), 156 (3 años)... Útil en cálculos de calendario." },
      ],
      53: [
        { title: "50+3 o 55-2", description: "53=50+3 o 55-2. Ejemplo: 53×6 = 300+18 = 318 o 330-12 = 318." },
        { title: "Patrón de Número Primo", description: "Como 53 es primo requiere estrategias especiales. Dígito de las unidades: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0." },
        { title: "Estrategia 60-7", description: "Con números grandes: 53×8 = 480-56 = 424. Restar de 60 es un método alternativo." },
      ],
      54: [
        { title: "Relación 6×9", description: "54=6×9. Puedes usar ambas tablas del 6 y 9: 54×5 = 9×5×6 = 45×6 = 270." },
        { title: "2×27 o 3×18", description: "54=2×27=3×18. Puede calcularse de múltiples formas: 54×4 = 27×8 = 216." },
        { title: "Divisible por 9", description: "Todos los múltiplos de 54 son divisibles por 9. La suma de dígitos es múltiplo de 9: 108 (1+0+8=9)." },
      ],
      55: [
        { title: "Relación 5×11", description: "55=5×11. Puedes usar ambas tablas del 5 y 11: 55×4 = 11×4×5 = 44×5 = 220." },
        { title: "Termina en 5 o 0", description: "Todos los múltiplos de 55 terminan en 5 o 0: 55, 110, 165, 220, 275, 330, 385, 440..." },
        { title: "Número Triangular", description: "55 = 1+2+3+4+5+6+7+8+9+10. Esta propiedad de suma especial hace que 55 sea matemáticamente interesante." },
      ],
      56: [
        { title: "Relación 7×8", description: "56=7×8. ¡Una de las parejas de multiplicación más difíciles! Refuerza tanto la tabla del 7 como del 8." },
        { title: "4×14 o 2×28", description: "56=4×14=2×28. Puede calcularse de múltiples formas: 56×5 = 14×20 = 280." },
        { title: "Siempre Par y Divisible por 7", description: "Todos los múltiplos de 56 son pares y divisibles por 4, 7 y 8: 56, 112, 168, 224..." },
      ],
      57: [
        { title: "Relación 3×19", description: "57=3×19. Triplica la tabla del 19: 19×7=133, entonces 57×7=399." },
        { title: "Estrategia 60-3", description: "57=60-3. 57×n = (60×n) - (3×n). Ejemplo: 57×6 = 360 - 18 = 342. ¡Muy fácil!" },
        { title: "Divisible por 3", description: "Todos los múltiplos de 57 son divisibles por 3 y 19. La suma de dígitos es múltiplo de 3." },
      ],
      58: [
        { title: "Doble del 29", description: "58=2×29. Duplica la tabla del 29: 29×7=203, entonces 58×7=406." },
        { title: "Estrategia 60-2", description: "58=60-2. 58×n = (60×n) - (2×n). Ejemplo: 58×6 = 360 - 12 = 348." },
        { title: "Siempre Números Pares", description: "Todos los múltiplos de 58 son pares: 58, 116, 174, 232, 290, 348, 406, 464, 522, 580." },
      ],
      59: [
        { title: "Estrategia 60-1", description: "59=60-1. 59×n = (60×n) - n. Ejemplo: 59×7 = 420 - 7 = 413. ¡PERFECTO!" },
        { title: "Singularidad de Número Primo", description: "Como 59 es primo tiene patrones especiales. Dígito de las unidades: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0." },
        { title: "Alternativa 55+4", description: "59=55+4. Ejemplo: 59×8 = 440 + 32 = 472. Útil si conoces la tabla del 55." },
      ],
      60: [
        { title: "Relación 6×10", description: "60=6×10. Multiplicar por 60: multiplica por 6, agrega un 0 al final. 7×60: 7×6=42, agrega 0: 420." },
        { title: "Siempre Termina en 0", description: "Todos los múltiplos de 60 terminan en 0: 60, 120, 180, 240, 300, 360, 420, 480, 540, 600." },
        { title: "Relaciones de Múltiples Factores", description: "60=2×30=3×20=4×15=5×12=6×10. ¡Puede calcularse de muchas formas!" },
      ],
      61: [
        { title: "Estrategia 60+1", description: "61=60+1. 61×n = (60×n) + n. Ejemplo: 61×7 = 420 + 7 = 427. ¡Muy práctico!" },
        { title: "Propiedades de Número Primo", description: "Como 61 es primo solo es divisible por 1 y 61. Dígito de las unidades: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0." },
        { title: "Alternativa 65-4", description: "61=65-4. Ejemplo: 61×5 = 325-20 = 305. Útil cuando multiplicar por 65 es más fácil." },
      ],
      62: [
        { title: "Doble del 31", description: "62=2×31. Duplica la tabla del 31: 31×7=217, entonces 62×7=434." },
        { title: "Estrategia 60+2", description: "62=60+2. 62×n = (60×n) + (2×n). Ejemplo: 62×6 = 360 + 12 = 372." },
        { title: "Siempre Números Pares", description: "Todos los múltiplos de 62 son pares: 62, 124, 186, 248, 310, 372, 434, 496, 558, 620." },
      ],
      63: [
        { title: "Relación 7×9", description: "63=7×9. Puedes usar ambas tablas del 7 y 9: 63×5 = 9×5×7 = 45×7 = 315." },
        { title: "Alternativa 3×21", description: "63=3×21. Triplica la tabla del 21: 21×4=84, entonces 63×4=252." },
        { title: "Divisible por 7 y 9", description: "Todos los múltiplos de 63 son divisibles por 7 y 9. La suma de dígitos es múltiplo de 9." },
      ],
      64: [
        { title: "Cuadrado del 8", description: "64=8×8=8². Además 64=2⁶. Cadena de duplicación: 2→4→8→16→32→64." },
        { title: "Sexta Potencia del 2", description: "64=2⁶. Importante para arquitectura de 64 bits en computación. Forma la base del sistema binario." },
        { title: "Siempre Par y Divisible por 8", description: "Todos los múltiplos de 64 son pares y divisibles por 4, 8, 16 y 32: 64, 128, 192, 256..." },
      ],
      65: [
        { title: "Relación 5×13", description: "65=5×13. Puedes usar ambas tablas del 5 y 13: 65×4 = 13×4×5 = 52×5 = 260." },
        { title: "Termina en 5 o 0", description: "Todos los múltiplos de 65 terminan en 5 o 0: 65, 130, 195, 260, 325, 390, 455, 520..." },
        { title: "60+5 o 70-5", description: "65×n = (60×n) + (5×n) o (70×n) - (5×n). Ejemplo: 65×6 = 360+30 = 390." },
      ],
      66: [
        { title: "Relación 6×11", description: "66=6×11. Puedes usar ambas tablas del 6 y 11: 66×5 = 11×5×6 = 55×6 = 330." },
        { title: "Similar a Repdigit", description: "66×1=66, 66×2=132. Como 6 veces 11, sigue el patrón de la tabla del 11." },
        { title: "Alternativa 2×33", description: "66=2×33. Duplica la tabla del 33: 33×7=231, entonces 66×7=462." },
      ],
      67: [
        { title: "Estrategia 70-3", description: "67=70-3. 67×n = (70×n) - (3×n). Ejemplo: 67×7 = 490 - 21 = 469. ¡Muy fácil!" },
        { title: "Patrón de Número Primo", description: "Como 67 es primo requiere estrategias especiales. Dígito de las unidades: 7, 4, 1, 8, 5, 2, 9, 6, 3, 0." },
        { title: "Alternativa 65+2", description: "67=65+2. Ejemplo: 67×8 = 520 + 16 = 536. Útil si conoces la tabla del 65." },
      ],
      68: [
        { title: "Relación 4×17", description: "68=4×17. Cuadruplica la tabla del 17: 17×7=119, entonces 68×7=476." },
        { title: "2×34 o 70-2", description: "68=2×34 o 70-2. Ejemplo: 68×6 = 420 - 12 = 408." },
        { title: "Siempre Par y Divisible por 4", description: "Todos los múltiplos de 68 son pares y divisibles por 4 y 17: 68, 136, 204, 272, 340..." },
      ],
      69: [
        { title: "Relación 3×23", description: "69=3×23. Triplica la tabla del 23: 23×7=161, entonces 69×7=483." },
        { title: "Estrategia 70-1", description: "69=70-1. 69×n = (70×n) - n. Ejemplo: 69×6 = 420 - 6 = 414. ¡PERFECTO!" },
        { title: "Divisible por 3", description: "Todos los múltiplos de 69 son divisibles por 3 y 23. La suma de dígitos es múltiplo de 3." },
      ],
      70: [
        { title: "Relación 7×10", description: "70=7×10. Multiplicar por 70: multiplica por 7, agrega un 0 al final. 8×70: 8×7=56, agrega 0: 560." },
        { title: "Siempre Termina en 0", description: "Todos los múltiplos de 70 terminan en 0: 70, 140, 210, 280, 350, 420, 490, 560, 630, 700." },
        { title: "Relaciones de Múltiples Factores", description: "70=2×35=5×14=7×10. ¡Puede calcularse de muchas formas!" },
      ],
      71: [
        { title: "Estrategia 70+1", description: "71=70+1. 71×n = (70×n) + n. Ejemplo: 71×7 = 490 + 7 = 497. ¡Muy práctico!" },
        { title: "Propiedades de Número Primo", description: "Como 71 es primo solo es divisible por 1 y 71. Dígito de las unidades: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0." },
        { title: "Alternativa 75-4", description: "71=75-4. Ejemplo: 71×5 = 375-20 = 355. Útil cuando multiplicar por 75 es más fácil." },
      ],
      72: [
        { title: "Relación 8×9", description: "72=8×9. Puedes usar ambas tablas del 8 y 9: 72×5 = 9×5×8 = 45×8 = 360." },
        { title: "6×12 o 3×24", description: "72=6×12=3×24=4×18. Puede calcularse de múltiples formas: 72×4 = 12×24 = 288." },
        { title: "Muchos Divisores", description: "72 tiene 12 divisores: 1,2,3,4,6,8,9,12,18,24,36,72. ¡Muy útil para fracciones!" },
      ],
      73: [
        { title: "70+3 o 75-2", description: "73=70+3 o 75-2. Ejemplo: 73×6 = 420+18 = 438 o 450-12 = 438." },
        { title: "Patrón de Número Primo", description: "Como 73 es primo requiere estrategias especiales. Es el 21º número primo. Dígito de las unidades: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0." },
        { title: "Estrategia 80-7", description: "Con números grandes: 73×8 = 640-56 = 584. Restar de 80 es un método alternativo." },
      ],
      74: [
        { title: "Relación 2×37", description: "74=2×37. Duplica la tabla del 37: 37×7=259, entonces 74×7=518." },
        { title: "75-1 o 70+4", description: "74×n = (75×n) - n o (70×n) + (4×n). Ejemplo: 74×5 = 375-5 = 370." },
        { title: "Siempre Números Pares", description: "Todos los múltiplos de 74 son pares: 74, 148, 222, 296, 370, 444, 518, 592, 666, 740." },
      ],
      75: [
        { title: "3×25 o 5×15", description: "75=3×25=5×15. Ejemplo: 75×4 = 25×12 = 300 o 15×20 = 300." },
        { title: "Patrón 25, 50, 75, 00", description: "Todos los múltiplos de 75 terminan en 25, 50, 75 o 00. Muy regular y predecible." },
        { title: "Relación de Porcentaje", description: "75 = 100×¾. Entonces 75% = 3/4. Esta relación es muy útil en cálculos de porcentajes." },
      ],
      76: [
        { title: "Relación 4×19", description: "76=4×19. Cuadruplica la tabla del 19: 19×7=133, entonces 76×7=532." },
        { title: "2×38 o 80-4", description: "76=2×38 o 80-4. Ejemplo: 76×6 = 480 - 24 = 456." },
        { title: "Siempre Par y Divisible por 4", description: "Todos los múltiplos de 76 son pares y divisibles por 4 y 19: 76, 152, 228, 304, 380..." },
      ],
      77: [
        { title: "Relación 7×11", description: "77=7×11. Puedes usar ambas tablas del 7 y 11: 77×5 = 11×5×7 = 55×7 = 385." },
        { title: "Patrón Similar a Repdigit", description: "77×1=77, 77×2=154. Como producto de 7 y 11 muestra un patrón especial." },
        { title: "Estrategia 80-3", description: "77=80-3. Ejemplo: 77×6 = 480 - 18 = 462. Restar de números redondos." },
      ],
      78: [
        { title: "Relación 6×13", description: "78=6×13=2×39=3×26. Puede calcularse de múltiples formas: 78×5 = 13×30 = 390." },
        { title: "Estrategia 80-2", description: "78=80-2. 78×n = (80×n) - (2×n). Ejemplo: 78×7 = 560 - 14 = 546." },
        { title: "Divisible por 2 y 3", description: "Todos los múltiplos de 78 son divisibles por 2 y 3. La suma de dígitos es múltiplo de 3." },
      ],
      79: [
        { title: "Estrategia 80-1", description: "79=80-1. 79×n = (80×n) - n. Ejemplo: 79×7 = 560 - 7 = 553. ¡PERFECTO!" },
        { title: "Singularidad de Número Primo", description: "Como 79 es primo tiene patrones especiales. Dígito de las unidades: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0." },
        { title: "Alternativa 75+4", description: "79=75+4. Ejemplo: 79×8 = 600 + 32 = 632. Útil si conoces la tabla del 75." },
      ],
      80: [
        { title: "Relación 8×10", description: "80=8×10. Multiplicar por 80: multiplica por 8, agrega un 0 al final. 7×80: 7×8=56, agrega 0: 560." },
        { title: "Siempre Termina en 0", description: "Todos los múltiplos de 80 terminan en 0: 80, 160, 240, 320, 400, 480, 560, 640, 720, 800." },
        { title: "Relaciones de Múltiples Factores", description: "80=2×40=4×20=5×16=8×10. ¡Puede calcularse de muchas formas!" },
      ],
      81: [
        { title: "Cuadrado del 9", description: "81=9×9=9². Además 81=3⁴. Ejemplo perfecto de relaciones de cuadrados y potencias." },
        { title: "Estrategia 80+1", description: "81=80+1. 81×n = (80×n) + n. Ejemplo: 81×7 = 560 + 7 = 567. ¡Muy práctico!" },
        { title: "Cuarta Potencia del 3", description: "81=3⁴=3×3×3×3. Importante para entender números con exponentes. Divisible por 9 y 27." },
      ],
      82: [
        { title: "Relación 2×41", description: "82=2×41. Duplica la tabla del 41: 41×7=287, entonces 82×7=574." },
        { title: "Estrategia 80+2", description: "82=80+2. 82×n = (80×n) + (2×n). Ejemplo: 82×6 = 480 + 12 = 492." },
        { title: "Siempre Números Pares", description: "Todos los múltiplos de 82 son pares: 82, 164, 246, 328, 410, 492, 574, 656, 738, 820." },
      ],
      83: [
        { title: "80+3 o 85-2", description: "83=80+3 o 85-2. Ejemplo: 83×6 = 480+18 = 498 o 510-12 = 498." },
        { title: "Patrón de Número Primo", description: "Como 83 es primo requiere estrategias especiales. Dígito de las unidades: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0." },
        { title: "Estrategia 90-7", description: "Con números grandes: 83×8 = 720-56 = 664. Restar de 90 es un método alternativo." },
      ],
      84: [
        { title: "Relación 7×12", description: "84=7×12. Puedes usar ambas tablas del 7 y 12: 84×5 = 12×5×7 = 60×7 = 420." },
        { title: "6×14 o 4×21", description: "84=6×14=4×21=3×28. Puede calcularse de múltiples formas: 84×4 = 21×16 = 336." },
        { title: "Muchos Divisores", description: "84 tiene 12 divisores: 1,2,3,4,6,7,12,14,21,28,42,84. ¡Muy útil para fracciones!" },
      ],
      85: [
        { title: "Relación 5×17", description: "85=5×17. Puedes usar ambas tablas del 5 y 17: 85×4 = 17×4×5 = 68×5 = 340." },
        { title: "Termina en 5 o 0", description: "Todos los múltiplos de 85 terminan en 5 o 0: 85, 170, 255, 340, 425, 510, 595, 680..." },
        { title: "90-5 o 80+5", description: "85×n = (90×n) - (5×n) o (80×n) + (5×n). Ejemplo: 85×6 = 540-30 = 510." },
      ],
      86: [
        { title: "Relación 2×43", description: "86=2×43. Duplica la tabla del 43: 43×7=301, entonces 86×7=602." },
        { title: "Estrategia 90-4", description: "86=90-4. 86×n = (90×n) - (4×n). Ejemplo: 86×6 = 540 - 24 = 516." },
        { title: "Siempre Números Pares", description: "Todos los múltiplos de 86 son pares: 86, 172, 258, 344, 430, 516, 602, 688, 774, 860." },
      ],
      87: [
        { title: "Relación 3×29", description: "87=3×29. Triplica la tabla del 29: 29×7=203, entonces 87×7=609." },
        { title: "Estrategia 90-3", description: "87=90-3. 87×n = (90×n) - (3×n). Ejemplo: 87×7 = 630 - 21 = 609. ¡Muy fácil!" },
        { title: "Divisible por 3", description: "Todos los múltiplos de 87 son divisibles por 3 y 29. La suma de dígitos es múltiplo de 3." },
      ],
      88: [
        { title: "Relación 8×11", description: "88=8×11. Puedes usar ambas tablas del 8 y 11: 88×5 = 11×5×8 = 55×8 = 440." },
        { title: "Número Repdigit", description: "88×1=88, 88×2=176. La propiedad repdigit (repetición de 8s) facilita el reconocimiento visual." },
        { title: "4×22 o 2×44", description: "88=4×22=2×44. Puede calcularse de múltiples formas: 88×5 = 22×20 = 440." },
      ],
      89: [
        { title: "Estrategia 90-1", description: "89=90-1. 89×n = (90×n) - n. Ejemplo: 89×7 = 630 - 7 = 623. ¡PERFECTO!" },
        { title: "Singularidad de Número Primo", description: "Como 89 es primo tiene patrones especiales. Dígito de las unidades: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0." },
        { title: "Alternativa 85+4", description: "89=85+4. Ejemplo: 89×8 = 680 + 32 = 712. Útil si conoces la tabla del 85." },
      ],
      90: [
        { title: "Relación 9×10", description: "90=9×10. Multiplicar por 90: multiplica por 9, agrega un 0 al final. 7×90: 7×9=63, agrega 0: 630." },
        { title: "Siempre Termina en 0", description: "Todos los múltiplos de 90 terminan en 0: 90, 180, 270, 360, 450, 540, 630, 720, 810, 900." },
        { title: "Relaciones de Múltiples Factores", description: "90=2×45=3×30=5×18=6×15=9×10. ¡Puede calcularse de muchas formas!" },
      ],
      91: [
        { title: "Relación 7×13", description: "91=7×13. Puedes usar ambas tablas del 7 y 13: 91×5 = 7×5×13 = 35×13 = 455." },
        { title: "Estrategia 90+1", description: "91=90+1. 91×n = (90×n) + n. Ejemplo: 91×6 = 540 + 6 = 546. ¡Práctico!" },
        { title: "Producto de Primos", description: "91=7×13 (producto de dos primos). Divisible por 7 y 13." },
      ],
      92: [
        { title: "Relación 4×23", description: "92=4×23. Cuadruplica la tabla del 23: 23×7=161, entonces 92×7=644." },
        { title: "90+2 o 100-8", description: "92×n = (90×n)+(2×n) o (100×n)-(8×n). Ejemplo: 92×5 = 450+10 = 460." },
        { title: "Siempre Números Pares", description: "Todos los múltiplos de 92 son pares: 92, 184, 276, 368, 460, 552, 644, 736, 828, 920." },
      ],
      93: [
        { title: "Relación 3×31", description: "93=3×31. Triplica la tabla del 31: 31×6=186, entonces 93×6=558." },
        { title: "Estrategia 90+3", description: "93=90+3. 93×n = (90×n) + (3×n). Ejemplo: 93×7 = 630 + 21 = 651." },
        { title: "Divisible por 3", description: "Todos los múltiplos de 93 son divisibles por 3. La suma de los dígitos es múltiplo de 3." },
      ],
      94: [
        { title: "Relación 2×47", description: "94=2×47. Duplica la tabla del 47: 47×7=329, entonces 94×7=658." },
        { title: "Estrategia 100-6", description: "94=100-6. 94×n = (100×n) - (6×n). Ejemplo: 94×5 = 500 - 30 = 470. ¡PERFECTO!" },
        { title: "Siempre Números Pares", description: "Todos los múltiplos de 94 son pares: 94, 188, 282, 376, 470, 564, 658, 752, 846, 940." },
      ],
      95: [
        { title: "Relación 5×19", description: "95=5×19. Puedes usar ambas tablas del 5 y 19: 95×4 = 19×4×5 = 76×5 = 380." },
        { title: "Termina en 5 o 0", description: "Todos los múltiplos de 95 terminan en 5 o 0: 95, 190, 285, 380, 475, 570, 665, 760, 855, 950." },
        { title: "Estrategia 100-5", description: "95=100-5. 95×n = (100×n) - (5×n). Ejemplo: 95×6 = 600 - 30 = 570. ¡Muy fácil!" },
      ],
      96: [
        { title: "Relación 8×12", description: "96=8×12. Puedes usar ambas tablas: 96×5 = 12×5×8 = 60×8 = 480." },
        { title: "Relaciones de Múltiples Factores", description: "96=8×12=6×16=4×24=3×32=2×48. ¡Puede calcularse de muchas formas!" },
        { title: "Potencia de 2 × 3", description: "96=2⁵×3. Relación 32×3. Tiene muchos divisores (12 divisores)." },
      ],
      97: [
        { title: "Estrategia 100-3", description: "97=100-3. 97×n = (100×n) - (3×n). Ejemplo: 97×7 = 700 - 21 = 679. ¡PERFECTO!" },
        { title: "Patrones de Número Primo", description: "Como 97 es primo tiene patrones especiales. Dígito de las unidades: 7, 4, 1, 8, 5, 2, 9, 6, 3, 0." },
        { title: "Primo Más Cercano a 100", description: "El mayor número primo menor que 100. Esta propiedad facilita mucho el cálculo." },
      ],
      98: [
        { title: "Relación 2×49", description: "98=2×49=2×7². Duplica la tabla del 49: 49×7=343, entonces 98×7=686." },
        { title: "Estrategia 100-2", description: "98=100-2. 98×n = (100×n) - (2×n). Ejemplo: 98×6 = 600 - 12 = 588. ¡SÚPER FÁCIL!" },
        { title: "Siempre Números Pares", description: "Todos los múltiplos de 98 son pares: 98, 196, 294, 392, 490, 588, 686, 784, 882, 980." },
      ],
      99: [
        { title: "Relación 9×11", description: "99=9×11. Puedes usar ambas tablas: 99×5 = 11×5×9 = 55×9 = 495." },
        { title: "Estrategia 100-1", description: "99=100-1. 99×n = (100×n) - n. Ejemplo: 99×7 = 700 - 7 = 693. ¡PERFECTO!" },
        { title: "Patrón Repdigit", description: "99 (repetición de 9s), 198, 297, 396, 495... ¡El reconocimiento visual es fácil!" },
      ],
      100: [
        { title: "Relación 10×10", description: "100=10×10=10². Multiplicar por 100: agrega dos ceros al final. 7×100: ¡700!" },
        { title: "Siempre Termina en 00", description: "Todos los múltiplos de 100 terminan en 00: 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000." },
        { title: "Base del Sistema Decimal", description: "100=10². Sistema de centenas, cálculos de porcentajes, ¡base para entender números decimales!" },
      ],
    }
    return patterns[number] || []
  }

  const getCommonMistakes = () => {
    const mistakes: { [key: number]: { mistake: string; solution: string }[] } = {
      1: [
        { mistake: "Pensar que 1×1=2", solution: "Recuerda: Todo lo que se multiplica por 1 es igual a sí mismo. 1 grupo de 1 es solo 1." },
        { mistake: "Confundir con la suma", solution: "Multiplicar por 1 es diferente de sumar. 5+1=6, pero 5×1=5." },
      ],
      2: [
        { mistake: "Confundir 2×6=12 con 2×7=14", solution: "Usa contar de dos en dos: 2, 4, 6, 8, 10, 12, 14. Cuenta cuidadosamente sin saltarte." },
        { mistake: "Confundirse con números grandes", solution: "Descompón: 2×8 es solo 8+8. Duplicar es suma simple." },
      ],
      3: [
        { mistake: "Confundir 3×6=18 con 3×7=21", solution: "Recuerda el patrón +3: después de 18 viene 21. Cuenta de tres en tres para verificar." },
        { mistake: "Confundir 3×8=24 con 3×9=27", solution: "Usa el truco de suma de dígitos: 24 (2+4=6) y 27 (2+7=9), sigue el patrón 3-6-9." },
      ],
      4: [
        { mistake: "Pensar que 4×7=24 (en lugar de 28)", solution: "Recuerda: 4×6=24, entonces 4×7 debe ser 4 más, es decir 28." },
        { mistake: "Confundir con la tabla del 2", solution: "La tabla del 4 es siempre el doble de la tabla del 2. Verifica duplicando." },
      ],
      5: [
        { mistake: "Confundir el orden (25 antes de 20)", solution: "El patrón es consistente: 5, 10, 15, 20, 25. Cada uno aumenta en 5." },
        { mistake: "Pensar que 5×impar siempre termina en 5", solution: "En realidad 5×par termina en 0, 5×impar termina en 5." },
      ],
      6: [
        { mistake: "Confundir 6×7=42 con 6×8=48", solution: "¡Esta es una pareja difícil! Recuerda: 6×7=42 (rima 'siete seis'), luego agrega 6: 48." },
        { mistake: "Confundir 6×9=54 con 6×8=48", solution: "Usa la tabla del 6: 6×8=48, luego +6=54. O calcula 6×9 como 60-6=54." },
        { mistake: "Confundir con la tabla del 3", solution: "La tabla del 6 es siempre el doble de la tabla del 3. 3×4=12, entonces 6×4=24." },
      ],
      7: [
        { mistake: "Confundir 7×8=56 con 7×6=42", solution: "¡Estos son los más difíciles! Truco de memoria: '5-6-7-8' (56=7×8). O desde 7×7=49, luego +7=56." },
        { mistake: "Confundir 7×9=63 con 7×8=56", solution: "Patrón: 7×8=56, luego +7=63. O suma de dígitos: 63 (6+3=9), 56 (5+6=11)." },
        { mistake: "Saltarse completamente la tabla del 7", solution: "Aunque el 7 parezca difícil, se puede aprender con práctica. Empieza con pasos pequeños: memoriza los fáciles 7×1, 7×2, 7×5, 7×10." },
      ],
      8: [
        { mistake: "Confundir 8×7=56 con 8×8=64", solution: "Forma fácil de memorizar 8×8=64: 'ocho ocho 64' o '8²=64'." },
        { mistake: "Confundir 8×9=72 con 8×8=64", solution: "Comienza desde 8×8=64, luego +8=72. O 80-8=72 (10×8 menos 8)." },
        { mistake: "Confundir con la tabla del 4", solution: "El 8 es siempre el doble del 4. 4×6=24, entonces 8×6=48. Verifica duplicando." },
      ],
      9: [
        { mistake: "Confundir 9×8=72 con 9×7=63", solution: "Usa el truco de los dedos o suma de dígitos: 72 (7+2=9), 63 (6+3=9). Recuerda que 72>63." },
        { mistake: "Aplicar mal el truco de los dedos", solution: "Orden correcto: Dedos izquierdos 1-5, dedos derechos 6-10. Los dedos a la izquierda del dedo doblado son decenas, los de la derecha son unidades." },
        { mistake: "Confundir 9×9=81 con 9×8=72", solution: "9×9=81 es especial: 'nueve nueve 81' o '9²=81'. Suma de dígitos: 81 (8+1=9), 72 (7+2=9)." },
      ],
      10: [
        { mistake: "Olvidar el cero", solution: "El recordatorio más fácil: cuando multiplicas por 10, SOLO agrega un cero al final. 6×10=60, 25×10=250." },
        { mistake: "Agregar demasiados ceros", solution: "Multiplicar por 10 agrega SOLO un cero. No 100 (dos ceros), 1000 (tres ceros), solo 10 (un cero)." },
      ],
      11: [
        { mistake: "Pensar que 11×12=121 (en lugar de 132)", solution: "El patrón de dígitos dobles solo funciona de 11×1 a 11×9. 11×10=110, 11×12=132." },
        { mistake: "Aplicar mal el truco de suma de dígitos", solution: "23×11: Suma los dígitos (2+3=5), colócalo en el medio: 253. Si la suma >9, hay acarreo: 67×11: 6_(6+7=13)_7 = 6_(13)_7 = 737." },
        { mistake: "Pensar que 11×11=111", solution: "11×11=121, no 111. Cada múltiplo de 11 agrega 11 al anterior: 99+11=110, 110+11=121." },
      ],
      12: [
        { mistake: "Confundir 12×8=84 con 12×9=108", solution: "12×8=96 (8 docenas), 12×9=108 (9 docenas). 84 en realidad es 12×7. Verifica contando docenas." },
        { mistake: "Confundir 12 con 10", solution: "12×5=60, 10×5=50. El 12 es siempre 20% más que 10 (10 más 2)." },
      ],
      13: [
        { mistake: "Confundir 13×7=91 con 13×8=104", solution: "13×7=91, 13×8=104. La diferencia es 13. Usa la estrategia 10+3: 70+21=91, 80+24=104." },
        { mistake: "Confundir 13 con 3 o 30", solution: "13×4=52, no 3×4=12. Tampoco 30×4=120. El 13 es exactamente 10+3." },
      ],
      14: [
        { mistake: "Pensar que 14×7=98 (¡correcto es 14×7=98!)", solution: "¡14×7=98 es correcto! Pero no olvides 14×8=112 (98+14=112). Recuerda que es el doble de la tabla del 7." },
        { mistake: "Confundir 14×6=72 con 14×6=84", solution: "14×6=84 es correcto (7×6=42, ×2=84). 72 en realidad es 12×6 o 8×9." },
      ],
      15: [
        { mistake: "Pensar que 15×6=80 (en lugar de 90)", solution: "15×6=90 (1.5 docenas). 80 en realidad es 16×5. Calcula 15×6 como 3×6=18, luego ×5=90 o 5×6=30, luego ×3=90." },
        { mistake: "Confundir 15×4=50", solution: "15×4=60, no 50. Recuerda que 15 minutos×4 = 1 hora (60 minutos)." },
      ],
      16: [
        { mistake: "Confundir 16×6=84 con 16×6=96", solution: "16×6=96 es correcto (8×6=48, ×2=96). 84 en realidad es 14×6 o 12×7." },
        { mistake: "Confundir 16 con 6", solution: "16×4=64, no 6×4=24. 16 es muy diferente de 6. Recuerda que 16=2⁴." },
      ],
      17: [
        { mistake: "Confundir 17×6=102 con 17×7=119", solution: "Estrategia 20-3: 17×6=120-18=102, 17×7=140-21=119. O 10+7: 60+42=102, 70+49=119." },
        { mistake: "Confundir 17×8=126 con 17×9=153", solution: "17×8=136 (170-34), 17×9=153 (180-27). 126 en realidad es 18×7." },
      ],
      18: [
        { mistake: "Confundir 18×7=126 con 18×8=144", solution: "18×7=126 (9×7=63, ×2), 18×8=144 (9×8=72, ×2). La diferencia es 18." },
        { mistake: "Confundir 18×6=108 con 18×6=104", solution: "18×6=108 es correcto (6×6=36, ×3 o 9×6=54, ×2). 104 en realidad es 13×8." },
      ],
      19: [
        { mistake: "Pensar que 19×5=100 (en lugar de 95)", solution: "19×5=95, no 100 (20×5=100). 19 es 1 menos que 20, así que 100-5=95." },
        { mistake: "Confundir 19×6=114 con 19×7=133", solution: "Estrategia 20-1: 19×6=120-6=114, 19×7=140-7=133. Cada vez resta el multiplicador de 20." },
      ],
      20: [
        { mistake: "Pensar que 20×7=120 (en lugar de 140)", solution: "20×7=140, no 120 (20×6=120). 10×7=70, duplica: 140. O 7×20=7×10×2." },
        { mistake: "Olvidar el cero", solution: "Todos los múltiplos de 20 deben terminar en 0: 20, 40, 60, 80, 100... ¡20×8=160, no 16!" },
      ],
      21: [
        { mistake: "Pensar que 21×5=100 (en lugar de 105)", solution: "21×5=105, no 100. 20×5=100, más 5 más: 105. O 3×7×5 = 21×5 = 105." },
        { mistake: "Confundir 21×7=140 con 21×7=147", solution: "21×7=147 es correcto (3×7×7 o 140+7). 140 en realidad es 20×7." },
        { mistake: "Confundir 21 con 12", solution: "21×4=84, no 12×4=48. Presta atención al orden de los dígitos: 21 es muy diferente de 12." },
      ],
      22: [
        { mistake: "Pensar que 22×5=100 (en lugar de 110)", solution: "22×5=110, no 100. 11×5=55, duplica: 110. O 20×5=100, más 2×5=10: 110." },
        { mistake: "Confundir 22×9=198 con 22×9=188", solution: "22×9=198 es correcto (11×9=99, ×2). 188 es otro cálculo." },
      ],
      23: [
        { mistake: "Pensar que 23×4=82 (en lugar de 92)", solution: "23×4=92, no 82. 20×4=80, más 3×4=12: 92. 82 es otro resultado." },
        { mistake: "Confundir 23×5=105 con 23×5=115", solution: "23×5=115 es correcto (20×5=100, 3×5=15, total 115). 105 en realidad es 21×5." },
      ],
      24: [
        { mistake: "Pensar que 24×5=100 (en lugar de 120)", solution: "24×5=120, no 100. Un día tiene 24 horas, 5 días = 120 horas. O 12×10=120." },
        { mistake: "Confundir 24×7=158 con 24×7=168", solution: "24×7=168 es correcto (4×6×7 o 3×8×7). 158 es otro resultado." },
      ],
      25: [
        { mistake: "Pensar que 25×8=180 (en lugar de 200)", solution: "25×8=200, no 180. 25×4=100, entonces 25×8=200. O 5×5×8 = 25×8 = 200." },
        { mistake: "Adivinar incorrectamente los últimos dos dígitos", solution: "¡Los múltiplos de 25 siempre terminan en 25, 50, 75 o 00. No puede ser otra cosa!" },
      ],
      26: [
        { mistake: "Confundir 26×5=120 con 26×5=130", solution: "26×5=130 es correcto (13×5=65, ×2). 120 en realidad es 24×5." },
        { mistake: "Confundir 26 con 16 o 36", solution: "26×4=104, no 16×4=64 o 36×4=144. Lee los dígitos cuidadosamente." },
      ],
      27: [
        { mistake: "Pensar que 27×4=98 (en lugar de 108)", solution: "27×4=108, no 98. 30×4=120, menos 3×4=12: 108. O 9×4=36, ×3=108." },
        { mistake: "Confundir 27×7=179 con 27×7=189", solution: "27×7=189 es correcto (30×7=210, menos 3×7=21: 189). 179 es otro resultado." },
      ],
      28: [
        { mistake: "Pensar que 28×5=130 (en lugar de 140)", solution: "28×5=140, no 130. 4×7×5 = 20×7 = 140. O 14×10=140." },
        { mistake: "Confundir 28×9=242 con 28×9=252", solution: "28×9=252 es correcto (4×7×9 o 30×9 menos 2×9). 242 es otro resultado." },
      ],
      29: [
        { mistake: "Pensar que 29×5=140 (en lugar de 145)", solution: "29×5=145, no 140. 30×5=150, menos 5: 145. 140 en realidad es 28×5." },
        { mistake: "Confundir 29×7=203 con 29×7=193", solution: "29×7=203 es correcto (30×7=210, menos 7). 193 es otro cálculo." },
      ],
      30: [
        { mistake: "Pensar que 30×7=200 (en lugar de 210)", solution: "30×7=210, no 200 (30×6=180, 30×7=210). 10×7=70, ×3=210." },
        { mistake: "Olvidar el cero", solution: "Todos los múltiplos de 30 deben terminar en 0: 30, 60, 90, 120, 150... ¡30×8=240, no 24!" },
      ],
      31: [
        { mistake: "Pensar que 31×5=145 (en lugar de 155)", solution: "31×5=155, no 145. 30×5=150, más 5: 155. 145 en realidad es 29×5." },
        { mistake: "Confundir 31×7=207 con 31×7=217", solution: "31×7=217 es correcto (30×7=210, más 7). 207 es otro resultado." },
      ],
      32: [
        { mistake: "Pensar que 32×5=150 (en lugar de 160)", solution: "32×5=160, no 150. 16×5=80, duplica: 160. O 32×10=320, la mitad es 160." },
        { mistake: "Confundir 32×7=214 con 32×7=224", solution: "32×7=224 es correcto (16×7=112, ×2). 214 es otro cálculo." },
      ],
      33: [
        { mistake: "Pensar que 33×4=122 (en lugar de 132)", solution: "33×4=132, no 122. 11×4=44, ×3=132. O 30×4=120, más 3×4=12: 132." },
        { mistake: "Confundir 33×9=297 con 33×9=287", solution: "33×9=297 es correcto (11×9=99, ×3). 287 es otro resultado." },
      ],
      34: [
        { mistake: "Pensar que 34×5=160 (en lugar de 170)", solution: "34×5=170, no 160. 17×5=85, duplica: 170. 160 en realidad es 32×5." },
        { mistake: "Confundir 34×8=262 con 34×8=272", solution: "34×8=272 es correcto (17×8=136, ×2). 262 es otro resultado." },
      ],
      35: [
        { mistake: "Pensar que 35×6=200 (en lugar de 210)", solution: "35×6=210, no 200. 5×6=30, 7×6=42, 30×7=210 o 5×42=210." },
        { mistake: "Confundir 35×8=270 con 35×8=280", solution: "35×8=280 es correcto (5×8=40, 7×8=56, 40×7=280). 270 en realidad es 27×10." },
      ],
      36: [
        { mistake: "Pensar que 36×5=170 (en lugar de 180)", solution: "36×5=180, no 170. 6×5=30, ×6=180. O 18×10=180. 170 en realidad es 34×5." },
        { mistake: "Confundir 36×7=242 con 36×7=252", solution: "36×7=252 es correcto (6×7=42, ×6 o 9×7=63, ×4). 242 es otro resultado." },
      ],
      37: [
        { mistake: "Pensar que 37×5=175 (en lugar de 185)", solution: "37×5=185, no 175. 40×5=200, menos 3×5=15: 185. 175 en realidad es 35×5." },
        { mistake: "Calcular incorrectamente después de 37×3=111", solution: "37×3=111, 37×6=222, 37×9=333. ¡Cada múltiplo de 3 es repdigit! 37×7=259, 37×8=296." },
      ],
      38: [
        { mistake: "Pensar que 38×5=180 (en lugar de 190)", solution: "38×5=190, no 180. 19×5=95, duplica: 190. 180 en realidad es 36×5." },
        { mistake: "Confundir 38×9=332 con 38×9=342", solution: "38×9=342 es correcto (19×9=171, ×2 o 40×9=360, menos 2×9=18). 332 es otro resultado." },
      ],
      39: [
        { mistake: "Pensar que 39×5=185 (en lugar de 195)", solution: "39×5=195, no 185. 40×5=200, menos 5: 195. 185 en realidad es 37×5." },
        { mistake: "Confundir 39×8=302 con 39×8=312", solution: "39×8=312 es correcto (40×8=320, menos 8). 302 es otro resultado." },
      ],
      40: [
        { mistake: "Pensar que 40×7=270 (en lugar de 280)", solution: "40×7=280, no 270. 4×7=28, agrega un 0: 280. O 10×7=70, ×4=280." },
        { mistake: "Olvidar el cero", solution: "Todos los múltiplos de 40 deben terminar en 0: 40, 80, 120, 160, 200... ¡40×9=360, no 36!" },
      ],
      41: [
        { mistake: "Pensar que 41×5=200 (en lugar de 205)", solution: "41×5=205, no 200. 40×5=200, más 5: 205. Siempre recuerda agregar ese 1 extra." },
        { mistake: "Confundir 41×9=360 con 41×9=369", solution: "41×9=369 es correcto (40×9=360, más 9). 360 en realidad es 40×9." },
      ],
      42: [
        { mistake: "Pensar que 42×5=200 (en lugar de 210)", solution: "42×5=210, no 200. 6×5=30, 7×5=35, 30+35=65... O 40×5=200, más 2×5=10: 210." },
        { mistake: "Confundir 42×8=326 con 42×8=336", solution: "42×8=336 es correcto (6×8=48, 7×8=56 o 40×8=320, más 16). 326 es otro resultado." },
      ],
      43: [
        { mistake: "Pensar que 43×5=205 (en lugar de 215)", solution: "43×5=215, no 205. 40×5=200, más 3×5=15: 215. 205 en realidad es 41×5." },
        { mistake: "Confundir 43×9=377 con 43×9=387", solution: "43×9=387 es correcto (40×9=360, más 3×9=27). 377 es otro resultado." },
      ],
      44: [
        { mistake: "Pensar que 44×5=210 (en lugar de 220)", solution: "44×5=220, no 210. 11×5=55, ×4=220. O 40×5=200, más 4×5=20: 220." },
        { mistake: "Confundir 44×9=386 con 44×9=396", solution: "44×9=396 es correcto (11×9=99, ×4 o 40×9=360, más 4×9=36). 386 es otro resultado." },
      ],
      45: [
        { mistake: "Pensar que 45×5=220 (en lugar de 225)", solution: "45×5=225, no 220. 9×5=45, ×5=225. O 40×5=200, más 5×5=25: 225." },
        { mistake: "Confundir 45×8=350 con 45×8=360", solution: "45×8=360 es correcto (9×8=72, ×5 o 5×8=40, ×9). 350 es otro resultado." },
      ],
      46: [
        { mistake: "Pensar que 46×5=225 (en lugar de 230)", solution: "46×5=230, no 225. 23×5=115, ×2=230. O 50×5=250, menos 4×5=20: 230." },
        { mistake: "Confundir 46×9=404 con 46×9=414", solution: "46×9=414 es correcto (23×9=207, ×2 o 50×9=450, menos 4×9=36). 404 es otro resultado." },
      ],
      47: [
        { mistake: "Pensar que 47×5=230 (en lugar de 235)", solution: "47×5=235, no 230. 50×5=250, menos 3×5=15: 235. 230 en realidad es 46×5." },
        { mistake: "Confundir 47×9=413 con 47×9=423", solution: "47×9=423 es correcto (50×9=450, menos 3×9=27). 413 es otro resultado." },
      ],
      48: [
        { mistake: "Pensar que 48×5=230 (en lugar de 240)", solution: "48×5=240, no 230. 6×5=30, 8×5=40, 30×8=240. O 50×5=250, menos 2×5=10: 240." },
        { mistake: "Confundir 48×9=422 con 48×9=432", solution: "48×9=432 es correcto (6×9=54, ×8 o 50×9=450, menos 2×9=18). 422 es otro resultado." },
      ],
      49: [
        { mistake: "Pensar que 49×5=240 (en lugar de 245)", solution: "49×5=245, no 240. 50×5=250, menos 5: 245. O 7×5=35, ×7=245." },
        { mistake: "Confundir 49×9=431 con 49×9=441", solution: "49×9=441 es correcto (50×9=450, menos 9). Además 441=21² (número cuadrado). 431 es otro resultado." },
      ],
      50: [
        { mistake: "Pensar que 50×7=340 (en lugar de 350)", solution: "50×7=350, no 340. 5×7=35, agrega un 0: 350. O 100×7=700, ÷2=350." },
        { mistake: "Olvidar el cero", solution: "Los múltiplos impares de 50 terminan en 50, los pares en 0: 50, 100, 150, 200, 250... ¡50×8=400, no 40!" },
      ],
      51: [
        { mistake: "Pensar que 51×5=250 (en lugar de 255)", solution: "51×5=255, no 250. 50×5=250, más 5: 255. Siempre recuerda agregar ese 1 extra." },
        { mistake: "Confundir 51×9=450 con 51×9=459", solution: "51×9=459 es correcto (50×9=450, más 9). 450 en realidad es 50×9." },
      ],
      52: [
        { mistake: "Pensar que 52×5=250 (en lugar de 260)", solution: "52×5=260, no 250. 13×5=65, ×4=260. O 50×5=250, más 2×5=10: 260." },
        { mistake: "Confundir 52×9=458 con 52×9=468", solution: "52×9=468 es correcto (13×9=117, ×4 o 50×9=450, más 18). 458 es otro resultado." },
      ],
      53: [
        { mistake: "Pensar que 53×5=255 (en lugar de 265)", solution: "53×5=265, no 255. 50×5=250, más 3×5=15: 265. 255 en realidad es 51×5." },
        { mistake: "Confundir 53×9=467 con 53×9=477", solution: "53×9=477 es correcto (50×9=450, más 3×9=27). 467 es otro resultado." },
      ],
      54: [
        { mistake: "Pensar que 54×5=260 (en lugar de 270)", solution: "54×5=270, no 260. 6×5=30, 9×5=45, 30×9=270. O 50×5=250, más 4×5=20: 270." },
        { mistake: "Confundir 54×9=476 con 54×9=486", solution: "54×9=486 es correcto (6×9=54, ×9 o 60×9=540, menos 6×9=54). 476 es otro resultado." },
      ],
      55: [
        { mistake: "Pensar que 55×5=270 (en lugar de 275)", solution: "55×5=275, no 270. 11×5=55, ×5=275. O 50×5=250, más 5×5=25: 275." },
        { mistake: "Confundir 55×9=485 con 55×9=495", solution: "55×9=495 es correcto (11×9=99, ×5 o 60×9=540, menos 5×9=45). 485 es otro resultado." },
      ],
      56: [
        { mistake: "Pensar que 56×5=270 (en lugar de 280)", solution: "56×5=280, no 270. 7×5=35, 8×5=40, 35×8=280. O 60×5=300, menos 4×5=20: 280." },
        { mistake: "Confundir 56×9=494 con 56×9=504", solution: "56×9=504 es correcto (7×9=63, ×8 o 60×9=540, menos 4×9=36). 494 es otro resultado." },
      ],
      57: [
        { mistake: "Pensar que 57×5=280 (en lugar de 285)", solution: "57×5=285, no 280. 60×5=300, menos 3×5=15: 285. 280 en realidad es 56×5." },
        { mistake: "Confundir 57×9=503 con 57×9=513", solution: "57×9=513 es correcto (60×9=540, menos 3×9=27). 503 es otro resultado." },
      ],
      58: [
        { mistake: "Pensar que 58×5=280 (en lugar de 290)", solution: "58×5=290, no 280. 29×5=145, ×2=290. O 60×5=300, menos 2×5=10: 290." },
        { mistake: "Confundir 58×9=512 con 58×9=522", solution: "58×9=522 es correcto (29×9=261, ×2 o 60×9=540, menos 2×9=18). 512 es otro resultado." },
      ],
      59: [
        { mistake: "Pensar que 59×5=290 (en lugar de 295)", solution: "59×5=295, no 290. 60×5=300, menos 5: 295. ¡Muy simple!" },
        { mistake: "Confundir 59×9=521 con 59×9=531", solution: "59×9=531 es correcto (60×9=540, menos 9). 531 también es 9×59. 521 es otro resultado." },
      ],
      60: [
        { mistake: "Pensar que 60×7=410 (en lugar de 420)", solution: "60×7=420, no 410. 6×7=42, agrega un 0: 420. O 10×7=70, ×6=420." },
        { mistake: "Olvidar el cero", solution: "Todos los múltiplos de 60 deben terminar en 0: 60, 120, 180, 240, 300, 360, 420... ¡60×9=540, no 54!" },
      ],
      61: [
        { mistake: "Pensar que 61×5=300 (en lugar de 305)", solution: "61×5=305, no 300. 60×5=300, más 5: 305. Siempre recuerda agregar ese 1 extra." },
        { mistake: "Confundir 61×9=540 con 61×9=549", solution: "61×9=549 es correcto (60×9=540, más 9). 540 en realidad es 60×9." },
      ],
      62: [
        { mistake: "Pensar que 62×5=300 (en lugar de 310)", solution: "62×5=310, no 300. 31×5=155, ×2=310. O 60×5=300, más 2×5=10: 310." },
        { mistake: "Confundir 62×9=548 con 62×9=558", solution: "62×9=558 es correcto (31×9=279, ×2 o 60×9=540, más 18). 548 es otro resultado." },
      ],
      63: [
        { mistake: "Pensar que 63×5=305 (en lugar de 315)", solution: "63×5=315, no 305. 7×5=35, 9×5=45, 35×9=315. O 60×5=300, más 3×5=15: 315." },
        { mistake: "Confundir 63×9=557 con 63×9=567", solution: "63×9=567 es correcto (7×9=63, ×9 o 60×9=540, más 27). 557 es otro resultado." },
      ],
      64: [
        { mistake: "Pensar que 64×5=310 (en lugar de 320)", solution: "64×5=320, no 310. 8×5=40, ×8=320. O 60×5=300, más 4×5=20: 320." },
        { mistake: "Confundir 64×9=566 con 64×9=576", solution: "64×9=576 es correcto (8×9=72, ×8 o 60×9=540, más 36). Además 576=24². 566 es otro resultado." },
      ],
      65: [
        { mistake: "Pensar que 65×5=320 (en lugar de 325)", solution: "65×5=325, no 320. 13×5=65, ×5=325. O 60×5=300, más 5×5=25: 325." },
        { mistake: "Confundir 65×9=575 con 65×9=585", solution: "65×9=585 es correcto (13×9=117, ×5 o 70×9=630, menos 5×9=45). 575 es otro resultado." },
      ],
      66: [
        { mistake: "Pensar que 66×5=325 (en lugar de 330)", solution: "66×5=330, no 325. 11×5=55, ×6=330. O 60×5=300, más 6×5=30: 330." },
        { mistake: "Confundir 66×9=584 con 66×9=594", solution: "66×9=594 es correcto (11×9=99, ×6 o 70×9=630, menos 4×9=36). 584 es otro resultado." },
      ],
      67: [
        { mistake: "Pensar que 67×5=330 (en lugar de 335)", solution: "67×5=335, no 330. 70×5=350, menos 3×5=15: 335. 330 en realidad es 66×5." },
        { mistake: "Confundir 67×9=593 con 67×9=603", solution: "67×9=603 es correcto (70×9=630, menos 3×9=27). 593 es otro resultado." },
      ],
      68: [
        { mistake: "Pensar que 68×5=330 (en lugar de 340)", solution: "68×5=340, no 330. 17×5=85, ×4=340. O 70×5=350, menos 2×5=10: 340." },
        { mistake: "Confundir 68×9=602 con 68×9=612", solution: "68×9=612 es correcto (17×9=153, ×4 o 70×9=630, menos 2×9=18). 602 es otro resultado." },
      ],
      69: [
        { mistake: "Pensar que 69×5=340 (en lugar de 345)", solution: "69×5=345, no 340. 70×5=350, menos 5: 345. ¡Muy simple!" },
        { mistake: "Confundir 69×9=611 con 69×9=621", solution: "69×9=621 es correcto (70×9=630, menos 9). 621=3×207. 611 es otro resultado." },
      ],
      70: [
        { mistake: "Pensar que 70×7=480 (en lugar de 490)", solution: "70×7=490, no 480. 7×7=49, agrega un 0: 490. O 10×7=70, ×7=490." },
        { mistake: "Olvidar el cero", solution: "Todos los múltiplos de 70 deben terminar en 0: 70, 140, 210, 280, 350, 420, 490... ¡70×9=630, no 63!" },
      ],
      71: [
        { mistake: "Pensar que 71×5=350 (en lugar de 355)", solution: "71×5=355, no 350. 70×5=350, más 5: 355. Siempre recuerda agregar ese 1 extra." },
        { mistake: "Confundir 71×9=630 con 71×9=639", solution: "71×9=639 es correcto (70×9=630, más 9). 630 en realidad es 70×9." },
      ],
      72: [
        { mistake: "Pensar que 72×5=350 (en lugar de 360)", solution: "72×5=360, no 350. 8×5=40, 9×5=45, 40×9=360. O 70×5=350, más 2×5=10: 360." },
        { mistake: "Confundir 72×9=638 con 72×9=648", solution: "72×9=648 es correcto (8×9=72, ×9 o 80×9=720, menos 72). 638 es otro resultado." },
      ],
      73: [
        { mistake: "Pensar que 73×5=355 (en lugar de 365)", solution: "73×5=365, no 355. 70×5=350, más 3×5=15: 365. ¡Además 365=número de días en un año!" },
        { mistake: "Confundir 73×9=647 con 73×9=657", solution: "73×9=657 es correcto (70×9=630, más 3×9=27). 647 es otro resultado." },
      ],
      74: [
        { mistake: "Pensar que 74×5=360 (en lugar de 370)", solution: "74×5=370, no 360. 37×5=185, ×2=370. O 75×5=375, menos 5: 370." },
        { mistake: "Confundir 74×9=656 con 74×9=666", solution: "74×9=666 es correcto (37×9=333, ×2 o 75×9=675, menos 9). 666 es un número repdigit. 656 es otro resultado." },
      ],
      75: [
        { mistake: "Pensar que 75×5=370 (en lugar de 375)", solution: "75×5=375, no 370. 15×5=75, ×5=375. O 25×5=125, ×3=375." },
        { mistake: "Confundir 75×9=665 con 75×9=675", solution: "75×9=675 es correcto (25×9=225, ×3 o 80×9=720, menos 5×9=45). 675=3³×5². 665 es otro resultado." },
      ],
      76: [
        { mistake: "Pensar que 76×5=370 (en lugar de 380)", solution: "76×5=380, no 370. 19×5=95, ×4=380. O 80×5=400, menos 4×5=20: 380." },
        { mistake: "Confundir 76×9=674 con 76×9=684", solution: "76×9=684 es correcto (19×9=171, ×4 o 80×9=720, menos 4×9=36). 684 es otro resultado." },
      ],
      77: [
        { mistake: "Pensar que 77×5=380 (en lugar de 385)", solution: "77×5=385, no 380. 7×5=35, 11×5=55, 35×11=385. O 80×5=400, menos 3×5=15: 385." },
        { mistake: "Confundir 77×9=683 con 77×9=693", solution: "77×9=693 es correcto (7×9=63, ×11 o 80×9=720, menos 3×9=27). 693=7×9×11. 683 es otro resultado." },
      ],
      78: [
        { mistake: "Pensar que 78×5=380 (en lugar de 390)", solution: "78×5=390, no 380. 13×5=65, 6×5=30, 65×6=390. O 80×5=400, menos 2×5=10: 390." },
        { mistake: "Confundir 78×9=692 con 78×9=702", solution: "78×9=702 es correcto (13×9=117, ×6 o 80×9=720, menos 2×9=18). 702 es otro resultado." },
      ],
      79: [
        { mistake: "Pensar que 79×5=390 (en lugar de 395)", solution: "79×5=395, no 390. 80×5=400, menos 5: 395. ¡Muy simple!" },
        { mistake: "Confundir 79×9=701 con 79×9=711", solution: "79×9=711 es correcto (80×9=720, menos 9). 711 es otro resultado." },
      ],
      80: [
        { mistake: "Pensar que 80×7=550 (en lugar de 560)", solution: "80×7=560, no 550. 8×7=56, agrega un 0: 560. O 10×7=70, ×8=560." },
        { mistake: "Olvidar el cero", solution: "Todos los múltiplos de 80 deben terminar en 0: 80, 160, 240, 320, 400, 480, 560... ¡80×9=720, no 72!" },
      ],
      81: [
        { mistake: "Calcular 81 como 8×10+1 en lugar de 9×9", solution: "81=9×9. Ejemplo: 81×7 = (9×7)×9 = 63×9 = 567. ¡Usa la relación cuadrada!" },
        { mistake: "Error de suma en estrategia 80+1", solution: "81×7 = (80×7)+(1×7) = 560+7 = 567. ¡Calcula ambas partes cuidadosamente!" },
      ],
      82: [
        { mistake: "Complicar 82×4", solution: "82×4 = (80×4)+(2×4) = 320+8 = 328. ¡Descompone y suma!" },
        { mistake: "Pensar que 82 es impar", solution: "82=2×41, siempre par. Todos sus múltiplos son números pares: 82, 164, 246..." },
      ],
      83: [
        { mistake: "Calcular incorrectamente 83×5", solution: "83×5 = (80×5)+(3×5) = 400+15 = 415. ¡Descompone y suma!" },
        { mistake: "Pensar que 83 es par", solution: "83 es primo, solo divisible por 1 y 83. Es impar y no divisible por 2." },
      ],
      84: [
        { mistake: "Complicar 84×5", solution: "84×5 = 420 (7×12×5=7×60). O (80×5)+(4×5)=400+20=420." },
        { mistake: "Olvidar los factores de 84", solution: "84=7×12=6×14=4×21=3×28. ¡Se puede calcular de múltiples maneras!" },
      ],
      85: [
        { mistake: "Calcular incorrectamente 85×4", solution: "85×4 = (80×4)+(5×4) = 320+20 = 340. O 85×4=17×20=340." },
        { mistake: "Olvidar el último dígito", solution: "Los múltiplos de 85 siempre terminan en 5 o 0: 85, 170, 255, 340, 425, 510..." },
      ],
      86: [
        { mistake: "Complicar 86×5", solution: "86×5 = (80×5)+(6×5) = 400+30 = 430. ¡Descompone y suma!" },
        { mistake: "Pensar que 86 es impar", solution: "86=2×43, siempre par. Todos sus múltiplos son números pares: 86, 172, 258..." },
      ],
      87: [
        { mistake: "Calcular incorrectamente 87×5", solution: "87×5 = (90×5)-(3×5) = 450-15 = 435. ¡Restar desde 90 es más fácil!" },
        { mistake: "Pensar que 87 es primo", solution: "87=3×29, no es primo! Es divisible por 3 (8+7=15, divisible exactamente por 3)." },
      ],
      88: [
        { mistake: "Complicar 88×5", solution: "88×5 = (80×5)+(8×5) = 400+40 = 440. O 88×5=11×40=440." },
        { mistake: "Calcular incorrectamente 88×11", solution: "88×11 = 88×10 + 88 = 880+88 = 968. ¡Usa la regla de multiplicar por 11!" },
      ],
      89: [
        { mistake: "Calcular 89 sin redondear", solution: "89=90-1. Ejemplo: 89×7 = (90×7)-7 = 630-7 = 623. ¡MUY FÁCIL!" },
        { mistake: "Calcular 89 como 88+1", solution: "¡La estrategia 90-1 es mucho más fácil! 89×7: 90×7=630, luego resta 7: 623." },
      ],
      90: [
        { mistake: "Complicar 90×5", solution: "90×5 = 450 (9×50). ¡Solo 9×5=45, agrega un 0!" },
        { mistake: "Olvidar el cero", solution: "90=9×10. Siempre agrega 0 al final: 90, 180, 270, 360, 450..." },
      ],
      91: [
        { mistake: "Calcular incorrectamente 91×5", solution: "91×5 = (90×5)+(1×5) = 450+5 = 455. ¡Descompone y suma!" },
        { mistake: "Pensar que 91 es primo", solution: "91=7×13, no es primo! Es divisible por 7 y 13." },
      ],
      92: [
        { mistake: "Complicar 92×5", solution: "92×5 = (90×5)+(2×5) = 450+10 = 460. ¡Descompone y suma!" },
        { mistake: "Pensar que 92 es impar", solution: "92=2×46, siempre par. Todos sus múltiplos son números pares: 92, 184, 276..." },
      ],
      93: [
        { mistake: "Calcular incorrectamente 93×5", solution: "93×5 = (90×5)+(3×5) = 450+15 = 465. ¡Descompone y suma!" },
        { mistake: "Pensar que 93 es primo", solution: "93=3×31, no es primo! Es divisible por 3 (9+3=12, divisible exactamente por 3)." },
      ],
      94: [
        { mistake: "Complicar 94×5", solution: "94×5 = (100×5)-(6×5) = 500-30 = 470. ¡Restar desde 100 es más fácil!" },
        { mistake: "Pensar que 94 es impar", solution: "94=2×47, siempre par. Todos sus múltiplos son números pares: 94, 188, 282..." },
      ],
      95: [
        { mistake: "Calcular incorrectamente 95×4", solution: "95×4 = (100×4)-(5×4) = 400-20 = 380. O 95×4=19×20=380." },
        { mistake: "Olvidar el último dígito", solution: "Los múltiplos de 95 siempre terminan en 5 o 0: 95, 190, 285, 380, 475, 570..." },
      ],
      96: [
        { mistake: "Complicar 96×5", solution: "96×5 = (100×5)-(4×5) = 500-20 = 480. O 96×5=12×40=480." },
        { mistake: "Olvidar los factores de 96", solution: "96=8×12=6×16=4×24=3×32. ¡Se puede calcular de múltiples maneras!" },
      ],
      97: [
        { mistake: "Calcular 97 sin redondear", solution: "97=100-3. Ejemplo: 97×7 = (100×7)-21 = 700-21 = 679. ¡MUY FÁCIL!" },
        { mistake: "Calcular 97 como 96+1", solution: "¡La estrategia 100-3 es mucho más fácil! 97×7: 100×7=700, luego resta 21: 679." },
      ],
      98: [
        { mistake: "Complicar 98×5", solution: "98×5 = (100×5)-(2×5) = 500-10 = 490. ¡Restar desde 100 es SÚPER FÁCIL!" },
        { mistake: "Pensar que 98 es impar", solution: "98=2×49, siempre par. Todos sus múltiplos son números pares: 98, 196, 294..." },
      ],
      99: [
        { mistake: "Calcular 99 sin redondear", solution: "99=100-1. Ejemplo: 99×7 = (100×7)-7 = 700-7 = 693. ¡PERFECTA!" },
        { mistake: "Calcular 99 como 98+1", solution: "¡La estrategia 100-1 es mucho más fácil! 99×8: 100×8=800, luego resta 8: 792." },
      ],
      100: [
        { mistake: "Complicar 100×5", solution: "100×5 = 500! Solo agrega dos ceros al final: 5 → 500, 7 → 700!" },
        { mistake: "Olvidar los ceros", solution: "Multiplicar por 100: agrega DOS ceros al final. 100×9=900, ¡no 90!" },
      ],
    }
    return mistakes[number] || []
  }

  const getPracticeStrategies = () => {
    const strategies: { [key: number]: string[] } = {
      1: [
        "Di cada multiplicación en voz alta: '1 por 1 es 1, 1 por 2 es 2...'",
        "Practica escribir la tabla una vez al día durante una semana",
        "Busca el patrón: la respuesta siempre es el mismo número que el segundo número",
        "Usa tarjetas didácticas, aunque esta tabla generalmente se aprende muy rápido",
      ],
      2: [
        "Cuenta de dos en dos mientras caminas o subes escaleras: 2, 4, 6, 8...",
        "Usa tus dedos: sostén dedos en pares y cuenta de dos en dos",
        "Practica duplicar números en tu cabeza durante el día",
        "Dílo en voz alta: '2 por 5 es 5 más 5, lo que hace 10'",
      ],
      3: [
        "Cuenta rítmicamente de tres en tres: 3, 6, 9, 12, 15...",
        "Usa el truco de los dedos: sostén dedos en grupos de 3",
        "Busca el patrón de suma de dígitos para verificar tus respuestas (repite 3-6-9)",
        "Practica 5-10 minutos diarios en lugar de una sesión larga",
      ],
      4: [
        "Aprende primero la tabla del 2, luego duplica cada respuesta para obtener los 4s",
        "Cuenta de cuatro en cuatro: 4, 8, 12, 16, 20...",
        "Usa objetos en grupos de 4 para visualizar (patas de silla, ruedas de auto)",
        "Practica por separado los más difíciles (4×6, 4×7, 4×8, 4×9)",
      ],
      5: [
        "Usa tus dedos para contar de cinco en cinco—cada dedo representa 5",
        "Mira un reloj y cuenta en intervalos de 5 minutos",
        "Practica con dinero: cuenta monedas de 5 centavos",
        "Recuerda: multiplicadores pares terminan en 0, impares en 5",
      ],
      6: [
        "Memoriza la tabla del 3, luego duplica cada respuesta para encontrar los 6s",
        "Estrategia de la caja de huevos: cuenta de seis en seis (6, 12, 18, 24...)",
        "Enfócate en los pares difíciles: estudia 6×7=42, 6×8=48, 6×9=54 por separado",
        "Memoriza el patrón de unidades: 6, 2, 8, 4, 0 y repite",
        "Verifica usando ambas tablas del 2 y 3, ya que 6 es múltiplo de ambos",
      ],
      7: [
        "Memoriza el par más difícil: 7×8=56 (rima 'cinco seis, siete ocho')",
        "Conéctalo con los días de la semana: 7 días, 14 días (2 semanas), 21 días (3 semanas)",
        "Memoriza especialmente 7×7=49 (7²=49), calcula otros desde ahí",
        "Truco de dedos: Cuenta 7 dedos desde la izquierda, los restantes son unidades, los contados son decenas",
        "¡Solo practica 3-4 hechos reales al día. El 7 requiere paciencia!",
      ],
      8: [
        "Memoriza la tabla del 4, luego duplica cada respuesta para encontrar los 8s",
        "Memoriza especialmente 8×8=64 ('ocho ocho sesenta y cuatro')",
        "Cuenta de ocho en ocho: 8, 16, 24, 32, 40, 48, 56, 64, 72, 80",
        "Cadena de duplicación: Duplica el número (×2), luego otra vez (×4), luego otra vez (×8)",
        "Las unidades son siempre pares y descienden: 8, 6, 4, 2, 0 y repite",
      ],
      9: [
        "Aprende el truco de los dedos: usa tus 10 dedos para mostrar la tabla del 9",
        "Usa la regla de suma de dígitos: suma los dígitos de la respuesta, siempre da 9",
        "Resta desde 10: 9×6 = 60-6 = 54, 9×8 = 80-8 = 72",
        "Memoriza especialmente 9×9=81 (9²=81)",
        "Patrón de decenas: En 9×n, el dígito de las decenas siempre es n-1",
      ],
      10: [
        "¡La regla más fácil: Solo agrega un cero al final!",
        "Cuenta de diez en diez: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100",
        "Entiende la relación de valor posicional: multiplicar por 10 desplaza un dígito a la izquierda",
        "Practica con números grandes: 23×10=230, 47×10=470",
        "Usa esta tabla para verificar otras tablas (ej: 9×6 = 60-6)",
      ],
      11: [
        "Memoriza el patrón de dígitos dobles: 11, 22, 33, 44, 55, 66, 77, 88, 99",
        "Practica el truco de suma de dígitos: 23×11 = 253 (2_[2+3]_3)",
        "Memoriza especialmente 11×11=121 y 11×12=132",
        "Crea canción o rima: 'Once por cinco, cincuenta y cinco' (11×5=55)",
        "Encuentra un múltiplo de 11 en la vida real cada día (11 años, 11 horas, etc.)",
      ],
      12: [
        "Practica contando docenas: cuenta cajas de huevos (12, 24, 36...)",
        "Calcula 12 usando tabla del 3 o 4: 12=3×4, entonces 12×5 = 3×5×4 = 15×4 = 60",
        "Usa el reloj: 12×5=60 minutos (1 hora)",
        "Enfócate en los múltiplos más difíciles de 12: 12×7=84, 12×8=96, 12×9=108",
        "Usa 12 en vida diaria: meses, horas, docenas",
      ],
      13: [
        "Usa siempre la estrategia 10+3: 13×6 = 60+18 = 78",
        "Convierte la tabla del 13 en canción o encuentra un ritmo",
        "Enfócate en los pares más difíciles: 13×7=91, 13×8=104, 13×9=117",
        "Practica 2-3 múltiplos diferentes de 13 cada día, no todos a la vez",
        "Trabaja hacia atrás: 130, 117, 104, 91, 78... (resta 13 desde 130)",
      ],
      14: [
        "Memoriza la tabla del 7, luego duplica cada respuesta",
        "Usa un calendario bisemanal: períodos de 14 días",
        "Memoriza especialmente 14×7=98 y 14×8=112",
        "Usa 14 para verificar la tabla del 7: 14×6=84, entonces 7×6=42",
        "Cuenta de catorce en catorce: 14, 28, 42, 56, 70, 84, 98, 112, 126, 140",
      ],
      15: [
        "Estrategia del reloj: 15 minutos = cuarto de hora. 15×4=60 minutos = 1 hora",
        "Usa tabla del 3 o 5: 15=3×5, entonces 15×4 = 3×4×5 = 12×5 = 60",
        "Sigue el patrón que termina en 0 o 5: 15, 30, 45, 60, 75, 90...",
        "Practica cálculo de propinas: cómo calcular 15% de propina (10%+5%)",
        "Memoriza los múltiplos más útiles de 15: 15×4=60, 15×6=90, 15×8=120",
      ],
      16: [
        "Cadena de duplicación: Duplica el número (×2), otra vez (×4), otra vez (×8), otra vez (×16)",
        "Si conoces la tabla del 8, duplica cada resultado: 8×7=56, entonces 16×7=112",
        "Memoriza especialmente 16×16=256 (2⁸=256)",
        "Relaciónalo con términos informáticos: 16 bits, sistema hexadecimal",
        "Cuenta de dieciséis en dieciséis: 16, 32, 48, 64, 80, 96, 112, 128, 144, 160",
      ],
      17: [
        "Perfecciona la estrategia 20-3: 17×n = 20n - 3n",
        "Descomposición 10+7: 17×6 = 60+42 = 102",
        "Practica diariamente los pares más difíciles: 17×7=119, 17×8=136, 17×9=153",
        "Relaciónalo con 17 años de edad: qué pasa a los 17, qué pasa a los 34 (17×2)",
        "¡Ten paciencia! 17 es primo, requiere práctica",
      ],
      18: [
        "Usa tabla del 9 o 6: 18=2×9 o 18=3×6",
        "Duplica la tabla del 9: 9×4=36, entonces 18×4=72",
        "Triplica la tabla del 6: 6×5=30, entonces 18×5=90",
        "Relaciónalo con mayoría de edad: 18, 36 (18×2), 54 (18×3)",
        "Cuenta de dieciocho en dieciocho: 18, 36, 54, 72, 90, 108, 126, 144, 162, 180",
      ],
      19: [
        "Usa siempre la estrategia 20-1: 19×n = 20n - n",
        "Ejemplo: 19×7 = 140-7 = 133. ¡Muy simple y efectivo!",
        "Descomposición 10+9: 19×4 = 40+36 = 76",
        "Practica los múltiplos más difíciles: 19×7=133, 19×8=152, 19×9=171",
        "Aprende la tabla del 19 hacia atrás: 190, 171, 152, 133... para flexibilidad mental",
      ],
      20: [
        "Lo más fácil: Multiplica por 10, luego duplica",
        "O: Agrega un cero al final, luego duplica (MÉTODO CORRECTO! 7×20: 70 luego ×2=140)",
        "Método correcto: 7×10=70, 70×2=140 o 7×2=14, agrega un 0: 140",
        "Cuenta rápidamente de veinte en veinte: 20, 40, 60, 80, 100, 120, 140, 160, 180, 200",
        "Practica con dinero: cuenta billetes de 20",
      ],
      21: [
        "Usa la estrategia 20+1: 21×n = 20n + n",
        "Usa la relación 3×7: ¿Conoces la tabla del 3? 3×6=18, 7×6=42, entonces 21×6=126",
        "Practica los múltiplos más difíciles: 21×7=147, 21×8=168, 21×9=189",
        "Relaciónalo con la mayoría de edad legal: ¿qué cambia a los 21 años?",
        "Cuenta de veintiuno en veintiuno: 21, 42, 63, 84, 105, 126, 147, 168, 189, 210",
      ],
      22: [
        "Memoriza la tabla del 11, luego duplica cada resultado",
        "Relaciónalo con equipos de fútbol: 2 equipos = 22 jugadores",
        "Los múltiplos más fáciles primero: 22×5=110, 22×10=220",
        "Cuenta de veintidós en veintidós: 22, 44, 66, 88, 110, 132, 154, 176, 198, 220",
        "Observa el patrón de dígitos dobles en los primeros 4 resultados: 22, 44, 66, 88",
      ],
      23: [
        "Usa siempre la estrategia 20+3: 23×6 = 120+18 = 138",
        "O estrategia 25-2: 23×4 = 100-8 = 92",
        "Relaciónalo con cromosomas: Los humanos tienen 23 pares de cromosomas",
        "Practica diariamente los múltiplos más difíciles: 23×7=161, 23×8=184, 23×9=207",
        "23 es primo, así que ten paciencia y practica mucho",
      ],
      24: [
        "Usa la relación de horas: 24 horas×3 días = 72 horas",
        "Prueba múltiples métodos: 24=2×12, 3×8, 4×6. ¿Cuál es más fácil?",
        "Si conoces la tabla del 12, duplica: 12×7=84, entonces 24×7=168",
        "Cuenta por docenas: 24 = 2 docenas. 24×5 = 10 docenas = 120",
        "Cuenta de veinticuatro en veinticuatro: 24, 48, 72, 96, 120, 144, 168, 192, 216, 240",
      ],
      25: [
        "Sistema de cuartos: 25 = 100÷4. Entonces 25×4=100, 25×8=200",
        "Memoriza el patrón de los últimos dos dígitos: 25, 50, 75, 00 se repite",
        "Practica con dinero: cuenta monedas de 25 centavos",
        "Recuerda que es el cuadrado de 5: 25=5×5",
        "Cálculo de porcentajes: 25% = 1/4. Usa esta relación",
      ],
      26: [
        "Si conoces la tabla del 13, duplica: 13×8=104, entonces 26×8=208",
        "Estrategia 25+1: 26×4 = 100+4 = 104",
        "Relaciónalo con el alfabeto: hay 26 letras",
        "Cuenta de veintiséis en veintiséis: 26, 52, 78, 104, 130, 156, 182, 208, 234, 260",
        "Practica los múltiplos más difíciles: 26×7=182, 26×9=234",
      ],
      27: [
        "Usa la estrategia 30-3: 27×n = 30n - 3n",
        "Si conoces la tabla del 9, triplícala: 9×6=54, así que 27×6=162",
        "Recuerda que es el cubo de 3: 27=3×3×3",
        "Cuenta de 27 en 27: 27, 54, 81, 108, 135, 162, 189, 216, 243, 270",
        "Practica los múltiplos más difíciles: 27×7=189, 27×8=216, 27×9=243",
      ],
      28: [
        "Usa la relación 4×7: multiplica la tabla del 4 por 7",
        "O duplica 14: 14×5=70, entonces 28×5=140",
        "Relaciónalo con febrero: 28 días (año normal)",
        "Cuenta de veintiocho en veintiocho: 28, 56, 84, 112, 140, 168, 196, 224, 252, 280",
        "Memoriza los múltiplos más útiles: 28×5=140, 28×7=196, 28×10=280",
      ],
      29: [
        "Usa la estrategia 30-1: 29×n = 30n - n",
        "Ejemplo: 29×8 = 240-8 = 232. ¡Muy fácil!",
        "Relaciónalo con año bisiesto: 29 días en febrero",
        "Cuenta de veintinueve en veintinueve: 29, 58, 87, 116, 145, 174, 203, 232, 261, 290",
        "Practica los múltiplos más difíciles: 29×7=203, 29×9=261",
      ],
      30: [
        "Estrategia 3×10: multiplica por 10, luego por 3",
        "Ejemplo: 7×30 = 70×3 = 210 o 7×3=21, agrega un 0: 210",
        "Relaciónalo con media hora: 30 minutos",
        "Días del mes: Muchos meses tienen 30 días (abril, junio, septiembre, noviembre)",
        "Cuenta de treinta en treinta: 30, 60, 90, 120, 150, 180, 210, 240, 270, 300",
      ],
      31: [
        "Usa la estrategia 30+1: 31×n = 30n + n",
        "Ejemplo: 31×8 = 240 + 8 = 248. ¡Muy simple y efectivo!",
        "Relaciónalo con el calendario: 31 días es la longitud máxima del mes",
        "Cuenta de treinta y uno en treinta y uno: 31, 62, 93, 124, 155, 186, 217, 248, 279, 310",
        "Practica los múltiplos más difíciles: 31×7=217, 31×9=279",
      ],
      32: [
        "Usa la cadena de duplicación: duplica 16",
        "Ejemplo: 16×5=80, entonces 32×5=160",
        "Recuerda que es potencia de 2: 32=2×2×2×2×2",
        "Cuenta de treinta y dos en treinta y dos: 32, 64, 96, 128, 160, 192, 224, 256, 288, 320",
        "Relaciónalo con términos informáticos: sistema de 32 bits",
      ],
      33: [
        "Usa la estrategia 3×11: triplica la tabla del 11",
        "O multiplica la tabla del 3 por 11: 3×7=21, 21×11=231, entonces 33×7=231",
        "Observa el patrón de repetición: 33, 66, 99 (primeros tres resultados)",
        "Cuenta de treinta y tres en treinta y tres: 33, 66, 99, 132, 165, 198, 231, 264, 297, 330",
        "Practica los múltiplos más difíciles: 33×7=231, 33×8=264, 33×9=297",
      ],
      34: [
        "Si conoces la tabla del 17, duplícala: 17×6=102, entonces 34×6=204",
        "Estrategia 35-1: 34×4 = 140-4 = 136",
        "O usa 30+4: 34×5 = 150+20 = 170",
        "Cuenta de treinta y cuatro en treinta y cuatro: 34, 68, 102, 136, 170, 204, 238, 272, 306, 340",
        "Memoriza los múltiplos más útiles: 34×5=170, 34×10=340",
      ],
      35: [
        "Estrategia 5×7: multiplica la tabla del 5 por 7 o viceversa",
        "Ejemplo: 35×4 = 5×4×7 = 20×7 = 140",
        "Usa el patrón del último dígito: siempre termina en 5 o 0",
        "Cuenta de treinta y cinco en treinta y cinco: 35, 70, 105, 140, 175, 210, 245, 280, 315, 350",
        "Cálculo de tiempo: 35 minutos = media hora + 5 minutos",
      ],
      36: [
        "Recuerda que es el cuadrado de 6: 36=6×6",
        "Múltiples métodos: 36=4×9, 3×12, 2×18. ¿Cuál es más fácil?",
        "Si conoces la tabla del 9, multíplica por 4: 9×7=63, 63×4=252, entonces 36×7=252",
        "Cuenta de treinta y seis en treinta y seis: 36, 72, 108, 144, 180, 216, 252, 288, 324, 360",
        "Medición de ángulos: 360° es una vuelta completa, 36° es la décima parte",
      ],
      37: [
        "Usa la estrategia 40-3: 37×n = 40n - 3n",
        "Memoriza la relación mágica con 111: 37×3=111, 37×6=222, 37×9=333!",
        "Ejemplo: 37×8 = 320 - 24 = 296",
        "Cuenta de treinta y siete en treinta y siete: 37, 74, 111, 148, 185, 222, 259, 296, 333, 370",
        "Descubre el patrón de repetición: resultados interesantes en cada múltiplo de 3",
      ],
      38: [
        "Si conoces la tabla del 19, duplícala: 19×7=133, entonces 38×7=266",
        "Estrategia 40-2: 38×6 = 240 - 12 = 228",
        "Cuenta de treinta y ocho en treinta y ocho: 38, 76, 114, 152, 190, 228, 266, 304, 342, 380",
        "Practica los múltiplos más difíciles: 38×7=266, 38×9=342",
        "Relaciónalo con la temperatura corporal: 38°C es fiebre leve",
      ],
      39: [
        "Estrategia 40-1 es PERFECTA: 39×n = 40n - n",
        "Ejemplo: 39×7 = 280 - 7 = 273. ¡Muy fácil!",
        "O usa 3×13: triplica la tabla del 13",
        "Cuenta de treinta y nueve en treinta y nueve: 39, 78, 117, 156, 195, 234, 273, 312, 351, 390",
        "Practica los múltiplos más difíciles: 39×7=273, 39×8=312",
      ],
      40: [
        "Estrategia 4×10: multiplica por 10, luego por 4",
        "Ejemplo: 7×40 = 70×4 = 280 o 7×4=28, agrega un 0: 280",
        "Semana laboral: 40 horas estándar de trabajo",
        "Cuenta de cuarenta en cuarenta: 40, 80, 120, 160, 200, 240, 280, 320, 360, 400",
        "Cálculo porcentual: 40% = 2/5",
      ],
      41: [
        "Estrategia 40+1 es PERFECTA: 41×n = 40n + n",
        "Ejemplo: 41×7 = 280 + 7 = 287. ¡Muy fácil!",
        "Cuenta de cuarenta y uno en cuarenta y uno: 41, 82, 123, 164, 205, 246, 287, 328, 369, 410",
        "Practica los múltiplos más difíciles: 41×7=287, 41×8=328",
        "Número primo: solo divisible por 1 y 41",
      ],
      42: [
        "Usa la relación 6×7: refuerza ambas tablas",
        "Cuenta de cuarenta y dos en cuarenta y dos: 42, 84, 126, 168, 210, 252, 294, 336, 378, 420",
        "Múltiples métodos: 42=6×7=2×21=3×14. ¿Cuál es más fácil?",
        "Referencia a la Guía del Autoestopista: ¡42 es famoso en la cultura popular!",
        "Practica los múltiplos más difíciles: 42×7=294, 42×8=336",
      ],
      43: [
        "Prueba las estrategias 40+3 o 45-2",
        "Ejemplo: 43×6 = 240+18 = 258 o 270-12 = 258",
        "Cuenta de cuarenta y tres en cuarenta y tres: 43, 86, 129, 172, 215, 258, 301, 344, 387, 430",
        "Practica los múltiplos más difíciles: 43×7=301, 43×8=344",
        "Número primo: un número especial que requiere estrategias creativas",
      ],
      44: [
        "Cuatro veces 11: cuadruplica la tabla del 11",
        "Ejemplo: 11×7=77, ×4=308, entonces 44×7=308",
        "Cuenta de cuarenta y cuatro en cuarenta y cuatro: 44, 88, 132, 176, 220, 264, 308, 352, 396, 440",
        "Patrón de repetición: 44, 88 muestran patrón de dígitos dobles",
        "Practica los múltiplos más difíciles: 44×7=308, 44×9=396",
      ],
      45: [
        "Relación 5×9: puedes usar cualquiera de las dos tablas",
        "Ejemplo: 45×7 = 9×7×5 = 63×5 = 315",
        "Cuenta de cuarenta y cinco en cuarenta y cinco: 45, 90, 135, 180, 225, 270, 315, 360, 405, 450",
        "Ángulo: 45° es medio ángulo recto, importante en geometría",
        "Tiempo: 45 minutos = tres cuartos de hora (3/4 de hora)",
      ],
      46: [
        "El doble de 23: duplica la tabla del 23",
        "Ejemplo: 23×7=161, ×2=322, entonces 46×7=322",
        "Estrategias 45+1 o 50-4: 46×5 = 225+5 = 230",
        "Cuenta de cuarenta y seis en cuarenta y seis: 46, 92, 138, 184, 230, 276, 322, 368, 414, 460",
        "Biología: 46 cromosomas (23 pares) en el ADN humano",
      ],
      47: [
        "Estrategia 50-3 es PERFECTA: 47×n = 50n - 3n",
        "Ejemplo: 47×7 = 350 - 21 = 329. ¡Muy fácil!",
        "Cuenta de cuarenta y siete en cuarenta y siete: 47, 94, 141, 188, 235, 282, 329, 376, 423, 470",
        "Practica los múltiplos más difíciles: 47×7=329, 47×8=376",
        "Número primo: requiere estrategias mentales especiales",
      ],
      48: [
        "Múltiples métodos: 48=6×8=4×12=3×16=2×24",
        "Ejemplo: 48×5 = 12×20 = 240",
        "Cuenta de cuarenta y ocho en cuarenta y ocho: 48, 96, 144, 192, 240, 288, 336, 384, 432, 480",
        "Tiempo: 48 horas = 2 días. 72 horas = 3 días",
        "Practica los múltiplos más difíciles: 48×7=336, 48×9=432",
      ],
      49: [
        "Cuadrado de 7: 49=7×7. Refuerza la tabla del 7",
        "Estrategia 50-1 MUY FÁCIL: 49×n = 50n - n",
        "Ejemplo: 49×7 = 350 - 7 = 343. ¡Simple!",
        "Cuenta de cuarenta y nueve en cuarenta y nueve: 49, 98, 147, 196, 245, 294, 343, 392, 441, 490",
        "Número cuadrado: 49=7² para cálculos de área en geometría",
      ],
      50: [
        "Estrategia 5×10: multiplica por 5, agrega un 0",
        "Ejemplo: 8×50: 8×5=40, agrega un 0: 400",
        "La mitad de 100: 50×7 = 350 (700÷2)",
        "Cuenta de cincuenta en cincuenta: 50, 100, 150, 200, 250, 300, 350, 400, 450, 500",
        "Porcentaje: 50% = 1/2, la relación porcentual más importante",
      ],
      51: [
        "Estrategia 50+1 es PERFECTA: 51×n = 50n + n",
        "Ejemplo: 51×7 = 350 + 7 = 357. ¡Muy fácil!",
        "Cuenta de cincuenta y uno en cincuenta y uno: 51, 102, 153, 204, 255, 306, 357, 408, 459, 510",
        "Relación 3×17: triplica la tabla del 17",
        "Practica los múltiplos más difíciles: 51×7=357, 51×8=408",
      ],
      52: [
        "Relación 4×13: cuadruplica la tabla del 13",
        "Ejemplo: 13×7=91, ×4=364, entonces 52×7=364",
        "Cuenta de cincuenta y dos en cincuenta y dos: 52, 104, 156, 208, 260, 312, 364, 416, 468, 520",
        "Calendario: 52 semanas = 1 año. Para cálculos anuales",
        "Cartas: 52 cartas para juegos y problemas de probabilidad",
      ],
      53: [
        "Estrategia 50+3: 53×n = 50n + 3n",
        "Ejemplo: 53×6 = 300 + 18 = 318",
        "Cuenta de cincuenta y tres en cincuenta y tres: 53, 106, 159, 212, 265, 318, 371, 424, 477, 530",
        "Practica los múltiplos más difíciles: 53×7=371, 53×8=424",
        "Número primo: requiere estrategias de cálculo creativas",
      ],
      54: [
        "Relación 6×9: puedes usar cualquiera de las dos tablas",
        "Ejemplo: 54×5 = 9×5×6 = 45×6 = 270",
        "Cuenta de cincuenta y cuatro en cincuenta y cuatro: 54, 108, 162, 216, 270, 324, 378, 432, 486, 540",
        "Múltiples métodos: 54=6×9=2×27=3×18",
        "Practica los múltiplos más difíciles: 54×7=378, 54×8=432",
      ],
      55: [
        "Relación 5×11: refuerza ambas tablas",
        "Ejemplo: 55×4 = 11×4×5 = 44×5 = 220",
        "Cuenta de cincuenta y cinco en cincuenta y cinco: 55, 110, 165, 220, 275, 330, 385, 440, 495, 550",
        "Número triangular: 55 = 1+2+3+...+10, propiedad matemática especial",
        "Practica los múltiplos más difíciles: 55×7=385, 55×9=495",
      ],
      56: [
        "Relación 7×8: ¡La multiplicación MÁS DIFÍCIL! Refuerza ambas",
        "Ejemplo: 56×5 = 7×5×8 = 35×8 = 280",
        "Cuenta de cincuenta y seis en cincuenta y seis: 56, 112, 168, 224, 280, 336, 392, 448, 504, 560",
        "Alternativa: 56=4×14=2×28. Elige la forma más fácil",
        "Practica los múltiplos más difíciles: 56×7=392, 56×9=504",
      ],
      57: [
        "Estrategia 60-3 es PERFECTA: 57×n = 60n - 3n",
        "Ejemplo: 57×7 = 420 - 21 = 399. ¡Muy fácil!",
        "Cuenta de cincuenta y siete en cincuenta y siete: 57, 114, 171, 228, 285, 342, 399, 456, 513, 570",
        "Relación 3×19: triplica la tabla del 19",
        "Practica los múltiplos más difíciles: 57×7=399, 57×8=456",
      ],
      58: [
        "Estrategia 60-2: 58×n = 60n - 2n",
        "Ejemplo: 58×6 = 360 - 12 = 348",
        "Cuenta de cincuenta y ocho en cincuenta y ocho: 58, 116, 174, 232, 290, 348, 406, 464, 522, 580",
        "El doble de 29: duplica la tabla del 29",
        "Practica los múltiplos más difíciles: 58×7=406, 58×9=522",
      ],
      59: [
        "Estrategia 60-1 SÚPER FÁCIL: 59×n = 60n - n",
        "Ejemplo: 59×7 = 420 - 7 = 413. ¡PERFECTO!",
        "Cuenta de cincuenta y nueve en cincuenta y nueve: 59, 118, 177, 236, 295, 354, 413, 472, 531, 590",
        "Tiempo: 59 minutos, 59 segundos - 1 menos que 60",
        "Practica los múltiplos más difíciles: 59×7=413, 59×8=472",
      ],
      60: [
        "Estrategia 6×10: multiplica por 6, agrega un 0",
        "Ejemplo: 7×60: 7×6=42, agrega un 0: 420",
        "Cuenta de sesenta en sesenta: 60, 120, 180, 240, 300, 360, 420, 480, 540, 600",
        "Tiempo: 60 minutos=1 hora, 60 segundos=1 minuto",
        "Múltiples métodos: 60=6×10=5×12=4×15=3×20=2×30",
      ],
      61: [
        "Estrategia 60+1 es PERFECTA: 61×n = 60n + n",
        "Ejemplo: 61×7 = 420 + 7 = 427. ¡Muy fácil!",
        "Cuenta de sesenta y uno en sesenta y uno: 61, 122, 183, 244, 305, 366, 427, 488, 549, 610",
        "Practica los múltiplos más difíciles: 61×7=427, 61×8=488",
        "Número primo: requiere estrategias de cálculo creativas",
      ],
      62: [
        "Estrategia 60+2: 62×n = 60n + 2n",
        "Ejemplo: 62×6 = 360 + 12 = 372",
        "Cuenta de sesenta y dos en sesenta y dos: 62, 124, 186, 248, 310, 372, 434, 496, 558, 620",
        "El doble de 31: duplica la tabla del 31",
        "Practica los múltiplos más difíciles: 62×7=434, 62×9=558",
      ],
      63: [
        "Relación 7×9: refuerza ambas tablas",
        "Ejemplo: 63×5 = 9×5×7 = 45×7 = 315",
        "Cuenta de sesenta y tres en sesenta y tres: 63, 126, 189, 252, 315, 378, 441, 504, 567, 630",
        "Alternativa: 63=3×21. Triplica la tabla del 21",
        "Practica los múltiplos más difíciles: 63×7=441, 63×8=504",
      ],
      64: [
        "Cuadrado de 8: 64=8×8=8². También 2⁶",
        "Ejemplo: 64×5 = 8×5×8 = 40×8 = 320",
        "Cuenta de sesenta y cuatro en sesenta y cuatro: 64, 128, 192, 256, 320, 384, 448, 512, 576, 640",
        "Ajedrez: 8×8=64 casillas, aplicación geométrica",
        "Computación: arquitectura de 64 bits, contexto tecnológico",
      ],
      65: [
        "Relación 5×13: puedes usar cualquiera de las dos tablas",
        "Ejemplo: 65×4 = 13×4×5 = 52×5 = 260",
        "Cuenta de sesenta y cinco en sesenta y cinco: 65, 130, 195, 260, 325, 390, 455, 520, 585, 650",
        "Puedes usar las estrategias 60+5 o 70-5",
        "Practica los múltiplos más difíciles: 65×7=455, 65×9=585",
      ],
      66: [
        "Relación 6×11: refuerza ambas tablas",
        "Ejemplo: 66×5 = 11×5×6 = 55×6 = 330",
        "Cuenta de sesenta y seis en sesenta y seis: 66, 132, 198, 264, 330, 396, 462, 528, 594, 660",
        "Patrón de repetición: 66 (6×11), patrón de la tabla del 11",
        "Practica los múltiplos más difíciles: 66×7=462, 66×9=594",
      ],
      67: [
        "Estrategia 70-3 es PERFECTA: 67×n = 70n - 3n",
        "Ejemplo: 67×7 = 490 - 21 = 469. ¡Muy fácil!",
        "Cuenta de sesenta y siete en sesenta y siete: 67, 134, 201, 268, 335, 402, 469, 536, 603, 670",
        "Practica los múltiplos más difíciles: 67×7=469, 67×8=536",
        "Número primo: requiere estrategias mentales especiales",
      ],
      68: [
        "Estrategia 70-2: 68×n = 70n - 2n",
        "Ejemplo: 68×6 = 420 - 12 = 408",
        "Cuenta de sesenta y ocho en sesenta y ocho: 68, 136, 204, 272, 340, 408, 476, 544, 612, 680",
        "Relación 4×17: cuadruplica la tabla del 17",
        "Practica los múltiplos más difíciles: 68×7=476, 68×9=612",
      ],
      69: [
        "Estrategia 70-1 SÚPER FÁCIL: 69×n = 70n - n",
        "Ejemplo: 69×7 = 490 - 7 = 483. ¡PERFECTO!",
        "Cuenta de sesenta y nueve en sesenta y nueve: 69, 138, 207, 276, 345, 414, 483, 552, 621, 690",
        "Relación 3×23: triplica la tabla del 23",
        "Practica los múltiplos más difíciles: 69×7=483, 69×8=552",
      ],
      70: [
        "Estrategia 7×10: multiplica por 7, agrega un 0",
        "Ejemplo: 8×70: 8×7=56, agrega un 0: 560",
        "Cuenta de setenta en setenta: 70, 140, 210, 280, 350, 420, 490, 560, 630, 700",
        "Refuerza la tabla del 7: cada resultado es 10 veces 7",
        "Múltiples métodos: 70=7×10=5×14=2×35",
      ],
      71: [
        "Estrategia 70+1 es PERFECTA: 71×n = 70n + n",
        "Ejemplo: 71×7 = 490 + 7 = 497. ¡Muy fácil!",
        "Cuenta de setenta y uno en setenta y uno: 71, 142, 213, 284, 355, 426, 497, 568, 639, 710",
        "Practica los múltiplos más difíciles: 71×7=497, 71×8=568",
        "Número primo: requiere estrategias de cálculo creativas",
      ],
      72: [
        "Relación 8×9: refuerza ambas tablas",
        "Ejemplo: 72×5 = 9×5×8 = 45×8 = 360",
        "Cuenta de setenta y dos en setenta y dos: 72, 144, 216, 288, 360, 432, 504, 576, 648, 720",
        "Múltiples métodos: 72=8×9=6×12=4×18=3×24",
        "Tiempo: 72 horas = 3 días. Aplicación práctica",
      ],
      73: [
        "Estrategia 70+3: 73×n = 70n + 3n",
        "Ejemplo: 73×5 = 350 + 15 = 365 (¡días del año!)",
        "Cuenta de setenta y tres en setenta y tres: 73, 146, 219, 292, 365, 438, 511, 584, 657, 730",
        "Practica los múltiplos más difíciles: 73×7=511, 73×8=584",
        "Número primo: el 21º número primo, curiosidad matemática",
      ],
      74: [
        "Estrategia 75-1: 74×n = 75n - n",
        "Ejemplo: 74×5 = 375 - 5 = 370",
        "Cuenta de setenta y cuatro en setenta y cuatro: 74, 148, 222, 296, 370, 444, 518, 592, 666, 740",
        "Relación 2×37: duplica la tabla del 37",
        "Practica los múltiplos más difíciles: 74×7=518, 74×9=666",
      ],
      75: [
        "Relaciones 3×25 o 5×15: múltiples métodos",
        "Ejemplo: 75×4 = 25×12 = 300",
        "Cuenta de setenta y cinco en setenta y cinco: 75, 150, 225, 300, 375, 450, 525, 600, 675, 750",
        "Porcentaje: 75% = 3/4, relación fraccionaria importante",
        "Practica los múltiplos más difíciles: 75×7=525, 75×9=675",
      ],
      76: [
        "Estrategia 80-4: 76×n = 80n - 4n",
        "Ejemplo: 76×6 = 480 - 24 = 456",
        "Cuenta de setenta y seis en setenta y seis: 76, 152, 228, 304, 380, 456, 532, 608, 684, 760",
        "Relación 4×19: cuadruplica la tabla del 19",
        "Practica los múltiplos más difíciles: 76×7=532, 76×9=684",
      ],
      77: [
        "Relación 7×11: refuerza ambas tablas",
        "Ejemplo: 77×5 = 11×5×7 = 55×7 = 385",
        "Cuenta de setenta y siete en setenta y siete: 77, 154, 231, 308, 385, 462, 539, 616, 693, 770",
        "Patrón de repetición: 77 (7×11), patrón especial",
        "Practica los múltiplos más difíciles: 77×7=539, 77×9=693",
      ],
      78: [
        "Estrategia 80-2: 78×n = 80n - 2n",
        "Ejemplo: 78×7 = 560 - 14 = 546",
        "Cuenta de setenta y ocho en setenta y ocho: 78, 156, 234, 312, 390, 468, 546, 624, 702, 780",
        "Relación 6×13: puedes usar cualquiera de las dos tablas",
        "Practica los múltiplos más difíciles: 78×7=546, 78×9=702",
      ],
      79: [
        "Estrategia 80-1 SÚPER FÁCIL: 79×n = 80n - n",
        "Ejemplo: 79×7 = 560 - 7 = 553. ¡PERFECTO!",
        "Cuenta de setenta y nueve en setenta y nueve: 79, 158, 237, 316, 395, 474, 553, 632, 711, 790",
        "Practica los múltiplos más difíciles: 79×7=553, 79×8=632",
        "Número primo: 1 menos que 80, cálculo fácil",
      ],
      80: [
        "Estrategia 8×10: multiplica por 8, agrega un 0",
        "Ejemplo: 7×80: 7×8=56, agrega un 0: 560",
        "Cuenta de ochenta en ochenta: 80, 160, 240, 320, 400, 480, 560, 640, 720, 800",
        "Refuerza la tabla del 8: cada resultado es 10 veces 8",
        "Múltiples métodos: 80=8×10=4×20=5×16=2×40",
      ],
      81: [
        "Usa que es el cuadrado de 9: 81=9×9",
        "Ejemplo: 81×5 = (9×5)×9 = 45×9 = 405",
        "Estrategia 80+1: 81×n = 80n + n. Ejemplo: 81×7 = 560+7 = 567",
        "Cuenta de ochenta y uno en ochenta y uno: 81, 162, 243, 324, 405, 486, 567, 648, 729, 810",
        "Practica los múltiplos más difíciles: 81×7=567, 81×8=648, 81×9=729",
      ],
      82: [
        "Estrategia 80+2: 82×n = 80n + 2n",
        "Ejemplo: 82×6 = 480 + 12 = 492",
        "Cuenta de ochenta y dos en ochenta y dos: 82, 164, 246, 328, 410, 492, 574, 656, 738, 820",
        "Relación 2×41: duplica la tabla del 41",
        "Practica los múltiplos más difíciles: 82×7=574, 82×9=738",
      ],
      83: [
        "Usa la estrategia 85-2 o 80+3",
        "Ejemplo: 83×6 = 510-12 = 498 o 480+18 = 498",
        "Cuenta de ochenta y tres en ochenta y tres: 83, 166, 249, 332, 415, 498, 581, 664, 747, 830",
        "Número primo: requiere estrategias de cálculo creativas",
        "Practica los múltiplos más difíciles: 83×7=581, 83×8=664, 83×9=747",
      ],
      84: [
        "Relación 7×12: puedes usar cualquiera de las dos tablas",
        "Ejemplo: 84×5 = 12×5×7 = 60×7 = 420",
        "Cuenta de ochenta y cuatro en ochenta y cuatro: 84, 168, 252, 336, 420, 504, 588, 672, 756, 840",
        "Múltiples métodos: 84=7×12=6×14=4×21=3×28",
        "Practica los múltiplos más difíciles: 84×7=588, 84×9=756",
      ],
      85: [
        "Relación 5×17: puedes usar ambas tablas, la del 5 y la del 17",
        "Ejemplo: 85×4 = 17×4×5 = 68×5 = 340",
        "Cuenta de ochenta y cinco en ochenta y cinco: 85, 170, 255, 340, 425, 510, 595, 680, 765, 850",
        "Último dígito: siempre termina en 5 o 0",
        "Estrategias 90-5 o 80+5: 85×6 = 540-30 = 510",
      ],
      86: [
        "Estrategia 90-4: 86×n = 90n - 4n",
        "Ejemplo: 86×6 = 540 - 24 = 516",
        "Cuenta de ochenta y seis en ochenta y seis: 86, 172, 258, 344, 430, 516, 602, 688, 774, 860",
        "Relación 2×43: duplica la tabla del 43",
        "Practica los múltiplos más difíciles: 86×7=602, 86×9=774",
      ],
      87: [
        "Estrategia 90-3 es PERFECTA: 87×n = 90n - 3n",
        "Ejemplo: 87×7 = 630 - 21 = 609. ¡Muy fácil!",
        "Cuenta de ochenta y siete en ochenta y siete: 87, 174, 261, 348, 435, 522, 609, 696, 783, 870",
        "Relación 3×29: triplica la tabla del 29",
        "Practica los múltiplos más difíciles: 87×7=609, 87×8=696, 87×9=783",
      ],
      88: [
        "Relación 8×11: puedes usar cualquiera de las dos tablas",
        "Ejemplo: 88×5 = 11×5×8 = 55×8 = 440",
        "Cuenta de ochenta y ocho en ochenta y ocho: 88, 176, 264, 352, 440, 528, 616, 704, 792, 880",
        "Propiedad de repetición: facilidad de reconocimiento visual (88)",
        "Múltiples métodos: 88=8×11=4×22=2×44",
      ],
      89: [
        "Estrategia 90-1 SÚPER FÁCIL: 89×n = 90n - n",
        "Ejemplo: 89×7 = 630 - 7 = 623. ¡PERFECTO!",
        "Cuenta de ochenta y nueve en ochenta y nueve: 89, 178, 267, 356, 445, 534, 623, 712, 801, 890",
        "Practica los múltiplos más difíciles: 89×7=623, 89×8=712, 89×9=801",
        "Número primo: la estrategia 90-1 es el método más práctico",
      ],
      90: [
        "Estrategia 9×10: multiplica por 9, agrega un 0",
        "Ejemplo: 7×90: 7×9=63, agrega un 0: 630",
        "Cuenta de noventa en noventa: 90, 180, 270, 360, 450, 540, 630, 720, 810, 900",
        "Refuerza la tabla del 9: cada resultado es 10 veces 9",
        "Múltiples métodos: 90=9×10=3×30=5×18=6×15",
      ],
      91: [
        "Relación 7×13: puedes usar cualquiera de las dos tablas",
        "Ejemplo: 91×5 = 13×5×7 = 65×7 = 455",
        "Estrategia 90+1: 91×n = 90n + n. Ejemplo: 91×7 = 630+7 = 637",
        "Cuenta de noventa y uno en noventa y uno: 91, 182, 273, 364, 455, 546, 637, 728, 819, 910",
        "Practica los múltiplos más difíciles: 91×7=637, 91×8=728, 91×9=819",
      ],
      92: [
        "Usa la estrategia 90+2 o 100-8",
        "Ejemplo: 92×6 = 480+12 = 492 o 600-48 = 552",
        "Cuenta de noventa y dos en noventa y dos: 92, 184, 276, 368, 460, 552, 644, 736, 828, 920",
        "Relación 4×23: cuadruplica la tabla del 23",
        "Practica los múltiplos más difíciles: 92×7=644, 92×9=828",
      ],
      93: [
        "Estrategia 90+3: 93×n = 90n + 3n",
        "Ejemplo: 93×7 = 630 + 21 = 651",
        "Cuenta de noventa y tres en noventa y tres: 93, 186, 279, 372, 465, 558, 651, 744, 837, 930",
        "Relación 3×31: triplica la tabla del 31",
        "Practica los múltiplos más difíciles: 93×7=651, 93×8=744, 93×9=837",
      ],
      94: [
        "Estrategia 100-6 es PERFECTA: 94×n = 100n - 6n",
        "Ejemplo: 94×7 = 700 - 42 = 658. ¡Muy fácil!",
        "Cuenta de noventa y cuatro en noventa y cuatro: 94, 188, 282, 376, 470, 564, 658, 752, 846, 940",
        "Relación 2×47: duplica la tabla del 47",
        "Practica los múltiplos más difíciles: 94×7=658, 94×8=752, 94×9=846",
      ],
      95: [
        "Relación 5×19: puedes usar ambas tablas, la del 5 y la del 19",
        "Ejemplo: 95×4 = 19×4×5 = 76×5 = 380",
        "Cuenta de noventa y cinco en noventa y cinco: 95, 190, 285, 380, 475, 570, 665, 760, 855, 950",
        "Último dígito: siempre termina en 5 o 0",
        "Estrategia 100-5: 95×6 = 600-30 = 570. ¡Muy práctico!",
      ],
      96: [
        "Relación 8×12: puedes usar cualquiera de las dos tablas",
        "Ejemplo: 96×5 = 12×5×8 = 60×8 = 480",
        "Cuenta de noventa y seis en noventa y seis: 96, 192, 288, 384, 480, 576, 672, 768, 864, 960",
        "Múltiples métodos: 96=8×12=6×16=4×24=3×32",
        "Practica los múltiplos más difíciles: 96×7=672, 96×9=864",
      ],
      97: [
        "Estrategia 100-3 SÚPER FÁCIL: 97×n = 100n - 3n",
        "Ejemplo: 97×7 = 700 - 21 = 679. ¡PERFECTO!",
        "Cuenta de noventa y siete en noventa y siete: 97, 194, 291, 388, 485, 582, 679, 776, 873, 970",
        "Practica los múltiplos más difíciles: 97×7=679, 97×8=776, 97×9=873",
        "Número primo: la estrategia 100-3 es el método más práctico",
      ],
      98: [
        "Estrategia 100-2 MUY FÁCIL: 98×n = 100n - 2n",
        "Ejemplo: 98×7 = 700 - 14 = 686. ¡Perfecto!",
        "Cuenta de noventa y ocho en noventa y ocho: 98, 196, 294, 392, 490, 588, 686, 784, 882, 980",
        "Relación 2×49: duplica la tabla del 49",
        "Practica los múltiplos más difíciles: 98×7=686, 98×8=784, 98×9=882",
      ],
      99: [
        "Estrategia 100-1 LA MÁS FÁCIL: 99×n = 100n - n",
        "Ejemplo: 99×7 = 700 - 7 = 693. ¡PERFECTO!",
        "Cuenta de noventa y nueve en noventa y nueve: 99, 198, 297, 396, 495, 594, 693, 792, 891, 990",
        "Relación 9×11: puedes usar cualquiera de las dos tablas",
        "Patrón de repetición: 99 proporciona facilidad de reconocimiento visual",
      ],
      100: [
        "¡LA TABLA MÁS FÁCIL! Agrega dos ceros al final",
        "Ejemplo: 7×100 = 700. ¡Solo agrega 00 después del 7!",
        "Cuenta de cien en cien: 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000",
        "Relación 10×10: 10 veces la tabla del 10",
        "Es la base para cálculos porcentuales: 100%=completo, ¡es la base de todo!",
      ],
    }
    return strategies[number] || [
      `Übe das Zählen in ${number}er-Schritten laut`,
      "Schreibe die Tabelle jeden Tag eine Woche lang auf",
      "Verwende Lernkarten, um dich zufällig zu testen",
      "Übe täglich 5-10 Minuten, anstatt auf einmal lange zu lernen",
    ]
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${colors[colorIndex]} pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20`}>
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Numbers - Multiplication Results */}
          {[1, 2, 3, 4, 5].map((multiplier, index) => (
            <div
              key={multiplier}
              className={`absolute text-5xl sm:text-6xl md:text-7xl font-bold opacity-10 animate-float${index % 2 === 0 ? '' : '-delayed'}`}
              style={{
                top: `${10 + index * 15}%`,
                left: index % 2 === 0 ? `${10 + index * 10}%` : 'auto',
                right: index % 2 !== 0 ? `${5 + index * 8}%` : 'auto'
              }}
            >
              {number * multiplier}
            </div>
          ))}
          
          {/* Colorful Circles */}
          <div className="absolute top-20 right-[30%] w-24 sm:w-32 h-24 sm:h-32 bg-yellow-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-[20%] w-32 sm:w-40 h-32 sm:h-40 bg-pink-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-[45%] w-20 sm:w-28 h-20 sm:h-28 bg-green-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-[15%] w-28 sm:w-36 h-28 sm:h-36 bg-purple-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          {/* Number Badge with Fun Icons */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border-2 border-white/50">
              <span className="text-2xl sm:text-3xl">🔢</span>
              <span className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {number}
              </span>
              <span className="text-2xl sm:text-3xl">✖️</span>
            </div>
          </div>
          
          {/* Main Heading with Fun Elements */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
              <span className="text-4xl sm:text-5xl md:text-6xl animate-bounce">🎯</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-slate-900">{number}</span>
                <br className="sm:hidden" />
                <span className="sm:inline"> </span>
                <span className="text-slate-900">Tabla de Multiplicar</span>
              </h1>
              <span className="text-4xl sm:text-5xl md:text-6xl animate-bounce" style={{ animationDelay: '0.2s' }}>🎨</span>
            </div>
            
            {/* Fun Stats Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-2xl mx-auto mt-6 sm:mt-8 mb-4 sm:mb-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border-2 border-blue-100">
                <div className="text-2xl sm:text-3xl mb-1">📊</div>
                <div className="text-xl sm:text-2xl font-bold text-blue-600">10</div>
                <div className="text-xs text-slate-600">Operaciones</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border-2 border-indigo-100">
                <div className="text-2xl sm:text-3xl mb-1">🎮</div>
                <div className="text-xl sm:text-2xl font-bold text-indigo-600">3</div>
                <div className="text-xs text-slate-600">Juegos</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border-2 border-purple-100">
                <div className="text-2xl sm:text-3xl mb-1">📝</div>
                <div className="text-xl sm:text-2xl font-bold text-purple-600">∞</div>
                <div className="text-xs text-slate-600">Práctica</div>
              </div>
            </div>
          </div>
          
          {/* Description with Better Typography */}
          <div className="max-w-3xl mx-auto space-y-4 text-center px-4">
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
              Esta página te ayudará a aprender y entender <span className="font-semibold text-yellow-200">la tabla de multiplicar del {number}</span>. 
              Descubrirás cómo se comporta el {number} en la multiplicación, 
              <span className="font-semibold text-yellow-200"> verás sus patrones</span> y 
              aprenderás <span className="font-semibold text-yellow-200">formas prácticas</span> para dominarla.
            </p>
            
            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-4">
              <a 
                href="#practice"
                className="group inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-indigo-600 font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 text-sm sm:text-base"
              >
                <span className="text-lg sm:text-xl">🎯</span>
                <span>Practicar</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="#games"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur-sm text-purple-600 font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border-2 border-white/50 text-sm sm:text-base"
              >
                <span className="text-lg sm:text-xl">🎮</span>
                <span>Explorar Juegos</span>
              </a>
              <a 
                href="#worksheets"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur-sm text-green-600 font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border-2 border-white/50 text-sm sm:text-base"
              >
                <span className="text-lg sm:text-xl">📝</span>
                <span className="hidden sm:inline">Descargar Ejercicios</span>
                <span className="sm:hidden">Descargar</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Introduction - What This Table Covers */}
      <section className="section-container bg-white py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 flex items-center justify-center gap-3">
              <span className="text-2xl sm:text-3xl">📖</span>
              ¿Qué Cubre la Tabla del {number}?
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-sm sm:text-base text-slate-700 mb-6 leading-relaxed text-center max-w-2xl mx-auto">
            La tabla de multiplicar del {number} cubre el producto del número {number} con todos los números del 1 al 10. 
            Esto te enseña <span className="font-bold text-indigo-600">10 operaciones fundamentales</span> que te ayudarán mucho en la vida diaria y en temas matemáticos avanzados.
          </p>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 border-2 border-blue-100 shadow-md">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((multiplier, index) => (
                <div key={multiplier} className="flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl p-2 sm:p-3 shadow-sm hover:shadow-md transition-shadow group">
                  <span className="text-xs sm:text-sm text-slate-600 mb-1">{number} × {multiplier}</span>
                  <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-base sm:text-xl shadow-md group-hover:scale-110 transition-transform">
                    {number * multiplier}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="bg-white/60 rounded-xl p-3 sm:p-4 flex items-start gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl">💡</span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                La tabla del {number} tiene <span className="font-bold text-indigo-600">10 operaciones de multiplicación</span>. 
                ¡Al entender los patrones de esta tabla, puedes memorizar fácilmente estas operaciones y calcularlas rápidamente!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Number Context & Meaning + Table Combined */}
      <section className="section-container bg-white py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            {/* Left: Explanation */}
            <div className="space-y-5 sm:space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                  ¿Qué Significa el Número {number} en la Multiplicación?
                </h2>
                
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4 sm:mb-6">
                  {getNumberMeaning()}
                </p>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-5 border-2 border-blue-100">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-3xl">💡</span>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1 sm:mb-2">Explicación Simple</h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        Cuando ves {number} × 4, piensa: "Tengo 4 grupos y cada grupo tiene {number} elementos." 
                        Entonces {number} × 4 = {number} + {number} + {number} + {number} = {number * 4}.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                  Por Qué Es Importante Aprender la Tabla del {number}
                </h2>
                
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {getWhyImportant()}
                </p>
              </div>
            </div>

            {/* Right: Multiplication Table */}
            <div className="lg:sticky lg:top-8">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Einmaleins-Tabelle von {number}
                </h2>
                
                {/* Print and Download Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={handlePrint}
                    className="group flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-white border-2 border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all text-xs sm:text-sm font-semibold"
                    title="Drucken"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    <span className="hidden sm:inline">Drucken</span>
                  </button>
                  
                  <button
                    onClick={handleDownload}
                    className="group flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg"
                    title="Herunterladen"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span className="hidden sm:inline">Herunterladen</span>
                  </button>
                </div>
              </div>
              
              <div ref={tableRef} className={`bg-gradient-to-br ${colors[colorIndex]} rounded-2xl p-4 sm:p-6 text-white shadow-xl`}>
                <div className="space-y-1.5 sm:space-y-2">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="flex justify-between items-center bg-white/20 backdrop-blur-sm rounded-lg px-3 sm:px-5 py-2 sm:py-2.5 hover:bg-white/30 transition-colors">
                      <span className="font-medium text-sm sm:text-base">{number} × {i + 1}</span>
                      <span className="font-bold text-base sm:text-lg">= {number * (i + 1)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patterns & Observations */}
      <section className="section-container bg-white py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
            Muster in der Einmaleins-Tabelle von {number}
          </h2>
          
          <p className="text-sm sm:text-base text-slate-700 mb-4 sm:mb-6 leading-relaxed">
            Muster zu verstehen macht das Lernen einfacher und macht mehr Spaß. Die Einmaleins-Tabelle von {number} hat 
            wunderschöne Muster, die dir helfen können, sie zu merken, ohne auswendig zu lernen.
          </p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {getPatterns().map((pattern, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-3 sm:p-4 border-2 border-amber-100">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1.5 sm:mb-2 flex items-center gap-2">
                  <span className="text-lg sm:text-xl">{index === 0 ? '🔄' : index === 1 ? '📊' : '✨'}</span>
                  {pattern.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {pattern.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <div id="practice">
        <PracticePreview rangeStart={number} rangeEnd={number} />
      </div>

      {/* Interactive Games */}
      <div id="games">
        <NumberGames number={number} />
      </div>

      {/* Printable Worksheets */}
      <div id="worksheets">
        <PrintableExercises rangeStart={number} rangeEnd={number} />
      </div>

      {/* How to Practice */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
            Wie man die Einmaleins-Tabelle von {number} übt
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            Das Lernen der Einmaleins-Tabellen erfordert konsequentes Üben mit den richtigen Strategien. 
            Hier sind bewährte Methoden, um speziell die Einmaleins-Tabelle von {number} zu meistern:
          </p>
          
          <div className="grid gap-3 sm:gap-4">
            {getPracticeStrategies().map((strategy, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-4 sm:p-5 border-2 border-green-100">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm sm:text-base">
                  {index + 1}
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed pt-0.5 sm:pt-1">
                  {strategy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="section-container bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
            Häufige Fehler beim Lernen der Einmaleins-Tabelle von {number}
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            Viele Schüler machen ähnliche Fehler beim Lernen dieser Tabelle. Sich dieser häufigen Fehler bewusst zu sein, 
            hilft dir, sie zu vermeiden und effektiver zu lernen.
          </p>
          
          <div className="space-y-4 sm:space-y-6">
            {getCommonMistakes().map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 border-l-4 border-red-500 shadow-md">
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-2xl sm:text-3xl">⚠️</span>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1.5 sm:mb-2">
                      {item.mistake}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      <span className="font-semibold text-green-600">Lösung:</span> {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Multiplication Tables */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
            Verwandte Einmaleins-Tabellen
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            Die Einmaleins-Tabelle von {number} ist Teil eines breiteren Lernsystems. 
            Du kannst andere Tabellen im selben Bereich erkunden oder zur nächsten logischen Zahl übergehen.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {number > 1 && (
              <Link
                href={`/tabla/${number - 1}`}
                className="block bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs sm:text-sm text-slate-600 mb-1">← Vorherige Zahl</div>
                    <div className="text-lg sm:text-2xl font-bold text-slate-900">
                      {number - 1}er-Einmaleins-Tabelle
                    </div>
                  </div>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
              </Link>
            )}
            
            {number < 100 && (
              <Link
                href={`/tabla/${number + 1}`}
                className="block bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 sm:p-6 border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs sm:text-sm text-slate-600 mb-1">Nächste Zahl →</div>
                    <div className="text-lg sm:text-2xl font-bold text-slate-900">
                      {number + 1}er-Einmaleins-Tabelle
                    </div>
                  </div>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            )}
            
            <Link
              href={`/${rangeStart}-${rangeEnd}`}
              className="block bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-4 sm:p-6 border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all group sm:col-span-2"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-sm text-slate-600 mb-1">↑ Übergeordneter Bereich</div>
                  <div className="text-lg sm:text-2xl font-bold text-slate-900">
                    Einmaleins-Tabellen von {rangeStart} bis {rangeEnd}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 sm:mt-2">
                    Entdecke alle Einmaleins-Tabellen in diesem Bereich mit Übungstools und Spielen
                  </p>
                </div>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
