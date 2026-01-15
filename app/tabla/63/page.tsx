import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://einmaleins.online/einmaleins/63#webpage", "url": "https://einmaleins.online/einmaleins/63", "name": "63er-Einmaleins", "description": "63er-Einmaleins Multiplikation für Multiplikationsfähigkeiten.", "isPartOf": {"@id": "https://einmaleins.online/#website"}, "about": {"@id": "https://einmaleins.online/einmaleins/63#learningresource"}, "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/63#breadcrumb"}, "inLanguage": "de"}, {"@type": "BreadcrumbList", "@id": "https://einmaleins.online/einmaleins/63#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/61-70", "name": "Einmaleins 61-70"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/63", "name": "63er-Einmaleins"}}]}, {"@type": "LearningResource", "@id": "https://einmaleins.online/einmaleins/63#learningresource", "name": "63er-Einmaleins", "description": "Multiplikation mit 63 - Fortgeschrittene Rechenmethoden", "educationalLevel": "Advanced", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "63er-Einmaleins", "typicalAgeRange": "9-12", "inLanguage": "de", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://einmaleins.online/61-70#learningresource"}}]}

export const metadata = {
  title: '63er-Einmaleins | Lerne Multiplikation mit 63',
  description: 'Meistere das 63er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '63er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/63',
  },
}

export default function Number63Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={63} rangeStart={61} rangeEnd={70} /></>)
}


