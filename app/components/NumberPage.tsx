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
              <title>Tabla de Multiplicar del ${number}</title>
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
              <h1>Tabla de Multiplicar del ${number}</h1>
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
        ctx.fillText('Tabla del ' + number, 300, 60)

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
            link.download = number + '-tabla-de-multiplicar.png'
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
      1: "Multiplicar por 1 es un caso especial en matemáticas. Cuando multiplicas cualquier número por 1, el resultado siempre es ese mismo número. Esto se llama la propiedad de identidad de la multiplicación. Piénsalo como preguntar '¿cuántos grupos de algo tengo?' Cuando solo tienes 1 grupo, tienes exactamente lo que empezaste.",
      2: "Multiplicar por 2 significa duplicar un número. Cuando multiplicas algo por 2, lo estás agregando a sí mismo. Esta es una de las operaciones de multiplicación más prácticas porque frecuentemente necesitamos duplicar cosas en la vida real—contar pares de zapatos, ruedas de bicicleta, o dividir algo equitativamente entre dos personas.",
      3: "Multiplicar por 3 significa tomar un número tres veces. Puedes pensarlo como sumar el mismo número a sí mismo tres veces. Esta tabla es esencial para entender triángulos, tríos y todo lo que viene en grupos de tres.",
      4: "Multiplicar por 4 es como duplicar dos veces. Como 4 = 2 × 2, puedes duplicar un número y luego duplicar el resultado otra vez. Esto hace que aprender la tabla del 4 sea más fácil si ya conoces la del 2. El número 4 aparece frecuentemente en geometría (los cuadrados tienen 4 lados) y en la medición del tiempo (hay 4 cuartos en una hora).",
      5: "Multiplicar por 5 crea uno de los patrones más hermosos en matemáticas. Todos los múltiplos de 5 terminan en 0 o 5, lo que hace que esta tabla sea muy predecible. Es extremadamente útil para contar dinero (monedas de 5 centavos, billetes de 5 pesos) y decir la hora (intervalos de 5 minutos).",
      6: "Multiplicar por 6 significa tomar seis grupos de un número. El 6 es la primera tabla de multiplicar 'real' porque no es simplemente múltiplos de 2 o 3. Sin embargo, como 6 = 2 × 3, puedes multiplicar un número por 2 y luego por 3 (o al revés) para multiplicar por 6. El número 6 aparece frecuentemente en la naturaleza (celdas de panal de abeja) y en la vida cotidiana (cartones de huevos, caras de dados).",
      7: "Multiplicar por 7 es generalmente una de las tablas con las que los estudiantes tienen más dificultades porque 7 es un número primo y no se puede derivar de otras tablas simples. Sin embargo, hay patrones hermosos en todos los múltiplos del 7 y se puede aprender con práctica. El 7 es un número importante en los días de la semana, los continentes del mundo y muchas referencias culturales.",
      8: "Multiplicar por 8 es como duplicar tres veces (8 = 2 × 2 × 2). Duplica un número, duplica el resultado otra vez, y duplícalo una vez más—habrás multiplicado por 8. Esta tabla es más fácil de aprender si conoces bien las tablas del 2 y 4. El 8 es un número importante en geometría (octógonos) y música (octava).",
      9: "Multiplicar por 9 tiene uno de los patrones más fascinantes en matemáticas. Cuando sumas los dígitos de todos los múltiplos del 9, el resultado siempre es divisible por 9. Además, el dígito de las decenas de 9 × n siempre es n-1. Esta tabla también se puede aprender con el truco de los dedos. Como 9 es solo 1 menos que 10, también se puede calcular usando la tabla del 10.",
      10: "Multiplicar por 10 es una de las tablas de multiplicar más fáciles. Cuando multiplicas cualquier número por 10, simplemente agregas un cero al final. Esto forma la base de nuestro sistema decimal. Aprender a multiplicar por 10 enseña a los estudiantes el concepto de valor posicional y cómo trabajar con números grandes. La tabla del 10 es un punto de referencia para entender todas las demás tablas de multiplicar.",
      11: "Multiplicar por 11 tiene uno de los patrones más interesantes en matemáticas. Cuando multiplicas números de un dígito por 11, el resultado es ese número repetido dos veces (11×3=33, 11×7=77). Al multiplicar números de dos dígitos por 11, también hay un patrón hermoso: sumas los dígitos y los colocas en el medio. El 11 es un número primo y tiene propiedades matemáticas especiales.",
      12: "Multiplicar por 12 es una de las tablas más prácticas porque 12 es divisible por muchos números (1, 2, 3, 4, 6, 12). Esta característica hace que el 12 sea muy útil en la vida diaria—hay 12 objetos en una docena, 12 horas en un reloj, 12 meses en un año. Como 12 = 3 × 4 = 2 × 6, puedes aprender esta tabla de múltiples maneras.",
      13: "Multiplicar por 13 desarrolla las habilidades de reconocimiento de patrones de los estudiantes. El 13 es un número primo, por lo que no se puede derivar simplemente de otras tablas. Sin embargo, pensar en 13 como 10+3 es muy útil: multiplicar un número por 13 significa multiplicarlo por 10 y sumar el resultado de multiplicarlo por 3. El 13 es un número con significado especial en muchas culturas.",
      14: "Multiplicar por 14 es el doble de la tabla del 7. Como 14 = 2 × 7, si conoces la tabla del 7, puedes duplicar cada resultado para encontrar la tabla del 14. El 14 es importante en la planificación semanal (2 semanas = 14 días) y muestra propiedades de números pares.",
      15: "Multiplicar por 15 combina los múltiplos tanto del 3 como del 5. Como 15 = 3 × 5, esta tabla lleva las propiedades de ambos números. Todos los múltiplos del 15 son divisibles tanto por 3 como por 5. Como 15 minutos es un cuarto de hora, se usa mucho en cálculos de tiempo.",
      16: "Multiplicar por 16 es la cuarta potencia del 2 (2×2×2×2=16). Esto hace posible aprender la tabla del 16 mediante cadenas de duplicación. Puedes duplicar el 8 para obtener 16. En informática, el 16 es un número importante (sistema hexadecimal) y también aparece frecuentemente en la vida diaria.",
      17: "Multiplicar por 17 puede ser difícil debido a sus propiedades de número primo. El 17 no se puede derivar simplemente de otras tablas. Sin embargo, pensar en 17 como 20-3 o 10+7 facilita los cálculos. Aprender la tabla del 17 desarrolla habilidades de matemática mental y estrategias de resolución de problemas.",
      18: "Multiplicar por 18 contiene muchas relaciones. Como 18 = 2 × 9 = 3 × 6, puedes aprender esta tabla de múltiples maneras. Duplicar la tabla del 9 o triplicar la tabla del 6 da la tabla del 18. El 18 es importante como edad de mayoría de edad en muchos países.",
      19: "Multiplicar por 19 no se puede derivar de otras tablas porque el 19 es un número primo. Sin embargo, pensar en 19 como 20-1 es muy práctico: multiplica un número por 20 y réstale el número mismo. Esta estrategia facilita mucho el cálculo mental de la tabla del 19.",
      20: "Multiplicar por 20 es la extensión natural de la tabla del 10. Cuando multiplicas cualquier número por 20, puedes multiplicarlo por 10 y duplicar el resultado. O simplemente agrega un cero al final y duplica. La tabla del 20 se usa constantemente en cálculos monetarios (20 pesos) y mediciones (20 metros, 20 kilogramos).",
      21: "Multiplicar por 21 requiere entender la relación 3×7. Como 21=3×7, esta tabla lleva las propiedades de las tablas del 3 y del 7. El 21 es importante como edad legal de mayoría en muchos países. Pensar en 21 como 20+1 facilita los cálculos: multiplica un número por 20 y agrégale el número mismo.",
      22: "Multiplicar por 22 es el doble del 11 (22=2×11). Si conoces la tabla del 11, puedes duplicar cada resultado para encontrar la tabla del 22. Como 22 también es 2×11, muestra propiedades de números pares. El 22 aparece frecuentemente en deportes (equipo de fútbol) y conteo diario.",
      23: "Multiplicar por 23 no se puede derivar de otras tablas debido a sus propiedades de número primo. Sin embargo, pensar en 23 como 20+3 o 25-2 facilita los cálculos. El 23 es un número importante en biología (número de pares de cromosomas humanos). Aprender la tabla del 23 fortalece las habilidades de aritmética mental.",
      24: "Multiplicar por 24 es una de las tablas más versátiles. Como 24=2×12=3×8=4×6, se puede calcular de muchas maneras diferentes. Debido a la relación día-hora (24 horas), es un número fundamental en cálculos de tiempo. El 24 también son 2 docenas y se usa frecuentemente en embalaje y agrupación.",
      25: "Multiplicar por 25 usa la relación 5×5 (5²). Como 25 es el cuadrado de 5, tiene propiedades matemáticas muy especiales. Es importante en cálculos monetarios (25 centavos son un cuarto). Todos los múltiplos del 25 terminan en 25, 50, 75, 00 - un patrón muy regular.",
      26: "Multiplicar por 26 es el doble del 13 (26=2×13). Si conoces la tabla del 13, puedes duplicar cada resultado para encontrar la tabla del 26. El 26 es el número de letras en el alfabeto inglés. Pensar en 26 como 25+1 o 30-4 facilita los cálculos.",
      27: "Multiplicar por 27 es la tercera potencia del 3 (27=3³=3×3×3). Esta relación especial hace que el 27 sea importante en matemáticas y geometría. Como 27=3×9, se puede calcular usando las tablas del 3 o del 9. Pensar en 27 como 30-3 facilita el cálculo mental.",
      28: "Multiplicar por 28 usa la relación 4×7. Como 28=4×7=2×14, se puede aprender de múltiples maneras. 28 días es el número de días en febrero (cuando no es año bisiesto). El 28 también es un número perfecto (la suma de sus divisores es igual a sí mismo: 1+2+4+7+14=28).",
      29: "Multiplicar por 29 requiere estrategias especiales debido a que es número primo. El método más práctico es pensar en 29 como 30-1: multiplica un número por 30 y réstale el número mismo. 29 días es el número de días en febrero en años bisiestos. Aprender la tabla del 29 desarrolla habilidades de resolución de problemas.",
      30: "Multiplicar por 30 usa la relación 10×3. Para multiplicar un número por 30, puedes multiplicarlo por 10 y luego multiplicar el resultado por 3. 30 días es el número de días en muchos meses (abril, junio, septiembre, noviembre). El 30 también es media hora (30 minutos). La tabla del 30 se usa frecuentemente en cálculos de porcentaje (30% de descuento).",
      31: "Multiplicar por 31 requiere estrategias especiales debido a sus propiedades de número primo. El método más práctico es pensar en 31 como 30+1: multiplica un número por 30 y agrégale el número mismo. 31 días es el número máximo de días en muchos meses (enero, marzo, mayo, julio, agosto, octubre, diciembre). Aprender la tabla del 31 desarrolla habilidades de cálculo mental con números grandes.",
      32: "Multiplicar por 32 es la quinta potencia del 2 (2⁵=2×2×2×2×2=32). Esto hace posible aprender el 32 mediante cadenas de duplicación. Puedes duplicar el 16 para obtener 32. 32 grados Fahrenheit es el punto de congelación del agua. En informática, los sistemas de 32 bits son comunes. Las relaciones 32=4×8=2×16 ofrecen diferentes métodos de cálculo.",
      33: "Multiplicar por 33 usa la relación 3×11. Si conoces la tabla del 11, puedes triplicarla, o si conoces la tabla del 3, puedes multiplicarla por 11 para encontrar la tabla del 33. El 33 es el número repdigit de dos dígitos más grande (repetición de los mismos dígitos). Que todos los dígitos del 33 sean iguales crea algunos patrones interesantes.",
      34: "Multiplicar por 34 es el doble del 17 (34=2×17). Si conoces la tabla del 17, puedes duplicar cada resultado para encontrar la tabla del 34. La suma de los dígitos en 34 es 7 (3+4=7), lo que conduce a patrones relacionados con el 7. Pensar en 34 como 35-1 o 30+4 facilita los cálculos.",
      35: "Multiplicar por 35 usa la relación 5×7. Si ambas tablas son conocidas, multiplicar por 35 es bastante fácil. Todos los múltiplos del 35 terminan en 5 o 0 (como los múltiplos del 5). 35 minutos son 5 minutos más que media hora. La relación 35=5×7 combina las propiedades de ambas tablas del 5 y del 7.",
      36: "Multiplicar por 36 es una de las tablas más versátiles. Como 36=6×6=4×9=3×12=2×18, se puede calcular de muchas maneras diferentes. El 36 es el cuadrado de 6 (6²). El 36 son múltiplos de una docena completa (1 docena = 12, 3 docenas = 36). El 36 tiene muchos divisores, lo que lo hace muy útil en fracciones.",
      37: "Multiplicar por 37 requiere estrategias especiales debido a que es número primo. Pensar en 37 como 40-3 o 35+2 facilita los cálculos. El 37 tiene relaciones interesantes con números repdigit: 37×3=111. Esta propiedad especial del 37 se puede usar para algunos cálculos trucos.",
      38: "Multiplicar por 38 es el doble del 19 (38=2×19). Si conoces la tabla del 19, puedes duplicar cada resultado para encontrar la tabla del 38. Pensar en 38 como 40-2 facilita el cálculo mental. 38 grados Celsius es fiebre leve para la temperatura corporal humana.",
      39: "Multiplicar por 39 usa la relación 3×13. Como 39=3×13, se puede calcular triplicando la tabla del 13 o multiplicando la tabla del 3 por 13. El método más práctico es pensar en 39 como 40-1. El 39 es un número interesante divisible tanto por 3 como por 13.",
      40: "Multiplicar por 40 usa la relación 4×10. Para multiplicar un número por 40, puedes multiplicarlo por 10 y luego multiplicar el resultado por 4. O multiplic por 4 y agrega un cero al final. El 40 se usa frecuentemente en la vida diaria: 40 horas de semana laboral, 40 años se considera mediana edad. La tabla del 40 es muy regular porque son los 10s multiplicados por 4.",
      41: "Multiplicar por 41 desarrolla habilidades de matemática mental debido a sus propiedades de número primo. El método más práctico es pensar en 41 como 40+1: multiplica un número por 40 y agrégale el número mismo. El 41 es un número primo y no se puede derivar simplemente de otras tablas. Aprender la tabla del 41 aumenta la capacidad de calcular rápidamente con números grandes.",
      42: "Multiplicar por 42 es una de las tablas más versátiles. Como 42=6×7=2×21=3×14, se puede calcular de múltiples maneras. El 42 es famoso en la cultura de ciencia ficción como 'La Respuesta Final al Universo, la Vida y Todo' (Guía del Autoestopista Galáctico). Como combina las tablas del 6 y del 7, refuerza ambas.",
      43: "Multiplicar por 43 requiere estrategias especiales debido a que es número primo. Pensar en 43 como 40+3 o 45-2 facilita los cálculos. El 43 es un número primo y solo es divisible por 1 y 43. Aprender la tabla del 43 desarrolla la habilidad de pensar creativamente con números.",
      44: "Multiplicar por 44 es cuatro veces el 11 (44=4×11). Si conoces la tabla del 11, puedes cuadruplicarla, o multiplicar la tabla del 4 por 11 para calcularla. La relación 44=2×22 también ofrece un método diferente. El 44 muestra un patrón similar a repdigit y tiene propiedades de números pares.",
      45: "Multiplicar por 45 usa la relación 5×9. Si ambas tablas son conocidas, multiplicar por 45 es fácil. 45 grados es medio ángulo recto, un ángulo importante en geometría. 45 minutos son tres cuartos de hora (45 minutos = 0.75 horas). Todos los múltiplos del 45 terminan en 5 o 0.",
      46: "Multiplicar por 46 es el doble del 23 (46=2×23). Si conoces la tabla del 23, puedes duplicar cada resultado para encontrar la tabla del 46. Pensar en 46 como 45+1 o 50-4 facilita los cálculos. El 46 es el número total de cromosomas humanos (23 pares).",
      47: "Multiplicar por 47 requiere estrategias mentales debido a sus propiedades de número primo. Los métodos más efectivos son pensar en 47 como 50-3 o 45+2. El 47 es un número primo y tiene propiedades matemáticas especiales. Aprender la tabla del 47 desarrolla la habilidad de trabajar cómodamente con números complejos.",
      48: "Multiplicar por 48 tiene muchas relaciones de factores. Como 48=6×8=4×12=3×16=2×24, se puede calcular de múltiples maneras. Como el 48 es 4 veces 12, es útil en cálculos de docenas (4 docenas). 48 horas = 2 días, se encuentra frecuentemente en cálculos de tiempo.",
      49: "Multiplicar por 49 es el cuadrado de 7 (49=7×7=7²). Esta relación especial requiere conocer perfectamente la tabla del 7. Pensar en 49 como 50-1 facilita muchísimo el cálculo mental. Como es un número cuadrado, el 49 es importante en geometría y cálculos de área. El 49 también es importante para patrones matemáticos, aunque no es un tablero de ajedrez 7×7.",
      50: "Multiplicar por 50 usa la relación 5×10 y es una de las tablas más fáciles. Para multiplicar un número por 50, puedes multiplicarlo por 5 y agregar un cero al final. O pensar en ello como la mitad de 100. El 50 se usa frecuentemente: medio siglo, y en cálculos de porcentaje (50%=1/2).",
      51: "Multiplicar por 51 usa la estrategia 50+1. Para multiplicar un número por 51, multiplicálo por 50 y agrégale el número mismo. La relación 51=3×17 ofrece un método alternativo. Aprender la tabla del 51 desarrolla la habilidad de calcular con números cercanos a 50.",
      52: "Multiplicar por 52 usa la relación 4×13. Es el número de semanas en un año (52 semanas) y el número de cartas en una baraja estándar (52 cartas). Como 52=2×26, duplicar la tabla del 26 también funciona. Pensar en 52 como 50+2 facilita el cálculo mental. Esta tabla es muy útil en cálculos de tiempo y calendario.",
      53: "Multiplicar por 53 desarrolla estrategias de matemática mental debido a sus propiedades de número primo. Los métodos más prácticos son pensar en 53 como 50+3 o 55-2. El 53 es un número primo y solo es divisible por 1 y 53. Aprender la tabla del 53 aumenta la capacidad de trabajar con números primos grandes y profundiza el pensamiento matemático.",
      54: "Multiplicar por 54 es una de las tablas más versátiles. Como 54=6×9=2×27=3×18, se puede calcular de muchas maneras diferentes. El 54 es 3 veces la suma de los números del 1 al 10 (1+2+...+10=55 aproximadamente). Como combina las tablas del 6 y del 9, refuerza ambas. Tener muchos divisores lo hace útil en cálculos de fracciones.",
      55: "Multiplicar por 55 usa la relación 5×11. Si ambas tablas son conocidas, multiplicar por 55 es fácil. La estrategia 55=50+5 también es muy práctica. El 55 es la suma de los números del 1 al 10 (1+2+3+...+10=55), esta relación matemática especial lo hace interesante. El patrón del 5 (termina en 5 o 0) facilita el cálculo.",
      56: "Multiplicar por 56 usa la relación 7×8. Como combina estas dos tablas difíciles, refuerza ambas. Las alternativas 56=4×14=2×28 ofrecen diferentes estrategias. El 56 es el número total de horas en 7 días con jornadas laborales de 8 horas (7×8). Pensar en 56 como 60-4 también facilita el cálculo mental.",
      57: "Multiplicar por 57 usa la relación 3×19. Triplicar la tabla del 19 o multiplicar la tabla del 3 por 19 funciona. Pensar en 57 como 60-3 o 55+2 facilita el cálculo. Como 57=3×19, es divisible tanto por 3 como por 19. Aprender la tabla del 57 desarrolla la habilidad de trabajar con números grandes de nivel medio.",
      58: "Multiplicar por 58 es el doble del 29 (58=2×29). Si conoces la tabla del 29, puedes duplicar cada resultado para encontrar la tabla del 58. Pensar en 58 como 60-2 o 50+8 facilita el cálculo. Como es un número par, todos sus múltiplos también son pares. Esta tabla refuerza estrategias de duplicación y aproximación a números redondos.",
      59: "Multiplicar por 59 requiere estrategias especiales debido a sus propiedades de número primo y proximidad al 60. El método más efectivo es pensar en 59 como 60-1: multiplica un número por 60 y réstale el número mismo. El 59 es un número primo y solo es divisible por 1 y 59. La tabla del 59 proporciona contexto para cálculos de minutos y tiempo (59 minutos) debido a su proximidad al 60.",
      60: "Multiplicar por 60 usa la relación 6×10 y es muy útil. Para multiplicar un número por 60, puedes multiplicarlo por 6 y agregar un cero al final. El 60 es el número de minutos en una hora, el número de segundos en un minuto, y un sexto de los 360° de un círculo. Hay muchas relaciones de factores como 60=2×30=3×20=4×15=5×12. Esta tabla es crítica para cálculos de tiempo.",
      61: "Multiplicar por 61 requiere estrategias especiales debido a sus propiedades de número primo y proximidad al 60. El método más práctico es pensar en 61 como 60+1: multiplica un número por 60 y agrégale el número mismo. El 61 es un número primo y solo es divisible por 1 y 61. Aprender la tabla del 61 desarrolla la habilidad de cálculo mental con números por encima de 60.",
      62: "Multiplicar por 62 es el doble del 31 (62=2×31). Si conoces la tabla del 31, puedes duplicar cada resultado para encontrar la tabla del 62. Pensar en 62 como 60+2 o 65-3 facilita el cálculo. Como es un número par, todos sus múltiplos también son pares. Esta tabla es útil para duplicación y cálculos cercanos a 60.",
      63: "Multiplicar por 63 usa la relación 7×9. Como combina estas dos tablas importantes, refuerza ambas. La alternativa 63=3×21 ofrece una estrategia diferente. Pensar en 63 como 60+3 o 65-2 facilita el cálculo mental. El 63 es muy versátil porque es divisible tanto por 7 como por 9.",
      64: "Multiplicar por 64 es una potencia de 2 (64=2⁶=8×8). Como la arquitectura de 64 bits es común en informática, es importante en la era tecnológica. La relación 64=8² (ocho al cuadrado) es crítica para entender números cuadrados. Pensar en 64 como 60+4 o 65-1 facilita el cálculo. Hay 64 casillas en un tablero de ajedrez (8×8).",
      65: "Multiplicar por 65 usa la relación 5×13. Si ambas tablas son conocidas, multiplicar por 65 es fácil. El 65 se usa como edad de jubilación en muchos países. Pensar en 65 como 60+5 o 70-5 facilita el cálculo mental. El patrón del 5 (termina en 5 o 0) facilita el cálculo.",
      66: "Multiplicar por 66 usa la relación 6×11 o la relación 2×33. Como 66=6×11, tiene patrones similares a repdigit. Pensar en 66 como 60+6 o 70-4 facilita el cálculo. El 66 es divisible tanto por 6 como por 11. Como es un número par, todos sus múltiplos también son pares.",
      67: "Multiplicar por 67 desarrolla estrategias de matemática mental debido a sus propiedades de número primo. Los métodos más prácticos son pensar en 67 como 70-3 o 65+2. El 67 es un número primo y solo es divisible por 1 y 67. Aprender la tabla del 67 aumenta la capacidad de trabajar con números primos grandes.",
      68: "Multiplicar por 68 usa la relación 4×17 o la relación 2×34. Cuadruplicar la tabla del 17 o duplicar la tabla del 34 funciona. Pensar en 68 como 70-2 o 60+8 facilita el cálculo. Como es un número par, todos sus múltiplos también son pares. El 68 es divisible tanto por 4 como por 17.",
      69: "Multiplicar por 69 usa la relación 3×23. Triplicar la tabla del 23 o multiplicar la tabla del 3 por 23 funciona. La estrategia más fácil es pensar en 69 como 70-1: multiplica un número por 70 y réstale el número mismo. Como 69=3×23, es divisible tanto por 3 como por 23. Esta tabla es útil para cálculos cercanos a 70.",
      70: "Multiplicar por 70 usa la relación 7×10 y es muy útil. Para multiplicar un número por 70, puedes multiplicarlo por 7 y agregar un cero al final. El 70 se asocia con la esperanza de vida promedio de una persona (entre 70-80 en la mayoría de los países). Hay relaciones de factores alternativos como 70=2×35=5×14. Esta tabla refuerza la tabla del 7.",
      71: "Multiplicar por 71 desarrolla estrategias de matemática mental debido a sus propiedades de número primo. El método más práctico es pensar en 71 como 70+1: multiplica un número por 70 y agrégale el número mismo. El 71 es un número primo y solo es divisible por 1 y 71. Aprender la tabla del 71 desarrolla la capacidad de calcular rápidamente con números primos grandes.",
      72: "Multiplicar por 72 es una de las tablas más versátiles. Como 72=8×9=6×12=4×18=3×24=2×36, se puede calcular de muchas maneras diferentes. El 72 es 3 veces el número de horas en un día (72 horas = 3 días). Tener muchos divisores lo hace extremadamente útil en cálculos de fracciones. El 72 es 6 veces 12 (6 docenas).",
      73: "Multiplicar por 73 desarrolla propiedades de número primo y estrategias de cálculo mental. Los métodos más prácticos son pensar en 73 como 70+3 o 75-2. El 73 es un número primo y solo es divisible por 1 y 73. El 73 también es el primo número 21 y tiene propiedades matemáticas interesantes.",
      74: "Multiplicar por 74 usa la relación 2×37. Si conoces la tabla del 37, puedes duplicar cada resultado para encontrar la tabla del 74. Pensar en 74 como 70+4 o 75-1 facilita el cálculo. Como es un número par, todos sus múltiplos también son pares. El 74 es divisible tanto por 2 como por 37.",
      75: "Multiplicar por 75 usa las relaciones 3×25=5×15. El 75 es tres cuartos de 100 (75%=3/4). También se puede expresar como 75=3×5×5. Pensar en 75 como 70+5 o 80-5 facilita el cálculo mental. El patrón del 5 (termina en 5 o 0) facilita el cálculo. Se usa frecuentemente en cálculos de porcentaje (75%=¾).",
      76: "Multiplicar por 76 usa la relación 4×19 o la relación 2×38. Cuadruplicar la tabla del 19 o duplicar la tabla del 38 funciona. Pensar en 76 como 75+1 o 80-4 facilita el cálculo. Como es un número par, todos sus múltiplos también son pares. El 76 es divisible tanto por 4 como por 19.",
      77: "Multiplicar por 77 usa la relación 7×11. Si ambas tablas son conocidas, multiplicar por 77 es fácil. El 77 muestra un patrón similar a repdigit (repetición de 7s). Pensar en 77 como 80-3 o 75+2 facilita el cálculo. Como 77=7×11, es divisible tanto por 7 como por 11.",
      78: "Multiplicar por 78 usa las relaciones 2×39=3×26=6×13. Se puede calcular de múltiples maneras. Pensar en 78 como 80-2 o 75+3 facilita el cálculo mental. Como es un número par, todos sus múltiplos también son pares. El 78 es divisible por 2, 3, 6, 13, 26, 39.",
      79: "Multiplicar por 79 requiere estrategias especiales debido a sus propiedades de número primo. La estrategia más fácil es pensar en 79 como 80-1: multiplica un número por 80 y réstale el número mismo. El 79 es un número primo y solo es divisible por 1 y 79. Aprender la tabla del 79 establece una base perfecta para cálculos cercanos a 80.",
      80: "Multiplicar por 80 usa la relación 8×10 y es muy útil. Para multiplicar un número por 80, puedes multiplicarlo por 8 y agregar un cero al final. Hay relaciones de factores alternativos como 80=2×40=4×20=5×16. El 80 se asocia con el límite superior de la esperanza de vida promedio (entre 70-80 en la mayoría de los países). Esta tabla refuerza la tabla del 8.",
      81: "81 ile çarpmak, 9'un karesidir (81=9×9=9²). Bu özel ilişki, 9 tablosunu mükemmel bilmeyi gerektirir. 81=3⁴ (3'ün dördúncü kuvveti) olması da ilginçtir. 81'i 80+1 olarak düşünmek zihinsel hesaplamayı kolaylaştırır. 81, kare sayı olduğu için geometri ve alan hesaplamalarında önemlidir.",
      82: "82 ile çarpmak, 2×41 ilişkisini kullanır. 41 tablosunu biliyorsanız, her sonucu ikiye katlayarak 82 tablosunu bulabilirsiniz. 82'yi 80+2 veya 85-3 olarak düşünmek hesaplamayı kolaylaştırır. Çift sayı olduğu için tüm katları da çifttir. 82, hem 2'ye hem 41'e bölünebilir.",
      83: "83 ile çarpmak, asal sayı özellikleri nedeniyle zihinsel matematik stratejilerini geliştirir. 83'ü 80+3 veya 85-2 olarak düşünmek en pratik yöntemlerdir. 83 asal bir sayıdır ve sadece 1 ve 83 ile bölünebilir. 83 tablosunu öğrenmek, büyük asal sayılarla çalışma yeteneğini artırır.",
      84: "84 ile çarpmak, en çok yönlü tablolardan biridir. 84=7×12=6×14=4×21=3×28=2×42 olduğundan, birçok farklı yoldan hesaplanabilir. 84, bir haftadaki saat sayısının 12 katıdır veya 12 saatlik günün 7 katıdır. Çok sayıda böleni olması, kesir hesaplamalarında kullanışlıdır.",
      85: "85 ile çarpmak, 5×17 ilişkisini kullanır. Her iki tablo da bilinen tablolarsa, 85 ile çarpma kolaydır. 85=80+5 veya 90-5 stratejisi de çok pratiktir. 5'in deseni (5 veya 0 ile biter) hesaplamayı kolaylaştırır. 85, hem 5'e hem 17'ye bölünebilir.",
      86: "86 ile çarpmak, 2×43 ilişkisini kullanır. 43 tablosunu biliyorsanız, her sonucu ikiye katlayarak 86 tablosunu bulabilirsiniz. 86'yı 90-4 veya 85+1 olarak düşünmek hesaplamayı kolaylaştırır. Çift sayı olduğu için tüm katları da çifttir. 86, hem 2'ye hem 43'e bölünebilir.",
      87: "87 ile çarpmak, 3×29 ilişkisini kullanır. 29 tablosunu üçe katlamak veya 3 tablosunu 29 ile çarpmak işe yarar. 87'yi 90-3 veya 85+2 olarak düşünmek hesaplamayı kolaylaştırır. 87=3×29 olduğundan, hem 3'e hem 29'a bölünebilir.",
      88: "88 ile çarpmak, 8×11 ilişkisini veya 4×22 ilişkisini kullanır. 88, repdigit sayıdır (8'lerin tekrarı). 88=2×44 olarak da ifade edilebilir. 88'i 90-2 veya 80+8 olarak düşünmek zihinsel hesaplamayı kolaylaştırır. Çift sayı olduğu için tüm katları da çifttir.",
      89: "89 ile çarpmak, asal sayı özellikleri nedeniyle özel stratejiler gerektirir. 89'u 90-1 olarak düşünmek en kolay stratejidir: bir sayıyı 90 ile çarpıp kendisini çıkarın. 89 asal bir sayıdır ve sadece 1 ve 89 ile bölünebilir. 89 tablosunu öğrenmek, 90'a yakın hesaplamalar için mükemmel bir temel oluşturur.",
      90: "90 ile çarpmak, 9×10 ilişkisini kullanır ve çok kullanışlıdır. Bir sayıyı 90 ile çarpmak için, onu 9 ile çarpıp sonuna sıfır ekleyebilirsiniz. 90=2×45=3×30=5×18=6×15 gibi çok sayıda çarpan ilişkisi vardır. 90 derece dik açıdır, geometride çok önemlidir. Bu tablo, 9 tablosunu pekiştirir.",
      91: "91 ile çarpmak, 7×13 ilişkisini kullanır. Her iki tablo da bilinen tablolarsa, 91 ile çarpma kolaydır. 91=7×13 olması, asal sayıların çarpımını anlamak için önemlidir. 91'i 90+1 olarak düşünmek zihinsel hesaplamayı kolaylaştırır. Hem 7'ye hem 13'e bölünebilir.",
      92: "92 ile çarpmak, 4×23 ilişkisini veya 2×46 ilişkisini kullanır. 23 tablosunu dörde katlamak işe yarar. 92'yi 90+2 veya 100-8 olarak düşünmek hesaplamayı kolaylaştırır. Çift sayı olduğu için tüm katları da çifttir. 92, hem 4'e hem 23'e bölünebilir.",
      93: "93 ile çarpmak, 3×31 ilişkisini kullanır. 31 tablosunu üçe katlamak veya 3 tablosunu 31 ile çarpmak işe yarar. 93'ü 90+3 veya 100-7 olarak düşünmek hesaplamayı kolaylaştırır. 93=3×31 olduğundan, hem 3'e hem 31'e bölünebilir.",
      94: "94 ile çarpmak, 2×47 ilişkisini kullanır. 47 tablosunu biliyorsanız, her sonucu ikiye katlayarak 94 tablosunu bulabilirsiniz. 94'ü 100-6 veya 90+4 olarak düşünmek hesaplamayı kolaylaştırır. Çift sayı olduğu için tüm katları da çifttir. 94, hem 2'ye hem 47'ye bölünebilir.",
      95: "95 ile çarpmak, 5×19 ilişkisini kullanır. Her iki tablo da bilinen tablolarsa, 95 ile çarpma kolaydır. 95=100-5 stratejisi çok pratiktir. 5'in deseni (5 veya 0 ile biter) hesaplamayı kolaylaştırır. 95, hem 5'e hem 19'a bölünebilir. Yüzde hesaplamalarında (95%) kullanışlıdır.",
      96: "96 ile çarpmak, en çok yönlü tablolardan biridir. 96=8×12=6×16=4×24=3×32=2×48 olduğundan, birçok farklı yoldan hesaplanabilir. 96=2⁵×3 olması, 2'nin kuvvetleri açısından önemlidir. Çok sayıda böleni olması, kesir hesaplamalarında kullanışlıdır.",
      97: "97 ile çarpmak, asal sayı özellikleri nedeniyle özel stratejiler gerektirir. 97'yi 100-3 olarak düşünmek en kolay stratejidir: bir sayıyı 100 ile çarpıp 3 katını çıkarın. 97 asal bir sayıdır ve sadece 1 ve 97 ile bölünebilir. 100'e en yakın asal sayı olması, zihinsel hesaplamayı çok kolaylaştırır.",
      98: "98 ile çarpmak, 2×49 ilişkisini kullanır. 49 tablosunu biliyorsanız, her sonucu ikiye katlayarak 98 tablosunu bulabilirsiniz. 98=2×7² ilişkisi ilginçtir. 98'i 100-2 olarak düşünmek en kolay stratejidir. Çift sayı olduğu için tüm katları da çifttir.",
      99: "99 ile çarpmak, 9×11 ilişkisini kullanır. 99, repdigit sayıdır (9'ların tekrarı). 99'u 100-1 olarak düşünmek en kolay stratejidir: bir sayıyı 100 ile çarpıp kendisini çıkarın. 99=9×11 olduğundan, hem 9'a hem 11'e bölünebilir. Zihinsel hesaplama için en kolay tablolardan biridir.",
      100: "100 ile çarpmak, en kolay tablodur! Bir sayıyı 100 ile çarpmak için, sonuna iki sıfır ekleyin. 100=10×10=10² olması, onluk sistemi anlamak için temeldir. 100, yüzde hesaplamalarının (100%=tam) ve ondalık sistemin temelidir. Para birimleri (100 kuruş=1 lira), ölçü birimleri ve günlük matematik için kritik önem taşır.",
    }
    return meanings[number] || `${number} ile çarpmak, ${number} sayısını tekrar tekrar ekleme demektir. Her çarptığınızda, ${number}'lik grupları sayıyorsunuz.`
  }

  const getWhyImportant = () => {
    const importance: { [key: number]: string } = {
      1: "La tabla del 1 es la base de todas las operaciones de multiplicación. Enseña a los estudiantes que los números tienen una identidad: al multiplicarse por 1, permanecen como ellos mismos. Este concepto es crucial para comprender propiedades algebraicas posteriores. Aunque parezca simple, aprender esta tabla genera confianza y establece el patrón de que la multiplicación es ordenada y predecible.",
      2: "La tabla del 2 es generalmente la primera tabla de multiplicación real que aprenden los estudiantes, y por una buena razón. Duplicar es un concepto natural que los niños encuentran diariamente. Aprender esta tabla hace el cálculo mental mucho más rápido y prepara a los estudiantes para números pares, fracciones (mitades) y división básica. Muchos estudiantes la encuentran la tabla más fácil, lo que genera confianza para tablas más difíciles.",
      3: "La tabla del 3 cierra la brecha entre las tablas fáciles y desafiantes. Requiere que los estudiantes vayan más allá de la simple duplicación y comiencen a reconocer nuevos patrones. Esta tabla se ve constantemente en contextos del mundo real como contar de tres en tres, entender formas triangulares y trabajar con tiempo (tres periodos por día). Los estudiantes que aprenden la tabla del 3 demuestran que pueden hacer conteo abstracto.",
      4: "Aprender la tabla del 4 refuerza la comprensión de números pares y pensamiento geométrico de los estudiantes. Como 4 es el doble de 2, los estudiantes pueden usar la tabla del 2 como escalera, lo que enseña eficiencia matemática. Esta tabla es necesaria para entender cuadrados, cálculos de área y divisiones por cuartos. También se usa frecuentemente en situaciones cotidianas como contar patas de sillas o ruedas de autos.",
      5: "La tabla del 5 es una de las más prácticas y ricas en patrones. Los estudiantes la aman porque cada respuesta termina en 0 o 5, haciéndola extremadamente predecible. Esta tabla se conecta directamente con el dinero (contar de cinco en cinco), decir la hora (intervalos de 5 minutos) y sistemas de medición. Aprender la tabla del 5 da confianza a los estudiantes y muestra que las matemáticas tienen patrones hermosos y consistentes.",
      6: "Aprender la tabla del 6 permite a los estudiantes transicionar a multiplicaciones más complejas. Que 6 sea múltiplo tanto de 2 como de 3 muestra a los estudiantes la propiedad distributiva de la multiplicación. Esta tabla se ve constantemente en la vida diaria: contar cartones de huevos, juegos de dados, paquetes de seis. Aprender la tabla del 6 da a los estudiantes confianza para trabajar con números más grandes.",
      7: "La tabla del 7 realmente pone a prueba las habilidades de memorización y reconocimiento de patrones de los estudiantes. Como 7 es un número primo, no se puede derivar fácilmente de otras tablas, haciéndola una experiencia de aprendizaje desafiante pero gratificante. Aprender la tabla del 7 da a los estudiantes la oportunidad de superar desafíos y desarrollar nuevas estrategias. Se usa en muchos lugares, desde contar los días de la semana hasta cálculos de calendario.",
      8: "Aprender la tabla del 8 ayuda a los estudiantes a reforzar estrategias de duplicación. Como 8 = 2 × 2 × 2, los estudiantes pueden aprender la tabla del 8 usando las tablas del 2 y 4. Esta tabla es importante en cálculos de área (figuras de 8 lados), teoría musical (octavas) y ciencias de la computación (8 bits = 1 byte). Aprender la tabla del 8 desarrolla habilidades de pensamiento matemático.",
      9: "La tabla del 9 tiene uno de los patrones matemáticos más fascinantes. La regla de suma de dígitos y el truco de los dedos muestran a los estudiantes el lado mágico de las matemáticas. Aprender la tabla del 9 no es solo memorización, enseña reconocimiento de patrones y comprensión de relaciones matemáticas. Esta tabla es perfecta para desarrollar habilidades de cálculo mental y construir confianza matemática.",
      10: "La tabla del 10 es fundamental para enseñar el concepto de valor posicional. Cuando los estudiantes aprenden a multiplicar por 10, comienzan a entender cómo funciona nuestro sistema decimal. Esta tabla es vital para cálculos de dinero, conversiones entre unidades de medida y trabajo con números grandes. Aprender la tabla del 10 crea una base sólida para entender todas las demás tablas de multiplicación y mejora enormemente las habilidades de matemática mental.",
      11: "La tabla del 11 es perfecta para desarrollar habilidades de reconocimiento de patrones. El patrón de repetición que surge al multiplicar con números de un dígito (11×4=44) muestra a los estudiantes la belleza de las matemáticas. Aprender la tabla del 11 desarrolla estrategias de cálculo mental y aumenta la capacidad de reconocer patrones numéricos. Esta tabla genera confianza para trabajar con números grandes.",
      12: "La tabla del 12 es una de las más utilizadas en la vida diaria. El 12 se usa en muchas áreas como contar docenas, leer el reloj y planificación anual. Que el 12 tenga muchos divisores (1,2,3,4,6,12) lo hace ideal para entender fracciones y proporciones. Aprender esta tabla mejora significativamente las habilidades matemáticas prácticas.",
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
      31: "31 çarpım tablosu, takvim bilgisi için kritiktir. Ayların çoğu 31 gün olduğu için, tarih ve zaman hesaplamalarında sürekli kullanılır. 31 asal sayı olduğundan, zihinsel hesaplama stratejilerini geliştirmek için mükemmeldir. 30+1 stratejisi, tamamlayıcı sayılar kullanmayı öğretir ve büyük sayı hesaplamalarında yetkinlik kazandırır.",
      32: "32 çarpım tablosu, üslü sayıları (2⁵) ve ikili sistemleri anlamak için önemlidir. Bilgisayar biliminde 32 bit mimarisi yaygın olduğu için, teknoloji çağında pratik önem taşır. İkiye katlama zincirlerini mükemmelleştirmek için harikadır. Sıcaklık dönüşümlerinde (Fahrenheit) kullanılır.",
      33: "33 çarpım tablosu, 3 ve 11 tablolarını birleştirerek matematiksel ilişkileri güçlendirir. Repdigit özelliği (33, 66, 99...) desen tanımayı kolaylaştırır. 33=3×11 ilişkisi, çarpanlar ve katlar arasındaki bağlantıları anlamayı derinleştirir. Bu tablo, çoklu çarpma stratejilerini öğretir.",
      34: "34 çarpım tablosu, 17 tablosunu pekiştirmeye yardımcı olur. 34=2×17 ilişkisi, asal sayılarla çift sayılar arasındaki bağlantıyı gösterir. Bu tablo, zihinsel esneklik ve alternatif hesaplama yöntemleri (35-1, 30+4) geliştirir. Çift sayı özelliklerini ve ikiye katlama becerilerini pekiştirir.",
      35: "35 çarpım tablosu, 5 ve 7 tablolarının birleşimi olarak çarpanlara ayırma becerisini geliştirir. 5×7 ilişkisi, her iki tabloyu da pekiştirir. Zaman hesaplamalarında (35 dakika) ve günlük matematikte kullanılır. Bu tablo, 5'in deseniyle (son basamak 5 veya 0) tanınabilir örüntüler oluşturur.",
      36: "36 çarpım tablosu, en kullanışlı tablolardan biridir. 36=6² olması, kare sayıları anlamak için kritiktir. Çok sayıda böleni olması (1,2,3,4,6,9,12,18,36), kesirler ve oranlar için ideal yapar. Düzine sisteminde (3 düzine) ve açı ölçümlerinde (360°'nin onda biri) sık kullanılır.",
      37: "37 çarpım tablosu, asal sayı özellikleri ve zihinsel matematik stratejilerini mükemmelleştirir. 37×3=111 gibi özel ilişkiler, sayı desenleri hakkında derin anlayış sağlar. 40-3 veya 35+2 stratejileri, yaratıcı problem çözme becerilerini geliştirir. Bu tablo, matematiksel merak ve keşif ruhunu teşvik eder.",
      38: "38 çarpım tablosu, 19 tablosunu pekiştirmeye yardımcı olur. 38=2×19 ilişkisi, ikiye katlama ve asal sayı stratejilerini birleştirir. 40-2 yaklaşımı, tamamlayıcı sayılar kullanmayı öğretir. Sağlık bağlamında (vücut ısısı) pratik öneme sahiptir.",
      39: "39 çarpım tablosu, 3 ve 13 tablolarını birleştirerek matematiksel bağlantıları güçlendirir. 40-1 stratejisi, 40 gibi yuvarlak sayıları kullanarak hızlı hesaplama yapmayı öğretir. Bu tablo, çoklu çarpanlara ayrıştırma (3×13) becerilerini geliştirir ve zihinsel esneklik kazandırır.",
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
    return importance[number] || `${number} çarpım tablosunu öğrenmek, öğrencilerin bu önemli sayıyla akıcılık geliştirmelerine yardımcı olur. Matematik ve günlük hayatta sıkça görülür, bu da güçlü hesaplama becerileri oluşturmak için gerekli kılar.`
  }

  const getPatterns = () => {
    const patterns: { [key: number]: { title: string; description: string }[] } = {
      1: [
        { title: "Özdeşlik Deseni", description: "1 ile çarpılan her sayı kendisine eşittir. Bu asla değişmez: 1×1=1, 1×2=2, 1×3=3, ve böyle devam eder." },
        { title: "Öngörülebilir Sıra", description: "Sonuçlar basitçe yukarı doğru sayar: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Sadece sırayla sayıları listeliyorsunuz." },
        { title: "Tüm Tabloların Temeli", description: "Her çarpım tablosu 1 ile çarpmakla başlar, bu yüzden bu desen her tabloda görülür." },
      ],
      2: [
        { title: "Sadece Çift Sayılar", description: "2'nin tüm katları çift sayılardır. Sonuçlar her zaman 0, 2, 4, 6 veya 8 ile biter." },
        { title: "İkişerli Atlayarak Sayma", description: "Her cevap bir öncekinden 2 fazladır: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20." },
        { title: "İkiye Katlama Deseni", description: "Her sonuç çarpanın tam iki katıdır: 2×5=10, 5'in iki katıdır." },
      ],
      3: [
        { title: "Basamak Toplama Deseni", description: "Her sonucun basamaklarını toplayın: 3 (3), 6 (6), 9 (9), 12 (1+2=3), 15 (1+5=6), 18 (1+8=9). 3-6-9 deseni tekrar eder!" },
        { title: "Üçerli Atlayarak Sayma", description: "Her cevap 3 artar: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30." },
        { title: "Tek-Çift Değişimi", description: "Sonuçlar değişir: tek (3), çift (6), tek (9), çift (12), öngörülebilir bir ritim oluşturur." },
      ],
      4: [
        { title: "Hep Çift Sayılar", description: "2 çarpım tablosu gibi, 4'ün tüm katları çifttir, 0, 2, 4, 6 veya 8 ile biter." },
        { title: "2'ler Tablosunun İki Katı", description: "Her cevap 2 çarpım tablosundaki karşılık gelen cevabın tam iki katıdır: 4×3=12, 2×3=6'nın iki katıdır." },
        { title: "Dörderli Atlayarak Sayma", description: "Her cevap 4 artar: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40." },
      ],
      5: [
        { title: "0 veya 5 ile Biter", description: "5'in her katı 0 veya 5 ile biter. Bu, deseni anında tanınabilir yapar." },
        { title: "Değişen Desen", description: "Sonuçlar 5 (tek) ve 0 (çift) ile bitme arasında değişir: 5, 10, 15, 20, 25, 30..." },
        { title: "10'lar Tablosunun Yarısı", description: "Her sonuç 10 çarpım tablosunun tam yarısıdır: 5×4=20, 10×4=40'ın yarısıdır." },
      ],
      6: [
        { title: "Hep Çift Sayılar", description: "6'nın tüm katları çifttir. Sonuçlar 6, 12, 18, 24, 30... şeklinde ilerler ve hepsi 2'ye bölünebilir." },
        { title: "3 Tablosunun İki Katı", description: "Her cevap 3 çarpım tablosunun tam iki katıdır: 6×4=24, 3×4=12'nin iki katıdır." },
        { title: "Birler Basamağı Deseni", description: "Birler basamağı şu deseni takip eder: 6, 2, 8, 4, 0 ve tekrarlanır. Bu desen 6 çarpım tablosunu tanımlamanıza yardımcı olur." },
      ],
      7: [
        { title: "Basamaklar Toplamı Deseni", description: "7'nin katlarının basamaklarını topladığınızda ilginç bir desen ortaya çıkar: 7, 14(1+4=5), 21(2+1=3), 28(2+8=10)..." },
        { title: "Birler Basamağı Tekrarı", description: "Birler basamağı şu sırayı takip eder: 7, 4, 1, 8, 5, 2, 9, 6, 3, 0 ve tekrarlanır." },
        { title: "Asal Sayı Özelliği", description: "7 asal bir sayıdır, bu yüzden diğer tablolarla basit ilişkileri yoktur. Ancak 7×8=56 gibi özel çiftleri ezberlemek yardımcı olur." },
      ],
      8: [
        { title: "Hep Çift ve 4'e Bölünebilir", description: "8'in tüm katları hem çift hem de 4'e bölünebilir: 8, 16, 24, 32, 40, 48..." },
        { title: "4 Tablosunun İki Katı", description: "Her cevap 4 çarpım tablosunun tam iki katıdır: 8×5=40, 4×5=20'nin iki katıdır." },
        { title: "Birler Basamağı Deseni", description: "Birler basamağı şu deseni takip eder: 8, 6, 4, 2, 0 ve tekrarlanır. Hep çift sayılarla azalan bir desen." },
      ],
      9: [
        { title: "Basamaklar Toplamı Her Zaman 9", description: "9'un katlarının basamaklarını toplayın: 18(1+8=9), 27(2+7=9), 36(3+6=9), 45(4+5=9). Bu sihirli desen hep geçerlidir!" },
        { title: "Onlar Basamağı Deseni", description: "9×n yaparsanız, onlar basamağı n-1'dir: 9×3=27 (onlar:2), 9×6=54 (onlar:5), 9×9=81 (onlar:8)." },
        { title: "10'dan 1 Eksik", description: "9×n = (10×n) - n formülü çok kullanışlıdır: 9×6 = 60-6 = 54, 9×8 = 80-8 = 72." },
      ],
      10: [
        { title: "Sonuna Sıfır Ekle", description: "Herhangi bir sayıyı 10 ile çarptığınızda, sadece sonuna bir sıfır eklersiniz: 7×10=70, 23×10=230." },
        { title: "Hep 0 ile Biter", description: "10'un tüm katları 0 ile biter: 10, 20, 30, 40, 50... Bu desen asla değişmez." },
        { title: "Yer Değeri Sistemi", description: "10 ile çarpmak, her basamağı bir sola kaydırır. Bu, ondalık sistemimizin temelidir: 25×10=250." },
      ],
      11: [
        { title: "Çift Basamak Deseni", description: "Tek basamaklı sayılarla çarpıldığında sonuç çift basamaktır: 11×2=22, 11×3=33, 11×7=77, 11×9=99." },
        { title: "Basamak Toplama Hilesi", description: "İki basamaklı bir sayıyı 11 ile çarpın: basamakları toplayıp ortaya koyun. 23×11: 2_(2+3)_3 = 253." },
        { title: "Onarlı Artış", description: "11'in katları: 11, 22, 33, 44, 55, 66, 77, 88, 99, 110. İlk 9 tanesi çift basamak deseni gösterir." },
      ],
      12: [
        { title: "Düzine Deseni", description: "12'nin katları: 12, 24, 36, 48, 60, 72, 84, 96, 108, 120. Her biri bir düzine artış gösterir." },
        { title: "Hem 3 Hem 4 Katları", description: "12=3×4 olduğundan, tüm sonuçlar hem 3'e hem 4'e bölünebilir. 12×5=60: 60÷3=20, 60÷4=15." },
        { title: "Çift Sayı Deseni", description: "12'nin tüm katları çifttir ve 4'e bölünebilir: 12, 24, 36, 48..." },
      ],
      13: [
        { title: "10+3 Ayrıştırma", description: "13×n = (10×n) + (3×n). Örnek: 13×4 = 40 + 12 = 52. Bu strateji hesaplamayı kolaylaştırır." },
        { title: "Birler Basamağı Döngüsü", description: "Birler basamağı: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0 ve tekrarlanır. Tam 10 adımda bir döngü tamamlanır." },
        { title: "Asal Sayı Davranışı", description: "13 asal olduğundan, sadece 1 ve 13 ile bölünebilir. Bu, özel ezber stratejileri gerektirir." },
      ],
      14: [
        { title: "7'nin İki Katı", description: "14=2×7 olduğundan, 7 tablosunu biliyorsanız her sonucu ikiye katlayın: 7×6=42, yani 14×6=84." },
        { title: "Hep Çift Sayılar", description: "14'ün tüm katları çifttir: 14, 28, 42, 56, 70, 84, 98, 112, 126, 140." },
        { title: "İki Hafta Deseni", description: "14 gün = 2 hafta. 14'ün katları haftalık planlamada kullanılır: 28 gün = 4 hafta." },
      ],
      15: [
        { title: "0 veya 5 ile Biter", description: "15'in tüm katları 0 veya 5 ile biter: 15, 30, 45, 60, 75, 90, 105, 120, 135, 150." },
        { title: "3×5 İlişkisi", description: "15=3×5 olduğundan, hem 3 hem 5 tablolarıyla ilişkilidir. 15×4=60: 3×4=12, 5×4=20, 12+20=32 değil ama 3×20=60 veya 5×12=60." },
        { title: "Çeyrek Saat Katları", description: "15 dakika = çeyrek saat. 30 dakika = yarım saat, 45 dakika = üç çeyrek, 60 dakika = 1 saat." },
      ],
      16: [
        { title: "2'nin Kuvveti", description: "16=2⁴ (2×2×2×2). İkiye katlama zinciri: 2→4→8→16. Her katı da bu deseni korur." },
        { title: "8'in İki Katı", description: "16=2×8 olduğundan, 8 tablosunu biliyorsanız her sonucu ikiye katlayın: 8×3=24, yani 16×3=48." },
        { title: "Hep Çift ve 8'e Bölünebilir", description: "16'nın tüm katları hem çift hem de 4'e, 8'e bölünebilir: 16, 32, 48, 64, 80..." },
      ],
      17: [
        { title: "20-3 Stratejisi", description: "17=20-3 olarak düşünün. 17×6 = (20×6) - (3×6) = 120 - 18 = 102." },
        { title: "10+7 Ayrıştırma", description: "17×n = (10×n) + (7×n). Örnek: 17×4 = 40 + 28 = 68." },
        { title: "Asal Sayı Benzersizliği", description: "17 asal sayıdır, bu yüzden sadece kendine özgü desenler vardır. Birler basamağı: 7, 4, 1, 8, 5, 2, 9, 6, 3, 0." },
      ],
      18: [
        { title: "9'un İki Katı", description: "18=2×9 olduğundan, 9 tablosunu ikiye katlayın: 9×5=45, yani 18×5=90." },
        { title: "6'nın Üç Katı", description: "18=3×6 olduğundan, 6 tablosunu üçe katlayın: 6×4=24, yani 18×4=72." },
        { title: "Hep Çift ve 9'a Bölünebilir", description: "18'in katları hem çift hem de 9'a bölünebilir. Basamaklar toplamı 9'un katıdır: 18(1+8=9), 36(3+6=9), 54(5+4=9)." },
      ],
      19: [
        { title: "20-1 Stratejisi", description: "19=20-1 olarak düşünün. 19×6 = (20×6) - 6 = 120 - 6 = 114. Çok pratik bir yöntem!" },
        { title: "10+9 Ayrıştırma", description: "19×n = (10×n) + (9×n). Örnek: 19×3 = 30 + 27 = 57." },
        { title: "Asal Sayı Deseni", description: "19 asal olduğundan özel desenler vardır. Birler basamağı: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 (azalan sıra)." },
      ],
      20: [
        { title: "Sonuna Sıfır Ekle ve İkiye Katla", description: "20=10×2. Bir sayıyı 20 ile çarpmak: sonuna 0 ekleyip ikiye katlayın. 7×20: 70×2=140 YANLIŞ! Doğrusu: 7×10=70, 70×2=140." },
        { title: "Hep 0 ile Biter", description: "20'nin tüm katları 0 ile biter: 20, 40, 60, 80, 100, 120, 140, 160, 180, 200." },
        { title: "Çift Onluklar", description: "20, 40, 60, 80, 100... Her biri 20 artış gösterir. 10'ların çift katlarıdır." },
      ],
      21: [
        { title: "3×7 İlişkisi", description: "21=3×7. Hem 3 hem 7 tablosunu kullanabilirsiniz: 21×4 = 3×4×7 = 12×7 = 84." },
        { title: "20+1 Stratejisi", description: "21×n = (20×n) + n. Örnek: 21×6 = 120 + 6 = 126. Çok pratik!" },
        { title: "Birler Basamağı Döngüsü", description: "Birler basamağı: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ve tekrarlanır. Basit artış deseni." },
      ],
      22: [
        { title: "11'in İki Katı", description: "22=2×11. 11 tablosunu biliyorsanız ikiye katlayın: 11×3=33, yani 22×3=66." },
        { title: "Hep Çift Sayılar", description: "22'nin tüm katları çifttir: 22, 44, 66, 88, 110, 132, 154, 176, 198, 220." },
        { title: "Çift Basamak Benzeri Desen", description: "22×1=22, 22×2=44, 22×3=66, 22×4=88. İlk 4'ünde çift basamak deseni görülür." },
      ],
      23: [
        { title: "20+3 Ayrıştırma", description: "23×n = (20×n) + (3×n). Örnek: 23×5 = 100 + 15 = 115." },
        { title: "25-2 Stratejisi", description: "23=25-2. Örnek: 23×4 = 100 - 8 = 92. 25 ile çarpmak daha kolay olduğunda kullanışlı." },
        { title: "Asal Sayı Deseni", description: "23 asal olduğundan özel desen vardır. Birler basamağı: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0." },
      ],
      24: [
        { title: "Çoklu Çarpan İlişkileri", description: "24=2×12=3×8=4×6. Birçok yoldan hesaplanabilir. 24×5 = 12×10 = 120." },
        { title: "Hep Çift ve 4'e Bölünebilir", description: "24'ün tüm katları hem çift hem de 3'e, 4'e, 6'ya, 8'e bölünebilir." },
        { title: "Saat İlişkisi", description: "24 saat = 1 gün. 48 saat = 2 gün, 72 saat = 3 gün. Zaman hesaplamalarında kullanışlı." },
      ],
      25: [
        { title: "25, 50, 75, 00 Deseni", description: "25'in tüm katları 25, 50, 75 veya 00 ile biter. Çok düzenli ve tahmin edilebilir." },
        { title: "Çeyrek İlişkisi", description: "25 = 100÷4. Yani 25×4=100. Bu ilişki yüzde ve kesir hesaplamalarında çok kullanışlı." },
        { title: "5'in Karesi", description: "25=5². Bu özel ilişki: 25×n = 5×5×n. Örnek: 25×8 = 5×40 = 200." },
      ],
      26: [
        { title: "13'ün İki Katı", description: "26=2×13. 13 tablosunu biliyorsanız ikiye katlayın: 13×7=91, yani 26×7=182." },
        { title: "Hep Çift Sayılar", description: "26'nın tüm katları çifttir: 26, 52, 78, 104, 130, 156, 182, 208, 234, 260." },
        { title: "25+1 veya 30-4", description: "26×n = (25×n) + n veya (30×n) - (4×n). Örnek: 26×4 = 100+4 = 104." },
      ],
      27: [
        { title: "3'ün Kuvveti", description: "27=3³ (3×3×3). Küp sayı ilişkisi: 27, 54, 81, 108... (3'ün katları)." },
        { title: "9'un Üç Katı", description: "27=3×9. 9 tablosunu üçe katlayın: 9×4=36, yani 27×4=108." },
        { title: "30-3 Stratejisi", description: "27=30-3. Örnek: 27×6 = 180-18 = 162. Kolay hesaplama yöntemi." },
      ],
      28: [
        { title: "4×7 veya 2×14", description: "28=4×7=2×14. Birden fazla yolla hesaplanabilir: 28×3 = 4×3×7 = 12×7 = 84." },
        { title: "Hep Çift ve 4'e Bölünebilir", description: "28'in tüm katları hem çift hem de 4'e, 7'ye bölünebilir: 28, 56, 84, 112, 140..." },
        { title: "Hafta İlişkisi", description: "28 gün = 4 hafta. Bu ilişki takvim hesaplamalarında kullanışlıdır." },
      ],
      29: [
        { title: "30-1 Stratejisi", description: "29=30-1. 29×n = (30×n) - n. Örnek: 29×7 = 210-7 = 203. En etkili yöntem!" },
        { title: "Birler Basamağı Deseni", description: "Birler basamağı: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 (azalan sıra). Tahmin edilebilir." },
        { title: "Asal Sayı Özelliği", description: "29 asal olduğundan basit çarpan ilişkileri yoktur. Zihinsel stratejiler gerektirir." },
      ],
      30: [
        { title: "3×10 İlişkisi", description: "30=3×10. Bir sayıyı 30 ile çarpmak: 10 ile çarp, sonra 3 ile çarp. 7×30 = 70×3 = 210." },
        { title: "Hep 0 ile Biter", description: "30'un tüm katları 0 ile biter: 30, 60, 90, 120, 150, 180, 210, 240, 270, 300." },
        { title: "Onlukların Üçlü Katları", description: "30, 60, 90, 120, 150... Her biri 30 artış. 10'ların 3 katıdır." },
      ],
      31: [
        { title: "30+1 Stratejisi", description: "31=30+1. 31×n = (30×n) + n. Örnek: 31×7 = 210 + 7 = 217." },
        { title: "Asal Sayı Deseni", description: "31 asal olduğundan özel desen vardır. Birler basamağı: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0." },
        { title: "Ay Günleri İlişkisi", description: "31 gün maksimum ay uzunluğu. 31, 62 (2 ay), 93 (3 ay), 124 (4 ay) gibi takvim hesaplamaları." },
      ],
      32: [
        { title: "2'nin Kuvveti", description: "32=2⁵. İkiye katlama zinciri: 2→4→8→16→32. Tüm katları bu deseni korur." },
        { title: "16'nın İki Katı", description: "32=2×16. 16 tablosunu biliyorsanız ikiye katlayın: 16×5=80, yani 32×5=160." },
        { title: "Hep Çift ve 8'e Bölünebilir", description: "32'nin tüm katları hem çift hem de 4'e, 8'e, 16'ya bölünebilir: 32, 64, 96, 128..." },
      ],
      33: [
        { title: "3×11 İlişkisi", description: "33=3×11. 11 tablosunu üçe katlayın: 11×4=44, yani 33×4=132. Veya 3 tablosunu 11 ile çarpın." },
        { title: "Repdigit Deseni", description: "33×1=33, 33×2=66, 33×3=99. İlk 3'ü çift basamak gösterir. Sonra 132, 165..." },
        { title: "Hep 3'e Bölünebilir", description: "33'ün tüm katları 3'e ve 11'e bölünebilir. Basamaklar toplamı 3'ün katıdır." },
      ],
      34: [
        { title: "17'nin İki Katı", description: "34=2×17. 17 tablosunu ikiye katlayın: 17×6=102, yani 34×6=204." },
        { title: "Hep Çift Sayılar", description: "34'ün tüm katları çifttir: 34, 68, 102, 136, 170, 204, 238, 272, 306, 340." },
        { title: "35-1 veya 30+4", description: "34×n = (35×n) - n veya (30×n) + (4×n). Örnek: 34×5 = 175-5 = 170." },
      ],
      35: [
        { title: "5×7 İlişkisi", description: "35=5×7. Hem 5 hem 7 tablolarını kullanabilirsiniz: 35×4 = 5×4×7 = 20×7 = 140." },
        { title: "5 veya 0 ile Biter", description: "35'in tüm katları 5 veya 0 ile biter: 35, 70, 105, 140, 175, 210, 245, 280..." },
        { title: "7'lerin Beşlisi", description: "35, 70, 105, 140, 175... 7'lerin katlarını 5 ile çarpın. Veya 5'lerin katlarını 7 ile." },
      ],
      36: [
        { title: "6'nın Karesi", description: "36=6². Ayrıca 36=4×9=3×12=2×18. Çoklu çarpan ilişkileri." },
        { title: "Çok Sayıda Bölen", description: "36'nın 9 böleni var: 1,2,3,4,6,9,12,18,36. Bu, kesirler için çok kullanışlı yapar." },
        { title: "9'a ve 4'e Bölünebilir", description: "36'nın tüm katları hem 4'e hem 9'a bölünebilir. Basamaklar toplamı 9'un katıdır." },
      ],
      37: [
        { title: "40-3 Stratejisi", description: "37=40-3. 37×n = (40×n) - (3×n). Örnek: 37×6 = 240 - 18 = 222." },
        { title: "Sihirli 111 İlişkisi", description: "37×3=111. Bu özel ilişki: 37×6=222, 37×9=333. Her 3'ün katında repdigit sonuç!" },
        { title: "Asal Sayı Benzersizliği", description: "37 asal olduğundan özel desenler vardır. 35+2 veya 40-3 stratejileri kullanışlıdır." },
      ],
      38: [
        { title: "19'un İki Katı", description: "38=2×19. 19 tablosunu ikiye katlayın: 19×7=133, yani 38×7=266." },
        { title: "40-2 Stratejisi", description: "38=40-2. 38×n = (40×n) - (2×n). Örnek: 38×5 = 200 - 10 = 190." },
        { title: "Hep Çift Sayılar", description: "38'in tüm katları çifttir: 38, 76, 114, 152, 190, 228, 266, 304, 342, 380." },
      ],
      39: [
        { title: "3×13 İlişkisi", description: "39=3×13. 13 tablosunu üçe katlayın: 13×4=52, yani 39×4=156." },
        { title: "40-1 Stratejisi", description: "39=40-1. 39×n = (40×n) - n. Örnek: 39×7 = 280 - 7 = 273. Çok pratik!" },
        { title: "3'e Bölünebilir", description: "39'un tüm katları 3'e ve 13'e bölünebilir. Basamaklar toplamı 3'ün katıdır." },
      ],
      40: [
        { title: "4×10 İlişkisi", description: "40=4×10. Bir sayıyı 40 ile çarpmak: 4 ile çarp, sonuna 0 ekle. 7×40: 7×4=28, sonuna 0: 280." },
        { title: "Hep 0 ile Biter", description: "40'ın tüm katları 0 ile biter: 40, 80, 120, 160, 200, 240, 280, 320, 360, 400." },
        { title: "10'ların Dört Katı", description: "40, 80, 120, 160, 200... Her biri 40 artış. 10'ların 4 katıdır." },
      ],
      41: [
        { title: "40+1 Stratejisi", description: "41=40+1. 41×n = (40×n) + n. Örnek: 41×6 = 240 + 6 = 246. En pratik yöntem!" },
        { title: "Asal Sayı Özellikleri", description: "41 asal olduğundan sadece 1 ve 41 ile bölünebilir. Birler basamağı: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0." },
        { title: "45-4 veya 50-9", description: "Alternatif stratejiler: 41×4 = 180-16 = 164. Veya 41×5 = 250-45 = 205." },
      ],
      42: [
        { title: "6×7 İlişkisi", description: "42=6×7. Hem 6 hem 7 tablolarını kullanabilirsiniz: 42×3 = 6×3×7 = 18×7 = 126." },
        { title: "2×21 veya 3×14", description: "42=2×21=3×14. Birden fazla yolla hesaplanabilir: 42×5 = 21×10 = 210." },
        { title: "Hep 6'ya Bölünebilir", description: "42'nin tüm katları hem 2'ye, 3'e, 6'ya, 7'ye bölünebilir: 42, 84, 126, 168, 210..." },
      ],
      43: [
        { title: "40+3 veya 45-2", description: "43=40+3 veya 45-2. Örnek: 43×7 = 280+21 = 301 veya 315-14 = 301." },
        { title: "Asal Sayı Deseni", description: "43 asal olduğundan özel stratejiler gerekir. Birler basamağı: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0." },
        { title: "50-7 Stratejisi", description: "Büyük sayılarla: 43×8 = 400-56 = 344. 50'den çıkarma alternatif yöntemdir." },
      ],
      44: [
        { title: "11'in Dört Katı", description: "44=4×11. 11 tablosunu dörde katlayın: 11×6=66, yani 44×6=264." },
        { title: "Repdigit Benzeri", description: "44×1=44, 44×2=88. İlk 2'si çift basamak gösterir. Sonra 132, 176, 220..." },
        { title: "Hep Çift ve 4'e Bölünebilir", description: "44'ün tüm katları hem çift hem de 4'e, 11'e bölünebilir: 44, 88, 132, 176, 220..." },
      ],
      45: [
        { title: "5×9 İlişkisi", description: "45=5×9. Hem 5 hem 9 tablolarını kullanabilirsiniz: 45×4 = 5×4×9 = 20×9 = 180." },
        { title: "5 veya 0 ile Biter", description: "45'in tüm katları 5 veya 0 ile biter: 45, 90, 135, 180, 225, 270, 315, 360..." },
        { title: "9'a Bölünebilir", description: "45'in tüm katları 9'a bölünebilir. Basamaklar toplamı 9'un katıdır: 135 (1+3+5=9)." },
      ],
      46: [
        { title: "23'ün İki Katı", description: "46=2×23. 23 tablosunu ikiye katlayın: 23×7=161, yani 46×7=322." },
        { title: "45+1 veya 50-4", description: "46×n = (45×n) + n veya (50×n) - (4×n). Örnek: 46×5 = 225+5 = 230." },
        { title: "Hep Çift Sayılar", description: "46'nın tüm katları çifttir: 46, 92, 138, 184, 230, 276, 322, 368, 414, 460." },
      ],
      47: [
        { title: "50-3 Stratejisi", description: "47=50-3. 47×n = (50×n) - (3×n). Örnek: 47×6 = 300 - 18 = 282. En etkili!" },
        { title: "45+2 Alternatifi", description: "47=45+2. Örnek: 47×8 = 360 + 16 = 376. 45 tablosunu biliyorsanız kullanışlı." },
        { title: "Asal Sayı Benzersizliği", description: "47 asal olduğundan özel desenler vardır. Birler basamağı: 7, 4, 1, 8, 5, 2, 9, 6, 3, 0." },
      ],
      48: [
        { title: "Çoklu Çarpan İlişkileri", description: "48=6×8=4×12=3×16=2×24. Birçok yoldan hesaplanabilir: 48×5 = 12×20 = 240." },
        { title: "Hep Çift ve Çoklu Bölenler", description: "48'in tüm katları hem 2'ye, 3'e, 4'e, 6'ya, 8'e, 12'ye bölünebilir." },
        { title: "50-2 Stratejisi", description: "48=50-2. Örnek: 48×7 = 350 - 14 = 336. Yuvarlak sayılardan çıkarma." },
      ],
      49: [
        { title: "7'nin Karesi", description: "49=7². 7 tablosunu kullanın: 49×3 = 7×7×3 = 7×21 = 147. Veya 7×3×7." },
        { title: "50-1 Stratejisi", description: "49=50-1. 49×n = (50×n) - n. Örnek: 49×6 = 300 - 6 = 294. Çok kolay!" },
        { title: "Kare Sayı Deseni", description: "49, 98, 147, 196, 245... 7'nin katlarının 7 katı. Ayrıca 7²×1, 7²×2, 7²×3..." },
      ],
      50: [
        { title: "5×10 İlişkisi", description: "50=5×10. Bir sayıyı 50 ile çarpmak: 5 ile çarp, sonuna 0 ekle. 8×50: 8×5=40, sonuna 0: 400." },
        { title: "Hep 0 veya 50 ile Biter", description: "50'nin tüm katları 0 veya 50 ile biter: 50, 100, 150, 200, 250, 300, 350, 400..." },
        { title: "100'ün Yarısı", description: "50×n = (100×n)÷2. Örnek: 50×7 = 700÷2 = 350. Yüzde hesaplamalarında kullanışlı." },
      ],
      51: [
        { title: "50+1 Stratejisi", description: "51=50+1. 51×n = (50×n) + n. Örnek: 51×7 = 350 + 7 = 357. Çok pratik!" },
        { title: "3×17 İlişkisi", description: "51=3×17. 17 tablosunu üçe katlayın: 17×6=102, yani 51×6=306." },
        { title: "55-4 Alternatifi", description: "51=55-4. Örnek: 51×5 = 275-20 = 255. 55 ile çarpmak daha kolay olduğunda kullanışlı." },
      ],
      52: [
        { title: "4×13 İlişkisi", description: "52=4×13. 13 tablosunu dörde katlayın: 13×7=91, yani 52×7=364." },
        { title: "50+2 veya 2×26", description: "52×n = (50×n) + (2×n) veya 26 tablosunu ikiye katlayın. Örnek: 52×5 = 250+10 = 260." },
        { title: "Hafta Sayısı Deseni", description: "52 hafta = 1 yıl. 52, 104 (2 yıl), 156 (3 yıl)... Takvim hesaplamalarında kullanışlı." },
      ],
      53: [
        { title: "50+3 veya 55-2", description: "53=50+3 veya 55-2. Örnek: 53×6 = 300+18 = 318 veya 330-12 = 318." },
        { title: "Asal Sayı Deseni", description: "53 asal olduğundan özel stratejiler gerekir. Birler basamağı: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0." },
        { title: "60-7 Stratejisi", description: "Büyük sayılarla: 53×8 = 480-56 = 424. 60'tan çıkarma alternatif yöntemdir." },
      ],
      54: [
        { title: "6×9 İlişkisi", description: "54=6×9. Hem 6 hem 9 tablolarını kullanabilirsiniz: 54×5 = 9×5×6 = 45×6 = 270." },
        { title: "2×27 veya 3×18", description: "54=2×27=3×18. Birden fazla yolla hesaplanabilir: 54×4 = 27×8 = 216." },
        { title: "9'a Bölünebilir", description: "54'ün tüm katları 9'a bölünebilir. Basamaklar toplamı 9'un katıdır: 108 (1+0+8=9)." },
      ],
      55: [
        { title: "5×11 İlişkisi", description: "55=5×11. Hem 5 hem 11 tablolarını kullanabilirsiniz: 55×4 = 11×4×5 = 44×5 = 220." },
        { title: "5 veya 0 ile Biter", description: "55'in tüm katları 5 veya 0 ile biter: 55, 110, 165, 220, 275, 330, 385, 440..." },
        { title: "Üçgensel Sayı", description: "55 = 1+2+3+4+5+6+7+8+9+10. Bu özel toplam özelliği 55'i matematiksel olarak ilginç kılar." },
      ],
      56: [
        { title: "7×8 İlişkisi", description: "56=7×8. En zor çarpım çiftlerinden biri! Hem 7 hem 8 tablolarını pekiştirir." },
        { title: "4×14 veya 2×28", description: "56=4×14=2×28. Birden fazla yoldan hesaplanabilir: 56×5 = 14×20 = 280." },
        { title: "Hep Çift ve 7'ye Bölünebilir", description: "56'nın tüm katları hem çift hem de 4'e, 7'ye, 8'e bölünebilir: 56, 112, 168, 224..." },
      ],
      57: [
        { title: "3×19 İlişkisi", description: "57=3×19. 19 tablosunu üçe katlayın: 19×7=133, yani 57×7=399." },
        { title: "60-3 Stratejisi", description: "57=60-3. 57×n = (60×n) - (3×n). Örnek: 57×6 = 360 - 18 = 342. Çok kolay!" },
        { title: "3'e Bölünebilir", description: "57'nin tüm katları 3'e ve 19'a bölünebilir. Basamaklar toplamı 3'ün katıdır." },
      ],
      58: [
        { title: "29'un İki Katı", description: "58=2×29. 29 tablosunu ikiye katlayın: 29×7=203, yani 58×7=406." },
        { title: "60-2 Stratejisi", description: "58=60-2. 58×n = (60×n) - (2×n). Örnek: 58×6 = 360 - 12 = 348." },
        { title: "Hep Çift Sayılar", description: "58'in tüm katları çifttir: 58, 116, 174, 232, 290, 348, 406, 464, 522, 580." },
      ],
      59: [
        { title: "60-1 Stratejisi", description: "59=60-1. 59×n = (60×n) - n. Örnek: 59×7 = 420 - 7 = 413. MÜKEMMELDİR!" },
        { title: "Asal Sayı Benzersizliği", description: "59 asal olduğundan özel desenler vardır. Birler basamağı: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0." },
        { title: "55+4 Alternatifi", description: "59=55+4. Örnek: 59×8 = 440 + 32 = 472. 55 tablosunu biliyorsanız kullanışlı." },
      ],
      60: [
        { title: "6×10 İlişkisi", description: "60=6×10. Bir sayıyı 60 ile çarpmak: 6 ile çarp, sonuna 0 ekle. 7×60: 7×6=42, sonuna 0: 420." },
        { title: "Hep 0 ile Biter", description: "60'ın tüm katları 0 ile biter: 60, 120, 180, 240, 300, 360, 420, 480, 540, 600." },
        { title: "Çoklu Çarpan İlişkileri", description: "60=2×30=3×20=4×15=5×12=6×10. Çok sayıda yolla hesaplanabilir!" },
      ],
      61: [
        { title: "60+1 Stratejisi", description: "61=60+1. 61×n = (60×n) + n. Örnek: 61×7 = 420 + 7 = 427. Çok pratik!" },
        { title: "Asal Sayı Özellikleri", description: "61 asal olduğundan sadece 1 ve 61 ile bölünebilir. Birler basamağı: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0." },
        { title: "65-4 Alternatifi", description: "61=65-4. Örnek: 61×5 = 325-20 = 305. 65 ile çarpmak daha kolay olduğunda kullanışlı." },
      ],
      62: [
        { title: "31'in İki Katı", description: "62=2×31. 31 tablosunu ikiye katlayın: 31×7=217, yani 62×7=434." },
        { title: "60+2 Stratejisi", description: "62=60+2. 62×n = (60×n) + (2×n). Örnek: 62×6 = 360 + 12 = 372." },
        { title: "Hep Çift Sayılar", description: "62'nin tüm katları çifttir: 62, 124, 186, 248, 310, 372, 434, 496, 558, 620." },
      ],
      63: [
        { title: "7×9 İlişkisi", description: "63=7×9. Hem 7 hem 9 tablolarını kullanabilirsiniz: 63×5 = 9×5×7 = 45×7 = 315." },
        { title: "3×21 Alternatifi", description: "63=3×21. 21 tablosunu üçe katlayın: 21×4=84, yani 63×4=252." },
        { title: "Hem 7'ye Hem 9'a Bölünebilir", description: "63'ün tüm katları hem 7'ye hem 9'a bölünebilir. Basamaklar toplamı 9'un katıdır." },
      ],
      64: [
        { title: "8'in Karesi", description: "64=8×8=8². Ayrıca 64=2⁶. İkiye katlama zinciri: 2→4→8→16→32→64." },
        { title: "2'nin Altıncı Kuvveti", description: "64=2⁶. Bilgisayar biliminde 64-bit mimarisi için önemli. İkili sistem temelini oluşturur." },
        { title: "Hep Çift ve 8'e Bölünebilir", description: "64'ün tüm katları hem çift hem de 4'e, 8'e, 16'ya, 32'ye bölünebilir: 64, 128, 192, 256..." },
      ],
      65: [
        { title: "5×13 İlişkisi", description: "65=5×13. Hem 5 hem 13 tablolarını kullanabilirsiniz: 65×4 = 13×4×5 = 52×5 = 260." },
        { title: "5 veya 0 ile Biter", description: "65'in tüm katları 5 veya 0 ile biter: 65, 130, 195, 260, 325, 390, 455, 520..." },
        { title: "60+5 veya 70-5", description: "65×n = (60×n) + (5×n) veya (70×n) - (5×n). Örnek: 65×6 = 360+30 = 390." },
      ],
      66: [
        { title: "6×11 İlişkisi", description: "66=6×11. Hem 6 hem 11 tablolarını kullanabilirsiniz: 66×5 = 11×5×6 = 55×6 = 330." },
        { title: "Repdigit Benzeri", description: "66×1=66, 66×2=132. 11'in 6 katı olarak, 11 tablosunun desenini takip eder." },
        { title: "2×33 Alternatifi", description: "66=2×33. 33 tablosunu ikiye katlayın: 33×7=231, yani 66×7=462." },
      ],
      67: [
        { title: "70-3 Stratejisi", description: "67=70-3. 67×n = (70×n) - (3×n). Örnek: 67×7 = 490 - 21 = 469. Çok kolay!" },
        { title: "Asal Sayı Deseni", description: "67 asal olduğundan özel stratejiler gerekir. Birler basamağı: 7, 4, 1, 8, 5, 2, 9, 6, 3, 0." },
        { title: "65+2 Alternatifi", description: "67=65+2. Örnek: 67×8 = 520 + 16 = 536. 65 tablosunu biliyorsanız kullanışlı." },
      ],
      68: [
        { title: "4×17 İlişkisi", description: "68=4×17. 17 tablosunu dörde katlayın: 17×7=119, yani 68×7=476." },
        { title: "2×34 veya 70-2", description: "68=2×34 veya 70-2. Örnek: 68×6 = 420 - 12 = 408." },
        { title: "Hep Çift ve 4'e Bölünebilir", description: "68'in tüm katları hem çift hem de 4'e, 17'ye bölünebilir: 68, 136, 204, 272, 340..." },
      ],
      69: [
        { title: "3×23 İlişkisi", description: "69=3×23. 23 tablosunu üçe katlayın: 23×7=161, yani 69×7=483." },
        { title: "70-1 Stratejisi", description: "69=70-1. 69×n = (70×n) - n. Örnek: 69×6 = 420 - 6 = 414. MÜKEMMELDİR!" },
        { title: "3'e Bölünebilir", description: "69'un tüm katları 3'e ve 23'e bölünebilir. Basamaklar toplamı 3'ün katıdır." },
      ],
      70: [
        { title: "7×10 İlişkisi", description: "70=7×10. Bir sayıyı 70 ile çarpmak: 7 ile çarp, sonuna 0 ekle. 8×70: 8×7=56, sonuna 0: 560." },
        { title: "Hep 0 ile Biter", description: "70'in tüm katları 0 ile biter: 70, 140, 210, 280, 350, 420, 490, 560, 630, 700." },
        { title: "Çoklu Çarpan İlişkileri", description: "70=2×35=5×14=7×10. Birçok yoldan hesaplanabilir!" },
      ],
      71: [
        { title: "70+1 Stratejisi", description: "71=70+1. 71×n = (70×n) + n. Örnek: 71×7 = 490 + 7 = 497. Çok pratik!" },
        { title: "Asal Sayı Özellikleri", description: "71 asal olduğundan sadece 1 ve 71 ile bölünebilir. Birler basamağı: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0." },
        { title: "75-4 Alternatifi", description: "71=75-4. Örnek: 71×5 = 375-20 = 355. 75 ile çarpmak daha kolay olduğunda kullanışlı." },
      ],
      72: [
        { title: "8×9 İlişkisi", description: "72=8×9. Hem 8 hem 9 tablolarını kullanabilirsiniz: 72×5 = 9×5×8 = 45×8 = 360." },
        { title: "6×12 veya 3×24", description: "72=6×12=3×24=4×18. Birden fazla yoldan hesaplanabilir: 72×4 = 12×24 = 288." },
        { title: "Çok Sayıda Bölen", description: "72'nin 12 böleni var: 1,2,3,4,6,8,9,12,18,24,36,72. Kesirler için çok kullanışlı!" },
      ],
      73: [
        { title: "70+3 veya 75-2", description: "73=70+3 veya 75-2. Örnek: 73×6 = 420+18 = 438 veya 450-12 = 438." },
        { title: "Asal Sayı Deseni", description: "73 asal olduğundan özel stratejiler gerekir. 21. asal sayıdır. Birler basamağı: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0." },
        { title: "80-7 Stratejisi", description: "Büyük sayılarla: 73×8 = 640-56 = 584. 80'den çıkarma alternatif yöntemdir." },
      ],
      74: [
        { title: "2×37 İlişkisi", description: "74=2×37. 37 tablosunu ikiye katlayın: 37×7=259, yani 74×7=518." },
        { title: "75-1 veya 70+4", description: "74×n = (75×n) - n veya (70×n) + (4×n). Örnek: 74×5 = 375-5 = 370." },
        { title: "Hep Çift Sayılar", description: "74'ün tüm katları çifttir: 74, 148, 222, 296, 370, 444, 518, 592, 666, 740." },
      ],
      75: [
        { title: "3×25 veya 5×15", description: "75=3×25=5×15. Örnek: 75×4 = 25×12 = 300 veya 15×20 = 300." },
        { title: "25, 50, 75, 00 Deseni", description: "75'in tüm katları 25, 50, 75 veya 00 ile biter. Çok düzenli ve tahmin edilebilir." },
        { title: "Yüzde İlişkisi", description: "75 = 100×¾. Yani 75% = 3/4. Bu ilişki yüzde hesaplamalarında çok kullanışlı." },
      ],
      76: [
        { title: "4×19 İlişkisi", description: "76=4×19. 19 tablosunu dörde katlayın: 19×7=133, yani 76×7=532." },
        { title: "2×38 veya 80-4", description: "76=2×38 veya 80-4. Örnek: 76×6 = 480 - 24 = 456." },
        { title: "Hep Çift ve 4'e Bölünebilir", description: "76'nın tüm katları hem çift hem de 4'e, 19'a bölünebilir: 76, 152, 228, 304, 380..." },
      ],
      77: [
        { title: "7×11 İlişkisi", description: "77=7×11. Hem 7 hem 11 tablolarını kullanabilirsiniz: 77×5 = 11×5×7 = 55×7 = 385." },
        { title: "Repdigit Benzeri Desen", description: "77×1=77, 77×2=154. 7 ve 11'in çarpımı olarak özel desen gösterir." },
        { title: "80-3 Stratejisi", description: "77=80-3. Örnek: 77×6 = 480 - 18 = 462. Yuvarlak sayılardan çıkarma." },
      ],
      78: [
        { title: "6×13 İlişkisi", description: "78=6×13=2×39=3×26. Birden fazla yoldan hesaplanabilir: 78×5 = 13×30 = 390." },
        { title: "80-2 Stratejisi", description: "78=80-2. 78×n = (80×n) - (2×n). Örnek: 78×7 = 560 - 14 = 546." },
        { title: "Hem 2'ye Hem 3'e Bölünebilir", description: "78'in tüm katları hem 2'ye hem 3'e bölünebilir. Basamaklar toplamı 3'ün katıdır." },
      ],
      79: [
        { title: "80-1 Stratejisi", description: "79=80-1. 79×n = (80×n) - n. Örnek: 79×7 = 560 - 7 = 553. MÜKEMMELDİR!" },
        { title: "Asal Sayı Benzersizliği", description: "79 asal olduğundan özel desenler vardır. Birler basamağı: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0." },
        { title: "75+4 Alternatifi", description: "79=75+4. Örnek: 79×8 = 600 + 32 = 632. 75 tablosunu biliyorsanız kullanışlı." },
      ],
      80: [
        { title: "8×10 İlişkisi", description: "80=8×10. Bir sayıyı 80 ile çarpmak: 8 ile çarp, sonuna 0 ekle. 7×80: 7×8=56, sonuna 0: 560." },
        { title: "Hep 0 ile Biter", description: "80'in tüm katları 0 ile biter: 80, 160, 240, 320, 400, 480, 560, 640, 720, 800." },
        { title: "Çoklu Çarpan İlişkileri", description: "80=2×40=4×20=5×16=8×10. Çok sayıda yolla hesaplanabilir!" },
      ],
      81: [
        { title: "9'un Karesi", description: "81=9×9=9². Ayrıca 81=3⁴. Kare ve üs ilişkileri için mükemmel örnek." },
        { title: "80+1 Stratejisi", description: "81=80+1. 81×n = (80×n) + n. Örnek: 81×7 = 560 + 7 = 567. Çok pratik!" },
        { title: "3'ün Dördüncü Kuvveti", description: "81=3⁴=3×3×3×3. Üslü sayıları anlamak için önemli. 9'a ve 27'ye bölünebilir." },
      ],
      82: [
        { title: "2×41 İlişkisi", description: "82=2×41. 41 tablosunu ikiye katlayın: 41×7=287, yani 82×7=574." },
        { title: "80+2 Stratejisi", description: "82=80+2. 82×n = (80×n) + (2×n). Örnek: 82×6 = 480 + 12 = 492." },
        { title: "Hep Çift Sayılar", description: "82'nin tüm katları çifttir: 82, 164, 246, 328, 410, 492, 574, 656, 738, 820." },
      ],
      83: [
        { title: "80+3 veya 85-2", description: "83=80+3 veya 85-2. Örnek: 83×6 = 480+18 = 498 veya 510-12 = 498." },
        { title: "Asal Sayı Deseni", description: "83 asal olduğundan özel stratejiler gerekir. Birler basamağı: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0." },
        { title: "90-7 Stratejisi", description: "Büyük sayılarla: 83×8 = 720-56 = 664. 90'dan çıkarma alternatif yöntemdir." },
      ],
      84: [
        { title: "7×12 İlişkisi", description: "84=7×12. Hem 7 hem 12 tablolarını kullanabilirsiniz: 84×5 = 12×5×7 = 60×7 = 420." },
        { title: "6×14 veya 4×21", description: "84=6×14=4×21=3×28. Birden fazla yoldan hesaplanabilir: 84×4 = 21×16 = 336." },
        { title: "Çok Sayıda Bölen", description: "84'ün 12 böleni var: 1,2,3,4,6,7,12,14,21,28,42,84. Kesirler için çok kullanışlı!" },
      ],
      85: [
        { title: "5×17 İlişkisi", description: "85=5×17. Hem 5 hem 17 tablolarını kullanabilirsiniz: 85×4 = 17×4×5 = 68×5 = 340." },
        { title: "5 veya 0 ile Biter", description: "85'in tüm katları 5 veya 0 ile biter: 85, 170, 255, 340, 425, 510, 595, 680..." },
        { title: "90-5 veya 80+5", description: "85×n = (90×n) - (5×n) veya (80×n) + (5×n). Örnek: 85×6 = 540-30 = 510." },
      ],
      86: [
        { title: "2×43 İlişkisi", description: "86=2×43. 43 tablosunu ikiye katlayın: 43×7=301, yani 86×7=602." },
        { title: "90-4 Stratejisi", description: "86=90-4. 86×n = (90×n) - (4×n). Örnek: 86×6 = 540 - 24 = 516." },
        { title: "Hep Çift Sayılar", description: "86'nın tüm katları çifttir: 86, 172, 258, 344, 430, 516, 602, 688, 774, 860." },
      ],
      87: [
        { title: "3×29 İlişkisi", description: "87=3×29. 29 tablosunu üçe katlayın: 29×7=203, yani 87×7=609." },
        { title: "90-3 Stratejisi", description: "87=90-3. 87×n = (90×n) - (3×n). Örnek: 87×7 = 630 - 21 = 609. Çok kolay!" },
        { title: "3'e Bölünebilir", description: "87'nin tüm katları 3'e ve 29'a bölünebilir. Basamaklar toplamı 3'ün katıdır." },
      ],
      88: [
        { title: "8×11 İlişkisi", description: "88=8×11. Hem 8 hem 11 tablolarını kullanabilirsiniz: 88×5 = 11×5×8 = 55×8 = 440." },
        { title: "Repdigit Sayı", description: "88×1=88, 88×2=176. Repdigit özelliği (8'lerin tekrarı) görsel tanımayı kolaylaştırır." },
        { title: "4×22 veya 2×44", description: "88=4×22=2×44. Birden fazla yoldan hesaplanabilir: 88×5 = 22×20 = 440." },
      ],
      89: [
        { title: "90-1 Stratejisi", description: "89=90-1. 89×n = (90×n) - n. Örnek: 89×7 = 630 - 7 = 623. MÜKEMMELDİR!" },
        { title: "Asal Sayı Benzersizliği", description: "89 asal olduğundan özel desenler vardır. Birler basamağı: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0." },
        { title: "85+4 Alternatifi", description: "89=85+4. Örnek: 89×8 = 680 + 32 = 712. 85 tablosunu biliyorsanız kullanışlı." },
      ],
      90: [
        { title: "9×10 İlişkisi", description: "90=9×10. Bir sayıyı 90 ile çarpmak: 9 ile çarp, sonuna 0 ekle. 7×90: 7×9=63, sonuna 0: 630." },
        { title: "Hep 0 ile Biter", description: "90'ın tüm katları 0 ile biter: 90, 180, 270, 360, 450, 540, 630, 720, 810, 900." },
        { title: "Çoklu Çarpan İlişkileri", description: "90=2×45=3×30=5×18=6×15=9×10. Çok sayıda yolla hesaplanabilir!" },
      ],
      91: [
        { title: "7×13 İlişkisi", description: "91=7×13. Hem 7 hem 13 tablolarını kullanabilirsiniz: 91×5 = 7×5×13 = 35×13 = 455." },
        { title: "90+1 Stratejisi", description: "91=90+1. 91×n = (90×n) + n. Örnek: 91×6 = 540 + 6 = 546. Pratik!" },
        { title: "Asal Sayıların Çarpımı", description: "91=7×13 (iki asalın çarpımı). Hem 7'ye hem 13'e bölünebilir." },
      ],
      92: [
        { title: "4×23 İlişkisi", description: "92=4×23. 23 tablosunu dörde katlayın: 23×7=161, yani 92×7=644." },
        { title: "90+2 veya 100-8", description: "92×n = (90×n)+(2×n) veya (100×n)-(8×n). Örnek: 92×5 = 450+10 = 460." },
        { title: "Hep Çift Sayılar", description: "92'nin tüm katları çifttir: 92, 184, 276, 368, 460, 552, 644, 736, 828, 920." },
      ],
      93: [
        { title: "3×31 İlişkisi", description: "93=3×31. 31 tablosunu üçe katlayın: 31×6=186, yani 93×6=558." },
        { title: "90+3 Stratejisi", description: "93=90+3. 93×n = (90×n) + (3×n). Örnek: 93×7 = 630 + 21 = 651." },
        { title: "3'e Bölünebilir", description: "93'nün tüm katları 3'e bölünebilir. Basamaklar toplamı 3'ün katıdır." },
      ],
      94: [
        { title: "2×47 İlişkisi", description: "94=2×47. 47 tablosunu ikiye katlayın: 47×7=329, yani 94×7=658." },
        { title: "100-6 Stratejisi", description: "94=100-6. 94×n = (100×n) - (6×n). Örnek: 94×5 = 500 - 30 = 470. MÜKEMMEL!" },
        { title: "Hep Çift Sayılar", description: "94'nün tüm katları çifttir: 94, 188, 282, 376, 470, 564, 658, 752, 846, 940." },
      ],
      95: [
        { title: "5×19 İlişkisi", description: "95=5×19. Hem 5 hem 19 tablolarını kullanabilirsiniz: 95×4 = 19×4×5 = 76×5 = 380." },
        { title: "5 veya 0 ile Biter", description: "95'in tüm katları 5 veya 0 ile biter: 95, 190, 285, 380, 475, 570, 665, 760, 855, 950." },
        { title: "100-5 Stratejisi", description: "95=100-5. 95×n = (100×n) - (5×n). Örnek: 95×6 = 600 - 30 = 570. Çok kolay!" },
      ],
      96: [
        { title: "8×12 İlişkisi", description: "96=8×12. Her iki tabloyu da kullanabilirsiniz: 96×5 = 12×5×8 = 60×8 = 480." },
        { title: "Çoklu Çarpan İlişkileri", description: "96=8×12=6×16=4×24=3×32=2×48. Birçok yoldan hesaplanabilir!" },
        { title: "2'nin Kuvveti × 3", description: "96=2⁵×3. 32×3 ilişkisi. Çok sayıda böleni var (12 bölen)." },
      ],
      97: [
        { title: "100-3 Stratejisi", description: "97=100-3. 97×n = (100×n) - (3×n). Örnek: 97×7 = 700 - 21 = 679. MÜKEMMEL!" },
        { title: "Asal Sayı Desenler", description: "97 asal olduğundan özel desenler vardır. Birler basamağı: 7, 4, 1, 8, 5, 2, 9, 6, 3, 0." },
        { title: "100'e En Yakın Asal", description: "100'den küçük en büyük asal sayı. Bu özellik hesaplamayı çok kolayлаştırır." },
      ],
      98: [
        { title: "2×49 İlişkisi", description: "98=2×49=2×7². 49 tablosunu ikiye katlayın: 49×7=343, yani 98×7=686." },
        { title: "100-2 Stratejisi", description: "98=100-2. 98×n = (100×n) - (2×n). Örnek: 98×6 = 600 - 12 = 588. SÜPER KOLAY!" },
        { title: "Hep Çift Sayılar", description: "98'in tüm katları çifttir: 98, 196, 294, 392, 490, 588, 686, 784, 882, 980." },
      ],
      99: [
        { title: "9×11 İlişkisi", description: "99=9×11. Her iki tabloyu da kullanabilirsiniz: 99×5 = 11×5×9 = 55×9 = 495." },
        { title: "100-1 Stratejisi", description: "99=100-1. 99×n = (100×n) - n. Örnek: 99×7 = 700 - 7 = 693. MÜKEMMELDİR!" },
        { title: "Repdigit Desen", description: "99 (9'ların tekrarı), 198, 297, 396, 495... Görsel tanıma kolaydır!" },
      ],
      100: [
        { title: "10×10 İlişkisi", description: "100=10×10=10². Bir sayıyı 100 ile çarpmak: sonuna iki sıfır ekle. 7×100: 700!" },
        { title: "Hep 00 ile Biter", description: "100'ün tüm katları 00 ile biter: 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000." },
        { title: "Onluk Sistemin Temeli", description: "100=10². Yüzlük sistemi, yüzde hesaplamalarını, ondalık sayıları anlamak için temeldir!" },
      ],
    }
    return patterns[number] || []
  }

  const getCommonMistakes = () => {
    const mistakes: { [key: number]: { mistake: string; solution: string }[] } = {
      1: [
        { mistake: "1×1=2 olduğunu düşünmek", solution: "Unutmayın: 1 ile çarpılan her şey kendisine eşittir. 1 grubun 1'i sadece 1'dir." },
        { mistake: "Toplama ile karıştırmak", solution: "1 ile çarpma toplamadan farklıdır. 5+1=6, ama 5×1=5." },
      ],
      2: [
        { mistake: "2×6=12 ile 2×7=14'ü karıştırmak", solution: "Atlayarak saymayı kullanın: 2, 4, 6, 8, 10, 12, 14. Atlamadan dikkatli sayın." },
        { mistake: "Büyük sayılarla kafası karışmak", solution: "Parçalara ayırın: 2×8 sadece 8+8'dir. İkiye katlamak basit toplamadır." },
      ],
      3: [
        { mistake: "3×6=18 ile 3×7=21'i karıştırmak", solution: "+3 desenini hatırlayın: 18'den sonra 21 gelir. Doğrulamak için üçerli sayın." },
        { mistake: "3×8=24 ile 3×9=27'yi karıştırmak", solution: "Basamak toplama hilesini kullanın: 24 (2+4=6) ve 27 (2+7=9), 3-6-9 desenini takip eder." },
      ],
      4: [
        { mistake: "4×7=24 olduğunu düşünmek (28 yerine)", solution: "Hatırlayın: 4×6=24, bu yüzden 4×7, 4 fazla olmalı, yani 28." },
        { mistake: "2 çarpım tablosu ile karıştırmak", solution: "4 çarpım tablosu her zaman 2 çarpım tablosunun iki katıdır. İki katına çıkararak kontrol edin." },
      ],
      5: [
        { mistake: "Sırayı karıştırmak (20'den önce 25)", solution: "Desen tutarlıdır: 5, 10, 15, 20, 25. Her biri 5 artar." },
        { mistake: "5×tek sayının her zaman 5 ile bittiğini düşünmek", solution: "Aslında 5×çift 0 ile, 5×tek 5 ile biter." },
      ],
      6: [
        { mistake: "6×7=42 ile 6×8=48'i karıştırmak", solution: "Bu zor bir çift! Hatırlayın: 6×7=42 ('yedi altı' kafiyesi), ardından 6 ekleyin: 48." },
        { mistake: "6×9=54 ile 6×8=48'i karıştırmak", solution: "6 tablosunu kullanın: 6×8=48, sonra +6=54. Veya 6×9'u 60-6=54 olarak hesaplayın." },
        { mistake: "3 çarpım tablosu ile karıştırmak", solution: "6 çarpım tablosu her zaman 3 çarpım tablosunun iki katıdır. 3×4=12, yani 6×4=24." },
      ],
      7: [
        { mistake: "7×8=56 ile 7×6=42'yi karıştırmak", solution: "Bu en zor ikili! Ezber ipucu: '5-6-7-8' (56=7×8). Veya 7×7=49'dan +7=56." },
        { mistake: "7×9=63 ile 7×8=56'yı karıştırmak", solution: "Desen: 7×8=56, sonra +7=63. Veya basamak toplama: 63 (6+3=9), 56 (5+6=11)." },
        { mistake: "7 tablosunu tamamen atlamak", solution: "7 zor görünse de, pratikle öğrenilebilir. Küçük adımlarla başlayın: 7×1, 7×2, 7×5, 7×10 kolayları ezberleyin." },
      ],
      8: [
        { mistake: "8×7=56 ile 8×8=64'ü karıştırmak", solution: "8×8=64'ü ezberlemenin kolay yolu: '8 sekiz 64' ya da '8²=64'." },
        { mistake: "8×9=72 ile 8×8=64'ü karıştırmak", solution: "8×8=64'den başlayın, sonra +8=72. Veya 80-8=72 (10×8 eksi 8)." },
        { mistake: "4 çarpım tablosu ile karıştırmak", solution: "8 her zaman 4'ün iki katıdır. 4×6=24, yani 8×6=48. İki katına çıkararak kontrol edin." },
      ],
      9: [
        { mistake: "9×8=72 ile 9×7=63'ü karıştırmak", solution: "Parmak hilesini kullanın veya basamak toplamı: 72 (7+2=9), 63 (6+3=9). 72>63'ü hatırlayın." },
        { mistake: "Parmak hilesini yanlış uygulamak", solution: "Doğru sıra: Sol parmaklar 1-5, sağ parmaklar 6-10. Katladığınız parmağın solundakiler onlar, sağındakiler birler." },
        { mistake: "9×9=81 ile 9×8=72'yi karıştırmak", solution: "9×9=81 özeldir: '9 dokuz 81' veya '9²=81'. Basamak toplamı: 81 (8+1=9), 72 (7+2=9)." },
      ],
      10: [
        { mistake: "Sıfırı unutmak", solution: "En kolay hatırlatma: 10 ile çarptığınızda SADECE sonuna bir sıfır ekleyin. 6×10=60, 25×10=250." },
        { mistake: "Çok fazla sıfır eklemek", solution: "10 ile çarpma SADECE bir sıfır ekler. 100 (iki sıfır), 1000 (üç sıfır) değil, sadece 10 (bir sıfır)." },
      ],
      11: [
        { mistake: "11×12=121 olduğunu düşünmek (132 yerine)", solution: "Çift basamak deseni sadece 11×1'den 11×9'a kadar geçerlidir. 11×10=110, 11×12=132." },
        { mistake: "Basamak toplama hilesini yanlış uygulamak", solution: "23×11: Basamakları topla (2+3=5), ortaya koy: 253. Eğer toplam >9 ise, elde var: 67×11: 6_(6+7=13)_7 = 6_(13)_7 = 737." },
        { mistake: "11×11=111 sanmak", solution: "11×11=121, 111 değil. Her 11 katı, bir öncekine 11 ekler: 99+11=110, 110+11=121." },
      ],
      12: [
        { mistake: "12×8=84 ile 12×9=108'i karıştırmak", solution: "12×8=96 (8 düzine), 12×9=108 (9 düzine). 84 aslında 12×7. Düzine sayarak kontrol edin." },
        { mistake: "12 ile 10'u karıştırmak", solution: "12×5=60, 10×5=50. 12 her zaman 10'dan %20 fazladır (10'a 2 eklenmiş)." },
      ],
      13: [
        { mistake: "13×7=91 ile 13×8=104'ü karıştırmak", solution: "13×7=91, 13×8=104. Aradaki fark 13'tür. 10+3 stratejisini kullanın: 70+21=91, 80+24=104." },
        { mistake: "13'ü 3 veya 30 ile karıştırmak", solution: "13×4=52, 3×4=12 değil. 30×4=120 da değil. 13, tam olarak 10+3'tür." },
      ],
      14: [
        { mistake: "14×7=98 sanmak (doğrusu 14×7=98)", solution: "14×7=98 doğru! Ama 14×8=112'yi unutmayın (98+14=112). 7 tablosunun iki katı olduğunu hatırlayın." },
        { mistake: "14×6=72 ile 14×6=84'ü karıştırmak", solution: "14×6=84 doğrudur (7×6=42, ×2=84). 72 aslında 12×6 veya 8×9." },
      ],
      15: [
        { mistake: "15×6=80 sanmak (90 yerine)", solution: "15×6=90 (1.5 düzine). 80 aslında 16×5. 15×6'yı 3×6=18, sonra ×5=90 veya 5×6=30, sonra ×3=90 olarak hesaplayın." },
        { mistake: "15×4=50 ile karıştırmak", solution: "15×4=60, 50 değil. 15 dakika×4 = 1 saat (60 dakika) olduğunu hatırlayın." },
      ],
      16: [
        { mistake: "16×6=84 ile 16×6=96'yı karıştırmak", solution: "16×6=96 doğrudur (8×6=48, ×2=96). 84 aslında 14×6 veya 12×7." },
        { mistake: "16'yı 6 ile karıştırmak", solution: "16×4=64, 6×4=24 değil. 16, 6'dan çok farklıdır. 16=2⁴ olduğunu hatırlayın." },
      ],
      17: [
        { mistake: "17×6=102 ile 17×7=119'u karıştırmak", solution: "20-3 stratejisi: 17×6=120-18=102, 17×7=140-21=119. Veya 10+7: 60+42=102, 70+49=119." },
        { mistake: "17×8=126 ile 17×9=153'ü karıştırmak", solution: "17×8=136 (170-34), 17×9=153 (180-27). 126 aslında 18×7." },
      ],
      18: [
        { mistake: "18×7=126 ile 18×8=144'ü karıştırmak", solution: "18×7=126 (9×7=63, ×2), 18×8=144 (9×8=72, ×2). Aradaki fark 18'dir." },
        { mistake: "18×6=108 ile 18×6=104'ü karıştırmak", solution: "18×6=108 doğrudur (6×6=36, ×3 veya 9×6=54, ×2). 104 aslında 13×8." },
      ],
      19: [
        { mistake: "19×5=100 sanmak (95 yerine)", solution: "19×5=95, 100 değil (20×5=100). 19, 20'den 1 eksiktir, bu yüzden 100-5=95." },
        { mistake: "19×6=114 ile 19×7=133'ü karıştırmak", solution: "20-1 stratejisi: 19×6=120-6=114, 19×7=140-7=133. Her seferinde çarpanı 20'den çıkarın." },
      ],
      20: [
        { mistake: "20×7=120 sanmak (140 yerine)", solution: "20×7=140, 120 değil (20×6=120). 10×7=70, ikiye katlayın: 140. Veya 7×20=7×10×2." },
        { mistake: "Sıfırı unutmak", solution: "20'nin tüm katları 0 ile bitmeli: 20, 40, 60, 80, 100... 20×8=160, 16 değil!" },
      ],
      21: [
        { mistake: "21×5=100 sanmak (105 yerine)", solution: "21×5=105, 100 değil. 20×5=100, artı 5 daha: 105. Veya 3×7×5 = 21×5 = 105." },
        { mistake: "21×7=140 ile 21×7=147'yi karıştırmak", solution: "21×7=147 doğrudur (3×7×7 veya 140+7). 140 aslında 20×7." },
        { mistake: "21'i 12 ile karıştırmak", solution: "21×4=84, 12×4=48 değil. Rakamların sırasına dikkat edin: 21, 12'den çok farklıdır." },
      ],
      22: [
        { mistake: "22×5=100 sanmak (110 yerine)", solution: "22×5=110, 100 değil. 11×5=55, ikiye katlayın: 110. Veya 20×5=100, artı 2×5=10: 110." },
        { mistake: "22×9=198 ile 22×9=188'i karıştırmak", solution: "22×9=198 doğrudur (11×9=99, ×2). 188 başka bir hesaptır." },
      ],
      23: [
        { mistake: "23×4=82 sanmak (92 yerine)", solution: "23×4=92, 82 değil. 20×4=80, artı 3×4=12: 92. 82 başka bir sonuçtur." },
        { mistake: "23×5=105 ile 23×5=115'i karıştırmak", solution: "23×5=115 doğrudur (20×5=100, 3×5=15, toplam 115). 105 aslında 21×5." },
      ],
      24: [
        { mistake: "24×5=100 sanmak (120 yerine)", solution: "24×5=120, 100 değil. Bir günde 24 saat, 5 gün = 120 saat. Veya 12×10=120." },
        { mistake: "24×7=158 ile 24×7=168'i karıştırmak", solution: "24×7=168 doğrudur (4×6×7 veya 3×8×7). 158 başka bir sonuçtur." },
      ],
      25: [
        { mistake: "25×8=180 sanmak (200 yerine)", solution: "25×8=200, 180 değil. 25×4=100, yani 25×8=200. Veya 5×5×8 = 25×8 = 200." },
        { mistake: "Son iki basamağı yanlış tahmin etmek", solution: "25'in katları hep 25, 50, 75 veya 00 ile biter. Başka bir şey olamaz!" },
      ],
      26: [
        { mistake: "26×5=120 ile 26×5=130'u karıştırmak", solution: "26×5=130 doğrudur (13×5=65, ×2). 120 aslında 24×5." },
        { mistake: "26'yı 16 veya 36 ile karıştırmak", solution: "26×4=104, 16×4=64 veya 36×4=144 değil. Rakamları dikkatlice okuyun." },
      ],
      27: [
        { mistake: "27×4=98 sanmak (108 yerine)", solution: "27×4=108, 98 değil. 30×4=120, eksi 3×4=12: 108. Veya 9×4=36, ×3=108." },
        { mistake: "27×7=179 ile 27×7=189'u karıştırmak", solution: "27×7=189 doğrudur (30×7=210, eksi 3×7=21: 189). 179 başka bir sonuçtur." },
      ],
      28: [
        { mistake: "28×5=130 sanmak (140 yerine)", solution: "28×5=140, 130 değil. 4×7×5 = 20×7 = 140. Veya 14×10=140." },
        { mistake: "28×9=242 ile 28×9=252'yi karıştırmak", solution: "28×9=252 doğrudur (4×7×9 veya 30×9 eksi 2×9). 242 başka bir sonuçtur." },
      ],
      29: [
        { mistake: "29×5=140 sanmak (145 yerine)", solution: "29×5=145, 140 değil. 30×5=150, eksi 5: 145. 140 aslında 28×5." },
        { mistake: "29×7=203 ile 29×7=193'ü karıştırmak", solution: "29×7=203 doğrudur (30×7=210, eksi 7). 193 başka bir hesaptır." },
      ],
      30: [
        { mistake: "30×7=200 sanmak (210 yerine)", solution: "30×7=210, 200 değil (30×6=180, 30×7=210). 10×7=70, ×3=210." },
        { mistake: "Sıfırı unutmak", solution: "30'un tüm katları 0 ile bitmeli: 30, 60, 90, 120, 150... 30×8=240, 24 değil!" },
      ],
      31: [
        { mistake: "31×5=145 sanmak (155 yerine)", solution: "31×5=155, 145 değil. 30×5=150, artı 5: 155. 145 aslında 29×5." },
        { mistake: "31×7=207 ile 31×7=217'yi karıştırmak", solution: "31×7=217 doğrudur (30×7=210, artı 7). 207 başka bir sonuçtur." },
      ],
      32: [
        { mistake: "32×5=150 sanmak (160 yerine)", solution: "32×5=160, 150 değil. 16×5=80, ikiye katlayın: 160. Veya 32×10=320, yarısı 160." },
        { mistake: "32×7=214 ile 32×7=224'ü karıştırmak", solution: "32×7=224 doğrudur (16×7=112, ×2). 214 başka bir hesaptır." },
      ],
      33: [
        { mistake: "33×4=122 sanmak (132 yerine)", solution: "33×4=132, 122 değil. 11×4=44, ×3=132. Veya 30×4=120, artı 3×4=12: 132." },
        { mistake: "33×9=297 ile 33×9=287'yi karıştırmak", solution: "33×9=297 doğrudur (11×9=99, ×3). 287 başka bir sonuçtur." },
      ],
      34: [
        { mistake: "34×5=160 sanmak (170 yerine)", solution: "34×5=170, 160 değil. 17×5=85, ikiye katlayın: 170. 160 aslında 32×5." },
        { mistake: "34×8=262 ile 34×8=272'yi karıştırmak", solution: "34×8=272 doğrudur (17×8=136, ×2). 262 başka bir sonuçtur." },
      ],
      35: [
        { mistake: "35×6=200 sanmak (210 yerine)", solution: "35×6=210, 200 değil. 5×6=30, 7×6=42, 30×7=210 veya 5×42=210." },
        { mistake: "35×8=270 ile 35×8=280'i karıştırmak", solution: "35×8=280 doğrudur (5×8=40, 7×8=56, 40×7=280). 270 aslında 27×10." },
      ],
      36: [
        { mistake: "36×5=170 sanmak (180 yerine)", solution: "36×5=180, 170 değil. 6×5=30, ×6=180. Veya 18×10=180. 170 aslında 34×5." },
        { mistake: "36×7=242 ile 36×7=252'yi karıştırmak", solution: "36×7=252 doğrudur (6×7=42, ×6 veya 9×7=63, ×4). 242 başka bir sonuçtur." },
      ],
      37: [
        { mistake: "37×5=175 sanmak (185 yerine)", solution: "37×5=185, 175 değil. 40×5=200, eksi 3×5=15: 185. 175 aslında 35×5." },
        { mistake: "37×3=111 sonrasını yanlış hesaplamak", solution: "37×3=111, 37×6=222, 37×9=333. Her 3'ün katında repdigit! 37×7=259, 37×8=296." },
      ],
      38: [
        { mistake: "38×5=180 sanmak (190 yerine)", solution: "38×5=190, 180 değil. 19×5=95, ikiye katlayın: 190. 180 aslında 36×5." },
        { mistake: "38×9=332 ile 38×9=342'yi karıştırmak", solution: "38×9=342 doğrudur (19×9=171, ×2 veya 40×9=360, eksi 2×9=18). 332 başka bir sonuçtur." },
      ],
      39: [
        { mistake: "39×5=185 sanmak (195 yerine)", solution: "39×5=195, 185 değil. 40×5=200, eksi 5: 195. 185 aslında 37×5." },
        { mistake: "39×8=302 ile 39×8=312'yi karıştırmak", solution: "39×8=312 doğrudur (40×8=320, eksi 8). 302 başka bir sonuçtur." },
      ],
      40: [
        { mistake: "40×7=270 sanmak (280 yerine)", solution: "40×7=280, 270 değil. 4×7=28, sonuna 0 ekle: 280. Veya 10×7=70, ×4=280." },
        { mistake: "Sıfırı unutmak", solution: "40'ın tüm katları 0 ile bitmeli: 40, 80, 120, 160, 200... 40×9=360, 36 değil!" },
      ],
      41: [
        { mistake: "41×5=200 sanmak (205 yerine)", solution: "41×5=205, 200 değil. 40×5=200, artı 5: 205. Her zaman o ekstra 1'i eklemeyi unutmayın." },
        { mistake: "41×9=360 ile 41×9=369'u karıştırmak", solution: "41×9=369 doğrudur (40×9=360, artı 9). 360 aslında 40×9." },
      ],
      42: [
        { mistake: "42×5=200 sanmak (210 yerine)", solution: "42×5=210, 200 değil. 6×5=30, 7×5=35, 30+35=65... Veya 40×5=200, artı 2×5=10: 210." },
        { mistake: "42×8=326 ile 42×8=336'yı karıştırmak", solution: "42×8=336 doğrudur (6×8=48, 7×8=56 veya 40×8=320, artı 16). 326 başka bir sonuçtur." },
      ],
      43: [
        { mistake: "43×5=205 sanmak (215 yerine)", solution: "43×5=215, 205 değil. 40×5=200, artı 3×5=15: 215. 205 aslında 41×5." },
        { mistake: "43×9=377 ile 43×9=387'yi karıştırmak", solution: "43×9=387 doğrudur (40×9=360, artı 3×9=27). 377 başka bir sonuçtur." },
      ],
      44: [
        { mistake: "44×5=210 sanmak (220 yerine)", solution: "44×5=220, 210 değil. 11×5=55, ×4=220. Veya 40×5=200, artı 4×5=20: 220." },
        { mistake: "44×9=386 ile 44×9=396'yı karıştırmak", solution: "44×9=396 doğrudur (11×9=99, ×4 veya 40×9=360, artı 4×9=36). 386 başka bir sonuçtur." },
      ],
      45: [
        { mistake: "45×5=220 sanmak (225 yerine)", solution: "45×5=225, 220 değil. 9×5=45, ×5=225. Veya 40×5=200, artı 5×5=25: 225." },
        { mistake: "45×8=350 ile 45×8=360'ı karıştırmak", solution: "45×8=360 doğrudur (9×8=72, ×5 veya 5×8=40, ×9). 350 başka bir sonuçtur." },
      ],
      46: [
        { mistake: "46×5=225 sanmak (230 yerine)", solution: "46×5=230, 225 değil. 23×5=115, ×2=230. Veya 50×5=250, eksi 4×5=20: 230." },
        { mistake: "46×9=404 ile 46×9=414'ü karıştırmak", solution: "46×9=414 doğrudur (23×9=207, ×2 veya 50×9=450, eksi 4×9=36). 404 başka bir sonuçtur." },
      ],
      47: [
        { mistake: "47×5=230 sanmak (235 yerine)", solution: "47×5=235, 230 değil. 50×5=250, eksi 3×5=15: 235. 230 aslında 46×5." },
        { mistake: "47×9=413 ile 47×9=423'ü karıştırmak", solution: "47×9=423 doğrudur (50×9=450, eksi 3×9=27). 413 başka bir sonuçtur." },
      ],
      48: [
        { mistake: "48×5=230 sanmak (240 yerine)", solution: "48×5=240, 230 değil. 6×5=30, 8×5=40, 30×8=240. Veya 50×5=250, eksi 2×5=10: 240." },
        { mistake: "48×9=422 ile 48×9=432'yi karıştırmak", solution: "48×9=432 doğrudur (6×9=54, ×8 veya 50×9=450, eksi 2×9=18). 422 başka bir sonuçtur." },
      ],
      49: [
        { mistake: "49×5=240 sanmak (245 yerine)", solution: "49×5=245, 240 değil. 50×5=250, eksi 5: 245. Veya 7×5=35, ×7=245." },
        { mistake: "49×9=431 ile 49×9=441'i karıştırmak", solution: "49×9=441 doğrudur (50×9=450, eksi 9). Ayrıca 441=21² (kare sayı). 431 başka bir sonuçtur." },
      ],
      50: [
        { mistake: "50×7=340 sanmak (350 yerine)", solution: "50×7=350, 340 değil. 5×7=35, sonuna 0 ekle: 350. Veya 100×7=700, ÷2=350." },
        { mistake: "Sıfırı unutmak", solution: "50'nin tüm tek katları 50 ile, çift katları 0 ile biter: 50, 100, 150, 200, 250... 50×8=400, 40 değil!" },
      ],
      51: [
        { mistake: "51×5=250 sanmak (255 yerine)", solution: "51×5=255, 250 değil. 50×5=250, artı 5: 255. Her zaman o ekstra 1'i eklemeyi unutmayın." },
        { mistake: "51×9=450 ile 51×9=459'u karıştırmak", solution: "51×9=459 doğrudur (50×9=450, artı 9). 450 aslında 50×9." },
      ],
      52: [
        { mistake: "52×5=250 sanmak (260 yerine)", solution: "52×5=260, 250 değil. 13×5=65, ×4=260. Veya 50×5=250, artı 2×5=10: 260." },
        { mistake: "52×9=458 ile 52×9=468'i karıştırmak", solution: "52×9=468 doğrudur (13×9=117, ×4 veya 50×9=450, artı 18). 458 başka bir sonuçtur." },
      ],
      53: [
        { mistake: "53×5=255 sanmak (265 yerine)", solution: "53×5=265, 255 değil. 50×5=250, artı 3×5=15: 265. 255 aslında 51×5." },
        { mistake: "53×9=467 ile 53×9=477'yi karıştırmak", solution: "53×9=477 doğrudur (50×9=450, artı 3×9=27). 467 başka bir sonuçtur." },
      ],
      54: [
        { mistake: "54×5=260 sanmak (270 yerine)", solution: "54×5=270, 260 değil. 6×5=30, 9×5=45, 30×9=270. Veya 50×5=250, artı 4×5=20: 270." },
        { mistake: "54×9=476 ile 54×9=486'yı karıştırmak", solution: "54×9=486 doğrudur (6×9=54, ×9 veya 60×9=540, eksi 6×9=54). 476 başka bir sonuçtur." },
      ],
      55: [
        { mistake: "55×5=270 sanmak (275 yerine)", solution: "55×5=275, 270 değil. 11×5=55, ×5=275. Veya 50×5=250, artı 5×5=25: 275." },
        { mistake: "55×9=485 ile 55×9=495'i karıştırmak", solution: "55×9=495 doğrudur (11×9=99, ×5 veya 60×9=540, eksi 5×9=45). 485 başka bir sonuçtur." },
      ],
      56: [
        { mistake: "56×5=270 sanmak (280 yerine)", solution: "56×5=280, 270 değil. 7×5=35, 8×5=40, 35×8=280. Veya 60×5=300, eksi 4×5=20: 280." },
        { mistake: "56×9=494 ile 56×9=504'ü karıştırmak", solution: "56×9=504 doğrudur (7×9=63, ×8 veya 60×9=540, eksi 4×9=36). 494 başka bir sonuçtur." },
      ],
      57: [
        { mistake: "57×5=280 sanmak (285 yerine)", solution: "57×5=285, 280 değil. 60×5=300, eksi 3×5=15: 285. 280 aslında 56×5." },
        { mistake: "57×9=503 ile 57×9=513'ü karıştırmak", solution: "57×9=513 doğrudur (60×9=540, eksi 3×9=27). 503 başka bir sonuçtur." },
      ],
      58: [
        { mistake: "58×5=280 sanmak (290 yerine)", solution: "58×5=290, 280 değil. 29×5=145, ×2=290. Veya 60×5=300, eksi 2×5=10: 290." },
        { mistake: "58×9=512 ile 58×9=522'yi karıştırmak", solution: "58×9=522 doğrudur (29×9=261, ×2 veya 60×9=540, eksi 2×9=18). 512 başka bir sonuçtur." },
      ],
      59: [
        { mistake: "59×5=290 sanmak (295 yerine)", solution: "59×5=295, 290 değil. 60×5=300, eksi 5: 295. Çok basit!" },
        { mistake: "59×9=521 ile 59×9=531'i karıştırmak", solution: "59×9=531 doğrudur (60×9=540, eksi 9). 531 ayrıca 9×59. 521 başka bir sonuçtur." },
      ],
      60: [
        { mistake: "60×7=410 sanmak (420 yerine)", solution: "60×7=420, 410 değil. 6×7=42, sonuna 0 ekle: 420. Veya 10×7=70, ×6=420." },
        { mistake: "Sıfırı unutmak", solution: "60'ın tüm katları 0 ile bitmeli: 60, 120, 180, 240, 300, 360, 420... 60×9=540, 54 değil!" },
      ],
      61: [
        { mistake: "61×5=300 sanmak (305 yerine)", solution: "61×5=305, 300 değil. 60×5=300, artı 5: 305. Her zaman o ekstra 1'i eklemeyi unutmayın." },
        { mistake: "61×9=540 ile 61×9=549'u karıştırmak", solution: "61×9=549 doğrudur (60×9=540, artı 9). 540 aslında 60×9." },
      ],
      62: [
        { mistake: "62×5=300 sanmak (310 yerine)", solution: "62×5=310, 300 değil. 31×5=155, ×2=310. Veya 60×5=300, artı 2×5=10: 310." },
        { mistake: "62×9=548 ile 62×9=558'i karıştırmak", solution: "62×9=558 doğrudur (31×9=279, ×2 veya 60×9=540, artı 18). 548 başka bir sonuçtur." },
      ],
      63: [
        { mistake: "63×5=305 sanmak (315 yerine)", solution: "63×5=315, 305 değil. 7×5=35, 9×5=45, 35×9=315. Veya 60×5=300, artı 3×5=15: 315." },
        { mistake: "63×9=557 ile 63×9=567'yi karıştırmak", solution: "63×9=567 doğrudur (7×9=63, ×9 veya 60×9=540, artı 27). 557 başka bir sonuçtur." },
      ],
      64: [
        { mistake: "64×5=310 sanmak (320 yerine)", solution: "64×5=320, 310 değil. 8×5=40, ×8=320. Veya 60×5=300, artı 4×5=20: 320." },
        { mistake: "64×9=566 ile 64×9=576'yı karıştırmak", solution: "64×9=576 doğrudur (8×9=72, ×8 veya 60×9=540, artı 36). Ayrıca 576=24². 566 başka bir sonuçtur." },
      ],
      65: [
        { mistake: "65×5=320 sanmak (325 yerine)", solution: "65×5=325, 320 değil. 13×5=65, ×5=325. Veya 60×5=300, artı 5×5=25: 325." },
        { mistake: "65×9=575 ile 65×9=585'i karıştırmak", solution: "65×9=585 doğrudur (13×9=117, ×5 veya 70×9=630, eksi 5×9=45). 575 başka bir sonuçtur." },
      ],
      66: [
        { mistake: "66×5=325 sanmak (330 yerine)", solution: "66×5=330, 325 değil. 11×5=55, ×6=330. Veya 60×5=300, artı 6×5=30: 330." },
        { mistake: "66×9=584 ile 66×9=594'ü karıştırmak", solution: "66×9=594 doğrudur (11×9=99, ×6 veya 70×9=630, eksi 4×9=36). 584 başka bir sonuçtur." },
      ],
      67: [
        { mistake: "67×5=330 sanmak (335 yerine)", solution: "67×5=335, 330 değil. 70×5=350, eksi 3×5=15: 335. 330 aslında 66×5." },
        { mistake: "67×9=593 ile 67×9=603'ü karıştırmak", solution: "67×9=603 doğrudur (70×9=630, eksi 3×9=27). 593 başka bir sonuçtur." },
      ],
      68: [
        { mistake: "68×5=330 sanmak (340 yerine)", solution: "68×5=340, 330 değil. 17×5=85, ×4=340. Veya 70×5=350, eksi 2×5=10: 340." },
        { mistake: "68×9=602 ile 68×9=612'yi karıştırmak", solution: "68×9=612 doğrudur (17×9=153, ×4 veya 70×9=630, eksi 2×9=18). 602 başka bir sonuçtur." },
      ],
      69: [
        { mistake: "69×5=340 sanmak (345 yerine)", solution: "69×5=345, 340 değil. 70×5=350, eksi 5: 345. Çok basit!" },
        { mistake: "69×9=611 ile 69×9=621'i karıştırmak", solution: "69×9=621 doğrudur (70×9=630, eksi 9). 621=3×207. 611 başka bir sonuçtur." },
      ],
      70: [
        { mistake: "70×7=480 sanmak (490 yerine)", solution: "70×7=490, 480 değil. 7×7=49, sonuna 0 ekle: 490. Veya 10×7=70, ×7=490." },
        { mistake: "Sıfırı unutmak", solution: "70'in tüm katları 0 ile bitmeli: 70, 140, 210, 280, 350, 420, 490... 70×9=630, 63 değil!" },
      ],
      71: [
        { mistake: "71×5=350 sanmak (355 yerine)", solution: "71×5=355, 350 değil. 70×5=350, artı 5: 355. Her zaman o ekstra 1'i eklemeyi unutmayın." },
        { mistake: "71×9=630 ile 71×9=639'u karıştırmak", solution: "71×9=639 doğrudur (70×9=630, artı 9). 630 aslında 70×9." },
      ],
      72: [
        { mistake: "72×5=350 sanmak (360 yerine)", solution: "72×5=360, 350 değil. 8×5=40, 9×5=45, 40×9=360. Veya 70×5=350, artı 2×5=10: 360." },
        { mistake: "72×9=638 ile 72×9=648'i karıştırmak", solution: "72×9=648 doğrudur (8×9=72, ×9 veya 80×9=720, eksi 72). 638 başka bir sonuçtur." },
      ],
      73: [
        { mistake: "73×5=355 sanmak (365 yerine)", solution: "73×5=365, 355 değil. 70×5=350, artı 3×5=15: 365. Ayrıca 365=bir yıldaki gün sayısı!" },
        { mistake: "73×9=647 ile 73×9=657'yi karıştırmak", solution: "73×9=657 doğrudur (70×9=630, artı 3×9=27). 647 başka bir sonuçtur." },
      ],
      74: [
        { mistake: "74×5=360 sanmak (370 yerine)", solution: "74×5=370, 360 değil. 37×5=185, ×2=370. Veya 75×5=375, eksi 5: 370." },
        { mistake: "74×9=656 ile 74×9=666'yı karıştırmak", solution: "74×9=666 doğrudur (37×9=333, ×2 veya 75×9=675, eksi 9). 666 repdigit sayı. 656 başka bir sonuçtur." },
      ],
      75: [
        { mistake: "75×5=370 sanmak (375 yerine)", solution: "75×5=375, 370 değil. 15×5=75, ×5=375. Veya 25×5=125, ×3=375." },
        { mistake: "75×9=665 ile 75×9=675'i karıştırmak", solution: "75×9=675 doğrudur (25×9=225, ×3 veya 80×9=720, eksi 5×9=45). 675=3³×5². 665 başka bir sonuçtur." },
      ],
      76: [
        { mistake: "76×5=370 sanmak (380 yerine)", solution: "76×5=380, 370 değil. 19×5=95, ×4=380. Veya 80×5=400, eksi 4×5=20: 380." },
        { mistake: "76×9=674 ile 76×9=684'ü karıştırmak", solution: "76×9=684 doğrudur (19×9=171, ×4 veya 80×9=720, eksi 4×9=36). 684 başka bir sonuçtur." },
      ],
      77: [
        { mistake: "77×5=380 sanmak (385 yerine)", solution: "77×5=385, 380 değil. 7×5=35, 11×5=55, 35×11=385. Veya 80×5=400, eksi 3×5=15: 385." },
        { mistake: "77×9=683 ile 77×9=693'ü karıştırmak", solution: "77×9=693 doğrudur (7×9=63, ×11 veya 80×9=720, eksi 3×9=27). 693=7×9×11. 683 başka bir sonuçtur." },
      ],
      78: [
        { mistake: "78×5=380 sanmak (390 yerine)", solution: "78×5=390, 380 değil. 13×5=65, 6×5=30, 65×6=390. Veya 80×5=400, eksi 2×5=10: 390." },
        { mistake: "78×9=692 ile 78×9=702'yi karıştırmak", solution: "78×9=702 doğrudur (13×9=117, ×6 veya 80×9=720, eksi 2×9=18). 702 başka bir sonuçtur." },
      ],
      79: [
        { mistake: "79×5=390 sanmak (395 yerine)", solution: "79×5=395, 390 değil. 80×5=400, eksi 5: 395. Çok basit!" },
        { mistake: "79×9=701 ile 79×9=711'i karıştırmak", solution: "79×9=711 doğrudur (80×9=720, eksi 9). 711 başka bir sonuçtur." },
      ],
      80: [
        { mistake: "80×7=550 sanmak (560 yerine)", solution: "80×7=560, 550 değil. 8×7=56, sonuna 0 ekle: 560. Veya 10×7=70, ×8=560." },
        { mistake: "Sıfırı unutmak", solution: "80'in tüm katları 0 ile bitmeli: 80, 160, 240, 320, 400, 480, 560... 80×9=720, 72 değil!" },
      ],
      81: [
        { mistake: "81'i 9×9 yerine 8×10+1 gibi hesaplamak", solution: "81=9×9. Örnek: 81×7 = (9×7)×9 = 63×9 = 567. Kare ilişkisini kullan!" },
        { mistake: "80+1 stratejisinde toplama hatası", solution: "81×7 = (80×7)+(1×7) = 560+7 = 567. Her iki kısmı dikkatli hesapla!" },
      ],
      82: [
        { mistake: "82×4'ü zorlaştırmak", solution: "82×4 = (80×4)+(2×4) = 320+8 = 328. Parçala ve topla!" },
        { mistake: "82'yi tek sayı sanmak", solution: "82=2×41, her zaman çift. Tüm katları çift sayılardır: 82, 164, 246..." },
      ],
      83: [
        { mistake: "83×5'i yanlış hesaplamak", solution: "83×5 = (80×5)+(3×5) = 400+15 = 415. Parçala ve topla!" },
        { mistake: "83'ü çift sanmak", solution: "83 asaldır, sadece 1 ve 83'e bölünür. Tek sayı ve 2'ye bölünmez." },
      ],
      84: [
        { mistake: "84×5'i zorlaştırmak", solution: "84×5 = 420 (7×12×5=7×60). Veya (80×5)+(4×5)=400+20=420." },
        { mistake: "84'ün çarpanlarını unutmak", solution: "84=7×12=6×14=4×21=3×28. Birden fazla yoldan hesaplanabilir!" },
      ],
      85: [
        { mistake: "85×4'ü yanlış hesaplamak", solution: "85×4 = (80×4)+(5×4) = 320+20 = 340. Veya 85×4=17×20=340." },
        { mistake: "Son rakamı unutmak", solution: "85'in katları hep 5 veya 0 ile biter: 85, 170, 255, 340, 425, 510..." },
      ],
      86: [
        { mistake: "86×5'i zorlaştırmak", solution: "86×5 = (80×5)+(6×5) = 400+30 = 430. Parçala ve topla!" },
        { mistake: "86'yı tek sayı sanmak", solution: "86=2×43, her zaman çift. Tüm katları çift sayılardır: 86, 172, 258..." },
      ],
      87: [
        { mistake: "87×5'i yanlış hesaplamak", solution: "87×5 = (90×5)-(3×5) = 450-15 = 435. 90'dan çıkarma daha kolay!" },
        { mistake: "87'yi asal sanmak", solution: "87=3×29, asal değil! 3'e bölünebilir (8+7=15, 3'e tam bölünür)." },
      ],
      88: [
        { mistake: "88×5'i zorlaştırmak", solution: "88×5 = (80×5)+(8×5) = 400+40 = 440. Veya 88×5=11×40=440." },
        { mistake: "88×11'i yanlış hesaplamak", solution: "88×11 = 88×10 + 88 = 880+88 = 968. 11 ile çarpma kuralını kullan!" },
      ],
      89: [
        { mistake: "89'u yuvarlamadan hesaplamak", solution: "89=90-1. Örnek: 89×7 = (90×7)-7 = 630-7 = 623. ÇOK KOLAY!" },
        { mistake: "89'u 88+1 gibi hesaplamak", solution: "90-1 stratejisi çok daha kolaydır! 89×7: 90×7=630, sonra 7 çıkar: 623." },
      ],
      90: [
        { mistake: "90×5'i zorlaştırmak", solution: "90×5 = 450 (9×50). Sadece 9×5=45, sonuna 0 ekle!" },
        { mistake: "Sıfırı unutmak", solution: "90=9×10. Sonuna her zaman 0 ekle: 90, 180, 270, 360, 450..." },
      ],
      91: [
        { mistake: "91×5'i yanlış hesaplamak", solution: "91×5 = (90×5)+(1×5) = 450+5 = 455. Parçala ve topla!" },
        { mistake: "91'i asal sanmak", solution: "91=7×13, asal değil! Hem 7'ye hem 13'e bölünebilir." },
      ],
      92: [
        { mistake: "92×5'i zorlaştırmak", solution: "92×5 = (90×5)+(2×5) = 450+10 = 460. Parçala ve topla!" },
        { mistake: "92'yi tek sayı sanmak", solution: "92=2×46, her zaman çift. Tüm katları çift sayılardır: 92, 184, 276..." },
      ],
      93: [
        { mistake: "93×5'i yanlış hesaplamak", solution: "93×5 = (90×5)+(3×5) = 450+15 = 465. Parçala ve topla!" },
        { mistake: "93'ü asal sanmak", solution: "93=3×31, asal değil! 3'e bölünebilir (9+3=12, 3'e tam bölünür)." },
      ],
      94: [
        { mistake: "94×5'i zorlaştırmak", solution: "94×5 = (100×5)-(6×5) = 500-30 = 470. 100'den çıkarma daha kolay!" },
        { mistake: "94'yü tek sayı sanmak", solution: "94=2×47, her zaman çift. Tüm katları çift sayılardır: 94, 188, 282..." },
      ],
      95: [
        { mistake: "95×4'ü yanlış hesaplamak", solution: "95×4 = (100×4)-(5×4) = 400-20 = 380. Veya 95×4=19×20=380." },
        { mistake: "Son rakamı unutmak", solution: "95'in katları hep 5 veya 0 ile biter: 95, 190, 285, 380, 475, 570..." },
      ],
      96: [
        { mistake: "96×5'i zorlaştırmak", solution: "96×5 = (100×5)-(4×5) = 500-20 = 480. Veya 96×5=12×40=480." },
        { mistake: "96'ın çarpanlarını unutmak", solution: "96=8×12=6×16=4×24=3×32. Birden fazla yoldan hesaplanabilir!" },
      ],
      97: [
        { mistake: "97'yi yuvarlamadan hesaplamak", solution: "97=100-3. Örnek: 97×7 = (100×7)-21 = 700-21 = 679. ÇOK KOLAY!" },
        { mistake: "97'yi 96+1 gibi hesaplamak", solution: "100-3 stratejisi çok daha kolaydır! 97×7: 100×7=700, sonra 21 çıkar: 679." },
      ],
      98: [
        { mistake: "98×5'i zorlaştırmak", solution: "98×5 = (100×5)-(2×5) = 500-10 = 490. 100'den çıkarma SÜPER KOLAY!" },
        { mistake: "98'i tek sayı sanmak", solution: "98=2×49, her zaman çift. Tüm katları çift sayılardır: 98, 196, 294..." },
      ],
      99: [
        { mistake: "99'u yuvarlamadan hesaplamak", solution: "99=100-1. Örnek: 99×7 = (100×7)-7 = 700-7 = 693. MÜKEMMELDİR!" },
        { mistake: "99'u 98+1 gibi hesaplamak", solution: "100-1 stratejisi çok daha kolaydır! 99×8: 100×8=800, sonra 8 çıkar: 792." },
      ],
      100: [
        { mistake: "100×5'i zorlaştırmak", solution: "100×5 = 500! Sadece sonuna iki sıfır ekle: 5 → 500, 7 → 700!" },
        { mistake: "Sıfırları unutmak", solution: "100 ile çarpma: sonuna İKİ sıfır ekle. 100×9=900, 90 değil!" },
      ],
    }
    return mistakes[number] || []
  }

  const getPracticeStrategies = () => {
    const strategies: { [key: number]: string[] } = {
      1: [
        "Her çarpmayı yüksek sesle söyleyin: '1 çarpı 1 eşittir 1, 1 çarpı 2 eşittir 2...'",
        "Tabloyu bir hafta boyunca her gün bir kez yazmayı pratik edin",
        "Deseni arayın: cevap her zaman ikinci sayıyla aynıdır",
        "Flash kartları kullanın, ancak bu tablo genellikle çok hızlı öğrenilir",
      ],
      2: [
        "Yürürken veya merdiven çıkarken ikişerli sayın: 2, 4, 6, 8...",
        "Parmaklarınızı kullanın: parmakları çift olarak tutun ve ikişerli sayın",
        "Gün boyunca kafanızda sayıları ikiye katlamayı pratik edin",
        "Yüksek sesle söyleyin: '2 çarpı 5, 5 artı 5'tir, bu da 10 eder'",
      ],
      3: [
        "Ritmik olarak üçerli sayın: 3, 6, 9, 12, 15...",
        "Parmak hilesini kullanın: parmakları 3'lü gruplar halinde tutun",
        "Cevaplarınızı kontrol etmek için basamak toplama desenine bakın (3-6-9 tekrarı)",
        "Uzun bir seans yerine günde 5-10 dakika pratik yapın",
      ],
      4: [
        "Önce 2 çarpım tablosunu öğrenin, sonra 4'leri elde etmek için her cevabı ikiye katlayın",
        "Dörderli sayın: 4, 8, 12, 16, 20...",
        "Görselleştirmek için 4'lü gruplar halindeki nesneleri kullanın (sandalye ayakları, araba tekerlekleri)",
        "Daha zor olanları (4×6, 4×7, 4×8, 4×9) ayrı olarak pratik edin",
      ],
      5: [
        "Parmaklarınızı kullanarak beşerli sayın—her parmak 5'i temsil eder",
        "Bir saate bakın ve 5 dakikalık aralıklarla sayın",
        "Parayla pratik yapın: beşlik madeni paraları sayın (5 kuruş)",
        "Unutmayın: çift çarpanlar 0 ile, tek çarpanlar 5 ile biter",
      ],
      6: [
        "3 çarpım tablosunu ezberleyin, sonra her cevabı ikiye katlayarak 6'ları bulun",
        "Yumurta kutusu stratejisi: 6'şar 6'şar sayın (6, 12, 18, 24...)",
        "Zor çiftlere odaklanın: 6×7=42, 6×8=48, 6×9=54'ü ayrı çalışın",
        "Birler basamağı desenini ezberleyin: 6, 2, 8, 4, 0 ve tekrar",
        "6 hem 2'nin hem 3'ün katı olduğu için bu iki tabloyu kullanarak kontrol edin",
      ],
      7: [
        "En zor ikiliyi ezberleyin: 7×8=56 ('beş altı, yedi sekiz' kafiyesi)",
        "Haftanın günleriyle bağlantı kurun: 7 gün, 14 gün (2 hafta), 21 gün (3 hafta)",
        "7×7=49'u özel olarak ezberleyin (7²=49), diğerlerini bundan hesaplayın",
        "Parmak hilesi: Sol elden 7 parmak say, kalanlar birler, sayılanlar onlar",
        "Günde sadece 3-4 gerçek pratik yapın. 7 sabır ister!",
      ],
      8: [
        "4 çarpım tablosunu ezberleyin, sonra her cevabı ikiye katlayarak 8'leri bulun",
        "8×8=64'ü özel olarak ezberleyin ('sekiz sekiz altmış dört')",
        "Sekizerli sayın: 8, 16, 24, 32, 40, 48, 56, 64, 72, 80",
        "İkiye katlama zinciri: Sayıyı ikiye katlayın (×2), sonra tekrar (×4), sonra tekrar (×8)",
        "Birler basamağı her zaman çift ve azalan: 8, 6, 4, 2, 0 ve tekrar",
      ],
      9: [
        "Parmak hilesini öğrenin: 10 parmağınızı kullanarak 9 çarpım tablosunu gösterin",
        "Basamak toplama kuralını kullanın: cevabın basamaklarını toplayın, her zaman 9 olur",
        "10'dan çıkarma: 9×6 = 60-6 = 54, 9×8 = 80-8 = 72",
        "9×9=81'i özel olarak ezberleyin (9²=81)",
        "Onlar deseni: 9×n'de onlar basamağı her zaman n-1'dir",
      ],
      10: [
        "En kolay kural: Sadece sonuna bir sıfır ekleyin!",
        "10'arli sayın: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100",
        "Yer değeri ilişkisini anlayın: 10 ile çarpmak bir basamak sola kaydırır",
        "Büyük sayılarla pratik yapın: 23×10=230, 47×10=470",
        "Bu tabloyu diğer tabloları kontrol etmek için kullanın (örn: 9×6 = 60-6)",
      ],
      11: [
        "Çift basamak desenini ezberleyin: 11, 22, 33, 44, 55, 66, 77, 88, 99",
        "Basamak toplama hilesini pratik edin: 23×11 = 253 (2_[2+3]_3)",
        "11×11=121 ve 11×12=132'yi özel olarak ezberleyin",
        "Şarkı veya kafiye oluşturun: 'On bir beş, elli beş' (11×5=55)",
        "Her gün bir 11 katını gerçek hayatta bulun (11 yaş, 11 saat vb.)",
      ],
      12: [
        "Düzine sayarak pratik yapın: yumurta kutularını sayın (12, 24, 36...)",
        "3 veya 4 tablosunu kullanarak 12'yi hesaplayın: 12=3×4, yani 12×5 = 3×5×4 = 15×4 = 60",
        "Saat dilimi kullanın: 12×5=60 dakika (1 saat)",
        "12'nin en zor katlarına odaklanın: 12×7=84, 12×8=96, 12×9=108",
        "Günlük hayatta 12 kullanın: aylar, saatler, düzineler",
      ],
      13: [
        "10+3 stratejisini her zaman kullanın: 13×6 = 60+18 = 78",
        "13 tablosunu şarkı haline getirin veya ritim bulun",
        "En zor ikililere odaklanın: 13×7=91, 13×8=104, 13×9=117",
        "Her gün 2-3 farklı 13 katını pratik edin, hepsini birden değil",
        "Geriye doğru çalışın: 130, 117, 104, 91, 78... (130'dan 13'er azaltın)",
      ],
      14: [
        "7 tablosunu ezberleyin, sonra her cevabı ikiye katlayın",
        "İki haftalık takvim kullanın: 14 gün periyotları",
        "14×7=98 ve 14×8=112'yi özellikle ezberleyin",
        "7 tablosunu kontrol etmek için 14 kullanın: 14×6=84, yani 7×6=42",
        "14'erli sayın: 14, 28, 42, 56, 70, 84, 98, 112, 126, 140",
      ],
      15: [
        "Saat stratejisi: 15 dakika = çeyrek saat. 15×4=60 dakika = 1 saat",
        "3 veya 5 tablosunu kullanın: 15=3×5, yani 15×4 = 3×4×5 = 12×5 = 60",
        "0 veya 5 ile biten deseni takip edin: 15, 30, 45, 60, 75, 90...",
        "Bah­şiş hesaplama pratiği: %15 bah­şiş nasıl hesaplanır (10%+5%)",
        "15'in en kullanışlı katlarını ezberleyin: 15×4=60, 15×6=90, 15×8=120",
      ],
      16: [
        "İkiye katlama zinciri: Sayıyı ikiye katla (×2), tekrar (×4), tekrar (×8), tekrar (×16)",
        "8 tablosunu biliyorsanız her sonucu ikiye katlayın: 8×7=56, yani 16×7=112",
        "16×16=256'yı özel olarak ezberleyin (2⁸=256)",
        "Bilgisayar terimleriyle ilişkilendirin: 16 bit, onaltılık sistem",
        "16'erli sayın: 16, 32, 48, 64, 80, 96, 112, 128, 144, 160",
      ],
      17: [
        "20-3 stratejisini mükemmelleştirin: 17×n = 20n - 3n",
        "10+7 ayrıştırma: 17×6 = 60+42 = 102",
        "En zor ikilileri günlük pratik edin: 17×7=119, 17×8=136, 17×9=153",
        "17 yaşla ilişkilendirin: 17 yaşında ne olur, 34 yaşında ne olur (17×2)",
        "Sabırlı olun! 17 asal sayıdır, pratik gerektirir",
      ],
      18: [
        "9 veya 6 tablosunu kullanın: 18=2×9 veya 18=3×6",
        "9 tablosunu ikiye katlayın: 9×4=36, yani 18×4=72",
        "6 tablosunu üçe katlayın: 6×5=30, yani 18×5=90",
        "Reşit olma yaşıyla ilişkilendirin: 18, 36 (18×2), 54 (18×3)",
        "18'erli sayın: 18, 36, 54, 72, 90, 108, 126, 144, 162, 180",
      ],
      19: [
        "20-1 stratejisini her zaman kullanın: 19×n = 20n - n",
        "Örnek: 19×7 = 140-7 = 133. Çok basit ve etkili!",
        "10+9 ayrıştırma: 19×4 = 40+36 = 76",
        "En zor katları pratik edin: 19×7=133, 19×8=152, 19×9=171",
        "19 tablosunu geriye doğru öğrenin: 190, 171, 152, 133... zihinsel esneklik için",
      ],
      20: [
        "En kolay: 10 ile çarp, sonra ikiye katla",
        "Veya: Sonuna sıfır ekle, sonra ikiye katla (YANLIŞ yöntem! 7×20: 70 sonra ×2=140)",
        "Doğru yöntem: 7×10=70, 70×2=140 veya 7×2=14, sonuna 0 ekle: 140",
        "20'şerli hızlıca sayın: 20, 40, 60, 80, 100, 120, 140, 160, 180, 200",
        "Para ile pratik yapın: 20 lira banknotlarını sayın",
      ],
      21: [
        "20+1 stratejisini kullanın: 21×n = 20n + n",
        "3×7 ilişkisini kullanın: 3 tablosunu biliyor musunuz? 3×6=18, 7×6=42, yani 21×6=126",
        "En zor katları pratik edin: 21×7=147, 21×8=168, 21×9=189",
        "Yasal yaş ile ilişkilendirin: 21 yaşında neler değişir?",
        "21'erli sayın: 21, 42, 63, 84, 105, 126, 147, 168, 189, 210",
      ],
      22: [
        "11 tablosunu ezberleyin, sonra her sonucu ikiye katlayın",
        "Futbol takımı ile ilişkilendirin: 2 takım = 22 oyuncu",
        "En kolay katları önce: 22×5=110, 22×10=220",
        "22'şerli sayın: 22, 44, 66, 88, 110, 132, 154, 176, 198, 220",
        "İlk 4 sonuçtaki çift basamak desenini gözlemleyin: 22, 44, 66, 88",
      ],
      23: [
        "20+3 stratejisini her zaman kullanın: 23×6 = 120+18 = 138",
        "Veya 25-2 stratejisi: 23×4 = 100-8 = 92",
        "Kromozom sayısı ile ilişkilendirin: İnsanlarda 23 çift kromozom var",
        "En zor katları günlük pratik edin: 23×7=161, 23×8=184, 23×9=207",
        "23 asal sayıdır, bu yüzden sabırlı olun ve çok pratik yapın",
      ],
      24: [
        "Saat ilişkisini kullanın: 24 saat×3 gün = 72 saat",
        "Çoklu yöntemler deneyin: 24=2×12, 3×8, 4×6. Hangisi daha kolay?",
        "12 tablosunu biliyorsanız ikiye katlayın: 12×7=84, yani 24×7=168",
        "Düzine sayma: 24 = 2 düzine. 24×5 = 10 düzine = 120",
        "24'erli sayın: 24, 48, 72, 96, 120, 144, 168, 192, 216, 240",
      ],
      25: [
        "Çeyrek sistemi: 25 = 100÷4. Yani 25×4=100, 25×8=200",
        "Son iki basamak desenini ezberleyin: 25, 50, 75, 00 tekrar eder",
        "Para ile pratik: 25 kuruş paralar sayın",
        "5'in karesi olduğunu hatırlayın: 25=5×5",
        "Yüzde hesaplama: 25% = 1/4. Bu ilişkiyi kullanın",
      ],
      26: [
        "13 tablosunu biliyorsanız ikiye katlayın: 13×8=104, yani 26×8=208",
        "25+1 stratejisi: 26×4 = 100+4 = 104",
        "Alfabe ile ilişkilendirin: 26 harf var",
        "26'şarlı sayın: 26, 52, 78, 104, 130, 156, 182, 208, 234, 260",
        "En zor katları pratik edin: 26×7=182, 26×9=234",
      ],
      27: [
        "30-3 stratejisini kullanın: 27×n = 30n - 3n",
        "9 tablosunu biliyorsanız üçe katlayın: 9×6=54, yani 27×6=162",
        "3'ün küpü olduğunu hatırlayın: 27=3×3×3",
        "27'şerli sayın: 27, 54, 81, 108, 135, 162, 189, 216, 243, 270",
        "En zor katları pratik edin: 27×7=189, 27×8=216, 27×9=243",
      ],
      28: [
        "4×7 ilişkisini kullanın: 4 tablosunu 7 ile çarpın",
        "Veya 14'ü ikiye katlayın: 14×5=70, yani 28×5=140",
        "Şubat ayı ile ilişkilendirin: 28 gün (normal yıl)",
        "28'erli sayın: 28, 56, 84, 112, 140, 168, 196, 224, 252, 280",
        "En kullanışlı katları ezberleyin: 28×5=140, 28×7=196, 28×10=280",
      ],
      29: [
        "30-1 stratejisi MUKEMMELDİR: 29×n = 30n - n",
        "Örnek: 29×8 = 240-8 = 232. Çok kolay!",
        "Şubat artık yıl ile ilişkilendirin: 29 gün",
        "29'şarlı sayın: 29, 58, 87, 116, 145, 174, 203, 232, 261, 290",
        "En zor katları pratik edin: 29×7=203, 29×9=261",
      ],
      30: [
        "3×10 stratejisi: 10 ile çarp, sonra 3 ile çarp",
        "Örnek: 7×30 = 70×3 = 210 veya 7×3=21, sonuna 0 ekle: 210",
        "Yarım saat ile ilişkilendirin: 30 dakika",
        "Ay günleri: Birçok ay 30 gün (Nisan, Haziran, Eylül, Kasım)",
        "30'arli sayın: 30, 60, 90, 120, 150, 180, 210, 240, 270, 300",
      ],
      31: [
        "30+1 stratejisini kullanın: 31×n = 30n + n",
        "Örnek: 31×8 = 240 + 8 = 248. Çok basit ve etkili!",
        "Takvim ile ilişkilendirin: 31 gün maksimum ay uzunluğu",
        "31'erli sayın: 31, 62, 93, 124, 155, 186, 217, 248, 279, 310",
        "En zor katları pratik edin: 31×7=217, 31×9=279",
      ],
      32: [
        "İkiye katlama zinciri: 16'yı ikiye katlayın",
        "Örnek: 16×5=80, yani 32×5=160",
        "2'nin kuvveti olduğunu hatırlayın: 32=2×2×2×2×2",
        "32'şerli sayın: 32, 64, 96, 128, 160, 192, 224, 256, 288, 320",
        "Bilgisayar terimleriyle: 32 bit sistem",
      ],
      33: [
        "3×11 stratejisini kullanın: 11 tablosunu üçe katlayın",
        "Veya 3 tablosunu 11 ile çarpın: 3×7=21, 21×11=231, yani 33×7=231",
        "Repdigit desenini gözlemleyin: 33, 66, 99 (ilk üç sonuç)",
        "33'erli sayın: 33, 66, 99, 132, 165, 198, 231, 264, 297, 330",
        "En zor katları pratik edin: 33×7=231, 33×8=264, 33×9=297",
      ],
      34: [
        "17 tablosunu biliyorsanız ikiye katlayın: 17×6=102, yani 34×6=204",
        "35-1 stratejisi: 34×4 = 140-4 = 136",
        "Veya 30+4: 34×5 = 150+20 = 170",
        "34'erli sayın: 34, 68, 102, 136, 170, 204, 238, 272, 306, 340",
        "En kullanışlı katları ezberleyin: 34×5=170, 34×10=340",
      ],
      35: [
        "5×7 stratejisi: 5 tablosunu 7 ile çarpın veya tersi",
        "Örnek: 35×4 = 5×4×7 = 20×7 = 140",
        "Son basamak desenini kullanın: Hep 5 veya 0 ile biter",
        "35'erli sayın: 35, 70, 105, 140, 175, 210, 245, 280, 315, 350",
        "Zaman hesaplama: 35 dakika = yarım saat + 5 dakika",
      ],
      36: [
        "6'nın karesi olduğunu hatırlayın: 36=6×6",
        "Çoklu yöntemler: 36=4×9, 3×12, 2×18. Hangisi daha kolay?",
        "9 tablosunu biliyorsanız 4 ile çarpın: 9×7=63, 63×4=252, yani 36×7=252",
        "36'şarlı sayın: 36, 72, 108, 144, 180, 216, 252, 288, 324, 360",
        "Açı ölçümü: 360° tam tur, 36° onuna biri",
      ],
      37: [
        "40-3 stratejisini kullanın: 37×n = 40n - 3n",
        "Sihirli 111 ilişkisini ezberleyin: 37×3=111, 37×6=222, 37×9=333!",
        "Örnek: 37×8 = 320 - 24 = 296",
        "37'şerli sayın: 37, 74, 111, 148, 185, 222, 259, 296, 333, 370",
        "Repdigit desenini keşfedin: Her 3'ün katında ilginç sonuçlar",
      ],
      38: [
        "19 tablosunu biliyorsanız ikiye katlayın: 19×7=133, yani 38×7=266",
        "40-2 stratejisi: 38×6 = 240 - 12 = 228",
        "38'erli sayın: 38, 76, 114, 152, 190, 228, 266, 304, 342, 380",
        "En zor katları pratik edin: 38×7=266, 38×9=342",
        "Vücut ısısı ile ilişkilendirin: 38°C hafif ateş",
      ],
      39: [
        "40-1 stratejisi MUKEMMELDİR: 39×n = 40n - n",
        "Örnek: 39×7 = 280 - 7 = 273. Çok kolay!",
        "Veya 3×13: 13 tablosunu üçe katlayın",
        "39'şarlı sayın: 39, 78, 117, 156, 195, 234, 273, 312, 351, 390",
        "En zor katları pratik edin: 39×7=273, 39×8=312",
      ],
      40: [
        "4×10 stratejisi: 4 ile çarp, sonuna 0 ekle",
        "Örnek: 7×40: 7×4=28, sonuna 0 ekle: 280",
        "Çalışma haftası: 40 saat standart çalışma",
        "40'arlı sayın: 40, 80, 120, 160, 200, 240, 280, 320, 360, 400",
        "Yüzde hesaplama: 40% = 2/5",
      ],
      41: [
        "40+1 stratejisi MÜKEMMEL: 41×n = 40n + n",
        "Örnek: 41×7 = 280 + 7 = 287. Çok kolay!",
        "41'erli sayın: 41, 82, 123, 164, 205, 246, 287, 328, 369, 410",
        "En zor katları pratik edin: 41×7=287, 41×8=328",
        "Asal sayı olduğunu hatırlayın: Sadece 1 ve 41 ile bölünür",
      ],
      42: [
        "6×7 ilişkisini kullanın: Her iki tabloyu da pekiştirir",
        "42'şerli sayın: 42, 84, 126, 168, 210, 252, 294, 336, 378, 420",
        "Çoklu yöntemler: 42=6×7=2×21=3×14. Hangisi daha kolay?",
        "Hitchhiker's Guide referansı: 42 popüler kültürde ünlü!",
        "En zor katları pratik edin: 42×7=294, 42×8=336",
      ],
      43: [
        "40+3 veya 45-2 stratejilerini deneyin",
        "Örnek: 43×6 = 240+18 = 258 veya 270-12 = 258",
        "43'erli sayın: 43, 86, 129, 172, 215, 258, 301, 344, 387, 430",
        "En zor katları pratik edin: 43×7=301, 43×8=344",
        "Asal sayı: Yaratıcı stratejiler gerektiren özel bir sayı",
      ],
      44: [
        "11'in dört katı: 11 tablosunu dörde katlayın",
        "Örnek: 11×7=77, ×4=308, yani 44×7=308",
        "44'erli sayın: 44, 88, 132, 176, 220, 264, 308, 352, 396, 440",
        "Repdigit benzeri: 44, 88 çift basamak deseni gösterir",
        "En zor katları pratik edin: 44×7=308, 44×9=396",
      ],
      45: [
        "5×9 ilişkisi: Her iki tabloyu da kullanabilirsiniz",
        "Örnek: 45×7 = 9×7×5 = 63×5 = 315",
        "45'erli sayın: 45, 90, 135, 180, 225, 270, 315, 360, 405, 450",
        "Açı: 45° yarım dik açı, geometride önemli",
        "Zaman: 45 dakika = üç çeyrek saat (3/4 saat)",
      ],
      46: [
        "23'ün iki katı: 23 tablosunu ikiye katlayın",
        "Örnek: 23×7=161, ×2=322, yani 46×7=322",
        "45+1 veya 50-4 stratejileri: 46×5 = 225+5 = 230",
        "46'şarlı sayın: 46, 92, 138, 184, 230, 276, 322, 368, 414, 460",
        "Biyoloji: 46 kromozom (23 çift) insan DNA'sında",
      ],
      47: [
        "50-3 stratejisi MUKEMMELDİR: 47×n = 50n - 3n",
        "Örnek: 47×7 = 350 - 21 = 329. Çok kolay!",
        "47'şerli sayın: 47, 94, 141, 188, 235, 282, 329, 376, 423, 470",
        "En zor katları pratik edin: 47×7=329, 47×8=376",
        "Asal sayı: Özel zihinsel stratejiler gerektirir",
      ],
      48: [
        "Çoklu yöntemler: 48=6×8=4×12=3×16=2×24",
        "Örnek: 48×5 = 12×20 = 240",
        "48'erli sayın: 48, 96, 144, 192, 240, 288, 336, 384, 432, 480",
        "Zaman: 48 saat = 2 gün. 72 saat = 3 gün",
        "En zor katları pratik edin: 48×7=336, 48×9=432",
      ],
      49: [
        "7'nin karesi: 49=7×7. 7 tablosunu pekiştirir",
        "50-1 stratejisi ÇOK KOLAY: 49×n = 50n - n",
        "Örnek: 49×7 = 350 - 7 = 343. Basit!",
        "49'arlı sayın: 49, 98, 147, 196, 245, 294, 343, 392, 441, 490",
        "Kare sayı: 49=7² geometride alan hesaplamaları için",
      ],
      50: [
        "5×10 stratejisi: 5 ile çarp, sonuna 0 ekle",
        "Örnek: 8×50: 8×5=40, sonuna 0 ekle: 400",
        "100'ün yarısı: 50×7 = 350 (700÷2)",
        "50'şerli sayın: 50, 100, 150, 200, 250, 300, 350, 400, 450, 500",
        "Yüzde: 50% = 1/2, en önemli yüzde ilişkisi",
      ],
      51: [
        "50+1 stratejisi MÜKEMMEL: 51×n = 50n + n",
        "Örnek: 51×7 = 350 + 7 = 357. Çok kolay!",
        "51'erli sayın: 51, 102, 153, 204, 255, 306, 357, 408, 459, 510",
        "3×17 ilişkisi: 17 tablosunu üçe katlayın",
        "En zor katları pratik edin: 51×7=357, 51×8=408",
      ],
      52: [
        "4×13 ilişkisi: 13 tablosunu dörde katlayın",
        "Örnek: 13×7=91, ×4=364, yani 52×7=364",
        "52'şerli sayın: 52, 104, 156, 208, 260, 312, 364, 416, 468, 520",
        "Takvim: 52 hafta = 1 yıl. Yıllık hesaplamalar için",
        "İskambil: 52 kart ile oyun ve olasılık problemleri",
      ],
      53: [
        "50+3 stratejisi: 53×n = 50n + 3n",
        "Örnek: 53×6 = 300 + 18 = 318",
        "53'erli sayın: 53, 106, 159, 212, 265, 318, 371, 424, 477, 530",
        "En zor katları pratik edin: 53×7=371, 53×8=424",
        "Asal sayı: Yaratıcı hesaplama stratejileri gerektirir",
      ],
      54: [
        "6×9 ilişkisi: Her iki tabloyu da kullanabilirsiniz",
        "Örnek: 54×5 = 9×5×6 = 45×6 = 270",
        "54'erli sayın: 54, 108, 162, 216, 270, 324, 378, 432, 486, 540",
        "Çoklu yöntemler: 54=6×9=2×27=3×18",
        "En zor katları pratik edin: 54×7=378, 54×8=432",
      ],
      55: [
        "5×11 ilişkisi: Her iki tabloyu da pekiştirir",
        "Örnek: 55×4 = 11×4×5 = 44×5 = 220",
        "55'erli sayın: 55, 110, 165, 220, 275, 330, 385, 440, 495, 550",
        "Üçgensel sayı: 55 = 1+2+3+...+10, özel matematik özelliği",
        "En zor katları pratik edin: 55×7=385, 55×9=495",
      ],
      56: [
        "7×8 ilişkisi: EN ZOR çarpım! Her ikisini de pekiştirir",
        "Örnek: 56×5 = 7×5×8 = 35×8 = 280",
        "56'şarlı sayın: 56, 112, 168, 224, 280, 336, 392, 448, 504, 560",
        "Alternatif: 56=4×14=2×28. Daha kolay olan yolu seçin",
        "En zor katları pratik edin: 56×7=392, 56×9=504",
      ],
      57: [
        "60-3 stratejisi MÜKEMMEL: 57×n = 60n - 3n",
        "Örnek: 57×7 = 420 - 21 = 399. Çok kolay!",
        "57'şerli sayın: 57, 114, 171, 228, 285, 342, 399, 456, 513, 570",
        "3×19 ilişkisi: 19 tablosunu üçe katlayın",
        "En zor katları pratik edin: 57×7=399, 57×8=456",
      ],
      58: [
        "60-2 stratejisi: 58×n = 60n - 2n",
        "Örnek: 58×6 = 360 - 12 = 348",
        "58'erli sayın: 58, 116, 174, 232, 290, 348, 406, 464, 522, 580",
        "29'un iki katı: 29 tablosunu ikiye katlayın",
        "En zor katları pratik edin: 58×7=406, 58×9=522",
      ],
      59: [
        "60-1 stratejisi SÜPER KOLAY: 59×n = 60n - n",
        "Örnek: 59×7 = 420 - 7 = 413. MÜKEMMELDİR!",
        "59'arlı sayın: 59, 118, 177, 236, 295, 354, 413, 472, 531, 590",
        "Zaman: 59 dakika, 59 saniye - 60'a 1 eksik",
        "En zor katları pratik edin: 59×7=413, 59×8=472",
      ],
      60: [
        "6×10 stratejisi: 6 ile çarp, sonuna 0 ekle",
        "Örnek: 7×60: 7×6=42, sonuna 0 ekle: 420",
        "60'arlı sayın: 60, 120, 180, 240, 300, 360, 420, 480, 540, 600",
        "Zaman: 60 dakika=1 saat, 60 saniye=1 dakika",
        "Çoklu yöntemler: 60=6×10=5×12=4×15=3×20=2×30",
      ],
      61: [
        "60+1 stratejisi MÜKEMMEL: 61×n = 60n + n",
        "Örnek: 61×7 = 420 + 7 = 427. Çok kolay!",
        "61'erli sayın: 61, 122, 183, 244, 305, 366, 427, 488, 549, 610",
        "En zor katları pratik edin: 61×7=427, 61×8=488",
        "Asal sayı: Yaratıcı hesaplama stratejileri gerektirir",
      ],
      62: [
        "60+2 stratejisi: 62×n = 60n + 2n",
        "Örnek: 62×6 = 360 + 12 = 372",
        "62'şerli sayın: 62, 124, 186, 248, 310, 372, 434, 496, 558, 620",
        "31'in iki katı: 31 tablosunu ikiye katlayın",
        "En zor katları pratik edin: 62×7=434, 62×9=558",
      ],
      63: [
        "7×9 ilişkisi: Her iki tabloyu da pekiştirir",
        "Örnek: 63×5 = 9×5×7 = 45×7 = 315",
        "63'erli sayın: 63, 126, 189, 252, 315, 378, 441, 504, 567, 630",
        "Alternatif: 63=3×21. 21 tablosunu üçe katlayın",
        "En zor katları pratik edin: 63×7=441, 63×8=504",
      ],
      64: [
        "8'in karesi: 64=8×8=8². Ayrıca 2⁶",
        "Örnek: 64×5 = 8×5×8 = 40×8 = 320",
        "64'erli sayın: 64, 128, 192, 256, 320, 384, 448, 512, 576, 640",
        "Satranç: 8×8=64 kare, geometrik uygulama",
        "Bilgisayar: 64-bit mimari, teknoloji bağlamı",
      ],
      65: [
        "5×13 ilişkisi: Her iki tabloyu da kullanabilirsiniz",
        "Örnek: 65×4 = 13×4×5 = 52×5 = 260",
        "65'erli sayın: 65, 130, 195, 260, 325, 390, 455, 520, 585, 650",
        "60+5 veya 70-5 stratejileri kullanabilirsiniz",
        "En zor katları pratik edin: 65×7=455, 65×9=585",
      ],
      66: [
        "6×11 ilişkisi: Her iki tabloyu da pekiştirir",
        "Örnek: 66×5 = 11×5×6 = 55×6 = 330",
        "66'şarlı sayın: 66, 132, 198, 264, 330, 396, 462, 528, 594, 660",
        "Repdigit benzeri: 66 (6×11), 11 tablosunun deseni",
        "En zor katları pratik edin: 66×7=462, 66×9=594",
      ],
      67: [
        "70-3 stratejisi MÜKEMMEL: 67×n = 70n - 3n",
        "Örnek: 67×7 = 490 - 21 = 469. Çok kolay!",
        "67'şerli sayın: 67, 134, 201, 268, 335, 402, 469, 536, 603, 670",
        "En zor katları pratik edin: 67×7=469, 67×8=536",
        "Asal sayı: Özel zihinsel stratejiler gerektirir",
      ],
      68: [
        "70-2 stratejisi: 68×n = 70n - 2n",
        "Örnek: 68×6 = 420 - 12 = 408",
        "68'erli sayın: 68, 136, 204, 272, 340, 408, 476, 544, 612, 680",
        "4×17 ilişkisi: 17 tablosunu dörde katlayın",
        "En zor katları pratik edin: 68×7=476, 68×9=612",
      ],
      69: [
        "70-1 stratejisi SÜPER KOLAY: 69×n = 70n - n",
        "Örnek: 69×7 = 490 - 7 = 483. MÜKEMMELDİR!",
        "69'arlı sayın: 69, 138, 207, 276, 345, 414, 483, 552, 621, 690",
        "3×23 ilişkisi: 23 tablosunu üçe katlayın",
        "En zor katları pratik edin: 69×7=483, 69×8=552",
      ],
      70: [
        "7×10 stratejisi: 7 ile çarp, sonuna 0 ekle",
        "Örnek: 8×70: 8×7=56, sonuna 0 ekle: 560",
        "70'erli sayın: 70, 140, 210, 280, 350, 420, 490, 560, 630, 700",
        "7 tablosunu pekiştirir: Her sonuç 7'nin 10 katı",
        "Çoklu yöntemler: 70=7×10=5×14=2×35",
      ],
      71: [
        "70+1 stratejisi MÜKEMMEL: 71×n = 70n + n",
        "Örnek: 71×7 = 490 + 7 = 497. Çok kolay!",
        "71'erli sayın: 71, 142, 213, 284, 355, 426, 497, 568, 639, 710",
        "En zor katları pratik edin: 71×7=497, 71×8=568",
        "Asal sayı: Yaratıcı hesaplama stratejileri gerektirir",
      ],
      72: [
        "8×9 ilişkisi: Her iki tabloyu da pekiştirir",
        "Örnek: 72×5 = 9×5×8 = 45×8 = 360",
        "72'şerli sayın: 72, 144, 216, 288, 360, 432, 504, 576, 648, 720",
        "Çoklu yöntemler: 72=8×9=6×12=4×18=3×24",
        "Zaman: 72 saat = 3 gün. Pratik uygulama",
      ],
      73: [
        "70+3 stratejisi: 73×n = 70n + 3n",
        "Örnek: 73×5 = 350 + 15 = 365 (yıldaki gün sayısı!)",
        "73'erli sayın: 73, 146, 219, 292, 365, 438, 511, 584, 657, 730",
        "En zor katları pratik edin: 73×7=511, 73×8=584",
        "Asal sayı: 21. asal sayı, matematiksel merak",
      ],
      74: [
        "75-1 stratejisi: 74×n = 75n - n",
        "Örnek: 74×5 = 375 - 5 = 370",
        "74'erli sayın: 74, 148, 222, 296, 370, 444, 518, 592, 666, 740",
        "2×37 ilişkisi: 37 tablosunu ikiye katlayın",
        "En zor katları pratik edin: 74×7=518, 74×9=666",
      ],
      75: [
        "3×25 veya 5×15 ilişkileri: Çoklu yöntemler",
        "Örnek: 75×4 = 25×12 = 300",
        "75'erli sayın: 75, 150, 225, 300, 375, 450, 525, 600, 675, 750",
        "Yüzde: 75% = 3/4, önemli kesir ilişkisi",
        "En zor katları pratik edin: 75×7=525, 75×9=675",
      ],
      76: [
        "80-4 stratejisi: 76×n = 80n - 4n",
        "Örnek: 76×6 = 480 - 24 = 456",
        "76'şarlı sayın: 76, 152, 228, 304, 380, 456, 532, 608, 684, 760",
        "4×19 ilişkisi: 19 tablosunu dörde katlayın",
        "En zor katları pratik edin: 76×7=532, 76×9=684",
      ],
      77: [
        "7×11 ilişkisi: Her iki tabloyu da pekiştirir",
        "Örnek: 77×5 = 11×5×7 = 55×7 = 385",
        "77'şerli sayın: 77, 154, 231, 308, 385, 462, 539, 616, 693, 770",
        "Repdigit benzeri: 77 (7×11), özel desen",
        "En zor katları pratik edin: 77×7=539, 77×9=693",
      ],
      78: [
        "80-2 stratejisi: 78×n = 80n - 2n",
        "Örnek: 78×7 = 560 - 14 = 546",
        "78'erli sayın: 78, 156, 234, 312, 390, 468, 546, 624, 702, 780",
        "6×13 ilişkisi: Her iki tabloyu da kullanabilirsiniz",
        "En zor katları pratik edin: 78×7=546, 78×9=702",
      ],
      79: [
        "80-1 stratejisi SÜPER KOLAY: 79×n = 80n - n",
        "Örnek: 79×7 = 560 - 7 = 553. MÜKEMMELDİR!",
        "79'arlı sayın: 79, 158, 237, 316, 395, 474, 553, 632, 711, 790",
        "En zor katları pratik edin: 79×7=553, 79×8=632",
        "Asal sayı: 80'e 1 eksik, kolay hesaplama",
      ],
      80: [
        "8×10 stratejisi: 8 ile çarp, sonuna 0 ekle",
        "Örnek: 7×80: 7×8=56, sonuna 0 ekle: 560",
        "80'erli sayın: 80, 160, 240, 320, 400, 480, 560, 640, 720, 800",
        "8 tablosunu pekiştirir: Her sonuç 8'in 10 katı",
        "Çoklu yöntemler: 80=8×10=4×20=5×16=2×40",
      ],
      81: [
        "9'un karesi olduğunu kullanın: 81=9×9",
        "Örnek: 81×5 = (9×5)×9 = 45×9 = 405",
        "80+1 stratejisi: 81×n = 80n + n. Örnek: 81×7 = 560+7 = 567",
        "81'erli sayın: 81, 162, 243, 324, 405, 486, 567, 648, 729, 810",
        "En zor katları pratik edin: 81×7=567, 81×8=648, 81×9=729",
      ],
      82: [
        "80+2 stratejisi: 82×n = 80n + 2n",
        "Örnek: 82×6 = 480 + 12 = 492",
        "82'şerli sayın: 82, 164, 246, 328, 410, 492, 574, 656, 738, 820",
        "2×41 ilişkisi: 41 tablosunu ikiye katlayın",
        "En zor katları pratik edin: 82×7=574, 82×9=738",
      ],
      83: [
        "85-2 veya 80+3 stratejisi kullanın",
        "Örnek: 83×6 = 510-12 = 498 veya 480+18 = 498",
        "83'erli sayın: 83, 166, 249, 332, 415, 498, 581, 664, 747, 830",
        "Asal sayı: Yaratıcı hesaplama stratejileri gerektirir",
        "En zor katları pratik edin: 83×7=581, 83×8=664, 83×9=747",
      ],
      84: [
        "7×12 ilişkisi: Her iki tabloyu da kullanabilirsiniz",
        "Örnek: 84×5 = 12×5×7 = 60×7 = 420",
        "84'erli sayın: 84, 168, 252, 336, 420, 504, 588, 672, 756, 840",
        "Çoklu yöntemler: 84=7×12=6×14=4×21=3×28",
        "En zor katları pratik edin: 84×7=588, 84×9=756",
      ],
      85: [
        "5×17 ilişkisi: Hem 5 hem 17 tablolarını kullanabilirsiniz",
        "Örnek: 85×4 = 17×4×5 = 68×5 = 340",
        "85'erli sayın: 85, 170, 255, 340, 425, 510, 595, 680, 765, 850",
        "Son basamak: Hep 5 veya 0 ile biter",
        "90-5 veya 80+5 stratejileri: 85×6 = 540-30 = 510",
      ],
      86: [
        "90-4 stratejisi: 86×n = 90n - 4n",
        "Örnek: 86×6 = 540 - 24 = 516",
        "86'şarlı sayın: 86, 172, 258, 344, 430, 516, 602, 688, 774, 860",
        "2×43 ilişkisi: 43 tablosunu ikiye katlayın",
        "En zor katları pratik edin: 86×7=602, 86×9=774",
      ],
      87: [
        "90-3 stratejisi MÜKEMMEL: 87×n = 90n - 3n",
        "Örnek: 87×7 = 630 - 21 = 609. Çok kolay!",
        "87'şerli sayın: 87, 174, 261, 348, 435, 522, 609, 696, 783, 870",
        "3×29 ilişkisi: 29 tablosunu üçe katlayın",
        "En zor katları pratik edin: 87×7=609, 87×8=696, 87×9=783",
      ],
      88: [
        "8×11 ilişkisi: Her iki tabloyu da kullanabilirsiniz",
        "Örnek: 88×5 = 11×5×8 = 55×8 = 440",
        "88'erli sayın: 88, 176, 264, 352, 440, 528, 616, 704, 792, 880",
        "Repdigit özelliği: Görsel tanıma kolaylığı (88)",
        "Çoklu yöntemler: 88=8×11=4×22=2×44",
      ],
      89: [
        "90-1 stratejisi SÜPER KOLAY: 89×n = 90n - n",
        "Örnek: 89×7 = 630 - 7 = 623. MÜKEMMELDİR!",
        "89'arlı sayın: 89, 178, 267, 356, 445, 534, 623, 712, 801, 890",
        "En zor katları pratik edin: 89×7=623, 89×8=712, 89×9=801",
        "Asal sayı: 90-1 stratejisi en pratik yöntemdir",
      ],
      90: [
        "9×10 stratejisi: 9 ile çarp, sonuna 0 ekle",
        "Örnek: 7×90: 7×9=63, sonuna 0 ekle: 630",
        "90'arlı sayın: 90, 180, 270, 360, 450, 540, 630, 720, 810, 900",
        "9 tablosunu pekiştirir: Her sonuç 9'un 10 katı",
        "Çoklu yöntemler: 90=9×10=3×30=5×18=6×15",
      ],
      91: [
        "7×13 ilişkisi: Her iki tabloyu da kullanabilirsiniz",
        "Örnek: 91×5 = 13×5×7 = 65×7 = 455",
        "90+1 stratejisi: 91×n = 90n + n. Örnek: 91×7 = 630+7 = 637",
        "91'erli sayın: 91, 182, 273, 364, 455, 546, 637, 728, 819, 910",
        "En zor katları pratik edin: 91×7=637, 91×8=728, 91×9=819",
      ],
      92: [
        "90+2 veya 100-8 stratejisi kullanın",
        "Örnek: 92×6 = 480+12 = 492 veya 600-48 = 552",
        "92'şerli sayın: 92, 184, 276, 368, 460, 552, 644, 736, 828, 920",
        "4×23 ilişkisi: 23 tablosunu dörde katlayın",
        "En zor katları pratik edin: 92×7=644, 92×9=828",
      ],
      93: [
        "90+3 stratejisi: 93×n = 90n + 3n",
        "Örnek: 93×7 = 630 + 21 = 651",
        "93'erli sayın: 93, 186, 279, 372, 465, 558, 651, 744, 837, 930",
        "3×31 ilişkisi: 31 tablosunu üçe katlayın",
        "En zor katları pratik edin: 93×7=651, 93×8=744, 93×9=837",
      ],
      94: [
        "100-6 stratejisi MÜKEMMEL: 94×n = 100n - 6n",
        "Örnek: 94×7 = 700 - 42 = 658. Çok kolay!",
        "94'erli sayın: 94, 188, 282, 376, 470, 564, 658, 752, 846, 940",
        "2×47 ilişkisi: 47 tablosunu ikiye katlayın",
        "En zor katları pratik edin: 94×7=658, 94×8=752, 94×9=846",
      ],
      95: [
        "5×19 ilişkisi: Hem 5 hem 19 tablolarını kullanabilirsiniz",
        "Örnek: 95×4 = 19×4×5 = 76×5 = 380",
        "95'erli sayın: 95, 190, 285, 380, 475, 570, 665, 760, 855, 950",
        "Son basamak: Hep 5 veya 0 ile biter",
        "100-5 stratejisi: 95×6 = 600-30 = 570. Çok pratik!",
      ],
      96: [
        "8×12 ilişkisi: Her iki tabloyu da kullanabilirsiniz",
        "Örnek: 96×5 = 12×5×8 = 60×8 = 480",
        "96'şarlı sayın: 96, 192, 288, 384, 480, 576, 672, 768, 864, 960",
        "Çoklu yöntemler: 96=8×12=6×16=4×24=3×32",
        "En zor katları pratik edin: 96×7=672, 96×9=864",
      ],
      97: [
        "100-3 stratejisi SÜPER KOLAY: 97×n = 100n - 3n",
        "Örnek: 97×7 = 700 - 21 = 679. MÜKEMMELDİR!",
        "97'şerli sayın: 97, 194, 291, 388, 485, 582, 679, 776, 873, 970",
        "En zor katları pratik edin: 97×7=679, 97×8=776, 97×9=873",
        "Asal sayı: 100-3 stratejisi en pratik yöntemdir",
      ],
      98: [
        "100-2 stratejisi ÇOK KOLAY: 98×n = 100n - 2n",
        "Örnek: 98×7 = 700 - 14 = 686. Mükemmel!",
        "98'erli sayın: 98, 196, 294, 392, 490, 588, 686, 784, 882, 980",
        "2×49 ilişkisi: 49 tablosunu ikiye katlayın",
        "En zor katları pratik edin: 98×7=686, 98×8=784, 98×9=882",
      ],
      99: [
        "100-1 stratejisi EN KOLAY: 99×n = 100n - n",
        "Örnek: 99×7 = 700 - 7 = 693. MÜKEMMELDİR!",
        "99'arlı sayın: 99, 198, 297, 396, 495, 594, 693, 792, 891, 990",
        "9×11 ilişkisi: Her iki tabloyu da kullanabilirsiniz",
        "Repdigit deseni: 99 görsel tanıma kolaylığı sağlar",
      ],
      100: [
        "EN KOLAY TABLO! Sonuna iki sıfır ekle",
        "Örnek: 7×100 = 700. Sadece 7'nin sonuna 00 ekle!",
        "100'erli sayın: 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000",
        "10×10 ilişkisi: 10 tablosunun 10 katı",
        "Yüzde hesaplamaları için temeldir: 100%=tam, her şeyin temelidir!",
      ],
    }
    return strategies[number] || [
      `Yüksek sesle ${number}'erli saymayı pratik edin`,
      "Tabloyu bir hafta boyunca her gün yazın",
      "Kendinizi rastgele test etmek için flash kartları kullanın",
      "Bir seferde uzun çalışmak yerine her gün 5-10 dakika pratik yapın",
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
                  Tabla del {number}
                </h2>
                
                {/* Print and Download Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={handlePrint}
                    className="group flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-white border-2 border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all text-xs sm:text-sm font-semibold"
                    title="Imprimir"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    <span className="hidden sm:inline">Imprimir</span>
                  </button>
                  
                  <button
                    onClick={handleDownload}
                    className="group flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg"
                    title="Descargar"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span className="hidden sm:inline">Descargar</span>
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
            Patrones en la Tabla del {number}
          </h2>
          
          <p className="text-sm sm:text-base text-slate-700 mb-4 sm:mb-6 leading-relaxed">
            Entender los patrones hace que el aprendizaje sea más fácil y divertido. La tabla del {number} tiene 
            hermosos patrones que pueden ayudarte a recordarla sin memorizar de memoria.
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
            Cómo Practicar la Tabla del {number}
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            Aprender las tablas de multiplicar requiere práctica consistente con las estrategias correctas. 
            Aquí hay métodos comprobados para dominar específicamente la tabla del {number}:
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
            Errores Comunes al Aprender la Tabla del {number}
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            Muchos estudiantes cometen errores similares al aprender esta tabla. Ser consciente de estos errores comunes 
            te ayudará a evitarlos y aprender de manera más efectiva.
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
                      <span className="font-semibold text-green-600">Solución:</span> {item.solution}
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
            Tablas de Multiplicar Relacionadas
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            La tabla del {number} es parte de un sistema de aprendizaje más amplio. 
            Puedes explorar otras tablas en el mismo rango o pasar al siguiente número lógico.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {number > 1 && (
              <Link
                href={`/tabla/${number - 1}`}
                className="block bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs sm:text-sm text-slate-600 mb-1">← Número Anterior</div>
                    <div className="text-lg sm:text-2xl font-bold text-slate-900">
                      Tabla del {number - 1}
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
                    <div className="text-xs sm:text-sm text-slate-600 mb-1">Siguiente Número →</div>
                    <div className="text-lg sm:text-2xl font-bold text-slate-900">
                      Tabla del {number + 1}
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
                  <div className="text-xs sm:text-sm text-slate-600 mb-1">↑ Rango Superior</div>
                  <div className="text-lg sm:text-2xl font-bold text-slate-900">
                    Tablas del {rangeStart} al {rangeEnd}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 sm:mt-2">
                    Explora todas las tablas de multiplicar en este rango con herramientas de práctica y juegos
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
