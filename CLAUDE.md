# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Overview

**Engenharia de Contexto** - Landing page for an AI/LLM course built with React 18, Vite, TypeScript, and Tailwind CSS. This is a single-page application (SPA) focused on conversion optimization with 13 sections following a classic landing page funnel structure.

---

## Development Commands

### Core Commands
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
```

### Testing & Analysis
```bash
node playwright-ux-analysis.js  # Run UX/UI analysis with Playwright
                                # Captures 56 screenshots across 4 devices
                                # Generates reports in analysis-output/
```

---

## Architecture & Key Concepts

### Component Structure & Flow

The application follows a **strict single-page landing page architecture** with a fixed component order optimized for conversion:

```
Index.tsx (page controller)
  ├─ PromoBanner      (sticky top banner - R$ 97 offer)
  ├─ NavBar           (sticky navigation with anchor links)
  ├─ Header           (hero section - value proposition)
  ├─ Problem          (pain points - Monday vs Thursday story)
  ├─ Insight          (technical differentiation - AI comparison)
  ├─ Solution         (product introduction)
  ├─ Features         (4 modules - course structure, 29 aulas total)
  ├─ Benefits         (3 differentials + before/after transformation)
  ├─ Target           (qualification - who is/isn't this for)
  ├─ Pricing          (investment section - R$ 97 promo)
  ├─ FAQ              (objections handling)
  ├─ CallToAction     (final CTA - option 1 vs option 2)
  └─ Footer           (links, social, legal)
```

**IMPORTANT**: This order is deliberate and follows conversion optimization best practices. Do not reorder sections without explicit permission.

### Design System & Branding

#### Brand Colors (defined in tailwind.config.ts)
- **tangerine** `#D45E0A` - Primary color for CTAs, highlights, icons
- **night** `#141312` - Strong text, footer backgrounds
- **seasalt** `#FAF9F7` - Main page background
- **viridian** `#664869` - Accents, gradients (used sparingly)
- **platinum** `#E9E5DE` - Secondary backgrounds

#### Typography
- **Font**: Plus Jakarta Sans (Google Fonts)
- **Weights**: 400, 500, 600, 700
- **Classes**: Use `font-jakarta` (default set on body)

#### Custom Tailwind Classes (src/index.css)
- `.section-container` - Standard section wrapper (max-w-7xl, responsive padding)
- `.feature-card` - Card component with hover effects
- `.neo-button` - Primary CTA button style (tangerine background)
- `.tag` - Badge/label component
- `.section-title` - H2 heading (4xl-5xl responsive)
- `.glass-card` - Glassmorphism effect card

#### Animation System
All sections use **staggered fade-up animations** with `animationDelay` and `animationFillMode: 'forwards'`:
- Delays: 100ms, 300ms, 500ms, 700ms, 900ms, etc. (increment by 200ms)
- Duration: 0.6s
- **Do not change animation timing without reviewing UX analysis report** (analysis-output/agent-08-performance-analysis.md)

### Responsive Breakpoints
```
sm:  640px  (mobile landscape)
md:  768px  (tablet)
lg:  1024px (desktop)
xl:  1280px (large desktop)
2xl: 1400px (max container width)
```

### State Management & Routing

- **TanStack Query**: Configured but currently unused (QueryClient set up for future API calls)
- **React Router**: Single route (`/`) - do not add additional routes without discussing
- **Local State**: Components use React hooks (useState, useEffect)
- **UTM Tracking**: Handled by `useUTMs()` hook in `src/lib/utm-utils.ts`

### UTM Tracking & External Links

**CRITICAL**: All external CTAs must use `getLastLinkWithUTMs()`:

```tsx
import { useUTMs } from '@/lib/utm-utils'

const Component = () => {
  const { getLastLinkWithUTMs } = useUTMs()

  return (
    <a href={getLastLinkWithUTMs()} target="_blank" rel="noopener noreferrer">
      CTA Text
    </a>
  )
}
```

- UTMs are captured from URL query params
- Persisted in localStorage
- Automatically appended to checkout URL
- **CHECKOUT_URL** placeholder is in `src/lib/utm-utils.ts` - update before production

---

## Component Conventions

### Icons
- Use **Lucide React** only (already installed)
- Import individually: `import { Icon } from 'lucide-react'`
- **NO EMOJIS** - Replace with Lucide icons
- Apply `flex-shrink-0` to prevent misalignment in flexbox
- Add `aria-hidden="true"` for decorative icons

### Buttons (shadcn/ui)
Two variants defined in `src/components/ui/button.tsx`:
- `variant="cta"` - Primary tangerine button (main CTAs)
- `variant="outline"` - Secondary outline button (less prominent actions)

### Anchor Links
All navigation uses hash anchor links:
- `#problema`, `#solucao`, `#modulos`, `#diferenciais`, `#investimento`, `#faq`
- Smooth scroll enabled globally in `src/index.css`
- **NOTE**: Missing `scroll-padding-top` offset for sticky nav (see UX analysis)

---

## Copy & Content Guidelines

### "Simplicidade Radical" Principle (v3.0)
The landing page follows a simplified copywriting approach:
- **Remove technical jargon**: No "MCP", "Claude", "ChatGPT" in most contexts
- **Benefit FIRST, tool second**: "IA Conectada (Suas Ferramentas)" not "MCP"
- **Use simple language**: "criança de 12 anos deve entender"
- Examples of transformations:
  - ❌ "MCP (Model Context Protocol)" → ✅ "IA Conectada"
  - ❌ "200k tokens" → ✅ "conversas de DIAS"
  - ❌ "Make automation" → ✅ "IA Automática"

### Course Details
- **4 modules**, **29 lessons total** (not 34 - Module 0 was removed)
- **Duration**: 2-3 hours
- **Price**: R$ 97 (promotional), original R$ 297
- **Savings**: R$ 200

---

## Critical Configuration Placeholders

Before deploying to production, update these placeholders:

1. **Checkout URL**: `/src/lib/utm-utils.ts` line 3
   ```typescript
   const CHECKOUT_URL = '#checkout' // ⚠️ Replace with real URL
   ```

2. **Facebook Pixel**: `/index.html`
   ```javascript
   // fbq('init', 'SEU_PIXEL_ID'); // Uncomment and replace
   ```

3. **Google Analytics**: `/index.html`
   ```javascript
   // gtag('config', 'G-XXXXXXXXXX'); // Uncomment and replace
   ```

4. **Meta Tags**: `/index.html`
   - Update `og:url`, `og:image`, `twitter:image` with production URLs

---

## UX/UI Analysis Reports

A comprehensive UX/UI analysis was conducted using Playwright with 10 specialized agents. Reports are in `analysis-output/`:

- **Main Report**: `analise-ux-ui-landing-page.md` (consolidated executive summary)
- **Individual Reports**: `agent-01-*.md` through `agent-10-*.md`
- **Screenshots**: `{desktop,tablet,mobile,mobile-large}/` folders (56 total)
- **Metrics**: `metrics.json` (performance data)

### Key Findings Summary (Score: 73/100)
- ✅ **Strengths**: Strong conversion flow, good mobile responsiveness, fast load times
- 🔴 **Critical Issues**:
  - Accessibility (52/100) - not WCAG 2.1 compliant
  - Touch targets below 44px minimum
  - Animation overload (1.9s delays)
  - CSS override forcing mobile headings to 20px

**Before implementing major UX changes, review the relevant agent report.**

---

## Common Pitfalls & Known Issues

### 1. Intersection Observer Not Implemented
The code in `Index.tsx` includes an IntersectionObserver that looks for `.animate-on-scroll` class, but **no components use this class**. All animations trigger on page load with `animationDelay` instead.

**Options**:
- Remove the observer code (dead code)
- Or implement it properly by adding `.animate-on-scroll` to components

### 2. Mobile Typography Override
`src/index.css` lines 128-138 has a media query that forces all h1/h2/h3 to 20px on mobile, **overriding Tailwind's responsive classes**.

**This is considered a bug** (see UX analysis agent-07). Consider removing or making more nuanced.

### 3. Missing Scroll Padding
Sticky navbar (64px) + promo banner (40px) cover content when using anchor links. Add to `src/index.css`:
```css
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* or 104px to account for both */
}
```

### 4. Accessibility Issues
The site is **not WCAG 2.1 compliant**. Major issues:
- No semantic HTML structure (`<header>`, `<main>`, `<footer>` missing)
- No skip links for keyboard navigation
- 40+ icons without `aria-hidden="true"` or `aria-label`
- Icon-only buttons without accessible labels

See `analysis-output/agent-10-accessibility-analysis.md` for full audit.

---

## shadcn/ui Components

The project uses shadcn/ui (Radix UI primitives). Currently installed:
- `Accordion` - Used in FAQ section
- `Button` - Primary CTA component
- `Dialog` - Installed but unused

**Adding new shadcn components**:
```bash
npx shadcn-ui@latest add [component-name]
```

Components are in `src/components/ui/` and are NOT to be edited directly (regenerate using CLI instead).

---

## Performance Considerations

- **Load time**: ~211ms average (excellent)
- **Bundle size**: 304 KB (CSS: 24 KB, JS: 281 KB)
- **Tailwind purge**: Working correctly
- **Lazy loading**: Not implemented (could reduce initial bundle by ~35%)
- **Animation delays**: Consider reducing from 1.9s max to 0.8s max for better UX

See `analysis-output/agent-08-performance-analysis.md` for detailed metrics.

---

## Git Workflow

This project is not currently a git repository (check `/init` command output). Consider initializing git for version control:

```bash
git init
git add .
git commit -m "Initial commit - Landing page v3.0"
```

---

## Deployment

Build outputs to `dist/` folder. Compatible with:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting

**Pre-deployment checklist**:
1. ✅ Update CHECKOUT_URL in utm-utils.ts
2. ✅ Configure Facebook Pixel
3. ✅ Configure Google Analytics
4. ✅ Update meta tags (og:url, og:image)
5. ✅ Create favicon (currently using placeholder)
6. ✅ Generate OpenGraph image (1200x630px)
7. ✅ Review UX analysis critical issues (especially accessibility)

---

## Contact & Attribution

- **Email**: contato@caioia.com
- **YouTube**: @caiointeligenciaartificial
- **Instagram**: @caiointeligenciaartificial
- **Version**: 1.0 (v3.0 copy)
- **Created**: October 2024
