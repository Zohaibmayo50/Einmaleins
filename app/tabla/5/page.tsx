import NumberPage from '../../components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/5#webpage",
      "url": "https://einmaleins.online/einmaleins/5",
      "name": "5er-Einmaleins - Multiplikation mit 5",
      "description": "Lerne el concepto bÃ¡sico de Multiplikation mit 5. Propiedad de identidad, patrones y estrategias prÃ¡cticas para comprender las multiplicaciones por 1.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/5#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/5#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/5#breadcrumb",
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
            "@id": "https://einmaleins.online/einmaleins/5",
            "name": "5er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/5#learningresource",
      "name": "Lernressource: 5er-Einmaleins",
      "description": "Multiplikation mit 5 (propiedad de identidad): cualquier nÃºmero multiplicado por 1 es el mismo nÃºmero. Lerne las reglas bÃ¡sicas de la multiplicaciÃ³n.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "5er-Einmaleins, propiedad de identidad, conceptos bÃ¡sicos de multiplicaciÃ³n",
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
  title: '5er-Einmaleins | Lerne a Multiplikation mit 5',
  description: 'Meistere das 5er-Einmaleins. Klare ErklÃ¤rungen, Muster und praktische Ãœbungsstrategien.',
  alternates: {
    canonical: '/einmaleins/5',
  },
}

export default function MultiplicationTableOf5() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={5} rangeStart={1} rangeEnd={10} />
    </>
  )
}


