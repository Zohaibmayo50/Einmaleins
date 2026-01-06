import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://carpimtablosu.com.tr/sayi/99#webpage", "url": "https://carpimtablosu.com.tr/sayi/99", "name": "99 Çarpım Tablosu", "description": "99 çarpım tablosu ile çarpma becerileri.", "isPartOf": {"@id": "https://carpimtablosu.com.tr/#website"}, "about": {"@id": "https://carpimtablosu.com.tr/sayi/99#learningresource"}, "breadcrumb": {"@id": "https://carpimtablosu.com.tr/sayi/99#breadcrumb"}, "inLanguage": "tr-TR"}, {"@type": "BreadcrumbList", "@id": "https://carpimtablosu.com.tr/sayi/99#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://carpimtablosu.com.tr/", "name": "Ana Sayfa"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://carpimtablosu.com.tr/91-100", "name": "91-100 Çarpım Tablosu"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://carpimtablosu.com.tr/sayi/99", "name": "99 Çarpım Tablosu"}}]}, {"@type": "LearningResource", "@id": "https://carpimtablosu.com.tr/sayi/99#learningresource", "name": "99 Çarpım Tablosu", "description": "99 ile çarpma", "educationalLevel": "Advanced", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "99 çarpım tablosu", "typicalAgeRange": "10-12", "inLanguage": "tr-TR", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://carpimtablosu.com.tr/91-100#learningresource"}}]}
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '99 Çarpım Tablosu - Kolay Öğrenme Yöntemleri',
  description: '99 çarpım tablosunu öğrenmek için eğlenceli ve etkili yöntemler. Görsel araçlar ve pratik ipuçlarıyla 99 tablosunda ustalaşın.',
  keywords: '99 çarpım tablosu, 99 tablosu, çarpım tablosu 99, matematik, çarpma işlemi',
}

export default function Number99Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={99} rangeStart={91} rangeEnd={100} /></>)
}
