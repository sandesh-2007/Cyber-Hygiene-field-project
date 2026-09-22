import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ExternalLink, 
  ArrowUp, 
  Pencil, 
  Check 
} from 'lucide-react';
import { GOOGLE_FORM_URL } from '../data/projectData';
import { CyberLogo } from './CyberLogo';

export const Footer: React.FC = () => {
  const [collegeDetails, setCollegeDetails] = useState(() => {
    const saved = localStorage.getItem('cyber_hygiene_college_footer');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return {
      collegeName: "[College / University Name]",
      academicYear: "2024–2025"
    };
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempCollege, setTempCollege] = useState(collegeDetails.collegeName);
  const [tempYear, setTempYear] = useState(collegeDetails.academicYear);

  const handleSave = () => {
    const updated = { collegeName: tempCollege, academicYear: tempYear };
    setCollegeDetails(updated);
    localStorage.setItem('cyber_hygiene_college_footer', JSON.stringify(updated));
    setIsEditing(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Objectives", href: "#objectives" },
    { label: "Methodology", href: "#methodology" },
    { label: "Take Survey", href: "#survey" },
    { label: "Findings", href: "#findings" },
    { label: "6 Hygiene Areas", href: "#areas" },
    { label: "Recommendations", href: "#recommendations" },
    { label: "Conclusion", href: "#conclusion" },
    { label: "Limitations", href: "#limitations" },
    { label: "References", href: "#references" },
    { label: "Research Team", href: "#team" }
  ];

  return (
    <footer className="bg-white border-t border-neutral-200 text-neutral-900 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-200">
          
          {/* Brand & Project Identity */}
          <div className="md:col-span-5 space-y-4">
            <CyberLogo size="md" />

            <h3 className="text-lg font-bold text-neutral-950 leading-snug">
              Cyber Hygiene Practices Among College Students and Faculty
            </h3>

            {/* Editable College Details */}
            {isEditing ? (
              <div className="space-y-2 p-3 rounded-[5px] bg-white border border-neutral-300 shadow-xs">
                <input
                  type="text"
                  value={tempCollege}
                  onChange={e => setTempCollege(e.target.value)}
                  placeholder="College Name"
                  className="w-full px-2.5 py-1 text-xs bg-white border border-neutral-300 rounded-[5px] text-neutral-900"
                />
                <input
                  type="text"
                  value={tempYear}
                  onChange={e => setTempYear(e.target.value)}
                  placeholder="Academic Year"
                  className="w-full px-2.5 py-1 text-xs bg-white border border-neutral-300 rounded-[5px] text-neutral-900"
                />
                <button
                  onClick={handleSave}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-[5px]"
                >
                  <Check className="w-3 h-3" />
                  <span>Save</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-600">
                <p>
                  College Field Project • {collegeDetails.collegeName} • {collegeDetails.academicYear}
                </p>
                <button
                  onClick={() => setIsEditing(true)}
                  className="inline-flex items-center gap-1 text-neutral-400 hover:text-red-600 text-[11px]"
                  title="Edit college name & year"
                >
                  <Pencil className="w-2.5 h-2.5" />
                  <span>Edit</span>
                </button>
              </div>
            )}

            <p className="text-xs text-neutral-600 leading-relaxed max-w-sm">
              An academic group field-project investigating everyday cybersecurity behaviors, 
              risk consciousness, and digital safety standards across campus communities.
            </p>

            <div className="pt-2">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-[5px] text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 transition-all shadow-sm"
              >
                <span>Take the Survey</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Academic Navigation */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-red-700 font-bold">
              Research Sections
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-neutral-600">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-red-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Academic Integrity & Back to Top */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-red-700 font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
              <span>Ethical Disclosure</span>
            </h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Conducted exclusively for academic research under voluntary, anonymous participant consent. 
              Zero passwords, personal identifiers, or network telemetry are gathered by this platform.
            </p>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[5px] bg-neutral-100 border border-neutral-200 text-xs font-mono text-neutral-700 hover:text-neutral-950 hover:border-neutral-300 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5 text-red-600" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <p>
            © {new Date().getFullYear()} Cyber Hygiene Field Project. Academic Research Presentation.
          </p>
          <div className="flex items-center gap-4">
            <span>White & Red Academic Theme</span>
            <span>•</span>
            <span>Google Forms Integration</span>
          </div>
        </div>

      </div>
    </footer>
  );
};


