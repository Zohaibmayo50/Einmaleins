import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/8#webpage",
      "url": "https://einmaleins.online/einmaleins/8",
      "name": "8er-Einmaleins - Patrones de Ocho",
      "description": "Lerne técnicas de duplicación y cuadruplicación con la 8er-Einmaleins. Descubre la relación 2×2×2 y el concepto de octágono.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/8#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/8#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/8#breadcrumb",
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
            "@id": "https://einmaleins.online/einmaleins/8",
            "name": "8er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/8#learningresource",
      "name": "8er-Einmaleins Recurso de Aprendizaje",
      "description": "8 Multiplicar por: 4 tablosunu ikiye katlama (4×2=8), sekizli sayma ve 2ün kuvvetleri (2³=8).",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "8er-Einmaleins, sekizli sayma, ikiye katlama, 2’nin kuvvetleri",
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
  title: '8er-Einmaleins - Juegos Divertidos y Ejercicios Prácticos',
  description: 'Meistere das 8er-Einmaleins. Klare ErklÃ¤rungen, Muster und praktische Ãœbungsstrategien.',
  keywords: '8er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/8',
  },
}

export default function Number8Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={8} rangeStart={1} rangeEnd={10} />
    </>
  )
}


