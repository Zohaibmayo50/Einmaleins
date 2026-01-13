import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://einmaleins.online/einmaleins/71#webpage", "url": "https://einmaleins.online/einmaleins/71", "name": "71er-Einmaleins", "description": "71er-Einmaleins Multiplikation por Multiplikationsf�higkeiten.", "isPartOf": {"@id": "https://einmaleins.online/#website"}, "about": {"@id": "https://einmaleins.online/einmaleins/71#learningresource"}, "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/71#breadcrumb"}, "inLanguage": "de"}, {"@type": "BreadcrumbList", "@id": "https://einmaleins.online/einmaleins/71#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/71-80", "name": "Einmaleins 71-80"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/71", "name": "71er-Einmaleins"}}]}, {"@type": "LearningResource", "@id": "https://einmaleins.online/einmaleins/71#learningresource", "name": "71er-Einmaleins", "description": "Multiplikation mit 71 - Fortgeschrittene Rechenmethoden", "educationalLevel": "Advanced", "learningResourceType": ["Interactiund Resource", "Practice Material"], "teaches": "71er-Einmaleins", "typicalAgeRange": "10-12", "inLanguage": "de", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://einmaleins.online/71-80#learningresource"}}]}

export const metadata = {
  title: '71er-Einmaleins | Lerne Multiplikation mit 71',
  description: 'Meistere das 71er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '71er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/71',
  },
}

export default function Number71Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={71} rangeStart={71} rangeEnd={80} /></>)
}


