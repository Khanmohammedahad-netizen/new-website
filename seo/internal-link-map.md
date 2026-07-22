# Internal Link Map

```
/ (Home)
├─ nav → /work, /contact
├─ hero → /work, WhatsApp
├─ Selected Work cards → /work/third-place, /work/mak-os, /work/7star-erp
├─ "VIEW ALL" → /work
├─ FAQ section (no links yet — add /services links when pages exist)
├─ CTA section → /work, /contact (x2 each: inline + button)
└─ footer → all 5 case studies, /contact, / (logo)

/work
└─ 5 case-study cards → each /work/*

/work/* (each case study)
├─ breadcrumb schema (Home → Work → Page)
└─ footer links (sitewide)
   [GAP] no prev/next case study links, no inline links back to /work or /contact CTA

/contact
└─ footer only

404 → /, /work, /contact
```

## Gaps to fix next
1. Case-study pages need a bottom CTA ("Next case study →" + "Start a project") — orphan-ish endpoints today
2. FAQ answers should link to relevant pages once /services exists
3. Contact page could link back to /work ("see what we've built")
No orphan pages: all 8 routes reachable from footer/nav. ✅
