import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/22#webpage",
      "url": "https://einmaleins.online/einmaleins/22",
      "name": "22er-Einmaleins - Çift Sayı Desenleri",
      "description": "22er-Einmaleins ile 2 ve 11 tablolarının ilişkisini öğrenin. Çift sayı desenleri ve kolay çarpma stratejileri.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/22#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/22#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/22#breadcrumb",
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
            "@id": "https://einmaleins.online/einmaleins/22",
            "name": "22er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/22#learningresource",
      "name": "22er-Einmaleins Recurso de Aprendizaje",
      "description": "22 Multiplikation por: 2 ve 11 tablolarının birleşimi (2×11=22), çift sayı desenleri ve ikiye katlama.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "22er-Einmaleins, 2×11 ilişkisi, çift sayılar",
      "typicalAgeRange": "8-11",
      "inLanguage": "de",
      "educationalUse": ["practice", "self-study"],
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
  title: '22er-Einmaleins | Lerne Multiplikation mit 22',
  description: 'Meistere das 22er-Einmaleins. Klare ErklÃ¤rungen, Muster und praktische Ãœbungsstrategien.',
  keywords: '22er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/22',
  },
}

export default function Number22Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={22} rangeStart={21} rangeEnd={30} />
    </>
  )
}


