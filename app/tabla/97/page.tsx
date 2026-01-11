import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://tablasdemultiplicar.online/tabla/97#webpage", "url": "https://tablasdemultiplicar.online/tabla/97", "name": "97 Tabla de Multiplicar", "description": "97 Tabla de Multiplicar Multiplicar por becerileri.", "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"}, "about": {"@id": "https://tablasdemultiplicar.online/tabla/97#learningresource"}, "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/97#breadcrumb"}, "inLanguage": "es-MX"}, {"@type": "BreadcrumbList", "@id": "https://tablasdemultiplicar.online/tabla/97#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/91-100", "name": "91-100 Tabla de Multiplicar"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/97", "name": "97 Tabla de Multiplicar"}}]}, {"@type": "LearningResource", "@id": "https://tablasdemultiplicar.online/tabla/97#learningresource", "name": "97 Tabla de Multiplicar", "description": "97 Multiplicar por", "educationalLevel": "Advanced", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "97 Tabla de Multiplicar", "typicalAgeRange": "10-12", "inLanguage": "es-MX", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://tablasdemultiplicar.online/91-100#learningresource"}}]}
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '97 Tabla de Multiplicar - Métodos Fáciles de Aprendizaje',
  description: '97 Tabla de Multiplicarnu con métodos divertidos y efectivos. Domina la tabla con herramientas visuales y consejos prácticos.',
  keywords: '97 Tabla de Multiplicar, 97 tablosu, Tabla de Multiplicar 97, matematik, çarpma işlemi',
  alternates: {
    canonical: '/tabla/97',
  },
}

export default function Number97Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={97} rangeStart={91} rangeEnd={100} /></>)
}


