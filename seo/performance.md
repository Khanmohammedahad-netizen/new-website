# Performance Notes

## Current build output (Vite, 2026-07-23)
| Asset | Size | Gzip |
|---|---|---|
| index.html | 1.66 kB | 0.60 kB |
| index.css | 108.58 kB | 18.33 kB |
| index.js | 764.22 kB | 250.91 kB |
| ThreeCanvas.js | 897.34 kB | 242.40 kB |

ThreeCanvas is already a separate chunk (good) - verify it's lazy-imported, not eagerly loaded.

## Targets
- LCP < 2.5s (hero headline - ensure GSAP doesn't delay paint; initial opacity should not hide LCP element from first paint)
- CLS < 0.1 (reserve space for three.js canvas)
- INP < 200ms (Lenis + GSAP scroll handlers - passive listeners)

## Actions (Phase 2)
1. `React.lazy` + Suspense for NeuralNetwork/ThreeCanvas; only load on desktop + after first paint
2. `manualChunks`: split react-vendor / three / gsap+framer
3. Self-host fonts, `font-display: swap`, preload woff2
4. Audit framer-motion usage - tree-shake via `LazyMotion`
5. Run Lighthouse before/after; record here
