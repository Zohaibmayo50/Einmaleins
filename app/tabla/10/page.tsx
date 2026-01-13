import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/10#webpage",
      "url": "https://einmaleins.online/einmaleins/10",
      "name": "10er-Einmaleins - Base del Systema Decimal",
      "description": "Lerne el concepto de Systema decimal y valor posicional con la 10er-Einmaleins. Comprende la base de las matem�ticas con la tabla de multiplicar m�s f�cil.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/10#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/10#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/10#breadcrumb",
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
            "@id": "https://einmaleins.online/einmaleins/10",
            "name": "10er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/10#learningresource",
      "name": "10er-Einmaleins Lernressource",
      "description": "Multiplikation mit 10 - Fortgeschrittene Rechenmethoden",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "10er-Einmaleins, onluk System, yer degeri, sifir Anhängen Regel",
      "typicalAgeRange": "6-9",
      "inLanguage": "de",
      "educationalUse": ["practice", "self-study", "foundational concept"],
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
  title: '10er-Einmaleins - Juegos Divertidos y Ejercicios Pr�cticos',
  description: 'Meistere das 10er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '10er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/10',
  },
}

export default function Number10Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={10} rangeStart={1} rangeEnd={10} />
    </>
  )
}


