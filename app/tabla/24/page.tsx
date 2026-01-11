import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/24#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/24",
      "name": "24 Tabla de Multiplicar - 24 Saat Sistemi",
      "description": "24 Tabla de Multiplicar ile 24 saat sistemi ve günlük zaman hesaplamalarını öğrenin. 3×8, 4×6, 2×12 ilişkilerini keşfedin.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/24#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/24#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/24#breadcrumb",
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
            "@id": "https://tablasdemultiplicar.online/21-30",
            "name": "21-30 Tabla de Multiplicar"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://tablasdemultiplicar.online/tabla/24",
            "name": "24 Tabla de Multiplicar"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/24#learningresource",
      "name": "24 Tabla de Multiplicar Recurso de Aprendizaje",
      "description": "24 Multiplicar por: 24 saat gün sistemi, 3×8, 4×6, 2×12 çarpan ilişkileri ve zaman hesaplama.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "24 Tabla de Multiplicar, 24 saat sistemi, çoklu çarpan ilişkileri",
      "typicalAgeRange": "8-11",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study", "real-world application"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/21-30#learningresource"
      }
    }
  ]
}

export const metadata = {
  title: '24 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '24 Tabla de Multiplicar con juegos divertidos y ejercicios interactivos. Ayudas visuales para niños, consejos prácticos y técnicas fáciles de memorización.',
  keywords: '24 Tabla de Multiplicar, yirmi dört Tabla de Multiplicar, 24 Multiplicar por, Tabla de Multiplicar aprendizaje de tablas de multiplicar, juegos de matemáticas',
  alternates: {
    canonical: '/tabla/24',
  },
}

export default function Number24Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={24} rangeStart={21} rangeEnd={30} />
    </>
  )
}


