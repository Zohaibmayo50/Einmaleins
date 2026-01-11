import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {"@type": "WebPage", "@id": "https://tablasdemultiplicar.online/tabla/36#webpage", "url": "https://tablasdemultiplicar.online/tabla/36", "name": "36 Tabla de Multiplicar - 6 Kare Kavramı", "description": "36 Tabla de Multiplicar ile 6²=36 kare kavramını öğrenin. 4×9, 6×6 ilişkileri ve geometrik desenler.", "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"}, "about": {"@id": "https://tablasdemultiplicar.online/tabla/36#learningresource"}, "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/36#breadcrumb"}, "inLanguage": "es-MX"},
    {"@type": "BreadcrumbList", "@id": "https://tablasdemultiplicar.online/tabla/36#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/31-40", "name": "31-40 Tabla de Multiplicar"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/36", "name": "36 Tabla de Multiplicar"}}]},
    {"@type": "LearningResource", "@id": "https://tablasdemultiplicar.online/tabla/36#learningresource", "name": "36 Tabla de Multiplicar Recurso de Aprendizaje", "description": "36 Multiplicar por: 6 kare (6²=36), 4×9 ilişkisi ve çoklu çarpan kombinasyonları.", "educationalLevel": "Intermediate", "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"], "teaches": "36 Tabla de Multiplicar, 6² kavramı, 4×9 ve 6×6 ilişkisi", "typicalAgeRange": "8-11", "inLanguage": "es-MX", "educationalUse": ["practice", "self-study"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://tablasdemultiplicar.online/31-40#learningresource"}}
  ]
}

export const metadata = {
  title: '36 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '36 Tabla de Multiplicar con juegos divertidos y ejercicios interactivos. Ayudas visuales para niños, consejos prácticos y técnicas fáciles de memorización.',
  keywords: '36 Tabla de Multiplicar, otuz altı Tabla de Multiplicar, 36 Multiplicar por, Tabla de Multiplicar aprendizaje de tablas de multiplicar, juegos de matemáticas',
  alternates: {
    canonical: '/tabla/36',
  },
}

export default function Number36Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={36} rangeStart={31} rangeEnd={40} />
    </>
  )
}


