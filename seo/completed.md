# Completed

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
