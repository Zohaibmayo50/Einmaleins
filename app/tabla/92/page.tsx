import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://einmaleins.online/einmaleins/92#webpage", "url": "https://einmaleins.online/einmaleins/92", "name": "92er-Einmaleins", "description": "92er-Einmaleins Multiplikation por Multiplikationsf�higkeiten.", "isPartOf": {"@id": "https://einmaleins.online/#website"}, "about": {"@id": "https://einmaleins.online/einmaleins/92#learningresource"}, "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/92#breadcrumb"}, "inLanguage": "de"}, {"@type": "BreadcrumbList", "@id": "https://einmaleins.online/einmaleins/92#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/91-100", "name": "Einmaleins 91-100"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/92", "name": "92er-Einmaleins"}}]}, {"@type": "LearningResource", "@id": "https://einmaleins.online/einmaleins/92#learningresource", "name": "92er-Einmaleins", "description": "Multiplikation mit 92 - Fortgeschrittene Rechenmethoden", "educationalLevel": "Advanced", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "92er-Einmaleins", "typicalAgeRange": "10-12", "inLanguage": "de", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://einmaleins.online/91-100#learningresource"}}]}
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '92er-Einmaleins | Lerne Multiplikation mit 92',
  description: 'Meistere das 92er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '92er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/92',
  },
}

export default function Number92Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={92} rangeStart={91} rangeEnd={100} /></>)
}


