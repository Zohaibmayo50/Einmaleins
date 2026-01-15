import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/19#webpage",
      "url": "https://einmaleins.online/einmaleins/19",
      "name": "19er-Einmaleins - Primzahl Ustasi",
      "description": "19er-Einmaleins: Primzahllarda meistern. 20-1 Strategie und Kopfrechnen Techniken.",
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
            "name": "Einmaleins 11-20"
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
      "name": "19er-Einmaleins Lernressource",
      "description": "Multiplikation mit 19 - Fortgeschrittene Rechenmethoden",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "19er-Einmaleins, Primzahllar, 20-1 �ikarma Strategie",
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
  title: '19er-Einmaleins - Lustige Spiele und Praktische \u00dcbungen',
  description: 'Meistere das 19er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
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


