import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Campaign, ChatMessage } from '../types';
import AuraIcon from './AuraIcon';

interface ChatbotProps {
    activeCampaign: Campaign;
}

const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path d="M3.105 3.105a1.5 1.5 0 011.952-.322l11.54 6.5-11.54 6.5a1.5 1.5 0 01-1.952-.322l-1.943-3.41a1.5 1.5 0 01.134-1.795l4.38-5.84-4.38-5.84a1.5 1.5 0 01-.134-1.795l1.943-3.41z" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1.5 flex-shrink-0">
      <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.106.407-.238.655-.398a8.448 8.448 0 00.952-.705A12.79 12.79 0 0015 13.51a12.79 12.79 0 00-5-10.99A12.79 12.79 0 005 13.51a8.448 8.448 0 00.952.705c.248.16.469.292.655.398.09.052.183.103.281.14l.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
    </svg>
);


const Chatbot: React.FC<ChatbotProps> = ({ activeCampaign }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [location, setLocation] = useState<{ latitude: number; longitude: number; } | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const systemInstruction = "You are Aura, a friendly and empathetic health assistant. Your purpose is to provide helpful information about the health campaigns (Setembro Amarelo, Outubro Rosa, Novembro Azul) and assist users in finding nearby health services using the available tools. Always be supportive and clear in your responses. When providing place information, use the provided grounding sources. Respond in Brazilian Portuguese.";

    useEffect(() => {
        setMessages([
            {
                role: 'model',
                content: 'Olá! Eu sou a Aura, sua assistente de saúde. Como posso ajudar hoje? Você pode perguntar sobre as campanhas ou sobre locais de ajuda próximos.'
            }
        ]);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (error: GeolocationPositionError) => {
                    console.error("Geolocation error:", error.message);
                    let userMessage = "Não foi possível obter sua localização. A busca por locais próximos pode não funcionar.";
                    if (error.code === 1) { // PERMISSION_DENIED
                        userMessage = "O acesso à localização foi negado. Para encontrar serviços próximos, por favor, habilite a permissão nas configurações do seu navegador.";
                    }
                    setMessages(prev => [...prev, { role: 'error', content: userMessage }]);
                }
            );
        } else {
            setMessages(prev => [...prev, { role: 'error', content: "Geolocalização não é suportada por este navegador." }]);
        }
    }, []);
    
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 400); // Delay to allow animation
        }
    }, [isOpen]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInput.trim() || isLoading) return;

        const newMessages: ChatMessage[] = [...messages, { role: 'user', content: userInput }];
        setMessages(newMessages);
        setUserInput('');
        setIsLoading(true);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: userInput,
                config: {
                    systemInstruction: systemInstruction,
                    tools: [{ googleMaps: {} }],
                },
                ...(location && {
                    toolConfig: {
                        retrievalConfig: {
                            latLng: location,
                        }
                    }
                })
            });

            const text = response.text;
            const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
            
            const sources = groundingChunks
                .filter(chunk => chunk.maps)
                .map(chunk => ({
                    title: chunk.maps.title,
                    uri: chunk.maps.uri,
                }));

            setMessages([...newMessages, { role: 'model', content: text, groundingSources: sources.length > 0 ? sources : undefined }]);

        } catch (error) {
            console.error("Gemini API error:", error);
            setMessages([...newMessages, { role: 'error', content: "Desculpe, não consegui processar sua solicitação. Tente novamente mais tarde." }]);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <>
        <style>{`
          .aura-gradient {
            background-image: radial-gradient(circle at top right, ${activeCampaign.colors.neon} -20%, transparent 50%);
          }
          .custom-scrollbar::-webkit-scrollbar { display: none; }
          .custom-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
        
        {/* FAB */}
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full text-white shadow-2xl transition-all duration-300 ease-out flex items-center justify-center transform hover:scale-110"
            style={{ 
                backgroundColor: activeCampaign.colors.neon,
                boxShadow: `0 0 20px ${activeCampaign.colors.neonGlow}`
            }}
            aria-label="Abrir chat com Aura"
        >
            <AuraIcon className={`w-8 h-8 transition-transform duration-300 ${isOpen ? 'rotate-90 scale-75' : 'rotate-0'}`} />
        </button>
        
        {/* Chat Window */}
        <div 
            className={`fixed bottom-28 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm h-[70vh] max-h-[600px] flex flex-col bg-gray-900/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
            }`}
            style={{ '--accent-color': activeCampaign.colors.neon } as React.CSSProperties}
            role="dialog"
            aria-hidden={!isOpen}
        >
            {/* Header */}
            <header className="relative p-4 flex-shrink-0 border-b border-white/10 aura-gradient">
                <h3 className="text-xl font-bold text-center text-white" style={{textShadow: '0 1px 3px rgba(0,0,0,0.4)'}}>Fale com a Aura</h3>
                <button 
                    onClick={() => setIsOpen(false)}
                    className="absolute top-1/2 -translate-y-1/2 right-3 p-2 text-white/70 hover:text-white transition-colors"
                    aria-label="Fechar chat"
                >
                    <CloseIcon />
                </button>
            </header>

            {/* Messages */}
            <div ref={messagesEndRef} className="flex-grow p-4 space-y-4 overflow-y-auto custom-scrollbar">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                       {msg.role === 'model' && <AuraIcon className="w-6 h-6 flex-shrink-0 text-[var(--accent-color)]" />}
                       <div className={`w-fit max-w-[85%] rounded-2xl px-4 py-2.5 ${
                           msg.role === 'user' ? 'bg-[var(--accent-color)] text-gray-900 rounded-br-none' :
                           msg.role === 'model' ? 'bg-gray-800 text-white/90 rounded-bl-none' :
                           'bg-red-500/20 text-red-300 border border-red-500/30 rounded-bl-none'
                       }`}>
                           <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                           {msg.groundingSources && (
                               <div className="mt-3 pt-2 border-t border-white/10 space-y-1.5">
                                   {msg.groundingSources.map(source => (
                                       <a 
                                         href={source.uri} 
                                         key={source.uri}
                                         target="_blank" 
                                         rel="noopener noreferrer"
                                         className="flex items-center text-xs text-[var(--accent-color)] hover:underline"
                                       >
                                         <MapPinIcon />
                                         {source.title}
                                       </a>
                                   ))}
                               </div>
                           )}
                       </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex items-end gap-2 justify-start">
                        <AuraIcon className="w-6 h-6 flex-shrink-0 text-[var(--accent-color)] animate-pulse" />
                        <div className="bg-gray-800 rounded-2xl rounded-bl-none px-4 py-3">
                           <div className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                                <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                                <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse"></span>
                           </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-3 flex-shrink-0 border-t border-white/10">
                <div className="flex items-center gap-2">
                    <input
                        ref={inputRef}
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Digite sua mensagem..."
                        disabled={isLoading}
                        className="w-full bg-gray-800 text-white placeholder-gray-500 px-4 py-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] transition-all"
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !userInput.trim()}
                        className="w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center text-gray-900 transition-all duration-200 transform enabled:hover:scale-110 disabled:opacity-50"
                        style={{backgroundColor: 'var(--accent-color)'}}
                        aria-label="Enviar mensagem"
                    >
                        <SendIcon />
                    </button>
                </div>
            </form>
        </div>
        </>
    );
};

export default Chatbot;