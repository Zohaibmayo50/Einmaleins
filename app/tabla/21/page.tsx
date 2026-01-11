import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/21#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/21",
      "name": "21 Tabla de Multiplicar - Yirmili Sistemler",
      "description": "21 Tabla de Multiplicar ile yirmili sayı sistemini keşfedin. 3×7 ilişkisi ve iki basamaklı sayı desenleri.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/21#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/21#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/21#breadcrumb",
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
            "@id": "https://tablasdemultiplicar.online/tabla/21",
            "name": "21 Tabla de Multiplicar"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/21#learningresource",
      "name": "21 Tabla de Multiplicar Recurso de Aprendizaje",
      "description": "21 Multiplicar por: 3 ve 7 tablolarının birleşimi (3×7=21), yirmili sistem ve orta seviye çarpma becerileri.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "21 Tabla de Multiplicar, 3×7 ilişkisi, iki basamaklı çarpma",
      "typicalAgeRange": "8-11",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study"],
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
  title: '21 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '21 Tabla de Multiplicar con juegos divertidos y ejercicios interactivos. Ayudas visuales para niños, consejos prácticos y técnicas fáciles de memorización.',
  keywords: '21 Tabla de Multiplicar, yirmi bir Tabla de Multiplicar, 21 Multiplicar por, Tabla de Multiplicar aprendizaje de tablas de multiplicar, juegos de matemáticas',
  alternates: {
    canonical: '/tabla/21',
  },
}

export default function Number21Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={21} rangeStart={21} rangeEnd={30} />
    </>
  )
}


