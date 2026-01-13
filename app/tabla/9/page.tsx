import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/9#webpage",
      "url": "https://einmaleins.online/einmaleins/9",
      "name": "9er-Einmaleins - Patrones M�gicos de Nueve",
      "description": "Lerne Fingertricks y reglas m�gicas de suma de d�gitos con la 9er-Einmaleins. Descubre los patrones de tabla de multiplicar m�s divertidos.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/9#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/9#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/9#breadcrumb",
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
            "@id": "https://einmaleins.online/einmaleins/9",
            "name": "9er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/9#learningresource",
      "name": "9er-Einmaleins Lernressource",
      "description": "Multiplikation mit 9 - Fortgeschrittene Rechenmethoden",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactiund Resource", "Practice Material", "Educational Game"],
      "teaches": "9er-Einmaleins, Fingertricks, Stellen Addition Regel, 3�=9",
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
  title: '9er-Einmaleins - Juegos Divertidos y Ejercicios Pr�cticos',
  description: 'Meistere das 9er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '9er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/9',
  },
}

export default function Number9Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={9} rangeStart={1} rangeEnd={10} />
    </>
  )
}


