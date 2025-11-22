# SIMIĆ MONTAŽA - Implementation Guide

**Purpose:** Modern one-page industrial website showcasing machinery installation services
**Target User:** Factory owners, manufacturing plants, B2B clients in Serbia
**Type:** One-pager with smooth scroll navigation
**Languages:** Serbian (primary) + English (toggle)

**Tech Stack:**
- Framework: Next.js 15 (App Router, Static Export)
- Styling: Tailwind CSS
- Animations: Framer Motion
- Icons: Lucide React
- i18n: next-intl (lightweight)
- Deployment: AWS S3 + CloudFront

**Timeline:** 2-3 sessions / 8-12 hours

---

## Design System: "Industrial Forge"

### Color Palette

```css
/* Dark industrial base */
--background: #0A0A0A;        /* Near black */
--background-alt: #111111;    /* Slightly lighter */
--surface: #1A1A1A;           /* Cards, sections */
--surface-hover: #242424;     /* Hover states */

/* Steel/metal tones */
--steel: #2A2D32;             /* Steel gray */
--steel-light: #3D4148;       /* Lighter steel */
--steel-border: #404448;      /* Borders */

/* Accent - Industrial Orange */
--accent: #FF6B00;            /* Primary accent - safety orange */
--accent-hover: #FF8533;      /* Hover state */
--accent-glow: rgba(255, 107, 0, 0.3);  /* Glow effect */

/* Secondary - Electric Blue */
--secondary: #00A8E8;         /* Technical blue */
--secondary-glow: rgba(0, 168, 232, 0.2);

/* Text */
--text-primary: #FFFFFF;
--text-secondary: #A0A0A0;
--text-muted: #666666;

/* Status */
--success: #00C853;
--warning: #FFB300;
```

### Typography

```css
/* Headings - Industrial, bold */
font-family: 'Inter', sans-serif;
h1: 56px / 700 / -0.02em (mobile: 36px)
h2: 40px / 700 / -0.01em (mobile: 28px)
h3: 24px / 600 (mobile: 20px)

/* Body */
body: 16px / 400 / 1.6 line-height
small: 14px / 400

/* Accent text */
.label: 12px / 600 / uppercase / 0.1em letter-spacing
```

### Visual Elements

**Grid Pattern Background:**
```css
/* Subtle engineering grid */
background-image:
  linear-gradient(rgba(255,107,0,0.03) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255,107,0,0.03) 1px, transparent 1px);
background-size: 50px 50px;
```

**Glow Effects:**
```css
/* Orange glow for CTAs */
box-shadow: 0 0 30px var(--accent-glow);

/* Blue glow for technical elements */
box-shadow: 0 0 20px var(--secondary-glow);
```

**Border Style:**
```css
/* Industrial border with accent */
border: 1px solid var(--steel-border);
border-left: 3px solid var(--accent);
```

**Service Icons:**
Since no photos, use Lucide icons with industrial styling:
- Cog, Settings2 (machinery)
- Wind, Fan (ventilation)
- Cpu, CircuitBoard (electronics)
- Zap, BatteryCharging (motors)
- ArrowUpDown, Maximize2 (lifters)

---

## One-Pager Sections

### Section 1: Hero
- Full viewport height
- Company name: "SIMIĆ MONTAŽA"
- Tagline: "Precizna montaža industrijske opreme"
- Animated grid background
- CTA button: "Kontaktirajte nas"
- Language toggle (SR/EN) in corner
- Scroll indicator

### Section 2: Services (Usluge)
- 5 service cards in responsive grid
- Each card: Icon + Title + Short description
- Hover: Orange glow, slight lift
- Cards have industrial left-border accent

**Services:**
1. Industrijske mašine - Industrial machinery installation
2. Ventilacija - Ventilation systems
3. Elektronika - Electronics & control systems
4. Elektro motori - Electric motors
5. Podizači stakala - Window lifter mechanisms

