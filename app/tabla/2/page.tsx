import NumberPage from '../../components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/2#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/2",
      "name": "Tabla del 2 - Multiplicar por 1",
      "description": "Aprende el concepto bÃ¡sico de multiplicar por 1. Propiedad de identidad, patrones y estrategias prÃ¡cticas para comprender las multiplicaciones por 1.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/2#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/2#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/2#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@id": "https://tablasdemultiplicar.online/",
            "name": "Inicio"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@id": "https://tablasdemultiplicar.online/1-10",
            "name": "Tablas 1-10"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://tablasdemultiplicar.online/tabla/2",
            "name": "Tabla del 2"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/2#learningresource",
      "name": "Lernressource: 2er-Einmaleins",
      "description": "Multiplikation mit 2 (Verdopplung): Lerne das Verdopplungsmuster und grundlegende Multiplikationsfähigkeiten.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "2er-Einmaleins, Verdopplung, grundlegende Multiplikationskonzepte",
      "typicalAgeRange": "6-8",
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
  title: '2er-Einmaleins | Lerne Multiplikation mit 2',
  description: 'Meistere das 2er-Einmaleins. Klare Erklärungen, Verdopplungsmuster und praktische Strategien zum Verständnis der Multiplikation mit 2.',
  alternates: {
    canonical: '/einmaleins/2',
  },
}

export default function MultiplicationTableOf2() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={2} rangeStart={1} rangeEnd={10} />
    </>
  )
}


