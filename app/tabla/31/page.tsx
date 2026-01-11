import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/31#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/31",
      "name": "31 Tabla de Multiplicar - Ay Günleri",
      "description": "31 Tabla de Multiplicar ile ay günleri kavramını öğrenin. Asal sayı özellikleri ve zaman hesaplama.",
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"},
      "about": {"@id": "https://tablasdemultiplicar.online/tabla/31#learningresource"},
      "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/31#breadcrumb"},
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/31#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/31-40", "name": "31-40 Tabla de Multiplicar"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/31", "name": "31 Tabla de Multiplicar"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/31#learningresource",
      "name": "31 Tabla de Multiplicar Recurso de Aprendizaje",
      "description": "31 Multiplicar por: Ay günleri (31 gün), asal sayı özellikleri ve ileri çarpma becerileri.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "31 Tabla de Multiplicar, ay günleri kavramı, asal sayı",
      "typicalAgeRange": "8-11",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study", "real-world application"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/31-40#learningresource"}
    }
  ]
}

export const metadata = {
  title: '31 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '31 Tabla de Multiplicar con juegos divertidos y ejercicios interactivos. Ayudas visuales para niños, consejos prácticos y técnicas fáciles de memorización.',
  keywords: '31 Tabla de Multiplicar, otuz bir Tabla de Multiplicar, 31 Multiplicar por, Tabla de Multiplicar aprendizaje de tablas de multiplicar, juegos de matemáticas',
  alternates: {
    canonical: '/tabla/31',
  },
}

export default function Number31Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={31} rangeStart={31} rangeEnd={40} />
    </>
  )
}


