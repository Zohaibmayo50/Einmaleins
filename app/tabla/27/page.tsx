import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/27#webpage",
      "url": "https://einmaleins.online/einmaleins/27",
      "name": "27er-Einmaleins - 3 Küp Kavramı",
      "description": "27er-Einmaleins ile 3³=27 küp kavramını öğrenin. 3×9 ilişkisi ve geometrik desenler.",
      "isPartOf": {"@id": "https://einmaleins.online/#website"},
      "about": {"@id": "https://einmaleins.online/einmaleins/27#learningresource"},
      "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/27#breadcrumb"},
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/27#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/21-30", "name": "Einmaleins 21-30"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/27", "name": "27er-Einmaleins"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/27#learningresource",
      "name": "27er-Einmaleins Recurso de Aprendizaje",
      "description": "27 Multiplikation por: 3 küp (3³=27), 3×9 ilişkisi ve ileri seviye çarpma becerileri.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "27er-Einmaleins, 3 küp kavramı, 3×9 ilişkisi",
      "typicalAgeRange": "8-11",
      "inLanguage": "de",
      "educationalUse": ["practice", "self-study"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://einmaleins.online/21-30#learningresource"}
    }
  ]
}

export const metadata = {
  title: '27er-Einmaleins | Lerne Multiplikation mit 27',
  description: 'Meistere das 27er-Einmaleins. Klare ErklÃ¤rungen, Muster und praktische Ãœbungsstrategien.',
  keywords: '27er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/27',
  },
}

export default function Number27Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={27} rangeStart={21} rangeEnd={30} />
    </>
  )
}


