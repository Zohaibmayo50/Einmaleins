import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/29#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/29",
      "name": "29 Tabla de Multiplicar - Asal Sayı Desenleri",
      "description": "29 Tabla de Multiplicar ile asal sayı özelliklerini keşfedin. İleri seviye çarpma becerileri geliştirin.",
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"},
      "about": {"@id": "https://tablasdemultiplicar.online/tabla/29#learningresource"},
      "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/29#breadcrumb"},
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/29#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/21-30", "name": "21-30 Tabla de Multiplicar"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/29", "name": "29 Tabla de Multiplicar"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/29#learningresource",
      "name": "29 Tabla de Multiplicar Recurso de Aprendizaje",
      "description": "29 Multiplicar por: Asal sayı özellikleri ve ileri düzey çarpma pratikleri.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "29 Tabla de Multiplicar, asal sayı kavramı, ileri çarpma",
      "typicalAgeRange": "8-11",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/21-30#learningresource"}
    }
  ]
}

export const metadata = {
  title: '29 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '29 Tabla de Multiplicar con juegos divertidos y ejercicios interactivos. Ayudas visuales para niños, consejos prácticos y técnicas fáciles de memorización.',
  keywords: '29 Tabla de Multiplicar, yirmi dokuz Tabla de Multiplicar, 29 Multiplicar por, Tabla de Multiplicar aprendizaje de tablas de multiplicar, juegos de matemáticas',
  alternates: {
    canonical: '/tabla/29',
  },
}

export default function Number29Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={29} rangeStart={21} rangeEnd={30} />
    </>
  )
}


