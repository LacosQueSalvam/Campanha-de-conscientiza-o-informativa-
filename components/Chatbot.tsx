import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { Campaign, ChatMessage } from '../types';
import { CONTEXT_FOR_CHATBOT } from '../constants';
import AuraIcon from './AuraIcon';

interface ChatbotProps {
  activeCampaign: Campaign;
}

const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path d="M3.105 3.105a1.5 1.5 0 011.995-.24l12.49 6.244a1.5 1.5 0 010 2.79l-12.49 6.245a1.5 1.5 0 01-1.995-2.55L6.637 10 3.105 5.655a1.5 1.5 0 010-2.55z" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const TypingIndicator = () => (
    <div className="flex items-center space-x-1">
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
    </div>
);

const SYSTEM_INSTRUCTION = `
Você é Aura, uma assistente virtual de saúde para um site sobre as campanhas Setembro Amarelo (prevenção ao suicídio), Outubro Rosa (câncer de mama) e Novembro Azul (câncer de próstata). Sua personalidade é empática, acolhedora e informativa. Use uma linguagem clara, positiva e acessível.

**SUA DIRETRIZ MAIS IMPORTANTE (NÃO DEVE SER IGNORADA):**
Se o usuário expressar sentimentos de angústia extrema, desespero, ou usar palavras-chave como "suicídio", "não aguento mais", "quero morrer", "desistir de tudo", sua resposta DEVE seguir este protocolo em duas partes, sem exceção:
1.  **Validação Empática:** Comece com uma frase de apoio, como "Sinto muito que você esteja passando por isso. É muito corajoso da sua parte compartilhar seus sentimentos, e quero que saiba que você não está só."
2.  **Direcionamento Imediato:** IMEDIATAMENTE após a validação, forneça os contatos de ajuda profissional. Diga: "Como sou uma assistente virtual, não consigo oferecer o suporte especializado que você merece. Mas existem pessoas reais e treinadas prontas para te ouvir agora. Por favor, entre em contato com um destes serviços gratuitos e confidenciais:"
    *   **CVV (Centro de Valorização da Vida):** Ligue 188 ou acesse cvv.org.br (atendimento 24 horas).
    *   **CAPS (Centros de Atenção Psicossocial):** Procure o mais próximo na sua cidade para apoio presencial.

**DIRETRIZES DE CONTEÚDO E FORMATAÇÃO:**
- **Use Markdown para formatar suas respostas e garantir a legibilidade.**
- **Separe parágrafos com quebras de linha.**
- **Use listas com asteriscos (*) para enumerar itens (sintomas, dicas, etc.).**
- **Use negrito (**texto**) para destacar termos importantes.**
- Baseie TODAS as suas respostas sobre as campanhas APENAS nas informações fornecidas a seguir. Não invente dados ou estatísticas.
- Responda de forma concisa e direta.
- Quando a conversa começar, apresente-se como Aura e ofereça 2 ou 3 sugestões de perguntas em botões para guiar o usuário.

**INFORMAÇÕES DISPONÍVEIS:**
${CONTEXT_FOR_CHATBOT}
`;

const FormattedMessage: React.FC<{ content: string }> = ({ content }) => {
    // Helper to process inline formatting like bold text.
    const renderInline = (text: string) => {
        const parts = text.split(/(\*\*.*?\*\*)/g).filter(Boolean);
        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={index}>{part.slice(2, -2)}</strong>;
            }
            return part;
        });
    };

    // Process blocks of content (paragraphs or lists).
    const blocks = content.split(/\n{2,}/); // Split by 2 or more newlines

    return (
        <>
            {blocks.map((block, blockIndex) => {
                const trimmedBlock = block.trim();
                
                // Check if the block is a list.
                if (trimmedBlock.startsWith('* ')) {
                    const listItems = trimmedBlock.split('\n').map(item => item.trim().replace(/^\*\s*/, ''));
                    return (
                        <ul key={blockIndex} className="list-disc list-inside space-y-1 my-2">
                            {listItems.map((item, itemIndex) => (
                                <li key={itemIndex}>{renderInline(item)}</li>
                            ))}
                        </ul>
                    );
                }
                
                // Otherwise, treat it as a paragraph.
                // The parent container has `whitespace-pre-wrap`, so single newlines are preserved.
                if (trimmedBlock) {
                    return <p key={blockIndex}>{renderInline(trimmedBlock)}</p>;
                }

                return null;
            })}
        </>
    );
};

