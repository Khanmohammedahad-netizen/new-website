import React from 'react';
import { Link } from 'wouter';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import Seo, { SITE_URL } from '@/components/Seo';
import AnimatedSection from '@/components/ui/AnimatedSection';
import NotFound from '@/pages/not-found';
import { getService, SERVICES } from '@/data/services';

export default function ServiceDetail({ slug }: { slug: string }) {
  const service = getService(slug);
  if (!service) return <NotFound />;

  const path = `/services/${service.slug}`;
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      description: service.metaDescription,
      url: `${SITE_URL}${path}`,
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: ['India', 'United Arab Emirates', 'Saudi Arabia', 'United Kingdom', 'United States', 'Singapore', 'Japan', 'Australia'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: service.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];

  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#111411]">
      <Seo
        title={service.metaTitle}
        description={service.metaDescription}
        path={path}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: service.name, path },
        ]}
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="pt-40 pb-20 px-6 bg-[#0A0A0A] text-white">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <div className="font-mono text-xs tracking-widest uppercase text-[#2D5A3D] mb-6">
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span className="text-zinc-600"> / {service.name}</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl mb-8 capitalize">{service.heroTitle}.</h1>
            <p className="font-sans text-xl md:text-2xl max-w-3xl font-light text-zinc-300 leading-relaxed">
              {service.intro}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* PROBLEM / APPROACH */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16">
          <AnimatedSection>
            <h2 className="font-mono text-xs tracking-widest uppercase text-[#2D5A3D] mb-6">The Problem</h2>
            <p className="font-sans text-lg leading-relaxed font-light">{service.problem}</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-mono text-xs tracking-widest uppercase text-[#2D5A3D] mb-6">Our Approach</h2>
            <p className="font-sans text-lg leading-relaxed font-light">{service.approach}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-24 px-6 bg-white border-y border-[#E5E0D8]">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <h2 className="font-serif text-4xl md:text-5xl mb-12">What we build.</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.deliverables.map((d, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="flex gap-4 p-6 bg-[#F5F0E8] border border-[#E5E0D8] rounded-lg h-full">
                  <CheckCircle2 className="w-6 h-6 text-[#2D5A3D] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-sans font-medium text-lg mb-2">{d.title}</h3>
                    <p className="font-sans text-sm opacity-70 leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TECH */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <h2 className="font-mono text-xs tracking-widest uppercase text-[#2D5A3D] mb-8">Technology</h2>
            <div className="flex flex-wrap gap-3">
              {service.techStack.map((t) => (
                <span key={t} className="font-mono text-sm px-4 py-2 bg-white border border-[#E5E0D8] rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CASE STUDIES */}
      {service.caseStudies.length > 0 && (
        <section className="py-24 px-6 bg-[#0A0A0A] text-white">
          <div className="container mx-auto max-w-5xl">
            <AnimatedSection>
              <h2 className="font-serif text-4xl mb-12">Proof, not promises.</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.caseStudies.map((cs, i) => (
                <AnimatedSection key={cs.href} delay={i * 0.1}>
                  <Link href={cs.href}>
                    <div className="group border border-white/10 hover:border-[#2D5A3D] p-8 rounded-lg transition-colors h-full flex flex-col justify-between gap-6">
                      <div>
                        <h3 className="font-serif text-3xl mb-3">{cs.title}</h3>
                        <p className="font-sans font-light text-zinc-400">{cs.note}</p>
                      </div>
                      <span className="font-mono text-xs tracking-widest uppercase text-[#2D5A3D] flex items-center gap-2">
                        Read case study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="font-serif text-4xl mb-12">Common questions.</h2>
          </AnimatedSection>
          <div className="divide-y divide-[#E5E0D8]">
            {service.faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <details className="group py-6">
                  <summary className="flex items-center justify-between cursor-pointer list-none font-sans text-lg font-medium">
                    {faq.q}
                    <ChevronDown className="w-5 h-5 shrink-0 ml-4 opacity-50 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="font-sans font-light opacity-80 leading-relaxed mt-4">{faq.a}</p>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + RELATED */}
      <section className="py-24 px-6 bg-white border-t border-[#E5E0D8]">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Have a project in mind?</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/contact" className="bg-[#1A3D2B] hover:bg-[#2D5A3D] text-white px-8 py-4 rounded-sm font-mono text-sm tracking-wider transition-colors">
                  START A PROJECT
                </Link>
                <Link href="/work" className="border border-[#111411] hover:bg-[#111411] hover:text-white px-8 py-4 rounded-sm font-mono text-sm tracking-wider transition-colors">
                  VIEW ALL WORK
                </Link>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="pt-12 border-t border-[#E5E0D8]">
              <h3 className="font-mono text-xs tracking-widest uppercase opacity-60 mb-6">Related services</h3>
              <div className="flex flex-wrap gap-4">
                {others.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="font-sans text-sm border-b border-[#111411]/30 hover:border-[#2D5A3D] hover:text-[#2D5A3D] transition-colors pb-0.5"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
