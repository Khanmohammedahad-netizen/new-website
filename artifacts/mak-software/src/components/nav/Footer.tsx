import React from 'react';
import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex flex-col group mb-6 inline-block" data-testid="link-footer-home">
              <div className="flex items-center gap-2">
                <span className="font-mono font-medium text-2xl tracking-tighter">MAK</span>
                <div className="w-2.5 h-2.5 bg-primary rounded-sm" />
              </div>
              <span className="font-sans text-[0.65rem] tracking-widest text-muted-foreground uppercase mt-1">
                Software Solutions
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm font-sans text-sm leading-relaxed">
              Elite global engineering firm building software that scales. 
              We architect digital businesses, enterprise systems, and intelligent platforms.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono text-sm tracking-wider uppercase mb-6">Work</h4>
            <ul className="flex flex-col gap-3 font-sans text-sm">
              <li><Link href="/work/mak-os" className="text-muted-foreground hover:text-foreground transition-colors">MAK OS v1</Link></li>
              <li><Link href="/work/7star-erp" className="text-muted-foreground hover:text-foreground transition-colors">7STAR ERP</Link></li>
              <li><Link href="/work/third-place" className="text-muted-foreground hover:text-foreground transition-colors">Third Place</Link></li>
              <li><Link href="/work/leadmine-ai" className="text-muted-foreground hover:text-foreground transition-colors">LeadMine AI</Link></li>
              <li><Link href="/work/saas-ecosystem" className="text-muted-foreground hover:text-foreground transition-colors">SaaS Ecosystem</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-sm tracking-wider uppercase mb-6">Connect</h4>
            <ul className="flex flex-col gap-3 font-sans text-sm">
              <li>
                <a href="https://wa.me/917702448705" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            &copy; {currentYear} MAK Software Solutions. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground font-mono">
            <span>Global Operations</span>
            <span>Est. 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
