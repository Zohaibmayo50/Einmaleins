import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/10#webpage",
      "url": "https://einmaleins.online/einmaleins/10",
      "name": "10er-Einmaleins - Base del Dezimalsystem",
      "description": "Lerne das Dezimalsystem-Konzept und Stellenwert mit dem 10er-Einmaleins. Verstehe die Grundlage der Mathematik mit der einfachsten Einmaleins-Tabelle.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/10#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/10#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/10#breadcrumb",
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
            "@id": "https://einmaleins.online/1-10",
            "name": "Einmaleins 1-10"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://einmaleins.online/einmaleins/10",
            "name": "10er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/10#learningresource",
      "name": "10er-Einmaleins Lernressource",
      "description": "Multiplikation mit 10 - Fortgeschrittene Rechenmethoden",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "10er-Einmaleins, onluk System, yer degeri, sifir Anhängen Regel",
      "typicalAgeRange": "6-9",
      "inLanguage": "de",
      "educationalUse": ["practice", "self-study", "foundational concept"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://einmaleins.online/1-10#learningresource"
      }
    }
  ]
}

export const metadata = {
  title: '10er-Einmaleins - Lustige Spiele und Praktische \u00dcbungen',
  description: 'Meistere das 10er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '10er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/10',
  },
}

export default function Number10Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={10} rangeStart={1} rangeEnd={10} />
    </>
  )
}


