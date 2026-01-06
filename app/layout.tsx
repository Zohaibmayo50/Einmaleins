import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'

export const metadata: Metadata = {
  metadataBase: new URL('https://carpimtablosu.com.tr'),
  title: 'Çarpım Tablosu – Öğren, Anla ve Pratik Yap',
  description: 'Çarpım tablosunu adım adım öğrenin, anlayın ve pratik yapın. Öğrenciler, ebeveynler ve öğretmenler için kapsamlı çarpım tablosu eğitim kaynağı.',
  keywords: 'çarpım tablosu, multiplication table, matematik, öğrenme, pratik, eğitim',
  authors: [{ name: 'Çarpım Tablosu' }],
  creator: 'Çarpım Tablosu',
  publisher: 'Çarpım Tablosu',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Çarpım Tablosu – Öğren, Anla ve Pratik Yap',
    description: 'Çarpım tablosunu adım adım öğrenin, anlayın ve pratik yapın.',
    type: 'website',
    locale: 'tr_TR',
    url: 'https://carpimtablosu.com.tr',
    siteName: 'Çarpım Tablosu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Çarpım Tablosu – Öğren, Anla ve Pratik Yap',
    description: 'Çarpım tablosunu adım adım öğrenin, anlayın ve pratik yapın.',
  },
  verification: {
    google: 'your-google-site-verification',
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
