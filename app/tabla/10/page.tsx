import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/10#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/10",
      "name": "Tabla del 10 - Base del Sistema Decimal",
      "description": "Aprende el concepto de sistema decimal y valor posicional con la tabla del 10. Comprende la base de las matemáticas con la tabla de multiplicar más fácil.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/10#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/10#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/10#breadcrumb",
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
            "name": "1-10 Tabla de Multiplicar"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://tablasdemultiplicar.online/tabla/10",
            "name": "10 Tabla de Multiplicar"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/10#learningresource",
      "name": "10 Tabla de Multiplicar Recurso de Aprendizaje",
      "description": "10 Multiplicar por: Onluk sistem temeli, yer değeri kavramı ve sonuna sıfır ekleme kuralı ile en kolay Tabla de Multiplicar.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "10 Tabla de Multiplicar, onluk sistem, yer değeri, sıfır ekleme kuralı",
      "typicalAgeRange": "6-9",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study", "foundational concept"],
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
  title: 'Tabla del 10 - Juegos Divertidos y Ejercicios Prácticos',
  description: 'Aprende la tabla del 10 con juegos divertidos, ejercicios interactivos y hojas de trabajo imprimibles. Descubre herramientas de práctica gratuitas.',
  keywords: 'tabla del 10, tabla de multiplicar del diez, juegos de matemáticas, ejercicios de multiplicación',
  alternates: {
    canonical: '/tabla/10',
  },
}

export default function Number10Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={10} rangeStart={1} rangeEnd={10} />
    </>
  )
}


