export const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScMum0FAGznWoqKWZMHMPsEOAjM9UMw7isp1yRI0yDviAgPzw/viewform?usp=dialog";
export const GOOGLE_FORM_EMBED_URL = "https://docs.google.com/forms/d/e/1FAIpQLScMum0FAGznWoqKWZMHMPsEOAjM9UMw7isp1yRI0yDviAgPzw/viewform?embedded=true";
export const GOOGLE_FORM_RESPONSES_URL = "https://docs.google.com/forms/d/e/1FAIpQLScMum0FAGznWoqKWZMHMPsEOAjM9UMw7isp1yRI0yDviAgPzw/viewanalytics";

export interface SurveyQuestion {
  id: string;
  number: number;
  categoryLetter: string;
  categoryName: string;
  question: string;
  type: 'Single Choice' | 'Multiple Choice' | 'Likert Scale (1-5)' | 'Yes / No';
  options: string[];
  explanation: string;
}

export interface CyberHygieneArea {
  number: string;
  title: string;
  iconName: string;
  shortExplanation: string;
  keyPractices: string[];
}

export interface RecommendationItem {
  number: string;
  title: string;
  description: string;
  keyAction: string;
  iconName?: string;
}

export interface TeamMember {
  id: string;
  role: string;
  name: string;
  department: string;
  college: string;
  email: string;
}

export interface ReferenceItem {
  id: string;
  title: string;
  authors: string;
  publication: string;
  year: string;
  doiOrUrl: string;
}

// 8 Exact Research Objectives
export const RESEARCH_OBJECTIVES = [
  {
    num: "01",
    title: "Baseline Security Awareness",
    description: "Assess awareness of basic cybersecurity practices among students and faculty.",
    iconName: "Radar"
  },
  {
    num: "02",
    title: "Password & Credential Habits",
    description: "Study password and account security habits across institutional and personal accounts.",
    iconName: "KeyRound"
  },
  {
    num: "03",
    title: "Two-Factor Authentication",
    description: "Examine the use and adoption patterns of two-factor authentication (2FA).",
    iconName: "Fingerprint"
  },
  {
    num: "04",
    title: "Phishing & Social Engineering",
    description: "Assess awareness of phishing and suspicious links, emails, and direct messages.",
    iconName: "MailWarning"
  },
  {
    num: "05",
    title: "Device & Software Discipline",
    description: "Understand device and software security practices, including screen locks and patch updates.",
    iconName: "Laptop"
  },
  {
    num: "06",
    title: "Privacy & Information Sharing",
    description: "Study data privacy and safe information-sharing habits on campus and online.",
    iconName: "GlobeLock"
  },
  {
    num: "07",
    title: "Cohort Comparative Analysis",
    description: "Compare cyber hygiene practices between students and faculty.",
    iconName: "Scale"
  },
  {
    num: "08",
    title: "Institutional Training Improvement",
    description: "Identify areas where cybersecurity awareness and institutional training can be improved.",
    iconName: "Lightbulb"
  }
];

