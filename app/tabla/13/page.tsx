import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/13#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/13",
      "name": "13 Tabla de Multiplicar - Uğurlu Sayı Desenleri",
      "description": "13 Tabla de Multiplicar ile matematik becerilerinizi geliştirin. Desenler ve kolay stratejilerle 13 Multiplicar por işleminde ustalaşın.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/13#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/13#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/13#breadcrumb",
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
            "@id": "https://tablasdemultiplicar.online/tabla/13",
            "name": "13 Tabla de Multiplicar"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/13#learningresource",
      "name": "13 Tabla de Multiplicar Recurso de Aprendizaje",
      "description": "13 Multiplicar por: Asal sayı özellikleri, zihinsel matematik stratejileri, 10+3 ayrıştırma yöntemi.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "13 Tabla de Multiplicar, asal sayılar, zihinsel matematik",
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
  title: '13 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '13 Tabla de Multiplicar con juegos divertidos y ejercicios interactivos. Ayudas visuales para niños, consejos prácticos y técnicas fáciles de memorización.',
  keywords: '13 Tabla de Multiplicar, on üç Tabla de Multiplicar, 13 Multiplicar por, Tabla de Multiplicar aprendizaje de tablas de multiplicar, juegos de matemáticas',
  alternates: {
    canonical: '/tabla/13',
  },
}

export default function Number13Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={13} rangeStart={11} rangeEnd={20} />
    </>
  )
}


