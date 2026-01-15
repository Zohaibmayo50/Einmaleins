import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/32#webpage",
      "url": "https://einmaleins.online/einmaleins/32",
      "name": "32er-Einmaleins - 2 �ss� 5",
      "description": "32er-Einmaleins: 25=32 Konzept lernen. von Zwei Potenzen und geometrische Muster.",
      "isPartOf": {"@id": "https://einmaleins.online/#website"},
      "about": {"@id": "https://einmaleins.online/einmaleins/32#learningresource"},
      "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/32#breadcrumb"},
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/32#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/31-40", "name": "Einmaleins 31-40"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/32", "name": "32er-Einmaleins"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/32#learningresource",
      "name": "32er-Einmaleins Lernressource",
      "description": "Multiplikation mit 32 - Fortgeschrittene Rechenmethoden",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "32er-Einmaleins, 25 Konzept, von Zwei Potenzen",
      "typicalAgeRange": "8-11",
      "inLanguage": "de",
      "educationalUse": ["practice", "self-study"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://einmaleins.online/31-40#learningresource"}
    }
  ]
}

export const metadata = {
  title: '32er-Einmaleins | Lerne Multiplikation mit 32',
  description: 'Meistere das 32er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '32er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/32',
  },
}

export default function Number32Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={32} rangeStart={31} rangeEnd={40} />
    </>
  )
}