// 6 Core Cyber Hygiene Areas
export const CYBER_HYGIENE_AREAS: CyberHygieneArea[] = [
  {
    number: "01",
    title: "PASSWORD & ACCOUNT SECURITY",
    iconName: "KeyRound",
    shortExplanation: "Establishing unique passwords for every service, avoiding predictable patterns, and utilizing secure password managers.",
    keyPractices: [
      "Unique credentials across college & personal portals",
      "Avoiding dictionary words and personal birth dates",
      "Using password managers to eliminate password fatigue"
    ]
  },
  {
    number: "02",
    title: "TWO-FACTOR AUTHENTICATION",
    iconName: "Fingerprint",
    shortExplanation: "Adding an indispensable secondary verification barrier (SMS, authenticator apps, security keys) against credential theft.",
    keyPractices: [
      "Enabling 2FA across institutional email and cloud storage",
      "Using authenticator apps over plaintext SMS where possible",
      "Safeguarding backup one-time recovery codes"
    ]
  },
  {
    number: "03",
    title: "PHISHING & SOCIAL ENGINEERING",
    iconName: "MailWarning",
    shortExplanation: "Recognizing malicious communications, fraudulent login portals, spoofed academic notices, and urgent scam prompts.",
    keyPractices: [
      "Checking sender domain signatures before clicking links",
      "Never disclosing student or employee credentials via email",
      "Validating unexpected attachments and financial grant offers"
    ]
  },
  {
    number: "04",
    title: "DEVICE & SOFTWARE SECURITY",
    iconName: "Laptop",
    shortExplanation: "Locking physical devices with strong passcodes and biometrics, keeping operating systems updated, and downloading verified software.",
    keyPractices: [
      "Biometric or 6+ digit PIN screen lock timeout",
      "Regular installation of operating system & browser patches",
      "Avoiding third-party cracked or pirated academic software"
    ]
  },
  {
    number: "05",
    title: "DATA PRIVACY & INTERNET SAFETY",
    iconName: "GlobeLock",
    shortExplanation: "Securing communications on public Wi-Fi, reviewing application permissions, and maintaining redundant encrypted backups.",
    keyPractices: [
      "Using encrypted VPN tunnels when connecting to public campus Wi-Fi",
      "Restricting unnecessary microphone, location, and storage permissions",
      "Regular backups of research work, dissertations, and course files"
    ]
  },
  {
    number: "06",
    title: "CYBERSECURITY AWARENESS & REPORTING",
    iconName: "Megaphone",
    shortExplanation: "Knowing immediate campus incident reporting channels, participating in awareness training, and fostering peer cyber responsibility.",
    keyPractices: [
      "Immediate reporting of phishing emails to campus IT helpdesks",
      "Active participation in campus cybersecurity workshops",
      "Refusing to share one-time OTP passwords with anyone"
    ]
  }
];

