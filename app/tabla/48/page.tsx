import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://einmaleins.online/einmaleins/48#webpage", "url": "https://einmaleins.online/einmaleins/48", "name": "48er-Einmaleins", "description": "48er-Einmaleins Multiplikation für Multiplikationsfähigkeiten.", "isPartOf": {"@id": "https://einmaleins.online/#website"}, "about": {"@id": "https://einmaleins.online/einmaleins/48#learningresource"}, "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/48#breadcrumb"}, "inLanguage": "de"}, {"@type": "BreadcrumbList", "@id": "https://einmaleins.online/einmaleins/48#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/41-50", "name": "Einmaleins 41-50"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/48", "name": "48er-Einmaleins"}}]}, {"@type": "LearningResource", "@id": "https://einmaleins.online/einmaleins/48#learningresource", "name": "48er-Einmaleins", "description": "Multiplikation mit 48 - Fortgeschrittene Rechenmethoden", "educationalLevel": "Intermediate", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "48er-Einmaleins", "typicalAgeRange": "8-11", "inLanguage": "de", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://einmaleins.online/41-50#learningresource"}}]}

export const metadata = {
  title: '48er-Einmaleins | Lerne Multiplikation mit 48',
  description: 'Meistere das 48er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '48er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/48',
  },
}

export default function Number48Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={48} rangeStart={41} rangeEnd={50} /></>)
}


