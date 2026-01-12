import RangePage from '../components/RangePage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/31-40#webpage",
      "url": "https://einmaleins.online/31-40",
      "name": "Einmaleins-Tabellen von 31 bis 40 - Mittleres Level",
      "description": "Lerne die Einmaleins-Tabellen von 31 bis 40. Interaktive Ressourcen zur Entwicklung mathematischer Fähigkeiten auf mittlerem Level.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/31-40#learningresource"
      },
      "inLanguage": "de"
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/31-40#learningresource",
      "name": "Lernressource Einmaleins-Tabellen von 31 bis 40",
      "description": "Einmaleins-Tabellen mittleres Level: Lerne die Einmaleins-Tabellen der Zahlen von 31 bis 40 mit praktischen Übungen.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "Fähigkeiten zum Verstehen und Anwenden der Einmaleins-Tabellen von 31 bis 40",
      "typicalAgeRange": "8-10",
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
  title: 'Einmaleins-Tabellen von 31 bis 40 | Fortgeschrittene Multiplikation',
  description: 'Lerne die Einmaleins-Tabellen von 31, 32, 33, 34, 35, 36, 37, 38, 39, 40. Umfassende Lernmaterialien für fortgeschrittene Multiplikationsfähigkeiten.',
  keywords: 'einmaleins tabellen von 31 bis 40, einmaleins tabellen, multiplikation, mathematik lernen, großes einmaleins',
  alternates: {
    canonical: '/31-40',
  },
}

export default function MultiplicationTable31to40() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RangePage
        rangeStart={31}
        rangeEnd={40}
        prevRangeUrl="/21-30"
        nextRangeUrl="/41-50"
        difficultyLevel="intermediate"
        difficultyColor="from-orange-50 to-amber-50"
      />
    </>
  )
}
