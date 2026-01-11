import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/25#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/25",
      "name": "25 Tabla de Multiplicar - Çeyrek ve Yüzde Kavramı",
      "description": "25 Tabla de Multiplicar ile çeyrek kavramı ve yüzde hesaplamalarını öğrenin. Para hesaplama için kritik öneme sahip desenleri keşfedin.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/25#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/25#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/25#breadcrumb",
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
            "@id": "https://tablasdemultiplicar.online/21-30",
            "name": "21-30 Tabla de Multiplicar"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://tablasdemultiplicar.online/tabla/25",
            "name": "25 Tabla de Multiplicar"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/25#learningresource",
      "name": "25 Tabla de Multiplicar Recurso de Aprendizaje",
      "description": "25 Multiplicar por: Çeyrek (1/4) kavramı, yüzde hesaplamaları (25%=1/4), para hesaplama ve 25-50-75-00 son rakam deseni.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "25 Tabla de Multiplicar, çeyrek kavramı, yüzde hesaplama, para hesaplama, 5'in karesi",
      "typicalAgeRange": "8-11",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study", "real-world application"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/21-30#learningresource"
      }
    }
  ]
}

export const metadata = {
  title: '25 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '25 Tabla de Multiplicar con juegos divertidos y ejercicios interactivos. Ayudas visuales para niños, consejos prácticos y técnicas fáciles de memorización.',
  keywords: '25 Tabla de Multiplicar, yirmi beş Tabla de Multiplicar, 25 Multiplicar por, Tabla de Multiplicar aprendizaje de tablas de multiplicar, juegos de matemáticas',
  alternates: {
    canonical: '/tabla/25',
  },
}

export default function Number25Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={25} rangeStart={21} rangeEnd={30} />
    </>
  )
}


