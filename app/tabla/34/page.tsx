import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/34#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/34",
      "name": "34 Tabla de Multiplicar - 2×17 İlişkisi",
      "description": "34 Tabla de Multiplicar ile 2×17 ilişkisini öğrenin. Çift sayı desenleri ve çarpma becerileri.",
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"},
      "about": {"@id": "https://tablasdemultiplicar.online/tabla/34#learningresource"},
      "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/34#breadcrumb"},
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/34#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/31-40", "name": "31-40 Tabla de Multiplicar"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/34", "name": "34 Tabla de Multiplicar"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/34#learningresource",
      "name": "34 Tabla de Multiplicar Recurso de Aprendizaje",
      "description": "34 Multiplicar por: 2×17 ilişkisi, çift sayı özellikleri ve ikiye katlama.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "34 Tabla de Multiplicar, 2×17 ilişkisi, çift sayılar",
      "typicalAgeRange": "8-11",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/31-40#learningresource"}
    }
  ]
}

export const metadata = {
  title: '34 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '34 Tabla de Multiplicar con juegos divertidos y ejercicios interactivos. Ayudas visuales para niños, consejos prácticos y técnicas fáciles de memorización.',
  keywords: '34 Tabla de Multiplicar, otuz dört Tabla de Multiplicar, 34 Multiplicar por, Tabla de Multiplicar aprendizaje de tablas de multiplicar, juegos de matemáticas',
  alternates: {
    canonical: '/tabla/34',
  },
}

export default function Number34Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={34} rangeStart={31} rangeEnd={40} />
    </>
  )
}


