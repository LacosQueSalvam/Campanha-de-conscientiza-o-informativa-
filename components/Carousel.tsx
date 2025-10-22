import React, { useEffect, useState } from 'react';
import { Campaign } from '../types';
import { AUTOPLAY_INTERVAL } from '../constants';
import TypingEffect from './TypingEffect';
import BackgroundEffects from './BackgroundEffects';

interface CarouselProps {
  campaigns: Campaign[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  onShowcaseSelect: (campaign: Campaign) => void;
}

const Carousel: React.FC<CarouselProps> = ({ campaigns, activeIndex, setActiveIndex, onShowcaseSelect }) => {
  const [parallaxStyle, setParallaxStyle] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % campaigns.length);
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [campaigns.length, setActiveIndex]);

  const handleShowcaseOpen = (e: React.MouseEvent<HTMLButtonElement>, campaign: Campaign) => {
    e.preventDefault();
    onShowcaseSelect(campaign);
  };
  
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientWidth, clientHeight } = e.currentTarget;
    const { clientX, clientY } = e;
    const xPos = (clientX / clientWidth - 0.5) * 30; // factor determines the parallax intensity
    const yPos = (clientY / clientHeight - 0.5) * 30;
    
    setParallaxStyle({
        transform: `translateX(${xPos}px) translateY(${yPos}px) scale(1.05)`,
        transition: 'transform 0.1s ease-out'
    });
  };

  const handleMouseLeave = () => {
    setParallaxStyle({
        transform: 'translateX(0) translateY(0) scale(1.05)',
        transition: 'transform 0.5s ease-in-out'
    });
  };
  
  const activeCampaign = campaigns[activeIndex];

  return (
    <section 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <style>
        {`
          .neon-text-main {
            color: #fff;
            font-weight: 900;
            text-shadow:
                0 0 5px var(--neon-color-glow),
                0 0 15px var(--neon-color-glow),
                0 0 30px var(--neon-color);
          }
           .neon-text-subtle {
            color: #e5e7eb; /* a bit off-white */
            text-shadow: 0 0 8px var(--neon-color-glow);
          }
          .neon-button {
              background-color: transparent;
              border: 2px solid var(--neon-color);
              color: var(--neon-color-glow);
              text-shadow: 0 0 5px var(--neon-color-glow);
              box-shadow: 0 0 10px var(--neon-color-glow),
                          inset 0 0 10px var(--neon-color-glow);
              transition: color 0.3s, background-color 0.3s, box-shadow 0.3s, text-shadow 0.3s;
          }
          .neon-button:hover {
              color: #111827;
              background-color: var(--neon-color);
              box-shadow: 0 0 20px var(--neon-color),
                          inset 0 0 10px var(--neon-color);
              text-shadow: none;
          }
          @keyframes progress {
            from { width: 0%; }
            to { width: 100%; }
          }
          .animate-progress {
            animation: progress linear forwards;
            box-shadow: 0 0 10px ${activeCampaign.colors.neon}, 0 0 5px ${activeCampaign.colors.neonGlow};
          }
          .background-image-container img {
             will-change: transform;
          }
        `}
      </style>
      
      {/* Background Image is inside a container that receives the parallax effect */}
      <div 
        className="absolute inset-0 w-full h-full z-0 background-image-container"
      >
        <div style={parallaxStyle} className="w-full h-full">
         {campaigns.map((campaign, index) => (
            <img
              key={campaign.id}
              src={campaign.image}
              alt={`Fundo da campanha ${campaign.title}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === activeIndex ? 'opacity-100' : 'opacity-0'
              } ${campaign.objectPosition || 'object-center'}`}
            />
          ))}
        </div>
      </div>
      
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      <BackgroundEffects activeCampaign={activeCampaign} />

      {/* Content */}
      <div className="relative z-10 text-white px-4 w-full h-full" style={{
            '--neon-color': activeCampaign.colors.neon,
            '--neon-color-glow': activeCampaign.colors.neonGlow,
          } as React.CSSProperties}>
         <div className="relative w-full h-full">
            {campaigns.map((campaign, index) => {
              const textPos = campaign.textPosition || 'center';
              return (
              <div
                key={campaign.id}
                className={`absolute inset-0 flex flex-col justify-center transition-opacity duration-1000 ease-out
                ${ textPos === 'left' ? 'items-start text-left pl-6 sm:pl-8 md:pl-16 lg:pl-32' : 'items-center text-center' }
                ${ index === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none' }`}
                style={{ willChange: 'opacity, transform' }}
              >
                {/* --- Dynamic Background Glow --- */}
                <div 
                  className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-96 -z-10 blur-3xl"
                  style={{
                    backgroundImage: 'radial-gradient(ellipse at center, var(--neon-color) 0%, transparent 70%)',
                    opacity: 0.3
                  }}
                />

                <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl drop-shadow-lg transition-transform duration-700 ease-out uppercase neon-text-main ${
                    index === activeIndex ? 'translate-y-0' : '-translate-y-4'
                }`}>
                  {campaign.title}
                </h1>
                <div className={`mt-4 text-lg md:text-xl lg:text-2xl max-w-2xl drop-shadow-md transition-opacity duration-700 ease-out delay-200 min-h-[64px] neon-text-subtle ${
                    index === activeIndex ? 'opacity-100' : 'opacity-0'
                }`}>
                  {index === activeIndex ? <TypingEffect text={campaign.description} /> : null}
                </div>
                <div className={`mt-8 transition-opacity duration-700 ease-out delay-500 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}>
                   <button
                    onClick={(e) => handleShowcaseOpen(e, campaign)}
                    className={`inline-block px-8 py-3 rounded-full font-bold shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 ${campaign.colors.ring} neon-button`}
                  >
                    Saiba Mais
                  </button>
                </div>
              </div>
            )})}
         </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {campaigns.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? `w-6` : 'bg-white/30 hover:bg-white/50'
            }`}
             style={{
                backgroundColor: index === activeIndex ? activeCampaign.colors.neon : undefined
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

       {/* Progress Bar */}
       <div className="absolute bottom-0 left-0 h-1 bg-white/10 w-full z-10">
          <div
            key={activeIndex}
            className={`h-full animate-progress`}
            style={{ 
                animationDuration: `${AUTOPLAY_INTERVAL}ms`,
                backgroundColor: activeCampaign.colors.neon,
            }}
          ></div>
        </div>
    </section>
  );
};

export default Carousel;