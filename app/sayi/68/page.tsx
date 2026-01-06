import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://carpimtablosu.com.tr/sayi/68#webpage", "url": "https://carpimtablosu.com.tr/sayi/68", "name": "68 Çarpım Tablosu", "description": "68 çarpım tablosu ile çarpma becerileri.", "isPartOf": {"@id": "https://carpimtablosu.com.tr/#website"}, "about": {"@id": "https://carpimtablosu.com.tr/sayi/68#learningresource"}, "breadcrumb": {"@id": "https://carpimtablosu.com.tr/sayi/68#breadcrumb"}, "inLanguage": "tr-TR"}, {"@type": "BreadcrumbList", "@id": "https://carpimtablosu.com.tr/sayi/68#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://carpimtablosu.com.tr/", "name": "Ana Sayfa"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://carpimtablosu.com.tr/61-70", "name": "61-70 Çarpım Tablosu"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://carpimtablosu.com.tr/sayi/68", "name": "68 Çarpım Tablosu"}}]}, {"@type": "LearningResource", "@id": "https://carpimtablosu.com.tr/sayi/68#learningresource", "name": "68 Çarpım Tablosu", "description": "68 ile çarpma", "educationalLevel": "Advanced", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "68 çarpım tablosu", "typicalAgeRange": "9-12", "inLanguage": "tr-TR", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://carpimtablosu.com.tr/61-70#learningresource"}}]}

export const metadata = {
  title: '68 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '68 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '68 çarpım tablosu, altmış sekiz çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
  alternates: {
    canonical: '/sayi/68',
  },
}

export default function Number68Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={68} rangeStart={61} rangeEnd={70} /></>)
}
