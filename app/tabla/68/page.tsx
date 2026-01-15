import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://einmaleins.online/einmaleins/68#webpage", "url": "https://einmaleins.online/einmaleins/68", "name": "68er-Einmaleins", "description": "68er-Einmaleins Multiplikation für Multiplikationsfähigkeiten.", "isPartOf": {"@id": "https://einmaleins.online/#website"}, "about": {"@id": "https://einmaleins.online/einmaleins/68#learningresource"}, "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/68#breadcrumb"}, "inLanguage": "de"}, {"@type": "BreadcrumbList", "@id": "https://einmaleins.online/einmaleins/68#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/61-70", "name": "Einmaleins 61-70"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/68", "name": "68er-Einmaleins"}}]}, {"@type": "LearningResource", "@id": "https://einmaleins.online/einmaleins/68#learningresource", "name": "68er-Einmaleins", "description": "Multiplikation mit 68 - Fortgeschrittene Rechenmethoden", "educationalLevel": "Advanced", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "68er-Einmaleins", "typicalAgeRange": "9-12", "inLanguage": "de", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://einmaleins.online/61-70#learningresource"}}]}

export const metadata = {
  title: '68er-Einmaleins | Lerne Multiplikation mit 68',
  description: 'Meistere das 68er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '68er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/68',
  },
}

export default function Number68Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={68} rangeStart={61} rangeEnd={70} /></>)
}


