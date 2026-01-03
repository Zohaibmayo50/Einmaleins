import Link from 'next/link'

export default function PracticePreview() {
  return (
    <section id="practice" className="section-container bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-slate-900 mb-6 text-center">
          Çarpım Tablosunu Pratik Yapın
        </h2>
        
        <p className="text-center text-slate-700 max-w-3xl mx-auto mb-12 text-lg">
          Öğrendiğiniz çarpım tablosunu pekiştirmek için pratik yapmak çok önemlidir. 
          Aşağıdaki araçlar, bilgilerinizi test etmenize ve geliştirmenize yardımcı olur.
        </p>
        
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <div className="card border-2 border-gray-200">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Pratik Modu
            </h3>
            <p className="text-slate-700 mb-4">
              Rastgele çarpma soruları ile pratik yapın. Doğru ve yanlış 
              cevaplarınızı takip edin, zayıf noktalarınızı belirleyin.
            </p>
            <p className="text-sm text-slate-500 italic">
              Öğrenme tamamlandıktan sonra aktif hale gelecektir
            </p>
          </div>
          
          <div className="card border-2 border-gray-200">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Eğitici Oyunlar
            </h3>
            <p className="text-slate-700 mb-4">
              Eğlenceli oyunlar ile öğrenin. Oyunlar, motivasyonu artırır ve 
              öğrenmeyi eğlenceli hale getirir.
            </p>
            <p className="text-sm text-slate-500 italic">
              Temel bilgi edindikten sonra oyunlar faydalı olur
            </p>
          </div>
          
          <div className="card border-2 border-gray-200">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Alıştırmalar
            </h3>
            <p className="text-slate-700 mb-4">
              Farklı zorluk seviyelerinde alıştırmalar çözün. İlerlemelerinizi 
              kaydedin ve kendinizi geliştirin.
            </p>
            <p className="text-sm text-slate-500 italic">
              Konuyu anladıktan sonra pekiştirme için kullanılır
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-r-lg p-6">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">
                Pratik Yaparken Dikkat Edilmesi Gerekenler
              </h4>
              <p className="text-slate-700">
                Pratik yapmak sadece hız kazanmak için değildir. Her soruyu dikkatlice 
                düşünün, yanlış cevaplarınızı analiz edin ve hangi çarpım tablolarında 
                zorlandığınızı belirleyin. Kalite, kantiteden daha önemlidir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
