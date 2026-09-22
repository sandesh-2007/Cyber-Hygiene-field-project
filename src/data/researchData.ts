/**
 * Research Data Store & Benchmarks
 * Topic: Cyber Hygiene Practices Among College Students and Faculty
 * 
 * NOTE: Initial values represent a normalized benchmark DEMO DATASET
 * designed to be replaced by real Google Forms / CSV institutional data.
 */

import { CyberHygieneCategory, ResearchDataset, ResearchObjective, ResearchReference, SurveyQuestion, TeamMember } from '../types/research';

export const INITIAL_RESEARCH_DATA: ResearchDataset = {
  isDemoData: true,
  lastUpdated: "Academic Term 2025-2026",
  institutionalScope: "Higher Education Multi-Department Sample (Benchmark Demo)",
  stats: {
    totalResponses: 482,
    studentResponses: 364,
    facultyResponses: 118,
    surveyQuestions: 18,
    categoriesCount: 6,
    overallHygieneScore: 68.4,
    studentHygieneScore: 64.6,
    facultyHygieneScore: 79.8,
  },
  categories: [
    {
      id: "cat-1",
      number: "01",
      title: "Password & Account Security",
      shortDescription: "Evaluates password complexity, unique password creation habits, and credential reuse across personal and institutional accounts.",
      fullExplanation: "Account security forms the first line of defense in campus cyber hygiene. Weak, shared, or recycled passwords across academic portals, email, and external services present significant credential stuffing risks. This category assesses user habits regarding unique passwords, password managers, and multi-factor authentication (2FA/MFA) adoption.",
      icon: "Lock",
      studentScore: 58.2,
      facultyScore: 78.4,
      overallScore: 63.1,
      vulnerabilityLevel: "High",
      keyQuestionsCount: 3,
      subMetrics: [
        { name: "Uses Unique Passwords for Important Accounts", studentPct: 46.2, facultyPct: 76.3 },
        { name: "Active Two-Factor Authentication (2FA)", studentPct: 62.4, facultyPct: 88.1 },
        { name: "Avoids Sharing OTPs / Passwords with Peers", studentPct: 74.5, facultyPct: 94.2 }
      ]
    },
    {
      id: "cat-2",
      number: "02",
      title: "Phishing & Social Engineering Awareness",
      shortDescription: "Measures ability to recognize deceptive emails, fake academic alerts, malicious links, and social engineering lures.",
      fullExplanation: "Higher education environments are prime targets for spear-phishing, fake job offers targeting students, and fake dean/grant notifications targeting faculty. This module tests whether participants verify sender domains, scrutinize embedded links, and know how to differentiate genuine college communications from forged lures.",
      icon: "AlertTriangle",
      studentScore: 63.8,
      facultyScore: 82.5,
      overallScore: 68.4,
      vulnerabilityLevel: "Moderate",
      keyQuestionsCount: 3,
      subMetrics: [
        { name: "Verifies URLs / Sender Before Clicking", studentPct: 61.3, facultyPct: 83.9 },
        { name: "Confident in Identifying Phishing Emails", studentPct: 58.0, facultyPct: 79.7 },
        { name: "Checks for Urgent/Coercive Psychological Triggers", studentPct: 54.1, facultyPct: 76.3 }
      ]
    },
    {
      id: "cat-3",
      number: "03",
      title: "Device & Software Security",
      shortDescription: "Assesses operating system updates, screen locking, anti-malware habits, and software installation from untrusted sources.",
      fullExplanation: "Bring Your Own Device (BYOD) is ubiquitous in colleges. Unpatched operating systems, pirated or cracked academic software, and unlocked devices left unattended in campus libraries expose both personal and institutional subnets to exploits. This category inspects patch management, lock screens, and source verification.",
      icon: "Laptop",
      studentScore: 74.6,
      facultyScore: 84.1,
      overallScore: 76.9,
      vulnerabilityLevel: "Low",
      keyQuestionsCount: 3,
      subMetrics: [
        { name: "Regularly Updates OS and Applications", studentPct: 69.8, facultyPct: 82.2 },
        { name: "Installs Software Exclusively from Trusted Sources", studentPct: 71.4, facultyPct: 89.0 },
        { name: "Consistently Uses Screen Lock with PIN/Biometrics", studentPct: 88.5, facultyPct: 92.4 }
      ]
    },
    {
      id: "cat-4",
      number: "04",
      title: "Data Privacy & Safe Sharing",
      shortDescription: "Evaluates mobile app permissions auditing, cloud storage access controls, backup frequency, and sensitive data leakage.",
      fullExplanation: "College participants frequently collaborate via cloud storage, mobile applications, and shared drives. Inappropriate access permissions, unchecked smartphone camera/microphone grants, and failure to maintain cold or cloud backups risk permanent research loss or accidental PII dissemination.",
      icon: "ShieldCheck",
      studentScore: 59.4,
      facultyScore: 74.8,
      overallScore: 63.2,
      vulnerabilityLevel: "High",
      keyQuestionsCount: 3,
      subMetrics: [
        { name: "Regularly Audits Mobile App Permissions", studentPct: 48.6, facultyPct: 64.4 },
        { name: "Performs Routine Backups of Critical Files", studentPct: 52.2, facultyPct: 78.8 },
        { name: "Restricts Public Sharing on Cloud Academic Drives", studentPct: 64.0, facultyPct: 81.4 }
      ]
    },
    {
      id: "cat-5",
      number: "05",
      title: "Network & Internet Safety",
      shortDescription: "Studies public Wi-Fi behavior, campus VPN utilization, HTTPS inspection, and avoidance of unprotected public networks.",
      fullExplanation: "Campus Wi-Fi and off-campus cafes host thousands of unencrypted connections. Connecting to untrusted public Wi-Fi without VPN encryption or conducting sensitive financial/academic tasks on open hotspots exposes sessions to Man-in-the-Middle (MitM) attacks and packet sniffing.",
      icon: "Wifi",
      studentScore: 60.1,
      facultyScore: 76.0,
      overallScore: 64.0,
      vulnerabilityLevel: "Moderate",
      keyQuestionsCount: 3,
      subMetrics: [
        { name: "Avoids Sensitive Activities on Unsecured Public Wi-Fi", studentPct: 51.4, facultyPct: 73.7 },
        { name: "Uses VPN or Secure Tunnels When Off-Campus", studentPct: 42.0, facultyPct: 68.6 },
        { name: "Inspects HTTPS / SSL Certificate Padlocks", studentPct: 69.5, facultyPct: 83.1 }
      ]
    },
    {
      id: "cat-6",
      number: "06",
      title: "Cybersecurity Awareness & Incident Reporting",
      shortDescription: "Measures familiarity with campus IT incident reporting channels, institutional training participation, and proactive defense.",
      fullExplanation: "A rapid reporting culture mitigates the blast radius of security incidents. If students and faculty do not know who to contact when their account is compromised or an unusual phishing campaign arrives, containment is delayed. This area highlights training reach and incident channel transparency.",
      icon: "FileWarning",
      studentScore: 52.8,
      facultyScore: 73.2,
      overallScore: 57.8,
      vulnerabilityLevel: "Critical",
      keyQuestionsCount: 3,
      subMetrics: [
        { name: "Knows Exact Campus IT Incident Reporting Channel", studentPct: 38.5, facultyPct: 72.0 },
        { name: "Has Completed Formal Cybersecurity Training", studentPct: 32.1, facultyPct: 67.8 },
        { name: "Would Immediately Report a Suspected Compromise", studentPct: 64.8, facultyPct: 85.6 }
      ]
    }
  ],
  questions: [
    {
      id: "q1",
      categoryNumber: "01",
      categoryName: "Password & Account Security",
      questionText: "Do you use unique, distinct passwords for each of your important accounts (email, banking, college portal)?",
      type: "likert",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
      studentDistribution: { "Never": 14, "Rarely": 28, "Sometimes": 32, "Often": 16, "Always": 10 },
      facultyDistribution: { "Never": 3, "Rarely": 8, "Sometimes": 21, "Often": 36, "Always": 32 },
      overallPositivePercentage: 46.2,
      keyInsight: "High rate of password reuse among students across academic and recreational platforms."
    },
    {
      id: "q2",
      categoryNumber: "01",
      categoryName: "Password & Account Security",
      questionText: "Do you use Two-Factor Authentication (2FA / MFA) on accounts where it is available?",
      type: "multiple_choice",
      options: ["On all accounts", "Only when mandated", "Rarely", "Never heard of it / Do not use"],
      studentDistribution: { "On all accounts": 38, "Only when mandated": 44, "Rarely": 12, "Never heard of it / Do not use": 6 },
      facultyDistribution: { "On all accounts": 68, "Only when mandated": 26, "Rarely": 4, "Never heard of it / Do not use": 2 },
      overallPositivePercentage: 68.7,
      keyInsight: "Faculty show higher 2FA adoption driven by institutional single sign-on mandates."
    },
    {
      id: "q3",
      categoryNumber: "01",
      categoryName: "Password & Account Security",
      questionText: "Do you refrain from sharing one-time passwords (OTPs), PINs, or account credentials with colleagues or friends?",
      type: "binary",
      options: ["Yes, always protect them", "No, have shared in convenience"],
      studentDistribution: { "Yes, always protect them": 74.5, "No, have shared in convenience": 25.5 },
      facultyDistribution: { "Yes, always protect them": 94.2, "No, have shared in convenience": 5.8 },
      overallPositivePercentage: 79.3,
      keyInsight: "Over 1 in 4 students admit to having shared credentials for streaming or group project access."
    },
    {
      id: "q4",
      categoryNumber: "02",
      categoryName: "Phishing & Social Engineering Awareness",
      questionText: "Do you inspect and verify URLs and sender email addresses before clicking embedded links or downloading attachments?",
      type: "likert",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
      studentDistribution: { "Never": 6, "Rarely": 18, "Sometimes": 34, "Often": 28, "Always": 14 },
      facultyDistribution: { "Never": 1, "Rarely": 6, "Sometimes": 22, "Often": 41, "Always": 30 },
      overallPositivePercentage: 66.8,
      keyInsight: "Urgent subject lines reduce URL inspection diligence, especially among students during exam seasons."
    },
    {
      id: "q5",
      categoryNumber: "02",
      categoryName: "Phishing & Social Engineering Awareness",
      questionText: "How confident are you in identifying a sophisticated phishing email imitating university administration or banks?",
      type: "likert",
      options: ["Not confident at all", "Slightly confident", "Moderately confident", "Very confident", "Extremely confident"],
      studentDistribution: { "Not confident at all": 12, "Slightly confident": 30, "Moderately confident": 34, "Very confident": 18, "Extremely confident": 6 },
      facultyDistribution: { "Not confident at all": 4, "Slightly confident": 16, "Moderately confident": 38, "Very confident": 31, "Extremely confident": 11 },
      overallPositivePercentage: 63.3,
      keyInsight: "Both cohorts struggle to differentiate genuine subdomain notifications from spoofed domains."
    },
    {
      id: "q6",
      categoryNumber: "02",
      categoryName: "Phishing & Social Engineering Awareness",
      questionText: "Have you ever accidentally clicked on a suspicious link or provided details to an unverified online form?",
      type: "binary",
      options: ["No, never fell for it", "Yes, at least once"],
      studentDistribution: { "No, never fell for it": 58.2, "Yes, at least once": 41.8 },
      facultyDistribution: { "No, never fell for it": 79.7, "Yes, at least once": 20.3 },
      overallPositivePercentage: 63.5,
      keyInsight: "41.8% of surveyed students acknowledged interacting with suspicious lures at least once."
    },
    {
      id: "q7",
      categoryNumber: "03",
      categoryName: "Device & Software Security",
      questionText: "Do you install system operating updates and application patches as soon as they become available?",
      type: "likert",
      options: ["Never", "Rarely / Postpone indefinitely", "Sometimes / After weeks", "Often / Within days", "Always / Immediate auto-update"],
      studentDistribution: { "Never": 4, "Rarely / Postpone indefinitely": 18, "Sometimes / After weeks": 32, "Often / Within days": 28, "Always / Immediate auto-update": 18 },
      facultyDistribution: { "Never": 1, "Rarely / Postpone indefinitely": 8, "Sometimes / After weeks": 22, "Often / Within days": 42, "Always / Immediate auto-update": 27 },
      overallPositivePercentage: 72.8,
      keyInsight: "Storage constraints on student mobile devices frequently delay critical security updates."
    },
    {
      id: "q8",
      categoryNumber: "03",
      categoryName: "Device & Software Security",
      questionText: "Do you install software, browser extensions, and mobile apps only from official, trusted application stores?",
      type: "likert",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
      studentDistribution: { "Never": 5, "Rarely": 12, "Sometimes": 26, "Often": 34, "Always": 23 },
      facultyDistribution: { "Never": 1, "Rarely": 3, "Sometimes": 14, "Often": 38, "Always": 44 },
      overallPositivePercentage: 75.7,
      keyInsight: "Students occasionally use third-party repositories for specialized course software or utilities."
    },
    {
      id: "q9",
      categoryNumber: "03",
      categoryName: "Device & Software Security",
      questionText: "Do you use an automated screen lock (PIN, password, or biometric) on your laptop and smartphone?",
      type: "binary",
      options: ["Yes, on all personal devices", "No, disabled on one or more"],
      studentDistribution: { "Yes, on all personal devices": 88.5, "No, disabled on one or more": 11.5 },
      facultyDistribution: { "Yes, on all personal devices": 92.4, "No, disabled on one or more": 7.6 },
      overallPositivePercentage: 89.4,
      keyInsight: "Device screen locks represent one of the most consistently adopted physical cyber hygiene habits."
    },
    {
      id: "q10",
      categoryNumber: "04",
      categoryName: "Data Privacy & Safe Sharing",
      questionText: "Do you review and limit application permissions (camera, microphone, location, contact list) on your personal smartphone?",
      type: "likert",
      options: ["Never check", "Rarely check", "Sometimes when prompted", "Frequently audit", "Always strictly restrict"],
      studentDistribution: { "Never check": 18, "Rarely check": 33, "Sometimes when prompted": 24, "Frequently audit": 16, "Always strictly restrict": 9 },
      facultyDistribution: { "Never check": 8, "Rarely check": 22, "Sometimes when prompted": 32, "Frequently audit": 24, "Always strictly restrict": 14 },
      overallPositivePercentage: 52.5,
      keyInsight: "Over 50% of students rarely or never review ongoing background permission allowances."
    },
    {
      id: "q11",
      categoryNumber: "04",
      categoryName: "Data Privacy & Safe Sharing",
      questionText: "How regularly do you create secure backups of your important academic or institutional files (cloud or external drive)?",
      type: "multiple_choice",
      options: ["Weekly or automated daily", "Monthly", "Only before exams/deadlines", "Rarely or Never"],
      studentDistribution: { "Weekly or automated daily": 28, "Monthly": 24, "Only before exams/deadlines": 28, "Rarely or Never": 20 },
      facultyDistribution: { "Weekly or automated daily": 58, "Monthly": 22, "Only before exams/deadlines": 12, "Rarely or Never": 8 },
      overallPositivePercentage: 58.7,
      keyInsight: "Faculty practice higher backup consistency for research and syllabus records compared to students."
    },
    {
      id: "q12",
      categoryNumber: "04",
      categoryName: "Data Privacy & Safe Sharing",
      questionText: "When sharing links on Google Drive or OneDrive, do you limit access to specific recipients rather than 'Anyone with the link'?",
      type: "likert",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
      studentDistribution: { "Never": 10, "Rarely": 26, "Sometimes": 30, "Often": 22, "Always": 12 },
      facultyDistribution: { "Never": 2, "Rarely": 12, "Sometimes": 28, "Often": 36, "Always": 22 },
      overallPositivePercentage: 68.3,
      keyInsight: "Casual file-sharing practices inadvertently leave sensitive assignment and identity files public."
    },
    {
      id: "q13",
      categoryNumber: "05",
      categoryName: "Network & Internet Safety",
      questionText: "Do you avoid conducting financial transactions or accessing sensitive college portals when connected to unencrypted public Wi-Fi?",
      type: "likert",
      options: ["Never avoid / unaware", "Rarely avoid", "Sometimes avoid", "Usually avoid", "Always avoid"],
      studentDistribution: { "Never avoid / unaware": 16, "Rarely avoid": 28, "Sometimes avoid": 28, "Usually avoid": 18, "Always avoid": 10 },
      facultyDistribution: { "Never avoid / unaware": 5, "Rarely avoid": 16, "Sometimes avoid": 24, "Usually avoid": 32, "Always avoid": 23 },
      overallPositivePercentage: 56.8,
      keyInsight: "Open cafe and public transit Wi-Fi remains a high-exposure zone for student credentials."
    },
    {
      id: "q14",
      categoryNumber: "05",
      categoryName: "Network & Internet Safety",
      questionText: "Do you use a trusted Virtual Private Network (VPN) when accessing internal campus resources from remote networks?",
      type: "multiple_choice",
      options: ["Always use VPN", "Only when access is blocked otherwise", "Rarely use", "Do not know how to configure"],
      studentDistribution: { "Always use VPN": 18, "Only when access is blocked otherwise": 36, "Rarely use": 26, "Do not know how to configure": 20 },
      facultyDistribution: { "Always use VPN": 48, "Only when access is blocked otherwise": 28, "Rarely use": 14, "Do not know how to configure": 10 },
      overallPositivePercentage: 48.5,
      keyInsight: "Significant technical knowledge barrier exists regarding campus-provided VPN clients."
    },
    {
      id: "q15",
      categoryNumber: "05",
      categoryName: "Network & Internet Safety",
      questionText: "Do you check for the secure padlock icon (HTTPS) and valid domain certificate when submitting credentials on web pages?",
      type: "binary",
      options: ["Yes, actively inspect", "No, rarely pay attention"],
      studentDistribution: { "Yes, actively inspect": 69.5, "No, rarely pay attention": 30.5 },
      facultyDistribution: { "Yes, actively inspect": 83.1, "No, rarely pay attention": 16.9 },
      overallPositivePercentage: 72.8,
      keyInsight: "Broad surface awareness of HTTPS, although modern phishing sites also leverage valid SSL certificates."
    },
    {
      id: "q16",
      categoryNumber: "06",
      categoryName: "Cybersecurity Awareness & Incident Reporting",
      questionText: "Do you know the exact email address, contact form, or office on campus to report a suspected cyber incident or compromised account?",
      type: "binary",
      options: ["Yes, clearly know the channel", "No, unsure where to report"],
      studentDistribution: { "Yes, clearly know the channel": 38.5, "No, unsure where to report": 61.5 },
      facultyDistribution: { "Yes, clearly know the channel": 72.0, "No, unsure where to report": 28.0 },
      overallPositivePercentage: 46.7,
      keyInsight: "Critical gap: over 61% of students do not know the designated campus IT security reporting desk."
    },
    {
      id: "q17",
      categoryNumber: "06",
      categoryName: "Cybersecurity Awareness & Incident Reporting",
      questionText: "Have you participated in any formal cybersecurity awareness seminar, workshop, or online orientation provided by the college?",
      type: "multiple_choice",
      options: ["Yes, within the last 12 months", "Yes, more than a year ago", "Offered but never attended", "Never offered / unaware"],
      studentDistribution: { "Yes, within the last 12 months": 18, "Yes, more than a year ago": 14, "Offered but never attended": 38, "Never offered / unaware": 30 },
      facultyDistribution: { "Yes, within the last 12 months": 52, "Yes, more than a year ago": 22, "Offered but never attended": 16, "Never offered / unaware": 10 },
      overallPositivePercentage: 40.8,
      keyInsight: "Student cybersecurity orientation is largely voluntary, resulting in minimal voluntary attendance."
    },
    {
      id: "q18",
      categoryNumber: "06",
      categoryName: "Cybersecurity Awareness & Incident Reporting",
      questionText: "If you received an email offering an unexpected campus grant or free tech device asking for your login, what would you do?",
      type: "multiple_choice",
      options: ["Immediately report as phishing", "Delete or ignore without reporting", "Open link out of curiosity", "Reply to verify authenticity"],
      studentDistribution: { "Immediately report as phishing": 36, "Delete or ignore without reporting": 48, "Open link out of curiosity": 12, "Reply to verify authenticity": 4 },
      facultyDistribution: { "Immediately report as phishing": 71, "Delete or ignore without reporting": 23, "Open link out of curiosity": 4, "Reply to verify authenticity": 2 },
      overallPositivePercentage: 44.6,
      keyInsight: "Passive deletion without reporting leaves the campus IT team unaware of ongoing active credential harvesting."
    }
  ],
  recommendations: [
    {
      id: "rec-1",
      number: "01",
      title: "Conduct Mandatory, Gamified Cybersecurity Orientations",
      target: "All",
      priority: "Immediate",
      description: "Embed mandatory, micro-learning cyber hygiene modules into freshman orientation and annual faculty onboarding rather than relying on optional voluntary seminars.",
      actionItems: [
        "Deliver interactive 15-minute scenario simulations covering phishing, 2FA, and Wi-Fi safety.",
        "Require completion before semester course registration or campus Wi-Fi access renewal.",
        "Introduce student-led peer cybersecurity ambassador initiatives."
      ]
    },
    {
      id: "rec-2",
      number: "02",
      title: "Promote Strong, Unique Passwords & Institutional Password Managers",
      target: "All",
      priority: "Immediate",
      description: "Address widespread password recycling by provisioning enterprise password managers (e.g., Bitwarden or 1Password) for all enrolled students and faculty.",
      actionItems: [
        "Educate community on passphrases over complex, easily forgotten arbitrary strings.",
        "Provide clear guidance eliminating password reuse between personal and campus emails.",
        "Incorporate breached credential monitoring on institutional domains."
      ]
    },
    {
      id: "rec-3",
      number: "03",
      title: "Universal Enforce Two-Factor Authentication (MFA)",
      target: "Institutional IT",
      priority: "Immediate",
      description: "Expand mandatory MFA across all campus portals, learning management systems (Canvas, Moodle, Blackboard), and email, transitioning away from vulnerable SMS to authenticator apps/FIDO2 keys.",
      actionItems: [
        "Enforce MFA uniformly across both student and faculty directory accounts.",
        "Implement risk-based adaptive authentication for logins originating from unfamiliar geographic locations.",
        "Provide emergency hardware tokens for students without compatible mobile smartphones."
      ]
    },
    {
      id: "rec-4",
      number: "04",
      title: "Routine Phishing-Awareness Simulation Campaigns",
      target: "Institutional IT",
      priority: "High",
      description: "Run benign, realistic phishing simulations targeting common campus hooks (grade releases, payroll notifications, grant funds, IT quota warnings).",
      actionItems: [
        "Provide immediate just-in-time educational feedback whenever a user clicks a simulated hook.",
        "Analyze department vulnerability trends to tailor targeted coaching.",
        "Ensure reporting simulation metrics focus on education rather than punitive measures."
      ]
    },
    {
      id: "rec-5",
      number: "05",
      title: "Device Hygiene & Automated Patch Verification Policies",
      target: "Students",
      priority: "High",
      description: "Combat vulnerability windows by implementing Network Access Control (NAC) checks for BYOD devices joining secure campus wireless networks.",
      actionItems: [
        "Configure automated update reminders on campus-managed computers.",
        "Encourage device screen lock timeouts capped at a maximum of 3–5 minutes of inactivity.",
        "Host regular campus 'device clinics' offering free malware checks and storage clearing for updates."
      ]
    },
    {
      id: "rec-6",
      number: "06",
      title: "Educate Users on Data Privacy & Cloud Access Permissions",
      target: "Faculty",
      priority: "High",
      description: "Prevent academic record leakage by instilling strict default permissions on cloud file repositories (Google Drive, OneDrive, Dropbox).",
      actionItems: [
        "Audit existing public link shares on institutional cloud storage tenants.",
        "Enforce automated expiration dates for temporary collaborative shares.",
        "Provide guidance on mobile app permission hygiene, camera/mic restrictions, and location tracking."
      ]
    },
    {
      id: "rec-7",
      number: "07",
      title: "Establish a 1-Click Cyber Incident Reporting Mechanism",
      target: "Institutional IT",
      priority: "Immediate",
      description: "Eliminate reporting friction by integrating a prominent 'Report Phishing / Suspicious' button directly into college webmail and student portal headers.",
      actionItems: [
        "Deploy a standardized 'PhishAlert' plugin across campus Microsoft 365 / Google Workspace clients.",
        "Publish a clear, 24/7 designated incident triage phone line and web form.",
        "Recognize and reward vigilant users who proactively report confirmed malicious lures."
      ]
    },
    {
      id: "rec-8",
      number: "08",
      title: "Periodic Cybersecurity Hygiene Audits & Posture Benchmarking",
      target: "Institutional IT",
      priority: "Medium",
      description: "Institutionalize recurring biannual survey assessments to track cultural posture improvements, policy effectiveness, and emerging risk vectors over time.",
      actionItems: [
        "Administer longitudinal surveys comparing student cohorts across freshman to senior years.",
        "Publish transparent, anonymized campus security posture reports for stakeholders.",
        "Align campus defensive controls with NIST SP 800-171 and Educause benchmarks."
      ]
    }
  ]
};

