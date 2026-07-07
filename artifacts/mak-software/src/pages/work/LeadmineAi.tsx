import React from 'react';
import { Helmet } from 'react-helmet-async';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Brain, Cpu, Database, Zap } from 'lucide-react';

export default function LeadmineAi() {
  return (
    <div className="min-h-screen bg-[#050B14] text-white">
      <Helmet>
        <title>LeadMine AI | MAK Software Solutions</title>
      </Helmet>

      {/* HERO */}
      <section className="pt-40 pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1E3A5F,transparent_50%)] opacity-30" />
        
        <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
          <AnimatedSection>
            <div className="font-mono text-xs tracking-widest text-[#4A90E2] mb-8 border border-[#4A90E2]/30 px-4 py-2 rounded-full inline-block">
              INTELLIGENCE ROUTING
            </div>
            <h1 className="font-serif text-6xl md:text-8xl mb-8">LeadMine AI</h1>
            <p className="font-sans text-xl text-zinc-400 max-w-2xl mx-auto font-light">
              Dynamic LLM routing for high-volume data enrichment.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-32 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
            <AnimatedSection>
              <h2 className="font-mono text-xs tracking-widest uppercase text-[#4A90E2] mb-6">The Constraint</h2>
              <p className="font-sans text-xl leading-relaxed font-light text-zinc-300">
                Processing tens of thousands of leads daily through top-tier LLMs like GPT-4 becomes cost-prohibitive immediately. Not every piece of data requires frontier-model reasoning.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h2 className="font-mono text-xs tracking-widest uppercase text-[#4A90E2] mb-6">The Solution</h2>
              <p className="font-sans text-xl leading-relaxed font-light text-zinc-300">
                We built an intelligent routing layer. Simple classification tasks are sent to Groq (Llama 3) for microsecond responses. Complex extraction goes to Gemini. Sensitive on-premise tasks are routed to local Ollama instances.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <h2 className="font-serif text-4xl mb-12">Model Architecture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Zap, title: "Groq LPU", desc: "High-speed token generation for basic categorizations." },
                { icon: Brain, title: "Google Gemini", desc: "Deep reasoning and unstructured data extraction." },
                { icon: Database, title: "Local Ollama", desc: "Private, air-gapped processing for sensitive PII." }
              ].map((model, i) => (
                <div key={i} className="bg-[#0A1526] p-8 border border-[#1E3A5F] rounded-xl">
                  <model.icon className="w-8 h-8 text-[#4A90E2] mb-6" />
                  <h3 className="font-sans font-medium text-xl mb-3">{model.title}</h3>
                  <p className="font-sans text-zinc-400 font-light">{model.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
