import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Header from './components/Header'

export const metadata: Metadata = {
  metadataBase: new URL('https://tablasdemultiplicar.online'),
  title: 'Tablas de Multiplicar del 1 al 100 | Ejercicios PDF y Juegos Interactivos',
  description: 'Aprende las tablas de multiplicar del 1 al 100 gratis. Ejercicios interactivos, juegos educativos y hojas de trabajo en PDF. Plataforma ideal de matemáticas para niños.',
  keywords: 'tablas de multiplicar, tablas de multiplicar del 1 al 10, para imprimir, para niños, juegos de tablas de multiplicar, ejercicios, como aprender las tablas de multiplicar',
  authors: [{ name: 'Tablas de Multiplicar' }],
  creator: 'Tablas de Multiplicar',
  publisher: 'Tablas de Multiplicar',
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
    title: 'Tablas de Multiplicar – Aprende, Comprende y Practica',
    description: 'Aprende las tablas de multiplicar paso a paso, compréndelas y practica.',
    type: 'website',
    locale: 'es_MX',
    url: 'https://tablasdemultiplicar.online',
    siteName: 'Tablas de Multiplicar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tablas de Multiplicar – Aprende, Comprende y Practica',
    description: 'Aprende las tablas de multiplicar paso a paso, compréndelas y practica.',
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
    <html lang="es">
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
