import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/13#webpage",
      "url": "https://einmaleins.online/einmaleins/13",
      "name": "13er-Einmaleins - Uğurlu Sayı Desenleri",
      "description": "13er-Einmaleins ile matematik becerilerinizi geliştirin. Desenler ve kolay stratejilerle 13 Multiplicar por işleminde ustalaşın.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/13#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/13#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/13#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@id": "https://einmaleins.online/",
            "name": "Startseite"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@id": "https://einmaleins.online/11-20",
            "name": "11-20 Tabla de Multiplicar"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://einmaleins.online/einmaleins/13",
            "name": "13er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/13#learningresource",
      "name": "13er-Einmaleins Recurso de Aprendizaje",
      "description": "13 Multiplicar por: Asal sayı özellikleri, zihinsel matematik stratejileri, 10+3 ayrıştırma yöntemi.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "13er-Einmaleins, asal sayılar, zihinsel matematik",
      "typicalAgeRange": "7-10",
      "inLanguage": "de",
      "educationalUse": ["practice", "self-study"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://einmaleins.online/11-20#learningresource"
      }
    }
  ]
}

export const metadata = {
  title: '13er-Einmaleins - Juegos Divertidos y Ejercicios Prácticos',
  description: 'Meistere das 13er-Einmaleins. Klare ErklÃ¤rungen, Muster und praktische Ãœbungsstrategien.',
  keywords: '13er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/13',
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


