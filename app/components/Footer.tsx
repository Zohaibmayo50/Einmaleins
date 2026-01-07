import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-xl font-bold text-white">×</span>
              </div>
              <span className="text-xl font-bold">Çarpım Tablosu</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              1'den 100'e kadar çarpım tablosunu eğlenceli ve interaktif yollarla öğrenin.
            </p>
          </div>

          {/* Learning Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Öğrenme</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#definition" className="text-slate-400 hover:text-white transition-colors">
                  Çarpım Nedir?
                </Link>
              </li>
              <li>
                <Link href="/#learning-paths" className="text-slate-400 hover:text-white transition-colors">
                  Öğrenme Yolu
                </Link>
              </li>
              <li>
                <Link href="/1-10" className="text-slate-400 hover:text-white transition-colors">
                  1-10 Tablosu
                </Link>
              </li>
              <li>
                <Link href="/11-20" className="text-slate-400 hover:text-white transition-colors">
                  11-20 Tablosu
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-400">Pratik</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#practice" className="text-slate-400 hover:text-white transition-colors">
                  Alıştırma Modu
                </Link>
              </li>
              <li>
                <Link href="/#practice" className="text-slate-400 hover:text-white transition-colors">
                  Oyunlar
                </Link>
              </li>
              <li>
                <Link href="/#practice" className="text-slate-400 hover:text-white transition-colors">
                  Testler
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Kaynaklar</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/veliler-icin" className="text-slate-400 hover:text-white transition-colors">
                  Ebeveynler İçin
                </Link>
              </li>
              <li>
                <Link href="/ogretmenler-icin" className="text-slate-400 hover:text-white transition-colors">
                  Öğretmenler İçin
                </Link>
              </li>
              <li>
                <Link href="/#audience" className="text-slate-400 hover:text-white transition-colors">
                  Kimler İçin?
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} Çarpım Tablosu. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span>Herkes İçin Matematiği Eğlenceli Hale Getiriyoruz 🎓</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
