import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/16#webpage",
      "url": "https://einmaleins.online/einmaleins/16",
      "name": "16er-Einmaleins - Kare Sayı İlişkisi",
      "description": "16er-Einmaleins ile kare sayı kavramını öğrenin. 4×4=16 ilişkisi ve kolay stratejilerle 16 Multiplicar por.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/16#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/16#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/16#breadcrumb",
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
            "@id": "https://einmaleins.online/einmaleins/16",
            "name": "16er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/16#learningresource",
      "name": "16er-Einmaleins Recurso de Aprendizaje",
      "description": "16 Multiplicar por: 4'ün karesi (4×4=16), ikili katlar (8×2), çift sayı desenleri ve geometrik uygulamalar.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "16er-Einmaleins, kare sayılar, 4 tablosunun katları",
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
  title: '16er-Einmaleins - Juegos Divertidos y Ejercicios Prácticos',
  description: 'Meistere das 16er-Einmaleins. Klare ErklÃ¤rungen, Muster und praktische Ãœbungsstrategien.',
  keywords: '16er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/16',
  },
}

export default function Number16Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={16} rangeStart={11} rangeEnd={20} />
    </>
  )
}