### Section 3: About (O nama)
- Split layout: Text left, stats right
- Company story (2-3 paragraphs)
- Key stats in boxes:
  - Years of experience
  - Completed projects
  - Satisfied clients
  - Team members

### Section 4: Why Us (Zašto mi)
- 4 key differentiators
- Icon + Title + Description
- Grid layout (2x2 on desktop, 1 column mobile)

**Points:**
1. Iskusni tim - Experienced technicians
2. Sigurnost - Safety-first approach
3. Pouzdanost - Reliable delivery
4. Prilagođena rešenja - Custom solutions

### Section 5: Contact (Kontakt)
- Split: Contact form left, Info right
- Form fields: Name, Email, Phone, Message
- Contact info with icons:
  - Address
  - Email
  - Phone numbers
- Map placeholder (can add Google Maps later)

### Footer
- Copyright
- Quick links (smooth scroll to sections)
- Social links (placeholder)

---

## Folder Structure

```
simic/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts, metadata
│   │   ├── page.tsx            # One-pager (all sections)
│   │   └── globals.css         # Tailwind + custom styles
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx      # Fixed header with nav + lang toggle
│   │   │   └── Footer.tsx      # Footer
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Hero section
│   │   │   ├── Services.tsx    # Services grid
│   │   │   ├── About.tsx       # About + stats
│   │   │   ├── WhyUs.tsx       # Differentiators
│   │   │   └── Contact.tsx     # Contact form + info
│   │   ├── ui/
│   │   │   ├── Button.tsx      # Button variants
│   │   │   ├── ServiceCard.tsx # Service card component
│   │   │   ├── StatBox.tsx     # Stat display box
│   │   │   └── Input.tsx       # Form inputs
│   │   └── effects/
│   │       └── GridBackground.tsx  # Animated grid
│   ├── lib/
│   │   ├── utils.ts            # Utility functions (cn)
│   │   └── constants.ts        # Site constants
│   ├── i18n/
│   │   ├── config.ts           # i18n configuration
│   │   ├── sr.json             # Serbian translations
│   │   └── en.json             # English translations
│   └── types/
│       └── index.ts            # TypeScript types
├── public/
│   └── favicon.ico
├── tailwind.config.ts
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## Data Structures

### translations/sr.json
```json
{
  "nav": {
    "services": "Usluge",
    "about": "O nama",
    "whyUs": "Zašto mi",
    "contact": "Kontakt"
  },
  "hero": {
    "title": "SIMIĆ MONTAŽA",
    "subtitle": "Precizna montaža industrijske opreme",
    "description": "Profesionalna instalacija industrijskih mašina, ventilacije, elektronike i specijalizovane opreme.",
    "cta": "Kontaktirajte nas"
  },
  "services": {
    "title": "Naše Usluge",
    "subtitle": "Kompletna rešenja za industrijsku montažu",
    "items": [
      {
        "title": "Industrijske Mašine",
        "description": "Montaža proizvodnih linija, CNC mašina i teške industrijske opreme sa preciznošću i sigurnošću."
      },
      {
        "title": "Ventilacija",
        "description": "Instalacija ventilacionih sistema, industrijske klimatizacije i sistema za odvod vazduha."
      },
      {
        "title": "Elektronika",
        "description": "Ugradnja kontrolnih panela, senzora i kompletne industrijske elektronike."
      },
      {
        "title": "Elektro Motori",
        "description": "Instalacija mini elektro motora, servo motora i preciznih aktuatora."
      },
      {
        "title": "Podizači Stakala",
        "description": "Montaža mehanizama za podizanje stakala - automobilski i industrijski sistemi."
      }
    ]
  },
  "about": {
    "title": "O Nama",
    "subtitle": "Vaš partner za industrijsku montažu",
    "description": "SIMIĆ MONTAŽA je specijalizovana firma za montažu industrijskih mašina i opreme. Sa dugogodišnjim iskustvom i stručnim timom, pružamo pouzdane usluge instalacije za fabrike i proizvodne pogone širom Srbije.",
    "description2": "Naš prioritet je sigurnost, preciznost i poštovanje rokova. Svaki projekat tretiramo sa istom pažnjom, bez obzira na veličinu.",
    "stats": {
      "years": "Godina iskustva",
      "projects": "Završenih projekata",
      "clients": "Zadovoljnih klijenata",
      "team": "Članova tima"
    }
  },
  "whyUs": {
    "title": "Zašto Mi",
    "subtitle": "Razlozi za saradnju",
    "items": [
      {
        "title": "Iskusni Tim",
        "description": "Naši tehničari imaju višegodišnje iskustvo u montaži najzahtevnije industrijske opreme."
      },
      {
        "title": "Sigurnost na Prvom Mestu",
        "description": "Striktno poštujemo sve bezbednosne standarde i procedure na svakom projektu."
      },
      {
        "title": "Pouzdanost",
        "description": "Poštujemo dogovorene rokove i garantujemo kvalitet svakog završenog posla."
      },
      {
        "title": "Prilagođena Rešenja",
        "description": "Svaki projekat prilagođavamo specifičnim potrebama i zahtevima klijenta."
      }
    ]
  },
  "contact": {
    "title": "Kontakt",
    "subtitle": "Javite nam se",
    "form": {
      "name": "Ime i prezime",
      "email": "Email adresa",
      "phone": "Telefon",
      "message": "Vaša poruka",
      "submit": "Pošaljite poruku"
    },
    "info": {
      "address": "Adresa",
      "addressValue": "Miloša Obilića 119, 22330 Nova Pazova",
      "email": "Email",
      "emailValue": "simicmontaza@gmail.com",
      "phone": "Telefon",
      "phoneValue1": "+381 61 634 4051",
      "phoneValue2": "+381 64 074 0869"
    }
  },
  "footer": {
    "copyright": "© 2024 SIMIĆ MONTAŽA. Sva prava zadržana.",
    "pib": "PIB: 113690643"
  }
}
```

### translations/en.json
```json
{
  "nav": {
    "services": "Services",
    "about": "About",
    "whyUs": "Why Us",
    "contact": "Contact"
  },
  "hero": {
    "title": "SIMIĆ MONTAŽA",
    "subtitle": "Precision Industrial Equipment Installation",
    "description": "Professional installation of industrial machinery, ventilation, electronics, and specialized equipment.",
    "cta": "Contact Us"
  },
  "services": {
    "title": "Our Services",
    "subtitle": "Complete industrial assembly solutions",
    "items": [
      {
        "title": "Industrial Machinery",
        "description": "Installation of production lines, CNC machines, and heavy industrial equipment with precision and safety."
      },
      {
        "title": "Ventilation",
        "description": "Installation of ventilation systems, industrial HVAC, and air exhaust systems."
      },
      {
        "title": "Electronics",
        "description": "Installation of control panels, sensors, and complete industrial electronics."
      },
      {
        "title": "Electric Motors",
        "description": "Installation of mini electric motors, servo motors, and precision actuators."
      },
      {
        "title": "Window Lifters",
        "description": "Installation of window lifting mechanisms - automotive and industrial systems."
      }
    ]
  },
  "about": {
    "title": "About Us",
    "subtitle": "Your partner for industrial installation",
    "description": "SIMIĆ MONTAŽA is a specialized company for industrial machinery and equipment installation. With years of experience and an expert team, we provide reliable installation services for factories and manufacturing plants throughout Serbia.",
    "description2": "Our priority is safety, precision, and meeting deadlines. We treat every project with the same attention, regardless of size.",
    "stats": {
      "years": "Years of Experience",
      "projects": "Completed Projects",
      "clients": "Satisfied Clients",
      "team": "Team Members"
    }
  },
  "whyUs": {
    "title": "Why Us",
    "subtitle": "Reasons to work with us",
    "items": [
      {
        "title": "Experienced Team",
        "description": "Our technicians have years of experience installing the most demanding industrial equipment."
      },
      {
        "title": "Safety First",
        "description": "We strictly follow all safety standards and procedures on every project."
      },
      {
        "title": "Reliability",
        "description": "We respect agreed deadlines and guarantee the quality of every completed job."
      },
      {
        "title": "Custom Solutions",
        "description": "We adapt every project to the specific needs and requirements of the client."
      }
    ]
  },
  "contact": {
    "title": "Contact",
    "subtitle": "Get in touch",
    "form": {
      "name": "Full Name",
      "email": "Email Address",
      "phone": "Phone",
      "message": "Your Message",
      "submit": "Send Message"
    },
    "info": {
      "address": "Address",
      "addressValue": "Miloša Obilića 119, 22330 Nova Pazova, Serbia",
      "email": "Email",
      "emailValue": "simicmontaza@gmail.com",
      "phone": "Phone",
      "phoneValue1": "+381 61 634 4051",
      "phoneValue2": "+381 64 074 0869"
    }
  },
  "footer": {
    "copyright": "© 2024 SIMIĆ MONTAŽA. All rights reserved.",
    "pib": "Tax ID: 113690643"
  }
}
```

### Service Icons Mapping
```typescript
// src/lib/constants.ts
import { Cog, Wind, Cpu, Zap, ArrowUpDown } from 'lucide-react';

