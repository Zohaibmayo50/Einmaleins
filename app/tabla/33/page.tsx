import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/33#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/33",
      "name": "33 Tabla de Multiplicar - 3×11 İlişkisi",
      "description": "33 Tabla de Multiplicar ile 3×11 ilişkisini öğrenin. Basamak desenleri ve çarpma stratejileri.",
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"},
      "about": {"@id": "https://tablasdemultiplicar.online/tabla/33#learningresource"},
      "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/33#breadcrumb"},
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/33#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/31-40", "name": "31-40 Tabla de Multiplicar"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/33", "name": "33 Tabla de Multiplicar"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/33#learningresource",
      "name": "33 Tabla de Multiplicar Recurso de Aprendizaje",
      "description": "33 Multiplicar por: 3 ve 11 tablolarının birleşimi (3×11=33), çift basamak desenleri.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "33 Tabla de Multiplicar, 3×11 ilişkisi, basamak desenleri",
      "typicalAgeRange": "8-11",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/31-40#learningresource"}
    }
  ]
}

export const metadata = {
  title: '33 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '33 Tabla de Multiplicar con juegos divertidos y ejercicios interactivos. Ayudas visuales para niños, consejos prácticos y técnicas fáciles de memorización.',
  keywords: '33 Tabla de Multiplicar, otuz üç Tabla de Multiplicar, 33 Multiplicar por, Tabla de Multiplicar aprendizaje de tablas de multiplicar, juegos de matemáticas',
  alternates: {
    canonical: '/tabla/33',
  },
}

export default function Number33Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={33} rangeStart={31} rangeEnd={40} />
    </>
  )
}


