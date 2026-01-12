import RangePage from '../components/RangePage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/71-80#webpage",
      "url": "https://einmaleins.online/71-80",
      "name": "Einmaleins-Tabellen von 71 bis 80 - Fortgeschrittenes Level",
      "description": "Lerne die Einmaleins-Tabellen von 71 bis 80. Umfassende Ressourcen für fortgeschrittene Multiplikationsfähigkeiten mit großen Zahlen.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/71-80#learningresource"
      },
      "inLanguage": "de"
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/71-80#learningresource",
      "name": "Lernressource Einmaleins-Tabellen von 71 bis 80",
      "description": "Einmaleins-Tabellen fortgeschrittenes Level: Lerne die Einmaleins-Tabellen von 71 bis 80 mit praktischen Übungen.",
      "educationalLevel": "Advanced",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "Verstehen und Anwenden der Einmaleins-Tabellen von 71 bis 80",
      "typicalAgeRange": "10-12",
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
  title: 'Einmaleins-Tabellen von 71 bis 80 | Multiplikation Fortgeschrittenes Level',
  description: 'Lerne die Einmaleins-Tabellen von 71, 72, 73, 74, 75, 76, 77, 78, 79, 80. Entwickle mathematische Fähigkeiten auf fortgeschrittenem Level.',
  keywords: 'einmaleins tabellen von 71 bis 80, einmaleins tabellen, multiplikation, mathematik lernen, großes einmaleins',
  alternates: {
    canonical: '/71-80',
  },
}

export default function MultiplicationTable71to80() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RangePage
        rangeStart={71}
        rangeEnd={80}
        prevRangeUrl="/61-70"
        nextRangeUrl="/81-90"
        difficultyLevel="advanced"
        difficultyColor="from-lime-50 to-green-50"
      />
    </>
  )
}
