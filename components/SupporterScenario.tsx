import React, { useState, useEffect } from 'react';
import { SupporterGuide } from '../types';

interface SupporterScenarioProps {
    guide: SupporterGuide;
    accentColor: string;
}

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);


const SupporterScenario: React.FC<SupporterScenarioProps> = ({ guide, accentColor }) => {
    const [shuffledScenarios, setShuffledScenarios] = useState([...guide.scenarios]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<'good' | 'bad' | null>(null);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        // Shuffle scenarios on initial load
        setShuffledScenarios(guide.scenarios.sort(() => Math.random() - 0.5));
    }, [guide.scenarios]);

    const currentScenario = shuffledScenarios[currentIndex];
    const isAnswered = selectedOption !== null;

    const handleAnswer = (choice: 'good' | 'bad') => {
        if (isAnswered) return;
        setSelectedOption(choice);
    };

    const handleNext = () => {
        if (currentIndex < shuffledScenarios.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setSelectedOption(null);
        } else {
            setIsFinished(true);
        }
    };

    const handleRestart = () => {
        setShuffledScenarios([...guide.scenarios].sort(() => Math.random() - 0.5));
        setCurrentIndex(0);
        setSelectedOption(null);
        setIsFinished(false);
    };

    if (isFinished) {
        return (
            <div className="text-center p-8 bg-black/30 rounded-2xl flex flex-col items-center gap-6 animate-fade-in-up-sm border border-white/10">
                <h3 className="text-3xl font-bold" style={{color: accentColor}}>Parabéns!</h3>
                <p className="text-lg text-white/80">Você completou todos os cenários. Praticar a empatia é o melhor caminho para oferecer apoio.</p>
                <button
                    onClick={handleRestart}
                    className="mt-4 px-10 py-4 rounded-full font-bold text-gray-900 shadow-lg transition-transform transform hover:scale-105"
                    style={{ backgroundColor: accentColor }}
                >
                    Praticar Novamente
                </button>
            </div>
        );
    }
    
    if (!currentScenario) return null;

    return (
        <div className="w-full max-w-3xl mx-auto space-y-6">
            <p className="text-center text-sm font-semibold text-white/70">
                Cenário {currentIndex + 1} de {shuffledScenarios.length}
            </p>

            <div className="p-6 md:p-8 bg-black/20 rounded-2xl border border-white/10 text-center">
                <blockquote className="text-xl md:text-2xl font-semibold italic text-white/90 border-l-4 pl-4" style={{borderColor: accentColor}}>
                    "{currentScenario.scenario}"
                </blockquote>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Good Response */}
                <button
                    onClick={() => handleAnswer('good')}
                    disabled={isAnswered}
                    className={`p-4 rounded-xl text-left transition-all duration-300 border-2 flex flex-col items-start ${
                        isAnswered && selectedOption === 'good' ? 'border-green-400 bg-green-500/10 scale-105' :
                        isAnswered && selectedOption !== 'good' ? 'border-transparent bg-white/5 opacity-50' :
                        'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
                    }`}
                >
                    <p className="font-semibold text-white/90">{currentScenario.goodResponse.text}</p>
                    {isAnswered && (
                        <div className="mt-3 pt-3 border-t border-green-400/20 w-full text-green-300 text-sm animate-fade-in-up-sm">
                            <p className="flex items-center font-bold"><CheckIcon/> Resposta Construtiva</p>
                            <p className="mt-1 pl-7 opacity-90">{currentScenario.goodResponse.explanation}</p>
                        </div>
                    )}
                </button>

                {/* Bad Response */}
                <button
                    onClick={() => handleAnswer('bad')}
                    disabled={isAnswered}
                    className={`p-4 rounded-xl text-left transition-all duration-300 border-2 flex flex-col items-start ${
                        isAnswered && selectedOption === 'bad' ? 'border-red-400 bg-red-500/10 scale-105' :
                        isAnswered && selectedOption !== 'bad' ? 'border-transparent bg-white/5 opacity-50' :
                        'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
                    }`}
                >
                    <p className="font-semibold text-white/90">{currentScenario.badResponse.text}</p>
                    {isAnswered && (
                         <div className="mt-3 pt-3 border-t border-red-400/20 w-full text-red-300 text-sm animate-fade-in-up-sm">
                            <p className="flex items-center font-bold"><XIcon/> Resposta a Evitar</p>
                            <p className="mt-1 pl-7 opacity-90">{currentScenario.badResponse.explanation}</p>
                        </div>
                    )}
                </button>
            </div>
            
            {isAnswered && (
                <div className="text-center animate-fade-in-up-sm">
                     <button
                        onClick={handleNext}
                        className="w-full md:w-auto px-12 py-4 rounded-full font-bold text-gray-900 shadow-lg transition-transform transform hover:scale-105"
                        style={{ backgroundColor: accentColor}}
                    >
                        {currentIndex < shuffledScenarios.length - 1 ? 'Próximo Cenário' : 'Finalizar'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default SupporterScenario;