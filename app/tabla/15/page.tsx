import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/15#webpage",
      "url": "https://einmaleins.online/einmaleins/15",
      "name": "15er-Einmaleins - �eyrek Stunde Konzept",
      "description": "15er-Einmaleins: �eyrek Stunde und zaman okumasi �lernen. 3�5 Beziehung und pratik stratejilerle Multiplikation mit 15 - Fortgeschrittene Rechenmethoden",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/15#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/15#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/15#breadcrumb",
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
            "@id": "https://einmaleins.online/einmaleins/15",
            "name": "15er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/15#learningresource",
      "name": "15er-Einmaleins Lernressource",
      "description": "Multiplikation mit 15 - Fortgeschrittene Rechenmethoden",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactiund Resource", "Practice Material", "Educational Game"],
      "teaches": "15er-Einmaleins, �eyrek Stunde Konzept, Stunde okuma, 3 und 5 Tabellen Beziehung",
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
  title: '15er-Einmaleins - Juegos Divertidos y Ejercicios Pr�cticos',
  description: 'Meistere das 15er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '15er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/15',
  },
}

export default function Number15Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={15} rangeStart={11} rangeEnd={20} />
    </>
  )
}


