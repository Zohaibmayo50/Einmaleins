import RangePage from '../components/RangePage'

export default function MultiplicationTable1to10() {
  return (
    <RangePage
      rangeStart={1}
      rangeEnd={10}
      nextRangeUrl="/11-to-20"
      difficultyLevel="beginner"
      difficultyColor="from-blue-50 to-indigo-50"
    />
  )
}
          
          <p className="text-lg text-slate-700 mb-4 leading-relaxed">
            1'den 10'a kadar olan çarpım tablosu, matematik öğreniminin en temel ve en önemli 
            yapı taşlarından biridir. Bu aralık, çarpma işleminin mantığını kavramak ve sayılar 
            arasındaki ilişkileri anlamak isteyen her öğrenci için başlangıç noktasıdır.
          </p>
          
          <p className="text-lg text-slate-700 leading-relaxed">
            İlkokul çağındaki öğrenciler için tasarlanan bu aralık, çarpma işleminin temellerini 
            sağlam bir şekilde oturtmayı hedefler. Buradan öğrenilen bilgiler, matematiksel düşünme 
            becerisinin gelişmesinde kritik rol oynar.
          </p>
        </div>
      </section>

      {/* Learning Context */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            1'den 10'a Çarpım Tablosu Neyi Kapsar?
          </h2>
          
          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            Bu aralık, 1'den 10'a kadar her sayının kendi içindeki çarpım tablosunu içerir. 
            Toplam 10 farklı sayının, 1'den 10'a kadar olan sayılarla çarpımlarını öğreneceksiniz.
          </p>
          
          <div className="bg-blue-50 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Kapsanan Sayılar:</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-center text-slate-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                1 çarpım tablosu (en temel)
              </li>
              <li className="flex items-center text-slate-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                2 çarpım tablosu (ikiye katlama)
              </li>
              <li className="flex items-center text-slate-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                3 çarpım tablosu (üçerli sayma)
              </li>
              <li className="flex items-center text-slate-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                4 çarpım tablosu (dört temel işlem)
              </li>
              <li className="flex items-center text-slate-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                5 çarpım tablosu (beşer atlama)
              </li>
              <li className="flex items-center text-slate-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                6 çarpım tablosu (orta seviye)
              </li>
              <li className="flex items-center text-slate-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                7 çarpım tablosu (ilk zorlu sayı)
              </li>
              <li className="flex items-center text-slate-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                8 çarpım tablosu (iki katları)
              </li>
              <li className="flex items-center text-slate-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                9 çarpım tablosu (dokuzların özel örüntüsü)
              </li>
              <li className="flex items-center text-slate-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                10 çarpım tablosu (ondalık sistem)
              </li>
            </ul>
          </div>
          
          <p className="text-lg text-slate-700 leading-relaxed">
            Öğrenciler bu aralıkta toplam 100 çarpma işlemini (her sayı için 10 işlem) öğrenirler. 
            Ancak simetri özelliği sayesinde, gerçekte ezberlemeleri gereken işlem sayısı bunun 
            yarısından azdır (örneğin 3×7 = 7×3).
          </p>
        </div>
      </section>

      {/* Difficulty & Progression */}
      <section className="section-container bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Bu Aralık Neden Çarpma Öğrenimi İçin Önemlidir?
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                🎯 Başlangıç Seviyesi (Beginner)
              </h3>
              <p className="text-slate-700 leading-relaxed">
                1'den 10'a kadar olan aralık, çarpma işlemine yeni başlayan öğrenciler için 
                idealdir. Sayılar küçük olduğu için öğrenciler sonuçları daha kolay anlayabilir 
                ve doğrulayabilir. Bu, özgüven kazanmak için kritik öneme sahiptir.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                🧠 Bilişsel Yük (Cognitive Load)
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Bu aralık, çocukların kısa süreli hafızalarına yük bindirmeden öğrenmelerine 
                olanak tanır. 1, 2, 5 ve 10 gibi kolay sayılarla başlayıp, kademeli olarak 
                7, 8 ve 9 gibi daha zorlu sayılara geçiş yapabilirler.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                📈 Sonraki Adıma Hazırlık
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Bu temel aralığı ezberleyen öğrenciler, 11-20 aralığına geçtiklerinde 
                kendilerini çok daha hazır hissederler. Örüntü tanıma becerileri gelişmiş, 
                çarpma mantığı oturtulmuş ve pratik yapma alışkanlıkları kazanılmıştır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Patterns & Observations */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            1'den 10'a Çarpım Tablosundaki Örüntüler
          </h2>
          
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Çarpım tablosunu ezberlemeye çalışmak yerine, içindeki örüntüleri anlamak 
            öğrenme sürecini hem hızlandırır hem de kalıcı hale getirir. İşte bu aralıktaki 
            önemli örüntüler:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🔄</span>
                Simetri (Değişme Özelliği)
              </h3>
              <p className="text-slate-700 mb-3">
                3 × 7 = 7 × 3 = 21. Bu özellik, öğrenilmesi gereken işlem sayısını 
                neredeyse yarıya indirir.
              </p>
              <p className="text-sm text-slate-600 italic">
                Örnek: 4 × 6'yı biliyorsanız, 6 × 4'ü de biliyorsunuz demektir.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">➕</span>
                Tekrar Eden Toplama
              </h3>
              <p className="text-slate-700 mb-3">
                4 × 3 = 4 + 4 + 4 = 12. Çarpma aslında aynı sayının tekrar tekrar 
                toplanmasıdır.
              </p>
              <p className="text-sm text-slate-600 italic">
                Bu mantık, çarpmanın ne anlama geldiğini kavramak için çok önemlidir.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">1️⃣</span>
                Birin Özel Durumu
              </h3>
              <p className="text-slate-700 mb-3">
                Herhangi bir sayı 1 ile çarpıldığında sonuç yine o sayıdır. 
                7 × 1 = 7, 9 × 1 = 9
              </p>
              <p className="text-sm text-slate-600 italic">
                En kolay tablodur ve öğrencilere güven verir.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🔟</span>
                Onun Kolay Kuralı
              </h3>
              <p className="text-slate-700 mb-3">
                Bir sayıyı 10 ile çarpmak için sadece sonuna 0 ekleyin. 
                6 × 10 = 60, 8 × 10 = 80
              </p>
              <p className="text-sm text-slate-600 italic">
                Ondalık sistemin gücünü gösterir.
              </p>
            </div>
            
            <div className="bg-pink-50 rounded-xl p-6 border border-pink-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">✌️</span>
                İkinin Katları
              </h3>
              <p className="text-slate-700 mb-3">
                2 çarpım tablosu çift sayıları verir: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
              </p>
              <p className="text-sm text-slate-600 italic">
                Sayıları ikiye katlamak, en temel matematik becerisidir.
              </p>
            </div>
            
            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">9️⃣</span>
                Dokuzun Parmak Hilesi
              </h3>
              <p className="text-slate-700 mb-3">
                9 çarpım tablosunda rakamların toplamı hep 9'dur: 
                18 → 1+8=9, 27 → 2+7=9, 36 → 3+6=9
              </p>
              <p className="text-sm text-slate-600 italic">
                Bu örüntü, doğrulama için kullanılabilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Study This Range */}
      <section className="section-container bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            1'den 10'a Çarpım Tablosu Nasıl Öğrenilir?
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                1. Ezberleme Yerine Anlama
              </h3>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Çarpım tablosunu bir liste gibi ezberlemek yerine, her sayının ne anlama 
                geldiğini anlamak kalıcı öğrenme sağlar. Örneğin 6 × 4'ü ezberlemeden önce, 
                bunun "6 sayısını 4 kere toplamak" olduğunu kavrayın: 6 + 6 + 6 + 6 = 24
              </p>
              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                <p className="text-slate-700">
                  <strong>Öneri:</strong> İlk birkaç haftada görsel araçlar (lego, boncuk, 
                  çizimler) kullanarak somut örnekler üzerinden çalışın.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                2. Tekrar Stratejileri
              </h3>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Çarpım tablosunu öğrenmek için düzenli tekrar şarttır. Ancak bu tekrarlar 
                akıllıca planlanmalıdır:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
                  <div>
                    <strong>Günlük 10-15 dakika:</strong> Uzun süreli, yorucu seanslar yerine 
                    kısa ve düzenli çalışmalar daha etkilidir.
                  </div>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
                  <div>
                    <strong>Kolay olanlarla başlayın:</strong> 1, 2, 5, 10 tablolarını önce 
                    öğrenin. Bunlar güven verir.
                  </div>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
                  <div>
                    <strong>Karışık pratik yapın:</strong> Sırayla değil, rastgele sorular 
                    çözmek gerçek öğrenmeyi sağlar.
                  </div>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
                  <div>
                    <strong>Yüksek sesle tekrar edin:</strong> Görsel ve işitsel hafızayı 
                    birlikte kullanmak daha etkilidir.
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                3. Günlük Pratik Alışkanlıkları
              </h3>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Çarpım tablosunu günlük yaşama entegre etmek, öğrenmeyi doğal ve eğlenceli 
                hale getirir:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <p className="font-semibold text-slate-900 mb-2">Sabah Rutini</p>
                  <p className="text-slate-700 text-sm">
                    Kahvaltıdan önce 5 dakikalık hızlı soru-cevap.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <p className="font-semibold text-slate-900 mb-2">Araba Yolculuğu</p>
                  <p className="text-slate-700 text-sm">
                    Yolda geçirilen vakti değerlendirmek için sözlü pratikler.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <p className="font-semibold text-slate-900 mb-2">Yemek Masası</p>
                  <p className="text-slate-700 text-sm">
                    Aile bireyleriyle birlikte eğlenceli sorular sormak.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <p className="font-semibold text-slate-900 mb-2">Uyku Öncesi</p>
                  <p className="text-slate-700 text-sm">
                    Günü 3-5 çarpma sorusuyla kapatmak.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Range Table */}
      <section className="section-container bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            1'den 10'a Çarpım Tablosu - Tam Liste
          </h2>
          
          <p className="text-center text-slate-700 mb-8 max-w-3xl mx-auto">
            Aşağıda 1'den 10'a kadar tüm çarpım tablolarını bir arada görebilirsiniz. 
            Her sayının kendi renkli kutusu vardır.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {rangeNumbers.map((num) => {
              const colors = [
                'from-blue-500 to-blue-600',
                'from-indigo-500 to-indigo-600',
                'from-purple-500 to-purple-600',
                'from-pink-500 to-pink-600',
                'from-rose-500 to-rose-600',
                'from-orange-500 to-orange-600',
                'from-amber-500 to-amber-600',
                'from-yellow-500 to-yellow-600',
                'from-lime-500 to-lime-600',
                'from-emerald-500 to-emerald-600'
              ]
              
              return (
                <div key={num} className={`bg-gradient-to-br ${colors[num - 1]} rounded-xl p-4 text-white`}>
                  <div className="font-bold text-lg mb-3 text-center">{num} Çarpım Tablosu</div>
                  <div className="space-y-1 text-sm">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className="flex justify-between items-center bg-white/20 rounded px-2 py-1">
                        <span>{num} × {i + 1}</span>
                        <span className="font-semibold">= {num * (i + 1)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Links to Number Pages */}
      <section className="section-container bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Bu Aralıktaki Bireysel Çarpım Tabloları
          </h2>
          
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Her sayının çarpım tablosunu ayrıntılı olarak öğrenmek isterseniz, aşağıdaki 
            bağlantılardan ilgili sayfaya gidebilirsiniz. Her sayfa, o sayıya özel 
            örüntüler, ipuçları ve pratik araçları içerir.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {rangeNumbers.map((num) => (
              <Link
                key={num}
                href={`/number/${num}`}
                className="block bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">
                      {num} Çarpım Tablosu
                    </div>
                    <p className="text-slate-600">
                      {num} sayısının detaylı açıklaması ve örnekleri
                    </p>
                  </div>
                  <svg 
                    className="w-6 h-6 text-blue-600 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Next Learning Step */}
      <section className="section-container bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Bu Aralıktan Sonra Ne Öğrenilmeli?
          </h2>
          
          <p className="text-xl mb-8 leading-relaxed opacity-95">
            1'den 10'a kadar olan çarpım tablosunu rahatlıkla kullanabiliyorsanız, 
            bir sonraki adıma geçmeye hazırsınız! 11'den 20'ye kadar olan sayılar 
            daha büyük sonuçlar üretir, ancak temelde aynı mantığı kullanır.
          </p>
          
          <Link
            href="/11-to-20"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
          >
            11-20 Çarpım Tablosuna Geç
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          
          <p className="mt-6 text-sm opacity-80">
            Tüm çarpım tablolarını öğrenmek için sabırlı ve düzenli olun. Her aralık bir öncekinin üzerine inşa edilir.
          </p>
        </div>
      </section>
    </main>
  )
}
