import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'

export const metadata: Metadata = {
  title: 'Çarpım Tablosu – Öğren, Anla ve Pratik Yap',
  description: 'Çarpım tablosunu adım adım öğrenin, anlayın ve pratik yapın. Öğrenciler, ebeveynler ve öğretmenler için kapsamlı çarpım tablosu eğitim kaynağı.',
  keywords: 'çarpım tablosu, multiplication table, matematik, öğrenme, pratik, eğitim',
  openGraph: {
    title: 'Çarpım Tablosu – Öğren, Anla ve Pratik Yap',
    description: 'Çarpım tablosunu adım adım öğrenin, anlayın ve pratik yapın.',
    type: 'website',
    locale: 'tr_TR',
    url: 'https://carpimtablosu.com.tr',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className="antialiased bg-gray-50">
        <Header />
        {children}
      </body>
    </html>
  )
}
