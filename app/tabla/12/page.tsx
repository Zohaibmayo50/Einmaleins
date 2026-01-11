import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/12#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/12",
      "name": "12 Tabla de Multiplicar - Düzine Kavramı",
      "description": "12 Tabla de Multiplicar ile düzine kavramını öğrenin. Saat sistemi ve günlük hayatta sıkça kullanılan 12 tablosunda ustalaşın.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/12#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/12#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/12#breadcrumb",
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
            "@id": "https://tablasdemultiplicar.online/11-20",
            "name": "11-20 Tabla de Multiplicar"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://tablasdemultiplicar.online/tabla/12",
            "name": "12 Tabla de Multiplicar"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/12#learningresource",
      "name": "12 Tabla de Multiplicar Recurso de Aprendizaje",
      "description": "12 Multiplicar por: Düzine kavramı, saat sistemi (12 saat), 3×4 ilişkisi ve günlük hayat uygulamaları.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "12 Tabla de Multiplicar, düzine kavramı, saat okuma, 3 ve 4 tablolarının ilişkisi",
      "typicalAgeRange": "7-10",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study", "real-world application"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/11-20#learningresource"
      }
    }
  ]
}

export const metadata = {
  title: '12 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '12 Tabla de Multiplicar con juegos divertidos y ejercicios interactivos. Ayudas visuales para niños, consejos prácticos y técnicas fáciles de memorización.',
  keywords: '12 Tabla de Multiplicar, on iki Tabla de Multiplicar, 12 Multiplicar por, Tabla de Multiplicar aprendizaje de tablas de multiplicar, juegos de matemáticas',
  alternates: {
    canonical: '/tabla/12',
  },
}

export default function Number12Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={12} rangeStart={11} rangeEnd={20} />
    </>
  )
}


