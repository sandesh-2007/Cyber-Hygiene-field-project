import React, { useState } from 'react';
import { 
  BarChart3, 
  ShieldAlert, 
  KeyRound, 
  Wifi, 
  MailWarning, 
  HardDrive, 
  Users, 
  CheckCircle2, 
  AlertTriangle, 
  Info
} from 'lucide-react';

interface FindingMetric {
  id: string;
  category: 'auth' | 'network' | 'phishing' | 'backup';
  title: string;
  statNumber: string;
  statLabel: string;
  studentRate: number; // percentage
  facultyRate: number; // percentage
  riskLevel: 'HIGH RISK' | 'MODERATE' | 'NOTABLE GAP' | 'STRENGTH';
  riskColor: string;
  insight: string;
  implication: string;
}

const FINDINGS_DATA: FindingMetric[] = [
  {
    id: 'F1',
    category: 'auth',
    title: 'Credential Reuse Across Institutional Portals',
    statNumber: '68%',
    statLabel: 'of surveyed students reuse passwords across multiple campus & personal portals',
    studentRate: 68,
    facultyRate: 34,
    riskLevel: 'HIGH RISK',
    riskColor: 'text-red-600 bg-red-50 dark:bg-red-950/40 border-red-300 dark:border-red-900',
    insight: 'Students prioritize convenience over entropy, reusing identical passwords on LMS, personal email, and social networks.',
    implication: 'A credential leak on a secondary third-party forum directly compromises institutional student portal access.'
  },
  {
    id: 'F2',
    category: 'auth',
    title: 'Two-Factor Authentication (2FA) Adoption Divide',
    statNumber: '84%',
    statLabel: 'faculty 2FA adoption vs only 46% voluntary adoption among students',
    studentRate: 46,
    facultyRate: 84,
    riskLevel: 'NOTABLE GAP',
    riskColor: 'text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800',
    insight: 'Faculty enforce 2FA primarily due to mandatory HR/payroll compliance; student 2FA remains voluntary and underutilized.',
    implication: 'Student accounts serve as the primary soft target for campus threat actors to infiltrate institutional directory trees.'
  },
  {
    id: 'F3',
    category: 'network',
    title: 'Unsecured Campus & Public Wi-Fi Connection',
    statNumber: '73%',
    statLabel: 'connect to open public or unverified cafeteria hotspots without VPN encryption',
    studentRate: 78,
    facultyRate: 61,
    riskLevel: 'HIGH RISK',
    riskColor: 'text-red-600 bg-red-50 dark:bg-red-950/40 border-red-300 dark:border-red-900',
    insight: 'Over two-thirds of respondents disable or lack institutionally provisioned VPNs while accessing research documents on public networks.',
    implication: 'Man-in-the-middle (MitM) packet sniffing and DNS spoofing expose session tokens and unencrypted academic manuscripts.'
  },
  {
    id: 'F4',
    category: 'phishing',
    title: 'Academic Phishing & Impersonation Susceptibility',
    statNumber: '31%',
    statLabel: 'admitted to interacting with suspicious scholarship, grading, or IT urgent emails',
    studentRate: 36,
    facultyRate: 22,
    riskLevel: 'HIGH RISK',
    riskColor: 'text-red-600 bg-red-50 dark:bg-red-950/40 border-red-300 dark:border-red-900',
    insight: 'Spear-phishing emails masquerading as Dean directives, exam schedules, or library subscription renewals see highest click-through.',
    implication: 'Standard spam filters fail to intercept targeted domain-spoofed messages without rigorous human sender verification.'
  },
  {
    id: 'F5',
    category: 'backup',
    title: 'Offline & Secondary Data Backup Redundancy',
    statNumber: '59%',
    statLabel: 'rely solely on live cloud sync with zero air-gapped or offline storage copies',
    studentRate: 64,
    facultyRate: 51,
    riskLevel: 'MODERATE',
    riskColor: 'text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700',
    insight: 'Sync tools (Drive/OneDrive) are mistaken for true backups; ransomware or corrupted deletions immediately overwrite synchronized cloud mirrors.',
    implication: 'Final semester dissertations and research datasets face irrevocable loss during zero-day ransomware incidents.'
  },
  {
    id: 'F6',
    category: 'auth',
    title: 'Password Manager Utilization',
    statNumber: '22%',
    statLabel: 'regularly employ dedicated password managers (Bitwarden, 1Password, or Keychain)',
    studentRate: 18,
    facultyRate: 29,
    riskLevel: 'NOTABLE GAP',
    riskColor: 'text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800',
    insight: 'Most users rely on browser autofill or memorized variations of pet names/birth years with special symbol suffixes.',
    implication: 'Absence of randomized unique passwords allows credential-stuffing bots to brute-force accounts rapidly.'
  }
];

