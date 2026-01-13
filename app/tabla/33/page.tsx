import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/33#webpage",
      "url": "https://einmaleins.online/einmaleins/33",
      "name": "33er-Einmaleins - 3�11 Beziehung",
      "description": "33er-Einmaleins: 3�11 Beziehung �lernen. Stellen Muster und �arpma Strategien.",
      "isPartOf": {"@id": "https://einmaleins.online/#website"},
      "about": {"@id": "https://einmaleins.online/einmaleins/33#learningresource"},
      "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/33#breadcrumb"},
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/33#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/31-40", "name": "Einmaleins 31-40"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/33", "name": "33er-Einmaleins"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/33#learningresource",
      "name": "33er-Einmaleins Lernressource",
      "description": "Multiplikation mit 33 - Fortgeschrittene Rechenmethoden",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "33er-Einmaleins, 3�11 Beziehung, Stellen Muster",
      "typicalAgeRange": "8-11",
      "inLanguage": "de",
      "educationalUse": ["practice", "self-study"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://einmaleins.online/31-40#learningresource"}
    }
  ]
}

export const metadata = {
  title: '33er-Einmaleins | Lerne Multiplikation mit 33',
  description: 'Meistere das 33er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '33er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/33',
  },
}

export default function Number33Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={33} rangeStart={31} rangeEnd={40} />
    </>
  )
}


