import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/32#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/32",
      "name": "32 Tabla de Multiplicar - 2 Üssü 5",
      "description": "32 Tabla de Multiplicar ile 2⁵=32 kavramını öğrenin. İkinin kuvvetleri ve geometrik desenler.",
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"},
      "about": {"@id": "https://tablasdemultiplicar.online/tabla/32#learningresource"},
      "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/32#breadcrumb"},
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/32#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/31-40", "name": "31-40 Tabla de Multiplicar"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/32", "name": "32 Tabla de Multiplicar"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/32#learningresource",
      "name": "32 Tabla de Multiplicar Recurso de Aprendizaje",
      "description": "32 Multiplicar por: 2 üssü 5 (2⁵=32), ikinin kuvvetleri ve 4×8 ilişkisi.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "32 Tabla de Multiplicar, 2⁵ kavramı, ikinin kuvvetleri",
      "typicalAgeRange": "8-11",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/31-40#learningresource"}
    }
  ]
}

export const metadata = {
  title: '32 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '32 Tabla de Multiplicar con juegos divertidos y ejercicios interactivos. Ayudas visuales para niños, consejos prácticos y técnicas fáciles de memorización.',
  keywords: '32 Tabla de Multiplicar, otuz iki Tabla de Multiplicar, 32 Multiplicar por, Tabla de Multiplicar aprendizaje de tablas de multiplicar, juegos de matemáticas',
  alternates: {
    canonical: '/tabla/32',
  },
}

export default function Number32Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={32} rangeStart={31} rangeEnd={40} />
    </>
  )
}


