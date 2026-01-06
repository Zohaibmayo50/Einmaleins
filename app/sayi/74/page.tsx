import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://carpimtablosu.com.tr/sayi/74#webpage", "url": "https://carpimtablosu.com.tr/sayi/74", "name": "74 Çarpım Tablosu", "description": "74 çarpım tablosu ile çarpma becerileri.", "isPartOf": {"@id": "https://carpimtablosu.com.tr/#website"}, "about": {"@id": "https://carpimtablosu.com.tr/sayi/74#learningresource"}, "breadcrumb": {"@id": "https://carpimtablosu.com.tr/sayi/74#breadcrumb"}, "inLanguage": "tr-TR"}, {"@type": "BreadcrumbList", "@id": "https://carpimtablosu.com.tr/sayi/74#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://carpimtablosu.com.tr/", "name": "Ana Sayfa"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://carpimtablosu.com.tr/71-80", "name": "71-80 Çarpım Tablosu"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://carpimtablosu.com.tr/sayi/74", "name": "74 Çarpım Tablosu"}}]}, {"@type": "LearningResource", "@id": "https://carpimtablosu.com.tr/sayi/74#learningresource", "name": "74 Çarpım Tablosu", "description": "74 ile çarpma", "educationalLevel": "Advanced", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "74 çarpım tablosu", "typicalAgeRange": "10-12", "inLanguage": "tr-TR", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://carpimtablosu.com.tr/71-80#learningresource"}}]}

export const metadata = {
  title: '74 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '74 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '74 çarpım tablosu, yetmiş dört çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
  alternates: {
    canonical: '/sayi/74',
  },
}

export default function Number74Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={74} rangeStart={71} rangeEnd={80} /></>)
}
