import React, { useState } from 'react';
import { Campaign } from '../types';

interface HelpModalProps {
  campaigns: Campaign[];
  activeCampaign: Campaign;
  onClose: () => void;
}

const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.5l.053-.053A2 2 0 018.828 4h6.344a2 2 0 011.414.586l.053.053M4 11V6a2 2 0 012-2h12a2 2 0 012 2v5" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);


const HelpModal: React.FC<HelpModalProps> = ({ campaigns, activeCampaign, onClose }) => {
  const initialIndex = campaigns.findIndex(c => c.id === activeCampaign.id);
  const [selectedIndex, setSelectedIndex] = useState(initialIndex >= 0 ? initialIndex : 0);

  const selectedCampaign = campaigns[selectedIndex];
  
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="help-modal-title"
    >
      <div
        className="relative bg-gray-800 text-white rounded-lg shadow-2xl max-w-3xl w-full m-4 overflow-hidden animate-slide-up border border-white/10 flex flex-col"
        onClick={(e) => e.stopPropagation()}
        style={{boxShadow: `0 0 25px rgba(255,255,255,0.1)`}}
      >
        <div className="p-8 lg:p-10 flex-shrink-0">
            <div className="flex justify-between items-start">
                <h2
                id="help-modal-title"
                className="text-3xl sm:text-4xl font-bold uppercase text-gray-100"
                >
                Central de Ajuda
                </h2>
                <button
                    onClick={onClose}
                    className="p-2 -mt-2 -mr-2 rounded-full text-gray-400 bg-gray-900/50 hover:bg-gray-700/70 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
                    aria-label="Fechar"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <p className="mt-4 text-gray-400">
                Se você ou alguém que você conhece precisa de apoio, não hesite em procurar ajuda. Selecione uma campanha para ver os recursos disponíveis.
            </p>
        </div>
        
        <div className="px-8 lg:px-10 border-b border-gray-700 flex-shrink-0">
            <div className="flex items-center gap-4">
                {campaigns.map((campaign, index) => (
                    <button
                        key={campaign.id}
                        onClick={() => setSelectedIndex(index)}
                        className={`py-3 px-2 font-semibold border-b-4 transition-all duration-300 ${
                            selectedIndex === index
                            ? 'text-white'
                            : 'text-gray-400 hover:text-white border-transparent'
                        }`}
                        style={{
                            borderColor: selectedIndex === index ? campaign.colors.neon : 'transparent'
                        }}
                        aria-selected={selectedIndex === index}
                    >
                        {campaign.title}
                    </button>
                ))}
            </div>
        </div>

        <div className="p-8 lg:p-10 bg-black/20 overflow-y-auto min-h-0 flex-grow max-h-[50vh]">
            <div className="space-y-4">
                {selectedCampaign.details.help.items.map(item => (
                    <div key={item.name} className="p-4 bg-gray-700/50 rounded-lg border border-white/10 animate-fade-in-up-sm">
                        <h4 className="font-bold text-lg" style={{color: selectedCampaign.colors.neonGlow}}>{item.name}</h4>
                        <p className="text-gray-300 mt-1 text-sm">{item.description}</p>
                        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-3">
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline inline-flex items-center gap-2" style={{color: selectedCampaign.colors.neonGlow}}>
                                <GlobeIcon /> Visitar Site
                            </a>
                            {item.phone && (
                                <a href={`tel:${item.phone}`} className="font-semibold hover:underline inline-flex items-center gap-2" style={{color: selectedCampaign.colors.neonGlow}}>
                                    <PhoneIcon /> Ligar: {item.phone}
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in {
            animation: fade-in 0.3s ease-out forwards;
          }
          @keyframes slide-up {
            from { transform: translateY(20px) scale(0.98); opacity: 0; }
            to { transform: translateY(0) scale(1); opacity: 1; }
          }
          .animate-slide-up {
            animation: slide-up 0.4s ease-out forwards;
            animation-delay: 0.05s;
          }
          @keyframes fade-in-up-sm {
              0% { opacity: 0; transform: translateY(10px); }
              100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up-sm {
              animation: fade-in-up-sm 0.5s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default HelpModal;
