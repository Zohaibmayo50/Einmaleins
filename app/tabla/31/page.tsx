import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/31#webpage",
      "url": "https://einmaleins.online/einmaleins/31",
      "name": "31er-Einmaleins - Ay G�nleri",
      "description": "31er-Einmaleins: ay g�nleri Konzept lernen. Primzahl �zellikleri und Zeitberechnung.",
      "isPartOf": {"@id": "https://einmaleins.online/#website"},
      "about": {"@id": "https://einmaleins.online/einmaleins/31#learningresource"},
      "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/31#breadcrumb"},
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/31#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/31-40", "name": "Einmaleins 31-40"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/31", "name": "31er-Einmaleins"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/31#learningresource",
      "name": "31er-Einmaleins Lernressource",
      "description": "Multiplikation mit 31 - Fortgeschrittene Rechenmethoden",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "31er-Einmaleins, ay g�nleri Konzept, Primzahl",
      "typicalAgeRange": "8-11",
      "inLanguage": "de",
      "educationalUse": ["practice", "self-study", "real-world application"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://einmaleins.online/31-40#learningresource"}
    }
  ]
}

export const metadata = {
  title: '31er-Einmaleins | Lerne Multiplikation mit 31',
  description: 'Meistere das 31er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '31er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/31',
  },
}

export default function Number31Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={31} rangeStart={31} rangeEnd={40} />
    </>
  )
}


