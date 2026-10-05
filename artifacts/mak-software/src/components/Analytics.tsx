import { useEffect, useState } from 'react';

/**
 * Google Analytics 4 with Consent Mode v2. Analytics cookies stay off until
 * the visitor accepts (DPDP Act); until then GA only receives cookieless,
 * anonymous pings. Page changes in this single-page app are picked up by GA's
 * enhanced measurement (browser history events). Renders nothing unless
 * VITE_GA_ID is set at build time. SSR-safe: everything runs in effects.
 */
const GA_ID = import.meta.env.VITE_GA_ID as string | undefined;
const KEY = 'mak-analytics-consent';

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window { gtag?: Gtag; dataLayer?: unknown[] }
}

function readChoice(): 'granted' | 'denied' | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

export default function Analytics() {
  const [choice, setChoice] = useState<'granted' | 'denied' | null | undefined>(undefined);

  useEffect(() => {
    if (!GA_ID || window.gtag) return;
    const saved = readChoice();
    setChoice(saved);
    window.dataLayer = window.dataLayer || [];
    // gtag must push the real `arguments` object.
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    window.gtag('consent', 'default', { analytics_storage: saved === 'granted' ? 'granted' : 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
  }, []);

  if (!GA_ID || choice !== null) return null;

  const decide = (v: 'granted' | 'denied') => {
    try { localStorage.setItem(KEY, v); } catch { /* private mode */ }
    window.gtag?.('consent', 'update', { analytics_storage: v });
    setChoice(v);
  };

  return (
    <div role="dialog" aria-label="Cookie preferences" className="fixed inset-x-4 bottom-4 z-50 mx-auto flex max-w-xl flex-col gap-3 rounded-2xl border border-border bg-background p-4 text-sm shadow-lg sm:flex-row sm:items-center">
      <p className="flex-1 text-foreground/80">We use analytics cookies to understand how visitors use our site. No ads, and we never sell data.</p>
      <div className="flex gap-2">
        <button type="button" onClick={() => decide('denied')} className="rounded-full border border-border px-4 py-2">Decline</button>
        <button type="button" onClick={() => decide('granted')} className="rounded-full bg-foreground px-4 py-2 text-background">Accept</button>
      </div>
    </div>
  );
}
