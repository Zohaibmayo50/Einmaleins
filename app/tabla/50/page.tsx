import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/50#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/50",
      "name": "50 Tabla de Multiplicar - Yarım ve Yüzde Kavramı",
      "description": "50 Tabla de Multiplicar ile yarım (1/2) kavramı ve yüzde hesaplamalarını öğrenin. 100'ün yarısı olarak pratik hesaplama yöntemleri.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/50#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/50#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/50#breadcrumb",
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
            "@id": "https://tablasdemultiplicar.online/41-50",
            "name": "41-50 Tabla de Multiplicar"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://tablasdemultiplicar.online/tabla/50",
            "name": "50 Tabla de Multiplicar"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/50#learningresource",
      "name": "50 Tabla de Multiplicar Recurso de Aprendizaje",
      "description": "50 Multiplicar por: Yarım (1/2) kavramı, yüzde hesaplamaları (50%=1/2), 100'ün yarısı stratejisi ve 5×10 ilişkisi.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "50 Tabla de Multiplicar, yarım kavramı, yüzde hesaplama, 5×10 ilişkisi",
      "typicalAgeRange": "8-11",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study", "real-world application"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/41-50#learningresource"
      }
    }
  ]
}

export const metadata = {
  title: '50 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '50 Tabla de Multiplicar con juegos divertidos y ejercicios interactivos. Ayudas visuales para niños, consejos prácticos y técnicas fáciles de memorización.',
  keywords: '50 Tabla de Multiplicar, elli Tabla de Multiplicar, 50 Multiplicar por, Tabla de Multiplicar aprendizaje de tablas de multiplicar, juegos de matemáticas',
  alternates: {
    canonical: '/tabla/50',
  },
}

export default function Number50Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={50} rangeStart={41} rangeEnd={50} />
    </>
  )
}


