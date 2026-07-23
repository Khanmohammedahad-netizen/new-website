import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

/**
 * Server-render a route. With React 19 + react-helmet-async v3, head tags
 * (<title>, <meta>, <link>, JSON-LD <script>) are emitted inline at the Seo
 * component's position in the markup - the prerender script extracts and
 * hoists them into <head>.
 */
export function render(url: string): { html: string } {
  const html = renderToString(<App ssrPath={url} />);
  return { html };
}
