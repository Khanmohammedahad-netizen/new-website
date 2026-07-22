import React from 'react';
import { Link } from 'wouter';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

const ORDER = [
  { slug: 'third-place', title: 'Third Place', href: '/work/third-place' },
  { slug: 'mak-os', title: 'MAK OS', href: '/work/mak-os' },
  { slug: '7star-erp', title: '7STAR ERP', href: '/work/7star-erp' },
  { slug: 'leadmine-ai', title: 'LeadMine AI', href: '/work/leadmine-ai' },
  { slug: 'saas-ecosystem', title: 'SaaS Ecosystem', href: '/work/saas-ecosystem' },
];

export default function CaseStudyFooter({ current }: { current: string }) {
  const idx = ORDER.findIndex((c) => c.slug === current);
  const prev = ORDER[(idx - 1 + ORDER.length) % ORDER.length];
  const next = ORDER[(idx + 1) % ORDER.length];

  return (
    <section className="py-24 px-6 bg-[#0A0A0A] text-white border-t border-white/10">
      <div className="container mx-auto max-w-5xl">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Want results like this?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="bg-[#2D5A3D] hover:bg-[#2D5A3D]/80 text-white px-8 py-4 rounded-sm font-mono text-sm tracking-wider transition-colors"
              >
                START A PROJECT
              </Link>
              <Link
                href="/services"
                className="border border-white/30 hover:border-white px-8 py-4 rounded-sm font-mono text-sm tracking-wider transition-colors"
              >
                EXPLORE SERVICES
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex justify-between items-center pt-12 border-t border-white/10">
            <Link href={prev.href} className="group flex items-center gap-3 font-sans hover:text-[#2D5A3D] transition-colors">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <div className="font-mono text-[10px] tracking-widest uppercase text-zinc-500">Previous</div>
                <div className="text-lg">{prev.title}</div>
              </div>
            </Link>
            <Link href="/work" className="font-mono text-xs tracking-widest uppercase text-zinc-500 hover:text-white transition-colors hidden sm:block">
              All Work
            </Link>
            <Link href={next.href} className="group flex items-center gap-3 font-sans hover:text-[#2D5A3D] transition-colors">
              <div className="text-right">
                <div className="font-mono text-[10px] tracking-widest uppercase text-zinc-500">Next</div>
                <div className="text-lg">{next.title}</div>
              </div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
