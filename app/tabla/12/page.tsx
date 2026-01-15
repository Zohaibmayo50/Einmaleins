import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/12#webpage",
      "url": "https://einmaleins.online/einmaleins/12",
      "name": "12er-Einmaleins - DDutzend Konzept",
      "description": "12er-Einmaleins: Dutzend-Konzept lernen. Stundensystem und häufig verwendete 12er-Tabelle meistern.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/12#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/12#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/12#breadcrumb",
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
            "@id": "https://einmaleins.online/einmaleins/12",
            "name": "12er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/12#learningresource",
      "name": "12er-Einmaleins Lernressource",
      "description": "Multiplikation mit 12 - Fortgeschrittene Rechenmethoden",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "12er-Einmaleins, dDutzend Konzept, Stundenlesen, 3 und 4 Tabellen Beziehung",
      "typicalAgeRange": "7-10",
      "inLanguage": "de",
      "educationalUse": ["practice", "self-study", "real-world application"],
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
  title: '12er-Einmaleins - Lustige Spiele und Praktische \u00dcbungen',
  description: 'Meistere das 12er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '12er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/12',
  },
}

export default function Number12Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={12} rangeStart={11} rangeEnd={20} />
    </>
  )
}


