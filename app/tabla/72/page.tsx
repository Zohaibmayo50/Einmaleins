import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://einmaleins.online/einmaleins/72#webpage", "url": "https://einmaleins.online/einmaleins/72", "name": "72er-Einmaleins", "description": "72er-Einmaleins Multiplikation por Multiplikationsf�higkeiten.", "isPartOf": {"@id": "https://einmaleins.online/#website"}, "about": {"@id": "https://einmaleins.online/einmaleins/72#learningresource"}, "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/72#breadcrumb"}, "inLanguage": "de"}, {"@type": "BreadcrumbList", "@id": "https://einmaleins.online/einmaleins/72#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/71-80", "name": "Einmaleins 71-80"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/72", "name": "72er-Einmaleins"}}]}, {"@type": "LearningResource", "@id": "https://einmaleins.online/einmaleins/72#learningresource", "name": "72er-Einmaleins", "description": "Multiplikation mit 72 - Fortgeschrittene Rechenmethoden", "educationalLevel": "Advanced", "learningResourceType": ["Interactiund Resource", "Practice Material"], "teaches": "72er-Einmaleins", "typicalAgeRange": "10-12", "inLanguage": "de", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://einmaleins.online/71-80#learningresource"}}]}

export const metadata = {
  title: '72er-Einmaleins | Lerne Multiplikation mit 72',
  description: 'Meistere das 72er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '72er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/72',
  },
}

export default function Number72Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={72} rangeStart={71} rangeEnd={80} /></>)
}


