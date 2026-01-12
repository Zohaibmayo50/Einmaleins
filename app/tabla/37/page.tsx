import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {"@type": "WebPage", "@id": "https://einmaleins.online/einmaleins/37#webpage", "url": "https://einmaleins.online/einmaleins/37", "name": "37er-Einmaleins - Asal Sayı", "description": "37er-Einmaleins ile asal sayı özelliklerini keşfedin. İleri seviye çarpma becerileri.", "isPartOf": {"@id": "https://einmaleins.online/#website"}, "about": {"@id": "https://einmaleins.online/einmaleins/37#learningresource"}, "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/37#breadcrumb"}, "inLanguage": "de"},
    {"@type": "BreadcrumbList", "@id": "https://einmaleins.online/einmaleins/37#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/31-40", "name": "Einmaleins 31-40"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/37", "name": "37er-Einmaleins"}}]},
    {"@type": "LearningResource", "@id": "https://einmaleins.online/einmaleins/37#learningresource", "name": "37er-Einmaleins Recurso de Aprendizaje", "description": "37 Multiplikation por: Asal sayı özellikleri ve ileri düzey çarpma pratikleri.", "educationalLevel": "Intermediate", "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"], "teaches": "37er-Einmaleins, asal sayı kavramı", "typicalAgeRange": "8-11", "inLanguage": "de", "educationalUse": ["practice", "self-study"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://einmaleins.online/31-40#learningresource"}}
  ]
}

export const metadata = {
  title: '37er-Einmaleins | Lerne Multiplikation mit 37',
  description: 'Meistere das 37er-Einmaleins. Klare ErklÃ¤rungen, Muster und praktische Ãœbungsstrategien.',
  keywords: '37er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/37',
  },
}

export default function Number37Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={37} rangeStart={31} rangeEnd={40} />
    </>
  )
}


