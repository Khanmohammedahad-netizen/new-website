import React from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import Seo from '@/components/Seo';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { ARTICLES } from '@/data/articles';

export default function Insights() {
  return (
    <div className="pt-32 pb-32 min-h-screen bg-background">
      <Seo
        title="Insights - AI, ERP & Software Engineering Guides | MAK Software Solutions"
        description="Practical engineering guides from shipped projects: AI agents, LLM costs, custom ERP economics, and B2B automation - written by the team that builds them."
        path="/insights"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Insights', path: '/insights' },
        ]}
      />

      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="max-w-3xl mb-24">
            <h1 className="font-serif text-5xl md:text-7xl mb-6">Insights.</h1>
            <p className="font-sans text-xl text-muted-foreground font-light">
              Working notes from systems we actually ship: AI agents, LLM economics, enterprise
              software decisions. No filler - every piece comes from production experience.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ARTICLES.map((article, i) => (
            <AnimatedSection key={article.slug} delay={i * 0.08}>
              <Link href={`/insights/${article.slug}`}>
                <article className="group relative p-8 md:p-10 rounded-xl border border-border hover:border-[#2D5A3D] flex flex-col justify-between min-h-[300px] transition-all duration-300 hover:-translate-y-1">
                  <div>
                    <div className="flex items-center gap-4 mb-6 font-mono text-xs tracking-widest uppercase text-muted-foreground">
                      <span className="text-[#2D5A3D]">{article.category}</span>
                      <span className="w-1 h-1 rounded-full bg-current" />
                      <time dateTime={article.datePublished}>{article.datePublished}</time>
                      <span className="w-1 h-1 rounded-full bg-current" />
                      <span>{article.readMinutes} min</span>
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl mb-4 leading-snug">{article.title}</h2>
                    <p className="font-sans font-light text-muted-foreground line-clamp-3">
                      {article.metaDescription}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-8">
                    <span className="font-mono text-xs tracking-widest uppercase text-[#2D5A3D]">Read article</span>
                    <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center group-hover:bg-[#2D5A3D] group-hover:border-[#2D5A3D] group-hover:text-white transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </article>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
