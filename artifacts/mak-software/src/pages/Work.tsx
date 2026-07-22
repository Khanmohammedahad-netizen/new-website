import React from 'react';
import Seo from '@/components/Seo';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

const CASE_STUDIES = [
  {
    id: "third-place",
    title: "Third Place",
    category: "Mobile App",
    year: "2025",
    desc: "Vibe-based discovery platform for coffee shops and workspaces.",
    href: "/work/third-place",
    bg: "bg-[#D9CDB8]",
    text: "text-[#111411]"
  },
  {
    id: "mak-os",
    title: "MAK OS v1",
    category: "AI Agent Platform",
    year: "2025",
    desc: "Autonomous multi-agent B2B acquisition pipeline.",
    href: "/work/mak-os",
    bg: "bg-[#0A0A0A] border border-[#333]",
    text: "text-white"
  },
  {
    id: "7star-erp",
    title: "7STAR ERP",
    category: "Enterprise Software",
    year: "2025",
    desc: "Centralized resource planning for global operations.",
    href: "/work/7star-erp",
    bg: "bg-[#2D5A3D]",
    text: "text-white"
  },
  {
    id: "leadmine-ai",
    title: "LeadMine AI",
    category: "AI Platform",
    year: "2024",
    desc: "AI-driven lead intelligence routing using Groq, Gemini, and Ollama.",
    href: "/work/leadmine-ai",
    bg: "bg-[#111411] border border-white/10",
    text: "text-white"
  },
  {
    id: "saas-ecosystem",
    title: "SaaS Ecosystem",
    category: "Infrastructure",
    year: "2024",
    desc: "17-repository shared architecture for rapid SaaS deployment.",
    href: "/work/saas-ecosystem",
    bg: "bg-[#F5F0E8] border border-[#E5E0D8]",
    text: "text-[#111411]"
  }
];

export default function Work() {
  return (
    <div className="pt-32 pb-32 min-h-screen bg-background">
      <Seo
        title="Case Studies & Portfolio | MAK Software Solutions"
        description="Explore MAK Software Solutions case studies: AI agent platforms, enterprise ERP systems, mobile apps, and SaaS infrastructure built for clients across India, UAE, UK, and USA."
        path="/work"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Work', path: '/work' },
        ]}
      />

      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="max-w-3xl mb-24">
            <h1 className="font-serif text-5xl md:text-7xl mb-6">Our Work</h1>
            <p className="font-sans text-xl text-muted-foreground font-light">
              We architect systems that solve real business problems. From consumer mobile apps to enterprise intelligence platforms.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((work, i) => (
            <AnimatedSection key={work.id} delay={i * 0.1} className={i === 2 ? "md:col-span-2" : ""}>
              <Link href={work.href}>
                <div className={`group relative p-8 md:p-12 rounded-xl flex flex-col justify-between h-[400px] md:h-[500px] overflow-hidden transition-transform duration-500 hover:-translate-y-2 ${work.bg} ${work.text}`}>
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs tracking-widest uppercase opacity-70">{work.category}</span>
                      <span className="w-1 h-1 rounded-full bg-current opacity-50" />
                      <span className="font-mono text-xs tracking-widest uppercase opacity-70">{work.year}</span>
                    </div>
                  </div>
                  
                  <div className="relative z-10 mt-auto">
                    <h3 className="font-serif text-4xl md:text-5xl mb-4">{work.title}</h3>
                    <div className="flex items-end justify-between gap-8">
                      <p className="font-sans font-light text-lg opacity-80 max-w-sm">{work.desc}</p>
                      <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center group-hover:bg-current group-hover:text-background transition-all duration-300 shrink-0">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
