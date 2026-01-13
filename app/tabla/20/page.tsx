import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/20#webpage",
      "url": "https://einmaleins.online/einmaleins/20",
      "name": "20er-Einmaleins - Zwanziger-System",
      "description": "20er-Einmaleins: Zwanziger Zählen Systemi �lernen. einfache 0 Anhängen Strategie und praktische Anwendungen.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/20#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/20#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/20#breadcrumb",
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
            "name": "11-20er-Einmaleins"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://einmaleins.online/einmaleins/20",
            "name": "20er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/20#learningresource",
      "name": "20er-Einmaleins Lernressource",
      "description": "Multiplikation mit 20 - Fortgeschrittene Rechenmethoden",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "20er-Einmaleins, Zwanziger System, 10 tablosunun katlari, Geldrechnung",
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
  title: '20er-Einmaleins - Lustige Spiele und Praktische \u00dcbungen',
  description: 'Meistere das 20er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '20er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/20',
  },
}

export default function Number20Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={20} rangeStart={11} rangeEnd={20} />
    </>
  )
}


