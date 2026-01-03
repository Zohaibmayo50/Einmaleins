# Component Architecture Map

## Homepage Component Tree

```
app/page.tsx (Homepage Root)
│
├─── Hero.tsx
│    └─── Contains: H1 (ONLY ONE), intro paragraph
│    └─── Purpose: Central intent declaration
│    └─── SEO: Primary keyword targeting
│
├─── DefinitionSection.tsx
│    └─── Contains: H2, definition paragraphs, highlighted box
│    └─── Purpose: Macro context (What is it?)
│    └─── SEO: Entity definition
│
├─── WhyItMatters.tsx
│    └─── Contains: H2, 4 benefit cards with icons
│    └─── Purpose: Attribute processing (Why important?)
│    └─── SEO: Benefits and attributes coverage
│
├─── HowToLearn.tsx
│    └─── Contains: H2, 3 H3 subsections with details
│    │   ├─── H3: Learning by understanding patterns
│    │   ├─── H3: Repetitive and gradual learning
│    │   └─── H3: Learning through practice
│    └─── Purpose: Methodology explanation
│    └─── SEO: Process and how-to content
│
├─── LearningPaths.tsx
│    └─── Contains: H2, 4 interactive cards with links
│    │   ├─── Link: /multiplication-table/1-to-10
│    │   ├─── Link: /multiplication-table/11-to-20
│    │   ├─── Link: /multiplication-table/21-to-50
│    │   └─── Link: /multiplication-table/51-to-100
│    └─── Purpose: Contextual bridge to core content
│    └─── SEO: Internal linking with semantic anchors
│
├─── PracticePreview.tsx
│    └─── Contains: H2, 3 preview cards (disabled)
│    │   ├─── Practice mode (coming soon)
│    │   ├─── Games (coming soon)
│    │   └─── Exercises (coming soon)
│    └─── Purpose: Supplementary content preview
│    └─── SEO: Completeness signal
│    └─── Visual: Lower priority (de-emphasized)
│
└─── AudienceSection.tsx
     └─── Contains: H2, 3 audience cards
     │   ├─── For Students (features list)
     │   ├─── For Parents (link: /learn-multiplication/for-parents)
     │   └─── For Teachers (link: /learn-multiplication/for-teachers)
     └─── Purpose: Trust signals, authority expansion
     └─── SEO: Audience targeting, topical breadth
```

---

## Component Dependencies

### Imports in page.tsx
```typescript
import Hero from './components/Hero'
import DefinitionSection from './components/DefinitionSection'
import WhyItMatters from './components/WhyItMatters'
import HowToLearn from './components/HowToLearn'
import LearningPaths from './components/LearningPaths'
import PracticePreview from './components/PracticePreview'
import AudienceSection from './components/AudienceSection'
```

### External Dependencies
```typescript
// Only LearningPaths and AudienceSection use Next.js Link
import Link from 'next/link'
```

---

## Routing Structure

```
/                                    (Homepage - page.tsx)
│
├── /multiplication-table/
│   ├── /1-to-10/                   (page.tsx - Placeholder)
│   ├── /11-to-20/                  (page.tsx - Placeholder)
│   ├── /21-to-50/                  (page.tsx - Placeholder)
│   └── /51-to-100/                 (page.tsx - Placeholder)
│
└── /learn-multiplication/
    ├── /for-parents/                (page.tsx - Placeholder)
    └── /for-teachers/               (page.tsx - Placeholder)
```

---

## Heading Hierarchy Map

```
Homepage (/)
│
└── H1: "Çarpım Tablosu – Öğren, Anla ve Adım Adım Pratik Yap"
    │
    ├── H2: "Çarpım Tablosu Nedir?"
    │   └── (No H3 - direct paragraphs)
    │
    ├── H2: "Çarpım Tablosu Öğrenmek Neden Önemlidir?"
    │   └── (No H3 - 4 card articles)
    │
    ├── H2: "Çarpım Tablosu Nasıl Etkili Bir Şekilde Öğrenilir?"
    │   ├── H3: "Örüntüleri Anlayarak Öğrenme"
    │   ├── H3: "Tekrarlı ve Aşamalı Öğrenme"
    │   └── H3: "Pratik Yaparak Öğrenme"
    │
    ├── H2: "Çarpım Tablosunu Öğrenmeye Başlayın"
    │   └── (No H3 - 4 link cards)
    │
    ├── H2: "Çarpım Tablosunu Pratik Yapın"
    │   └── (No H3 - 3 preview cards)
    │
    └── H2: "Bu Platform Kimler İçin?"
        └── H3: (Implicit in each card - Students/Parents/Teachers)
```

---

## Content Flow Map

```
┌─────────────────────────────────────────────────┐
│ 1. HERO (Macro Entry Point)                    │
│    - Central Intent: Learn multiplication      │
│    - One H1 Only                               │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│ 2. DEFINITION (Macro Context)                  │
│    - What is multiplication table?             │
│    - Purpose and meaning                       │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│ 3. WHY IT MATTERS (Attribute Processing)       │
│    - Mental math                               │
│    - Speed & accuracy                          │
│    - Foundation for advanced math              │
│    - Confidence building                       │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│ 4. HOW TO LEARN (Methodology)                  │
│    - Understanding patterns                    │
│    - Repetition strategy                       │
│    - Practice approach                         │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│ 5. LEARNING PATHS (Contextual Bridge to Core)  │
│    → /multiplication-table/1-to-10             │
│    → /multiplication-table/11-to-20            │
│    → /multiplication-table/21-to-50            │
│    → /multiplication-table/51-to-100           │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│ 6. PRACTICE PREVIEW (Supplementary - Low Pri.) │
│    - Practice mode (disabled)                  │
│    - Games (disabled)                          │
│    - Exercises (disabled)                      │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│ 7. AUDIENCE (Trust & Authority Expansion)      │
│    - For Students                              │
│    → /learn-multiplication/for-parents         │
│    → /learn-multiplication/for-teachers        │
└─────────────────────────────────────────────────┘
```