export const Findings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'auth' | 'network' | 'phishing' | 'backup'>('all');

  const filteredFindings = activeTab === 'all' 
    ? FINDINGS_DATA 
    : FINDINGS_DATA.filter(f => f.category === activeTab);

  return (
    <section 
      id="findings" 
      className="py-24 bg-neutral-50 dark:bg-neutral-900/60 border-t border-b border-neutral-200 dark:border-neutral-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 dark:bg-red-950/70 border border-red-300 dark:border-red-800 text-xs font-mono font-bold uppercase tracking-wider text-red-700 dark:text-red-400">
              <BarChart3 className="w-3.5 h-3.5 text-red-600" />
              <span>EMPIRICAL RESEARCH FINDINGS</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-950 dark:text-white tracking-tight">
              Survey Analysis & Key Discoveries
            </h2>
            
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Quantitative data and behavioral vulnerabilities identified from academic survey responses across students and faculty members.
            </p>
          </div>
        </div>

        {/* Highlight Executive Summary Metrics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="p-5 bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800">
            <div className="flex items-center justify-between text-neutral-500 text-xs font-mono mb-2">
              <span>CREDENTIAL REUSE</span>
              <KeyRound className="w-4 h-4 text-red-600" />
            </div>
            <div className="text-3xl font-black text-red-600 font-mono">68%</div>
            <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">Students repeat passwords</div>
          </div>

          <div className="p-5 bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800">
            <div className="flex items-center justify-between text-neutral-500 text-xs font-mono mb-2">
              <span>UNSECURED WI-FI</span>
              <Wifi className="w-4 h-4 text-amber-600" />
            </div>
            <div className="text-3xl font-black text-neutral-950 dark:text-white font-mono">73%</div>
            <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">Connect without active VPN</div>
          </div>

          <div className="p-5 bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800">
            <div className="flex items-center justify-between text-neutral-500 text-xs font-mono mb-2">
              <span>PHISHING IMPACT</span>
              <MailWarning className="w-4 h-4 text-red-600" />
            </div>
            <div className="text-3xl font-black text-red-600 font-mono">31%</div>
            <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">Susceptible to deceptive links</div>
          </div>

          <div className="p-5 bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800">
            <div className="flex items-center justify-between text-neutral-500 text-xs font-mono mb-2">
              <span>FACULTY 2FA RATE</span>
              <CheckCircle2 className="w-4 h-4 text-green-600" />
            </div>
            <div className="text-3xl font-black text-neutral-950 dark:text-white font-mono">84%</div>
            <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">Institutional 2FA compliance</div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 mr-2">Filter By:</span>
          
          {[
            { id: 'all', label: 'All Findings' },
            { id: 'auth', label: 'Passwords & 2FA' },
            { id: 'network', label: 'Wi-Fi & Networks' },
            { id: 'phishing', label: 'Phishing Resilience' },
            { id: 'backup', label: 'Data Redundancy' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-colors border ${
                activeTab === tab.id
                  ? 'bg-red-600 text-white border-red-600'
                  : 'bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-800 hover:border-red-500'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Findings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFindings.map((finding) => (
            <div 
              key={finding.id}
              className="bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 p-6 flex flex-col justify-between hover:border-red-600 transition-colors shadow-xs group"
            >
              <div>
                {/* Header: ID + Risk Level */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs font-black text-neutral-400">
                    FINDING #{finding.id}
                  </span>
                  
                  <span className={`px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider border ${finding.riskColor}`}>
                    {finding.riskLevel}
                  </span>
                </div>

                {/* Stat Highlight */}
                <div className="mb-4">
                  <div className="text-4xl font-black text-red-600 font-mono tracking-tight group-hover:scale-105 origin-left transition-transform">
                    {finding.statNumber}
                  </div>
                  <p className="text-xs font-mono text-neutral-700 dark:text-neutral-300 mt-1 leading-snug font-semibold">
                    {finding.statLabel}
                  </p>
                </div>

                {/* Finding Title */}
                <h3 className="text-base font-bold text-neutral-950 dark:text-white leading-snug mb-3">
                  {finding.title}
                </h3>

                {/* Behavioral Breakdown Comparison Bars */}
                <div className="space-y-2 py-3 border-t border-b border-neutral-100 dark:border-neutral-800/80 my-4 text-xs font-mono">
                  {/* Students Rate */}
                  <div>
                    <div className="flex justify-between text-neutral-600 dark:text-neutral-400 mb-1 text-[11px]">
                      <span>Students Affected</span>
                      <span className="font-bold text-red-600">{finding.studentRate}%</span>
                    </div>
                    <div className="w-full bg-neutral-100 dark:bg-neutral-800 h-1.5">
                      <div 
                        className="bg-red-600 h-1.5 transition-all duration-500" 
                        style={{ width: `${finding.studentRate}%` }} 
                      />
                    </div>
                  </div>

                  {/* Faculty Rate */}
                  <div>
                    <div className="flex justify-between text-neutral-600 dark:text-neutral-400 mb-1 text-[11px]">
                      <span>Faculty Affected</span>
                      <span className="font-bold text-neutral-900 dark:text-neutral-200">{finding.facultyRate}%</span>
                    </div>
                    <div className="w-full bg-neutral-100 dark:bg-neutral-800 h-1.5">
                      <div 
                        className="bg-neutral-500 dark:bg-neutral-400 h-1.5 transition-all duration-500" 
                        style={{ width: `${finding.facultyRate}%` }} 
                      />
                    </div>
                  </div>
                </div>

                {/* Context Insight */}
                <div className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  <p>
                    <strong className="text-neutral-900 dark:text-neutral-200">Behavioral Insight: </strong> 
                    {finding.insight}
                  </p>
                </div>
              </div>

              {/* Threat Implication Box */}
              <div className="mt-5 pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-start gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed">
                  <strong className="text-neutral-700 dark:text-neutral-300">Threat Implication: </strong>
                  {finding.implication}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology Note */}
        <div className="mt-12 p-4 bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-red-600 shrink-0" />
            <span>
              Sample Size: 250+ Survey Participants (Students: 72%, Faculty: 28%) across diverse academic departments.
            </span>
          </div>

          <a 
            href="#survey" 
            className="text-red-600 hover:text-red-700 font-bold underline inline-flex items-center gap-1 self-start sm:self-auto"
          >
            <span>Review Survey Questionnaire</span>
            <span>&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
};
