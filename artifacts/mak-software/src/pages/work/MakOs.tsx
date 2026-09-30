import React from 'react';
import Seo from '@/components/Seo';
import CaseStudyFooter from '@/components/CaseStudyFooter';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Terminal, Database, Network, Cpu } from 'lucide-react';

export default function MakOs() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#2D5A3D] selection:text-white">
      <Seo
        title="MAK OS Case Study - Autonomous AI Agent Platform | MAK Software Solutions"
        description="How MAK Software Solutions built MAK OS, an autonomous client-acquisition system: ten AI agents that find businesses without a website, score them, and contact them by email, SMS, WhatsApp and AI voice call."
        path="/work/mak-os"
        ogType="article"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Work', path: '/work' },
          { name: 'MAK OS', path: '/work/mak-os' },
        ]}
      />

      {/* HERO */}
      <section className="pt-40 pb-32 px-6 relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="container mx-auto relative z-10">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-[#111411] border border-[#2D5A3D]/30 px-3 py-1 rounded-full mb-8 font-mono text-xs text-[#2D5A3D]">
              <span className="w-2 h-2 rounded-full bg-[#2D5A3D] animate-pulse" />
              SYSTEM ONLINE
            </div>
            <h1 className="font-serif text-6xl md:text-8xl mb-8 tracking-tight">MAK OS</h1>
            <div className="font-mono text-lg text-zinc-400 max-w-2xl bg-black/50 p-6 border border-white/10 rounded-sm">
              <span className="text-[#2D5A3D] mr-2">{'>'}</span> Initializing multi-agent orchestration...<br/>
              <span className="text-[#2D5A3D] mr-2">{'>'}</span> B2B acquisition pipeline online.<br/>
              <span className="text-[#2D5A3D] mr-2">{'>'}</span> Waiting for commands_
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
            <AnimatedSection>
              <h2 className="font-mono text-xs tracking-widest uppercase text-zinc-500 mb-6">The Problem</h2>
              <p className="font-sans text-xl leading-relaxed font-light text-zinc-300">
                Finding new clients by hand is slow: searching for businesses, checking whether they
                are a fit, then writing to each one and following up. It eats the time that should
                go into the actual work, and it stops the moment nobody is running it.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h2 className="font-mono text-xs tracking-widest uppercase text-zinc-500 mb-6">The Solution</h2>
              <p className="font-sans text-xl leading-relaxed font-light text-zinc-300">
                An autonomous client-acquisition system, built in-house. It finds businesses without
                a website, scores them as leads, and contacts them by email, SMS, WhatsApp and AI
                voice call, with no one running the campaign by hand. Ten pipeline agents across 29
                API routes, with a natural-language interface for targeting.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <h2 className="font-serif text-4xl mb-12">How it works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Network, name: "Find", desc: "Discovers businesses that have no website yet." },
                { icon: Cpu, name: "Score", desc: "Ranks each business as a lead before anyone is contacted." },
                { icon: Terminal, name: "Contact", desc: "Reaches out by email, SMS, WhatsApp and AI voice call (Twilio)." },
                { icon: Database, name: "Track", desc: "Every lead and conversation lands in a Supabase-backed CRM." }
              ].map((agent, i) => (
                <div key={i} className="bg-[#111] p-6 border border-white/5 rounded-sm hover:border-[#2D5A3D] transition-colors">
                  <agent.icon className="w-6 h-6 text-[#2D5A3D] mb-4" />
                  <h3 className="font-mono text-sm mb-2 text-white">{agent.name}</h3>
                  <p className="font-sans text-sm text-zinc-500 font-light">{agent.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
      <CaseStudyFooter current="mak-os" />
    </div>
  );
}
