import RangePage from '../components/RangePage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/11-20#webpage",
      "url": "https://einmaleins.online/11-20",
      "name": "Einmaleins-Tabellen von 11 bis 20 - Mittleres Level",
      "description": "Lerne die Einmaleins-Tabellen von 11 bis 20. Interaktive Übungen und Spiele für die Multiplikation mit zweistelligen Zahlen.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/11-20#learningresource"
      },
      "inLanguage": "de"
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/11-20#learningresource",
      "name": "Lernressource Einmaleins-Tabellen von 11 bis 20",
      "description": "Multiplikation mit zweistelligen Zahlen: Lerne die Einmaleins-Tabellen der Zahlen von 11 bis 20 mit praktischen Übungen und interaktiven Spielen.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "Fähigkeiten zum Verstehen und Anwenden der Einmaleins-Tabellen von 11, 12, 13, 14, 15, 16, 17, 18, 19, 20",
      "typicalAgeRange": "7-10",
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
  title: 'Einmaleins-Tabellen von 11 bis 20 | Zweistellige Zahlen',
  description: 'Lerne die Einmaleins-Tabellen von 11, 12, 13, 14, 15, 16, 17, 18, 19, 20. Beherrsche Multiplikationsoperationen mit zweistelligen Zahlen.',
  keywords: 'einmaleins tabellen von 11 bis 20, einmaleins tabellen, multiplikation, mathematik lernen, großes einmaleins',
  alternates: {
    canonical: '/11-20',
  },
}

export default function MultiplicationTable11to20() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RangePage
        rangeStart={11}
        rangeEnd={20}
        nextRangeUrl="/21-30"
        prevRangeUrl="/1-10"
        difficultyLevel="intermediate"
        difficultyColor="from-yellow-50 to-orange-50"
      />
    </>
  )
}
