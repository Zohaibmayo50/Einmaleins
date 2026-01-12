import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/32#webpage",
      "url": "https://einmaleins.online/einmaleins/32",
      "name": "32er-Einmaleins - 2 Üssü 5",
      "description": "32er-Einmaleins ile 2⁵=32 kavramını öğrenin. İkinin kuvvetleri ve geometrik desenler.",
      "isPartOf": {"@id": "https://einmaleins.online/#website"},
      "about": {"@id": "https://einmaleins.online/einmaleins/32#learningresource"},
      "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/32#breadcrumb"},
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/32#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/31-40", "name": "Einmaleins 31-40"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/32", "name": "32er-Einmaleins"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/32#learningresource",
      "name": "32er-Einmaleins Recurso de Aprendizaje",
      "description": "32 Multiplikation por: 2 üssü 5 (2⁵=32), ikinin kuvvetleri ve 4×8 ilişkisi.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "32er-Einmaleins, 2⁵ kavramı, ikinin kuvvetleri",
      "typicalAgeRange": "8-11",
      "inLanguage": "de",
      "educationalUse": ["practice", "self-study"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://einmaleins.online/31-40#learningresource"}
    }
  ]
}

export const metadata = {
  title: '32er-Einmaleins | Lerne Multiplikation mit 32',
  description: 'Meistere das 32er-Einmaleins. Klare ErklÃ¤rungen, Muster und praktische Ãœbungsstrategien.',
  keywords: '32er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/32',
  },
}

export default function Number32Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={32} rangeStart={31} rangeEnd={40} />
    </>
  )
}


