import React from 'react';
import { 
  AlertTriangle, 
  Users, 
  MessageSquareQuote, 
  BrainCircuit, 
  School, 
  Globe2, 
  Sliders 
} from 'lucide-react';
import { RESEARCH_LIMITATIONS } from '../data/projectData';

const limitIconMap: Record<string, React.ElementType> = {
  Users,
  MessageSquareQuote,
  BrainCircuit,
  School,
  Globe2,
  Sliders
};

export const Limitations: React.FC = () => {
  return (
    <section id="limitations" className="py-24 bg-white border-t border-neutral-200 text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[5px] text-xs font-mono font-semibold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200">
            <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
            <span>Methodological Transparency</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950">
            Study Limitations
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            In upholding academic candor and methodological rigor, the research team outlines the inherent scope boundaries 
            and contextual constraints of this field project.
          </p>
        </div>

        {/* 6 Limitations Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESEARCH_LIMITATIONS.map((lim) => {
            const IconComp = (lim.iconName && limitIconMap[lim.iconName]) || AlertTriangle;

            return (
              <div
                key={lim.num}
                className="p-6 rounded-[5px] bg-white border border-neutral-200 hover:border-red-600 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-red-700 px-2 py-0.5 rounded-[5px] bg-red-100/70 border border-red-200">
                      LIMITATION {lim.num}
                    </span>
                    <div className="p-1.5 rounded-[5px] bg-neutral-100 text-neutral-600 group-hover:text-red-600 transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-neutral-950 mb-2 group-hover:text-red-600 transition-colors leading-snug">
                    {lim.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {lim.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-neutral-200 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>Category: Academic Field Scope</span>
                  <span className="text-red-600 font-bold">Scope Bound</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


