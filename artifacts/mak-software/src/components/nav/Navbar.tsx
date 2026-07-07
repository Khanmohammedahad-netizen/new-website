import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useTheme } from '@/lib/theme';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { name: 'Work', href: '/work' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/70 backdrop-blur-md border-b border-border py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex flex-col group" data-testid="link-home">
            <div className="flex items-center gap-2">
              <span className="font-mono font-medium text-xl tracking-tighter">MAK</span>
              <div className="w-2 h-2 bg-primary rounded-sm transition-transform duration-300 group-hover:rotate-45" />
            </div>
            <span className="font-sans text-[0.6rem] tracking-widest text-muted-foreground uppercase mt-0.5">
              Software Solutions
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-sans text-sm font-medium relative group"
                  data-testid={`link-${link.name.toLowerCase()}`}
                >
                  <span className="relative z-10 text-foreground/80 transition-colors group-hover:text-foreground">
                    {link.name}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-secondary/50 transition-colors"
                aria-label="Toggle theme"
                data-testid="button-toggle-theme"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </button>
              
              <Link 
                href="/contact" 
                className="font-mono text-xs font-medium px-4 py-2 border border-border rounded hover:border-primary hover:bg-primary/5 transition-colors"
                data-testid="link-start-project-nav"
              >
                START PROJECT
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2"
              aria-label="Toggle theme"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-background flex flex-col pt-20 px-6 pb-6"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>

            <nav className="flex flex-col gap-6 mt-12">
              <Link
                href="/"
                className="font-serif text-3xl font-medium"
              >
                Home
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-serif text-3xl font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
