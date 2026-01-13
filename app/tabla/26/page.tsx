import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/26#webpage",
      "url": "https://einmaleins.online/einmaleins/26",
      "name": "26er-Einmaleins - zwei Kat 13",
      "description": "26er-Einmaleins: 2�13 Beziehung und �ift Zahl Muster �lernen. mittlere Stufe �arpma Multiplikationsf�higkeiten.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/26#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/26#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/26#breadcrumb",
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
            "@id": "https://einmaleins.online/einmaleins/26",
            "name": "26er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/26#learningresource",
      "name": "26er-Einmaleins Lernressource",
      "description": "Multiplikation mit 26 - Fortgeschrittene Rechenmethoden",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactiund Resource", "Practice Material", "Educational Game"],
      "teaches": "26er-Einmaleins, 2�13 Beziehung, �ift Zahllar",
      "typicalAgeRange": "8-11",
      "inLanguage": "de",
      "educationalUse": ["practice", "self-study"],
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
  title: '26er-Einmaleins | Lerne Multiplikation mit 26',
  description: 'Meistere das 26er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '26er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/26',
  },
}

export default function Number26Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={26} rangeStart={21} rangeEnd={30} />
    </>
  )
}


