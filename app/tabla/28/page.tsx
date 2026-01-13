import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/28#webpage",
      "url": "https://einmaleins.online/einmaleins/28",
      "name": "28er-Einmaleins - 4�7 Beziehung",
      "description": "28er-Einmaleins: 4�7 Beziehung �lernen. Hafta g�nleri und ay Konzepte praktische Anwendungen.",
      "isPartOf": {"@id": "https://einmaleins.online/#website"},
      "about": {"@id": "https://einmaleins.online/einmaleins/28#learningresource"},
      "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/28#breadcrumb"},
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/28#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/21-30", "name": "Einmaleins 21-30"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/28", "name": "28er-Einmaleins"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/28#learningresource",
      "name": "28er-Einmaleins Lernressource",
      "description": "Multiplikation mit 28 - Fortgeschrittene Rechenmethoden",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactiund Resource", "Practice Material", "Educational Game"],
      "teaches": "28er-Einmaleins, 4�7 Beziehung, ay und hafta Konzept",
      "typicalAgeRange": "8-11",
      "inLanguage": "de",
      "educationalUse": ["practice", "self-study", "real-world application"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://einmaleins.online/21-30#learningresource"}
    }
  ]
}

export const metadata = {
  title: '28er-Einmaleins | Lerne Multiplikation mit 28',
  description: 'Meistere das 28er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '28er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/28',
  },
}

export default function Number28Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={28} rangeStart={21} rangeEnd={30} />
    </>
  )
}


