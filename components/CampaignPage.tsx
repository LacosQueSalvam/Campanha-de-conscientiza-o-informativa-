import React, { useState, useEffect, useRef } from 'react';
import { Campaign, Quiz as QuizType, MythOrTruth } from '../types';
import HelpModal from './HelpModal';

// --- CUSTOM HOOK for Media Query ---
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);
  return matches;
};


// --- ICON COMPONENTS ---
const BackArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


// --- Main Section Icons ---
const AlertIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
);

const ChartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const RiskFactorsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
    </svg>
);

const PatientRightsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
);

const LightbulbIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

const SupportersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-1.78-4.125M15 15a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const HelpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
    </svg>
);

const QuizIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
);

const MythsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
);

const ShareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6.002l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.368a3 3 0 105.367 2.684 3 3 0 00-5.367 2.684z" />
    </svg>
);

const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
);

const SourceLink: React.FC<{ source: { name: string; url: string } }> = ({ source }) => (
    <div className="mt-6 text-right">
      <a
        href={source.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/50 hover:text-white/80 hover:underline transition-colors"
      >
        <LinkIcon />
        Fonte: {source.name}
      </a>
    </div>
);


// --- Sub-item Icons ---
const ChevronDoubleRightIcon = ({color}: {color: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
  </svg>
);

const CheckCircleIcon = ({color}: {color: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const XCircleIcon = ({color}: {color: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

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

// --- Counting Number Component (Slot Machine Style) ---
interface CountingNumberProps {
  endValue: string;
  isInView: boolean;
  className?: string;
  style?: React.CSSProperties;
}

interface DigitScrollerProps {
    char: string;
    isInView: boolean;
}

const DigitScroller: React.FC<DigitScrollerProps> = ({ char, isInView }) => {
    const isDigit = /\d/.test(char);
  
    if (!isDigit) {
      return <span className="pt-[0.1em]">{char}</span>;
    }
  
    const digit = parseInt(char, 10);
    const style = {
      transform: isInView ? `translateY(-${digit * 1.2}em)` : 'translateY(0)',
      transition: 'transform 1.5s cubic-bezier(0.25, 1, 0.5, 1)',
    };
  
    return (
      <div className="h-[1.2em] overflow-hidden leading-none">
        <div style={style}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="h-[1.2em]">
              {i}
            </div>
          ))}
        </div>
      </div>
    );
};

const CountingNumber: React.FC<CountingNumberProps> = ({ endValue, isInView, className, style }) => {
    const match = endValue.match(/^(\D*)?([\d,.\s]+)(\D*)?$/);

    if (!match) {
      return <span className={`font-black ${className}`} style={style}>{endValue}</span>;
    }
    
    const [, prefix = '', numberPart = '', suffix = ''] = match;

    return (
      <div className={`flex items-center justify-center font-black ${className}`} style={style}>
        {prefix && <span className="pt-[0.1em]">{prefix}</span>}
        
        <div className="flex items-center">
            {numberPart.split('').map((char, index) => (
            <DigitScroller key={index} char={char} isInView={isInView} />
            ))}
        </div>
        
        {suffix && <span className="pt-[0.1em]">{suffix}</span>}
      </div>
    );
};

// --- QUIZ COMPONENT (REDESIGNED) ---
const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

const Quiz: React.FC<{quiz: QuizType, accentColor: string, glowColor: string, onAnswer: () => void}> = ({ quiz, accentColor, glowColor, onAnswer }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    
    const currentQuestion = quiz.questions[currentQuestionIndex];
    const isAnswered = selectedOption !== null;
    const wasCorrect = isAnswered && selectedOption === currentQuestion.correctAnswerIndex;

    const handleAnswerSelect = (optionIndex: number) => {
        if (isAnswered) return;

        setSelectedOption(optionIndex);
        if (optionIndex === currentQuestion.correctAnswerIndex) {
            setScore(prevScore => prevScore + 1);
        }
        onAnswer();
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            setSelectedOption(null);
        } else {
            setQuizFinished(true);
        }
    };
    
    const handleRestartQuiz = () => {
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setScore(0);
        setQuizFinished(false);
    };

    const getScoreMessage = () => {
        const percentage = (score / quiz.questions.length) * 100;
        if (percentage === 100) return "Excelente! Você é um expert no assunto.";
        if (percentage >= 75) return "Muito bem! Seu conhecimento é impressionante.";
        if (percentage >= 50) return "Bom trabalho! Continue aprendendo e se informando.";
        return "Não desanime! O mais importante é a busca pelo conhecimento.";
    };

    if (quizFinished) {
        return (
            <div className="text-center p-8 bg-black/30 rounded-2xl flex flex-col items-center gap-6 animate-fade-in-up-sm border border-white/10" style={{boxShadow: `0 0 20px ${glowColor}`}}>
                <h3 className="text-3xl font-bold" style={{color: accentColor, textShadow: `0 0 10px ${accentColor}`}}>Quiz Concluído!</h3>
                <p className="text-6xl font-black" style={{color: accentColor, textShadow: `0 0 15px ${accentColor}`}}>
                    {score}/{quiz.questions.length}
                </p>
                <p className="text-lg text-white/80">{getScoreMessage()}</p>
                <button
                    onClick={handleRestartQuiz}
                    className="mt-4 px-10 py-4 rounded-full font-bold text-gray-900 shadow-lg transition-transform transform hover:scale-105"
                    style={{ backgroundColor: accentColor, boxShadow: `0 0 20px ${glowColor}` }}
                >
                    Refazer Quiz
                </button>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            {/* Progress Bar */}
            <div>
                <p className="text-center text-sm font-semibold text-white/70 mb-2">
                    Pergunta {currentQuestionIndex + 1} de {quiz.questions.length}
                </p>
                <div className="w-full bg-white/10 rounded-full h-2.5">
                    <div
                        className="h-2.5 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%`, backgroundColor: accentColor, boxShadow: `0 0 10px ${glowColor}` }}
                    ></div>
                </div>
            </div>

            {/* Question Card */}
            <div className="p-6 md:p-8 bg-black/20 rounded-2xl border border-white/10">
                <p className="font-bold text-xl md:text-2xl text-white text-center leading-tight">{currentQuestion.question}</p>
                <div className="mt-8 space-y-4">
                    {currentQuestion.options.map((option, optIndex) => {
                        const isCorrect = currentQuestion.correctAnswerIndex === optIndex;
                        const isSelected = selectedOption === optIndex;
                        
                        let stateClasses = 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white/90';
                        let icon = null;

                        if (isAnswered) {
                            if (isCorrect) {
                                stateClasses = 'bg-green-500/20 text-green-300 border-green-500/50 scale-105';
                                icon = <CheckIcon />;
                            } else if (isSelected) {
                                stateClasses = 'bg-red-500/20 text-red-300 border-red-500/50';
                                icon = <XIcon />;
                            } else {
                                stateClasses = 'bg-white/5 border-transparent opacity-50';
                            }
                        }
                        
                        return (
                            <button
                                key={optIndex}
                                onClick={() => handleAnswerSelect(optIndex)}
                                disabled={isAnswered}
                                className={`w-full p-4 rounded-xl flex items-center justify-between text-left transition-all duration-300 border-2 ${stateClasses} ${!isAnswered ? 'cursor-pointer' : 'cursor-default'}`}
                            >
                                <span className="flex-grow text-sm md:text-base font-semibold">{option}</span>
                                {icon && <span className="ml-4 flex-shrink-0 text-white">{icon}</span>}
                            </button>
                        );
                    })}
                </div>
                
                {isAnswered && (
                    <div className="mt-8 text-center animate-fade-in-up-sm space-y-4">
                        <div className={`p-4 rounded-lg text-lg font-bold ${wasCorrect ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                           {wasCorrect ? 'Você acertou!' : 'Resposta Incorreta!'}
                        </div>
                        <div className="p-4 bg-black/30 rounded-lg text-white/80 text-sm">
                            <p><strong style={{color: accentColor}}>Explicação:</strong> {currentQuestion.explanation}</p>
                        </div>
                        <button
                            onClick={handleNextQuestion}
                            className="w-full px-6 py-4 rounded-full font-bold text-gray-900 shadow-lg transition-transform transform hover:scale-105"
                            style={{ backgroundColor: accentColor, boxShadow: `0 0 15px ${glowColor}`}}
                        >
                            {currentQuestionIndex < quiz.questions.length - 1 ? 'Próxima Pergunta' : 'Finalizar Quiz'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};


// --- MYTHS VS TRUTHS COMPONENT (NEW INTERACTIVE VERSION) ---
const MythsVsTruthsSection: React.FC<{ items: MythOrTruth[], source?: {name: string, url: string}, accentColor: string, onAnswer: () => void }> = ({ items, source, accentColor, onAnswer }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null); // true for myth, false for truth
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const currentItem = items[currentIndex];
    const isAnswered = selectedAnswer !== null;

    const handleAnswer = (userChoice: boolean) => {
        if (isAnswered) return;
        setSelectedAnswer(userChoice);
        if (userChoice === currentItem.isMyth) {
            setScore(prev => prev + 1);
        }
        onAnswer();
    };

    const handleNext = () => {
        if (currentIndex < items.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setSelectedAnswer(null);
        } else {
            setIsFinished(true);
        }
    };

    const handleRestart = () => {
        setCurrentIndex(0);
        setSelectedAnswer(null);
        setScore(0);
        setIsFinished(false);
    };

    if (isFinished) {
        return (
            <div className="text-center p-6 bg-black/20 rounded-xl flex flex-col items-center gap-6 animate-fade-in-up-sm">
                <h3 className="text-2xl font-bold">Parabéns!</h3>
                <p className="text-lg text-white/80">Você desvendou todos os mitos e verdades.</p>
                <p className="text-4xl font-black" style={{color: accentColor, textShadow: `0 0 10px ${accentColor}`}}>
                    Você acertou {score} de {items.length}
                </p>
                <button
                    onClick={handleRestart}
                    style={{ backgroundColor: accentColor }}
                    className="px-8 py-3 rounded-full font-bold text-gray-900 shadow-lg transition-transform transform hover:scale-105"
                >
                    Recomeçar
                </button>
            </div>
        );
    }

    const wasCorrect = isAnswered && selectedAnswer === currentItem.isMyth;

    return (
        <div className="w-full max-w-lg mx-auto space-y-6">
            <div className="text-center text-white/70 font-semibold">
                Item {currentIndex + 1} de {items.length}
            </div>

            {/* The Card */}
            <div className="w-full h-80 [perspective:1000px]">
                <div className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-700 [transform-style:preserve-3d] ${isAnswered ? '[transform:rotateY(180deg)]' : ''}`}>
                    {/* Front */}
                    <div className="absolute inset-0 bg-white/5 rounded-xl p-6 flex flex-col items-center justify-center text-center [backface-visibility:hidden]">
                        <p className="text-2xl font-bold">{currentItem.topic}</p>
                    </div>
                    {/* Back */}
                    <div className="absolute inset-0 bg-gray-800 rounded-xl p-6 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <p className="text-base font-semibold italic text-white/60 mb-3">"{currentItem.statement}"</p>
                        <h4 className="text-3xl font-black" style={{ color: currentItem.isMyth ? '#ef4444' : '#22c55e', textShadow: `0 0 8px ${currentItem.isMyth ? '#ef4444' : '#22c55e'}` }}>
                            {currentItem.isMyth ? 'MITO' : 'VERDADE'}
                        </h4>
                        <p className="mt-4 text-white/80 text-sm">{currentItem.explanation}</p>
                    </div>
                </div>
            </div>

            {/* Buttons and Feedback */}
            <div className="animate-fade-in-up-sm">
                {!isAnswered ? (
                    <div className="grid grid-cols-2 gap-4">
                        <button 
                            onClick={() => handleAnswer(true)}
                            className="w-full py-4 text-lg font-bold rounded-full bg-red-500/80 hover:bg-red-500 text-white shadow-lg transition-transform transform hover:scale-105"
                        >
                            Mito
                        </button>
                        <button 
                            onClick={() => handleAnswer(false)}
                            className="w-full py-4 text-lg font-bold rounded-full bg-green-500/80 hover:bg-green-500 text-white shadow-lg transition-transform transform hover:scale-105"
                        >
                            Verdade
                        </button>
                    </div>
                ) : (
                    <div className="text-center space-y-4">
                        <div className={`p-4 rounded-lg text-lg font-bold ${wasCorrect ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                           {wasCorrect ? 'Você acertou!' : 'Você errou!'} A resposta correta é {currentItem.isMyth ? 'Mito' : 'Verdade'}.
                        </div>
                        <button
                            onClick={handleNext}
                            style={{ backgroundColor: accentColor }}
                            className="w-full px-8 py-4 rounded-full font-bold text-gray-900 shadow-lg transition-transform transform hover:scale-105"
                        >
                            {currentIndex < items.length - 1 ? 'Próximo' : 'Finalizar'}
                        </button>
                    </div>
                )}
            </div>
            {source && <SourceLink source={source} />}
        </div>
    );
};


// --- SOCIAL SHARE COMPONENT ---
const WhatsAppIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.398 1.898 6.166l-1.29 4.721 4.833-1.274z" /></svg>);
const TwitterIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.65.177-1.353.239-2.08.188.62 1.921 2.447 3.314 4.604 3.352-1.798 1.407-4.069 2.245-6.516 2.245-.42 0-.836-.025-1.244-.076 2.323 1.496 5.093 2.372 8.084 2.372 9.705 0 15.015-8.036 14.738-15.352.984-.71 1.833-1.597 2.512-2.6z" /></svg>);
const FacebookIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" /></svg>);
const CopyLinkIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>);
const CheckIconSimple = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>);


const SocialShareSection: React.FC<{ campaign: Campaign }> = ({ campaign }) => {
    const [copied, setCopied] = useState(false);
    const [isQrModalOpen, setIsQrModalOpen] = useState(false);
    const [isQrCardFlipped, setIsQrCardFlipped] = useState(false);

    const pageUrl = window.location.href;
    const shareText = `Saiba mais sobre a campanha ${campaign.title} e a importância da conscientização!`;
    const encodedText = encodeURIComponent(shareText);
    const encodedUrl = encodeURIComponent(pageUrl);
    
    const socialLinks = [
        { name: 'WhatsApp', icon: <WhatsAppIcon />, url: `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}` },
        { name: 'Twitter', icon: <TwitterIcon />, url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}` },
        { name: 'Facebook', icon: <FacebookIcon />, url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}` },
    ];

    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodedUrl}&qzone=1&bgcolor=f1f5f9`;

    const handleCopy = () => {
        navigator.clipboard.writeText(pageUrl).then(() => {
            setCopied(true);
            setIsQrModalOpen(true);
            setTimeout(() => setIsQrCardFlipped(true), 100);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const handleCloseModal = () => {
        setIsQrCardFlipped(false); // Flip back first
        setTimeout(() => {
            setIsQrModalOpen(false); // Then close the modal after animation
        }, 600); // Match transition duration
    };

    return (
        <>
            <div className="text-center flex flex-col items-center gap-6">
                <p className="text-lg text-white/80 max-w-2xl">
                    A conscientização salva vidas. Compartilhe esta página com seus amigos e familiares e ajude a espalhar informação de qualidade.
                </p>
                <div className="flex items-center justify-center gap-4 sm:gap-6 mt-4">
                    {socialLinks.map(link => (
                        <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`Compartilhar no ${link.name}`} 
                           key={link.name}
                           className="p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all transform hover:scale-110"
                           style={{ color: campaign.colors.neonGlow }}>
                            {link.icon}
                        </a>
                    ))}
                    <button onClick={handleCopy} aria-label="Copiar link"
                            className="p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all transform hover:scale-110"
                            style={{ color: campaign.colors.neonGlow }}>
                        {copied ? <CheckIconSimple /> : <CopyLinkIcon />}
                    </button>
                </div>
                {copied && <p className="text-green-400 animate-fade-in-up-sm">Link copiado para a área de transferência!</p>}
            </div>

            {isQrModalOpen && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in"
                    onClick={handleCloseModal}
                >
                    <div 
                        className="w-full max-w-sm h-[28rem] [perspective:1500px]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={`relative w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] ${isQrCardFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                            {/* Front Face */}
                            <div className="absolute inset-0 bg-gray-800 rounded-2xl border border-white/10 shadow-2xl flex flex-col items-center justify-center p-6 text-center text-white/80 [backface-visibility:hidden]">
                                <div className="w-16 h-16 [&>svg]:w-16 [&>svg]:h-16" style={{color: campaign.colors.neon}}><ShareIcon /></div>
                                <h3 className="mt-6 text-2xl font-bold text-white">Compartilhe com QR Code</h3>
                                <p className="mt-2">Prepare-se para escanear...</p>
                                <button
                                    onClick={handleCloseModal}
                                    className="absolute top-4 right-4 p-2 rounded-full text-gray-400 bg-gray-900/50 hover:bg-gray-700/70 transition-colors"
                                    aria-label="Fechar"
                                >
                                    <CloseIcon />
                                </button>
                            </div>
                            
                            {/* Back Face */}
                            <div className="absolute inset-0 bg-slate-100 rounded-2xl p-6 flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-2xl">
                                <img src={qrCodeUrl} alt="QR Code para o site" width="280" height="280" className="rounded-lg shadow-md" />
                                <p className="mt-4 text-center text-lg text-gray-800 font-bold">Aponte sua câmera aqui!</p>
                                <p className="mt-1 text-sm text-gray-500">Escaneie para abrir a página no seu celular.</p>
                                <button
                                    onClick={handleCloseModal}
                                    className="absolute top-4 right-4 p-2 rounded-full text-gray-500 bg-gray-200/50 hover:bg-gray-300/70 transition-colors"
                                    aria-label="Fechar"
                                >
                                    <CloseIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

const hexToRgba = (hex: string, alpha: number) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return `rgba(255, 255, 255, ${alpha})`;
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// --- MAIN PAGE COMPONENT ---
const CampaignPage: React.FC<{ campaign: Campaign; onBack: () => void; campaigns: Campaign[] }> = ({ campaign, onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [randomTip, setRandomTip] = useState('');
  const contentRef = useRef<HTMLDivElement>(null);
  const { details, colors } = campaign;
  const accentColor = colors.neon;
  const navContainerRef = useRef<HTMLDivElement>(null);

  const isMobile = useMediaQuery('(max-width: 767px)');
  const [indicatorStyle, setIndicatorStyle] = useState({});

  const handleContentScroll = () => {
    setTimeout(() => {
        if (contentRef.current) {
            contentRef.current.scrollTo({
                top: contentRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, 100);
  };

  useEffect(() => {
    if (details.tips && details.tips.items.length > 0) {
        const tip = details.tips.items[Math.floor(Math.random() * details.tips.items.length)];
        setRandomTip(tip);
    }
  }, [details.tips]);

  const baseSlides = [
    { id: 'symptoms', title: 'Sinais', icon: <AlertIcon/>, content: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {details.symptoms.items.map((item, index) => (
            <div key={index} className="p-4 bg-white/5 rounded-lg flex items-center gap-4 transition-all hover:bg-white/10 hover:scale-105">
              <ChevronDoubleRightIcon color={accentColor} />
              <span className="opacity-90 text-left">{item}</span>
            </div>
          ))}
        </div>
        {details.symptoms.source && <SourceLink source={details.symptoms.source} />}
      </>
    )},
    { id: 'stats', title: 'Dados', icon: <ChartIcon/>, content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 text-center">
            {details.stats.items.map((stat, index) => (
                <div key={index} className="p-6 bg-white/5 rounded-xl flex flex-col items-center justify-start gap-2 transition-all hover:bg-white/10 hover:scale-105">
                    <CountingNumber 
                        endValue={stat.value} 
                        isInView={currentIndex === 1}
                        className="h-14 text-4xl sm:text-5xl"
                        style={{color: accentColor, textShadow: `0 0 8px ${accentColor}`}}
                    />
                    <h4 className="text-lg font-bold text-white/90 mt-2">{stat.label}</h4>
                     {stat.year && (
                        <div className="my-2 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider" style={{ backgroundColor: hexToRgba(accentColor, 0.15), color: hexToRgba(accentColor, 0.9) }}>
                            Dados de {stat.year}
                        </div>
                    )}
                    <p className="text-sm text-white/60 flex-grow px-2">{stat.description}</p>
                    {stat.source && <p className="text-xs text-white/50 mt-2 font-semibold">Fonte: {stat.source}</p>}
                </div>
            ))}
        </div>
    )},
    { id: 'prevention', title: 'Prevenção', icon: <ShieldIcon/>, content: (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {details.prevention.items.map((item, index) => (
                    <div key={index} className="p-4 bg-white/5 rounded-lg flex items-center gap-4 transition-all hover:bg-white/10 hover:scale-105">
                        <CheckCircleIcon color={accentColor} />
                        <span className="opacity-90 text-left">{item}</span>
                    </div>
                ))}
            </div>
            {details.prevention.source && <SourceLink source={details.prevention.source} />}
        </>
    )},
    { id: 'help', title: 'Ajuda', icon: <HelpIcon/>, content: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {details.help.items.map((item, index) => (
          <div key={index} className="p-6 bg-white/5 rounded-xl text-left flex flex-col transition-transform hover:scale-105">
              <h4 className="font-bold text-xl">{item.name}</h4>
              <p className="text-white/70 mt-2 mb-4 text-base flex-grow">{item.description}</p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-3 mt-auto">
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline inline-flex items-center gap-2" style={{color: accentColor}}>
                    <GlobeIcon /> Visitar Site
                  </a>
                  {item.phone && (
                  <a href={`tel:${item.phone}`} className="font-semibold hover:underline inline-flex items-center gap-2" style={{color: accentColor}}>
                      <PhoneIcon /> Ligar: {item.phone}
                  </a>
                  )}
              </div>
          </div>
        ))}
      </div>
    )},
    { id: 'quiz', title: 'Quiz', icon: <QuizIcon/>, content: (
      <div className="w-full max-w-2xl mx-auto">
        <Quiz quiz={details.quiz} accentColor={accentColor} glowColor={colors.neonGlow} onAnswer={handleContentScroll} />
      </div>
    )},
    { id: 'myths', title: 'Mitos', icon: <MythsIcon />, content: (
      <MythsVsTruthsSection items={details.mythsVsTruths.items} source={details.mythsVsTruths.source} accentColor={accentColor} onAnswer={handleContentScroll} />
    )},
    { id: 'share', title: 'Compartilhe', icon: <ShareIcon />, content: (
      <SocialShareSection campaign={campaign} />
    )},
  ];

  // Dynamically insert new sections
  const slides = [...baseSlides];
  
  if (details.patientRights) {
    const patientRightsSlide = {
        id: 'patientRights',
        title: 'Direitos',
        icon: <PatientRightsIcon />,
        content: (
            <div className="space-y-4">
                {details.patientRights.items.map((item, index) => (
                    <div key={index} className="p-6 bg-white/5 rounded-xl text-left transition-transform hover:scale-105 flex flex-col">
                        <h4 className="font-bold text-xl" style={{color: accentColor}}>{item.name}</h4>
                        <p className="text-white/80 mt-2 text-base flex-grow">{item.description}</p>
                        {item.source && (
                            <div className="mt-4 text-left">
                                <a
                                    href={item.source.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/50 hover:text-white/80 hover:underline transition-colors"
                                >
                                    <LinkIcon />
                                    Fonte: {item.source.name}
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        )
    };
    slides.splice(3, 0, patientRightsSlide);
  }

  if (details.riskFactors) {
    const riskFactorsSlide = {
        id: 'riskFactors',
        title: 'Riscos',
        icon: <RiskFactorsIcon />,
        content: (
            <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {details.riskFactors.items.map((item, index) => (
                        <div key={index} className="p-4 bg-white/5 rounded-lg flex items-center gap-4 transition-all hover:bg-white/10 hover:scale-105">
                            <ChevronDoubleRightIcon color={accentColor} />
                            <span className="opacity-90 text-left">{item}</span>
                        </div>
                    ))}
                </div>
                {details.riskFactors.source && <SourceLink source={details.riskFactors.source} />}
            </>
        )
    };
    slides.splice(3, 0, riskFactorsSlide);
  }

  if (details.supporterGuide) {
    const supporterSlide = {
        id: 'supporterGuide',
        title: 'Apoiadores',
        icon: <SupportersIcon />,
        content: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                {/* What to Say Column */}
                <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-green-400 text-center md:text-left">O que dizer</h4>
                    {details.supporterGuide.whatToSay.map((item, index) => (
                        <div key={index} className="p-4 bg-white/5 rounded-lg flex items-start gap-4 text-left">
                            <CheckCircleIcon color="#4ade80" />
                            <span className="opacity-90 flex-1">{item}</span>
                        </div>
                    ))}
                </div>
                {/* What to Avoid Column */}
                <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-red-400 text-center md:text-left">O que evitar</h4>
                    {details.supporterGuide.whatToAvoid.map((item, index) => (
                        <div key={index} className="p-4 bg-white/5 rounded-lg flex items-start gap-4 text-left">
                             <XCircleIcon color="#f87171" />
                            <span className="opacity-90 flex-1">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        )
    };
    slides.splice(3, 0, supporterSlide);
  }

  if (details.tips && randomTip) {
      const tipSlide = {
          id: 'tip',
          title: 'Dica',
          icon: <LightbulbIcon />,
          content: (
              <div className="flex flex-col items-center justify-center text-center h-full p-8">
                  <p className="text-2xl lg:text-3xl italic text-white/90 leading-relaxed max-w-3xl">
                      "{randomTip}"
                  </p>
              </div>
          )
      };
      slides.splice(4, 0, tipSlide); // Insert tip slide after supporter guide
  }

  useEffect(() => {
    if (navContainerRef.current) {
        const activeButton = navContainerRef.current.children[currentIndex + 1] as HTMLElement;
        if (activeButton) {
            if (isMobile) {
                setIndicatorStyle({
                    width: `${activeButton.offsetWidth}px`,
                    height: '100%',
                    transform: `translateX(${activeButton.offsetLeft}px)`,
                });
            } else {
                setIndicatorStyle({
                    height: `${activeButton.offsetHeight}px`,
                    width: '100%',
                    transform: `translateY(${activeButton.offsetTop}px)`,
                });
            }
        }
    }
  }, [currentIndex, isMobile, slides.length]);

  return (
    <>
        <div className={`h-screen w-full bg-gradient-to-br ${colors.bg} font-sans text-white overflow-hidden flex flex-col`}>
            <style>
            {`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out forwards;
                }
                @keyframes fade-in-up {
                0% { opacity: 0; transform: translateY(20px); }
                100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.6s ease-out forwards;
                }
                @keyframes fade-in-up-sm {
                0% { opacity: 0; transform: translateY(10px); }
                100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up-sm {
                    animation: fade-in-up-sm 0.4s ease-out forwards;
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
        <header className="w-full z-20 flex-shrink-0 bg-gradient-to-b from-black/70 to-transparent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
                <img 
                src={campaign.logo} 
                alt={`Logo ${campaign.title}`} 
                className="h-10 w-auto" 
                />
                <div className="flex items-center gap-4">
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
            </div>
        </header>
        
            <main className="flex-grow flex flex-col md:flex-row items-stretch p-4 md:p-8 overflow-hidden animate-fade-in-up gap-4 md:gap-8">
                {/* --- Responsive Navigation --- */}
                <aside className="w-full md:w-[16%] md:min-w-[240px] flex-shrink-0 bg-black/20 rounded-2xl p-2 md:p-4">
                    <div ref={navContainerRef} className="relative flex flex-row md:flex-col gap-1 h-full overflow-x-auto md:overflow-x-hidden custom-scrollbar">
                        <div 
                            className="absolute md:left-0 top-0 rounded-lg transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none"
                             style={{
                                ...indicatorStyle,
                                borderBottom: isMobile ? `4px solid ${accentColor}`: 'none',
                                borderLeft: !isMobile ? `4px solid ${accentColor}`: 'none',
                                boxShadow: `0 0 15px ${hexToRgba(accentColor, 0.4)}`,
                            }}
                        ></div>
                        {slides.map((slide, index) => (
                            <button
                                key={slide.id}
                                onClick={() => setCurrentIndex(index)}
                                className={`relative flex flex-col md:flex-row items-center justify-center md:justify-start text-center md:text-left p-2 md:p-3 rounded-lg w-20 md:w-full flex-shrink-0 transition-colors duration-300 group ${
                                    currentIndex === index ? 'text-white' : 'text-white/60 hover:text-white'
                                }`}
                                aria-label={`Ir para a seção ${slide.title}`}
                            >
                                <div 
                                    className={`w-7 h-7 md:mr-4 flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-110 [&>svg]:w-6 [&>svg]:h-6 ${currentIndex === index ? 'scale-110' : ''}`}
                                    style={{
                                        ...(currentIndex === index && { color: accentColor })
                                    }}
                                >
                                    {slide.icon}
                                </div>
                                <span 
                                    className="text-xs mt-1 md:text-sm md:mt-0 font-semibold tracking-wide"
                                    style={{
                                        ...(currentIndex === index && { color: accentColor, textShadow: `0 0 5px ${accentColor}` })
                                    }}
                                >
                                    {slide.title}
                                </span>
                            </button>
                        ))}
                    </div>
                </aside>

                {/* --- Main Content Slider --- */}
                <div className="flex-grow relative">
                    <div className="w-full h-full relative">
                        {slides.map((slide, index) => {
                            const offset = index - currentIndex;
                            const zIndex = slides.length - Math.abs(offset);
                            const opacity = offset === 0 ? 1 : 0;

                            return (
                                <div
                                    key={slide.id}
                                    className={`absolute top-0 left-0 w-full h-full bg-black/30 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 text-white flex flex-col transition-opacity duration-700 ease-out ${opacity === 1 ? 'pointer-events-auto' : 'pointer-events-none'}`}
                                    style={{
                                        opacity,
                                        zIndex,
                                        boxShadow: offset === 0 ? `0 0 30px ${hexToRgba(accentColor, 0.3)}` : 'none',
                                    }}
                                >
                                    <div 
                                        ref={index === currentIndex ? contentRef : null} 
                                        className={`custom-scrollbar w-full h-full p-6 sm:p-8 lg:p-12 pb-12 overflow-y-auto flex flex-col ${
                                            slide.id === 'quiz' || slide.id === 'myths' ? 'justify-start' : 'justify-center'
                                        }`}
                                    >
                                        <section className="text-center w-full">
                                            <div className="flex items-center justify-center gap-4 mb-8">
                                                <div className="w-10 h-10" style={{color: accentColor}}>{slide.icon}</div>
                                                <h3 className="text-3xl md:text-4xl font-bold" style={{color: accentColor, textShadow: `0 0 15px ${colors.neonGlow}`}}>
                                                    {details[slide.id as keyof typeof details]?.title || slide.title}
                                                </h3>
                                            </div>
                                            <div>
                                            {slide.content}
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
        </div>
    </>
  );
};

export default CampaignPage;