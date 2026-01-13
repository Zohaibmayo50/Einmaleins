import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://einmaleins.online/einmaleins/64#webpage", "url": "https://einmaleins.online/einmaleins/64", "name": "64er-Einmaleins", "description": "64er-Einmaleins Multiplikation por Multiplikationsf�higkeiten.", "isPartOf": {"@id": "https://einmaleins.online/#website"}, "about": {"@id": "https://einmaleins.online/einmaleins/64#learningresource"}, "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/64#breadcrumb"}, "inLanguage": "de"}, {"@type": "BreadcrumbList", "@id": "https://einmaleins.online/einmaleins/64#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/61-70", "name": "Einmaleins 61-70"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/64", "name": "64er-Einmaleins"}}]}, {"@type": "LearningResource", "@id": "https://einmaleins.online/einmaleins/64#learningresource", "name": "64er-Einmaleins", "description": "Multiplikation mit 64 - Fortgeschrittene Rechenmethoden", "educationalLevel": "Advanced", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "64er-Einmaleins", "typicalAgeRange": "9-12", "inLanguage": "de", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://einmaleins.online/61-70#learningresource"}}]}

export const metadata = {
  title: '64er-Einmaleins | Lerne Multiplikation mit 64',
  description: 'Meistere das 64er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '64er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/64',
  },
}

export default function Number64Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={64} rangeStart={61} rangeEnd={70} /></>)
}


