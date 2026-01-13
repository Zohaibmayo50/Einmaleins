import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/14#webpage",
      "url": "https://einmaleins.online/einmaleins/14",
      "name": "14er-Einmaleins - zwei Haftalik D�ng�",
      "description": "14er-Einmaleins: hafta und zaman Konzepte �lernen. 7�2 Beziehung und pratik stratejilerle Multiplikation mit 14 - Fortgeschrittene Rechenmethoden",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/14#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/14#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/14#breadcrumb",
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
            "@id": "https://einmaleins.online/11-20",
            "name": "Einmaleins 11-20"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://einmaleins.online/einmaleins/14",
            "name": "14er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/14#learningresource",
      "name": "14er-Einmaleins Lernressource",
      "description": "Multiplikation mit 14 - Fortgeschrittene Rechenmethoden",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "14er-Einmaleins, hafta hesaplama, 7 tablosunun katlari",
      "typicalAgeRange": "7-10",
      "inLanguage": "de",
      "educationalUse": ["practice", "self-study", "real-world application"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://einmaleins.online/11-20#learningresource"
      }
    }
  ]
}

export const metadata = {
  title: '14er-Einmaleins - Lustige Spiele und Praktische \u00dcbungen',
  description: 'Meistere das 14er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '14er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/14',
  },
}

export default function Number14Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={14} rangeStart={11} rangeEnd={20} />
    </>
  )
}


