// Post-build prerenderer: renders every route to static HTML so crawlers
// (including non-JS AI crawlers) receive full content, and deep links
// resolve without an SPA rewrite.
//
// React 19 emits <title>/<meta>/<link>/JSON-LD inline where the Seo
// component renders; extractHeadTags() hoists them into <head>.
//
// Runs after `vite build` (client → dist/public) and
// `vite build --ssr` (server → dist/server).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const publicDir = path.join(root, 'dist', 'public');
const templatePath = path.join(publicDir, 'index.html');

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

const HEAD_TAG_PATTERNS = [
  /<title>[\s\S]*?<\/title>/g,
  /<meta\s[^>]*\/?>/g,
  /<link\s[^>]*\/?>/g,
  /<script type="application\/ld\+json">[\s\S]*?<\/script>/g,
];

/** Pull head-destined tags out of body markup; return [cleanedBody, headHtml]. */
function extractHeadTags(html) {
  const collected = [];
  let body = html;
  for (const pattern of HEAD_TAG_PATTERNS) {
    body = body.replace(pattern, (match) => {
      collected.push(match);
      return '';
    });
  }
  return [body, collected.join('\n    ')];
}

const template = fs.readFileSync(templatePath, 'utf-8');

// Preserve the untouched template as the SPA fallback for unknown routes
// (served via the Vercel rewrite → renders the noindex 404 page client-side).
fs.writeFileSync(
  path.join(publicDir, 'spa.html'),
  template.replace('<!--seo:start-->', '').replace('<!--seo:end-->', ''),
);

const { render } = await import(
  pathToFileURL(path.join(root, 'dist', 'server', 'entry-server.js')).href
);

const SEO_BLOCK_RE = /<!--seo:start-->[\s\S]*?<!--seo:end-->/;

let failures = 0;

for (const route of ROUTES) {
  try {
    const { html } = render(route);
    const [bodyHtml, headHtml] = extractHeadTags(html);

    if (!headHtml.includes('<title>')) {
      throw new Error('no <title> extracted — Seo component missing?');
    }

    let out = template.replace(SEO_BLOCK_RE, headHtml);
    out = out.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);

    const outPath =
      route === '/'
        ? path.join(publicDir, 'index.html')
        : path.join(publicDir, ...route.split('/').filter(Boolean), 'index.html');

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, out);
    console.log(`✓ prerendered ${route} (${(out.length / 1024).toFixed(1)} kB)`);
  } catch (err) {
    failures += 1;
    console.error(`✗ FAILED ${route}:`, err);
  }
}

if (failures > 0) {
  console.error(`Prerender finished with ${failures} failure(s).`);
  process.exit(1);
}
console.log(`Prerendered ${ROUTES.length} routes.`);
