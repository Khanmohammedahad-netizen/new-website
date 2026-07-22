# SEO Roadmap — MAK Software Solutions

## Phase 1 — Technical foundation ✅ (2026-07-23)
- Per-page titles, descriptions, canonicals, OG/Twitter via `Seo` component
- JSON-LD: Organization, WebSite, ProfessionalService, FAQPage, BreadcrumbList, ContactPage
- sitemap.xml + robots.txt with AI-crawler allowances
- og.png social image
- Accessibility: zoom unblocked, 404 noindex + nav
- Visible FAQ section on Home (matches FAQPage schema)

## Phase 2 — Rendering & performance (next)
1. **Prerendering / SSG** — biggest remaining lever. AI crawlers (GPTBot, ClaudeBot, PerplexityBot) don't execute JS; they currently see only static index.html + noscript. Options:
   - `vite-prerender-plugin` or puppeteer postbuild snapshot per route → emit static HTML per route to `dist/`
   - Or migrate shell to Astro/Next while keeping React components
2. Code-split three.js/GSAP off initial bundle; lazy-load `NeuralNetwork` below-fold
3. Self-host Inter (+ serif) with `font-display: swap`; subset woff2
4. Preload LCP asset; audit CLS on hero animations (GSAP opacity-from-0 can hurt LCP detection)
5. Lighthouse CI budget: perf >95, a11y 100, SEO 100

## Phase 3 — Information architecture
- `/services` hub + child pages: `/services/ai-development`, `/services/erp`, `/services/crm`, `/services/mobile-apps`, `/services/automation`, `/services/saas`
- `/industries`: healthcare, construction, restaurants, education, retail
- `/about` with founder/team (Person schema, E-E-A-T)
- `/faq` dedicated page (expand from Home FAQ)
- Update sitemap generation → script at build time instead of static file

## Phase 4 — Topical authority (content clusters)
See content-plan.md. Pillar: "AI development company"; clusters on AI agents, LLM cost, automation guides, Azure/OpenAI integration.

## Phase 5 — International
- hreflang for `/ae` (UAE), `/uk`, `/us` landing pages when localized content exists — do NOT ship thin geo-doorways
- Currency/localization only where genuinely different offers exist

## Ongoing loop
Audit (Seobility/Lighthouse/GSC) → fix → measure → repeat monthly. Track in TODO.md.