export const RESEARCH_OBJECTIVES: ResearchObjective[] = [
  {
    id: 1,
    title: "Password Security Practices",
    description: "Measure the frequency of unique password creation, credential sharing, and password manager utilization across personal and institutional environments.",
    metric: "46.2% Student Unique Passwords vs 76.3% Faculty",
    icon: "KeyRound"
  },
  {
    id: 2,
    title: "Two-Factor Authentication Adoption",
    description: "Evaluate the extent to which multi-factor authentication (MFA) is enabled voluntarily versus when compelled by institutional single sign-on mandates.",
    metric: "68.7% Overall Adoption (88.1% Faculty / 62.4% Student)",
    icon: "Shield"
  },
  {
    id: 3,
    title: "Phishing & Social Engineering Resilience",
    description: "Examine behavioral indicators in inspecting link authenticity, detecting domain spoofing, and resisting urgent psychological pressure lures.",
    metric: "41.8% Students Fell for Suspicious Lures at Least Once",
    icon: "AlertOctagon"
  },
  {
    id: 4,
    title: "Software & Device Update Habits",
    description: "Quantify patch latency across personal smartphones, laptops, and campus workstations to understand unpatched vulnerability exposure.",
    metric: "72.8% Keep Devices Regularly Updated",
    icon: "RefreshCw"
  },
  {
    id: 5,
    title: "Data Privacy & Sharing Practices",
    description: "Analyze how students and faculty manage mobile app permissions, cloud link visibility, and intellectual property access boundaries.",
    metric: "52.5% Regularly Audit App Permissions",
    icon: "EyeOff"
  },
  {
    id: 6,
    title: "Backup & Continuity Protocols",
    description: "Assess routine cadence of automated or manual data backups to guard against ransomware, hardware failure, and accidental deletion.",
    metric: "58.7% Maintain Routine File Backups",
    icon: "HardDrive"
  },
  {
    id: 7,
    title: "Awareness & Knowledge Gaps",
    description: "Isolate conceptual vulnerabilities, such as blind trust in open Wi-Fi networks and confusion between HTTPS transport security and website legitimacy.",
    metric: "46.7% Know Campus IT Incident Reporting Channel",
    icon: "HelpCircle"
  },
  {
    id: 8,
    title: "Student vs Faculty Cohort Comparison",
    description: "Provide an empirical comparative analysis of security hygiene between student BYOD cultures and faculty administrative compliance.",
    metric: "15.2 pt Gap in Overall Cyber Hygiene (79.8 vs 64.6)",
    icon: "GitCompare"
  }
];

