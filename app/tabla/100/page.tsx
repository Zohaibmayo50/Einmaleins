import NumberPage from '@/app/components/NumberPage'
import { Metadata } from 'next'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/100#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/100",
      "name": "100 Tabla de Multiplicar - Onluk Sistemin Ustası",
      "description": "100 Tabla de Multiplicar ile onluk sistem, yüzde hesaplamaları ve yer değeri kavramında ustalaşın. En önemli çarpım tablolarından biri.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/100#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/100#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/100#breadcrumb",
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
            "@id": "https://tablasdemultiplicar.online/91-100",
            "name": "91-100 Tabla de Multiplicar"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://tablasdemultiplicar.online/tabla/100",
            "name": "100 Tabla de Multiplicar"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/100#learningresource",
      "name": "100 Tabla de Multiplicar Recurso de Aprendizaje",
      "description": "100 Multiplicar por: Onluk sistemin temeli, yer değeri kavramı, yüzde hesaplamaları (100%=tam), sonuna iki sıfır ekleme kuralı. En kullanışlı çarpım tablolarından biri.",
      "educationalLevel": "Advanced",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "100 Tabla de Multiplicar, onluk sistem, yer değeri, yüzde hesaplama, 10'un karesi",
      "typicalAgeRange": "9-12",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study", "real-world application", "foundational concept"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/91-100#learningresource"
      }
    }
  ]
}

export const metadata: Metadata = {
  title: '100 Tabla de Multiplicar - Métodos Fáciles de Aprendizaje',
  description: '100 Tabla de Multiplicarnu con métodos divertidos y efectivos. Domina la tabla con herramientas visuales y consejos prácticos.',
  keywords: '100 Tabla de Multiplicar, 100 tablosu, Tabla de Multiplicar 100, matematik, çarpma işlemi',
  alternates: {
    canonical: '/tabla/100',
  },
}

export default function Number100Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={100} rangeStart={91} rangeEnd={100} />
    </>
  )
}


