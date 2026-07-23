# Open Issues

| # | Issue | Severity | Owner action needed |
|---|---|---|---|
| 1 | Email `hello@maksoftware.com` doesn't match domain - looks off-brand and may not exist | High | Confirm real inbox; ideally create `hello@maksoftwaresolutions.com` and update Contact.tsx |
| 2 | SPA = no server-rendered HTML per route; AI crawlers see only index.html | High | Approve prerender approach (Phase 2) |
| 3 | JS bundles: 764 KB index + 897 KB ThreeCanvas pre-gzip | Medium | Code-split (Phase 2) |
| 4 | Static OG tags in index.html + Helmet duplicates on inner pages | Low | Consider removing static og:* once prerendering lands |
| 5 | Unknown routes return HTTP 200 (soft 404) | Low | Prerender/edge middleware to return real 404 |
| 6 | No Google Search Console / Bing Webmaster verification detected | High | Owner: verify domain, submit sitemap.xml |
| 7 | Testimonials are anonymous ("CTO, Fintech") - weak E-E-A-T | Medium | Get named/linked testimonials or client logos with permission |
| 8 | Founded "2025" + "2+ years experience" stats slightly inconsistent | Low | Align copy |
