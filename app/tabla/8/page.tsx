import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/8#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/8",
      "name": "Tabla del 8 - Patrones de Ocho",
      "description": "Aprende técnicas de duplicación y cuadruplicación con la tabla del 8. Descubre la relación 2×2×2 y el concepto de octágono.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/8#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/8#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/8#breadcrumb",
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
            "@id": "https://tablasdemultiplicar.online/tabla/8",
            "name": "8 Çarpım Tablosu"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/8#learningresource",
      "name": "8 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "8 ile çarpma: 4 tablosunu ikiye katlama (4×2=8), sekizli sayma ve 2ün kuvvetleri (2³=8).",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "8 çarpım tablosu, sekizli sayma, ikiye katlama, 2’nin kuvvetleri",
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
  title: 'Tabla del 8 - Juegos Divertidos y Ejercicios Prácticos',
  description: 'Aprende la tabla del 8 con juegos divertidos, ejercicios interactivos y hojas de trabajo imprimibles. Descubre herramientas de práctica gratuitas.',
  keywords: 'tabla del 8, tabla de multiplicar del ocho, juegos de matemáticas, ejercicios de multiplicación',
  alternates: {
    canonical: '/tabla/8',
  },
}

export default function Number8Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={8} rangeStart={1} rangeEnd={10} />
    </>
  )
}


