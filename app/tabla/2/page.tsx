import NumberPage from '../../components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/tabla/2#webpage",
      "url": "https://einmaleins.online/tabla/2",
      "name": "2er-Einmaleins - Grundlagen der Multiplikation",
      "description": "Lerne die Grundlagen der Multiplikation mit 2. Gerade Zahlen, Verdoppelungsmuster und praktische Strategien.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/tabla/2#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/tabla/2#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/tabla/2#breadcrumb",
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
            "@id": "https://einmaleins.online/tabla/2",
            "name": "2er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/2#learningresource",
      "name": "Lernressource: 2er-Einmaleins",
      "description": "Multiplikation mit 2 (Verdopplung): Lerne das Verdopplungsmuster und grundlegende Multiplikationsfähigkeiten.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "2er-Einmaleins, Verdopplung, grundlegende Multiplikationskonzepte",
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
  title: '2er-Einmaleins | Lerne Multiplikation mit 2',
  description: 'Meistere das 2er-Einmaleins. Klare Erkl�rungen, Verdopplungsmuster und praktische Strategien zum Verst�ndnis der Multiplikation mit 2.',
  alternates: {
    canonical: '/einmaleins/2',
  },
}

export default function MultiplicationTableOf2() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={2} rangeStart={1} rangeEnd={10} />
    </>
  )
}


