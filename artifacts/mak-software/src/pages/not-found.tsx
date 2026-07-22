import React from 'react';
import { Link } from 'wouter';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-background text-foreground">
      <Helmet>
        <title>Page Not Found | MAK Software Solutions</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="text-center px-6">
        <h1 className="text-8xl font-serif mb-4">404</h1>
        <p className="font-mono tracking-widest uppercase text-muted-foreground mb-8">Page Not Found</p>
        <div className="flex flex-wrap items-center justify-center gap-6 font-sans text-sm">
          <Link href="/" className="border-b border-current hover:text-[#2D5A3D] transition-colors">Back to home</Link>
          <Link href="/work" className="border-b border-current hover:text-[#2D5A3D] transition-colors">View our work</Link>
          <Link href="/contact" className="border-b border-current hover:text-[#2D5A3D] transition-colors">Contact us</Link>
        </div>
      </div>
    </div>
  );
}
