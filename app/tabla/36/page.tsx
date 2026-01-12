import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {"@type": "WebPage", "@id": "https://einmaleins.online/einmaleins/36#webpage", "url": "https://einmaleins.online/einmaleins/36", "name": "36er-Einmaleins - 6 Kare Kavramı", "description": "36er-Einmaleins ile 6²=36 kare kavramını öğrenin. 4×9, 6×6 ilişkileri ve geometrik desenler.", "isPartOf": {"@id": "https://einmaleins.online/#website"}, "about": {"@id": "https://einmaleins.online/einmaleins/36#learningresource"}, "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/36#breadcrumb"}, "inLanguage": "de"},
    {"@type": "BreadcrumbList", "@id": "https://einmaleins.online/einmaleins/36#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/31-40", "name": "Einmaleins 31-40"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/36", "name": "36er-Einmaleins"}}]},
    {"@type": "LearningResource", "@id": "https://einmaleins.online/einmaleins/36#learningresource", "name": "36er-Einmaleins Recurso de Aprendizaje", "description": "36 Multiplikation por: 6 kare (6²=36), 4×9 ilişkisi ve çoklu çarpan kombinasyonları.", "educationalLevel": "Intermediate", "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"], "teaches": "36er-Einmaleins, 6² kavramı, 4×9 ve 6×6 ilişkisi", "typicalAgeRange": "8-11", "inLanguage": "de", "educationalUse": ["practice", "self-study"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://einmaleins.online/31-40#learningresource"}}
  ]
}

export const metadata = {
  title: '36er-Einmaleins | Lerne Multiplikation mit 36',
  description: 'Meistere das 36er-Einmaleins. Klare ErklÃ¤rungen, Muster und praktische Ãœbungsstrategien.',
  keywords: '36er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/36',
  },
}

export default function Number36Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={36} rangeStart={31} rangeEnd={40} />
    </>
  )
}


