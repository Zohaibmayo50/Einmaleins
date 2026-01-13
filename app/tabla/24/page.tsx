import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/24#webpage",
      "url": "https://einmaleins.online/einmaleins/24",
      "name": "24er-Einmaleins - 24 Stundensystem",
      "description": "24er-Einmaleins: 24 Stundensystem und g�nl�k Zeitberechnunglari �lernen. 3�8, 4�6, 2�12 Beziehungen entdecken.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/24#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/24#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/24#breadcrumb",
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
            "@id": "https://einmaleins.online/21-30",
            "name": "Einmaleins 21-30"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://einmaleins.online/einmaleins/24",
            "name": "24er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/24#learningresource",
      "name": "24er-Einmaleins Lernressource",
      "description": "Multiplikation mit 24 - Fortgeschrittene Rechenmethoden",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "24er-Einmaleins, 24 Stundensystem, �oklu �arpan Beziehungen",
      "typicalAgeRange": "8-11",
      "inLanguage": "de",
      "educationalUse": ["practice", "self-study", "real-world application"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://einmaleins.online/21-30#learningresource"
      }
    }
  ]
}

export const metadata = {
  title: '24er-Einmaleins | Lerne Multiplikation mit 24',
  description: 'Meistere das 24er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '24er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/24',
  },
}

export default function Number24Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={24} rangeStart={21} rangeEnd={30} />
    </>
  )
}


