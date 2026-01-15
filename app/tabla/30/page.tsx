import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/30#webpage",
      "url": "https://einmaleins.online/einmaleins/30",
      "name": "30er-Einmaleins - Hälfte Stunde Konzept",
      "description": "30er-Einmaleins: Hälfte Stunde (30 Minuten) und ay Konzepte lernen. 3�10, 5�6 Beziehungen.",
      "isPartOf": {"@id": "https://einmaleins.online/#website"},
      "about": {"@id": "https://einmaleins.online/einmaleins/30#learningresource"},
      "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/30#breadcrumb"},
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/30#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/21-30", "name": "Einmaleins 21-30"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/30", "name": "30er-Einmaleins"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/30#learningresource",
      "name": "30er-Einmaleins Lernressource",
      "description": "Multiplikation mit 30 - Fortgeschrittene Rechenmethoden",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "30er-Einmaleins, Hälfte Stunde Konzept, 3�10 und 5�6 Beziehung",
      "typicalAgeRange": "8-11",
      "inLanguage": "de",
      "educationalUse": ["practice", "self-study", "real-world application"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://einmaleins.online/21-30#learningresource"}
    }
  ]
}

export const metadata = {
  title: '30er-Einmaleins | Lerne Multiplikation mit 30',
  description: 'Meistere das 30er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '30er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/30',
  },
}

export default function Number30Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={30} rangeStart={21} rangeEnd={30} />
    </>
  )
}


