# Technical SEO Audit - maksoftwaresolutions.com

**Date:** 2026-07-23
**Stack:** Vite + React SPA (wouter router, react-helmet-async), deployed on Vercel.
**Canonical host:** `https://www.maksoftwaresolutions.com` (apex 307-redirects to www).

## Pages inventoried

| Route | Component | Status |
|---|---|---|
| `/` | `pages/Home.tsx` | 200, indexable |
| `/work` | `pages/Work.tsx` | 200, indexable |
| `/work/third-place` | `pages/work/ThirdPlace.tsx` | 200, indexable |
| `/work/mak-os` | `pages/work/MakOs.tsx` | 200, indexable |
| `/work/7star-erp` | `pages/work/SevenStarErp.tsx` | 200, indexable |
| `/work/leadmine-ai` | `pages/work/LeadmineAi.tsx` | 200, indexable |
| `/work/saas-ecosystem` | `pages/work/SaasEcosystem.tsx` | 200, indexable |
| `/contact` | `pages/Contact.tsx` | 200, indexable |
| `*` (404) | `pages/not-found.tsx` | SPA 404 - served 200 (SPA rewrite) |

## Findings (pre-fix)

### Critical
1. **No per-page meta descriptions** - every non-home page set only `<title>`. FIXED.
2. **No canonicals anywhere** - SPA + www/apex duality risks duplicate indexing. FIXED (per-page canonical via `Seo` component).
3. **No sitemap.xml** - crawlers had no route discovery beyond links. FIXED.
4. **No structured data** - zero JSON-LD. FIXED (Organization, WebSite, ProfessionalService, ContactPoint, FAQPage, BreadcrumbList, ContactPage).
5. **Empty HTML for non-JS crawlers** (word count 0 in Seobility) - SPA renders client-side only. PARTIALLY MITIGATED (noscript content block, rich meta, JSON-LD in static index.html). Real fix = prerendering/SSG - see roadmap.
6. **No og:image** - link shares rendered blank. FIXED (generated brand og.png 1200×630).

### High
7. **`maximum-scale=1` in viewport** - blocks pinch zoom, WCAG failure. FIXED.
8. **404 page indexable** with no navigation. FIXED (noindex + internal links).
9. **robots.txt minimal** - no Sitemap directive, no AI-crawler policy. FIXED (explicit allows for GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot).
10. **Duplicate OG/Twitter tags** risk: static index.html tags + Helmet page tags. ACCEPTED for now (Helmet-injected tags appear later in head; most scrapers take last/og:url-consistent set). Monitor.

### Medium
11. Home H1 was fragmented into per-word `<span>`s inside flex - harder for parsers. FIXED (simplified to two spans).
12. Only 2 nav links (Work, Contact) - thin internal linking. IMPROVED (CTA section links, footer already good, 404 links, FAQ section).
13. Email `hello@maksoftware.com` doesn't match domain `maksoftwaresolutions.com` - trust issue. OPEN (needs owner decision; see issues.md).
14. Google Fonts render-blocking CSS. OPEN (roadmap: self-host fonts with `font-display: swap`).
15. JS bundles heavy: index ~764 KB + ThreeCanvas ~897 KB (pre-gzip). OPEN (roadmap: code-split three.js off the critical path, lazy-load below-fold).

### Low
16. No hreflang (single-language site - fine for now; revisit with localized pages).
17. No blog/resources section - no topical authority surface. See content-plan.md.
18. SPA serves 200 for unknown routes (soft-404). Mitigated with noindex on NotFound; proper 404 status requires prerender/edge config.

## Verification checklist post-deploy
- [ ] `curl https://www.maksoftwaresolutions.com/sitemap.xml` → 200 XML
- [ ] `curl https://www.maksoftwaresolutions.com/robots.txt` → includes Sitemap line
- [ ] `curl https://www.maksoftwaresolutions.com/og.png` → 200 PNG
- [ ] View-source: Organization + WebSite JSON-LD present
- [ ] Rich Results Test: FAQPage detected on `/`
- [ ] Submit sitemap in Google Search Console + Bing Webmaster Tools (manual, owner action)
