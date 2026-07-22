import React from 'react';
import Seo from '@/components/Seo';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Map, Users, Compass, Zap } from 'lucide-react';

export default function ThirdPlace() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#111411]">
      <Seo
        title="Third Place Case Study — Vibe-Based Discovery App | MAK Software Solutions"
        description="How MAK Software Solutions built Third Place, a vibe-based mobile discovery platform for coffee shops and workspaces with Mapbox maps, real-time occupancy, and AI vibe matching."
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
              <span className="font-mono text-xs tracking-widest uppercase">2025</span>
              <span className="w-1 h-1 rounded-full bg-[#111411]" />
              <span className="font-mono text-xs tracking-widest uppercase">Mobile Application</span>
            </div>
            <h1 className="font-serif text-6xl md:text-8xl mb-8">Third Place</h1>
            <p className="font-sans text-xl md:text-2xl max-w-2xl font-light opacity-80 mb-8">
              A vibe-based discovery platform connecting remote workers with the perfect environments.
            </p>
            <a
              href="https://the3rdplace.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block border border-[#111411] hover:bg-[#111411] hover:text-[#F5F0E8] px-6 py-3 rounded-sm font-mono text-xs tracking-widest uppercase transition-colors"
            >
              Visit Live Site →
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
                Standard mapping apps rely on star ratings, which fail to capture the nuance of a space. A 4.5 star rating doesn't tell you if a coffee shop has fast WiFi, comfortable seating, or the right ambient noise level for deep work.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h2 className="font-mono text-xs tracking-widest uppercase text-[#2D5A3D] mb-6">The Solution</h2>
              <p className="font-sans text-xl leading-relaxed font-light">
                We engineered a "Vibe DNA" system. A native mobile experience that categorizes spaces by mood, noise level, seating availability, and specific amenities tailored for the modern remote workforce.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <h2 className="font-serif text-4xl mb-12">Core Architecture</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Map, title: "Mapbox Integration", desc: "Custom-styled maps matching the app's organic aesthetic." },
                { icon: Users, title: "Real-time Occupancy", desc: "Live crowd-sourced data on seat availability." },
                { icon: Compass, title: "Vibe Matching AI", desc: "Recommendation engine based on past preferences." },
                { icon: Zap, title: "Live Check-ins", desc: "Ephemeral social mechanics for serendipitous networking." }
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
    </div>
  );
}
