import Hero from './components/Hero'
import DefinitionSection from './components/DefinitionSection'
import WhyItMatters from './components/WhyItMatters'
import HowToLearn from './components/HowToLearn'
import LearningPaths from './components/LearningPaths'
import PracticePreview from './components/PracticePreview'
import AudienceSection from './components/AudienceSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Contains the only H1 on the page */}
      <Hero />
      
      {/* Contextual Bridge: Learning Paths (Core Content Links) */}
      <LearningPaths />
      
      {/* Macro Context: Definition Section */}
      <DefinitionSection />
      
      {/* Attribute Processing: Why It Matters */}
      <WhyItMatters />
      
      {/* Learning Methodology */}
      <HowToLearn />
      
      {/* Supplementary: Practice and Games */}
      <PracticePreview />
      
      {/* Trust & Audience Expansion */}
      <AudienceSection />
      
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold mb-4">Çarpım Tablosu</h3>
              <p className="text-slate-300 text-sm">
                Çarpım tablosunu öğren, anla ve pratik yap. 
                Matematik başarısı için güçlü bir temel oluştur.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <a href="/multiplication-table/1-to-10" className="hover:text-white transition-colors">
                    1-10 Çarpım Tablosu
                  </a>
                </li>
                <li>
                  <a href="/multiplication-table/11-to-20" className="hover:text-white transition-colors">
                    11-20 Çarpım Tablosu
                  </a>
                </li>
                <li>
                  <a href="/learn-multiplication/for-parents" className="hover:text-white transition-colors">
                    Ebeveynler İçin
                  </a>
                </li>
                <li>
                  <a href="/learn-multiplication/for-teachers" className="hover:text-white transition-colors">
                    Öğretmenler İçin
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">İletişim</h3>
              <p className="text-slate-300 text-sm">
                Sorularınız için bizimle iletişime geçin.
              </p>
              <p className="text-slate-300 text-sm mt-4">
                © 2026 carpimtablosu.com.tr
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
            <p>
              Semantic SEO ve Topical Authority prensipleriyle tasarlanmıştır.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
