import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/12#webpage",
      "url": "https://einmaleins.online/einmaleins/12",
      "name": "12er-Einmaleins - Düzine Kavramı",
      "description": "12er-Einmaleins ile düzine kavramını öğrenin. Saat sistemi ve günlük hayatta sıkça kullanılan 12 tablosunda ustalaşın.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/12#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/12#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/12#breadcrumb",
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
            "@id": "https://einmaleins.online/einmaleins/12",
            "name": "12er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/12#learningresource",
      "name": "12er-Einmaleins Recurso de Aprendizaje",
      "description": "12 Multiplicar por: Düzine kavramı, saat sistemi (12 saat), 3×4 ilişkisi ve günlük hayat uygulamaları.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "12er-Einmaleins, düzine kavramı, saat okuma, 3 ve 4 tablolarının ilişkisi",
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
  title: '12er-Einmaleins - Juegos Divertidos y Ejercicios Prácticos',
  description: 'Meistere das 12er-Einmaleins. Klare ErklÃ¤rungen, Muster und praktische Ãœbungsstrategien.',
  keywords: '12er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/12',
  },
}

export default function Number12Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={12} rangeStart={11} rangeEnd={20} />
    </>
  )
}


