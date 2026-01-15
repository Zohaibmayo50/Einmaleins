import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://einmaleins.online/einmaleins/96#webpage", "url": "https://einmaleins.online/einmaleins/96", "name": "96er-Einmaleins", "description": "96er-Einmaleins Multiplikation für Multiplikationsfähigkeiten.", "isPartOf": {"@id": "https://einmaleins.online/#website"}, "about": {"@id": "https://einmaleins.online/einmaleins/96#learningresource"}, "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/96#breadcrumb"}, "inLanguage": "de"}, {"@type": "BreadcrumbList", "@id": "https://einmaleins.online/einmaleins/96#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/91-100", "name": "Einmaleins 91-100"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/96", "name": "96er-Einmaleins"}}]}, {"@type": "LearningResource", "@id": "https://einmaleins.online/einmaleins/96#learningresource", "name": "96er-Einmaleins", "description": "Multiplikation mit 96 - Fortgeschrittene Rechenmethoden", "educationalLevel": "Advanced", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "96er-Einmaleins", "typicalAgeRange": "10-12", "inLanguage": "de", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://einmaleins.online/91-100#learningresource"}}]}
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '96er-Einmaleins | Lerne Multiplikation mit 96',
  description: 'Meistere das 96er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '96er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/96',
  },
}

export default function Number96Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={96} rangeStart={91} rangeEnd={100} /></>)
}


