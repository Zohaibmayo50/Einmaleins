import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/35#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/35",
      "name": "35 Tabla de Multiplicar - 5×7 İlişkisi",
      "description": "35 Tabla de Multiplicar ile 5×7 ilişkisini öğrenin. Hafta ve beşlik sistem bağlantıları.",
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"},
      "about": {"@id": "https://tablasdemultiplicar.online/tabla/35#learningresource"},
      "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/35#breadcrumb"},
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/35#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/31-40", "name": "31-40 Tabla de Multiplicar"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/35", "name": "35 Tabla de Multiplicar"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/35#learningresource",
      "name": "35 Tabla de Multiplicar Recurso de Aprendizaje",
      "description": "35 Multiplicar por: 5×7 ilişkisi, beşlik ve yedilik sistem bağlantıları, pratik uygulamalar.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "35 Tabla de Multiplicar, 5×7 ilişkisi, hafta-beşlik bağlantısı",
      "typicalAgeRange": "8-11",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/31-40#learningresource"}
    }
  ]
}

export const metadata = {
  title: '35 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '35 Tabla de Multiplicar con juegos divertidos y ejercicios interactivos. Ayudas visuales para niños, consejos prácticos y técnicas fáciles de memorización.',
  keywords: '35 Tabla de Multiplicar, otuz beş Tabla de Multiplicar, 35 Multiplicar por, Tabla de Multiplicar aprendizaje de tablas de multiplicar, juegos de matemáticas',
  alternates: {
    canonical: '/tabla/35',
  },
}

export default function Number35Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={35} rangeStart={31} rangeEnd={40} />
    </>
  )
}


