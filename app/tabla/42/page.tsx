import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://einmaleins.online/einmaleins/42#webpage", "url": "https://einmaleins.online/einmaleins/42", "name": "42er-Einmaleins", "description": "42er-Einmaleins Multiplikation por Multiplikationsf�higkeiten.", "isPartOf": {"@id": "https://einmaleins.online/#website"}, "about": {"@id": "https://einmaleins.online/einmaleins/42#learningresource"}, "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/42#breadcrumb"}, "inLanguage": "de"}, {"@type": "BreadcrumbList", "@id": "https://einmaleins.online/einmaleins/42#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/41-50", "name": "Einmaleins 41-50"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/42", "name": "42er-Einmaleins"}}]}, {"@type": "LearningResource", "@id": "https://einmaleins.online/einmaleins/42#learningresource", "name": "42er-Einmaleins", "description": "Multiplikation mit 42 - Fortgeschrittene Rechenmethoden", "educationalLevel": "Intermediate", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "42er-Einmaleins", "typicalAgeRange": "8-11", "inLanguage": "de", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://einmaleins.online/41-50#learningresource"}}]}

export const metadata = {
  title: '42er-Einmaleins | Lerne Multiplikation mit 42',
  description: 'Meistere das 42er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '42er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/42',
  },
}

export default function Number42Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={42} rangeStart={41} rangeEnd={50} /></>)
}


