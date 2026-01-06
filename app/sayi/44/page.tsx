import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://carpimtablosu.com.tr/sayi/44#webpage", "url": "https://carpimtablosu.com.tr/sayi/44", "name": "44 Çarpım Tablosu", "description": "44 çarpım tablosu ile çarpma becerileri.", "isPartOf": {"@id": "https://carpimtablosu.com.tr/#website"}, "about": {"@id": "https://carpimtablosu.com.tr/sayi/44#learningresource"}, "breadcrumb": {"@id": "https://carpimtablosu.com.tr/sayi/44#breadcrumb"}, "inLanguage": "tr-TR"}, {"@type": "BreadcrumbList", "@id": "https://carpimtablosu.com.tr/sayi/44#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://carpimtablosu.com.tr/", "name": "Ana Sayfa"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://carpimtablosu.com.tr/41-50", "name": "41-50 Çarpım Tablosu"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://carpimtablosu.com.tr/sayi/44", "name": "44 Çarpım Tablosu"}}]}, {"@type": "LearningResource", "@id": "https://carpimtablosu.com.tr/sayi/44#learningresource", "name": "44 Çarpım Tablosu", "description": "44 ile çarpma", "educationalLevel": "Intermediate", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "44 çarpım tablosu", "typicalAgeRange": "8-11", "inLanguage": "tr-TR", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://carpimtablosu.com.tr/41-50#learningresource"}}]}

export const metadata = {
  title: '44 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '44 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '44 çarpım tablosu, kırk dört çarpım tablosu, 44 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
  alternates: {
    canonical: '/sayi/44',
  },
}

export default function Number44Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={44} rangeStart={41} rangeEnd={50} /></>)
}
