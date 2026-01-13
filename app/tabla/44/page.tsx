import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://einmaleins.online/einmaleins/44#webpage", "url": "https://einmaleins.online/einmaleins/44", "name": "44er-Einmaleins", "description": "44er-Einmaleins Multiplikation por Multiplikationsf�higkeiten.", "isPartOf": {"@id": "https://einmaleins.online/#website"}, "about": {"@id": "https://einmaleins.online/einmaleins/44#learningresource"}, "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/44#breadcrumb"}, "inLanguage": "de"}, {"@type": "BreadcrumbList", "@id": "https://einmaleins.online/einmaleins/44#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/41-50", "name": "Einmaleins 41-50"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/44", "name": "44er-Einmaleins"}}]}, {"@type": "LearningResource", "@id": "https://einmaleins.online/einmaleins/44#learningresource", "name": "44er-Einmaleins", "description": "Multiplikation mit 44 - Fortgeschrittene Rechenmethoden", "educationalLevel": "Intermediate", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "44er-Einmaleins", "typicalAgeRange": "8-11", "inLanguage": "de", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://einmaleins.online/41-50#learningresource"}}]}

export const metadata = {
  title: '44er-Einmaleins | Lerne Multiplikation mit 44',
  description: 'Meistere das 44er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '44er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/44',
  },
}

export default function Number44Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={44} rangeStart={41} rangeEnd={50} /></>)
}


