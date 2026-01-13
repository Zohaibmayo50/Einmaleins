import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/18#webpage",
      "url": "https://einmaleins.online/einmaleins/18",
      "name": "18er-Einmaleins - Resitlik Yasi",
      "description": "18er-Einmaleins Multiplicar por Fähigkeiteninizi g��lendirin. 9�2 und 6�3 Beziehungen Multiplikation mit 18 - Fortgeschrittene Rechenmethoden",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/18#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/18#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/18#breadcrumb",
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
            "@id": "https://einmaleins.online/einmaleins/18",
            "name": "18er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/18#learningresource",
      "name": "18er-Einmaleins Lernressource",
      "description": "Multiplikation mit 18 - Fortgeschrittene Rechenmethoden",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactiund Resource", "Practice Material", "Educational Game"],
      "teaches": "18er-Einmaleins, 9 und 6 Tabellen Beziehung, 9'un katlari Regel",
      "typicalAgeRange": "7-10",
      "inLanguage": "de",
      "educationalUse": ["practice", "self-study"],
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
  title: '18er-Einmaleins - Juegos Divertidos y Ejercicios Pr�cticos',
  description: 'Meistere das 18er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '18er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/18',
  },
}

export default function Number18Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={18} rangeStart={11} rangeEnd={20} />
    </>
  )
}


