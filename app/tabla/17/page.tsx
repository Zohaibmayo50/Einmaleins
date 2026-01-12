import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/17#webpage",
      "url": "https://einmaleins.online/einmaleins/17",
      "name": "17er-Einmaleins - Asal Sayı Keşfi",
      "description": "17er-Einmaleins ile asal sayı kavramını keşfedin. Zihinsel matematik ve pratik stratejilerle 17 Multiplicar por.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/17#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/17#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/17#breadcrumb",
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
            "@id": "https://einmaleins.online/einmaleins/17",
            "name": "17er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/17#learningresource",
      "name": "17er-Einmaleins Recurso de Aprendizaje",
      "description": "17 Multiplicar por: Asal sayı özellikleri, 10+7 ayrıştırma stratejisi, zihinsel matematik teknikleri.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "17er-Einmaleins, asal sayılar, zihinsel matematik",
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
  title: '17er-Einmaleins - Juegos Divertidos y Ejercicios Prácticos',
  description: 'Meistere das 17er-Einmaleins. Klare ErklÃ¤rungen, Muster und praktische Ãœbungsstrategien.',
  keywords: '17er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/17',
  },
}

export default function Number17Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={17} rangeStart={11} rangeEnd={20} />
    </>
  )
}


