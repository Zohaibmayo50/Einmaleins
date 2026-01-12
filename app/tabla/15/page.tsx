import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/15#webpage",
      "url": "https://einmaleins.online/einmaleins/15",
      "name": "15er-Einmaleins - Çeyrek Saat Kavramı",
      "description": "15er-Einmaleins ile çeyrek saat ve zaman okumasını öğrenin. 3×5 ilişkisi ve pratik stratejilerle 15 Multiplicar por.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/15#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/15#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/15#breadcrumb",
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
            "@id": "https://einmaleins.online/einmaleins/15",
            "name": "15er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/15#learningresource",
      "name": "15er-Einmaleins Recurso de Aprendizaje",
      "description": "15 Multiplicar por: Çeyrek saat (15 dakika), 3×5 ilişkisi, 5'in son rakam deseni (5-0-5-0) ve saat okuma uygulamaları.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "15er-Einmaleins, çeyrek saat kavramı, saat okuma, 3 ve 5 tablolarının ilişkisi",
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
  title: '15er-Einmaleins - Juegos Divertidos y Ejercicios Prácticos',
  description: 'Meistere das 15er-Einmaleins. Klare ErklÃ¤rungen, Muster und praktische Ãœbungsstrategien.',
  keywords: '15er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/15',
  },
}

export default function Number15Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={15} rangeStart={11} rangeEnd={20} />
    </>
  )
}


