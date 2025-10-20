import React from 'react';
import { Campaign } from '../types';
import BackgroundEffects from './BackgroundEffects';

const BackArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

const creators = [
  { name: 'Kauane V.', initials: 'KV' },
  { name: 'Ana L.', initials: 'AL' },
  { name: 'Kauã T.', initials: 'KT' },
];

interface CreatorsPageProps {
  onBack: () => void;
  activeCampaign: Campaign;
}

const CreatorsPage: React.FC<CreatorsPageProps> = ({ onBack, activeCampaign }) => {
  const { colors } = activeCampaign;

  return (
    <div className="relative min-h-screen w-full bg-gray-900 text-white font-sans overflow-hidden flex flex-col">
        <style>
        {`
            @keyframes fade-in-up-delay {
                0% { opacity: 0; transform: translateY(20px); }
                100% { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-up-delay {
                animation: fade-in-up-delay 0.6s ease-out forwards;
            }
        `}
      </style>

      <div className="absolute inset-0 z-0 opacity-50">
        <BackgroundEffects activeCampaign={activeCampaign} />
      </div>
      <div className="absolute inset-0 bg-black/60 z-1"></div>
      
      <div className="relative z-10 flex flex-col h-screen">
        <header className="w-full z-20 flex-shrink-0 bg-gradient-to-b from-black/70 to-transparent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <img 
                        src={activeCampaign.logo} 
                        alt={`Logo ${activeCampaign.title}`} 
                        className="h-10 w-auto opacity-80" 
                    />
                    <button
                        onClick={onBack}
                        className={`inline-flex items-center px-6 py-2 rounded-full font-bold shadow-md transition-all transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 ${colors.accent} ${colors.accentHover} ${colors.ring} text-gray-900`}
                        style={{boxShadow: `0 0 15px ${colors.neonGlow}`}}
                    >
                        <BackArrowIcon />
                        Voltar
                    </button>
                </div>
            </div>
        </header>

        <main className="flex-grow flex flex-col items-center justify-center text-center p-4">
            <h1 
                className="text-5xl md:text-7xl font-black uppercase"
                style={{ color: colors.neon, textShadow: `0 0 15px ${colors.neonGlow}` }}
            >
                Nossa Equipe
            </h1>
            <p className="mt-2 text-2xl font-bold text-white/80">
                Turma 231
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {creators.map((creator, index) => (
                    <div 
                        key={creator.name}
                        className="bg-black/20 p-8 rounded-2xl border border-white/10 flex flex-col items-center gap-4 transition-all duration-300 hover:border-white/30 hover:scale-105 hover:shadow-2xl animate-fade-in-up-delay"
                        style={{
                            animationDelay: `${index * 150}ms`,
                            boxShadow: `0 0 20px rgba(0,0,0,0.5)`,
                        } as React.CSSProperties}
                        onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 0 25px ${colors.neonGlow}`}
                        onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(0,0,0,0.5)'}
                    >
                        <div 
                            className="w-24 h-24 rounded-full flex items-center justify-center text-4xl font-black border-4"
                            style={{ borderColor: colors.neon, color: colors.neon, textShadow: `0 0 8px ${colors.neonGlow}` }}
                        >
                            {creator.initials}
                        </div>
                        <h3 className="text-2xl font-bold text-white mt-2">{creator.name}</h3>
                    </div>
                ))}
            </div>
        </main>
      </div>
    </div>
  );
};

export default CreatorsPage;