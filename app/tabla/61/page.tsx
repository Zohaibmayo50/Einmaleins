import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://tablasdemultiplicar.online/tabla/61#webpage", "url": "https://tablasdemultiplicar.online/tabla/61", "name": "61 Tabla de Multiplicar", "description": "61 Tabla de Multiplicar Multiplicar por becerileri.", "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"}, "about": {"@id": "https://tablasdemultiplicar.online/tabla/61#learningresource"}, "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/61#breadcrumb"}, "inLanguage": "es-MX"}, {"@type": "BreadcrumbList", "@id": "https://tablasdemultiplicar.online/tabla/61#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/61-70", "name": "61-70 Tabla de Multiplicar"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/61", "name": "61 Tabla de Multiplicar"}}]}, {"@type": "LearningResource", "@id": "https://tablasdemultiplicar.online/tabla/61#learningresource", "name": "61 Tabla de Multiplicar", "description": "61 Multiplicar por", "educationalLevel": "Advanced", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "61 Tabla de Multiplicar", "typicalAgeRange": "9-12", "inLanguage": "es-MX", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://tablasdemultiplicar.online/61-70#learningresource"}}]}

export const metadata = {
  title: '61 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '61 Tabla de Multiplicarnu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '61 Tabla de Multiplicar, altmış bir Tabla de Multiplicar, matematik oyunları, Tabla de Multiplicar öğrenme',
  alternates: {
    canonical: '/tabla/61',
  },
}

export default function Number61Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={61} rangeStart={61} rangeEnd={70} /></>)
}


