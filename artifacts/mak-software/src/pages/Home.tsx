import React, { useEffect, useRef } from 'react';
import Seo, { SITE_URL } from '@/components/Seo';
import { Link } from 'wouter';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronDown, CheckCircle2, Code2, Cpu, Database, Layout, Smartphone, Blocks, Terminal } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import NeuralNetwork from '@/components/three/NeuralNetwork';
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiPostgresql, SiSupabase, SiPython, SiThreedotjs, SiTailwindcss, SiFramer, SiVercel } from 'react-icons/si';
import { Cloud } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FAQS = [
  {
    q: 'What kind of software does MAK Software Solutions build?',
    a: 'We build AI-powered platforms, enterprise software, ERP and CRM systems, SaaS products, mobile applications, and business automation systems. Every project is custom-architected around the client’s operations rather than adapted from a template.',
  },
  {
    q: 'Which countries does MAK Software Solutions serve?',
    a: 'We serve clients across India, the UAE, Saudi Arabia, the United Kingdom, the United States, Singapore, Japan, Australia, and Europe, with engineering operations based in Hyderabad, India.',
  },
  {
    q: 'How long does a typical software project take?',
    a: 'Scope drives timelines, but most MVPs ship in 4–8 weeks and enterprise platforms in 8–16 weeks. We work in iterative sprints, so you see working software from the first weeks, not just at the end.',
  },
  {
    q: 'Do you work with AI technologies like OpenAI, Claude, and Azure AI?',
    a: 'Yes. AI integration is one of our core specialties — we build autonomous agent systems, LLM-powered workflows, and intelligent automation using OpenAI, Anthropic Claude, Google Gemini, Groq, and Azure AI services.',
  },
  {
    q: 'How do I start a project with MAK Software Solutions?',
    a: 'Reach out through the contact form or WhatsApp. We start with a discovery call to map the problem space, then deliver a technical proposal with architecture, timeline, and pricing before any commitment.',
  },
];

