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
      "@id": "https://tablasdemultiplicar.online/#website",
      "url": "https://tablasdemultiplicar.online/",
      "name": "Tablas de Multiplicar",
      "description": "Plataforma de educación interactiva para aprender las tablas de multiplicar del 1 al 100. Herramientas de aprendizaje visual para niños, ejercicios prácticos y juegos educativos.",
      "inLanguage": "es",
      "publisher": {
        "@id": "https://tablasdemultiplicar.online/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://tablasdemultiplicar.online/tabla/{search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/#webpage",
      "url": "https://tablasdemultiplicar.online/",
      "name": "Tablas de Multiplicar - Del 1 al 100 Todas las Tablas",
      "description": "Plataforma interactiva de aprendizaje de tablas de multiplicar para niños. Aprende todas las tablas de multiplicar del 1 al 100 practicando. Ejercicios visuales, juegos y hojas de trabajo imprimibles.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/#learningresource"
      },
      "inLanguage": "es",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://tablasdemultiplicar.online/og-image.jpg",
        "width": 1200,
        "height": 630
      }
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://tablasdemultiplicar.online/#organization",
      "name": "Tablas de Multiplicar",
      "url": "https://tablasdemultiplicar.online/",
      "description": "Plataforma educativa que enseña las tablas de multiplicar a estudiantes de primaria",
      "areaServed": "Worldwide",
      "availableLanguage": "es"
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/#learningresource",
      "name": "Plataforma de Aprendizaje de Tablas de Multiplicar",
      "description": "Recurso educativo integral para aprender las tablas de multiplicar del 1 al 100. Explicaciones detalladas para cada número, patrones, estrategias prácticas y ejercicios interactivos.",
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
      "inLanguage": "es",
      "educationalUse": [
        "practice",
        "self-study",
        "homework",
        "classroom activity"
      ],
      "keywords": [
        "tablas de multiplicar",
        "aprendizaje de matemáticas",
        "matemáticas de primaria",
        "operación de multiplicación",
        "memorizar tablas de multiplicar",
        "práctica de matemáticas",
        "ejercicios de multiplicación",
        "juegos de tablas de multiplicar"
      ],
      "teaches": "Habilidades para comprender, aplicar y memorizar la operación de multiplicación y las tablas de multiplicar",
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
