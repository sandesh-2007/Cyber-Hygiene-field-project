import React from 'react';
import { 
  ClipboardList, 
  HelpCircle, 
  Clock, 
  ShieldCheck, 
  ExternalLink, 
  Shield 
} from 'lucide-react';
import { GOOGLE_FORM_URL } from '../data/projectData';

export const SurveyCTA: React.FC = () => {
  return (
    <section id="survey" className="py-24 bg-white border-t border-neutral-200 text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Prominent Survey Card with 5px radius */}
        <div className="p-8 sm:p-12 md:p-16 rounded-[5px] bg-white border-2 border-red-600/40 relative overflow-hidden shadow-lg">
          
          {/* Subtle Red Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10 space-y-6">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[5px] text-xs font-mono font-semibold uppercase tracking-wider text-red-700 bg-red-100/70 border border-red-300">
              <ClipboardList className="w-3.5 h-3.5 text-red-600" />
              <span>Active Field Questionnaire</span>
            </div>

            {/* Requested Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 leading-tight">
              Your Digital Habits Matter.
            </h2>

            {/* Requested Description */}
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              We are conducting this survey to understand everyday cybersecurity practices among college students 
              and faculty. Your responses will contribute to our academic field project.
            </p>

            {/* Crucial Survey Meta Info */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 font-mono text-xs sm:text-sm text-neutral-700">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-[5px] bg-white border border-neutral-200 shadow-xs">
                <HelpCircle className="w-4 h-4 text-red-600" />
                <span className="font-semibold text-neutral-900">20 Questions</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-[5px] bg-white border border-neutral-200 shadow-xs">
                <Clock className="w-4 h-4 text-red-600" />
                <span>Approximately 3–5 minutes</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-[5px] bg-white border border-neutral-200 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-red-600" />
                <span>100% Anonymous & Voluntary</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                id="cta-participate-google-forms"
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-[5px] font-extrabold text-sm sm:text-base tracking-wider uppercase text-white bg-red-600 hover:bg-red-700 transition-all shadow-lg shadow-red-600/25 hover:shadow-xl hover:shadow-red-600/35 transform hover:-translate-y-0.5"
              >
                <span>PARTICIPATE IN THE SURVEY</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Privacy & Ethical Guarantee Notice */}
            <div className="pt-6 border-t border-neutral-200 text-xs text-neutral-500 max-w-2xl flex items-start gap-2.5">
              <Shield className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-neutral-700">Ethical & Privacy Notice:</strong> This study does not collect 
                or display personal information, passwords, student IDs, or network traffic on the website. 
                Data is aggregated strictly for academic statistical analysis.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};


