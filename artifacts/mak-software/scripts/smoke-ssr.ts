// Local SSR smoke test: renders every route via entry-server without a Vite
// build (run with tsx --tsconfig scripts/tsconfig.smoke.json). Catches
// window/localStorage crashes and missing Seo tags before deploy.
import React from 'react';
import { render } from '../src/entry-server';

const ROUTES = [
  '/',
  '/services',
  '/services/ai-development',
  '/services/erp',
  '/services/crm',
  '/services/mobile-apps',
  '/services/automation',
  '/services/saas',
  '/about',
  '/insights',
  '/insights/what-are-ai-agents-business-guide',
  '/insights/llm-cost-guide',
  '/insights/custom-erp-vs-off-the-shelf',
  '/insights/automate-b2b-lead-generation-with-ai',
  '/work',
  '/work/third-place',
  '/work/mak-os',
  '/work/7star-erp',
  '/work/leadmine-ai',
  '/work/saas-ecosystem',
  '/contact',
];

let failed = 0;
for (const route of ROUTES) {
  try {
    const { html } = render(route);
    const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/);
    const canonical = /<link rel="canonical"/.test(html);
    const jsonLd = (html.match(/application\/ld\+json/g) || []).length;
    const textLen = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').length;
    console.log(
      `OK ${route} - title="${titleMatch?.[1] ?? 'MISSING'}" canonical=${canonical} jsonLd=${jsonLd} text=${textLen}ch`,
    );
    if (!titleMatch || !canonical || textLen < 500) failed++;
  } catch (err) {
    failed++;
    console.error(`FAIL ${route}:`, (err as Error).message);
  }
}
process.exit(failed > 0 ? 1 : 0);
