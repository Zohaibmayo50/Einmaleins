import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/9#webpage",
      "url": "https://einmaleins.online/einmaleins/9",
      "name": "9er-Einmaleins - Patrones Mágicos de Nueve",
      "description": "Lerne trucos de dedos y reglas mágicas de suma de dígitos con la 9er-Einmaleins. Descubre los patrones de tabla de multiplicar más divertidos.",
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
      "name": "9er-Einmaleins Recurso de Aprendizaje",
      "description": "9 Multiplicar por: Parmak trikleri, basamak toplama kuralı (sonuçların rakamları toplamı=9), 10-1 ilişkisi ve sihirli desenler.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "9er-Einmaleins, parmak trikeri, basamak toplama kuralı, 3²=9",
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
  title: '9er-Einmaleins - Juegos Divertidos y Ejercicios Prácticos',
  description: 'Meistere das 9er-Einmaleins. Klare ErklÃ¤rungen, Muster und praktische Ãœbungsstrategien.',
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


