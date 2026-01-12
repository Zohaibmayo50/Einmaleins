import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/25#webpage",
      "url": "https://einmaleins.online/einmaleins/25",
      "name": "25er-Einmaleins - Çeyrek ve Yüzde Kavramı",
      "description": "25er-Einmaleins ile çeyrek kavramı ve yüzde hesaplamalarını öğrenin. Para hesaplama için kritik öneme sahip desenleri keşfedin.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/25#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/25#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/25#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@id": "https://einmaleins.online/",
            "name": "Startseite"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@id": "https://einmaleins.online/21-30",
            "name": "Einmaleins 21-30"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://einmaleins.online/einmaleins/25",
            "name": "25er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/25#learningresource",
      "name": "25er-Einmaleins Recurso de Aprendizaje",
      "description": "25 Multiplikation por: Çeyrek (1/4) kavramı, yüzde hesaplamaları (25%=1/4), para hesaplama ve 25-50-75-00 son rakam deseni.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "25er-Einmaleins, çeyrek kavramı, yüzde hesaplama, para hesaplama, 5'in karesi",
      "typicalAgeRange": "8-11",
      "inLanguage": "de",
      "educationalUse": ["practice", "self-study", "real-world application"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://einmaleins.online/21-30#learningresource"
      }
    }
  ]
}

export const metadata = {
  title: '25er-Einmaleins | Lerne Multiplikation mit 25',
  description: 'Meistere das 25er-Einmaleins. Klare ErklÃ¤rungen, Muster und praktische Ãœbungsstrategien.',
  keywords: '25er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/25',
  },
}

export default function Number25Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={25} rangeStart={21} rangeEnd={30} />
    </>
  )
}