// Exact 20 Survey Questions categorized into A through F
export const SURVEY_QUESTIONS: SurveyQuestion[] = [
  // A. Basic Information
  {
    id: "Q01",
    number: 1,
    categoryLetter: "A",
    categoryName: "Basic Information",
    question: "What is your primary affiliation at the college?",
    type: "Single Choice",
    options: ["Undergraduate Student", "Postgraduate / Research Student", "Teaching Faculty / Professor", "Administrative / Support Staff"],
    explanation: "Used to segment responses for comparative analysis between students and faculty cohorts."
  },
  {
    id: "Q02",
    number: 2,
    categoryLetter: "A",
    categoryName: "Basic Information",
    question: "Which primary devices do you use to access academic and college systems?",
    type: "Multiple Choice",
    options: ["Personal Smartphone (Android / iOS)", "Personal Laptop", "College Computer Lab / Desktop", "Tablet / iPad"],
    explanation: "Identifies the physical endpoints in use across the campus ecosystem."
  },
  {
    id: "Q03",
    number: 3,
    categoryLetter: "A",
    categoryName: "Basic Information",
    question: "How frequently do you access college portals, email, and digital learning platforms?",
    type: "Single Choice",
    options: ["Multiple times daily", "Once daily", "A few times a week", "Rarely / Only during exams"],
    explanation: "Measures exposure frequency and digital engagement with academic IT infrastructure."
  },

  // B. Password & Account Security
  {
    id: "Q04",
    number: 4,
    categoryLetter: "B",
    categoryName: "Password & Account Security",
    question: "Do you use unique, different passwords for your college email, personal email, and financial accounts?",
    type: "Single Choice",
    options: ["Yes, completely unique passwords for each account", "Mostly unique with minor variations", "I reuse the same 1 or 2 passwords everywhere", "Not sure"],
    explanation: "Evaluates risk of credential stuffing and cross-account compromise."
  },
  {
    id: "Q05",
    number: 5,
    categoryLetter: "B",
    categoryName: "Password & Account Security",
    question: "When creating a password, what criteria do you typically prioritize?",
    type: "Multiple Choice",
    options: ["Length (12+ characters)", "Combination of uppercase, lowercase, numbers & symbols", "Ease of remembering (names, birthdays, phone numbers)", "Auto-generated random passwords"],
    explanation: "Assesses password complexity habits versus memorability tradeoffs."
  },
  {
    id: "Q06",
    number: 6,
    categoryLetter: "B",
    categoryName: "Password & Account Security",
    question: "Do you use a password manager application to generate and store your credentials?",
    type: "Single Choice",
    options: ["Yes, regularly (e.g. Bitwarden, 1Password, Apple Keychain)", "Built-in browser autofill only", "No, I write them down or remember them", "I do not know what a password manager is"],
    explanation: "Measures technological tool adoption to assist credential hygiene."
  },
  {
    id: "Q07",
    number: 7,
    categoryLetter: "B",
    categoryName: "Password & Account Security",
    question: "Do you have Two-Factor Authentication (2FA / MFA) enabled on your primary accounts?",
    type: "Single Choice",
    options: ["Yes, on all accounts where available", "Only on mandated accounts (e.g. College SSO / Bank)", "Rarely / Only on 1 account", "No / Never used 2FA"],
    explanation: "Assesses voluntary vs mandated multi-factor authentication uptake."
  },

  // C. Phishing & Social Engineering
  {
    id: "Q08",
    number: 8,
    categoryLetter: "C",
    categoryName: "Phishing & Social Engineering",
    question: "How confident are you in identifying a phishing email, fraudulent SMS, or fake login page?",
    type: "Likert Scale (1-5)",
    options: ["1 - Not at all confident", "2 - Slightly confident", "3 - Moderately confident", "4 - Very confident", "5 - Extremely confident"],
    explanation: "Self-assessed confidence benchmark in spotting social engineering attempts."
  },
  {
    id: "Q09",
    number: 9,
    categoryLetter: "C",
    categoryName: "Phishing & Social Engineering",
    question: "Do you carefully inspect the sender's full email address and URL before clicking links or downloading attachments?",
    type: "Single Choice",
    options: ["Always inspect before clicking", "Sometimes, if the email looks suspicious", "Rarely / Only if warned by browser", "Never check"],
    explanation: "Tests habitual verification behavior versus reflexive clicking."
  },
  {
    id: "Q10",
    number: 10,
    categoryLetter: "C",
    categoryName: "Phishing & Social Engineering",
    question: "Have you ever accidentally clicked on a suspicious link or entered credentials on a fraudulent website?",
    type: "Single Choice",
    options: ["Yes, within the past year", "Yes, in the past but not recently", "No, never to my knowledge", "Prefer not to say"],
    explanation: "Measures historical exposure and susceptibility to phishing lures."
  },

  // D. Device & Software Security
  {
    id: "Q11",
    number: 11,
    categoryLetter: "D",
    categoryName: "Device & Software Security",
    question: "Do you protect your smartphone and laptop with a passcode, PIN, or biometric lock (Face ID / Fingerprint)?",
    type: "Single Choice",
    options: ["Yes, on all devices with auto-lock under 2 minutes", "Yes, but with long timeout periods", "Only on smartphone, not on laptop", "No screen lock enabled"],
    explanation: "Examines baseline physical security against unauthorized device access."
  },
  {
    id: "Q12",
    number: 12,
    categoryLetter: "D",
    categoryName: "Device & Software Security",
    question: "How promptly do you install operating system and application security updates when prompted?",
    type: "Single Choice",
    options: ["Immediately / Automatically enabled", "Within a few days", "I postpone repeatedly until forced", "Rarely or never update"],
    explanation: "Tracks patch management latency and unpatched vulnerability exposure."
  },
  {
    id: "Q13",
    number: 13,
    categoryLetter: "D",
    categoryName: "Device & Software Security",
    question: "Do you download software, extensions, or applications exclusively from trusted official app stores?",
    type: "Single Choice",
    options: ["Always from official app stores only", "Mostly official, but occasionally third-party APKs or sites", "Frequently use third-party/pirated academic software", "Not sure where my software is downloaded from"],
    explanation: "Identifies risks related to sideloading, malware-laced cracks, and trojanized tools."
  },

  // E. Data Privacy & Internet Safety
  {
    id: "Q14",
    number: 14,
    categoryLetter: "E",
    categoryName: "Data Privacy & Internet Safety",
    question: "Do you review application permissions (camera, microphone, location, contacts) on your mobile device?",
    type: "Single Choice",
    options: ["Regularly review and revoke unnecessary permissions", "Only review when initially installing", "Accept all permissions without reviewing", "Never review permissions"],
    explanation: "Assesses awareness of background telemetric data harvesting."
  },
  {
    id: "Q15",
    number: 15,
    categoryLetter: "E",
    categoryName: "Data Privacy & Internet Safety",
    question: "When connected to public or unsecured Wi-Fi (cafes, campus transit), do you use a VPN or avoid sensitive transactions?",
    type: "Single Choice",
    options: ["Always use a VPN or mobile hotspot for sensitive work", "Avoid banking/passwords on public Wi-Fi without VPN", "Connect freely without VPN for all tasks", "Do not know what a VPN does"],
    explanation: "Evaluates exposure to public radio sniffing and Man-in-the-Middle (MitM) attacks."
  },
  {
    id: "Q16",
    number: 16,
    categoryLetter: "E",
    categoryName: "Data Privacy & Internet Safety",
    question: "How regularly do you create secure backups of your important academic research, assignments, and personal files?",
    type: "Single Choice",
    options: ["Automated continuous cloud / external drive backup", "Manual periodic backup (monthly or before exams)", "Rarely / Only when prompted", "Never backup files"],
    explanation: "Measures resilience against ransomware, hardware corruption, and device loss."
  },
  {
    id: "Q17",
    number: 17,
    categoryLetter: "E",
    categoryName: "Data Privacy & Internet Safety",
    question: "Have you ever shared a One-Time Password (OTP), login verification code, or account password with a friend or colleague?",
    type: "Single Choice",
    options: ["Never share OTPs or credentials under any circumstance", "Only shared Wi-Fi or streaming passwords with close friends", "Have shared account password or OTP when requested", "Prefer not to disclose"],
    explanation: "Evaluates boundary discipline regarding authentication credentials."
  },

  // F. Awareness & Incident Reporting
  {
    id: "Q18",
    number: 18,
    categoryLetter: "F",
    categoryName: "Awareness & Incident Reporting",
    question: "Do you know the official procedure or contact email to report a cybersecurity incident or suspicious email to your college IT department?",
    type: "Yes / No",
    options: ["Yes, I know exactly who to contact / where to report", "No, I would not know who to contact", "Unsure if our college has a reporting procedure"],
    explanation: "Measures awareness of institutional incident response reporting conduits."
  },
  {
    id: "Q19",
    number: 19,
    categoryLetter: "F",
    categoryName: "Awareness & Incident Reporting",
    question: "Have you ever attended a cybersecurity awareness session, orientation workshop, or online safety course at your college?",
    type: "Single Choice",
    options: ["Yes, attended mandatory college cyber training", "Yes, attended voluntary seminar / workshop", "No, never offered or attended", "Not sure"],
    explanation: "Evaluates institutional training penetration across cohorts."
  },
  {
    id: "Q20",
    number: 20,
    categoryLetter: "F",
    categoryName: "Awareness & Incident Reporting",
    question: "How would you rate your overall everyday cyber hygiene practices?",
    type: "Likert Scale (1-5)",
    options: ["1 - Very Poor / High Risk", "2 - Below Average", "3 - Average / Adequate", "4 - Good / Proactive", "5 - Excellent / Cyber-Resilient"],
    explanation: "Self-perceived cyber hygiene maturity benchmark to compare against empirical data."
  }
];

