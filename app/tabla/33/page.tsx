import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/33#webpage",
      "url": "https://einmaleins.online/einmaleins/33",
      "name": "33er-Einmaleins - 3×11 İlişkisi",
      "description": "33er-Einmaleins ile 3×11 ilişkisini öğrenin. Basamak desenleri ve çarpma stratejileri.",
      "isPartOf": {"@id": "https://einmaleins.online/#website"},
      "about": {"@id": "https://einmaleins.online/einmaleins/33#learningresource"},
      "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/33#breadcrumb"},
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/33#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/31-40", "name": "Einmaleins 31-40"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/33", "name": "33er-Einmaleins"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/33#learningresource",
      "name": "33er-Einmaleins Recurso de Aprendizaje",
      "description": "33 Multiplikation por: 3 ve 11 tablolarının birleşimi (3×11=33), çift basamak desenleri.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "33er-Einmaleins, 3×11 ilişkisi, basamak desenleri",
      "typicalAgeRange": "8-11",
      "inLanguage": "de",
      "educationalUse": ["practice", "self-study"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://einmaleins.online/31-40#learningresource"}
    }
  ]
}

export const metadata = {
  title: '33er-Einmaleins | Lerne Multiplikation mit 33',
  description: 'Meistere das 33er-Einmaleins. Klare ErklÃ¤rungen, Muster und praktische Ãœbungsstrategien.',
  keywords: '33er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/33',
  },
}

export default function Number33Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={33} rangeStart={31} rangeEnd={40} />
    </>
  )
}


