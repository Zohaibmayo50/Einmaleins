import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/21#webpage",
      "url": "https://einmaleins.online/einmaleins/21",
      "name": "21er-Einmaleins - Zwanziger Systemler",
      "description": "21er-Einmaleins: Zwanziger Zahl Systemi entdecken. 3�7 Beziehung und zwei Stellenli Zahl Muster.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/21#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/21#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/21#breadcrumb",
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
            "@id": "https://einmaleins.online/einmaleins/21",
            "name": "21er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/21#learningresource",
      "name": "21er-Einmaleins Lernressource",
      "description": "Multiplikation mit 21 - Fortgeschrittene Rechenmethoden",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactiund Resource", "Practice Material", "Educational Game"],
      "teaches": "21er-Einmaleins, 3�7 Beziehung, zwei Stellenli �arpma",
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
  title: '21er-Einmaleins | Lerne Multiplikation mit 21',
  description: 'Meistere das 21er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '21er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/21',
  },
}

export default function Number21Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={21} rangeStart={21} rangeEnd={30} />
    </>
  )
}


