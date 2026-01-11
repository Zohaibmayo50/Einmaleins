import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://tablasdemultiplicar.online/tabla/38#webpage", "url": "https://tablasdemultiplicar.online/tabla/38", "name": "38 Tabla de Multiplicar", "description": "38 Tabla de Multiplicar ile 2×19 ilişkisi ve çarpma becerileri.", "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"}, "about": {"@id": "https://tablasdemultiplicar.online/tabla/38#learningresource"}, "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/38#breadcrumb"}, "inLanguage": "es-MX"}, {"@type": "BreadcrumbList", "@id": "https://tablasdemultiplicar.online/tabla/38#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/31-40", "name": "31-40 Tabla de Multiplicar"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/38", "name": "38 Tabla de Multiplicar"}}]}, {"@type": "LearningResource", "@id": "https://tablasdemultiplicar.online/tabla/38#learningresource", "name": "38 Tabla de Multiplicar", "description": "38 Multiplicar por becerileri", "educationalLevel": "Intermediate", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "38 Tabla de Multiplicar", "typicalAgeRange": "8-11", "inLanguage": "es-MX", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://tablasdemultiplicar.online/31-40#learningresource"}}]}

export const metadata = {
  title: '38 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '38 Tabla de Multiplicar con juegos divertidos y ejercicios interactivos. Ayudas visuales para niños, consejos prácticos y técnicas fáciles de memorización.',
  keywords: '38 Tabla de Multiplicar, otuz sekiz Tabla de Multiplicar, 38 Multiplicar por, Tabla de Multiplicar aprendizaje de tablas de multiplicar, juegos de matemáticas',
  alternates: {
    canonical: '/tabla/38',
  },
}

export default function Number38Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={38} rangeStart={31} rangeEnd={40} /></>)
}