const Chatbot: React.FC<ChatbotProps> = ({ activeCampaign }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [initialSuggestions, setInitialSuggestions] = useState<string[]>([]);
  
  useEffect(() => {
    // FIX: Switched from `import.meta.env.VITE_API_KEY` to `process.env.API_KEY` to align with project guidelines.
    const apiKey = process.env.VITE_API_KEY;

    if (!apiKey) {
      console.error("Erro ao inicializar o chatbot: A variável de ambiente VITE_API_KEY não está definida.");
      const errorMessage: ChatMessage = {
          role: 'model',
          content: "Olá! Parece que a chave de API para o assistente virtual não foi configurada. Certifique-se de que a variável de ambiente `API_KEY` está definida."
      };
      setMessages([errorMessage]);
      setIsLoading(false);
      return;
    }

    try {
      const ai = new GoogleGenAI({ apiKey });
      chatRef.current = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: { systemInstruction: SYSTEM_INSTRUCTION },
      });
      
      const greetingMessage: ChatMessage = {
          role: 'model',
          content: "Olá! Eu sou a Aura, sua assistente virtual de bem-estar. Como posso te ajudar hoje?"
      };
      setMessages([greetingMessage]);
      setInitialSuggestions([
          `O que é ${activeCampaign.title}?`,
          "Quais os sinais de alerta?",
          "Preciso de contatos de ajuda."
      ]);

    } catch (error) {
      console.error("Erro ao inicializar o chatbot:", error);
      const errorMessage: ChatMessage = {
          role: 'model',
          content: "Desculpe, estou com problemas para me conectar no momento. Por favor, tente novamente mais tarde."
      };
      setMessages([errorMessage]);
    }
  }, [activeCampaign.title]);
  
  useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (messageText: string) => {
    if (!messageText.trim() || isLoading || !chatRef.current) return;

    const userMessage: ChatMessage = { role: 'user', content: messageText };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setInput('');
    if(initialSuggestions.length > 0) setInitialSuggestions([]);

    try {
        const responseStream = await chatRef.current.sendMessageStream({ message: messageText });

        let currentModelMessage = '';
        setMessages(prev => [...prev, { role: 'model', content: '' }]);

        for await (const chunk of responseStream) {
            currentModelMessage += chunk.text;
            setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1] = { role: 'model', content: currentModelMessage };
                return newMessages;
            });
        }
    } catch (error) {
        console.error("Erro ao enviar mensagem:", error);
        const errorMessage: ChatMessage = { role: 'model', content: "Ocorreu um erro ao processar sua mensagem. Por favor, tente novamente." };
        setMessages(prev => [...prev.slice(0, -1), errorMessage]);
    } finally {
        setIsLoading(false);
    }
  };
  
  const handleFormSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      handleSendMessage(input);
  }

  return (
    <>
      {/* Chat Window */}
      <div 
        className={`fixed bottom-24 right-4 sm:right-6 md:right-8 z-50 w-[calc(100%-2rem)] max-w-md bg-gray-800/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all duration-500 ease-in-out origin-bottom-right ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}
        style={{ '--neon-glow-color': activeCampaign.colors.neonGlow, '--neon-color': activeCampaign.colors.neon } as React.CSSProperties}
      >
        {/* Header */}
        <div className="p-4 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: activeCampaign.colors.neon, boxShadow: `0 0 10px ${activeCampaign.colors.neonGlow}` }}>
              <AuraIcon className="w-6 h-6 text-gray-900" />
            </div>
            <div>
                <h3 className="font-bold text-lg text-white">Aura</h3>
                <p className="text-xs text-green-400 flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Online
                </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10">
            <CloseIcon />
          </button>
        </div>

        {/* Messages */}
        <div className="p-4 h-96 overflow-y-auto custom-scrollbar">
            <div className="space-y-4">
            {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                        msg.role === 'user' 
                        ? 'bg-blue-600 text-white rounded-br-lg' 
                        : 'bg-gray-700 text-gray-200 rounded-bl-lg'
                    }`}>
                        {msg.role === 'model' ? <FormattedMessage content={msg.content} /> : msg.content}
                    </div>
                </div>
            ))}
             {isLoading && (
                 <div className="flex justify-start">
                    <div className="max-w-[80%] p-3 rounded-2xl bg-gray-700 text-gray-200 rounded-bl-lg">
                        <TypingIndicator />
                    </div>
                </div>
            )}
            {initialSuggestions.length > 0 && (
                <div className="pt-4 space-y-2 animate-fade-in-up">
                    {initialSuggestions.map((suggestion, i) => (
                        <button key={i} onClick={() => handleSendMessage(suggestion)} className="w-full text-left p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 text-sm font-semibold transition-colors">
                            {suggestion}
                        </button>
                    ))}
                </div>
            )}
            <div ref={messagesEndRef} />
            </div>
        </div>

        {/* Input */}
        <form onSubmit={handleFormSubmit} className="p-4 border-t border-white/10">
            <div className="flex items-center gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Digite sua mensagem..."
                    className="w-full bg-gray-900/70 border border-gray-600 rounded-full py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2"
                    style={{'--tw-ring-color': activeCampaign.colors.neon} as React.CSSProperties}
                    disabled={!chatRef.current}
                />
                <button type="submit" disabled={isLoading || !chatRef.current} className="p-3 rounded-full text-white disabled:opacity-50 transition-all" style={{backgroundColor: activeCampaign.colors.neon}}>
                    <SendIcon />
                </button>
            </div>
        </form>
      </div>

      {/* FAB */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="fixed bottom-4 right-4 sm:right-6 md:right-8 z-40 w-16 h-16 rounded-full text-gray-900 flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4"
        style={{ 
            backgroundColor: activeCampaign.colors.neon, 
            boxShadow: `0 0 20px ${activeCampaign.colors.neonGlow}`,
            '--tw-ring-color': activeCampaign.colors.neonGlow
        } as React.CSSProperties}
        aria-label="Abrir chat com a assistente Aura"
      >
        <AuraIcon className="w-8 h-8 transition-transform duration-300" style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)'}} />
      </button>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { display: none; }
        .custom-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
};

export default Chatbot;
