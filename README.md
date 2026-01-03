# Çarpım Tablosu (Multiplication Table) - carpimtablosu.com.tr

A comprehensive, semantically optimized educational platform for learning multiplication tables, built following the **Koray Tuğberk Gübür Semantic SEO Framework** and **Topical Authority** principles.

## 🎯 Project Overview

This is a Next.js-based educational website designed to help students learn, understand, and practice multiplication tables through a structured, semantic approach.

### Key Principles

- ✅ **Semantic SEO Compliance**: Macro → Core → Supplementary content flow
- ✅ **Topical Authority**: Comprehensive coverage of multiplication table concepts
- ✅ **Educational First**: Focus on understanding before practice
- ✅ **One H1 Rule**: Strict heading hierarchy
- ✅ **Context-Based Navigation**: No direct links to individual number pages from homepage

## 🏗️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **SEO**: Semantic HTML5 with proper heading hierarchy

## 📁 Project Structure

```
tables/
├── app/
│   ├── components/
│   │   ├── Hero.tsx                    # H1 + Hero section
│   │   ├── DefinitionSection.tsx       # Macro context (What is it?)
│   │   ├── WhyItMatters.tsx            # Attribute processing (Why?)
│   │   ├── HowToLearn.tsx              # Methodology (How?)
│   │   ├── LearningPaths.tsx           # Contextual bridge to core pages
│   │   ├── PracticePreview.tsx         # Supplementary content
│   │   └── AudienceSection.tsx         # Trust signals
│   ├── multiplication-table/
│   │   ├── 1-to-10/                    # Core learning page
│   │   ├── 11-to-20/                   # Core learning page
│   │   ├── 21-to-50/                   # Core learning page
│   │   └── 51-to-100/                  # Core learning page
│   ├── learn-multiplication/
│   │   ├── for-parents/                # Audience expansion
│   │   └── for-teachers/               # Audience expansion
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run the development server**:
```bash
npm run dev
```

3. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📄 Homepage Structure

The homepage follows a strict semantic hierarchy:

1. **Hero Section** (H1: Only one)
   - Çarpım Tablosu – Öğren, Anla ve Adım Adım Pratik Yap

2. **Definition Section** (H2)
   - What is a multiplication table?

3. **Importance Section** (H2)
   - Why is it important?
   - 4 key benefits with cards

4. **Learning Methodology** (H2)
   - How to learn effectively
   - 3 H3 subsections

5. **Learning Paths** (H2)
   - Links to core pages (1-10, 11-20, 21-50, 51-100)
   - Contextual bridge with semantic anchor texts

6. **Practice Preview** (H2)
   - Supplementary content
   - De-emphasized visually

7. **Audience Section** (H2)
   - For students, parents, and teachers
   - Trust signals and authority expansion

## 🎨 Design Principles

### Colors
- **Primary**: Blue tones (educational, trustworthy)
- **Educational**: Purple tones (learning, wisdom)
- **Calm palette**: Focus on readability and accessibility

### Typography
- **H1**: 4xl-5xl, bold
- **H2**: 3xl-4xl, bold
- **H3**: 2xl-3xl, semibold
- **Body**: base-lg, relaxed line height

### Layout
- **Max-width**: 7xl for containers
- **Spacing**: 16-24 (py) for sections
- **Responsive**: Mobile-first approach

## 🔍 SEO Compliance

### Semantic Structure
- ✅ One H1 per page
- ✅ Logical heading hierarchy (H1 → H2 → H3)
- ✅ Semantic HTML5 elements (section, article, header, footer)
- ✅ Descriptive anchor texts for internal links
- ✅ No keyword stuffing

### Content Flow
1. **Macro Context**: Definition and general understanding
2. **Core Content**: Detailed learning paths
3. **Supplementary**: Practice and games (de-emphasized)

### Internal Linking
- Links use descriptive, semantic anchor texts
- No direct links to individual number pages from homepage
- Links to range pages (1-10, 11-20, etc.)
- Contextual links to audience-specific pages

## 📝 Content Guidelines

### Writing Style
- **Clear and Educational**: Written for students, parents, and teachers
- **Natural Language**: No keyword stuffing
- **Age-Appropriate**: Suitable for primary and middle school students
- **Explanatory**: Focus on "why" and "how", not just "what"

### Hierarchy Rules
- Explanations come before practice
- Understanding before memorization
- Patterns and logic over rote learning

## 🛠️ Development

### Adding New Components
All components follow the same pattern:
```typescript
export default function ComponentName() {
  return (
    <section className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-slate-900 mb-8">Title</h2>
        {/* Content */}
      </div>
    </section>
  )
}
```

### Styling Utilities
Custom Tailwind utilities in `globals.css`:
- `.section-container`: Standard section padding and max-width
- `.card`: Basic card styling
- `.link-card`: Interactive card with hover effects

## 📊 Future Enhancements

- [ ] Individual number pages (1-100)
- [ ] Interactive practice mode
- [ ] Educational games
- [ ] Progress tracking
- [ ] Printable worksheets
- [ ] Audio pronunciation (Turkish)
- [ ] Visual multiplication representations

## 🌍 Localization

Currently in Turkish (`tr-TR`), designed for the Turkish market (carpimtablosu.com.tr).

## 📜 License

All rights reserved © 2026 carpimtablosu.com.tr

## 🤝 Contributing

This project follows strict semantic SEO guidelines. Any contributions must:
- Maintain heading hierarchy
- Follow content flow principles
- Preserve semantic structure
- Ensure educational value

---

**Built with Semantic SEO & Topical Authority principles**
**Designed for long-term ranking stability and educational excellence**
