import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://tablasdemultiplicar.online/tabla/57#webpage", "url": "https://tablasdemultiplicar.online/tabla/57", "name": "57 Tabla de Multiplicar", "description": "57 Tabla de Multiplicar Multiplicar por becerileri.", "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"}, "about": {"@id": "https://tablasdemultiplicar.online/tabla/57#learningresource"}, "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/57#breadcrumb"}, "inLanguage": "es-MX"}, {"@type": "BreadcrumbList", "@id": "https://tablasdemultiplicar.online/tabla/57#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/51-60", "name": "51-60 Tabla de Multiplicar"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/57", "name": "57 Tabla de Multiplicar"}}]}, {"@type": "LearningResource", "@id": "https://tablasdemultiplicar.online/tabla/57#learningresource", "name": "57 Tabla de Multiplicar", "description": "57 Multiplicar por", "educationalLevel": "Advanced", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "57 Tabla de Multiplicar", "typicalAgeRange": "9-12", "inLanguage": "es-MX", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://tablasdemultiplicar.online/51-60#learningresource"}}]}

export const metadata = {
  title: '57 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '57 Tabla de Multiplicarnu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '57 Tabla de Multiplicar, elli yedi Tabla de Multiplicar, matematik oyunları, Tabla de Multiplicar öğrenme',
  alternates: {
    canonical: '/tabla/57',
  },
}

export default function Number57Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={57} rangeStart={51} rangeEnd={60} /></>)
}


