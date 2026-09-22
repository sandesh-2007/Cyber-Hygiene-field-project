import React from 'react';
import { BookOpen, Shield, KeyRound, AlertTriangle, Database } from 'lucide-react';

export const Overview: React.FC = () => {
  const academicChannels = [
    "Smartphones",
    "Laptops",
    "Email",
    "Cloud Platforms",
    "Learning Platforms (LMS)",
    "Social Media",
    "Online Academic Systems"
  ];

  return (
    <section id="about" className="py-24 bg-white border-t border-neutral-200 text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[5px] text-xs font-mono font-semibold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200">
            <BookOpen className="w-3.5 h-3.5 text-red-600" />
            <span>Project Overview</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950">
            Understanding Cyber Hygiene
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            Cyber hygiene refers to routine practices used to protect digital accounts, devices, personal information, and online activities 
            from theft, compromise, and adversarial cyber attacks.
          </p>
        </div>

        {/* Higher Education Context Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-[5px] bg-white border border-neutral-200 shadow-sm relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <h3 className="text-xl font-bold text-neutral-950 flex items-center gap-2.5">
              <Shield className="w-5 h-5 text-red-600" />
              <span>Why Cyber Hygiene is Important in Educational Environments</span>
            </h3>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-4xl">
              Modern college campuses operate as open, interconnected digital ecosystems where students and faculty regularly use 
              smartphones, laptops, institutional email, cloud repositories, and online learning platforms to exchange coursework, 
              research data, and institutional credentials.
            </p>

            <div className="pt-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 block mb-3">
                High-Frequency Digital Vectors in Academic Life:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {academicChannels.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-[5px] bg-white border border-neutral-200 text-xs text-neutral-800 hover:border-red-600/40 transition-colors shadow-xs"
                  >
                    <span className="font-mono text-red-600 font-bold">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Overview Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 01: Account Security */}
          <div className="p-8 rounded-[5px] bg-white border border-neutral-200 hover:border-red-600/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold text-red-700 px-2.5 py-1 rounded-[5px] bg-red-50 border border-red-200">
                  SECTION 01
                </span>
                <div className="w-8 h-8 rounded-[5px] bg-neutral-100 flex items-center justify-center text-neutral-600 group-hover:text-red-600 transition-colors">
                  <KeyRound className="w-4 h-4" />
                </div>
              </div>

              <h4 className="text-xl font-bold text-neutral-950 mb-2 tracking-wide">
                Account Security
              </h4>

              <p className="text-sm text-neutral-600 leading-relaxed">
                Strong passwords and secure authentication. Establishing complex, unique passphrases across institutional portals, personal emails, and social accounts while mandating Two-Factor Authentication.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 text-xs font-mono text-neutral-500">
              Focus: Password entropy, 2FA tokens, session expiration
            </div>
          </div>

          {/* Card 02: Digital Awareness */}
          <div className="p-8 rounded-[5px] bg-white border border-neutral-200 hover:border-red-600/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold text-red-700 px-2.5 py-1 rounded-[5px] bg-red-50 border border-red-200">
                  SECTION 02
                </span>
                <div className="w-8 h-8 rounded-[5px] bg-neutral-100 flex items-center justify-center text-neutral-600 group-hover:text-red-600 transition-colors">
                  <AlertTriangle className="w-4 h-4" />
                </div>
              </div>

              <h4 className="text-xl font-bold text-neutral-950 mb-2 tracking-wide">
                Digital Awareness
              </h4>

              <p className="text-sm text-neutral-600 leading-relaxed">
                Recognising phishing, scams and suspicious activity. Spotting spoofed departmental emails, deceptive scholarship grants, urgent credential reset requests, and malicious file downloads.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 text-xs font-mono text-neutral-500">
              Focus: Social engineering, URL inspection, email integrity
            </div>
          </div>

          {/* Card 03: Data Protection */}
          <div className="p-8 rounded-[5px] bg-white border border-neutral-200 hover:border-red-600/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold text-red-700 px-2.5 py-1 rounded-[5px] bg-red-50 border border-red-200">
                  SECTION 03
                </span>
                <div className="w-8 h-8 rounded-[5px] bg-neutral-100 flex items-center justify-center text-neutral-600 group-hover:text-red-600 transition-colors">
                  <Database className="w-4 h-4" />
                </div>
              </div>

              <h4 className="text-xl font-bold text-neutral-950 mb-2 tracking-wide">
                Data Protection
              </h4>

              <p className="text-sm text-neutral-600 leading-relaxed">
                Protecting personal and academic information. Safekeeping research dissertations, grading databases, student records, and ensuring continuous encrypted backups against hardware loss or ransomware.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 text-xs font-mono text-neutral-500">
              Focus: Data backups, VPN tunneling, permissions review
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


