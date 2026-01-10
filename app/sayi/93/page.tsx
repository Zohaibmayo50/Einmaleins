import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://tablasdemultiplicar.online/tabla/93#webpage", "url": "https://tablasdemultiplicar.online/tabla/93", "name": "93 Çarpım Tablosu", "description": "93 çarpım tablosu ile çarpma becerileri.", "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"}, "about": {"@id": "https://tablasdemultiplicar.online/tabla/93#learningresource"}, "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/93#breadcrumb"}, "inLanguage": "es-MX"}, {"@type": "BreadcrumbList", "@id": "https://tablasdemultiplicar.online/tabla/93#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/91-100", "name": "91-100 Çarpım Tablosu"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/93", "name": "93 Çarpım Tablosu"}}]}, {"@type": "LearningResource", "@id": "https://tablasdemultiplicar.online/tabla/93#learningresource", "name": "93 Çarpım Tablosu", "description": "93 ile çarpma", "educationalLevel": "Advanced", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "93 çarpım tablosu", "typicalAgeRange": "10-12", "inLanguage": "es-MX", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://tablasdemultiplicar.online/91-100#learningresource"}}]}
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '93 Çarpım Tablosu - Kolay Öğrenme Yöntemleri',
  description: '93 çarpım tablosunu öğrenmek için eğlenceli ve etkili yöntemler. Görsel araçlar ve pratik ipuçlarıyla 93 tablosunda ustalaşın.',
  keywords: '93 çarpım tablosu, 93 tablosu, çarpım tablosu 93, matematik, çarpma işlemi',
  alternates: {
    canonical: '/tabla/93',
  },
}

export default function Number93Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={93} rangeStart={91} rangeEnd={100} /></>)
}

