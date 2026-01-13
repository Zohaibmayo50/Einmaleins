import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/16#webpage",
      "url": "https://einmaleins.online/einmaleins/16",
      "name": "16er-Einmaleins - Quadratzahl Beziehung",
      "description": "16er-Einmaleins: Quadratzahl Konzept �lernen. 4�4=16 Beziehung und einfache stratejilerle Multiplikation mit 16 - Fortgeschrittene Rechenmethoden",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/16#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/16#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/16#breadcrumb",
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
            "name": "Einmaleins 11-20"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://einmaleins.online/einmaleins/16",
            "name": "16er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/16#learningresource",
      "name": "16er-Einmaleins Lernressource",
      "description": "Multiplikation mit 16 - Fortgeschrittene Rechenmethoden",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "16er-Einmaleins, Quadratzahllar, 4 tablosunun katlari",
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
  title: '16er-Einmaleins - Lustige Spiele und Praktische \u00dcbungen',
  description: 'Meistere das 16er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '16er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/16',
  },
}

export default function Number16Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={16} rangeStart={11} rangeEnd={20} />
    </>
  )
}


