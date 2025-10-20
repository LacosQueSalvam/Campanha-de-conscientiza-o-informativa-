import React, { useState } from 'react';
import { Campaign, Story } from '../types';
import { INITIAL_STORIES } from '../data/stories';
import BackgroundEffects from './BackgroundEffects';

const BackArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

const QuillIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
);

interface StoriesPageProps {
  onBack: () => void;
  campaigns: Campaign[];
  activeCampaign: Campaign;
}

const StoryCard: React.FC<{ story: Story; campaign: Campaign | undefined }> = ({ story, campaign }) => {
    if (!campaign) return null;

    return (
        <div 
            className="bg-black/20 p-6 rounded-2xl border-l-4 flex flex-col gap-4 transition-all duration-300 hover:bg-black/40 hover:scale-[1.02]"
            style={{ borderColor: campaign.colors.neon }}
        >
            <p className="text-white/80 italic leading-relaxed">"{story.text}"</p>
            <p className="mt-auto text-right font-bold" style={{color: campaign.colors.neonGlow}}>- {story.author}</p>
        </div>
    );
};

const StoriesPage: React.FC<StoriesPageProps> = ({ onBack, campaigns, activeCampaign }) => {
  const [stories, setStories] = useState<Story[]>(INITIAL_STORIES);
  const [filter, setFilter] = useState<string>('all');
  const [formVisible, setFormVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [newStory, setNewStory] = useState({ author: '', text: '', campaignId: 'setembro-amarelo' as const });
  
  const filteredStories = filter === 'all' ? stories : stories.filter(s => s.campaignId === filter);
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a server.
    // Here, we'll just show a thank you message.
    setFormSubmitted(true);
    setFormVisible(false);
    setNewStory({ author: '', text: '', campaignId: 'setembro-amarelo' });
     setTimeout(() => setFormSubmitted(false), 5000); // Hide message after 5 seconds
  };

  return (
    <div className="relative min-h-screen w-full bg-gray-900 text-white font-sans overflow-hidden flex flex-col">
       <style>
        {`
            @keyframes fade-in-up {
                0% { opacity: 0; transform: translateY(20px); }
                100% { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-up {
                animation: fade-in-up 0.6s ease-out forwards;
            }
            .custom-scrollbar {
              scrollbar-width: none; /* Firefox */
              -ms-overflow-style: none;  /* Internet Explorer 10+ */
            }
            .custom-scrollbar::-webkit-scrollbar {
              display: none; /* Safari and Chrome */
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
                        className={`inline-flex items-center px-6 py-2 rounded-full font-bold shadow-md transition-all transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 ${activeCampaign.colors.accent} ${activeCampaign.colors.accentHover} ${activeCampaign.colors.ring} text-gray-900`}
                        style={{boxShadow: `0 0 15px ${activeCampaign.colors.neonGlow}`}}
                    >
                        <BackArrowIcon />
                        Voltar
                    </button>
                </div>
            </div>
        </header>

        <main className="flex-grow flex flex-col items-center p-4 overflow-y-auto custom-scrollbar">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 
                    className="text-5xl md:text-7xl font-black uppercase"
                    style={{ color: activeCampaign.colors.neon, textShadow: `0 0 15px ${activeCampaign.colors.neonGlow}` }}
                >
                    Mural de Histórias
                </h1>
                <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">
                    Um espaço seguro para compartilhar experiências e encontrar apoio. Sua história pode ser a luz que alguém precisa.
                </p>

                <div className="my-8 flex flex-wrap justify-center items-center gap-4">
                    <button
                        onClick={() => setFilter('all')}
                        className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                            filter === 'all' 
                            ? 'bg-white text-gray-900 shadow-lg' 
                            : 'bg-white/10 hover:bg-white/20 text-white/70 hover:text-white'
                        }`}
                        style={{
                            boxShadow: filter === 'all' ? `0 0 15px rgba(255,255,255,0.5)` : 'none'
                        }}
                    >
                        Todas
                    </button>
                    {campaigns.map(c => (
                        <button
                            key={c.id}
                            onClick={() => setFilter(c.id)}
                            className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                                filter === c.id 
                                ? 'text-white shadow-lg' 
                                : 'bg-white/10 hover:bg-white/20 text-white/70 hover:text-white'
                            }`}
                            style={{
                                backgroundColor: filter === c.id ? c.colors.neon : undefined,
                                textShadow: filter === c.id ? '0 1px 3px rgba(0, 0, 0, 0.4)' : 'none',
                                boxShadow: filter === c.id ? `0 0 15px ${c.colors.neonGlow}` : 'none'
                            }}
                        >
                            {c.title}
                        </button>
                    ))}
                </div>

                <div className="my-8">
                     {!formVisible && !formSubmitted && (
                         <button onClick={() => setFormVisible(true)} className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold bg-white/5 border-2 border-dashed border-white/20 hover:border-white/50 hover:bg-white/10 transition-all text-lg">
                            <QuillIcon /> Compartilhe sua história
                         </button>
                     )}
                     {formSubmitted && (
                         <div className="p-4 rounded-lg bg-green-500/20 text-green-300 border border-green-500/30 max-w-md mx-auto animate-fade-in-up">
                            Obrigado por compartilhar! Sua história inspira esperança.
                         </div>
                     )}
                </div>

                {formVisible && (
                    <div className="max-w-2xl mx-auto my-12 text-left bg-black/30 p-8 rounded-2xl animate-fade-in-up">
                        <h3 className="text-2xl font-bold text-center mb-6">Sua voz importa</h3>
                         <form onSubmit={handleFormSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="campaignId" className="block text-sm font-medium text-white/70 mb-2">Qual campanha sua história representa?</label>
                                <select 
                                    id="campaignId" 
                                    value={newStory.campaignId}
                                    onChange={(e) => setNewStory({...newStory, campaignId: e.target.value as any})}
                                    className="w-full bg-white/10 p-3 rounded-md border border-white/20 focus:ring-2 focus:outline-none"
                                    style={{'--tw-ring-color': activeCampaign.colors.neon} as React.CSSProperties}
                                >
                                    {campaigns.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="text" className="block text-sm font-medium text-white/70 mb-2">Sua mensagem ou história:</label>
                                <textarea 
                                    id="text"
                                    rows={5}
                                    value={newStory.text}
                                    onChange={(e) => setNewStory({...newStory, text: e.target.value})}
                                    required
                                    placeholder="Escreva aqui..."
                                    className="w-full bg-white/10 p-3 rounded-md border border-white/20 focus:ring-2 focus:outline-none"
                                    style={{'--tw-ring-color': activeCampaign.colors.neon} as React.CSSProperties}
                                ></textarea>
                            </div>
                             <div>
                                <label htmlFor="author" className="block text-sm font-medium text-white/70 mb-2">Seu nome ou apelido (opcional):</label>
                                <input 
                                    type="text" 
                                    id="author"
                                    value={newStory.author}
                                    onChange={(e) => setNewStory({...newStory, author: e.target.value})}
                                    placeholder="Anônimo"
                                    className="w-full bg-white/10 p-3 rounded-md border border-white/20 focus:ring-2 focus:outline-none"
                                    style={{'--tw-ring-color': activeCampaign.colors.neon} as React.CSSProperties}
                                />
                            </div>
                            <div className="flex items-center justify-end gap-4 pt-4">
                                <button type="button" onClick={() => setFormVisible(false)} className="px-6 py-2 rounded-full font-semibold bg-gray-600 hover:bg-gray-500 transition-colors">Cancelar</button>
                                <button type="submit" className="px-8 py-2 rounded-full font-bold text-gray-900 transition-transform hover:scale-105 shadow-lg" style={{backgroundColor: activeCampaign.colors.accent}}>Enviar</button>
                            </div>
                         </form>
                    </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left animate-fade-in-up">
                    {filteredStories.map(story => (
                        <StoryCard key={story.id} story={story} campaign={campaigns.find(c => c.id === story.campaignId)} />
                    ))}
                </div>
            </div>
        </main>
      </div>
    </div>
  );
};

export default StoriesPage;