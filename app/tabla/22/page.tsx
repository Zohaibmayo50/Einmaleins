import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/22#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/22",
      "name": "22 Tabla de Multiplicar - Çift Sayı Desenleri",
      "description": "22 Tabla de Multiplicar ile 2 ve 11 tablolarının ilişkisini öğrenin. Çift sayı desenleri ve kolay çarpma stratejileri.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/22#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/22#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/22#breadcrumb",
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
            "@id": "https://tablasdemultiplicar.online/tabla/22",
            "name": "22 Tabla de Multiplicar"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/22#learningresource",
      "name": "22 Tabla de Multiplicar Recurso de Aprendizaje",
      "description": "22 Multiplicar por: 2 ve 11 tablolarının birleşimi (2×11=22), çift sayı desenleri ve ikiye katlama.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "22 Tabla de Multiplicar, 2×11 ilişkisi, çift sayılar",
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
  title: '22 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '22 Tabla de Multiplicar con juegos divertidos y ejercicios interactivos. Ayudas visuales para niños, consejos prácticos y técnicas fáciles de memorización.',
  keywords: '22 Tabla de Multiplicar, yirmi iki Tabla de Multiplicar, 22 Multiplicar por, Tabla de Multiplicar aprendizaje de tablas de multiplicar, juegos de matemáticas',
  alternates: {
    canonical: '/tabla/22',
  },
}

export default function Number22Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={22} rangeStart={21} rangeEnd={30} />
    </>
  )
}


