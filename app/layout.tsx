import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Header from './components/Header'

export const metadata: Metadata = {
  metadataBase: new URL('https://einmaleins.online'),
  title: 'Einmaleins von 1 bis 100 | Übungen PDF und Interaktive Spiele',
  description: 'Lerne das Einmaleins von 1 bis 100 kostenlos. Interaktive Übungen, Einmaleins Spiele und Arbeitsblätter als PDF. Die ideale Mathe-Plattform für Kinder.',
  keywords: 'einmaleins, kleines einmaleins, das einmaleins, einmaleins lernen, einmaleins üben, einmaleins spiele, einmaleins tabelle, einmaleins aufgaben, arbeitsblätter einmaleins, einmaleins arbeitsblätter zum ausdrucken pdf',
  authors: [{ name: 'Einmaleins' }],
  creator: 'Einmaleins',
  publisher: 'Einmaleins',
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
    title: 'Einmaleins – Lernen, Verstehen und Üben',
    description: 'Lerne das Einmaleins Schritt für Schritt, verstehe es und übe regelmäßig.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://einmaleins.online',
    siteName: 'Einmaleins',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Einmaleins – Lernen, Verstehen und Üben',
    description: 'Lerne das Einmaleins Schritt für Schritt, verstehe es und übe regelmäßig.',
  },
  verification: {
    google: 'ptAG3AHUZPPQ3LSoZ9eP6prlbhZYHMJzeVsu7V8f6RE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KJXX9G2ZD2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KJXX9G2ZD2');
          `}
        </Script>
      </head>
      <body className="antialiased bg-gray-50">
        <Header />
        {children}
      </body>
    </html>
  )
}
