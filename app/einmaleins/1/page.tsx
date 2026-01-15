import NumberPage from '../../components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/1#webpage",
      "url": "https://einmaleins.online/einmaleins/1",
      "name": "1er-Einmaleins - Multiplikation mit 1",
      "description": "Lerne das grundlegende Konzept der Multiplikation mit 1. Identitätseigenschaft, Muster und praktische Strategien zum Verständnis der Multiplikation mit 1.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/1#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/1#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/1#breadcrumb",
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
            "@id": "https://einmaleins.online/einmaleins/1",
            "name": "1er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/1#learningresource",
      "name": "Lernressource: 1er-Einmaleins",
      "description": "Multiplikation mit 1 (Identitätseigenschaft): Jede Zahl multipliziert mit 1 ergibt die gleiche Zahl. Lerne die grundlegenden Regeln der Multiplikation.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "1er-Einmaleins, Identitätseigenschaft, grundlegende Multiplikationskonzepte",
      "typicalAgeRange": "6-8",
      "inLanguage": "de",
      "educationalUse": ["practice", "self-study"],
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
  title: '1er-Einmaleins | Lerne Multiplikation mit 1',
  description: 'Meistere das 1er-Einmaleins. Klare Erklärungen, Muster und praktische Strategien zum Verständnis der Identitätseigenschaft und der Grundlagen der Multiplikation.',
  alternates: {
    canonical: '/einmaleins/1',
  },
}

export default function MultiplicationTableOf1() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={1} rangeStart={1} rangeEnd={10} />
    </>
  )
}

