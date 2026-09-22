import React from 'react';
import { 
  Target, 
  Radar, 
  KeyRound, 
  Fingerprint, 
  MailWarning, 
  Laptop, 
  GlobeLock, 
  Scale, 
  Lightbulb 
} from 'lucide-react';
import { RESEARCH_OBJECTIVES } from '../data/projectData';

const objectiveIconMap: Record<string, React.ElementType> = {
  Radar,
  KeyRound,
  Fingerprint,
  MailWarning,
  Laptop,
  GlobeLock,
  Scale,
  Lightbulb
};

export const Objectives: React.FC = () => {
  return (
    <section id="objectives" className="py-24 bg-white border-t border-neutral-200 text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[5px] text-xs font-mono font-semibold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200">
            <Target className="w-3.5 h-3.5 text-red-600" />
            <span>Research Objectives</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950">
            What Are We Studying?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            Our collegiate field study establishes eight clear academic objectives to measure, analyze, 
            and compare cyber hygiene maturity and behavioral risk patterns across campus cohorts.
          </p>
        </div>

        {/* 8 Objectives Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {RESEARCH_OBJECTIVES.map((obj) => {
            const IconComp = (obj.iconName && objectiveIconMap[obj.iconName]) || Target;

            return (
              <div
                key={obj.num}
                className="p-6 rounded-[5px] bg-white border border-neutral-200 hover:border-red-600 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle Red Top Accent Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-sm font-bold text-red-700 px-2 py-0.5 rounded-[5px] bg-red-100/70 border border-red-200">
                      {obj.num}
                    </span>
                    <div className="p-1.5 rounded-[5px] bg-neutral-100 text-neutral-600 group-hover:text-red-600 transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-neutral-950 mb-2 group-hover:text-red-600 transition-colors leading-snug">
                    {obj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {obj.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-neutral-200 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <div className="flex items-center gap-1.5">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Field Target</span>
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">
                    Obj {obj.num}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


