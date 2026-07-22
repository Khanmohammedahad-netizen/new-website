# Completed

## 2026-07-23 — Phase 4: Topical authority (content clusters)
- `/insights` hub + 4 cornerstone articles (~7 kB text each), all prerendered:
  - What are AI agents? A business owner's guide
  - The LLM cost guide (OpenAI vs Claude vs Gemini vs open models)
  - Custom ERP vs off-the-shelf: the real cost comparison
  - How to automate B2B lead generation with AI
- Every article: Article schema with author Person → /about (E-E-A-T),
  publisher → Organization @id, dates, FAQ block with FAQPage schema,
  cluster interlinks (article ↔ service pillar ↔ case study), CTA
- Content grounded in shipped projects (MAK OS, LeadMine, 7STAR) — original
  insight, no AI-filler patterns
- Navbar + footer Insights links; sitemap/prerender/smoke → 21 routes

## 2026-07-23 — Phase 3: Information architecture & trust
- 6 service pages (`/services/{ai-development,erp,crm,mobile-apps,automation,saas}`)
  with unique long-form copy: problem/approach, deliverables, tech stack,
  service-specific FAQs (FAQPage schema), linked case studies, related services
- `/services` hub page
- `/about` — founder-led studio story, principles, timeline; Person +
  AboutPage schema (E-E-A-T anchor)
- Service schema JSON-LD on every service page (provider → Organization @id)
- Navbar: Services / Work / About / Contact; Footer: full services column
- Home service cards now link to service pages (9 cards → 6 targets)
- Case studies: prev/next navigation + CTA footer on all 5 (no more dead ends)
- Sitemap, prerender, and smoke-test route lists → 16 routes
- Verified: 16/16 SSR-render with title, canonical, JSON-LD; service pages
  ~5 kB text each

## 2026-07-23 — Phase 2: Prerendering
- SSR entry (`src/entry-server.tsx`) + post-build prerender script for all 8 routes
- Every route now serves full static HTML: title, meta description, canonical,
  OG/Twitter, JSON-LD, and complete page text — visible to non-JS AI crawlers
  (GPTBot, ClaudeBot, PerplexityBot) and social scrapers
- **Fixed critical bug: deep routes (/work, /work/*, /contact) returned 404 on
  direct load** — sitemap URLs were uncrawlable; now all 200
- spa.html fallback + Vercel rewrite for unknown routes (noindex 404 UI)
- SSR-safe theme provider (localStorage guard)
- Verified live: 8/8 routes 200 with prerendered content; homepage raw HTML
  carries ~10 kB text incl. FAQPage/ProfessionalService schema; smoke test
  script for local regression checks (scripts/smoke-ssr.ts)

## 2026-07-23 — Phase 1: Technical foundation
- Built `src/components/Seo.tsx` (title/description/canonical/OG/Twitter/JSON-LD/breadcrumbs, noindex flag)
- Unique titles + meta descriptions + canonicals on all 8 routes
- BreadcrumbList JSON-LD on Work, Contact, and all 5 case studies
- Organization + WebSite JSON-LD in index.html (sitewide, static — visible to non-JS crawlers)
- ProfessionalService + ContactPoint + FAQPage JSON-LD on Home
- ContactPage JSON-LD on Contact
- Visible FAQ section on Home (5 Q&As matching schema exactly — no schema-only content)
- public/sitemap.xml (8 URLs) + robots.txt with Sitemap directive and explicit AI-crawler allows
- Generated brand og.png (1200×630); wired og:image/twitter:image sitewide
- Removed `maximum-scale=1` (accessibility)
- 404: noindex + title + internal links to /, /work, /contact
- noscript fallback content in index.html for non-JS crawlers
- Simplified Home H1 markup; added CTA section with internal links (earlier commit)
- Third Place case study: external link to live site the3rdplace.com
