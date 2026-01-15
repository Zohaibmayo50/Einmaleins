import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://einmaleins.online/einmaleins/56#webpage", "url": "https://einmaleins.online/einmaleins/56", "name": "56er-Einmaleins", "description": "56er-Einmaleins Multiplikation für Multiplikationsfähigkeiten.", "isPartOf": {"@id": "https://einmaleins.online/#website"}, "about": {"@id": "https://einmaleins.online/einmaleins/56#learningresource"}, "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/56#breadcrumb"}, "inLanguage": "de"}, {"@type": "BreadcrumbList", "@id": "https://einmaleins.online/einmaleins/56#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/51-60", "name": "Einmaleins 51-60"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/56", "name": "56er-Einmaleins"}}]}, {"@type": "LearningResource", "@id": "https://einmaleins.online/einmaleins/56#learningresource", "name": "56er-Einmaleins", "description": "Multiplikation mit 56 - Fortgeschrittene Rechenmethoden", "educationalLevel": "Advanced", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "56er-Einmaleins", "typicalAgeRange": "9-12", "inLanguage": "de", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://einmaleins.online/51-60#learningresource"}}]}

export const metadata = {
  title: '56er-Einmaleins | Lerne Multiplikation mit 56',
  description: 'Meistere das 56er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '56er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/56',
  },
}

export default function Number56Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={56} rangeStart={51} rangeEnd={60} /></>)
}


