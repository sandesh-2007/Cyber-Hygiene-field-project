/**
 * Research Project Data Types & Interfaces
 * Topic: Cyber Hygiene Practices Among College Students and Faculty
 */

export type TargetAudience = 'All' | 'Students' | 'Faculty';

export type QuestionType = 'likert' | 'binary' | 'multiple_choice';

export interface SurveyQuestion {
  id: string;
  categoryNumber: string; // e.g. "01"
  categoryName: string;
  questionText: string;
  type: QuestionType;
  options: string[];
  studentDistribution: { [option: string]: number }; // percentages or counts
  facultyDistribution: { [option: string]: number };
  overallPositivePercentage: number; // e.g., 72% practice safe behavior
  keyInsight: string;
}

export interface CyberHygieneCategory {
  id: string;
  number: string; // e.g. "01"
  title: string;
  shortDescription: string;
  fullExplanation: string;
  icon: string;
  studentScore: number; // out of 100
  facultyScore: number; // out of 100
  overallScore: number; // out of 100
  vulnerabilityLevel: 'Low' | 'Moderate' | 'High' | 'Critical';
  keyQuestionsCount: number;
  subMetrics: {
    name: string;
    studentPct: number;
    facultyPct: number;
  }[];
}

export interface ResearchObjective {
  id: number;
  title: string;
  description: string;
  metric: string;
  icon: string;
}

export interface ResearchReference {
  id: string;
  authors: string;
  year: number;
  title: string;
  publication: string;
  doiOrUrl?: string;
  apaCitation: string;
  ieeeCitation: string;
  bibtex: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  institution: string;
  email: string;
  avatarUrl?: string;
  contribution: string;
}

export interface ResearchDataset {
  isDemoData: boolean;
  lastUpdated: string;
  institutionalScope: string;
  stats: {
    totalResponses: number;
    studentResponses: number;
    facultyResponses: number;
    surveyQuestions: number;
    categoriesCount: number;
    overallHygieneScore: number;
    studentHygieneScore: number;
    facultyHygieneScore: number;
  };
  categories: CyberHygieneCategory[];
  questions: SurveyQuestion[];
  recommendations: {
    id: string;
    number: string;
    title: string;
    target: 'All' | 'Students' | 'Faculty' | 'Institutional IT';
    priority: 'Immediate' | 'High' | 'Medium';
    description: string;
    actionItems: string[];
  }[];
}
