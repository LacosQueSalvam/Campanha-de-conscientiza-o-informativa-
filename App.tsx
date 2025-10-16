// Force refresh to ensure latest constants are loaded.
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Showcase from './components/Showcase';
import CampaignPage from './components/CampaignPage';
import HelpModal from './components/HelpModal';
import { CAMPAIGNS } from './constants';
import { Campaign } from './types';
import BackgroundEffects from './components/BackgroundEffects';

function App() {
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [viewingCampaign, setViewingCampaign] = useState<Campaign | null>(null);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const activeCampaign = CAMPAIGNS[carouselIndex];
  
  const handleNavigateToPage = (campaign: Campaign) => {
    setSelectedCampaign(null);
    setViewingCampaign(campaign);
  };
  
  const handleBackToHome = () => {
    setViewingCampaign(null);
  }

  if (viewingCampaign) {
    return <CampaignPage campaign={viewingCampaign} onBack={handleBackToHome} campaigns={CAMPAIGNS} />
  }

  return (
    <>
      <div className="relative w-full min-h-screen bg-gray-900 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 w-full h-full z-0">
          {CAMPAIGNS.map((campaign, index) => (
            <img
              key={campaign.id}
              src={campaign.image}
              alt={`Fundo da campanha ${campaign.title}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === carouselIndex ? 'opacity-100' : 'opacity-0'
              } ${campaign.objectPosition || 'object-center'}`}
            />
          ))}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <BackgroundEffects activeCampaign={activeCampaign} />

        <Navbar
          campaigns={CAMPAIGNS}
          activeIndex={carouselIndex}
          setActiveIndex={setCarouselIndex}
          onHelpClick={() => setIsHelpModalOpen(true)}
        />
        <main>
          <Carousel
            campaigns={CAMPAIGNS}
            activeIndex={carouselIndex}
            setActiveIndex={setCarouselIndex}
            onShowcaseSelect={setSelectedCampaign}
          />
        </main>
      </div>

      {selectedCampaign && (
        <Showcase
          campaign={selectedCampaign}
          onClose={() => setSelectedCampaign(null)}
          onNavigate={() => handleNavigateToPage(selectedCampaign)}
        />
      )}

      {isHelpModalOpen && (
        <HelpModal
          campaigns={CAMPAIGNS}
          activeCampaign={activeCampaign}
          onClose={() => setIsHelpModalOpen(false)}
        />
      )}
    </>
  );
}

export default App;