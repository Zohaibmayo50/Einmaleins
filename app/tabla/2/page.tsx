import NumberPage from '../../components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/2#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/2",
      "name": "Tabla del 2 - Conteo de dos en dos",
      "description": "Mejora el conteo de dos en dos y la duplicación. Aprende patrones de números pares y estrategias prácticas para multiplicar por 2.",
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
      "@id": "https://tablasdemultiplicar.online/tabla/2#learningresource",
      "name": "Recurso de aprendizaje: Tabla del 2",
      "description": "Multiplicar por 2: conteo de dos en dos, duplicación y patrones de números pares.",
      "educationalLevel": "Principiante",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "Tabla del 2, conteo de dos en dos, duplicación, números pares",
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
  title: 'Tabla del 2 | Aprende a multiplicar por 2',
  description: 'Domina la tabla del 2. Estrategias de duplicación, patrones y ejemplos prácticos para aprender con seguridad.',
  alternates: {
    canonical: '/tabla/2',
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

