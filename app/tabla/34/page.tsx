import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/34#webpage",
      "url": "https://einmaleins.online/einmaleins/34",
      "name": "34er-Einmaleins - 2�17 Beziehung",
      "description": "34er-Einmaleins: 2�17 Beziehung �lernen. �ift Zahl Muster und �arpma Multiplikationsf�higkeiten.",
      "isPartOf": {"@id": "https://einmaleins.online/#website"},
      "about": {"@id": "https://einmaleins.online/einmaleins/34#learningresource"},
      "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/34#breadcrumb"},
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/34#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/31-40", "name": "Einmaleins 31-40"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/34", "name": "34er-Einmaleins"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/34#learningresource",
      "name": "34er-Einmaleins Lernressource",
      "description": "Multiplikation mit 34 - Fortgeschrittene Rechenmethoden",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "34er-Einmaleins, 2�17 Beziehung, �ift Zahllar",
      "typicalAgeRange": "8-11",
      "inLanguage": "de",
      "educationalUse": ["practice", "self-study"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://einmaleins.online/31-40#learningresource"}
    }
  ]
}

export const metadata = {
  title: '34er-Einmaleins | Lerne Multiplikation mit 34',
  description: 'Meistere das 34er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '34er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/34',
  },
}

export default function Number34Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={34} rangeStart={31} rangeEnd={40} />
    </>
  )
}