export const serviceIcons = {
  machinery: Cog,
  ventilation: Wind,
  electronics: Cpu,
  motors: Zap,
  lifters: ArrowUpDown,
};

export const stats = {
  years: 10,      // Update with real data
  projects: 150,  // Update with real data
  clients: 80,    // Update with real data
  team: 12,       // Update with real data
};
```

---

## Tailwind Configuration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        'background-alt': '#111111',
        surface: '#1A1A1A',
        'surface-hover': '#242424',
        steel: '#2A2D32',
        'steel-light': '#3D4148',
        'steel-border': '#404448',
        accent: '#FF6B00',
        'accent-hover': '#FF8533',
        secondary: '#00A8E8',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A0A0A0',
        'text-muted': '#666666',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 107, 0, 0.5)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## Component Specifications

### Header Component
**File:** `src/components/layout/Header.tsx`

```typescript
interface HeaderProps {
  currentLang: 'sr' | 'en';
  onLangChange: (lang: 'sr' | 'en') => void;
}
```

**Features:**
- Fixed position, transparent initially, solid on scroll
- Logo/company name left
- Nav links center (smooth scroll to sections)
- Language toggle right (SR | EN)
- Mobile: Hamburger menu

**Styling:**
- Background: transparent → rgba(10,10,10,0.95) on scroll
- Backdrop blur when scrolled
- Height: 72px desktop, 64px mobile

### Hero Section
**File:** `src/components/sections/Hero.tsx`

**Features:**
- Full viewport height (100vh)
- Animated grid background (subtle)
- Company name with letter spacing
- Tagline with fade-in animation
- CTA button with glow effect
- Scroll indicator (animated chevron)

**Animations:**
- Title: Fade in + slide up (0.6s delay)
- Subtitle: Fade in + slide up (0.8s delay)
- CTA: Fade in (1s delay) + glow pulse

### ServiceCard Component
**File:** `src/components/ui/ServiceCard.tsx`

```typescript
interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number; // For stagger animation
}
```

**Styling:**
- Background: surface (#1A1A1A)
- Border: 1px steel-border, 3px left accent
- Padding: 24px
- Border-radius: 8px
- Hover: Lift (translateY -4px), orange glow, surface-hover bg

### Contact Form
**File:** `src/components/sections/Contact.tsx`

**Fields:**
- Name (required)
- Email (required, validated)
- Phone (optional)
- Message (required, textarea)

**Submission:**
- For now: mailto: link or console.log
- Future: EmailJS integration or API endpoint

**Styling:**
- Inputs: dark background, steel border, accent focus
- Submit button: accent background, glow on hover

---

## Implementation Phases

### Phase 1: Foundation + Layout (Session 1)
**Time:** 3-4 hours
**Lines:** 1-500

**Tasks:**
1. Initialize Next.js 15 with TypeScript
   ```bash
   npx create-next-app@latest simic-website --typescript --tailwind --app --eslint
   ```
2. Configure Tailwind with custom theme (colors, animations)
3. Set up folder structure
4. Create globals.css with grid background pattern
5. Create Header component (fixed, with scroll detection)
6. Create Footer component
7. Set up basic page.tsx with section placeholders
8. Implement smooth scroll navigation

**Deliverables:**
- [ ] Dev server runs without errors
- [ ] Header with nav links (scroll to sections)
- [ ] Dark theme applied
- [ ] Grid background visible
- [ ] Footer with contact info

### Phase 2: Sections + Components (Session 2)
**Time:** 4-5 hours
**Lines:** 501-1100

**Tasks:**
1. Create Hero section with animations
2. Create ServiceCard component
3. Create Services section (5 cards grid)
4. Create StatBox component
5. Create About section (text + stats)
6. Create WhyUs section (4 differentiators)
7. Add Framer Motion animations (fade-in on scroll)

**Deliverables:**
- [ ] All 5 sections visible and styled
- [ ] Service cards with hover effects
- [ ] Stats displaying (placeholder numbers)
- [ ] Scroll animations working
- [ ] Mobile responsive

### Phase 3: i18n + Contact + Polish (Session 3)
**Time:** 3-4 hours
**Lines:** 1101-1500

**Tasks:**
1. Set up i18n (next-intl or simple context)
2. Create translation files (sr.json, en.json)
3. Add language toggle to Header
4. Create Contact form with validation
5. Style form inputs
6. Add form submission (mailto: initially)
7. Final responsive tweaks
8. SEO metadata
9. Test all sections

**Deliverables:**
- [ ] Language toggle works (SR/EN)
- [ ] All text translates correctly
- [ ] Contact form functional
- [ ] Form validation working
- [ ] Mobile fully responsive
- [ ] SEO meta tags added

### Phase 4: Deployment (Session 4 - Optional)
**Time:** 2 hours

**Tasks:**
1. Build static export
2. Create S3 bucket
3. Create CloudFront distribution
4. Set up GitHub Actions CI/CD
5. Test live deployment

**Deliverables:**
- [ ] Live URL on CloudFront
- [ ] CI/CD pipeline working

---

## Session Prompts

### Session 1 Prompt
```
Build SIMIĆ MONTAŽA website - Phase 1: Foundation

