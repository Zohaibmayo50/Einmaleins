import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://tablasdemultiplicar.online/tabla/86#webpage", "url": "https://tablasdemultiplicar.online/tabla/86", "name": "86 Tabla de Multiplicar", "description": "86 Tabla de Multiplicar Multiplicar por becerileri.", "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"}, "about": {"@id": "https://tablasdemultiplicar.online/tabla/86#learningresource"}, "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/86#breadcrumb"}, "inLanguage": "es-MX"}, {"@type": "BreadcrumbList", "@id": "https://tablasdemultiplicar.online/tabla/86#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/81-90", "name": "81-90 Tabla de Multiplicar"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/86", "name": "86 Tabla de Multiplicar"}}]}, {"@type": "LearningResource", "@id": "https://tablasdemultiplicar.online/tabla/86#learningresource", "name": "86 Tabla de Multiplicar", "description": "86 Multiplicar por", "educationalLevel": "Advanced", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "86 Tabla de Multiplicar", "typicalAgeRange": "10-12", "inLanguage": "es-MX", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://tablasdemultiplicar.online/81-90#learningresource"}}]}

export const metadata = {
  title: '86 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '86 Tabla de Multiplicarnu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '86 Tabla de Multiplicar, seksen altı Tabla de Multiplicar, matematik oyunları, Tabla de Multiplicar öğrenme',
  alternates: {
    canonical: '/tabla/86',
  },
}

export default function Number86Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={86} rangeStart={81} rangeEnd={90} /></>)
}


