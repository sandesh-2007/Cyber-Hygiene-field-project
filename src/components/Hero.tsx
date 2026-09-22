import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  ArrowRight, 
  FileText, 
  ClipboardList, 
  Users, 
  Lock, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight, 
  Shield, 
  Sparkles 
} from 'lucide-react';
import { GOOGLE_FORM_URL } from '../data/projectData';

interface TopicImage {
  url: string;
  category: string;
  title: string;
  description: string;
}

const CYBER_TOPIC_IMAGES: TopicImage[] = [
  {
    url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
    category: "MFA & AUTHENTICATION",
    title: "Multi-Factor & Password Vaults",
    description: "Strengthening collegiate logins against credential stuffing and brute-force attacks."
  },
  {
    url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80",
    category: "PHISHING DEFENSE",
    title: "Email Scams & Social Engineering",
    description: "Detecting deceptive phishing emails, spoofed campus links, and financial aid scams."
  },
  {
    url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
    category: "NETWORK ENCRYPTION",
    title: "Public Campus Wi-Fi & VPNs",
    description: "Securing academic research transmissions across unencrypted university access points."
  },
  {
    url: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1000&q=80",
    category: "DATA PROTECTION",
    title: "Endpoint Security & Device Backups",
    description: "Automated operating system updates, local disk encryption, and ransomware safeguards."
  },
  {
    url: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1000&q=80",
    category: "ACADEMIC HYGIENE",
    title: "Faculty & Student Risk Literacy",
    description: "Assessing behavioral vulnerabilities and cultivating resilient cyber habits campus-wide."
  }
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate image every 4 seconds (4000ms)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CYBER_TOPIC_IMAGES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + CYBER_TOPIC_IMAGES.length) % CYBER_TOPIC_IMAGES.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % CYBER_TOPIC_IMAGES.length);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 cyber-grid-bg transition-colors"
    >
      {/* Subtle Ambient Red Glow Effects */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-red-500/5 dark:bg-red-600/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Action Prompts */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[5px] bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 text-xs font-mono tracking-wider uppercase text-red-700 dark:text-red-400">
              <GraduationCap className="w-3.5 h-3.5 text-red-600" />
              <span>COLLEGE FIELD PROJECT</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 dark:text-white leading-[1.12]">
              Cyber Hygiene Practices <br />
              <span className="text-red-600 dark:text-red-500">
                Among College Students
              </span> <br />
              <span className="text-neutral-950 dark:text-neutral-100">and Faculty</span>
            </h1>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed font-normal">
              A survey-based study exploring cybersecurity awareness, digital safety habits, 
              and everyday cyber hygiene practices among students and faculty.
            </p>

            {/* Call to Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              
              {/* Primary: Take the Survey */}
              <a
                id="hero-primary-cta-survey"
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[5px] font-bold text-sm tracking-wide text-white bg-red-600 hover:bg-red-700 transition-all shadow-md shadow-red-600/20 transform hover:-translate-y-0.5"
              >
                <span>Take the Survey</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary: Explore Research */}
              <a
                id="hero-secondary-cta-explore"
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[5px] font-semibold text-sm tracking-wide text-neutral-800 dark:text-neutral-200 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 hover:border-red-600 dark:hover:border-red-500 hover:text-red-600 dark:hover:text-red-400 transition-all hover:bg-neutral-50 dark:hover:bg-neutral-800 shadow-xs"
              >
                <FileText className="w-4 h-4 text-red-600" />
                <span>Explore Research</span>
              </a>
            </div>

            {/* Micro Badges / Credibility Indicators */}
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center gap-6 text-xs text-neutral-600 dark:text-neutral-400 font-mono">
              <div className="flex items-center gap-2">
                <ClipboardList className="w-3.5 h-3.5 text-red-600" />
                <span>Academic Survey Research</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-red-600" />
                <span>Students & Faculty Cohorts</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-red-600" />
                <span>Zero Personal Data Collected</span>
              </div>
            </div>

          </div>

          {/* Right Column: Auto-rotating Topic Images (4-second cycle) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Image Carousel Card Frame */}
              <div 
                className="rounded-[5px] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl dark:shadow-2xl overflow-hidden transition-all group"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Image Stage Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950">
                  {CYBER_TOPIC_IMAGES.map((item, index) => {
                    const isActive = index === currentSlide;
                    return (
                      <div
                        key={item.category}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                          isActive ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
                        }`}
                      >
                        <img
                          src={item.url}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transform transition-transform duration-7000 ease-out scale-105"
                        />
                        {/* High-contrast gradient overlay for legibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
                      </div>
                    );
                  })}

                  {/* Top Bar: Topic Category & 4s Timer Badge */}
                  <div className="absolute top-3 inset-x-3 z-20 flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[5px] bg-neutral-950/80 backdrop-blur-md border border-white/10 text-white font-mono text-[11px] font-bold tracking-wider">
                      <Shield className="w-3 h-3 text-red-500" />
                      <span>{CYBER_TOPIC_IMAGES[currentSlide].category}</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[5px] bg-red-600/90 text-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      <span>4s Rotation</span>
                    </div>
                  </div>

                  {/* Bottom Information Overlay */}
                  <div className="absolute bottom-0 inset-x-0 z-20 p-4 sm:p-5 text-white space-y-1.5">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-red-400 shrink-0" />
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug tracking-tight">
                        {CYBER_TOPIC_IMAGES[currentSlide].title}
                      </h3>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed line-clamp-2">
                      {CYBER_TOPIC_IMAGES[currentSlide].description}
                    </p>
                  </div>

                  {/* Left / Right Nav Arrows */}
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-[5px] bg-neutral-950/60 hover:bg-red-600 text-white border border-white/10 transition-colors opacity-0 group-hover:opacity-100"
                    title="Previous Slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-[5px] bg-neutral-950/60 hover:bg-red-600 text-white border border-white/10 transition-colors opacity-0 group-hover:opacity-100"
                    title="Next Slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Animated 4s Progress Bar */}
                <div className="w-full bg-neutral-200 dark:bg-neutral-800 h-1 relative overflow-hidden">
                  <div 
                    key={currentSlide}
                    className="h-full bg-red-600 transition-all duration-[4000ms] ease-linear w-full origin-left"
                    style={{
                      animation: isPaused ? 'none' : 'timerBar 4s linear infinite'
                    }}
                  />
                </div>

                {/* Card Footer: Slide Dots & Counter */}
                <div className="p-3 bg-white dark:bg-neutral-900 flex items-center justify-between font-mono text-xs border-t border-neutral-100 dark:border-neutral-800/80">
                  <div className="flex items-center gap-1.5">
                    {CYBER_TOPIC_IMAGES.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-1.5 rounded-[2px] transition-all ${
                          idx === currentSlide 
                            ? 'w-6 bg-red-600' 
                            : 'w-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400'
                        }`}
                        title={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-neutral-500 dark:text-neutral-400">
                    <span className="text-red-600 dark:text-red-500 font-bold">
                      0{currentSlide + 1}
                    </span>
                    <span>/</span>
                    <span>0{CYBER_TOPIC_IMAGES.length}</span>
                    {isPaused && (
                      <span className="text-[10px] text-neutral-400 uppercase tracking-widest pl-1">
                        [PAUSED]
                      </span>
                    )}
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};



