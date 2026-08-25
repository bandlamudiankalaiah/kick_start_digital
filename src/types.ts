export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  badge: string;
  description: string;
  deliverables: string[];
  metricsHighlight: string;
  idealFor: string;
  startingFrom?: string;
  caseStudySnippet: {
    client: string;
    result: string;
  };
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  logoText: string;
  heroMetric: string;
  heroMetricLabel: string;
  secondaryMetrics: { label: string; value: string }[];
  summary: string;
  challenge: string;
  strategy: string[];
  results: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  tags: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  date: string;
  content: string;
  serviceUsed: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'WordPress & Tech' | 'SEO & Ads' | 'Pricing & Terms';
}

export interface ComparisonRow {
  feature: string;
  kickstart: string;
  kickstartPositive: boolean;
  traditional: string;
  traditionalPositive: boolean;
}

export interface EnquiryFormData {
  goal: string[];
  currentWebsite: string;
  monthlyBudget: string;
  timeline: string;
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  notes: string;
}

export interface AuditResult {
  url: string;
  overallScore: number;
  speedScore: number;
  seoScore: number;
  mobileScore: number;
  croScore: number;
  insights: {
    type: 'positive' | 'warning' | 'critical';
    title: string;
    description: string;
  }[];
}
