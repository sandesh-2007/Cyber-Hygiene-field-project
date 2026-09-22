import React from 'react';
import { CheckCheck, Info, ExternalLink } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../data/projectData';

export const Conclusion: React.FC = () => {
  return (
    <section id="conclusion" className="py-24 bg-white border-t border-neutral-200 text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 md:p-14 rounded-[5px] bg-white border border-neutral-200 shadow-sm relative overflow-hidden">
          
          {/* Subtle Ambient Red Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[5px] text-xs font-mono font-semibold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200">
              <CheckCheck className="w-3.5 h-3.5 text-red-600" />
              <span>Academic Synthesis</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 leading-tight">
              Research Conclusion
            </h2>

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              This field project focuses on understanding everyday cybersecurity habits, awareness levels, and 
              cyber hygiene practices among college students and faculty members. 
            </p>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              In modern academic environments where personal smartphones, unmanaged laptops, cloud classrooms, and public Wi-Fi 
              intersect daily, digital resilience is fundamentally anchored in human behavior rather than perimeter software alone. 
              The survey findings from this study will serve as a concrete empirical baseline to help identify critical behavioral blind spots, 
              inform targeted campus awareness campaigns, and strengthen safer digital practices across both student and faculty cohorts.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-neutral-500">
              <Info className="w-4 h-4 text-red-600 shrink-0" />
              <span>Full empirical conclusions will be finalized upon the close of the active survey collection period.</span>
            </div>

            <div className="pt-4">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[5px] font-bold text-xs uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 transition-all shadow-md shadow-red-600/20"
              >
                <span>Contribute to the Study</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};


