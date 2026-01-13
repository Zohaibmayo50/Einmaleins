import NumberPage from '@/app/components/NumberPage'
import { Metadata } from 'next'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://einmaleins.online/einmaleins/100#webpage",
      "url": "https://einmaleins.online/einmaleins/100",
      "name": "100er-Einmaleins - Onluk Systemin Ustasi",
      "description": "100er-Einmaleins: onluk System, y�zde hesaplamalari und yer degeri Konzeptnda meistern. En �nemli �arpim tablolarindan biri.",
      "isPartOf": {
        "@id": "https://einmaleins.online/#website"
      },
      "about": {
        "@id": "https://einmaleins.online/einmaleins/100#learningresource"
      },
      "breadcrumb": {
        "@id": "https://einmaleins.online/einmaleins/100#breadcrumb"
      },
      "inLanguage": "de"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://einmaleins.online/einmaleins/100#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@id": "https://einmaleins.online/",
            "name": "Startseite"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@id": "https://einmaleins.online/91-100",
            "name": "Einmaleins 91-100"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://einmaleins.online/einmaleins/100",
            "name": "100er-Einmaleins"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://einmaleins.online/einmaleins/100#learningresource",
      "name": "100er-Einmaleins Lernressource",
      "description": "Multiplikation mit 100 - Fortgeschrittene Rechenmethoden",
      "educationalLevel": "Advanced",
      "learningResourceType": ["Interactiund Resource", "Practice Material", "Educational Game"],
      "teaches": "100er-Einmaleins, onluk System, yer degeri, y�zde hesaplama, 10'un Quadrat",
      "typicalAgeRange": "9-12",
      "inLanguage": "de",
      "educationalUse": ["practice", "self-study", "real-world application", "foundational concept"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://einmaleins.online/91-100#learningresource"
      }
    }
  ]
}

export const metadata: Metadata = {
  title: '100er-Einmaleins | Lerne Multiplikation mit 100',
  description: 'Meistere das 100er-Einmaleins. Klare Erklärungen, Muster und praktische Übungsstrategien.',
  keywords: '100er einmaleins, einmaleins tabelle, multiplikation, mathematik lernen',
  alternates: {
    canonical: '/einmaleins/100',
  },
}

export default function Number100Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={100} rangeStart={91} rangeEnd={100} />
    </>
  )
}


