import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/27#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/27",
      "name": "27 Tabla de Multiplicar - 3 Küp Kavramı",
      "description": "27 Tabla de Multiplicar ile 3³=27 küp kavramını öğrenin. 3×9 ilişkisi ve geometrik desenler.",
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"},
      "about": {"@id": "https://tablasdemultiplicar.online/tabla/27#learningresource"},
      "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/27#breadcrumb"},
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/27#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/21-30", "name": "21-30 Tabla de Multiplicar"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/27", "name": "27 Tabla de Multiplicar"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/27#learningresource",
      "name": "27 Tabla de Multiplicar Recurso de Aprendizaje",
      "description": "27 Multiplicar por: 3 küp (3³=27), 3×9 ilişkisi ve ileri seviye çarpma becerileri.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "27 Tabla de Multiplicar, 3 küp kavramı, 3×9 ilişkisi",
      "typicalAgeRange": "8-11",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/21-30#learningresource"}
    }
  ]
}

export const metadata = {
  title: '27 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '27 Tabla de Multiplicar con juegos divertidos y ejercicios interactivos. Ayudas visuales para niños, consejos prácticos y técnicas fáciles de memorización.',
  keywords: '27 Tabla de Multiplicar, yirmi yedi Tabla de Multiplicar, 27 Multiplicar por, Tabla de Multiplicar aprendizaje de tablas de multiplicar, juegos de matemáticas',
  alternates: {
    canonical: '/tabla/27',
  },
}

export default function Number27Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={27} rangeStart={21} rangeEnd={30} />
    </>
  )
}