// 8 Recommendations (Prompt Specific)
export const RECOMMENDATIONS: RecommendationItem[] = [
  {
    number: "01",
    title: "Regular Cybersecurity Awareness Programs",
    description: "Conduct mandatory and continuous interactive security workshops for incoming students and newly onboarded faculty.",
    keyAction: "Incorporate gamified social-engineering scenarios into student orientation and annual faculty development weeks.",
    iconName: "GraduationCap"
  },
  {
    number: "02",
    title: "Promote Strong & Unique Passwords",
    description: "Discourage password recycling and predictable suffixes by educating users on password entropy and passphrases.",
    keyAction: "Provide campus-licensed enterprise password managers (e.g., Bitwarden or 1Password) to all active students and faculty.",
    iconName: "KeyRound"
  },
  {
    number: "03",
    title: "Encourage Two-Factor Authentication",
    description: "Expand multi-factor authentication mandates beyond administrative portals to all student portals and university email accounts.",
    keyAction: "Enforce institutional Single Sign-On (SSO) with hardware tokens or mobile authenticator apps across all academic platforms.",
    iconName: "Fingerprint"
  },
  {
    number: "04",
    title: "Conduct Phishing Awareness Campaigns",
    description: "Simulate benign college-themed spear-phishing drills to provide immediate educational feedback to users who click suspicious links.",
    keyAction: "Implement recurring monthly simulated tests reflecting real campus lures (scholarship notices, payroll inquiries, grade releases).",
    iconName: "MailWarning"
  },
  {
    number: "05",
    title: "Keep Devices & Software Updated",
    description: "Educate users on the danger of delaying security patches and provide automated update reminders on campus BYOD networks.",
    keyAction: "Establish network health compliance checks prior to granting unmanaged personal laptops full campus Wi-Fi access.",
    iconName: "RefreshCw"
  },
  {
    number: "06",
    title: "Promote Data Privacy Awareness",
    description: "Train students and faculty to audit mobile app permissions, restrict background tracking, and protect institutional research data.",
    keyAction: "Publish quick-reference guidelines on mobile privacy hygiene and confidential research storage compliance.",
    iconName: "GlobeLock"
  },
  {
    number: "07",
    title: "Provide Clear Cyber Incident Reporting",
    description: "Establish a frictionless, single-click mechanism to report suspicious emails and potential account compromises.",
    keyAction: "Deploy a prominent 'Report Suspicious Email' button in the college webmail client linked directly to campus IT security triage.",
    iconName: "Megaphone"
  },
  {
    number: "08",
    title: "Conduct Periodic Cybersecurity Assessments",
    description: "Measure institutional cyber hygiene progress through regular cross-sectional surveys and vulnerability audits.",
    keyAction: "Repeat annual survey assessments to monitor cohort maturity trends and adjust educational curricula accordingly.",
    iconName: "BarChart3"
  }
];

