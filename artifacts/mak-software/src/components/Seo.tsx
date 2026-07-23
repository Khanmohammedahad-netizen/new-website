import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SITE_URL = 'https://www.maksoftwaresolutions.com';
export const SITE_NAME = 'MAK Software Solutions';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og.png`;

type BreadcrumbItem = {
  name: string;
  path: string;
};

type SeoProps = {
  title: string;
  description: string;
  /** Route path beginning with "/" - used to build the canonical URL. */
  path: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  noindex?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  /** Additional JSON-LD objects to inject (already-shaped schema.org nodes). */
  jsonLd?: Record<string, unknown>[];
};

function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export default function Seo({
  title,
  description,
  path,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  noindex = false,
  breadcrumbs,
  jsonLd = [],
}: SeoProps) {
  const canonical = `${SITE_URL}${path === '/' ? '/' : path}`;
  const schemas: Record<string, unknown>[] = [...jsonLd];
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push(breadcrumbJsonLd(breadcrumbs));
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
