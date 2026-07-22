import React from 'react';
import { Link } from 'wouter';
import Seo, { SITE_URL } from '@/components/Seo';
import AnimatedSection from '@/components/ui/AnimatedSection';

const ABOUT_JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About MAK Software Solutions',
    url: `${SITE_URL}/about`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mohammed Ahad Khan',
    jobTitle: 'Founder & Lead Engineer',
    worksFor: { '@id': `${SITE_URL}/#organization` },
    url: `${SITE_URL}/about`,
  },
];

const PRINCIPLES = [
  {
    title: 'Architecture before code',
    desc: 'Every system starts with the problem space mapped: constraints, scale targets, failure modes. Code written before that is code rewritten later.',
  },
  {
    title: 'Ship in weeks, iterate for years',
    desc: 'First working release in weeks — then the system grows against real usage. Long planning phases are where projects go to die.',
  },
  {
    title: 'AI where it earns its place',
    desc: 'We build AI-first, not AI-everywhere. Models get deployed where judgment is needed; deterministic code everywhere it wins on cost and reliability.',
  },
  {
    title: 'Small team, senior hands',
    desc: 'No account managers, no handoffs to juniors. The engineers who scope your system build your system.',
  },
];

const MILESTONES = [
  { year: '2024', event: 'First platform builds: LeadMine AI lead intelligence and the shared SaaS ecosystem architecture.' },
  { year: '2025', event: 'MAK Software Solutions founded in Hyderabad. MAK OS autonomous agent pipeline, 7STAR ERP, and Third Place ship the same year.' },
  { year: '2026', event: 'Serving clients across India, the Gulf, and Europe with AI, ERP, and SaaS engineering.' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#111411]">
      <Seo
        title="About Us — Founder-Led Engineering Studio | MAK Software Solutions"
        description="MAK Software Solutions is a founder-led software engineering studio in Hyderabad, India, building AI systems, ERP platforms, and SaaS products for clients across India, UAE, UK, and USA."
        path="/about"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ]}
        jsonLd={ABOUT_JSON_LD}
      />

      {/* HERO */}
      <section className="pt-40 pb-20 px-6 bg-[#0A0A0A] text-white">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <h1 className="font-serif text-5xl md:text-7xl mb-8">
              Engineering studio.<br />
              <span className="italic font-light text-zinc-400">Founder-led, by design.</span>
            </h1>
            <p className="font-sans text-xl md:text-2xl max-w-3xl font-light text-zinc-300 leading-relaxed">
              MAK Software Solutions is a software engineering studio based in Hyderabad, India,
              building AI systems, enterprise platforms, and SaaS products for clients across
              India, the Gulf, the UK, and beyond.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="font-mono text-xs tracking-widest uppercase text-[#2D5A3D] mb-8">Why we exist</h2>
            <div className="font-sans text-lg md:text-xl leading-relaxed font-light space-y-6">
              <p>
                Most software agencies sell hours. The incentive is to make projects longer, teams
                bigger, and change orders frequent. We built MAK around the opposite bet: small
                senior teams, systems architected properly the first time, and delivery measured in
                weeks.
              </p>
              <p>
                The studio is founder-led by <strong className="font-medium">Mohammed Ahad Khan</strong>,
                who architects and builds alongside the team on every engagement. That means the
                person who scopes your system is the person accountable for it running in
                production — no telephone game between sales, management, and engineering.
              </p>
              <p>
                We are AI-first because we use this technology on ourselves. Our own operations run
                on the agent systems we sell — <Link href="/work/mak-os" className="border-b border-[#111411]/40 hover:text-[#2D5A3D] hover:border-[#2D5A3D] transition-colors">MAK OS</Link> handles
                our B2B pipeline autonomously. When we tell you what AI can and cannot do for your
                business, it comes from operating it, not reading about it.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="py-24 px-6 bg-white border-y border-[#E5E0D8]">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <h2 className="font-serif text-4xl md:text-5xl mb-12">How we work.</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRINCIPLES.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="p-8 bg-[#F5F0E8] border border-[#E5E0D8] rounded-lg h-full">
                  <div className="font-mono text-[#2D5A3D] text-sm mb-4">0{i + 1}</div>
                  <h3 className="font-sans font-medium text-xl mb-3">{p.title}</h3>
                  <p className="font-sans text-sm opacity-70 leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="font-serif text-4xl mb-16">The short history.</h2>
          </AnimatedSection>
          <div className="space-y-12">
            {MILESTONES.map((m, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex gap-8 items-start">
                  <span className="font-mono text-[#2D5A3D] text-sm tracking-widest shrink-0 pt-1">{m.year}</span>
                  <p className="font-sans text-lg font-light leading-relaxed">{m.event}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#0A0A0A] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">See the work, then decide.</h2>
            <p className="font-sans text-lg text-zinc-400 font-light mb-10 max-w-2xl mx-auto">
              Five shipped platforms tell the story better than any about page.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/work" className="bg-[#2D5A3D] hover:bg-[#2D5A3D]/80 text-white px-8 py-4 rounded-sm font-mono text-sm tracking-wider transition-colors">
                VIEW CASE STUDIES
              </Link>
              <Link href="/contact" className="border border-white/30 hover:border-white px-8 py-4 rounded-sm font-mono text-sm tracking-wider transition-colors">
                START A CONVERSATION
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
