import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://einmaleins.online/einmaleins/83#webpage", "url": "https://einmaleins.online/einmaleins/83", "name": "83er-Einmaleins", "description": "83er-Einmaleins Multiplikation por Multiplikationsf�higkeiten.", "isPartOf": {"@id": "https://einmaleins.online/#website"}, "about": {"@id": "https://einmaleins.online/einmaleins/83#learningresource"}, "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/83#breadcrumb"}, "inLanguage": "de"}, {"@type": "BreadcrumbList", "@id": "https://einmaleins.online/einmaleins/83#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/81-90", "name": "Einmaleins 81-90"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/83", "name": "83er-Einmaleins"}}]}, {"@type": "LearningResource", "@id": "https://einmaleins.online/einmaleins/83#learningresource", "name": "83er-Einmaleins", "description": "Multiplikation mit 83 - Fortgeschrittene Rechenmethoden", "educationalLevel": "Advanced", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "83er-Einmaleins", "typicalAgeRange": "10-12", "inLanguage": "de", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://einmaleins.online/81-90#learningresource"}}]}

export const metadata = {
  title: '83er-Einmaleins | Lerne Multiplikation mit 83',
  description: 'Meistere das 83er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '83er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/83',
  },
}

export default function Number83Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={83} rangeStart={81} rangeEnd={90} /></>)
}