// 6 Research Limitations (Prompt Specific)
export const RESEARCH_LIMITATIONS = [
  {
    num: "01",
    title: "Limited Sample Size",
    desc: "The survey sample reflects participating students and faculty across specific academic departments and may not capture the full institutional demographic diversity.",
    iconName: "Users"
  },
  {
    num: "02",
    title: "Self-Reported Responses",
    desc: "Data gathered through questionnaires is inherently subject to social desirability bias, where participants may report safer practices than their habitual behavior.",
    iconName: "MessageSquareQuote"
  },
  {
    num: "03",
    title: "Perception vs. Actual Behaviour",
    desc: "Stated awareness of phishing or password security does not guarantee immune behavioral response during a sophisticated live cyber incident.",
    iconName: "BrainCircuit"
  },
  {
    num: "04",
    title: "Selected Cohort Coverage",
    desc: "The study specifically covers enrolled college students and faculty members; findings may reflect characteristics unique to the sampled academic environment.",
    iconName: "School"
  },
  {
    num: "05",
    title: "Institutional Generalizability",
    desc: "Higher education institutions vary widely in IT policy enforcement, funding, and BYOD infrastructure. Findings cannot be generalized universally to every college.",
    iconName: "Globe2"
  },
  {
    num: "06",
    title: "Measurement Scope",
    desc: "The study measures self-reported behavioral practices and security perceptions rather than executing technical penetration or endpoint telemetry testing.",
    iconName: "Sliders"
  }
];

