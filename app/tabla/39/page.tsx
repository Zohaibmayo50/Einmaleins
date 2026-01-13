import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://einmaleins.online/einmaleins/39#webpage", "url": "https://einmaleins.online/einmaleins/39", "name": "39er-Einmaleins", "description": "39er-Einmaleins: 3�13 Beziehung.", "isPartOf": {"@id": "https://einmaleins.online/#website"}, "about": {"@id": "https://einmaleins.online/einmaleins/39#learningresource"}, "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/39#breadcrumb"}, "inLanguage": "de"}, {"@type": "BreadcrumbList", "@id": "https://einmaleins.online/einmaleins/39#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/31-40", "name": "Einmaleins 31-40"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/39", "name": "39er-Einmaleins"}}]}, {"@type": "LearningResource", "@id": "https://einmaleins.online/einmaleins/39#learningresource", "name": "39er-Einmaleins", "description": "Multiplikation mit 39 - Fortgeschrittene Rechenmethoden", "educationalLevel": "Intermediate", "learningResourceType": ["Interactiund Resource", "Practice Material"], "teaches": "39er-Einmaleins", "typicalAgeRange": "8-11", "inLanguage": "de", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://einmaleins.online/31-40#learningresource"}}]}

export const metadata = {
  title: '39er-Einmaleins | Lerne Multiplikation mit 39',
  description: 'Meistere das 39er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '39er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/39',
  },
}

export default function Number39Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={39} rangeStart={31} rangeEnd={40} /></>)
}


