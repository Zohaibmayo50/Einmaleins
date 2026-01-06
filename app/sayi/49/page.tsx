import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://carpimtablosu.com.tr/sayi/49#webpage", "url": "https://carpimtablosu.com.tr/sayi/49", "name": "49 Çarpım Tablosu", "description": "49 çarpım tablosu ile çarpma becerileri.", "isPartOf": {"@id": "https://carpimtablosu.com.tr/#website"}, "about": {"@id": "https://carpimtablosu.com.tr/sayi/49#learningresource"}, "breadcrumb": {"@id": "https://carpimtablosu.com.tr/sayi/49#breadcrumb"}, "inLanguage": "tr-TR"}, {"@type": "BreadcrumbList", "@id": "https://carpimtablosu.com.tr/sayi/49#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://carpimtablosu.com.tr/", "name": "Ana Sayfa"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://carpimtablosu.com.tr/41-50", "name": "41-50 Çarpım Tablosu"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://carpimtablosu.com.tr/sayi/49", "name": "49 Çarpım Tablosu"}}]}, {"@type": "LearningResource", "@id": "https://carpimtablosu.com.tr/sayi/49#learningresource", "name": "49 Çarpım Tablosu", "description": "49 ile çarpma", "educationalLevel": "Intermediate", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "49 çarpım tablosu", "typicalAgeRange": "8-11", "inLanguage": "tr-TR", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://carpimtablosu.com.tr/41-50#learningresource"}}]}

export const metadata = {
  title: '49 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '49 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '49 çarpım tablosu, kırk dokuz çarpım tablosu, 49 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number49Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={49} rangeStart={41} rangeEnd={50} /></>)
}
