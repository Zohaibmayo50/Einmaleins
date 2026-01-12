import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/30#webpage",
      "url": "https://einmaleins.online/einmaleins/30",
      "name": "30er-Einmaleins - Yarım Saat Kavramı",
      "description": "30er-Einmaleins ile yarım saat (30 dakika) ve ay kavramlarını öğrenin. 3×10, 5×6 ilişkileri.",
      "isPartOf": {"@id": "https://einmaleins.online/#website"},
      "about": {"@id": "https://einmaleins.online/einmaleins/30#learningresource"},
      "breadcrumb": {"@id": "https://einmaleins.online/einmaleins/30#breadcrumb"},
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/30#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://einmaleins.online/", "name": "Startseite"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://einmaleins.online/21-30", "name": "Einmaleins 21-30"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://einmaleins.online/einmaleins/30", "name": "30er-Einmaleins"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/30#learningresource",
      "name": "30er-Einmaleins Recurso de Aprendizaje",
      "description": "30 Multiplikation por: Yarım saat (30 dakika), ay günleri (~30 gün), 3×10 ve 5×6 çarpan ilişkileri.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "30er-Einmaleins, yarım saat kavramı, 3×10 ve 5×6 ilişkisi",
      "typicalAgeRange": "8-11",
      "inLanguage": "de",
      "educationalUse": ["practice", "self-study", "real-world application"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://einmaleins.online/21-30#learningresource"}
    }
  ]
}

export const metadata = {
  title: '30er-Einmaleins | Lerne Multiplikation mit 30',
  description: 'Meistere das 30er-Einmaleins. Klare ErklÃ¤rungen, Muster und praktische Ãœbungsstrategien.',
  keywords: '30er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/30',
  },
}

export default function Number30Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={30} rangeStart={21} rangeEnd={30} />
    </>
  )
}


