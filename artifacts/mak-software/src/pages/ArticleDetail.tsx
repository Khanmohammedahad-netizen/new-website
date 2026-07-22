import React from 'react';
import { Link } from 'wouter';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Seo, { SITE_URL } from '@/components/Seo';
import AnimatedSection from '@/components/ui/AnimatedSection';
import NotFound from '@/pages/not-found';
import { getArticle } from '@/data/articles';

export default function ArticleDetail({ slug }: { slug: string }) {
  const article = getArticle(slug);
  if (!article) return <NotFound />;

  const path = `/insights/${article.slug}`;
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.metaDescription,
      datePublished: article.datePublished,
      dateModified: article.dateModified,
      mainEntityOfPage: `${SITE_URL}${path}`,
      image: `${SITE_URL}/og.png`,
      author: {
        '@type': 'Person',
        name: 'Mohammed Ahad Khan',
        jobTitle: 'Founder & Lead Engineer',
        url: `${SITE_URL}/about`,
      },
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: article.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#111411]">
      <Seo
        title={article.metaTitle}
        description={article.metaDescription}
        path={path}
        ogType="article"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Insights', path: '/insights' },
          { name: article.title, path },
        ]}
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="pt-40 pb-16 px-6 bg-[#0A0A0A] text-white">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection>
            <div className="flex flex-wrap items-center gap-4 mb-8 font-mono text-xs tracking-widest uppercase text-zinc-500">
              <Link href="/insights" className="text-[#2D5A3D] hover:text-white transition-colors">Insights</Link>
              <span className="w-1 h-1 rounded-full bg-current" />
              <span>{article.category}</span>
              <span className="w-1 h-1 rounded-full bg-current" />
              <time dateTime={article.datePublished}>{article.datePublished}</time>
              <span className="w-1 h-1 rounded-full bg-current" />
              <span>{article.readMinutes} min read</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">{article.title}</h1>
            <p className="font-sans text-xl font-light text-zinc-300 leading-relaxed">{article.intro}</p>
            <div className="mt-8 pt-8 border-t border-white/10 font-sans text-sm text-zinc-400">
              By <Link href="/about" className="text-white border-b border-white/30 hover:text-[#2D5A3D] hover:border-[#2D5A3D] transition-colors">Mohammed Ahad Khan</Link>, Founder &amp; Lead Engineer
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* BODY */}
      <article className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          {article.sections.map((section, i) => (
            <AnimatedSection key={i} delay={Math.min(i * 0.05, 0.2)}>
              <section className="mb-16">
                <h2 className="font-serif text-3xl md:text-4xl mb-6">{section.heading}</h2>
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="font-sans text-lg font-light leading-relaxed mb-6 opacity-90">
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="space-y-4 mt-2">
                    {section.list.map((item, k) => (
                      <li key={k} className="bg-white border border-[#E5E0D8] rounded-lg p-6">
                        <h3 className="font-sans font-medium text-lg mb-2">{item.title}</h3>
                        <p className="font-sans text-sm font-light opacity-75 leading-relaxed">{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </AnimatedSection>
          ))}

          {/* FAQ */}
          <AnimatedSection>
            <section className="mb-16 pt-8 border-t border-[#E5E0D8]">
              <h2 className="font-serif text-3xl mb-8">Questions we hear</h2>
              <div className="divide-y divide-[#E5E0D8]">
                {article.faqs.map((faq, i) => (
                  <details key={i} className="group py-5">
                    <summary className="flex items-center justify-between cursor-pointer list-none font-sans text-lg font-medium">
                      {faq.q}
                      <ChevronDown className="w-5 h-5 shrink-0 ml-4 opacity-50 transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="font-sans font-light opacity-80 leading-relaxed mt-4">{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>
          </AnimatedSection>

          {/* RELATED */}
          <AnimatedSection>
            <section className="bg-[#0A0A0A] text-white rounded-xl p-8 md:p-12">
              <h2 className="font-mono text-xs tracking-widest uppercase text-[#2D5A3D] mb-6">Go deeper</h2>
              <ul className="space-y-4">
                {article.related.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className="group font-sans text-lg font-light flex items-center gap-3 hover:text-[#2D5A3D] transition-colors">
                      {r.label}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-10 pt-8 border-t border-white/10">
                <Link href="/contact" className="inline-block bg-[#2D5A3D] hover:bg-[#2D5A3D]/80 text-white px-8 py-4 rounded-sm font-mono text-sm tracking-wider transition-colors">
                  DISCUSS YOUR PROJECT
                </Link>
              </div>
            </section>
          </AnimatedSection>
        </div>
      </article>
    </div>
  );
}
