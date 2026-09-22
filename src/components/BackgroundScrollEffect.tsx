import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

export const BackgroundScrollEffect: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Smooth springs for buttery-smooth parallax response on desktop
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001
  });

  // Parallax transformations for background decorative elements
  const bgGridY = useTransform(smoothProgress, [0, 1], ['0px', '-100px']);
  const orb1Y = useTransform(smoothProgress, [0, 1], [-40, 350]);
  const orb2Y = useTransform(smoothProgress, [0, 1], [180, -300]);
  const orb1Opacity = useTransform(smoothProgress, [0, 0.5, 1], [0.35, 0.55, 0.3]);
  const orb2Opacity = useTransform(smoothProgress, [0, 0.5, 1], [0.2, 0.45, 0.25]);

  const [percent, setPercent] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    let lastPercent = 0;
    return scrollYProgress.on('change', (latest) => {
      // Throttle percent changes by 2% steps to avoid 60-120 re-renders per second on phones
      const currentRound = Math.round(latest * 100);
      if (Math.abs(currentRound - lastPercent) >= 2) {
        lastPercent = currentRound;
        setPercent(currentRound);
      }
      
      const shouldShow = latest > 0.12;
      setShowBackToTop(prev => (prev !== shouldShow ? shouldShow : prev));
    });
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Dynamic Background Ambient Scroll Parallax Layer - Optimized for Mobile */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden will-change-transform">
        {/* Academic grid pattern */}
        <motion.div
          style={{ y: bgGridY }}
          className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:48px_48px]"
        />

        {/* Floating Ambient Parallax Glow Orbs (Desktop only - heavy blur-3xl disabled on mobile to prevent GPU lag) */}
        <motion.div
          style={{ 
            y: orb1Y, 
            opacity: orb1Opacity 
          }}
          className="hidden md:block absolute -top-20 right-[-10%] w-[480px] h-[480px] rounded-full bg-gradient-to-br from-red-600/8 to-transparent blur-3xl pointer-events-none"
        />

        <motion.div
          style={{ 
            y: orb2Y, 
            opacity: orb2Opacity 
          }}
          className="hidden md:block absolute top-[40%] -left-32 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-red-600/6 to-transparent blur-3xl pointer-events-none"
        />
      </div>

      {/* Floating Bottom-Right Scroll Indicator & Quick Return Button */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 pointer-events-auto">
        {/* Scroll percentage badge (desktop only) */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xs border border-neutral-200 dark:border-neutral-800 shadow-md text-xs font-mono font-medium text-neutral-700 dark:text-neutral-300">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          <span>Research Scroll: {percent}%</span>
        </div>

        {/* Back to top button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="px-3 py-2 bg-neutral-950 hover:bg-red-600 text-white text-xs font-mono font-bold shadow-md hover:shadow-lg transition-colors duration-150 border border-neutral-800 flex items-center justify-center group"
          >
            <span>TOP</span>
          </button>
        )}
      </div>
    </>
  );
};
