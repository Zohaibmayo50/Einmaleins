import NumberPage from '../../components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/3#webpage",
      "url": "https://einmaleins.online/einmaleins/3",
      "name": "3er-Einmaleins - Multiplikation mit 3",
      "description": "Lerne das grundlegende Konzept der Multiplikation mit 3. Identitätseigenschaft, Muster und praktische Strategien zum Verständnis der Multiplikation mit 3.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/3#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/3#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/3#breadcrumb",
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
            "@id": "https://einmaleins.online/einmaleins/3",
            "name": "3er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/3#learningresource",
      "name": "Lernressource: 3er-Einmaleins",
      "description": "Multiplikation mit 3: Jede Zahl multipliziert mit 3 ergibt ein Vielfaches von 3. Lerne die grundlegenden Regeln der Multiplikation.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "3er-Einmaleins, Multiplikationsregeln, grundlegende Mathematikkonzepte",
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
  title: '3er-Einmaleins | Lerne a Multiplikation mit 3',
  description: 'Meistere das 3er-Einmaleins. Klare Erkl\u00e4rungen, Muster und praktische \u00dcbungsstrategien.',
  alternates: {
    canonical: '/einmaleins/3',
  },
}

export default function MultiplicationTableOf3() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={3} rangeStart={1} rangeEnd={10} />
    </>
  )
}


