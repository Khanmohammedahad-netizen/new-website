# Structured Data Inventory

| Schema | Location | Notes |
|---|---|---|
| Organization | index.html (static) | @id anchor `#organization`; logo, address (Hyderabad), ContactPoint, areaServed |
| WebSite | index.html (static) | publisher → #organization |
| ProfessionalService | `/` via Seo jsonLd | services, areaServed, knowsAbout |
| FAQPage | `/` via Seo jsonLd | 5 questions - mirrors visible FAQ section 1:1 |
| BreadcrumbList | /work, /contact, all 5 case studies | via Seo `breadcrumbs` prop |
| ContactPage | /contact | |

## Validation
- Test each route in https://search.google.com/test/rich-results after deploy
- schema.org validator: https://validator.schema.org/
- Rule: never emit schema for content not visible on the page (FAQ text must stay in sync with FAQS array in Home.tsx - single source: FAQS const drives both)

## Planned (Phase 3+)
- Person (founder) on /about
- Service per /services/* page
- Article + author on blog posts
- Review/AggregateRating ONLY with real, verifiable reviews
