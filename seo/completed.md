# Completed

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
