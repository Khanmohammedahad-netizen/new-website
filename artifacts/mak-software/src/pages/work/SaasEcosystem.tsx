import React from 'react';
import Seo from '@/components/Seo';
import CaseStudyFooter from '@/components/CaseStudyFooter';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Layers, FileCode2, Shield, Repeat } from 'lucide-react';

export default function SaasEcosystem() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#111411]">
      <Seo
        title="SaaS Ecosystem Case Study - Shared Platform Architecture | MAK Software Solutions"
        description="How MAK Software Solutions built a 17-repository shared SaaS architecture enabling rapid deployment of new products with common auth, billing, and infrastructure layers."
        path="/work/saas-ecosystem"
        ogType="article"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Work', path: '/work' },
          { name: 'SaaS Ecosystem', path: '/work/saas-ecosystem' },
        ]}
      />

      {/* HERO */}
      <section className="pt-40 pb-20 px-6 bg-[#EBE5DA] relative overflow-hidden">
        {/* Blueprint background effect */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(#2D5A3D_1px,transparent_1px),linear-gradient(90deg,#2D5A3D_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        <div className="container mx-auto relative z-10">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-8 text-[#2D5A3D]">
              <span className="font-mono text-xs tracking-widest uppercase">Infrastructure</span>
              <span className="w-1 h-1 rounded-full bg-current" />
              <span className="font-mono text-xs tracking-widest uppercase">Internal Tools</span>
            </div>
            <h1 className="font-serif text-6xl md:text-8xl mb-8 max-w-4xl">Shared SaaS Architecture.</h1>
            <p className="font-sans text-xl font-light opacity-80 max-w-2xl">
              A 17-repository ecosystem allowing us to deploy robust B2B SaaS platforms in days instead of months.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
            <AnimatedSection>
              <h2 className="font-mono text-xs tracking-widest uppercase text-[#2D5A3D] mb-6">The Problem</h2>
              <p className="font-sans text-xl leading-relaxed font-light">
                Building every SaaS from scratch means writing authentication, billing, tenancy, and design systems repeatedly. This wastes client budget on solved problems and delays time-to-market.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h2 className="font-mono text-xs tracking-widest uppercase text-[#2D5A3D] mb-6">The Solution</h2>
              <p className="font-sans text-xl leading-relaxed font-light">
                We engineered a proprietary monorepo-inspired ecosystem comprising 17 foundational packages. It handles Stripe integration, Supabase auth, RBAC, and UI components out of the box.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <h2 className="font-serif text-4xl mb-12">Core Foundations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Shield, title: "Auth & Tenancy", desc: "Enterprise-grade RBAC and multi-tenant data isolation." },
                { icon: Layers, title: "Design System", desc: "Strict, accessible React components shared across all apps." },
                { icon: FileCode2, title: "API Gateway", desc: "Standardized tRPC and REST patterns with rate limiting." },
                { icon: Repeat, title: "CI/CD Pipelines", desc: "Zero-downtime deployment workflows on Vercel and AWS." }
              ].map((feature, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white border border-[#E5E0D8] rounded-full flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-[#2D5A3D]" />
                  </div>
                  <div>
                    <h3 className="font-sans font-medium text-lg mb-2">{feature.title}</h3>
                    <p className="font-sans text-sm opacity-70 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
      <CaseStudyFooter current="saas-ecosystem" />
    </div>
  );
}
