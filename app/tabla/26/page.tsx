import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/26#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/26",
      "name": "26 Tabla de Multiplicar - İki Kat 13",
      "description": "26 Tabla de Multiplicar ile 2×13 ilişkisini ve çift sayı desenlerini öğrenin. Orta seviye çarpma becerileri.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/26#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/26#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/26#breadcrumb",
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
            "@id": "https://tablasdemultiplicar.online/tabla/26",
            "name": "26 Tabla de Multiplicar"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/26#learningresource",
      "name": "26 Tabla de Multiplicar Recurso de Aprendizaje",
      "description": "26 Multiplicar por: 2 ve 13 tablolarının birleşimi (2×13=26), çift sayı desenleri.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "26 Tabla de Multiplicar, 2×13 ilişkisi, çift sayılar",
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
  title: '26 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '26 Tabla de Multiplicar con juegos divertidos y ejercicios interactivos. Ayudas visuales para niños, consejos prácticos y técnicas fáciles de memorización.',
  keywords: '26 Tabla de Multiplicar, yirmi altı Tabla de Multiplicar, 26 Multiplicar por, Tabla de Multiplicar aprendizaje de tablas de multiplicar, juegos de matemáticas',
  alternates: {
    canonical: '/tabla/26',
  },
}

export default function Number26Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={26} rangeStart={21} rangeEnd={30} />
    </>
  )
}


