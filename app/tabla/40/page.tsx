import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://einmaleins.online/einmaleins/40#webpage", "url": "https://einmaleins.online/einmaleins/40", "name": "40er-Einmaleins - Vierziger-System", "description": "40er-Einmaleins: 4�10, 5�8 Beziehungen und onluk katlama.", "isPartOf": {"@id": "https://einmaleins.online/#website"}, "about": {"@id": "https://einmaleins.online/einmaleins/40#learningresource"}, "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/40#breadcrumb"}, "inLanguage": "de"}, {"@type": "BreadcrumbList", "@id": "https://einmaleins.online/einmaleins/40#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/31-40", "name": "Einmaleins 31-40"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/40", "name": "40er-Einmaleins"}}]}, {"@type": "LearningResource", "@id": "https://einmaleins.online/einmaleins/40#learningresource", "name": "40er-Einmaleins", "description": "Multiplikation mit 40 - Fortgeschrittene Rechenmethoden", "educationalLevel": "Intermediate", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "40er-Einmaleins", "typicalAgeRange": "8-11", "inLanguage": "de", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://einmaleins.online/31-40#learningresource"}}]}

export const metadata = {
  title: '40er-Einmaleins | Lerne Multiplikation mit 40',
  description: 'Meistere das 40er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '40er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/40',
  },
}

export default function Number40Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={40} rangeStart={31} rangeEnd={40} /></>)
}


