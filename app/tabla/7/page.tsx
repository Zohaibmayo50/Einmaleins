import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/7#webpage",
      "url": "https://einmaleins.online/einmaleins/7",
      "name": "7er-Einmaleins - Systemas de Siete",
      "description": "Lerne patrones de conteo de siete con la 7er-Einmaleins. Aplicaciones pr�cticas con d�as de la semana y patrones peri�dicos.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/7#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/7#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/7#breadcrumb",
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
            "@id": "https://einmaleins.online/1-10",
            "name": "Einmaleins 1-10"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://einmaleins.online/einmaleins/7",
            "name": "7er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/7#learningresource",
      "name": "7er-Einmaleins Lernressource",
      "description": "Multiplikation mit 7 - Fortgeschrittene Rechenmethoden",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "7er-Einmaleins, Siebener Zählen, hafta g�nleri Konzept",
      "typicalAgeRange": "6-9",
      "inLanguage": "de",
      "educationalUse": ["practice", "self-study"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://einmaleins.online/1-10#learningresource"
      }
    }
  ]
}

export const metadata = {
  title: '7er-Einmaleins - Juegos Divertidos y Ejercicios Pr�cticos',
  description: 'Meistere das 7er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '7er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/7',
  },
}

export default function Number7Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={7} rangeStart={1} rangeEnd={10} />
    </>
  )
}