export const RESEARCH_REFERENCES: ResearchReference[] = [
  {
    id: "ref-1",
    authors: "National Institute of Standards and Technology (NIST)",
    year: 2023,
    title: "Digital Identity Guidelines: Authentication and Lifecycle Management",
    publication: "NIST Special Publication 800-63B, Revision 4. U.S. Department of Commerce.",
    doiOrUrl: "https://doi.org/10.6028/NIST.SP.800-63b",
    apaCitation: "National Institute of Standards and Technology. (2023). Digital Identity Guidelines: Authentication and Lifecycle Management (NIST SP 800-63B). U.S. Department of Commerce.",
    ieeeCitation: "NIST, 'Digital Identity Guidelines: Authentication and Lifecycle Management,' NIST Special Publication 800-63B, 2023.",
    bibtex: "@techreport{nist2023sp80063b,\n  author = {{National Institute of Standards and Technology}},\n  title = {Digital Identity Guidelines: Authentication and Lifecycle Management},\n  institution = {NIST},\n  number = {SP 800-63B},\n  year = {2023}\n}"
  },
  {
    id: "ref-2",
    authors: "Cybersecurity and Infrastructure Security Agency (CISA)",
    year: 2024,
    title: "Cyber Hygiene Services and Best Practices Guide for Education Institutions",
    publication: "CISA Insights & Educational Sector Cybersecurity Framework.",
    doiOrUrl: "https://www.cisa.gov/cyber-hygiene-services",
    apaCitation: "Cybersecurity and Infrastructure Security Agency. (2024). Cyber Hygiene Services and Best Practices Guide for Education Institutions. Cybersecurity and Infrastructure Security Agency.",
    ieeeCitation: "CISA, 'Cyber Hygiene Services and Best Practices Guide for Education Institutions,' CISA Insights, 2024.",
    bibtex: "@misc{cisa2024hygiene,\n  author = {{Cybersecurity and Infrastructure Security Agency}},\n  title = {Cyber Hygiene Services and Best Practices Guide for Education Institutions},\n  year = {2024},\n  url = {https://www.cisa.gov/cyber-hygiene-services}\n}"
  },
  {
    id: "ref-3",
    authors: "Grajek, S., & Reinitz, B.",
    year: 2023,
    title: "Educause Horizon Report: Information Security and Cybersecurity in Higher Education",
    publication: "Educause Research Publications, Louisville, CO.",
    doiOrUrl: "https://library.educause.edu",
    apaCitation: "Grajek, S., & Reinitz, B. (2023). Educause Horizon Report: Information Security and Cybersecurity in Higher Education. Educause.",
    ieeeCitation: "S. Grajek and B. Reinitz, 'Educause Horizon Report: Information Security and Cybersecurity in Higher Education,' Educause, 2023.",
    bibtex: "@report{educause2023cyber,\n  author = {Susan Grajek and Betsy Reinitz},\n  title = {Educause Horizon Report: Information Security and Cybersecurity in Higher Education},\n  institution = {Educause},\n  year = {2023}\n}"
  },
  {
    id: "ref-4",
    authors: "European Union Agency for Cybersecurity (ENISA)",
    year: 2022,
    title: "Raising Awareness of Cybersecurity: A Guide for Academic and Research Institutions",
    publication: "ENISA Cyber Awareness Publications, Athens, Greece.",
    doiOrUrl: "https://www.enisa.europa.eu",
    apaCitation: "European Union Agency for Cybersecurity. (2022). Raising Awareness of Cybersecurity: A Guide for Academic and Research Institutions. ENISA.",
    ieeeCitation: "ENISA, 'Raising Awareness of Cybersecurity: A Guide for Academic and Research Institutions,' ENISA Technical Report, 2022.",
    bibtex: "@techreport{enisa2022awareness,\n  author = {{European Union Agency for Cybersecurity}},\n  title = {Raising Awareness of Cybersecurity: A Guide for Academic and Research Institutions},\n  year = {2022}\n}"
  },
  {
    id: "ref-5",
    authors: "Verizon Enterprise Solutions",
    year: 2024,
    title: "2024 Data Breach Investigations Report (DBIR) — Education Sector Analysis",
    publication: "Verizon Risk Team Research Series, New York, NY.",
    doiOrUrl: "https://www.verizon.com/business/resources/reports/dbir/",
    apaCitation: "Verizon Enterprise Solutions. (2024). 2024 Data Breach Investigations Report: Education Sector Analysis. Verizon.",
    ieeeCitation: "Verizon, '2024 Data Breach Investigations Report: Education Sector Analysis,' Verizon Business, 2024.",
    bibtex: "@report{verizon2024dbir,\n  author = {{Verizon Risk Team}},\n  title = {2024 Data Breach Investigations Report: Education Sector Analysis},\n  institution = {Verizon},\n  year = {2024}\n}"
  },
  {
    id: "ref-6",
    authors: "Wash, R., & Rader, E.",
    year: 2020,
    title: "Too Much Knowledge? Examining How Information Seeking Influences Security Behaviors",
    publication: "ACM Transactions on Computer-Human Interaction (TOCHI), 27(5), 1-32.",
    doiOrUrl: "https://doi.org/10.1145/3397160",
    apaCitation: "Wash, R., & Rader, E. (2020). Too much knowledge? Examining how information seeking influences security behaviors. ACM Transactions on Computer-Human Interaction, 27(5), 1-32.",
    ieeeCitation: "R. Wash and E. Rader, 'Too Much Knowledge? Examining How Information Seeking Influences Security Behaviors,' ACM Trans. Comput.-Hum. Interact., vol. 27, no. 5, pp. 1-32, 2020.",
    bibtex: "@article{wash2020security,\n  author = {Rick Wash and Emilee Rader},\n  title = {Too Much Knowledge? Examining How Information Seeking Influences Security Behaviors},\n  journal = {ACM Transactions on Computer-Human Interaction},\n  volume = {27},\n  number = {5},\n  pages = {1--32},\n  year = {2020}\n}"
  }
];

