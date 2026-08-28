# Administrative Toolkit Training

A premium educational campaign website for CFI Ideation's Administrative Toolkit Training program, built with Next.js 16, TypeScript, and Framer Motion.

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Framer Motion** — scroll-driven animations, hover effects, accordion transitions
- **Lenis** — smooth scrolling
- **Plain CSS** (no Tailwind) — CSS variables and modular stylesheet
- **Google Fonts** — Playfair Display (serif display), Inter (geometric sans body)

## Design System

| Token | Value |
|-------|-------|
| Primary Blue | `#0D53B2` |
| Dark Blue | `#0A4696` |
| White | `#FFFFFF` |
| Dark Text | `#111111` |
| Soft Background | `#F7F8FA` |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with LenisProvider + fonts
│   ├── page.tsx          # Assembles all 9 sections
│   └── globals.css       # Reset + design tokens
├── components/
│   ├── LenisProvider.tsx  # Smooth scroll wrapper
│   └── administrative-toolkit/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── ToolsIntro.tsx
│       ├── Courses.tsx
│       ├── CourseCard.tsx
│       ├── TrainingJourney.tsx
│       ├── Benefits.tsx
│       ├── RegistrationCTA.tsx
│       ├── FAQ.tsx
│       ├── Footer.tsx
│       └── animations/
├── data/
│   └── courses.ts        # 9 courses (data-driven)
├── lib/
│   ├── config.ts         # REGISTRATION_URL + dates
│   └── easing.ts         # Easing constants
└── styles/
    └── admin-toolkit.css  # All component styles
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

```bash
npm run build
npm run lint
npx tsc --noEmit
```

## Configuration

Replace `YOUR_GOOGLE_FORM_URL` in `src/lib/config.ts` with the actual Google Form URL for registration.

## Animation Hierarchy

1. **Hero** — strongest entrance animation
2. **Section headings** — scroll reveals
3. **Course cards** — stagger + image zoom + hover
4. **Timeline** — scroll-driven progress line
5. **CTA buttons** — breathing glow + hover
6. **FAQ** — accordion expansion
