import React from 'react';
import Seo from '@/components/Seo';
import CaseStudyFooter from '@/components/CaseStudyFooter';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { ClipboardCheck, MessagesSquare, Users, Receipt } from 'lucide-react';

export default function Aero() {
  return (
    <div className="min-h-screen bg-[#F4F6F8] text-[#0B1B2B]">
      <Seo
        title="AERO Workforce Platform Case Study - Aviation Recruitment & Payroll | MAK Software Solutions"
        description="How MAK Software Solutions is building the AERO workforce platform for a UK agency supplying aviation ground staff at London Heathrow: recruitment, vetting, candidate communications, payroll and invoicing."
        path="/work/aero"
        ogType="article"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Work', path: '/work' },
          { name: 'AERO Workforce Platform', path: '/work/aero' },
        ]}
      />

      {/* HERO */}
      <section className="pt-40 pb-32 px-6 bg-[#0B1B2B] text-white">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="flex flex-wrap items-center gap-4 mb-8 text-[#9FB3C8]">
              <span className="font-mono text-xs tracking-widest uppercase">In active build</span>
              <span className="w-1 h-1 rounded-full bg-current" />
              <span className="font-mono text-xs tracking-widest uppercase">Workforce Platform</span>
              <span className="w-1 h-1 rounded-full bg-current" />
              <span className="font-mono text-xs tracking-widest uppercase">UK Aviation</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl mb-8 max-w-4xl leading-tight">
              AERO Workforce Platform.
            </h1>
            <p className="font-sans text-xl md:text-2xl max-w-3xl font-light text-[#C9D6E3]">
              Recruitment, vetting, rostering and payroll for aviation ground staff at London
              Heathrow, in one platform.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <div className="mb-20 max-w-3xl">
              <h2 className="font-mono text-xs tracking-widest uppercase text-[#0B1B2B]/50 mb-6">The Client</h2>
              <p className="font-sans text-xl leading-relaxed font-light text-[#0B1B2B]/80">
                AERO Associated Services Group, a UK agency supplying aviation ground staff at
                London Heathrow.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
            <AnimatedSection>
              <h2 className="font-mono text-xs tracking-widest uppercase text-[#0B1B2B]/50 mb-6">The Problem</h2>
              <p className="font-sans text-xl leading-relaxed font-light text-[#0B1B2B]/80">
                Recruiting, security-vetting, rostering and paying airport staff involves strict
                compliance and heavy manual paperwork. Every candidate moves through references
                and vetting checks before they can work airside, and every step has to be on record.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="font-mono text-xs tracking-widest uppercase text-[#0B1B2B]/50 mb-6">The Solution</h2>
              <p className="font-sans text-xl leading-relaxed font-light text-[#0B1B2B]/80">
                A single platform covering the candidate application, reference and vetting
                pipeline, automated candidate communications, workforce records, and payroll and
                invoicing. Delivered prototype-first to validate the workflow, with an architecture
                designed to scale into full production.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <h2 className="font-serif text-4xl mb-12">What the platform covers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#DCE3EA] border border-[#DCE3EA] rounded-xl overflow-hidden">
              {[
                { icon: ClipboardCheck, title: 'Vetting Pipeline', desc: 'Applications, references and security vetting tracked stage by stage, so nobody is missed and nothing is lost.' },
                { icon: MessagesSquare, title: 'Candidate Communications', desc: 'Automated updates and reminders to candidates as they move through each stage.' },
                { icon: Users, title: 'Workforce Records', desc: 'Compliance-grade staff records kept in one place, ready for audit.' },
                { icon: Receipt, title: 'Payroll & Invoicing', desc: 'Pay runs and client invoicing produced from the same records, without re-keying.' },
              ].map((feature, i) => (
                <div key={i} className="bg-white p-10">
                  <div className="w-12 h-12 bg-[#0B1B2B] rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-sans font-medium text-xl mb-3">{feature.title}</h3>
                  <p className="font-sans text-[#4A5E72] font-light leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
      <CaseStudyFooter current="aero" />
    </div>
  );
}
