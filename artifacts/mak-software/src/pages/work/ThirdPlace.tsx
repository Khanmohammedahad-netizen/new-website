import React from 'react';
import Seo from '@/components/Seo';
import CaseStudyFooter from '@/components/CaseStudyFooter';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Map, Users, Compass, Zap } from 'lucide-react';

export default function ThirdPlace() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#111411]">
      <Seo
        title="Third Place Case Study - Café Discovery App for Hyderabad | MAK Software Solutions"
        description="How MAK Software Solutions built Third Place, a café-discovery platform for Hyderabad: a React Native consumer app, a Café OS operator dashboard, and a live Mapbox map on one Supabase backend."
        path="/work/third-place"
        ogType="article"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Work', path: '/work' },
          { name: 'Third Place', path: '/work/third-place' },
        ]}
      />

      {/* HERO */}
      <section className="pt-40 pb-20 px-6 bg-[#D9CDB8]">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-xs tracking-widest uppercase">2025-26</span>
              <span className="w-1 h-1 rounded-full bg-[#111411]" />
              <span className="font-mono text-xs tracking-widest uppercase">Mobile App + Operator Platform</span>
            </div>
            <h1 className="font-serif text-6xl md:text-8xl mb-8">Third Place</h1>
            <p className="font-sans text-xl md:text-2xl max-w-2xl font-light opacity-80 mb-8">
              A café-discovery platform for Hyderabad, built as three connected products. In
              pre-launch toward its first city cohort.
            </p>
            <a
              href="https://the3rdplaceapp.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block border border-[#111411] hover:bg-[#111411] hover:text-[#F5F0E8] px-6 py-3 rounded-sm font-mono text-xs tracking-widest uppercase transition-colors"
            >
              Visit the3rdplaceapp.com
            </a>
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
                Star ratings don't tell you whether a café is a good place to work or meet right now.
                And café owners have no simple way to reach the people nearby who are looking for
                exactly what they offer.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h2 className="font-mono text-xs tracking-widest uppercase text-[#2D5A3D] mb-6">The Solution</h2>
              <p className="font-sans text-xl leading-relaxed font-light">
                Three connected products on one backend: a consumer mobile app for finding places to
                work or meet, a Café OS dashboard for operators to run deals and check-ins, and a live
                map of what's happening right now. The same pattern powers most consumer apps:
                customer app, business dashboard and real-time location data.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <h2 className="font-serif text-4xl mb-12">Core Architecture</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Compass, title: "Consumer App", desc: "React Native app for finding cafés to work or meet in." },
                { icon: Users, title: "Café OS", desc: "Next.js dashboard where operators run deals and check-ins." },
                { icon: Map, title: "Live Map", desc: "Mapbox map showing what's happening right now." },
                { icon: Zap, title: "One Backend", desc: "Supabase with PostGIS for real-time location data." }
              ].map((feature, i) => (
                <div key={i} className="bg-white p-8 border border-[#E5E0D8] rounded-lg">
                  <feature.icon className="w-8 h-8 text-[#D9CDB8] mb-6" />
                  <h3 className="font-sans font-medium text-lg mb-3">{feature.title}</h3>
                  <p className="font-sans text-sm opacity-70">{feature.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
      <CaseStudyFooter current="third-place" />
    </div>
  );
}