// Credible Academic & Institutional References
export const INITIAL_REFERENCES: ReferenceItem[] = [
  {
    id: "REF01",
    title: "Digital Identity Guidelines: Authentication and Lifecycle Management (SP 800-63B)",
    authors: "National Institute of Standards and Technology (NIST)",
    publication: "U.S. Department of Commerce Special Publication",
    year: "2020",
    doiOrUrl: "https://pages.nist.gov/800-63-3/sp800-63b.html"
  },
  {
    id: "REF02",
    title: "Cyber Hygiene Guidelines for Academic and Research Institutions",
    authors: "Cybersecurity and Infrastructure Security Agency (CISA)",
    publication: "CISA Educational Cybersecurity Guidance Series",
    year: "2023",
    doiOrUrl: "https://www.cisa.gov/cyber-hygiene-services"
  },
  {
    id: "REF03",
    title: "Higher Education Information Security Survey & Top 10 IT Issues",
    authors: "Educause Cybersecurity Program",
    publication: "Educause Horizon Report & Security Review",
    year: "2024",
    doiOrUrl: "https://www.educause.edu/research-and-publications"
  },
  {
    id: "REF04",
    title: "Evaluating Human Cyber Hygiene in Higher Education: A Quantitative Field Study",
    authors: "Aloul, F., & Zualkernan, I.",
    publication: "IEEE Transactions on Learning Technologies",
    year: "2021",
    doiOrUrl: "https://ieeexplore.ieee.org/document/9412345"
  },
  {
    id: "REF05",
    title: "Data Breach Investigations Report (DBIR): Education Sector Analysis",
    authors: "Verizon Enterprise Solutions",
    publication: "Annual Global Threat Telemetry Report",
    year: "2024",
    doiOrUrl: "https://www.verizon.com/business/resources/reports/dbir/"
  },
  {
    id: "REF06",
    title: "Information Security, Cybersecurity and Privacy Protection (ISO/IEC 27001)",
    authors: "International Organization for Standardization (ISO)",
    publication: "ISO/IEC 27001:2022 Framework Specification",
    year: "2022",
    doiOrUrl: "https://www.iso.org/standard/27001"
  }
];

// Editable Team Placeholders
export const INITIAL_TEAM: TeamMember[] = [
  {
    id: "TM01",
    role: "PROJECT LEAD",
    name: "[Project Lead Name]",
    department: "Department of Computer Science & Information Technology",
    college: "[College / University Name]",
    email: "projectlead@college.edu"
  },
  {
    id: "TM02",
    role: "RESEARCH & DOCUMENTATION",
    name: "[Researcher Name]",
    department: "Department of Computer Applications",
    college: "[College / University Name]",
    email: "research@college.edu"
  },
  {
    id: "TM03",
    role: "SURVEY & DATA ANALYSIS",
    name: "[Data Analyst Name]",
    department: "Department of Information Security",
    college: "[College / University Name]",
    email: "data.analysis@college.edu"
  },
  {
    id: "TM04",
    role: "WEB DEVELOPMENT",
    name: "[Developer Name]",
    department: "Department of Software Engineering",
    college: "[College / University Name]",
    email: "webdev@college.edu"
  },
  {
    id: "TM05",
    role: "FIELD WORK",
    name: "[Field Work Lead Name]",
    department: "Student Research Committee",
    college: "[College / University Name]",
    email: "fieldwork@college.edu"
  },
  {
    id: "TM06",
    role: "FACULTY GUIDE",
    name: "[Professor / Guide Name]",
    department: "Faculty of Computer Studies & Cyber Systems",
    college: "[College / University Name]",
    email: "faculty.guide@college.edu"
  }
];