Create a Next.js 15 industrial one-page website.

**Design:** Dark industrial theme
- Background: #0A0A0A with subtle grid pattern
- Accent: #FF6B00 (industrial orange)
- Secondary: #00A8E8 (electric blue)

**Tasks:**
1. Initialize Next.js 15 + TypeScript + Tailwind
2. Configure tailwind.config.ts with custom colors and animations
3. Create folder structure (components/layout, components/sections, components/ui, lib)
4. Create globals.css with grid background pattern
5. Create Header.tsx - fixed, transparent→solid on scroll, nav links for smooth scroll
6. Create Footer.tsx - copyright, contact info
7. Create page.tsx with placeholder sections (Hero, Services, About, WhyUs, Contact)
8. Implement smooth scroll to sections

**Reference:** IMPLEMENTATION-GUIDE.md lines 1-500

**Deliverables:**
- Dev server at localhost:3000
- Header with navigation
- Dark theme with grid background
- Footer visible
- Smooth scroll working
```

### Session 2 Prompt
```
Build SIMIĆ MONTAŽA website - Phase 2: Sections

Continue building the one-page industrial website.

**Tasks:**
1. Create Hero.tsx - full height, title "SIMIĆ MONTAŽA", tagline, CTA button, scroll indicator
2. Create ServiceCard.tsx - icon, title, description, hover glow effect
3. Create Services.tsx - 5 service cards in responsive grid
4. Create StatBox.tsx - number + label with animation
5. Create About.tsx - company description + 4 stat boxes
6. Create WhyUs.tsx - 4 differentiator cards (2x2 grid)
7. Add Framer Motion for scroll animations (fade-in, slide-up)

