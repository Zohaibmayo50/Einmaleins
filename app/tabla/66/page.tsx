import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://tablasdemultiplicar.online/tabla/66#webpage", "url": "https://tablasdemultiplicar.online/tabla/66", "name": "66 Tabla de Multiplicar", "description": "66 Tabla de Multiplicar Multiplicar por becerileri.", "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"}, "about": {"@id": "https://tablasdemultiplicar.online/tabla/66#learningresource"}, "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/66#breadcrumb"}, "inLanguage": "es-MX"}, {"@type": "BreadcrumbList", "@id": "https://tablasdemultiplicar.online/tabla/66#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/61-70", "name": "61-70 Tabla de Multiplicar"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/66", "name": "66 Tabla de Multiplicar"}}]}, {"@type": "LearningResource", "@id": "https://tablasdemultiplicar.online/tabla/66#learningresource", "name": "66 Tabla de Multiplicar", "description": "66 Multiplicar por", "educationalLevel": "Advanced", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "66 Tabla de Multiplicar", "typicalAgeRange": "9-12", "inLanguage": "es-MX", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://tablasdemultiplicar.online/61-70#learningresource"}}]}

export const metadata = {
  title: '66 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '66 Tabla de Multiplicarnu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '66 Tabla de Multiplicar, altmış altı Tabla de Multiplicar, matematik oyunları, Tabla de Multiplicar öğrenme',
  alternates: {
    canonical: '/tabla/66',
  },
}

export default function Number66Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={66} rangeStart={61} rangeEnd={70} /></>)
}


