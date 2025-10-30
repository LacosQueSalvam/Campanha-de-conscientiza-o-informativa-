export interface Question {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Quiz {
  title: string;
  questions: Question[];
}

export interface MythOrTruth {
  statement: string;
  topic?: string;
  isMyth: boolean;
  explanation: string;
}

export interface MythsVsTruths {
  title: string;
  items: MythOrTruth[];
  source?: { name: string; url: string };
}

export interface Scenario {
  scenario: string;
  goodResponse: {
    text: string;
    explanation: string;
  };
  badResponse: {
    text: string;
    explanation: string;
  };
}


export interface SupporterGuide {
  title: string;
  scenarios: Scenario[];
}

export interface RiskFactors {
  title: string;
  items: string[];
  source?: { name: string; url: string };
}

export interface PatientRights {
  title: string;
  items: {
    name: string;
    description: string;
    source?: { name: string; url: string };
  }[];
}

export interface Story {
  id: number;
  campaignId: 'setembro-amarelo' | 'outubro-rosa' | 'novembro-azul';
  author: string;
  text: string;
}

export interface CampaignDetails {
  symptoms: {
    title: string;
    items: string[];
    source?: { name: string; url: string };
  };
  stats: {
    title: string;
    items: {
      value: string;
      label: string;
      description: string;
      year?: string | number;
      source?: string;
    }[];
  };
  prevention: {
    title: string;
    items: string[];
    source?: { name: string; url: string };
  };
  help: {
    title: string;
    items: {
      name: string;
      description: string;
      link: string;
      phone?: string;
    }[];
  };
  quiz: Quiz;
  mythsVsTruths: MythsVsTruths;
  tips?: {
    title: string;
    items: string[];
  };
  supporterGuide?: SupporterGuide;
  riskFactors?: RiskFactors;
  patientRights?: PatientRights;
}


export interface Campaign {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  logo: string;
  objectPosition?: string; // e.g., 'object-center', 'object-right', 'object-left-top'
  textPosition?: 'left' | 'center'; // e.g., 'left', 'center'
  colors: {
    bg: string; // e.g., 'from-gray-900 to-yellow-900/20'
    text: string; // e.g., 'text-yellow-200'
    accent: string; // e.g., 'bg-yellow-400'
    accentHover: string; // e.g., 'hover:bg-yellow-500'
    ring: string; // e.g., 'ring-yellow-400'
    neon: string; // e.g., '#facc15'
    neonGlow: string; // e.g., '#fef08a'
  };
  details: CampaignDetails;
}

// FIX: Add ChatMessage interface for use in the Chatbot component.
export interface ChatMessage {
  role: 'user' | 'model' | 'error';
  content: string;
  groundingSources?: {
    title: string;
    uri: string;
  }[];
}