**Icons (Lucide):** Cog, Wind, Cpu, Zap, ArrowUpDown

**Reference:** IMPLEMENTATION-GUIDE.md lines 501-1100

**Deliverables:**
- All sections styled and visible
- Service cards with orange glow hover
- Stats animating on scroll
- Mobile responsive
```

### Session 3 Prompt
```
Build SIMIĆ MONTAŽA website - Phase 3: i18n + Contact

Add bilingual support and contact form.

**Tasks:**
1. Create simple i18n context (no external library needed for one-pager)
2. Create translations: sr.json and en.json (full content provided in guide)
3. Add language toggle to Header (SR | EN buttons)
4. Create Contact.tsx - split layout: form left, info right
5. Create Input.tsx - styled form input component
6. Form fields: name, email, phone, message
7. Form validation (required fields, email format)
8. Form submission: mailto: link or console.log for now
9. Add SEO metadata to layout.tsx
10. Final mobile responsive fixes

**Reference:** IMPLEMENTATION-GUIDE.md lines 1101-1500

**Deliverables:**
- Language toggle works
- All content translates SR↔EN
- Contact form with validation
- Form submits (mailto: or logs)
- SEO meta tags
- Fully responsive
```

---

## Quality Checklist

### Performance
- [ ] Lighthouse score 90+
- [ ] Images optimized (when added)
- [ ] No layout shift
- [ ] Fast load time (<2s)

### Accessibility
- [ ] Semantic HTML
- [ ] ARIA labels on interactive elements
- [ ] Keyboard navigation works
- [ ] Color contrast 4.5:1+
- [ ] Focus indicators visible

### SEO
- [ ] Title tag
- [ ] Meta description
- [ ] Open Graph tags
- [ ] Canonical URL
- [ ] robots.txt

### Responsiveness
- [ ] Mobile (375px)
- [ ] Tablet (768px)
- [ ] Desktop (1024px+)
- [ ] Large screens (1440px+)

---

## AWS Deployment (Phase 4)

**Resources to create:**
- S3 bucket: `simic-montaza-website`
- CloudFront distribution
- OAC for secure S3 access
- GitHub Actions workflow

**Estimated cost:** $0 (Free Tier)

**CI/CD workflow:** Same pattern as other portfolios - build, sync to S3, invalidate CloudFront cache.

---

## 📊 Session Prompt Line Counts

**Total Guide Length:** ~1,500 lines
**Estimated Total Tokens:** ~22,500 tokens

### Recommended Session Split

**Session 1: Foundation + Layout**
- **Lines to copy:** 1-500
- **Estimated tokens:** ~7,500 tokens
- **Risk level:** ✅ Safe
- **Implementation time:** 3-4 hours

**Session 2: Sections + Components**
- **Lines to copy:** 501-1100
- **Estimated tokens:** ~9,000 tokens
- **Risk level:** ✅ Safe
- **Implementation time:** 4-5 hours

**Session 3: i18n + Contact + Polish**
- **Lines to copy:** 1101-1500
- **Estimated tokens:** ~6,000 tokens
- **Risk level:** ✅ Safe
- **Implementation time:** 3-4 hours

**Session 4: Deployment (Optional)**
- **Reference:** AWS deployment pattern from other projects
- **Implementation time:** 2 hours

### How to Use

1. Open guide: `/home/novak/projects/simic/IMPLEMENTATION-GUIDE.md`
2. Copy session prompt from "Session Prompts" section
3. Paste into claude.ai console
4. Build, test, commit
5. Move to next session

---

## Notes

- **No photos:** Using Lucide icons + industrial styling compensates well
- **Future enhancements:** Add Google Maps, photo gallery when images available
- **Contact form:** Can upgrade to EmailJS or API later
- **Domain:** Add custom domain when ready (Route 53 + ACM SSL)
