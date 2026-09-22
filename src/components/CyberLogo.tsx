import React from 'react';

interface CyberLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const CyberLogo: React.FC<CyberLogoProps> = ({ 
  size = 'md', 
  showSubtitle = true,
  className = '' 
}) => {
  const isSm = size === 'sm';
  const isLg = size === 'lg';

  // Proportional stamp logo height
  const badgeHeight = isSm ? 'h-9 sm:h-10' : isLg ? 'h-14' : 'h-10 sm:h-11';

  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Authentic Stamp Logo Emblem (Rendered from uploaded image) */}
      <div className="relative flex items-center justify-center shrink-0">
        
        {/* Subtle Ambient Red Glow on Hover */}
        <div className="absolute -inset-1 bg-red-600/30 rounded-lg blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* The Exact Rubber Stamp Badge Container (0 Corner Radius) */}
        <div className={`relative ${badgeHeight} rounded-none bg-black border border-neutral-800 dark:border-neutral-700 group-hover:border-red-500 shadow-sm overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:scale-105`}>
          <img 
            src="/cyber-hygiene-logo.svg" 
            alt="Cyber Hygiene Logo" 
            className={`${badgeHeight} w-auto object-contain select-none`}
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Brand Typography & Project Identity */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span 
            className={`font-mono font-black tracking-tight text-neutral-950 dark:text-white uppercase transition-colors group-hover:text-red-600 ${
              isSm ? 'text-xs sm:text-sm' : isLg ? 'text-lg sm:text-xl' : 'text-sm sm:text-base'
            }`}
          >
            CYBER
          </span>
          <span 
            className={`font-mono font-black tracking-wider text-red-600 uppercase ${
              isSm ? 'text-xs sm:text-sm' : isLg ? 'text-lg sm:text-xl' : 'text-sm sm:text-base'
            }`}
          >
            HYGIENE
          </span>
          
          {/* Version / Academic Tag */}
          <span className="hidden sm:inline-block font-mono text-[9px] font-bold px-1.5 py-0.5 rounded-none bg-red-100 dark:bg-red-950/80 text-red-700 dark:text-red-400 border border-red-300 dark:border-red-800 ml-1">
            SEC.24
          </span>
        </div>

        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-1 font-mono tracking-widest text-neutral-500 uppercase text-[9px] sm:text-[10px]">
            <span className="text-red-600 font-semibold">
              FIELD STUDY
            </span>
            <span className="text-neutral-300 dark:text-neutral-700">|</span>
            <span className="text-neutral-600 dark:text-neutral-400">COLLEGE DEFENSE</span>
          </div>
        )}
      </div>
    </div>
  );
};