export const INITIAL_TEAM_MEMBERS: TeamMember[] = [
  {
    id: "tm-1",
    name: "Alex M. Rivera",
    role: "Project Lead & Principal Researcher",
    department: "Department of Computer Science & Cybersecurity",
    institution: "University Institute of Technology",
    email: "a.rivera@college.edu",
    contribution: "Coordinated research framework, survey architecture, hypothesis testing, and synthesis of student-faculty comparative metrics."
  },
  {
    id: "tm-2",
    name: "Dr. Sarah Chen, Ph.D.",
    role: "Faculty Guide & Academic Supervisor",
    department: "Information Systems & Cyber Defense Group",
    institution: "University Institute of Technology",
    email: "s.chen@college.edu",
    contribution: "Supervised methodology alignment with institutional ethical standards, reviewed questionnaire validity, and vetted statistical models."
  },
  {
    id: "tm-3",
    name: "Marcus Vance",
    role: "Survey Design & Data Analysis",
    department: "Data Science & Applied Statistics",
    institution: "University Institute of Technology",
    email: "m.vance@college.edu",
    contribution: "Engineered questionnaire distribution logic, Google Forms pipeline, Likert normalization, and demographic cohort cross-tabulations."
  },
  {
    id: "tm-4",
    name: "Elena Rostova",
    role: "Research & Literature Documentation",
    department: "Information Assurance & Policy",
    institution: "University Institute of Technology",
    email: "e.rostova@college.edu",
    contribution: "Synthesized academic literature, NIST/CISA regulatory mapping, qualitative thematic analysis, and recommendation drafting."
  },
  {
    id: "tm-5",
    name: "Karan Patel",
    role: "Web Development & Visual Analytics",
    department: "Software Engineering Division",
    institution: "University Institute of Technology",
    email: "k.patel@college.edu",
    contribution: "Designed and implemented this academic research portal, responsive visual analytics, glassmorphism UI, and data configuration engine."
  }
];
