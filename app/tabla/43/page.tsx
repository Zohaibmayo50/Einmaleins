import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://einmaleins.online/einmaleins/43#webpage", "url": "https://einmaleins.online/einmaleins/43", "name": "43er-Einmaleins", "description": "43er-Einmaleins Multiplikation por Multiplikationsf�higkeiten.", "isPartOf": {"@id": "https://einmaleins.online/#website"}, "about": {"@id": "https://einmaleins.online/einmaleins/43#learningresource"}, "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/43#breadcrumb"}, "inLanguage": "de"}, {"@type": "BreadcrumbList", "@id": "https://einmaleins.online/einmaleins/43#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/41-50", "name": "Einmaleins 41-50"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/43", "name": "43er-Einmaleins"}}]}, {"@type": "LearningResource", "@id": "https://einmaleins.online/einmaleins/43#learningresource", "name": "43er-Einmaleins", "description": "Multiplikation mit 43 - Fortgeschrittene Rechenmethoden", "educationalLevel": "Intermediate", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "43er-Einmaleins", "typicalAgeRange": "8-11", "inLanguage": "de", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://einmaleins.online/41-50#learningresource"}}]}

export const metadata = {
  title: '43er-Einmaleins | Lerne Multiplikation mit 43',
  description: 'Meistere das 43er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '43er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/43',
  },
}

export default function Number43Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={43} rangeStart={41} rangeEnd={50} /></>)
}


