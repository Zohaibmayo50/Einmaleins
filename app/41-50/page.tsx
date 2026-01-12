import RangePage from '../components/RangePage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/41-50#webpage",
      "url": "https://einmaleins.online/41-50",
      "name": "Einmaleins-Tabellen von 41 bis 50 - Mittleres Level",
      "description": "Lerne die Einmaleins-Tabellen von 41 bis 50. Umfassende Lernmaterialien zur Entwicklung mathematischer Fähigkeiten auf mittlerem Level.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/41-50#learningresource"
      },
      "inLanguage": "de"
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/41-50#learningresource",
      "name": "Lernressource Einmaleins-Tabellen von 41 bis 50",
      "description": "Einmaleins-Tabellen mittleres Level: Lerne die Einmaleins-Tabellen der Zahlen von 41 bis 50 mit praktischen Übungen.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "Fähigkeiten zum Verstehen und Anwenden der Einmaleins-Tabellen von 41 bis 50",
      "typicalAgeRange": "8-11",
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
  title: 'Einmaleins-Tabellen von 41 bis 50 | Mittleres bis Fortgeschrittenes Level',
  description: 'Lerne die Einmaleins-Tabellen von 41 bis 50. Interaktive Übungen zur Beherrschung der Multiplikation mit großen Zahlen.',
  keywords: 'einmaleins tabellen von 41 bis 50, einmaleins tabellen, multiplikation, mathematik lernen, großes einmaleins',
  alternates: {
    canonical: '/41-50',
  },
}

export default function MultiplicationTable41to50() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RangePage
        rangeStart={41}
        rangeEnd={50}
        nextRangeUrl="/51-60"
        prevRangeUrl="/31-40"
        difficultyLevel="intermediate"
        difficultyColor="from-rose-50 to-red-50"
      />
    </>
  )
}
