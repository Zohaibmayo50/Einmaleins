import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://einmaleins.online/einmaleins/84#webpage", "url": "https://einmaleins.online/einmaleins/84", "name": "84er-Einmaleins", "description": "84er-Einmaleins Multiplikation por Multiplikationsf�higkeiten.", "isPartOf": {"@id": "https://einmaleins.online/#website"}, "about": {"@id": "https://einmaleins.online/einmaleins/84#learningresource"}, "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/84#breadcrumb"}, "inLanguage": "de"}, {"@type": "BreadcrumbList", "@id": "https://einmaleins.online/einmaleins/84#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/81-90", "name": "Einmaleins 81-90"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/84", "name": "84er-Einmaleins"}}]}, {"@type": "LearningResource", "@id": "https://einmaleins.online/einmaleins/84#learningresource", "name": "84er-Einmaleins", "description": "Multiplikation mit 84 - Fortgeschrittene Rechenmethoden", "educationalLevel": "Advanced", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "84er-Einmaleins", "typicalAgeRange": "10-12", "inLanguage": "de", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://einmaleins.online/81-90#learningresource"}}]}

export const metadata = {
  title: '84er-Einmaleins | Lerne Multiplikation mit 84',
  description: 'Meistere das 84er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '84er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/84',
  },
}

export default function Number84Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={84} rangeStart={81} rangeEnd={90} /></>)
}