const HOME_JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'MAK Software Solutions',
    url: SITE_URL,
    description:
      'AI-first software development company building enterprise software, AI agents, SaaS platforms, ERP/CRM systems, and mobile applications for clients across India, UAE, UK, USA, and beyond.',
    areaServed: ['India', 'United Arab Emirates', 'Saudi Arabia', 'United Kingdom', 'United States', 'Singapore', 'Japan', 'Australia'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: '+91-7702448705',
      availableLanguage: ['English', 'Hindi'],
    },
    knowsAbout: [
      'AI software development',
      'Enterprise software',
      'ERP systems',
      'CRM systems',
      'SaaS platforms',
      'Mobile app development',
      'Business automation',
      'AI agents',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const heroHeadlineRef = useRef<HTMLHeadingElement>(null);
  const problemTextRef = useRef<HTMLParagraphElement>(null);
  const processLineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Hero GSAP Stagger
    if (heroHeadlineRef.current) {
      const words = heroHeadlineRef.current.querySelectorAll('.word');
      gsap.fromTo(words, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.1, 
          ease: "power3.out",
          delay: 0.2
        }
      );
    }

    // Problem Text Scroll Reveal
    if (problemTextRef.current) {
      const words = problemTextRef.current.querySelectorAll('.reveal-word');
      gsap.fromTo(words,
        { opacity: 0.2, y: 10 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          ease: "none",
          scrollTrigger: {
            trigger: problemTextRef.current,
            start: "top 80%",
            end: "bottom 40%",
            scrub: true,
          }
        }
      );
    }
    
    // Process Timeline Draw
    if (processLineRef.current) {
      gsap.fromTo(processLineRef.current,
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: processLineRef.current,
            start: "top 60%",
            end: "bottom 40%",
            scrub: true
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <Seo
        title="MAK Software Solutions | AI & Custom Software Development Company"
        description="AI-first software development company in Hyderabad, India. We build enterprise software, AI agents, SaaS platforms, ERP/CRM systems, and mobile apps for clients across India, UAE, UK, USA, and beyond."
        path="/"
        jsonLd={HOME_JSON_LD}
      />

      {/* 1. HERO */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-zinc-950 text-white">
        <NeuralNetwork />
        
        <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center mt-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 ref={heroHeadlineRef} className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight max-w-5xl leading-[1.1] mb-8">
              <span className="word inline-block">We engineer</span>
              <span className="hidden md:block w-full h-0"></span>
              <span className="word inline-block italic font-light text-zinc-300">digital businesses.</span>
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="font-sans text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light"
            >
              Software that scales. Systems that think. Products that last.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link 
                href="/work" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-sm font-mono text-sm tracking-wider transition-all w-full sm:w-auto"
              >
                VIEW OUR WORK
              </Link>
              <a 
                href="https://wa.me/917702448705" 
                target="_blank" 
                rel="noreferrer"
                className="border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/50 px-8 py-4 rounded-sm font-mono text-sm tracking-wider transition-all w-full sm:w-auto"
              >
                START A PROJECT
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </section>

      {/* 2. PROBLEM */}
      <section className="py-32 md:py-48 bg-[#F5F0E8] text-[#111411]">
        <div className="container mx-auto px-6 max-w-5xl">
          <AnimatedSection>
            <h2 className="font-serif text-4xl md:text-6xl mb-16 leading-tight max-w-3xl">
              Most software companies build.<br />
              <span className="italic text-[#2D5A3D]">We architect.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans text-lg md:text-xl leading-relaxed text-[#111411]/80 font-light">
              <p>
                The gap between generic software vendors and elite engineering is measurable in scale, reliability, and business impact. Off-the-shelf products force you to adapt your operations. Inexperienced vendors build systems that collapse under load.
              </p>
              <div className="flex flex-col gap-8">
                <p ref={problemTextRef} className="flex flex-wrap gap-[0.25em]">
                  {"We approach software as critical infrastructure. Every line of code, every database query, and every interface is designed to solve complex operational challenges.".split(" ").map((word, i) => (
                    <span key={i} className="reveal-word inline-block">{word}</span>
                  ))}
                </p>
                <p>
                  We do not just take orders. We interrogate the problem space to ensure what we build is what your business actually needs to win.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. VISION */}
      <section className="py-32 bg-[#0A0A0A] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1A3D2B]/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center mb-24">
              <h2 className="font-serif text-4xl md:text-6xl mb-6">
                Software as infrastructure.<br/>
                <span className="italic font-light text-zinc-400">Not decoration.</span>
              </h2>
              <p className="font-sans text-xl text-zinc-400 font-light max-w-2xl mx-auto">
                Precision engineering, intelligent automation, and long-term thinking built into every digital product we ship.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { label: "Services", value: "14+" },
              { label: "Global Markets", value: "9" },
              { label: "Enterprise Platforms", value: "5+" },
              { label: "Founded", value: "2025" }
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-[#111411]/80 backdrop-blur-md border border-white/5 p-8 rounded-lg text-center h-full hover:border-[#2D5A3D]/50 transition-colors">
                  <div className="font-serif text-4xl md:text-5xl text-white mb-2">{stat.value}</div>
                  <div className="font-mono text-xs tracking-widest text-zinc-500 uppercase">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES */}
      <section className="py-32 bg-[#F5F0E8] text-[#111411]">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-serif text-4xl md:text-5xl mb-16">What we build.</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Cpu, title: "AI Solutions", desc: "Building intelligent systems that learn, adapt, and improve operations." },
              { icon: Terminal, title: "AI Agents", desc: "Autonomous multi-agent systems for complex business workflows." },
              { icon: Database, title: "Enterprise Software", desc: "Mission-critical platforms built for scale and reliability." },
              { icon: Layout, title: "SaaS Platforms", desc: "Full-stack cloud products from architecture to deployment." },
              { icon: Smartphone, title: "Mobile Apps", desc: "Native-quality cross-platform applications." },
              { icon: Blocks, title: "ERP Systems", desc: "Integrated enterprise resource planning tailored to operations." },
              { icon: Code2, title: "API Development", desc: "Secure, documented, high-performance API infrastructure." },
              { icon: CheckCircle2, title: "Automation", desc: "Business process automation that eliminates manual work." },
              { icon: Layout, title: "Dashboards", desc: "Real-time analytics and operational intelligence interfaces." }
            ].map((service, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="group bg-white p-8 border border-[#E5E0D8] hover:border-[#2D5A3D] transition-all duration-300 h-full hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1A3D2B]/5 cursor-default">
                  <service.icon className="w-8 h-8 text-[#2D5A3D] mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-sans font-medium text-xl mb-3">{service.title}</h3>
                  <p className="font-sans text-sm text-[#111411]/70 leading-relaxed font-light">{service.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY */}
      <section className="py-32 bg-[#0A0A0A] border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
              <h2 className="font-serif text-4xl md:text-5xl text-white">The stack that ships.</h2>
              <p className="font-mono text-sm text-zinc-500 max-w-sm">
                MODERN, SCALABLE, PRODUCTION-READY TECHNOLOGY.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-white/5 border border-white/5 p-px">
            {[
              { icon: SiReact, name: "React" },
              { icon: SiNextdotjs, name: "Next.js" },
              { icon: SiTypescript, name: "TypeScript" },
              { icon: SiNodedotjs, name: "Node.js" },
              { icon: SiPostgresql, name: "PostgreSQL" },
              { icon: SiSupabase, name: "Supabase" },
              { icon: SiPython, name: "Python" },
              { icon: Cloud, name: "AWS" },
              { icon: SiThreedotjs, name: "Three.js" },
              { icon: SiTailwindcss, name: "Tailwind" },
              { icon: SiFramer, name: "Framer" },
              { icon: SiVercel, name: "Vercel" }
            ].map((tech, i) => (
              <AnimatedSection key={i} delay={i * 0.05} className="bg-[#0A0A0A]">
                <div className="aspect-square flex flex-col items-center justify-center gap-4 group hover:bg-white/[0.02] transition-colors cursor-default">
                  <tech.icon className="w-8 h-8 text-zinc-600 group-hover:text-[#2D5A3D] transition-colors duration-300" />
                  <span className="font-mono text-[10px] text-zinc-600 group-hover:text-zinc-300 transition-colors uppercase tracking-widest">{tech.name}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEATURED WORK */}
      <section className="py-32 bg-[#F5F0E8] text-[#111411]">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="flex justify-between items-end mb-16">
              <h2 className="font-serif text-4xl md:text-5xl">Selected work.</h2>
              <Link href="/work" className="font-mono text-sm border-b border-[#111411] pb-1 hover:text-[#2D5A3D] hover:border-[#2D5A3D] transition-colors flex items-center gap-2">
                VIEW ALL <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-12">
            {[
              {
                title: "Third Place",
                category: "Mobile Application",
                year: "2025",
                desc: "Vibe-based discovery platform for coffee shops and workspaces.",
                href: "/work/third-place",
                bg: "bg-[#D9CDB8]"
              },
              {
                title: "MAK OS v1",
                category: "AI Agent Platform",
                year: "2025",
                desc: "Autonomous multi-agent B2B acquisition pipeline.",
                href: "/work/mak-os",
                bg: "bg-[#1A1A1A] text-white border border-[#333]"
              },
              {
                title: "7STAR ERP",
                category: "Enterprise Software",
                year: "2025",
                desc: "Centralized resource planning for global operations.",
                href: "/work/7star-erp",
                bg: "bg-[#2D5A3D] text-white"
              }
            ].map((work, i) => (
              <AnimatedSection key={i}>
                <Link href={work.href}>
                  <div className={`group relative p-8 md:p-16 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-end gap-8 overflow-hidden transition-transform duration-500 hover:-translate-y-2 ${work.bg}`}>
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="font-mono text-xs tracking-widest uppercase opacity-70">{work.category}</span>
                        <span className="w-1 h-1 rounded-full bg-current opacity-50" />
                        <span className="font-mono text-xs tracking-widest uppercase opacity-70">{work.year}</span>
                      </div>
                      <h3 className="font-serif text-4xl md:text-6xl mb-4">{work.title}</h3>
                      <p className="font-sans font-light text-lg opacity-80 max-w-md">{work.desc}</p>
                    </div>
                    
                    <div className="relative z-10 shrink-0">
                      <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center group-hover:scale-110 group-hover:bg-current group-hover:text-background transition-all duration-300">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PROCESS */}
      <section className="py-32 bg-[#0A0A0A] text-white relative">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-serif text-4xl md:text-5xl mb-24">How we work.</h2>
          </AnimatedSection>

          <div className="max-w-4xl relative">
            <div className="absolute left-[31px] md:left-[63px] top-0 bottom-0 w-px bg-white/10" />
            <div ref={processLineRef} className="absolute left-[31px] md:left-[63px] top-0 bottom-0 w-px bg-[#2D5A3D]" />
            
            <div className="pl-16 md:pl-32 relative">
              {[
                { num: "01", title: "Discovery", desc: "We map the problem space before writing a line of code. Understanding business constraints, technical requirements, and long-term scale." },
                { num: "02", title: "Architecture", desc: "System design and technical specification built for your scale. Database schemas, API structures, and infrastructure planning." },
                { num: "03", title: "Engineering", desc: "Precise, tested, documented code shipped in iterative sprints. Complete transparency into the development process." },
                { num: "04", title: "Launch", desc: "Deployment, monitoring, and handover to your team. Ensuring zero downtime and absolute stability." },
                { num: "05", title: "Evolution", desc: "Ongoing partnership as your business scales. System upgrades, new features, and technical advisory." }
              ].map((step, i) => (
                <AnimatedSection key={i} className="mb-20 last:mb-0 relative">
                  <div className="absolute -left-[41px] md:-left-[73px] top-1 w-5 h-5 bg-[#0A0A0A] border-2 border-[#2D5A3D] rounded-full z-10" />
                  <div className="font-mono text-[#2D5A3D] text-sm mb-4 tracking-widest">{step.num}</div>
                  <h3 className="font-serif text-2xl md:text-3xl mb-4">{step.title}</h3>
                  <p className="font-sans font-light text-zinc-400 max-w-xl text-lg leading-relaxed">{step.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. STATISTICS */}
      <section className="py-24 bg-[#F5F0E8] border-y border-[#E5E0D8]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Services", value: "14+" },
              { label: "Global Markets", value: "9" },
              { label: "Enterprise Systems", value: "5+" },
              { label: "Years Experience", value: "2+" }
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="font-serif text-5xl md:text-6xl text-[#1A3D2B] mb-2">{stat.value}</div>
                <div className="font-mono text-xs uppercase tracking-widest text-[#111411]/60">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 9. GLOBAL PRESENCE */}
      <section className="py-32 bg-[#0A0A0A] text-white">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Built for the world.</h2>
              <p className="font-sans text-xl text-zinc-400 font-light max-w-2xl mx-auto">
                Our infrastructure powers businesses across multiple continents, built to handle regional compliance, multi-currency operations, and global scale.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
            {[
              "United States", "United Kingdom", "Europe", "Japan", 
              "Singapore", "Australia", "UAE", "Saudi Arabia", "India"
            ].map((country, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="bg-[#111411] border border-white/10 px-6 py-3 rounded-full flex items-center gap-3 hover:border-[#2D5A3D] transition-colors cursor-default">
                  <div className="w-2 h-2 rounded-full bg-[#2D5A3D] animate-pulse" />
                  <span className="font-sans font-light text-sm">{country}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS */}
      <section className="py-32 bg-[#F5F0E8] text-[#111411]">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-serif text-4xl md:text-5xl mb-16 text-center">What clients say.</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "MAK delivered an ERP system in 6 weeks that our previous vendor quoted 18 months for. The quality was exceptional.",
                author: "CTO, Fintech",
                location: "Singapore"
              },
              {
                quote: "The AI agent they built automated our entire outreach pipeline. We went from 20 hours a week of manual work to zero.",
                author: "Founder, Startup",
                location: "UAE"
              },
              {
                quote: "If you need software that actually works at scale, MAK Software is the only call you need to make. True engineering partners.",
                author: "VP Engineering, Enterprise",
                location: "United Kingdom"
              }
            ].map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white p-8 md:p-10 border border-[#E5E0D8] h-full flex flex-col justify-between">
                  <div>
                    <div className="font-serif text-6xl text-[#2D5A3D] mb-4 opacity-30">"</div>
                    <p className="font-sans font-light text-lg md:text-xl leading-relaxed mb-8">
                      {t.quote}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-[#E5E0D8]">
                    <div className="font-sans font-medium text-sm">{t.author}</div>
                    <div className="font-mono text-xs text-[#111411]/60 uppercase tracking-widest mt-1">{t.location}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="py-32 bg-[#0A0A0A] text-white border-t border-white/5">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-serif text-4xl md:text-5xl mb-16 text-center">Frequently asked questions.</h2>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto divide-y divide-white/10">
            {FAQS.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <details className="group py-6">
                  <summary className="flex items-center justify-between cursor-pointer list-none font-sans text-lg md:text-xl font-light">
                    {faq.q}
                    <ChevronDown className="w-5 h-5 shrink-0 ml-4 text-zinc-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="font-sans font-light text-zinc-400 leading-relaxed mt-4 max-w-2xl">
                    {faq.a}
                  </p>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 12. CALL TO ACTION */}
      <section className="py-32 bg-[#F5F0E8] text-[#111411]">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-4xl md:text-6xl mb-6">Ready to build something exceptional?</h2>
              <p className="font-sans text-lg text-[#111411]/80 mb-12 max-w-2xl mx-auto font-light">
                Explore our <Link href="/work" className="border-b border-[#111411] hover:text-[#2D5A3D] hover:border-[#2D5A3D] transition-colors">portfolio of successful projects</Link> or <Link href="/contact" className="border-b border-[#111411] hover:text-[#2D5A3D] hover:border-[#2D5A3D] transition-colors">start your project today</Link>.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  href="/work"
                  className="bg-[#2D5A3D] text-white hover:bg-[#2D5A3D]/90 px-8 py-4 rounded-sm font-mono text-sm tracking-wider transition-all"
                >
                  VIEW PORTFOLIO
                </Link>
                <Link
                  href="/contact"
                  className="border border-[#111411] hover:bg-[#111411] hover:text-white px-8 py-4 rounded-sm font-mono text-sm tracking-wider transition-all"
                >
                  GET IN TOUCH
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 13. FOUNDER MESSAGE */}
      <section className="py-32 bg-[#0A0A0A] text-white">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto border border-white/10 p-8 md:p-16 lg:p-24 relative bg-[#111411]">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#2D5A3D]" />
              <h2 className="font-mono text-xs tracking-widest uppercase text-zinc-500 mb-12">A note from our founder</h2>
              
              <p className="font-serif text-2xl md:text-4xl leading-[1.4] font-light mb-12">
                "Every system we build starts with a question: what does the business actually need? Not what the user asked for. Not what's popular. What the business needs to grow, to scale, to win. That discipline is what separates engineering from software development. It's why our clients stay."
              </p>
              
              <div className="font-sans font-medium">The MAK Software Team</div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
