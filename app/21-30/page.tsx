import RangePage from '../components/RangePage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/21-30#webpage",
      "url": "https://einmaleins.online/21-30",
      "name": "Einmaleins-Tabellen von 21 bis 30 - Mittleres Level",
      "description": "Lerne die Einmaleins-Tabellen von 21 bis 30. Interaktive Übungen und praktische Materialien für Schüler mit mittlerem Level.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/21-30#learningresource"
      },
      "inLanguage": "de"
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/21-30#learningresource",
      "name": "Lernressource Einmaleins-Tabellen von 21 bis 30",
      "description": "Einmaleins-Tabellen mittleres Level: Lerne die Einmaleins-Tabellen der Zahlen von 21 bis 30 mit praktischen Übungen.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "Fähigkeiten zum Verstehen und Anwenden der Einmaleins-Tabellen von 21 bis 30",
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
  title: 'Einmaleins-Tabellen von 21 bis 30 | Mittleres Level',
  description: 'Lerne die Einmaleins-Tabellen von 21 bis 30. Detaillierte Erklärungen und praktische Übungen für Schüler mit mittlerem Level.',
  keywords: 'einmaleins tabellen von 21 bis 30, einmaleins tabellen, multiplikation, mathematik lernen, großes einmaleins',
  alternates: {
    canonical: '/21-30',
  },
}

export default function MultiplicationTable21to30() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RangePage
        rangeStart={21}
        rangeEnd={30}
        prevRangeUrl="/11-20"
        nextRangeUrl="/31-40"
        difficultyLevel="intermediate"
        difficultyColor="from-purple-50 to-pink-50"
      />
    </>
  )
}
