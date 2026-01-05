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
              <title>${number} Çarpım Tablosu</title>
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
              <h1>${number} Çarpım Tablosu</h1>
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
        ctx.fillText(number + ' Çarpım Tablosu', 300, 60)

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
            link.download = number + '-carpim-tablosu.png'
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
      1: "1 ile çarpmak, matematikte özel bir durumdur. Herhangi bir sayıyı 1 ile çarptığınızda, sonuç her zaman aynı sayıdır. Buna çarpmanın özdeşlik özelliği denir. Bunu 'bir şeyden kaç grubum var?' diye sormak gibi düşünün. Sadece 1 grubunuz olduğunda, tam olarak başladığınız şeye sahipsiniz.",
      2: "2 ile çarpmak, bir sayıyı ikiye katlamak demektir. Bir şeyi 2 ile çarptığınızda, onu kendi üzerine ekliyorsunuz. Bu, en pratik çarpma işlemlerinden biridir çünkü gerçek hayatta sıklıkla şeyleri ikiye katlamaya ihtiyaç duyarız—ayakkabı çiftlerini saymak, bisiklet tekerlekleri ya da bir şeyi iki kişi arasında eşit olarak bölmek gibi.",
      3: "3 ile çarpmak, bir sayıyı üç kez almak demektir. Bunu aynı sayıyı kendine üç kez eklemek olarak düşünebilirsiniz. Bu tablo, üçgenler, üçlüler ve üçerli gelen her şeyi anlamak için gereklidir.",
      4: "4 ile çarpmak, iki kez ikiye katlamak gibidir. 4 = 2 × 2 olduğundan, bir sayıyı ikiye katlayabilir ve sonra sonucu tekrar ikiye katlayabilirsiniz. Bu, 2'leri zaten biliyorsanız 4 çarpım tablosunu öğrenmeyi kolaylaştırır. 4 sayısı geometride (karelerin 4 kenarı vardır) ve zamanı ölçmede (bir saatte 4 çeyrek) sıklıkla görülür.",
      5: "5 ile çarpmak, matematikteki en güzel desenlerden birini oluşturur. 5'in tüm katları 0 veya 5 ile biter, bu da bu tabloyu çok öngörülebilir yapar. Bu, para saymak (5 kuruş, 5 lira) ve saati söylemek (5 dakikalık aralıklar) için son derece kullanışlıdır.",
      6: "6 ile çarpmak, bir sayının altı grubunu almak demektir. 6, ilk 'gerçek' çarpım tablosudur çünkü 2 veya 3'ün basit katları değildir. Ancak, 6 = 2 × 3 olduğundan, bir sayıyı 2 ile çarpıp sonra 3 ile çarparak (veya tersi) 6 ile çarpma yapabilirsiniz. 6 sayısı doğada (arı peteği hücreleri) ve günlük hayatta (yumurta paketleri, zar yüzleri) sıkça görülür.",
      7: "7 ile çarpmak, genellikle öğrencilerin en zorlandığı tablolardan biridir çünkü 7 asal sayıdır ve diğer basit çarpım tablolarından türetilemiyor. Ancak, 7'nin tüm katlarında güzel desenler vardır ve pratikle öğrenilebilir. 7, haftanın günleri, dünya kıtaları ve birçok kültürel referansta önemli bir sayıdır.",
      8: "8 ile çarpmak, üç kez ikiye katlamak gibidir (8 = 2 × 2 × 2). Bir sayıyı ikiye katlayın, sonucu tekrar ikiye katlayın, ve bir kez daha ikiye katlayın—8 ile çarpmış olursunuz. Bu tablo, 2 ve 4 tablolarını iyi biliyorsanız daha kolay öğrenilir. 8, geometride (sekizgen) ve müzikte (oktav) önemli bir sayıdır.",
      9: "9 ile çarpmak, matematikteki en büyüleyici desenlerden birine sahiptir. 9'un tüm katlarının basamakları toplandığında sonuç her zaman 9'a bölünebilir. Ayrıca, 9 × n'in onlar basamağı her zaman n-1'dir. Bu tablo, parmak hilesi ile de öğrenilebilir. 9, 10'dan sadece 1 eksik olduğu için, 10 tablosunu kullanarak da hesaplanabilir.",
      10: "10 ile çarpmak, en kolay çarpım tablolarından biridir. Herhangi bir sayıyı 10 ile çarptığınızda, sadece sonuna bir sıfır eklersiniz. Bu, ondalık sistemimizin temelini oluşturur. 10 ile çarpmayı öğrenmek, öğrencilere yer değeri kavramını ve büyük sayılarla çalışmayı öğretir. 10 tablosu, tüm diğer çarpım tablolarını anlamak için bir referans noktasıdır.",
    }
    return meanings[number] || `${number} ile çarpmak, ${number} sayısını tekrar tekrar ekleme demektir. Her çarptığınızda, ${number}'lik grupları sayıyorsunuz.`
  }

  const getWhyImportant = () => {
    const importance: { [key: number]: string } = {
      1: "1'in çarpım tablosu, tüm çarpma işlemlerinin temelidir. Öğrencilere sayıların bir kimliği olduğunu öğretir—1 ile çarpıldıklarında kendileri olarak kalırlar. Bu kavram, daha sonra cebirsel özellikleri anlamak için çok önemlidir. Basit görünse de, bu tabloyu öğrenmek güven oluşturur ve çarpmanın düzenli ve öngörülebilir olduğu kalıbını kurar.",
      2: "2 çarpım tablosu, genellikle öğrencilerin öğrendiği ilk gerçek çarpım tablosudur ve bunun iyi bir nedeni vardır. İkiye katlama, çocukların günlük olarak karşılaştığı doğal bir kavramdır. Bu tabloyu öğrenmek, zihinsel hesaplamayı çok daha hızlı hale getirir ve öğrencileri çift sayılara, kesirlere (yarılar) ve temel bölmeye hazırlar. Birçok öğrenci bunu en kolay tablo olarak bulur, bu da daha zor tablolar için güven oluşturur.",
      3: "3'ün çarpım tablosu, kolay ve zorlu tablolar arasındaki boşluğu kapatır. Öğrencilerin basit ikiye katlamanın ötesine geçmesini ve yeni örüntüleri tanımaya başlamasını gerektirir. Bu tablo, üçerli sayma, üçgen şekilleri anlama ve zamanla çalışma (günde üç dönem) gibi gerçek dünya bağlamlarında sürekli görülür. 3 çarpım tablosunu öğrenen öğrenciler, soyut saymayı yapabileceklerini gösterirler.",
      4: "4 çarpım tablosunu öğrenmek, öğrencilerin çift sayıları ve geometrik düşünmeyi anlamalarını güçlendirir. 4, 2'nin iki katı olduğundan, öğrenciler 2 çarpım tablosunu bir basamak taşı olarak kullanabilirler, bu da matematiksel verimliliği öğretir. Bu tablo, kareleri, alan hesaplamalarını ve çeyrek bölmeleri anlamak için gereklidir. Ayrıca sandalye ayaklarını veya araba tekerleklerini saymak gibi günlük durumlarda sıkça kullanılır.",
      5: "5'in çarpım tablosu, en pratik ve örüntü açısından zengin tablolardan biridir. Öğrenciler bunu severler çünkü her cevap 0 veya 5 ile biter, bu da onu son derece öngörülebilir yapar. Bu tablo doğrudan parayla (beşerli sayma), saati söylemekle (5 dakikalık aralıklar) ve ölçüm sistemleriyle bağlantılıdır. 5 çarpım tablosunu öğrenmek öğrencilere güven verir ve matematiğin güzel, tutarlı örüntüleri olduğunu gösterir.",
      6: "6 çarpım tablosunu öğrenmek, öğrencilerin daha karmaşık çarpma işlemlerine geçmesini sağlar. 6'nın hem 2'nin hem de 3'ün katı olması, öğrencilere çarpmanın çarpanlara ayrılma özelliğini gösterir. Bu tablo, günlük hayatta sürekli görülür—yumurta kutularını saymak, zar oyunları, altılı paketler. 6 tablosunu öğrenmek, öğrencilere daha büyük sayılarla çalışma güveni verir.",
      7: "7 çarpım tablosu, öğrencilerin ezber becerilerini ve desen tanıma yeteneklerini gerçekten test eder. 7 asal bir sayı olduğundan, diğer tablolardan kolayca türetilemiyor, bu da onu zor ama ödüllendirici bir öğrenme deneyimi yapıyor. 7 tablosunu öğrenmek, öğrencilere zorlukların üstesinden gelme ve yeni stratejiler geliştirme fırsatı verir. Haftanın günlerini saymaktan takvim hesaplamalarına kadar birçok yerde kullanılır.",
      8: "8 çarpım tablosunu öğrenmek, öğrencilerin ikiye katlama stratejilerini pekiştirmesine yardımcı olur. 8 = 2 × 2 × 2 olduğundan, öğrenciler 2 ve 4 tablolarını kullanarak 8 tablosunu öğrenebilirler. Bu tablo, alan hesaplamalarında (8 kenarlı şekiller), müzik teorisinde (oktavlar) ve bilgisayar biliminde (8 bit = 1 byte) önemlidir. 8 tablosunu öğrenmek, matematiksel düşünme becerilerini geliştirir.",
      9: "9 çarpım tablosu, en büyüleyici matematiksel desenlerden birine sahiptir. Basamak toplama kuralı ve parmak hilesi, öğrencilere matematiğin sihirli yönünü gösterir. 9 tablosunu öğrenmek sadece ezberleme değil, desen tanımayı ve matematiksel ilişkileri anlamayı öğretir. Bu tablo, zihinden hesaplama becerilerini geliştirmek ve matematiksel güven oluşturmak için mükemmeldir.",
      10: "10 çarpım tablosu, yer değeri kavramını öğretmek için temeldir. Öğrenciler 10 ile çarpmayı öğrendiklerinde, ondalık sistemimizin nasıl çalıştığını anlamaya başlarlar. Bu tablo, para hesaplamaları, ölçüm birimleri arası dönüşümler ve büyük sayılarla çalışma için hayati önem taşır. 10 tablosunu öğrenmek, tüm diğer çarpım tablolarını anlamak için sağlam bir temel oluşturur ve zihinsel matematik becerilerini büyük ölçüde geliştirir.",
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
                <span className="text-slate-900">Çarpım Tablosu</span>
              </h1>
              <span className="text-4xl sm:text-5xl md:text-6xl animate-bounce" style={{ animationDelay: '0.2s' }}>🎨</span>
            </div>
            
            {/* Fun Stats Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-2xl mx-auto mt-6 sm:mt-8 mb-4 sm:mb-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border-2 border-blue-100">
                <div className="text-2xl sm:text-3xl mb-1">📊</div>
                <div className="text-xl sm:text-2xl font-bold text-blue-600">10</div>
                <div className="text-xs text-slate-600">İşlem</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border-2 border-indigo-100">
                <div className="text-2xl sm:text-3xl mb-1">🎮</div>
                <div className="text-xl sm:text-2xl font-bold text-indigo-600">3</div>
                <div className="text-xs text-slate-600">Oyun</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border-2 border-purple-100">
                <div className="text-2xl sm:text-3xl mb-1">📝</div>
                <div className="text-xl sm:text-2xl font-bold text-purple-600">∞</div>
                <div className="text-xs text-slate-600">Pratik</div>
              </div>
            </div>
          </div>
          
          {/* Description with Better Typography */}
          <div className="max-w-3xl mx-auto space-y-4 text-center px-4">
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
              Bu sayfa, <span className="font-semibold text-yellow-200">{number} çarpım tablosunu</span> öğrenmenize ve anlamanıza yardımcı olacaktır. 
              {number}'in çarpmada nasıl davrandığını keşfedecek, 
              <span className="font-semibold text-yellow-200"> desenlerini görecek</span> ve 
              ustalaşmak için <span className="font-semibold text-yellow-200">pratik yollar</span> öğreneceksiniz.
            </p>
            
            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-4">
              <a 
                href="#practice"
                className="group inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-indigo-600 font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 text-sm sm:text-base"
              >
                <span className="text-lg sm:text-xl">🎯</span>
                <span>Pratik Yap</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="#games"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur-sm text-purple-600 font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border-2 border-white/50 text-sm sm:text-base"
              >
                <span className="text-lg sm:text-xl">🎮</span>
                <span>Oyunları Keşfet</span>
              </a>
              <a 
                href="#worksheets"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur-sm text-green-600 font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border-2 border-white/50 text-sm sm:text-base"
              >
                <span className="text-lg sm:text-xl">📝</span>
                <span className="hidden sm:inline">Alıştırma İndir</span>
                <span className="sm:hidden">İndir</span>
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
              {number} Çarpım Tablosu Neyi Kapsar?
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-sm sm:text-base text-slate-700 mb-6 leading-relaxed text-center max-w-2xl mx-auto">
            {number} çarpım tablosu, {number} sayısının 1'den 10'a kadar olan tüm sayılarla çarpımını kapsar. 
            Bu size günlük hayatta ve ileri matematik konularında çok yardımcı olacak <span className="font-bold text-indigo-600">10 temel işlemi</span> öğretir.
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
                {number} çarpım tablosunda <span className="font-bold text-indigo-600">10 çarpma işlemi</span> var. 
                Bu tablodaki desenleri anlayarak, bu işlemleri kolayca ezberleyebilir ve hızlı bir şekilde hesaplayabilirsiniz!
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
                  {number} Sayısı Çarpmada Ne Anlama Gelir?
                </h2>
                
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4 sm:mb-6">
                  {getNumberMeaning()}
                </p>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-5 border-2 border-blue-100">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-3xl">💡</span>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1 sm:mb-2">Basit Açıklama</h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {number} × 4 gördüğünüzde şunu düşünün: "4 grubum var ve her grupta {number} öğe var." 
                        Yani {number} × 4 = {number} + {number} + {number} + {number} = {number * 4}.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                  {number} Çarpım Tablosunu Öğrenmek Neden Önemlidir
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
                  {number} Çarpım Tablosu
                </h2>
                
                {/* Print and Download Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={handlePrint}
                    className="group flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-white border-2 border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all text-xs sm:text-sm font-semibold"
                    title="Yazdır"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    <span className="hidden sm:inline">Yazdır</span>
                  </button>
                  
                  <button
                    onClick={handleDownload}
                    className="group flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg"
                    title="İndir"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span className="hidden sm:inline">İndir</span>
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
            {number} Çarpım Tablosundaki Desenler
          </h2>
          
          <p className="text-sm sm:text-base text-slate-700 mb-4 sm:mb-6 leading-relaxed">
            Desenleri anlamak öğrenmeyi daha kolay ve eğlenceli hale getirir. {number} çarpım tablosu, 
            salt ezberleme yapmadan hatırlamanıza yardımcı olabilecek güzel desenlere sahiptir.
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
            {number} Çarpım Tablosu Nasıl Pratik Yapılır
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            Çarpım tablolarını öğrenmek doğru stratejilerle tutarlı pratik gerektirir. 
            İşte özellikle {number} çarpım tablosunda ustalaşmak için kanıtlanmış yöntemler:
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
            {number} Tablosunu Öğrenirken Yapılan Yaygın Hatalar
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            Birçok öğrenci bu tabloyu öğrenirken benzer hatalar yapar. Bu yaygın hataların 
            farkında olmak, onlardan kaçınmanıza ve daha verimli öğrenmenize yardımcı olacaktır.
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
                      <span className="font-semibold text-green-600">Çözüm:</span> {item.solution}
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
            İlgili Çarpım Tabloları
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            {number} çarpım tablosu daha büyük bir öğrenme sisteminin parçasıdır. 
            Aynı aralıktaki diğer tabloları keşfedebilir veya bir sonraki mantıksal sayıya geçebilirsiniz.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {number > 1 && (
              <Link
                href={`/number/${number - 1}`}
                className="block bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs sm:text-sm text-slate-600 mb-1">← Önceki Sayı</div>
                    <div className="text-lg sm:text-2xl font-bold text-slate-900">
                      {number - 1} Çarpım Tablosu
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
                href={`/number/${number + 1}`}
                className="block bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 sm:p-6 border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs sm:text-sm text-slate-600 mb-1">Sonraki Sayı →</div>
                    <div className="text-lg sm:text-2xl font-bold text-slate-900">
                      {number + 1} Çarpım Tablosu
                    </div>
                  </div>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            )}
            
            <Link
              href={`/${rangeStart}-to-${rangeEnd}`}
              className="block bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-4 sm:p-6 border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all group sm:col-span-2"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-sm text-slate-600 mb-1">↑ Üst Aralık</div>
                  <div className="text-lg sm:text-2xl font-bold text-slate-900">
                    {rangeStart}'den {rangeEnd}'a Çarpım Tabloları
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 sm:mt-2">
                    Bu aralıktaki tüm çarpım tablolarını pratik araçları ve oyunlarla keşfedin
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
