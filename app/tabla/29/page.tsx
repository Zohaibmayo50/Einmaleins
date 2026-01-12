import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/29#webpage",
      "url": "https://einmaleins.online/einmaleins/29",
      "name": "29er-Einmaleins - Asal Sayı Desenleri",
      "description": "29er-Einmaleins ile asal sayı özelliklerini keşfedin. İleri seviye çarpma becerileri geliştirin.",
      "isPartOf": {"@id": "https://einmaleins.online/#website"},
      "about": {"@id": "https://einmaleins.online/einmaleins/29#learningresource"},
      "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/29#breadcrumb"},
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/29#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/21-30", "name": "Einmaleins 21-30"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/29", "name": "29er-Einmaleins"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/29#learningresource",
      "name": "29er-Einmaleins Recurso de Aprendizaje",
      "description": "29 Multiplikation por: Asal sayı özellikleri ve ileri düzey çarpma pratikleri.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "29er-Einmaleins, asal sayı kavramı, ileri çarpma",
      "typicalAgeRange": "8-11",
      "inLanguage": "de",
      "educationalUse": ["practice", "self-study"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://einmaleins.online/21-30#learningresource"}
    }
  ]
}

export const metadata = {
  title: '29er-Einmaleins | Lerne Multiplikation mit 29',
  description: 'Meistere das 29er-Einmaleins. Klare ErklÃ¤rungen, Muster und praktische Ãœbungsstrategien.',
  keywords: '29er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/29',
  },
}

export default function Number29Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={29} rangeStart={21} rangeEnd={30} />
    </>
  )
}


