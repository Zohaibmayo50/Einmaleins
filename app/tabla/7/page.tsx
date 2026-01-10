import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/7#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/7",
      "name": "Tabla del 7 - Sistemas de Siete",
      "description": "Aprende patrones de conteo de siete con la tabla del 7. Aplicaciones prácticas con días de la semana y patrones periódicos.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/7#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/7#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/7#breadcrumb",
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
            "@id": "https://tablasdemultiplicar.online/tabla/7",
            "name": "7 Çarpım Tablosu"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/7#learningresource",
      "name": "7 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "7 ile çarpma: Yedili sayma, hafta günleri ilişkisi ve zorlayıcı ama düzenli desenleri ile 7 tablosunu keşfedin.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "7 çarpım tablosu, yedili sayma, hafta günleri kavramı",
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
  title: 'Tabla del 7 - Juegos Divertidos y Ejercicios Prácticos',
  description: 'Aprende la tabla del 7 con juegos divertidos, ejercicios interactivos y hojas de trabajo imprimibles. Descubre herramientas de práctica gratuitas.',
  keywords: 'tabla del 7, tabla de multiplicar del siete, juegos de matemáticas, ejercicios de multiplicación',
  alternates: {
    canonical: '/tabla/7',
  },
}

export default function Number7Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={7} rangeStart={1} rangeEnd={10} />
    </>
  )
}


