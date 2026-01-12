import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/19#webpage",
      "url": "https://einmaleins.online/einmaleins/19",
      "name": "19er-Einmaleins - Asal Sayı Ustası",
      "description": "19er-Einmaleins ile asal sayılarda ustalaşın. 20-1 stratejisi ve zihinsel matematik teknikleri.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/19#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/19#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/19#breadcrumb",
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
            "@id": "https://einmaleins.online/einmaleins/19",
            "name": "19er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/19#learningresource",
      "name": "19er-Einmaleins Recurso de Aprendizaje",
      "description": "19 Multiplicar por: Asal sayı özellikleri, 20-1 yaklaşım stratejisi, ileri düzey zihinsel matematik.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "19er-Einmaleins, asal sayılar, 20-1 çıkarma stratejisi",
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
  title: '19er-Einmaleins - Juegos Divertidos y Ejercicios Prácticos',
  description: 'Meistere das 19er-Einmaleins. Klare ErklÃ¤rungen, Muster und praktische Ãœbungsstrategien.',
  keywords: '19er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/19',
  },
}

export default function Number19Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={19} rangeStart={11} rangeEnd={20} />
    </>
  )
}


