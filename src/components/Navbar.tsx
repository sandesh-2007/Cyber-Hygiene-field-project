import React, { useState, useEffect } from 'react';
import { ExternalLink, Menu, X } from 'lucide-react';
import { CyberLogo } from './CyberLogo';
import { ThemeToggle } from './ThemeToggle';
import { GOOGLE_FORM_URL } from '../data/projectData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;
    let lastProgress = 0;

    // Cache section elements and offsets to avoid layout thrashing on every touch scroll frame
    let cachedSections: { id: string; top: number; height: number }[] = [];
    const measureSections = () => {
      const sections = [
        'home', 'about', 'objectives', 'methodology', 
        'survey', 'findings', 'areas', 
        'recommendations', 'team'
      ];
      cachedSections = sections
        .map(id => {
          const el = document.getElementById(id);
          return el ? { id, top: el.offsetTop, height: el.offsetHeight } : null;
        })
        .filter(Boolean) as { id: string; top: number; height: number }[];
    };

    measureSections();

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const nextScrolled = currentY > 20;
          setIsScrolled(prev => (prev !== nextScrolled ? nextScrolled : prev));

          const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
          if (totalScroll > 0) {
            const currentProgress = (currentY / totalScroll) * 100;
            if (Math.abs(currentProgress - lastProgress) >= 0.5) {
              lastProgress = currentProgress;
              setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
            }
          }

          const scrollPos = currentY + 120;
          for (const s of cachedSections) {
            if (scrollPos >= s.top && scrollPos < s.top + s.height) {
              setActiveSection(prev => (prev !== s.id ? s.id : prev));
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', measureSections, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', measureSections);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Objectives', href: '#objectives' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'Survey', href: '#survey' },
    { name: 'Findings', href: '#findings' },
    { name: 'Recommendations', href: '#recommendations' },
    { name: 'Team', href: '#team' },
  ];

  return (
    <header 
      id="main-nav-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 shadow-sm py-3' 
          : 'bg-white/85 dark:bg-neutral-950/85 backdrop-blur-sm border-b border-neutral-150 dark:border-neutral-800/80 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Project Logo: High-Tech Cyber Security Emblem */}
          <a 
            href="#home" 
            className="flex items-center group focus:outline-none"
            aria-label="Cyber Hygiene Field Project Home"
          >
            <CyberLogo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-xs font-medium tracking-wide">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 transition-colors ${
                    isActive 
                      ? 'text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 font-bold shadow-xs' 
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Dark Mode Toggle + Red outlined CTA Button */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Dark Mode Button */}
            <ThemeToggle showLabel={true} id="navbar-theme-toggle" />

            {/* Red outlined CTA Button: "TAKE THE SURVEY" */}
            <a
              id="nav-cta-take-survey"
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold tracking-wider uppercase text-red-600 bg-white dark:bg-neutral-950 border border-red-600 hover:bg-red-600 hover:text-white transition-all shadow-xs hover:shadow-sm"
            >
              <span>TAKE THE SURVEY</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Dark Mode Toggle on Mobile */}
            <ThemeToggle id="navbar-mobile-theme-toggle" />

            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden px-2.5 py-1.5 text-[11px] font-bold uppercase text-red-600 bg-red-50 dark:bg-red-950/50 border border-red-600 flex items-center gap-1"
            >
              <span>Survey</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white border border-neutral-200 dark:border-neutral-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Dynamic Scroll Progress Bar along Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-transparent pointer-events-none overflow-hidden">
        <div 
          className="h-full bg-red-600 dark:bg-red-500 transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 px-4 pt-3 pb-6 space-y-3 animate-fade-in shadow-xl">
          <div className="grid grid-cols-2 gap-1.5 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Theme Toggle Row */}
          <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
            <span className="text-xs font-mono text-neutral-600 dark:text-neutral-400">Theme Mode:</span>
            <ThemeToggle showLabel={true} id="drawer-theme-toggle" />
          </div>

          <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 shadow-sm"
            >
              <span>TAKE THE SURVEY</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
