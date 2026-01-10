import NumberPage from '../../components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/1#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/1",
      "name": "Tabla del 1 - Multiplicar por 1",
      "description": "Aprende el concepto básico de multiplicar por 1. Propiedad de identidad, patrones y estrategias prácticas para comprender las multiplicaciones por 1.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/1#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/1#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/1#breadcrumb",
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
            "@id": "https://tablasdemultiplicar.online/tabla/1",
            "name": "Tabla del 1"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/1#learningresource",
      "name": "Recurso de aprendizaje: Tabla del 1",
      "description": "Multiplicar por 1 (propiedad de identidad): cualquier número multiplicado por 1 es el mismo número. Aprende las reglas básicas de la multiplicación.",
      "educationalLevel": "Principiante",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "Tabla del 1, propiedad de identidad, conceptos básicos de multiplicación",
      "typicalAgeRange": "6-8",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/1-10#learningresource"
      }
    }
  ]
}

export const metadata = {
  title: 'Tabla del 1 | Aprende a multiplicar por 1',
  description: 'Domina la tabla del 1. Explicaciones claras, patrones y estrategias prácticas para comprender la propiedad de identidad y sentar las bases de la multiplicación.',
  alternates: {
    canonical: '/tabla/1',
  },
}

export default function MultiplicationTableOf1() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={1} rangeStart={1} rangeEnd={10} />
    </>
  )
}

