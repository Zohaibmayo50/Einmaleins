import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://einmaleins.online/einmaleins/57#webpage", "url": "https://einmaleins.online/einmaleins/57", "name": "57er-Einmaleins", "description": "57er-Einmaleins Multiplikation por Multiplikationsf�higkeiten.", "isPartOf": {"@id": "https://einmaleins.online/#website"}, "about": {"@id": "https://einmaleins.online/einmaleins/57#learningresource"}, "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/57#breadcrumb"}, "inLanguage": "de"}, {"@type": "BreadcrumbList", "@id": "https://einmaleins.online/einmaleins/57#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/51-60", "name": "Einmaleins 51-60"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/57", "name": "57er-Einmaleins"}}]}, {"@type": "LearningResource", "@id": "https://einmaleins.online/einmaleins/57#learningresource", "name": "57er-Einmaleins", "description": "Multiplikation mit 57 - Fortgeschrittene Rechenmethoden", "educationalLevel": "Advanced", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "57er-Einmaleins", "typicalAgeRange": "9-12", "inLanguage": "de", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://einmaleins.online/51-60#learningresource"}}]}

export const metadata = {
  title: '57er-Einmaleins | Lerne Multiplikation mit 57',
  description: 'Meistere das 57er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '57er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/57',
  },
}

export default function Number57Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={57} rangeStart={51} rangeEnd={60} /></>)
}


