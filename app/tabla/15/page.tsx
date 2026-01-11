import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/15#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/15",
      "name": "15 Tabla de Multiplicar - Çeyrek Saat Kavramı",
      "description": "15 Tabla de Multiplicar ile çeyrek saat ve zaman okumasını öğrenin. 3×5 ilişkisi ve pratik stratejilerle 15 Multiplicar por.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/15#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/15#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/15#breadcrumb",
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
            "@id": "https://tablasdemultiplicar.online/11-20",
            "name": "11-20 Tabla de Multiplicar"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://tablasdemultiplicar.online/tabla/15",
            "name": "15 Tabla de Multiplicar"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/15#learningresource",
      "name": "15 Tabla de Multiplicar Recurso de Aprendizaje",
      "description": "15 Multiplicar por: Çeyrek saat (15 dakika), 3×5 ilişkisi, 5'in son rakam deseni (5-0-5-0) ve saat okuma uygulamaları.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "15 Tabla de Multiplicar, çeyrek saat kavramı, saat okuma, 3 ve 5 tablolarının ilişkisi",
      "typicalAgeRange": "7-10",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study", "real-world application"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/11-20#learningresource"
      }
    }
  ]
}

export const metadata = {
  title: '15 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '15 Tabla de Multiplicar con juegos divertidos y ejercicios interactivos. Ayudas visuales para niños, consejos prácticos y técnicas fáciles de memorización.',
  keywords: '15 Tabla de Multiplicar, on beş Tabla de Multiplicar, 15 Multiplicar por, Tabla de Multiplicar aprendizaje de tablas de multiplicar, juegos de matemáticas',
  alternates: {
    canonical: '/tabla/15',
  },
}

export default function Number15Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={15} rangeStart={11} rangeEnd={20} />
    </>
  )
}


