import React from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import Seo from '@/components/Seo';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { SERVICES } from '@/data/services';

export default function Services() {
  return (
    <div className="pt-32 pb-32 min-h-screen bg-background">
      <Seo
        title="Software Development Services | MAK Software Solutions"
        description="AI development, custom ERP and CRM, mobile apps, business automation, and SaaS platforms - engineering services from MAK Software Solutions for India, UAE, UK, and USA."
        path="/services"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ]}
      />

      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="max-w-3xl mb-24">
            <h1 className="font-serif text-5xl md:text-7xl mb-6">Services.</h1>
            <p className="font-sans text-xl text-muted-foreground font-light">
              Six disciplines, one standard: software engineered around how your business actually
              operates. Every engagement starts with the problem, not the tech.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, i) => (
            <AnimatedSection key={service.slug} delay={i * 0.08}>
              <Link href={`/services/${service.slug}`}>
                <div className="group relative p-8 md:p-12 rounded-xl border border-border hover:border-[#2D5A3D] flex flex-col justify-between min-h-[260px] transition-all duration-300 hover:-translate-y-1">
                  <div>
                    <h2 className="font-serif text-3xl md:text-4xl mb-4">{service.name}</h2>
                    <p className="font-sans font-light text-lg text-muted-foreground max-w-md">
                      {service.tagline}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-8">
                    <span className="font-mono text-xs tracking-widest uppercase text-[#2D5A3D]">
                      Learn more
                    </span>
                    <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center group-hover:bg-[#2D5A3D] group-hover:border-[#2D5A3D] group-hover:text-white transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="mt-24 text-center">
            <p className="font-sans text-lg text-muted-foreground font-light mb-8">
              Not sure which fits? Describe the problem - we'll tell you what it takes.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#1A3D2B] hover:bg-[#2D5A3D] text-white px-8 py-4 rounded-sm font-mono text-sm tracking-wider transition-colors"
            >
              TALK TO AN ENGINEER
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
