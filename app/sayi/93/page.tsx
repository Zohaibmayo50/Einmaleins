import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://carpimtablosu.com.tr/sayi/93#webpage", "url": "https://carpimtablosu.com.tr/sayi/93", "name": "93 Çarpım Tablosu", "description": "93 çarpım tablosu ile çarpma becerileri.", "isPartOf": {"@id": "https://carpimtablosu.com.tr/#website"}, "about": {"@id": "https://carpimtablosu.com.tr/sayi/93#learningresource"}, "breadcrumb": {"@id": "https://carpimtablosu.com.tr/sayi/93#breadcrumb"}, "inLanguage": "tr-TR"}, {"@type": "BreadcrumbList", "@id": "https://carpimtablosu.com.tr/sayi/93#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://carpimtablosu.com.tr/", "name": "Ana Sayfa"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://carpimtablosu.com.tr/91-100", "name": "91-100 Çarpım Tablosu"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://carpimtablosu.com.tr/sayi/93", "name": "93 Çarpım Tablosu"}}]}, {"@type": "LearningResource", "@id": "https://carpimtablosu.com.tr/sayi/93#learningresource", "name": "93 Çarpım Tablosu", "description": "93 ile çarpma", "educationalLevel": "Advanced", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "93 çarpım tablosu", "typicalAgeRange": "10-12", "inLanguage": "tr-TR", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://carpimtablosu.com.tr/91-100#learningresource"}}]}
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '93 Çarpım Tablosu - Kolay Öğrenme Yöntemleri',
  description: '93 çarpım tablosunu öğrenmek için eğlenceli ve etkili yöntemler. Görsel araçlar ve pratik ipuçlarıyla 93 tablosunda ustalaşın.',
  keywords: '93 çarpım tablosu, 93 tablosu, çarpım tablosu 93, matematik, çarpma işlemi',
}

export default function Number93Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={93} rangeStart={91} rangeEnd={100} /></>)
}
