import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/28#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/28",
      "name": "28 Tabla de Multiplicar - 4×7 İlişkisi",
      "description": "28 Tabla de Multiplicar ile 4×7 ilişkisini öğrenin. Hafta günleri ve ay kavramları ile pratik uygulamalar.",
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"},
      "about": {"@id": "https://tablasdemultiplicar.online/tabla/28#learningresource"},
      "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/28#breadcrumb"},
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/28#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/21-30", "name": "21-30 Tabla de Multiplicar"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/28", "name": "28 Tabla de Multiplicar"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/28#learningresource",
      "name": "28 Tabla de Multiplicar Recurso de Aprendizaje",
      "description": "28 Multiplicar por: 4 hafta=28 gün, 4×7 ilişkisi ve zaman hesaplama becerileri.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "28 Tabla de Multiplicar, 4×7 ilişkisi, ay ve hafta kavramı",
      "typicalAgeRange": "8-11",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study", "real-world application"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/21-30#learningresource"}
    }
  ]
}

export const metadata = {
  title: '28 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '28 Tabla de Multiplicar con juegos divertidos y ejercicios interactivos. Ayudas visuales para niños, consejos prácticos y técnicas fáciles de memorización.',
  keywords: '28 Tabla de Multiplicar, yirmi sekiz Tabla de Multiplicar, 28 Multiplicar por, Tabla de Multiplicar aprendizaje de tablas de multiplicar, juegos de matemáticas',
  alternates: {
    canonical: '/tabla/28',
  },
}

export default function Number28Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={28} rangeStart={21} rangeEnd={30} />
    </>
  )
}


