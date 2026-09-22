import React from 'react';
import { 
  Layers, 
  FileSpreadsheet, 
  Users, 
  FormInput, 
  HelpCircle, 
  Filter, 
  BarChart3,
  PenTool,
  Share2,
  CheckCircle,
  Calculator,
  FileCheck,
  Lightbulb
} from 'lucide-react';

export const Methodology: React.FC = () => {
  const methodSpecs = [
    {
      title: "RESEARCH TYPE",
      value: "Descriptive, Survey-Based Study",
      description: "Non-experimental quantitative design examining self-reported security behaviors and digital practices in real time.",
      icon: FileSpreadsheet
    },
    {
      title: "TARGET GROUP",
      value: "College Students & Faculty",
      description: "Segmented into undergraduate/postgraduate student cohorts and teaching/administrative faculty bodies.",
      icon: Users
    },
    {
      title: "DATA COLLECTION",
      value: "Google Forms Online Survey",
      description: "Administered digitally via secure institutional links, ensuring voluntary and anonymous respondent submissions.",
      icon: FormInput
    },
    {
      title: "QUESTIONNAIRE",
      value: "20 Standardized Questions",
      description: "Comprising single-choice, multiple-choice, binary (Yes/No), and 5-point Likert frequency items across 6 security areas.",
      icon: HelpCircle
    },
    {
      title: "SAMPLING METHOD",
      value: "Convenience Sampling",
      description: "Distributed across varied university faculties, technical labs, and departmental mailing lists.",
      icon: Filter
    },
    {
      title: "ANALYSIS FRAMEWORK",
      value: "Percentage, Frequency & Cohort Comparison",
      description: "Quantitative statistical synthesis comparing student versus faculty behavioral gaps across all evaluated domains.",
      icon: BarChart3
    }
  ];

  const processSteps = [
    { step: "01", name: "Survey Design", desc: "Constructing 20 targeted questions covering key cyber hygiene dimensions", icon: PenTool },
    { step: "02", name: "Data Collection", desc: "Circulating Google Forms link among college students and faculty", icon: Share2 },
    { step: "03", name: "Data Cleaning", desc: "Filtering invalid, duplicate, or incomplete response records", icon: CheckCircle },
    { step: "04", name: "Data Analysis", desc: "Calculating percentage frequencies, domain averages & cross-cohort deltas", icon: Calculator },
    { step: "05", name: "Findings", desc: "Generating empirical scorecards and visual comparison charts", icon: FileCheck },
    { step: "06", name: "Recommendations", desc: "Formulating actionable institutional awareness and policy interventions", icon: Lightbulb }
  ];

  return (
    <section id="methodology" className="py-24 bg-white border-t border-neutral-200 text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[5px] text-xs font-mono font-semibold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200">
            <Layers className="w-3.5 h-3.5 text-red-600" />
            <span>Academic Rigor</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950">
            Research Methodology
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            A structured, repeatable academic research design established to capture authentic cybersecurity habits 
            without collecting personal credentials or identifiable student information.
          </p>
        </div>

        {/* 6 Key Specifications Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {methodSpecs.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-[5px] bg-white border border-neutral-200 hover:border-red-600 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-red-700 uppercase tracking-wider">
                      {item.title}
                    </span>
                    <div className="p-1.5 rounded-[5px] bg-neutral-100 text-neutral-600 group-hover:text-red-600 transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-950 mb-2">
                    {item.value}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100 text-[11px] font-mono text-neutral-500 flex items-center gap-1.5">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Protocol Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Process Flow: Survey Design -> Data Collection -> ... -> Recommendations */}
        <div className="mt-14 p-8 rounded-[5px] bg-white border border-neutral-200 shadow-sm">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-700 block">
              Sequential Workflow
            </span>
            <h3 className="text-xl font-bold text-neutral-950 mt-1">
              Field Project Execution Pipeline
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              The continuous research lifecycle from instrument calibration through institutional delivery.
            </p>
          </div>

          {/* Desktop Process Bar */}
          <div className="hidden lg:grid grid-cols-6 gap-3 pt-4 relative">
            {processSteps.map((step) => {
              const StepIcon = step.icon;
              return (
                <div 
                  key={step.step}
                  className="p-4 rounded-[5px] bg-white border border-neutral-200 hover:border-red-600 transition-all flex flex-col justify-between relative group shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-red-700 px-2 py-0.5 rounded-[5px] bg-red-100/70 border border-red-200">
                        Step {step.step}
                      </span>
                      <StepIcon className="w-3.5 h-3.5 text-neutral-400 group-hover:text-red-600 transition-colors" />
                    </div>
                    <h4 className="text-sm font-bold text-neutral-950 mt-3 group-hover:text-red-600 transition-colors">
                      {step.name}
                    </h4>
                    <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile / Tablet Process Vertical List */}
          <div className="lg:hidden space-y-3 pt-2">
            {processSteps.map((step) => {
              const StepIcon = step.icon;
              return (
                <div 
                  key={step.step}
                  className="p-4 rounded-[5px] bg-white border border-neutral-200 flex items-start gap-4 shadow-xs"
                >
                  <div className="flex flex-col items-center gap-1.5 shrink-0">
                    <span className="font-mono text-xs font-bold text-red-700 px-2.5 py-1 rounded-[5px] bg-red-100/70 border border-red-200">
                      {step.step}
                    </span>
                    <StepIcon className="w-3.5 h-3.5 text-neutral-400" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-neutral-950">
                      {step.name}
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};


