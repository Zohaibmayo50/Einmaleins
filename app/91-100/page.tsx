import RangePage from '../components/RangePage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/91-100#webpage",
      "url": "https://einmaleins.online/91-100",
      "name": "Einmaleins-Tabellen von 91 bis 100 - Fortgeschrittenes Level",
      "description": "Lerne die Einmaleins-Tabellen von 91 bis 100. Umfassende Lernressourcen für die anspruchsvollsten Einmaleins-Tabellen.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/91-100#learningresource"
      },
      "inLanguage": "de"
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/91-100#learningresource",
      "name": "Lernressource Einmaleins-Tabellen von 91 bis 100",
      "description": "Einmaleins-Tabellen höchstes Level: Lerne die Einmaleins-Tabellen der Zahlen von 91 bis 100 mit praktischen Übungen. Vervollständige deine Multiplikationsfähigkeiten mit der Einmaleins-Tabelle von 100.",
      "educationalLevel": "Advanced",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "Fähigkeiten zum Verstehen und Anwenden der Einmaleins-Tabellen von 91 bis 100",
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
  title: 'Einmaleins-Tabellen von 91 bis 100 | Höchstes Level',
  description: 'Lerne die Einmaleins-Tabellen von 91, 92, 93, 94, 95, 96, 97, 98, 99, 100. Umfassende Bildung für Multiplikationsfähigkeiten auf höchstem Level.',
  keywords: 'einmaleins tabellen von 91 bis 100, einmaleins tabellen, multiplikation, mathematik lernen, großes einmaleins',
  alternates: {
    canonical: '/91-100',
  },
}

export default function MultiplicationTable91to100() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RangePage
        rangeStart={91}
        rangeEnd={100}
        prevRangeUrl="/81-90"
        difficultyLevel="advanced"
        difficultyColor="from-indigo-50 to-purple-50"
      />
    </>
  )
}
