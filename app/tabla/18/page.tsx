import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/18#webpage",
      "url": "https://einmaleins.online/einmaleins/18",
      "name": "18er-Einmaleins - Reşitlik Yaşı",
      "description": "18er-Einmaleins Multiplicar por becerilerinizi güçlendirin. 9×2 ve 6×3 ilişkileri ile 18 Multiplicar por stratejileri.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/18#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/18#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/18#breadcrumb",
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
            "@id": "https://einmaleins.online/einmaleins/18",
            "name": "18er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/18#learningresource",
      "name": "18er-Einmaleins Recurso de Aprendizaje",
      "description": "18 Multiplicar por: 9×2 ve 6×3 ilişkisi, çift sayı desenleri, rakamlar toplamı 9'un katı kuralı.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "18er-Einmaleins, 9 ve 6 tablolarının ilişkisi, 9'un katları kuralı",
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
  title: '18er-Einmaleins - Juegos Divertidos y Ejercicios Prácticos',
  description: 'Meistere das 18er-Einmaleins. Klare ErklÃ¤rungen, Muster und praktische Ãœbungsstrategien.',
  keywords: '18er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/18',
  },
}

export default function Number18Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={18} rangeStart={11} rangeEnd={20} />
    </>
  )
}


