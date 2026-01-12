import RangePage from '../components/RangePage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/61-70#webpage",
      "url": "https://einmaleins.online/61-70",
      "name": "Einmaleins-Tabellen von 61 bis 70 - Fortgeschrittenes Level",
      "description": "Lerne die Einmaleins-Tabellen von 61 bis 70. Interaktive Lernressourcen für mathematische Fähigkeiten auf fortgeschrittenem Level.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/61-70#learningresource"
      },
      "inLanguage": "de"
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/61-70#learningresource",
      "name": "Lernressource Einmaleins-Tabellen von 61 bis 70",
      "description": "Einmaleins-Tabellen fortgeschrittenes Level: Lerne die Einmaleins-Tabellen der Zahlen von 61 bis 70 mit praktischen Übungen.",
      "educationalLevel": "Advanced",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "Fähigkeiten zum Verstehen und Anwenden der Einmaleins-Tabellen von 61 bis 70",
      "typicalAgeRange": "9-12",
      "inLanguage": "de",
      "educationalUse": ["practice", "self-study", "homework"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      }
    }
  ]
}


export const metadata = {
  title: 'Einmaleins-Tabellen von 61 bis 70 | Hohe Zahlen',
  description: 'Lerne die Einmaleins-Tabellen von 61 bis 70. Umfassende Lernressourcen für die Multiplikation mit hohen Zahlen.',
  keywords: 'einmaleins tabellen von 61 bis 70, einmaleins tabellen, multiplikation, mathematik lernen, großes einmaleins',
  alternates: {
    canonical: '/61-70',
  },
}

export default function MultiplicationTable61to70() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RangePage
        rangeStart={61}
        rangeEnd={70}
        prevRangeUrl="/51-60"
        nextRangeUrl="/71-80"
        difficultyLevel="advanced"
        difficultyColor="from-cyan-50 to-blue-50"
      />
    </>
  )
}
