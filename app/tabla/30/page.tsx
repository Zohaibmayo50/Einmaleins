import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/30#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/30",
      "name": "30 Tabla de Multiplicar - Yarım Saat Kavramı",
      "description": "30 Tabla de Multiplicar ile yarım saat (30 dakika) ve ay kavramlarını öğrenin. 3×10, 5×6 ilişkileri.",
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"},
      "about": {"@id": "https://tablasdemultiplicar.online/tabla/30#learningresource"},
      "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/30#breadcrumb"},
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/30#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/21-30", "name": "21-30 Tabla de Multiplicar"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/30", "name": "30 Tabla de Multiplicar"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/30#learningresource",
      "name": "30 Tabla de Multiplicar Recurso de Aprendizaje",
      "description": "30 Multiplicar por: Yarım saat (30 dakika), ay günleri (~30 gün), 3×10 ve 5×6 çarpan ilişkileri.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "30 Tabla de Multiplicar, yarım saat kavramı, 3×10 ve 5×6 ilişkisi",
      "typicalAgeRange": "8-11",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study", "real-world application"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/21-30#learningresource"}
    }
  ]
}

export const metadata = {
  title: '30 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '30 Tabla de Multiplicar con juegos divertidos y ejercicios interactivos. Ayudas visuales para niños, consejos prácticos y técnicas fáciles de memorización.',
  keywords: '30 Tabla de Multiplicar, otuz Tabla de Multiplicar, 30 Multiplicar por, Tabla de Multiplicar aprendizaje de tablas de multiplicar, juegos de matemáticas',
  alternates: {
    canonical: '/tabla/30',
  },
}

export default function Number30Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={30} rangeStart={21} rangeEnd={30} />
    </>
  )
}


