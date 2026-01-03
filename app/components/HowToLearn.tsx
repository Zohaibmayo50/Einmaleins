export default function HowToLearn() {
  return (
    <section className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-slate-900 mb-12 text-center">
          Çarpım Tablosu Nasıl Etkili Bir Şekilde Öğrenilir?
        </h2>
        
        <div className="space-y-12">
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                1
              </span>
              <span>Örüntüleri Anlayarak Öğrenme</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                Çarpım tablosunda birçok düzen ve örüntü bulunur. Bu örüntüleri 
                keşfetmek, ezber yapmak yerine mantıksal anlama sağlar:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>2'nin katları:</strong> Her zaman çift sayıdır (2, 4, 6, 8...)
                </li>
                <li>
                  <strong>5'in katları:</strong> Her zaman 0 veya 5 ile biter (5, 10, 15, 20...)
                </li>
                <li>
                  <strong>9'un katları:</strong> Rakamlar toplamı her zaman 9'un katıdır 
                  (18: 1+8=9, 27: 2+7=9)
                </li>
                <li>
                  <strong>10'un katları:</strong> Her zaman 0 ile biter (10, 20, 30...)
                </li>
                <li>
                  <strong>Değişme özelliği:</strong> 3 × 4 = 4 × 3 (Sıra değişse de sonuç aynı)
                </li>
              </ul>
              <p>
                Bu örüntüleri anlamak, 100'e yakın çarpım değerini ezberlemek yerine 
                sadece temel mantığı kavramanızı sağlar.
              </p>
            </div>
          </article>
          
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-educational-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                2
              </span>
              <span>Tekrarlı ve Aşamalı Öğrenme</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                Çarpım tablosunu bir günde öğrenmek mümkün değildir ve gerekli de değildir. 
                En etkili yaklaşım, aşamalı ve düzenli tekrardır:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Küçük adımlarla başlayın:</strong> İlk olarak 1, 2, 5 ve 10 gibi 
                  kolay sayılarla başlayın
                </li>
                <li>
                  <strong>Her gün 10-15 dakika:</strong> Uzun süreli tek oturumlar yerine 
                  kısa ve düzenli çalışma daha etkilidir
                </li>
                <li>
                  <strong>Önceki bilgileri pekiştirin:</strong> Yeni bir sayıya geçmeden önce 
                  öğrendiklerinizi gözden geçirin
                </li>
                <li>
                  <strong>Aralıklı tekrar yapın:</strong> Bir hafta sonra, bir ay sonra tekrar 
                  ederek kalıcılığı artırın
                </li>
              </ul>
              <p>
                Düzenli tekrar, bilginin kısa süreli hafızadan uzun süreli hafızaya 
                geçmesini sağlar ve kalıcı öğrenmeyi destekler.
              </p>
            </div>
          </article>
          
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                3
              </span>
              <span>Pratik Yaparak Öğrenme</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                Teoriyi anlamak önemlidir, ancak pratik yapmadan kalıcı öğrenme 
                gerçekleşmez. Pratik yapmanın faydaları:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Aktif hatırlama:</strong> Bilgiyi pasif okumak yerine aktif olarak 
                  hatırlamaya çalışmak beyni güçlendirir
                </li>
                <li>
                  <strong>Hata analizi:</strong> Yanlış yaptığınız işlemleri inceleyerek 
                  zayıf noktalarınızı belirleyin
                </li>
                <li>
                  <strong>Hız geliştirme:</strong> Düzenli pratik ile hem doğruluk hem de 
                  hız kazanırsınız
                </li>
                <li>
                  <strong>Farklı bağlamlarda uygulama:</strong> Sorular, oyunlar, günlük hayat 
                  problemleri gibi farklı ortamlarda kullanın
                </li>
              </ul>
              <p>
                Pratik yapmadan sadece okuyarak veya dinleyerek öğrenilen bilgiler 
                kısa sürede unutulur. Aktif uygulama, öğrenmenin temel anahtarıdır.
              </p>
            </div>
          </article>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-primary-50 to-educational-50 border border-primary-200 rounded-lg p-8">
          <h4 className="text-xl font-semibold text-slate-900 mb-4">
            Önemli Hatırlatma
          </h4>
          <p className="text-slate-700">
            Her çocuğun öğrenme hızı farklıdır. Birisi bir haftada öğrenirken, 
            başka birisi birkaç ay sürebilir. Önemli olan süreklilik, sabır ve 
            doğru yöntemlerle ilerlemektir. Baskı kurmak yerine destekleyici 
            bir yaklaşım benimseyin.
          </p>
        </div>
      </div>
    </section>
  )
}
