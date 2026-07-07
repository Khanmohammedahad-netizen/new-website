import React from 'react';
import { Helmet } from 'react-helmet-async';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Building2, Globe2, BarChart3, ShieldCheck } from 'lucide-react';

export default function SevenStarErp() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0F172A]">
      <Helmet>
        <title>7STAR ERP | MAK Software Solutions</title>
      </Helmet>

      {/* HERO */}
      <section className="pt-40 pb-32 px-6 bg-[#0F172A] text-white">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-8 text-[#94A3B8]">
              <span className="font-mono text-xs tracking-widest uppercase">2025</span>
              <span className="w-1 h-1 rounded-full bg-current" />
              <span className="font-mono text-xs tracking-widest uppercase">Enterprise Software</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl mb-8 max-w-4xl leading-tight">
              Centralizing global operations for 7STAR.
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
            <AnimatedSection>
              <h2 className="font-mono text-xs tracking-widest uppercase text-[#0F172A]/50 mb-6">The Challenge</h2>
              <p className="font-sans text-xl leading-relaxed font-light text-[#0F172A]/80">
                Operating across multiple continents with disconnected legacy systems resulted in severe data fragmentation. Inventory visibility was delayed by days, and financial reconciliation required hundreds of manual hours per month.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h2 className="font-mono text-xs tracking-widest uppercase text-[#0F172A]/50 mb-6">The Solution</h2>
              <p className="font-sans text-xl leading-relaxed font-light text-[#0F172A]/80">
                A custom-engineered Enterprise Resource Planning (ERP) platform. Built from the ground up for their specific workflows, integrating supply chain, finance, HR, and global logistics into a single source of truth.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <h2 className="font-serif text-4xl mb-12">System Capabilities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#E2E8F0] border border-[#E2E8F0] rounded-xl overflow-hidden">
              {[
                { icon: Globe2, title: "Multi-Currency Financials", desc: "Automated reconciliation across 9 regional currencies." },
                { icon: Building2, title: "Global Inventory Management", desc: "Real-time stock visibility across 40+ warehouses." },
                { icon: BarChart3, title: "Predictive Analytics", desc: "Machine learning models for demand forecasting." },
                { icon: ShieldCheck, title: "Role-Based Access Control", desc: "Granular permissions for 2000+ internal users." }
              ].map((feature, i) => (
                <div key={i} className="bg-white p-10 hover:bg-[#F8F9FA] transition-colors">
                  <div className="w-12 h-12 bg-[#0F172A] rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-sans font-medium text-xl mb-3">{feature.title}</h3>
                  <p className="font-sans text-[#64748B] font-light leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
