import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { ThemeProvider } from '@/lib/theme';
import { HelmetProvider } from 'react-helmet-async';
import Lenis from 'lenis';

// Pages
import Home from '@/pages/Home';
import Work from '@/pages/Work';
import Services from '@/pages/Services';
import ServiceDetail from '@/pages/ServiceDetail';
import About from '@/pages/About';
import ThirdPlace from '@/pages/work/ThirdPlace';
import MakOs from '@/pages/work/MakOs';
import SevenStarErp from '@/pages/work/SevenStarErp';
import LeadmineAi from '@/pages/work/LeadmineAi';
import SaasEcosystem from '@/pages/work/SaasEcosystem';
import Contact from '@/pages/Contact';

// Components
import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/nav/Footer';

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/services/:slug">
            {(params) => <ServiceDetail slug={params.slug} />}
          </Route>
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/work/third-place" component={ThirdPlace} />
          <Route path="/work/mak-os" component={MakOs} />
          <Route path="/work/7star-erp" component={SevenStarErp} />
          <Route path="/work/leadmine-ai" component={LeadmineAi} />
          <Route path="/work/saas-ecosystem" component={SaasEcosystem} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

type AppProps = {
  /** Route to render during server-side prerendering. */
  ssrPath?: string;
  /** Context object react-helmet-async fills during SSR. */
  helmetContext?: Record<string, unknown>;
};

function App({ ssrPath, helmetContext }: AppProps = {}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <HelmetProvider context={helmetContext}>
      <ThemeProvider defaultTheme="system" storageKey="mak-theme">
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <WouterRouter
              base={(import.meta.env?.BASE_URL ?? '/').replace(/\/$/, '')}
              ssrPath={ssrPath}
            >
              <Router />
            </WouterRouter>
            <Toaster />
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
