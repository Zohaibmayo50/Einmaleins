import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/23#webpage",
      "url": "https://einmaleins.online/einmaleins/23",
      "name": "23er-Einmaleins - Primzahl Muster",
      "description": "23er-Einmaleins: Primzahl Muster und ileri d�zeyde �arpma Fähigkeiteni entwickeln.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/23#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/23#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/23#breadcrumb",
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
            "@id": "https://einmaleins.online/einmaleins/23",
            "name": "23er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/23#learningresource",
      "name": "23er-Einmaleins Lernressource",
      "description": "Multiplikation mit 23 - Fortgeschrittene Rechenmethoden",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "23er-Einmaleins, Primzahl Konzept, ileri �arpma",
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
  title: '23er-Einmaleins | Lerne Multiplikation mit 23',
  description: 'Meistere das 23er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '23er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/23',
  },
}

export default function Number23Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={23} rangeStart={21} rangeEnd={30} />
    </>
  )
}


