import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/25#webpage",
      "url": "https://einmaleins.online/einmaleins/25",
      "name": "25er-Einmaleins - �eyrek und Y�zde Konzept",
      "description": "25er-Einmaleins: �eyrek Konzept und y�zde hesaplamalari �lernen. Geldrechnung i�in kritik �neme sahip Muster entdecken.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/25#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/25#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/25#breadcrumb",
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
            "@id": "https://einmaleins.online/einmaleins/25",
            "name": "25er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/25#learningresource",
      "name": "25er-Einmaleins Lernressource",
      "description": "Multiplikation mit 25 - Fortgeschrittene Rechenmethoden",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactiund Resource", "Practice Material", "Educational Game"],
      "teaches": "25er-Einmaleins, �eyrek Konzept, y�zde hesaplama, Geldrechnung, 5'in Quadrat",
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
  title: '25er-Einmaleins | Lerne Multiplikation mit 25',
  description: 'Meistere das 25er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '25er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/25',
  },
}

export default function Number25Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={25} rangeStart={21} rangeEnd={30} />
    </>
  )
}


