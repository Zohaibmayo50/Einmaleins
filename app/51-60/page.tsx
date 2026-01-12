import RangePage from '../components/RangePage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/51-60#webpage",
      "url": "https://einmaleins.online/51-60",
      "name": "Einmaleins-Tabellen von 51 bis 60 - Fortgeschrittenes Level",
      "description": "Lerne die Einmaleins-Tabellen von 51 bis 60. Multiplikationsübungen mit großen Zahlen für Schüler auf fortgeschrittenem Level.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/51-60#learningresource"
      },
      "inLanguage": "de"
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/51-60#learningresource",
      "name": "Lernressource Einmaleins-Tabellen von 51 bis 60",
      "description": "Einmaleins-Tabellen fortgeschrittenes Level: Lerne die Einmaleins-Tabellen der Zahlen von 51 bis 60 mit praktischen Übungen.",
      "educationalLevel": "Advanced",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "Fähigkeiten zum Verstehen und Anwenden der Einmaleins-Tabellen von 51 bis 60",
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
  title: 'Einmaleins-Tabellen von 51 bis 60 | Fortgeschrittenes Level',
  description: 'Lerne die Einmaleins-Tabellen von 51, 52, 53, 54, 55, 56, 57, 58, 59, 60. Detaillierte Lernmaterialien für Schüler auf fortgeschrittenem Level.',
  keywords: 'einmaleins tabellen von 51 bis 60, einmaleins tabellen, multiplikation, mathematik lernen, großes einmaleins',
  alternates: {
    canonical: '/51-60',
  },
}

export default function MultiplicationTable51to60() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RangePage
        rangeStart={51}
        rangeEnd={60}
        prevRangeUrl="/41-50"
        nextRangeUrl="/61-70"
        difficultyLevel="advanced"
        difficultyColor="from-violet-50 to-purple-50"
      />
    </>
  )
}
