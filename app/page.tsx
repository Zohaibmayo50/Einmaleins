import Hero from './components/Hero'
import DefinitionSection from './components/DefinitionSection'
import WhyItMatters from './components/WhyItMatters'
import HowToLearn from './components/HowToLearn'
import LearningPaths from './components/LearningPaths'
import PracticePreview from './components/PracticePreview'
import GamesSection from './components/GamesSection'
import PrintableExercises from './components/PrintableExercises'
import AudienceSection from './components/AudienceSection'
import Footer from './components/Footer'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://einmaleins.online/#website",
      "url": "https://einmaleins.online/",
      "name": "Einmaleins",
      "description": "Interaktive Lernplattform für das Einmaleins von 1 bis 100. Visuelle Lernwerkzeuge für Kinder, praktische Übungen und lehrreiche Spiele.",
      "inLanguage": "de",
      "publisher": {
        "@id": "https://einmaleins.online/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://einmaleins.online/einmaleins/{search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/#webpage",
      "url": "https://einmaleins.online/",
      "name": "Einmaleins - Von 1 bis 100 Alle Tabellen",
      "description": "Interaktive Lernplattform für das Einmaleins für Kinder. Lerne alle Multiplikationstabellen von 1 bis 100 durch Üben. Visuelle Übungen, Spiele und druckbare Arbeitsblätter.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/#learningresource"
      },
      "inLanguage": "de",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://einmaleins.online/og-image.jpg",
        "width": 1200,
        "height": 630
      }
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://einmaleins.online/#organization",
      "name": "Einmaleins",
      "url": "https://einmaleins.online/",
      "description": "Bildungsplattform, die das Einmaleins an Grundschüler vermittelt",
      "areaServed": "Worldwide",
      "availableLanguage": "de"
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/#learningresource",
      "name": "Einmaleins Lernplattform",
      "description": "Umfassende Lernressource für das Einmaleins von 1 bis 100. Detaillierte Erklärungen für jede Zahl, Muster, praktische Strategien und interaktive Übungen.",
      "educationalLevel": "Elementary",
      "learningResourceType": [
        "Interactive Resource",
        "Practice Material",
        "Educational Game",
        "Worksheet"
      ],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": [
          "student",
          "parent",
          "teacher"
        ]
      },
      "inLanguage": "de",
      "educationalUse": [
        "practice",
        "self-study",
        "homework",
        "classroom activity"
      ],
      "keywords": [
        "einmaleins",
        "kleines einmaleins",
        "das einmaleins",
        "einmaleins lernen",
        "einmaleins üben",
        "einmaleins spiele",
        "einmaleins tabelle",
        "einmaleins aufgaben",
        "arbeitsblätter einmaleins",
        "einmaleins arbeitsblätter zum ausdrucken pdf",
        "grosses einmaleins",
        "einmaleins tafel",
        "kernaufgaben einmaleins"
      ],
      "teaches": "Fähigkeiten zum Verstehen, Anwenden und Auswendiglernen der Multiplikation und des Einmaleins",
      "typicalAgeRange": "6-12"
    }
  ]
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <main className="min-h-screen">
        {/* Hero Section - Contains the only H1 on the page */}
        <Hero />
      
      {/* Contextual Bridge: Learning Paths (Core Content Links) */}
      <LearningPaths />
      
      {/* Supplementary: Practice and Games */}
      <PracticePreview />
      
      {/* Games Section */}
      <GamesSection />
      
      {/* Printable Exercises */}
      <PrintableExercises />
      
      {/* Macro Context: Definition Section */}
      <DefinitionSection />
      
      {/* Attribute Processing: Why It Matters */}
      <WhyItMatters />
      
      {/* Learning Methodology */}
      <HowToLearn />
      
      {/* Trust & Audience Expansion */}
      <AudienceSection />
      
      {/* Footer */}
      <Footer />
    </main>
    </>
  )
}