---

## Styling Architecture

### Global Styles (globals.css)
```css
@layer base {
  h1 → 4xl-5xl, bold
  h2 → 3xl-4xl, bold
  h3 → 2xl-3xl, semibold
  p  → base-lg, relaxed
}

@layer components {
  .section-container → max-w-7xl, padding, margin
  .card             → bg-white, shadow, rounded, padding
  .link-card        → card + hover effects + border
}
```

### Component-Level Classes
- **Hero**: Gradient background, centered text
- **Definition**: White bg, max-w-4xl
- **WhyItMatters**: Grid layout, gradient bg
- **HowToLearn**: Numbered steps, white bg
- **LearningPaths**: Grid cards, gradient bg, hover effects
- **PracticePreview**: De-emphasized (gray), border
- **AudienceSection**: Grid layout, colored icons

---

## Color Palette Usage

### Primary Blue (Trust, Education)
- Used in: LearningPaths cards (1-10, 21-50)
- Used in: WhyItMatters card 1, 3
- Used in: Links and CTAs

### Educational Purple (Learning, Wisdom)
- Used in: LearningPaths cards (11-20, 51-100)
- Used in: WhyItMatters card 2, 4
- Used in: Parent section

### Emerald Green (Growth, Teachers)
- Used in: Teacher section
- Used in: Success signals

### Neutral Gray (Content, Disabled)
- Used in: PracticePreview (de-emphasized)
- Used in: Body text (slate-700)
- Used in: Backgrounds (gray-50, slate-50)

---

## Icon Usage Map

### WhyItMatters Section
- ⚡ Lightning → Mental Math
- ⏱️ Clock → Speed & Accuracy
- 📦 Archive → Foundation for Advanced Math
- 😊 Smile → Confidence & Motivation

### AudienceSection
- 📖 Book → For Students
- 🏠 Home → For Parents
- 🎓 Graduate Cap → For Teachers

### PracticePreview
- 📋 Clipboard → Practice Mode
- ▶️ Play → Games
- 📄 Document → Exercises

---

## Responsive Breakpoints

### Mobile (< 768px)
- Single column layout
- H1: text-4xl
- H2: text-3xl
- Cards stack vertically

### Tablet (768px - 1024px)
- 2-column grid for cards
- H1: text-4xl
- H2: text-3xl
- Increased padding

### Desktop (> 1024px)
- 3-4 column grid for cards
- H1: text-5xl
- H2: text-4xl
- Full spacing and padding

---

## SEO Element Map

### Title Tag (layout.tsx)
```
"Çarpım Tablosu – Öğren, Anla ve Pratik Yap"
```

### Meta Description (layout.tsx)
```
"Çarpım tablosunu adım adım öğrenin, anlayın ve pratik yapın. 
Öğrenciler, ebeveynler ve öğretmenler için kapsamlı çarpım 
tablosu eğitim kaynağı."
```

### H1 (Hero.tsx)
```
"Çarpım Tablosu – Öğren, Anla ve Adım Adım Pratik Yap"
```

### Internal Links (Anchor Texts)
```
"1-10 arası çarpım tablosunu öğren"
"11-20 arası çarpım tablosunu öğren"
"21-50 arası çarpım tablosunu öğren"
"51-100 arası çarpım tablosunu öğren"
"Ebeveynler için rehber"
"Öğretmenler için rehber"
```

---

## File Size & Performance

### Component Sizes (Approximate)
- Hero.tsx: ~1 KB
- DefinitionSection.tsx: ~2 KB
- WhyItMatters.tsx: ~3 KB
- HowToLearn.tsx: ~5 KB
- LearningPaths.tsx: ~4 KB
- PracticePreview.tsx: ~3 KB
- AudienceSection.tsx: ~5 KB
- page.tsx: ~2 KB

**Total Homepage**: ~25 KB (uncompressed)

### Optimization Notes
- No external images (uses SVG icons inline)
- No external fonts (system fonts)
- No heavy JavaScript libraries
- Minimal CSS (Tailwind purged in production)

---

## Accessibility Features

### Semantic HTML
- ✅ `<header>` for hero
- ✅ `<section>` for each major area
- ✅ `<article>` for card content
- ✅ `<footer>` for footer
- ✅ Proper heading hierarchy

### Interactive Elements
- ✅ Links have descriptive text
- ✅ Cards have hover states
- ✅ Focus states for keyboard navigation
- ✅ Sufficient color contrast

### Text Readability
- ✅ Large font sizes (base-lg)
- ✅ Relaxed line height
- ✅ High contrast (slate-900 on white)
- ✅ Responsive typography

---

## Component Reusability

### Reusable Patterns
1. **Card Pattern**
   - Used in: WhyItMatters, LearningPaths, AudienceSection
   - Class: `.card` or `.link-card`
   
2. **Section Container Pattern**
   - Used in: All sections
   - Class: `.section-container`
   
3. **Icon + Title + Description Pattern**
   - Used in: WhyItMatters, PracticePreview, AudienceSection
   - Structure: Icon div → Title → Description

### Non-Reusable (Unique)
- Hero (unique H1 styling)
- DefinitionSection (highlighted definition box)
- HowToLearn (numbered steps pattern)

---

This map provides a complete overview of the component architecture, making it easy to navigate, modify, and extend the project! 🎯
