import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/6#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/6",
      "name": "Tabla del 6 - Contar de Seis en Seis",
      "description": "Aprende a contar de seis en seis con la tabla del 6. Descubre las relaciones 2×3 y 3×2 con patrones geométricos.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/6#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/6#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/6#breadcrumb",
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
            "@id": "https://tablasdemultiplicar.online/tabla/6",
            "name": "6 Tabla de Multiplicar"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/6#learningresource",
      "name": "6 Tabla de Multiplicar Recurso de Aprendizaje",
      "description": "6 Multiplicar por: 2 ve 3 tablolarının birleşimi (2×3), altışar sayma ve çift sayı desenleri.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "6 Tabla de Multiplicar, altışar sayma, 2 ve 3 tablolarının ilişkisi",
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
  title: 'Tabla del 6 - Juegos Divertidos y Ejercicios Prácticos',
  description: 'Aprende la tabla del 6 con juegos divertidos, ejercicios interactivos y hojas de trabajo imprimibles. Descubre herramientas de práctica gratuitas.',
  keywords: 'tabla del 6, tabla de multiplicar del seis, juegos de matemáticas, ejercicios de multiplicación',
  alternates: {
    canonical: '/tabla/6',
  },
}

export default function Number6Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={6} rangeStart={1} rangeEnd={10} />
    </>
  )
}


