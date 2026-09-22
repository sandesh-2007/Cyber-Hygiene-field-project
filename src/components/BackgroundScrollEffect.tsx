import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

export const BackgroundScrollEffect: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Smooth springs for buttery-smooth parallax response
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax transformations for background decorative elements
  const bgGridY = useTransform(smoothProgress, [0, 1], ['0px', '-120px']);
  const orb1Y = useTransform(smoothProgress, [0, 1], [-50, 400]);
  const orb2Y = useTransform(smoothProgress, [0, 1], [200, -350]);
  const orb1Opacity = useTransform(smoothProgress, [0, 0.5, 1], [0.35, 0.6, 0.3]);
  const orb2Opacity = useTransform(smoothProgress, [0, 0.5, 1], [0.2, 0.5, 0.25]);

  const [percent, setPercent] = React.useState(0);
  const [showBackToTop, setShowBackToTop] = React.useState(false);

  React.useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setPercent(Math.round(latest * 100));
      setShowBackToTop(latest > 0.12);
    });
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. Top Reading Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-neutral-200/50 pointer-events-none">
        <motion.div
          className="h-full bg-red-600 origin-left shadow-[0_0_10px_rgba(220,38,38,0.7)]"
          style={{ scaleX: smoothProgress }}
        />
      </div>

      {/* 2. Dynamic Background Ambient Scroll Parallax Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle academic grid pattern that scrolls at differential rate */}
        <motion.div
          style={{ y: bgGridY }}
          className="absolute inset-0 opacity-[0.4] bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:48px_48px]"
        />

        {/* Floating Ambient Parallax Glow Orb 1 (Top-Right / Mid) */}
        <motion.div
          style={{ 
            y: orb1Y, 
            opacity: orb1Opacity 
          }}
          className="absolute -top-20 right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-red-600/8 to-transparent blur-3xl pointer-events-none"
        />

        {/* Floating Ambient Parallax Glow Orb 2 (Left / Lower) */}
        <motion.div
          style={{ 
            y: orb2Y, 
            opacity: orb2Opacity 
          }}
          className="absolute top-[40%] -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-red-600/6 to-transparent blur-3xl pointer-events-none"
        />
      </div>

      {/* 3. Floating Bottom-Right Scroll Indicator & Quick Return Button */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 pointer-events-auto">
        {/* Scroll percentage badge */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-[5px] bg-white/95 backdrop-blur-xs border border-neutral-200 shadow-md text-xs font-mono font-medium text-neutral-700">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          <span>Research Scroll: {percent}%</span>
        </div>

        {/* Back to top button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="px-3 py-2 rounded-[5px] bg-neutral-950 hover:bg-red-600 text-white text-xs font-mono font-bold shadow-md hover:shadow-lg transition-all duration-200 border border-neutral-800 flex items-center justify-center group"
          >
            <span>TOP</span>
          </button>
        )}
      </div>
    </>
  );
};