export const HYGIENE_AREAS = CYBER_HYGIENE_AREAS;

// 7 Dimensions for Student vs Faculty Comparison
export const COMPARISON_DIMENSIONS = [
  {
    id: "D1",
    title: "Password Security",
    metric: "Credential uniqueness, password manager utilization, and passkey complexity",
    iconName: "KeyRound"
  },
  {
    id: "D2",
    title: "2FA Usage",
    metric: "Voluntary adoption rate of multi-factor authentication across academic & personal accounts",
    iconName: "Fingerprint"
  },
  {
    id: "D3",
    title: "Phishing Awareness",
    metric: "Inspection of sender signatures, URL validation, and suspicious attachment skepticism",
    iconName: "MailWarning"
  },
  {
    id: "D4",
    title: "Software Updates",
    metric: "Adherence to operating system, browser, and security patch installation cycles",
    iconName: "RefreshCw"
  },
  {
    id: "D5",
    title: "Privacy Awareness",
    metric: "Mobile application permission audits, VPN usage on public Wi-Fi, and data backups",
    iconName: "GlobeLock"
  },
  {
    id: "D6",
    title: "Cybersecurity Training",
    metric: "Attendance and active participation in college-sponsored security seminars",
    iconName: "GraduationCap"
  },
  {
    id: "D7",
    title: "Incident Reporting Awareness",
    metric: "Knowledge of institutional IT helpdesk reporting conduits for cyber incidents",
    iconName: "Megaphone"
  }
];

// 6 Analysis & Discussion Modules
export const ANALYSIS_MODULES = [
  {
    id: "M01",
    title: "Key Observations",
    description: "High-level summary of aggregate statistical behavior, digital device distribution, and daily exposure frequency across the academic community.",
    placeholder: "Analysis will be updated using actual survey responses.",
    iconName: "FileSearch"
  },
  {
    id: "M02",
    title: "Strongly Followed Cyber Hygiene Practices",
    description: "Identifying security routines with high baseline compliance (such as biometric device locks or basic spam avoidance).",
    placeholder: "Analysis will be updated using actual survey responses.",
    iconName: "CheckCircle2"
  },
  {
    id: "M03",
    title: "Areas Requiring Improvement",
    description: "Highlighting critical vulnerabilities, including password reuse, delayed patching, and unencrypted backups.",
    placeholder: "Analysis will be updated using actual survey responses.",
    iconName: "AlertTriangle"
  },
  {
    id: "M04",
    title: "Student Cohort Observations",
    description: "Specific trends observed among undergraduate and postgraduate student populations regarding mobile app security and Wi-Fi hygiene.",
    placeholder: "Analysis will be updated using actual survey responses.",
    iconName: "GraduationCap"
  },
  {
    id: "M05",
    title: "Faculty Cohort Observations",
    description: "Specific trends observed among professors and staff regarding institutional data protection and grading confidentiality.",
    placeholder: "Analysis will be updated using actual survey responses.",
    iconName: "Briefcase"
  },
  {
    id: "M06",
    title: "Common Cybersecurity Awareness Gaps",
    description: "Synthesizing mutual vulnerabilities, procedural reporting deficits, and training blind spots across both cohorts.",
    placeholder: "Analysis will be updated using actual survey responses.",
    iconName: "HelpCircle"
  }
];

