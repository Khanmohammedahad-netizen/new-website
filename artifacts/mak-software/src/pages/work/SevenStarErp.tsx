import React from 'react';
import Seo from '@/components/Seo';
import CaseStudyFooter from '@/components/CaseStudyFooter';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Building2, Globe2, BarChart3, ShieldCheck } from 'lucide-react';

export default function SevenStarErp() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0F172A]">
      <Seo
        title="7STAR ERP Case Study - Enterprise Resource Planning | MAK Software Solutions"
        description="How MAK Software Solutions built 7STAR ERP, a calendar-driven ERP for an event management company in the UAE and Saudi Arabia: scheduling, quotations, invoices with PDF export, UAE and KSA VAT, and visa-expiry alerts."
        path="/work/7star-erp"
        ogType="article"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Work', path: '/work' },
          { name: '7STAR ERP', path: '/work/7star-erp' },
        ]}
      />

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
              One platform for 7STAR's operations across the UAE and Saudi Arabia.
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
                An event management company operating across the UAE and Saudi Arabia ran its
                operations across spreadsheets and message threads. Invoices, VAT and staff visas
                were all tracked by hand.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h2 className="font-mono text-xs tracking-widest uppercase text-[#0F172A]/50 mb-6">The Solution</h2>
              <p className="font-sans text-xl leading-relaxed font-light text-[#0F172A]/80">
                One calendar-driven platform: event scheduling, quotations and invoices with
                automatic PDF export, UAE and Saudi VAT calculated in-system, and visa-expiry alerts
                so nothing lapses.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <h2 className="font-serif text-4xl mb-12">System Capabilities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#E2E8F0] border border-[#E2E8F0] rounded-xl overflow-hidden">
              {[
                { icon: Building2, title: "Calendar-Driven Scheduling", desc: "Every event planned and tracked from one shared calendar." },
                { icon: BarChart3, title: "Quotations & Invoices", desc: "Quotes and invoices generated in-system with automatic PDF export." },
                { icon: Globe2, title: "UAE + KSA VAT", desc: "UAE and Saudi VAT calculated automatically on every document." },
                { icon: ShieldCheck, title: "Visa-Expiry Alerts", desc: "Staff visa dates tracked with alerts before anything lapses." }
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
      <CaseStudyFooter current="7star-erp" />
    </div>
  );
}
