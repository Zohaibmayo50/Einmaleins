import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/50#webpage",
      "url": "https://einmaleins.online/einmaleins/50",
      "name": "50er-Einmaleins - Hälfte und Y�zde Konzept",
      "description": "50er-Einmaleins: Hälfte (1/2) Konzept und y�zde hesaplamalari �lernen. 100'�n yarisi olarak pratik hesaplama y�ntemleri.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/50#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/50#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/50#breadcrumb",
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
            "@id": "https://einmaleins.online/41-50",
            "name": "Einmaleins 41-50"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://einmaleins.online/einmaleins/50",
            "name": "50er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/50#learningresource",
      "name": "50er-Einmaleins Lernressource",
      "description": "Multiplikation mit 50 - Fortgeschrittene Rechenmethoden",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactiund Resource", "Practice Material", "Educational Game"],
      "teaches": "50er-Einmaleins, Hälfte Konzept, y�zde hesaplama, 5�10 Beziehung",
      "typicalAgeRange": "8-11",
      "inLanguage": "de",
      "educationalUse": ["practice", "self-study", "real-world application"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://einmaleins.online/41-50#learningresource"
      }
    }
  ]
}

export const metadata = {
  title: '50er-Einmaleins | Lerne Multiplikation mit 50',
  description: 'Meistere das 50er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '50er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/50',
  },
}

export default function Number50Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={50} rangeStart={41} rangeEnd={50} />
    </>
  )
}


