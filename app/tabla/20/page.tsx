import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/20#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/20",
      "name": "20 Tabla de Multiplicar - Yirmili Sistem",
      "description": "20 Tabla de Multiplicar ile yirmili sayma sistemini öğrenin. Kolay 0 ekleme stratejisi ve pratik uygulamalar.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/20#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/20#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/20#breadcrumb",
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
            "@id": "https://tablasdemultiplicar.online/tabla/20",
            "name": "20 Tabla de Multiplicar"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/20#learningresource",
      "name": "20 Tabla de Multiplicar Recurso de Aprendizaje",
      "description": "20 Multiplicar por: Yirmili sayma sistemi, 2×10 ilişkisi, sonu 0 ile biten sayı deseni, para hesaplama (20 TL).",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "20 Tabla de Multiplicar, yirmili sistem, 10 tablosunun katları, para hesaplama",
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
  title: '20 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '20 Tabla de Multiplicar con juegos divertidos y ejercicios interactivos. Ayudas visuales para niños, consejos prácticos y técnicas fáciles de memorización.',
  keywords: '20 Tabla de Multiplicar, yirmi Tabla de Multiplicar, 20 Multiplicar por, Tabla de Multiplicar aprendizaje de tablas de multiplicar, juegos de matemáticas',
  alternates: {
    canonical: '/tabla/20',
  },
}

export default function Number20Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={20} rangeStart={11} rangeEnd={20} />
    </>
  )
}


