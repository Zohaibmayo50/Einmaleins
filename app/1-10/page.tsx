import RangePage from '../components/RangePage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/1-10#webpage",
      "url": "https://einmaleins.online/1-10",
      "name": "Einmaleins-Tabellen von 1 bis 10 - Anfänger-Level",
      "description": "Lerne die Einmaleins-Tabellen von 1 bis 10. Ideal für Anfänger-Level, mit interaktiven Übungen und Lernspielen.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/1-10#learningresource"
      },
      "inLanguage": "de"
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/1-10#learningresource",
      "name": "Lernressource Einmaleins-Tabellen von 1 bis 10",
      "description": "Einmaleins-Tabellen Anfänger-Level: Lerne die Einmaleins-Tabellen der Zahlen von 1 bis 10 mit praktischen Übungen, interaktiven Spielen und druckbaren Arbeitsblättern.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "Fähigkeiten zum Verstehen und Anwenden der Einmaleins-Tabellen von 1, 2, 3, 4, 5, 6, 7, 8, 9, 10",
      "typicalAgeRange": "6-8",
      "inLanguage": "de",
      "educationalUse": ["practice", "self-study", "homework"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "hasPart": [
        {"@type": "LearningResource", "name": "1er-Einmaleins-Tabelle", "url": "https://einmaleins.online/einmaleins/1"},
        {"@type": "LearningResource", "name": "2er-Einmaleins-Tabelle", "url": "https://einmaleins.online/einmaleins/2"},
        {"@type": "LearningResource", "name": "3er-Einmaleins-Tabelle", "url": "https://einmaleins.online/einmaleins/3"},
        {"@type": "LearningResource", "name": "4er-Einmaleins-Tabelle", "url": "https://einmaleins.online/einmaleins/4"},
        {"@type": "LearningResource", "name": "5er-Einmaleins-Tabelle", "url": "https://einmaleins.online/einmaleins/5"},
        {"@type": "LearningResource", "name": "6er-Einmaleins-Tabelle", "url": "https://einmaleins.online/einmaleins/6"},
        {"@type": "LearningResource", "name": "7er-Einmaleins-Tabelle", "url": "https://einmaleins.online/einmaleins/7"},
        {"@type": "LearningResource", "name": "8er-Einmaleins-Tabelle", "url": "https://einmaleins.online/einmaleins/8"},
        {"@type": "LearningResource", "name": "9er-Einmaleins-Tabelle", "url": "https://einmaleins.online/einmaleins/9"},
        {"@type": "LearningResource", "name": "10er-Einmaleins-Tabelle", "url": "https://einmaleins.online/einmaleins/10"}
      ]
    }
  ]
}


export const metadata = {
  title: 'Einmaleins-Tabellen von 1 bis 10 | Anfänger-Level',
  description: 'Lerne die Einmaleins-Tabellen von 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Einfache Erklärungen für Anfänger-Level, visuelle Beispiele und praktische Übungen.',
  keywords: 'einmaleins tabellen von 1 bis 10, einmaleins tabellen, multiplikation, mathematik lernen, kleines einmaleins',
  alternates: {
    canonical: '/1-10',
  },
}

export default function MultiplicationTable1to10() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RangePage
        rangeStart={1}
        rangeEnd={10}
        nextRangeUrl="/11-20"
        difficultyLevel="beginner"
        difficultyColor="from-blue-50 to-indigo-50"
      />
    </>
  )
}
