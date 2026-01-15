import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/35#webpage",
      "url": "https://einmaleins.online/einmaleins/35",
      "name": "35er-Einmaleins - 5�7 Beziehung",
      "description": "35er-Einmaleins: 5�7 Beziehung lernen. Hafta und Fünfer System Verbindungen.",
      "isPartOf": {"@id": "https://einmaleins.online/#website"},
      "about": {"@id": "https://einmaleins.online/einmaleins/35#learningresource"},
      "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/35#breadcrumb"},
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/35#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/31-40", "name": "Einmaleins 31-40"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/35", "name": "35er-Einmaleins"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/35#learningresource",
      "name": "35er-Einmaleins Lernressource",
      "description": "Multiplikation mit 35 - Fortgeschrittene Rechenmethoden",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "35er-Einmaleins, 5�7 Beziehung, Woche-Fünfer baglantisi",
      "typicalAgeRange": "8-11",
      "inLanguage": "de",
      "educationalUse": ["practice", "self-study"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://einmaleins.online/31-40#learningresource"}
    }
  ]
}

export const metadata = {
  title: '35er-Einmaleins | Lerne Multiplikation mit 35',
  description: 'Meistere das 35er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '35er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/35',
  },
}

export default function Number35Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={35} rangeStart={31} rangeEnd={40} />
    </>
  )
}


