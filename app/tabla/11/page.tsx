import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/11#webpage",
      "url": "https://einmaleins.online/einmaleins/11",
      "name": "11er-Einmaleins - Introducción a Números de Dos Dígitos",
      "description": "11er-Einmaleins y transiciona a números de dos dígitos. Con patrones y estrategias fáciles, Lerne a Multiplikation mit 11 Multiplicar por .",
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
            "name": "11-20 Tabla de Multiplicar"
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
      "name": "11er-Einmaleins Recurso de Aprendizaje",
      "description": "11 Multiplicar por: Introducción a números de dos dígitos, patrón de repetición de dígitos (11×2=22, 11×3=33), estrategias fáciles de memorización.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "11er-Einmaleins, números de dos dígitos, patrones de dígitos",
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
  title: '11er-Einmaleins - Juegos Divertidos y Ejercicios Prácticos',
  description: 'Meistere das 11er-Einmaleins. Klare ErklÃ¤rungen, Muster und praktische Ãœbungsstrategien.',
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


