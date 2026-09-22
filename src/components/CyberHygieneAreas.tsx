import React from 'react';
import { 
  Shield, 
  KeyRound, 
  Fingerprint, 
  MailWarning, 
  Laptop, 
  GlobeLock, 
  Megaphone,
  CheckCircle2
} from 'lucide-react';
import { CYBER_HYGIENE_AREAS, CyberHygieneArea } from '../data/projectData';

const areaIconMap: Record<string, React.ElementType> = {
  KeyRound,
  Fingerprint,
  MailWarning,
  Laptop,
  GlobeLock,
  Megaphone
};

export const CyberHygieneAreas: React.FC = () => {
  return (
    <section id="areas" className="py-24 bg-white border-t border-neutral-200 text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[5px] text-xs font-mono font-semibold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200">
            <Shield className="w-3.5 h-3.5 text-red-600" />
            <span>Research Dimensions</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950">
            6 Cyber Hygiene Areas
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            Our assessment framework groups digital safety habits into six distinct, interconnected domains 
            addressing critical vulnerability vectors in college networks.
          </p>
        </div>

        {/* 6 Cyber Hygiene Areas Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CYBER_HYGIENE_AREAS.map((area: CyberHygieneArea) => {
            const IconComp = (area.iconName && areaIconMap[area.iconName]) || Shield;

            return (
              <div
                key={area.number}
                className="p-8 rounded-[5px] bg-white border border-neutral-200 hover:border-red-600 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle Red Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-red-700 px-2.5 py-1 rounded-[5px] bg-red-50 border border-red-200">
                      AREA {area.number}
                    </span>

                    <div className="w-8 h-8 rounded-[5px] bg-neutral-100 flex items-center justify-center text-neutral-600 group-hover:text-red-600 transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-neutral-950 mb-3 group-hover:text-red-600 transition-colors leading-snug">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {area.shortExplanation}
                  </p>

                  {/* Key Hygiene Practices Bullet List */}
                  <div className="mt-6 pt-4 border-t border-neutral-100 space-y-2">
                    <span className="text-[11px] font-mono uppercase font-bold text-neutral-500 tracking-wider block">
                      Target Habits Evaluated:
                    </span>
                    <ul className="space-y-1.5">
                      {area.keyPractices.map((practice: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                          <span>{practice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-500">
                  <span>Domain Index: {area.number} / 06</span>
                  <span className="text-red-600 font-bold">
                    Surveyed [Field]
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


