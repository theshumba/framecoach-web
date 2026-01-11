# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server at http://localhost:3000
npm run build        # Production build to dist/
npm run preview      # Preview production build
```

## Architecture

This is a React 19 + TypeScript landing page for FrameCoach, built with Vite.

**Page Structure** (App.tsx renders in order):
- Navbar → Hero → SocialProof → FeatureGrid → Testimonials → CTA → Footer

**Key Files:**
- `index.html` - Entry point
- `index.css` - Tailwind v4 config via `@theme` directive + custom utilities
- `App.tsx` - Main component that composes all page sections
- `components/` - Individual landing page sections (Hero.tsx, FeatureGrid.tsx, etc.)
- `types.ts` - TypeScript interfaces for Feature and Testimonial

**Styling (Tailwind v4):**
- Config lives in `index.css` using `@theme` block (not tailwind.config.js)
- Brand colors: `charcoal`, `darkgrey`, `cyan`, `amber`, `lightgrey`
- Fonts: Inter (body), Plus Jakarta Sans (display)
- Custom utilities: `.glass-card`, `.accent-gradient`, `.text-glow`

**Path Alias:**
- `@/` maps to project root (configured in vite.config.ts and tsconfig.json)

## Environment

Set `GEMINI_API_KEY` in `.env.local` (exposed as `process.env.GEMINI_API_KEY`)
