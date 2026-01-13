import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/11#webpage",
      "url": "https://einmaleins.online/einmaleins/11",
      "name": "11er-Einmaleins - Introducci�n a N�meros de Dos D�gitos",
      "description": "11er-Einmaleins y transiciona a n�meros de dos d�gitos. Con patrones y estrategias f�ciles, Lerne a Multiplikation mit Multiplikation mit 11 - Fortgeschrittene Rechenmethoden",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/11#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/11#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/11#breadcrumb",
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
            "@id": "https://einmaleins.online/einmaleins/11",
            "name": "11er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/11#learningresource",
      "name": "11er-Einmaleins Lernressource",
      "description": "Multiplikation mit 11 - Fortgeschrittene Rechenmethoden",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactiund Resource", "Practice Material", "Educational Game"],
      "teaches": "11er-Einmaleins, n�meros de dos d�gitos, patrones de d�gitos",
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
  title: '11er-Einmaleins - Juegos Divertidos y Ejercicios Pr�cticos',
  description: 'Meistere das 11er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '11er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/11',
  },
}

export default function Number11Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={11} rangeStart={11} rangeEnd={20} />
    </>
  )
}


