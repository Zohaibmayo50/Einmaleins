import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://tablasdemultiplicar.online/tabla/41#webpage", "url": "https://tablasdemultiplicar.online/tabla/41", "name": "41 Tabla de Multiplicar", "description": "41 Tabla de Multiplicar Multiplicar por becerileri.", "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"}, "about": {"@id": "https://tablasdemultiplicar.online/tabla/41#learningresource"}, "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/41#breadcrumb"}, "inLanguage": "es-MX"}, {"@type": "BreadcrumbList", "@id": "https://tablasdemultiplicar.online/tabla/41#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/41-50", "name": "41-50 Tabla de Multiplicar"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/41", "name": "41 Tabla de Multiplicar"}}]}, {"@type": "LearningResource", "@id": "https://tablasdemultiplicar.online/tabla/41#learningresource", "name": "41 Tabla de Multiplicar", "description": "41 Multiplicar por", "educationalLevel": "Intermediate", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "41 Tabla de Multiplicar", "typicalAgeRange": "8-11", "inLanguage": "es-MX", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://tablasdemultiplicar.online/41-50#learningresource"}}]}

export const metadata = {
  title: '41 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '41 Tabla de Multiplicar con juegos divertidos y ejercicios interactivos. Ayudas visuales para niños, consejos prácticos y técnicas fáciles de memorización.',
  keywords: '41 Tabla de Multiplicar, kırk bir Tabla de Multiplicar, 41 Multiplicar por, Tabla de Multiplicar aprendizaje de tablas de multiplicar, juegos de matemáticas',
  alternates: {
    canonical: '/tabla/41',
  },
}

export default function Number41Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={41} rangeStart={41} rangeEnd={50} /></>)
}


