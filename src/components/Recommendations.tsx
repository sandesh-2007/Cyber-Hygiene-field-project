import React from 'react';
import { 
  Lightbulb, 
  GraduationCap, 
  KeyRound, 
  Fingerprint, 
  MailWarning, 
  RefreshCw, 
  GlobeLock, 
  Megaphone, 
  BarChart3,
  ArrowRight
} from 'lucide-react';
import { RECOMMENDATIONS, RecommendationItem } from '../data/projectData';

const recIconMap: Record<string, React.ElementType> = {
  GraduationCap,
  KeyRound,
  Fingerprint,
  MailWarning,
  RefreshCw,
  GlobeLock,
  Megaphone,
  BarChart3
};

export const Recommendations: React.FC = () => {
  return (
    <section id="recommendations" className="py-24 bg-white border-t border-neutral-200 text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[5px] text-xs font-mono font-semibold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200">
            <Lightbulb className="w-3.5 h-3.5 text-red-600" />
            <span>Institutional Roadmap</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950">
            Recommendations
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            Eight practical, institutional interventions designed to enhance cyber hygiene resilience, 
            protect academic infrastructure, and foster proactive digital safety across college environments.
          </p>
        </div>

        {/* 8 Recommendations Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RECOMMENDATIONS.map((rec: RecommendationItem) => {
            const IconComp = (rec.iconName && recIconMap[rec.iconName]) || Lightbulb;

            return (
              <div
                key={rec.number}
                className="p-6 rounded-[5px] bg-white border border-neutral-200 hover:border-red-600 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle red top border accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-red-700 px-2 py-0.5 rounded-[5px] bg-red-100/70 border border-red-200">
                      REC {rec.number}
                    </span>
                    <div className="p-1.5 rounded-[5px] bg-neutral-100 text-neutral-600 group-hover:text-red-600 transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-neutral-950 mb-2 group-hover:text-red-600 transition-colors leading-snug">
                    {rec.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-3">
                    {rec.description}
                  </p>

                  <div className="p-2.5 rounded-[5px] bg-white border border-neutral-200/80 text-[11px] text-neutral-700">
                    <span className="font-mono font-bold text-red-600 block mb-0.5">Key Action:</span>
                    <span>{rec.keyAction}</span>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-200 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <div className="flex items-center gap-1.5">
                    <ArrowRight className="w-3 h-3 text-red-600" />
                    <span>Campus Policy Strategy</span>
                  </div>
                  <span className="text-[10px] text-neutral-400">Rec {rec.number}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


