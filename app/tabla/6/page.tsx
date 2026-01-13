import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/6#webpage",
      "url": "https://einmaleins.online/einmaleins/6",
      "name": "6er-Einmaleins - Zählen in Sechserschritten",
      "description": "Lerne a Zählen in Sechserschritten con la 6er-Einmaleins. Descubre las relaciones 2�3 y 3�2 con patrones geom�tricos.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/6#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/6#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/6#breadcrumb",
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
            "@id": "https://einmaleins.online/einmaleins/6",
            "name": "6er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/6#learningresource",
      "name": "6er-Einmaleins Lernressource",
      "description": "Multiplikation mit 6 - Fortgeschrittene Rechenmethoden",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "6er-Einmaleins, Sechser Zählen, 2 und 3 Tabellen Beziehung",
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
  title: '6er-Einmaleins - Juegos Divertidos y Ejercicios Pr�cticos',
  description: 'Meistere das 6er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '6er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/6',
  },
}

export default function Number6Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={6} rangeStart={1} rangeEnd={10} />
    </>
  )
}


