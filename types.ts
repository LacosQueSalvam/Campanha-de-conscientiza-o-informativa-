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
}

export interface CampaignDetails {
  symptoms: {
    title: string;
    items: string[];
  };
  stats: {
    title: string;
    items: {
      value: string;
      label: string;
      description: string;
    }[];
  };
  prevention: {
    title: string;
    items: string[];
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