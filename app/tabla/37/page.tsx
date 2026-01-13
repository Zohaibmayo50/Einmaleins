import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {"@type": "WebPage", "@id": "https://einmaleins.online/einmaleins/37#webpage", "url": "https://einmaleins.online/einmaleins/37", "name": "37er-Einmaleins - Primzahl", "description": "37er-Einmaleins: Primzahl �zellikleri entdecken. fortgeschrittene Stufe �arpma Multiplikationsf�higkeiten.", "isPartOf": {"@id": "https://einmaleins.online/#website"}, "about": {"@id": "https://einmaleins.online/einmaleins/37#learningresource"}, "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/37#breadcrumb"}, "inLanguage": "de"},
    {"@type": "BreadcrumbList", "@id": "https://einmaleins.online/einmaleins/37#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/31-40", "name": "Einmaleins 31-40"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/37", "name": "37er-Einmaleins"}}]},
    {"@type": "LearningResource", "@id": "https://einmaleins.online/einmaleins/37#learningresource", "name": "37er-Einmaleins Lernressource", "description": "Multiplikation mit 37 - Fortgeschrittene Rechenmethoden", "educationalLevel": "Intermediate", "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"], "teaches": "37er-Einmaleins, Primzahl Konzept", "typicalAgeRange": "8-11", "inLanguage": "de", "educationalUse": ["practice", "self-study"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://einmaleins.online/31-40#learningresource"}}
  ]
}

export const metadata = {
  title: '37er-Einmaleins | Lerne Multiplikation mit 37',
  description: 'Meistere das 37er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '37er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/37',
  },
}

export default function Number37Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={37} rangeStart={31} rangeEnd={40} />
    </>
  )
}


