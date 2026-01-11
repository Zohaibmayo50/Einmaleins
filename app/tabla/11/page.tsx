import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/11#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/11",
      "name": "11 Tabla de Multiplicar - Introducción a Números de Dos Dígitos",
      "description": "11 Tabla de Multiplicar y transiciona a números de dos dígitos. Con patrones y estrategias fáciles, aprende a multiplicar por 11 Multiplicar por .",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/11#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/11#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/11#breadcrumb",
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
            "@id": "https://tablasdemultiplicar.online/tabla/11",
            "name": "11 Tabla de Multiplicar"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/11#learningresource",
      "name": "11 Tabla de Multiplicar Recurso de Aprendizaje",
      "description": "11 Multiplicar por: Introducción a números de dos dígitos, patrón de repetición de dígitos (11×2=22, 11×3=33), estrategias fáciles de memorización.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "11 Tabla de Multiplicar, números de dos dígitos, patrones de dígitos",
      "typicalAgeRange": "7-10",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study"],
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
  title: '11 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '11 Tabla de Multiplicar con juegos divertidos y ejercicios interactivos. Ayudas visuales para niños, consejos prácticos y técnicas fáciles de memorización.',
  keywords: '11 Tabla de Multiplicar, on bir Tabla de Multiplicar, 11 Multiplicar por, Tabla de Multiplicar aprendizaje de tablas de multiplicar, juegos de matemáticas',
  alternates: {
    canonical: '/tabla/11',
  },
}

export default function Number11Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={11} rangeStart={11} rangeEnd={20} />
    </>
  )
}


