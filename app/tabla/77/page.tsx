import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://tablasdemultiplicar.online/tabla/77#webpage", "url": "https://tablasdemultiplicar.online/tabla/77", "name": "77 Tabla de Multiplicar", "description": "77 Tabla de Multiplicar Multiplicar por becerileri.", "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"}, "about": {"@id": "https://tablasdemultiplicar.online/tabla/77#learningresource"}, "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/77#breadcrumb"}, "inLanguage": "es-MX"}, {"@type": "BreadcrumbList", "@id": "https://tablasdemultiplicar.online/tabla/77#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/71-80", "name": "71-80 Tabla de Multiplicar"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/77", "name": "77 Tabla de Multiplicar"}}]}, {"@type": "LearningResource", "@id": "https://tablasdemultiplicar.online/tabla/77#learningresource", "name": "77 Tabla de Multiplicar", "description": "77 Multiplicar por", "educationalLevel": "Advanced", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "77 Tabla de Multiplicar", "typicalAgeRange": "10-12", "inLanguage": "es-MX", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://tablasdemultiplicar.online/71-80#learningresource"}}]}

export const metadata = {
  title: '77 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '77 Tabla de Multiplicarnu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '77 Tabla de Multiplicar, yetmiş yedi Tabla de Multiplicar, matematik oyunları, Tabla de Multiplicar öğrenme',
  alternates: {
    canonical: '/tabla/77',
  },
}

export default function Number77Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={77} rangeStart={71} rangeEnd={80} /></>)
}


