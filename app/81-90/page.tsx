import RangePage from '../components/RangePage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/81-90#webpage",
      "url": "https://einmaleins.online/81-90",
      "name": "Einmaleins-Tabellen von 81 bis 90 - Fortgeschrittenes Level",
      "description": "Lerne die Einmaleins-Tabellen von 81 bis 90. Interaktive Materialien zur Entwicklung mathematischer Fähigkeiten auf fortgeschrittenem Level.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/81-90#learningresource"
      },
      "inLanguage": "de"
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/81-90#learningresource",
      "name": "Lernressource Einmaleins-Tabellen von 81 bis 90",
      "description": "Einmaleins-Tabellen fortgeschrittenes Level: Lerne die Einmaleins-Tabellen von 81 bis 90 mit praktischen Übungen.",
      "educationalLevel": "Advanced",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "Verstehen und Anwenden der Einmaleins-Tabellen von 81 bis 90",
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
  title: 'Einmaleins-Tabellen von 81 bis 90 | Experten-Level',
  description: 'Lerne die Einmaleins-Tabellen von 81 bis 90. Anspruchsvolle Multiplikationsoperationen und Strategien für Schüler auf Experten-Level.',
  keywords: 'einmaleins tabellen von 81 bis 90, einmaleins tabellen, multiplikation, mathematik lernen, großes einmaleins',
  alternates: {
    canonical: '/81-90',
  },
}

export default function MultiplicationTable81to90() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RangePage
        rangeStart={81}
        rangeEnd={90}
        nextRangeUrl="/91-100"
        prevRangeUrl="/71-80"
        difficultyLevel="advanced"
        difficultyColor="from-fuchsia-50 to-pink-50"
      />
    </>
  )
}
