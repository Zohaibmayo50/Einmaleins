import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/9#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/9",
      "name": "Tabla del 9 - Patrones Mágicos de Nueve",
      "description": "Aprende trucos de dedos y reglas mágicas de suma de dígitos con la tabla del 9. Descubre los patrones de tabla de multiplicar más divertidos.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/9#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/9#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/9#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@id": "https://tablasdemultiplicar.online/",
            "name": "Inicio"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@id": "https://tablasdemultiplicar.online/1-10",
            "name": "1-10 Çarpım Tablosu"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://tablasdemultiplicar.online/tabla/9",
            "name": "9 Çarpım Tablosu"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/9#learningresource",
      "name": "9 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "9 ile çarpma: Parmak trikleri, basamak toplama kuralı (sonuçların rakamları toplamı=9), 10-1 ilişkisi ve sihirli desenler.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "9 çarpım tablosu, parmak trikeri, basamak toplama kuralı, 3²=9",
      "typicalAgeRange": "6-9",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/1-10#learningresource"
      }
    }
  ]
}

export const metadata = {
  title: 'Tabla del 9 - Juegos Divertidos y Ejercicios Prácticos',
  description: 'Aprende la tabla del 9 con juegos divertidos, ejercicios interactivos y hojas de trabajo imprimibles. Descubre herramientas de práctica gratuitas.',
  keywords: 'tabla del 9, tabla de multiplicar del nueve, juegos de matemáticas, ejercicios de multiplicación',
  alternates: {
    canonical: '/tabla/9',
  },
}

export default function Number9Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={9} rangeStart={1} rangeEnd={10} />
    </>
  )
}


