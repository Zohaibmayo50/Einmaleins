import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://carpimtablosu.com.tr/sayi/56#webpage", "url": "https://carpimtablosu.com.tr/sayi/56", "name": "56 Çarpım Tablosu", "description": "56 çarpım tablosu ile çarpma becerileri.", "isPartOf": {"@id": "https://carpimtablosu.com.tr/#website"}, "about": {"@id": "https://carpimtablosu.com.tr/sayi/56#learningresource"}, "breadcrumb": {"@id": "https://carpimtablosu.com.tr/sayi/56#breadcrumb"}, "inLanguage": "tr-TR"}, {"@type": "BreadcrumbList", "@id": "https://carpimtablosu.com.tr/sayi/56#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://carpimtablosu.com.tr/", "name": "Ana Sayfa"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://carpimtablosu.com.tr/51-60", "name": "51-60 Çarpım Tablosu"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://carpimtablosu.com.tr/sayi/56", "name": "56 Çarpım Tablosu"}}]}, {"@type": "LearningResource", "@id": "https://carpimtablosu.com.tr/sayi/56#learningresource", "name": "56 Çarpım Tablosu", "description": "56 ile çarpma", "educationalLevel": "Advanced", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "56 çarpım tablosu", "typicalAgeRange": "9-12", "inLanguage": "tr-TR", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://carpimtablosu.com.tr/51-60#learningresource"}}]}

export const metadata = {
  title: '56 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '56 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '56 çarpım tablosu, elli altı çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number56Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={56} rangeStart={51} rangeEnd={60} /></>)
}
