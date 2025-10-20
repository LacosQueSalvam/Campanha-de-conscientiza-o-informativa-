import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Showcase from './components/Showcase';
import CampaignPage from './components/CampaignPage';
import HelpModal from './components/HelpModal';
import { CAMPAIGNS } from './constants';
import { Campaign } from './types';
import BackgroundEffects from './components/BackgroundEffects';
import CreatorsPage from './components/CreatorsPage';
import Footer from './components/Footer';
import StoriesPage from './components/StoriesPage';

function App() {
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [viewingCampaign, setViewingCampaign] = useState<Campaign | null>(null);
  const [viewingCreators, setViewingCreators] = useState(false);
  const [viewingStories, setViewingStories] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const activeCampaign = CAMPAIGNS[carouselIndex];
  
  useEffect(() => {
    // Preload campaign background images to make transitions smoother
    CAMPAIGNS.forEach(campaign => {
      const img = new Image();
      img.src = campaign.image;
    });
  }, []); // Run only once on mount

  const handleNavigateToPage = (campaign: Campaign) => {
    setSelectedCampaign(null);
    setViewingCampaign(campaign);
  };
  
  const handleBackToHome = () => {
    setViewingCampaign(null);
    setViewingCreators(false);
    setViewingStories(false);
  }

  if (viewingCampaign) {
    return <CampaignPage campaign={viewingCampaign} onBack={handleBackToHome} campaigns={CAMPAIGNS} />
  }

  if (viewingCreators) {
    return <CreatorsPage onBack={handleBackToHome} activeCampaign={activeCampaign} />
  }

  if (viewingStories) {
    return <StoriesPage onBack={handleBackToHome} campaigns={CAMPAIGNS} activeCampaign={activeCampaign} />
  }

  return (
    <>
      <div className="relative w-full min-h-screen bg-gray-900 overflow-hidden flex flex-col">
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
          onCreatorsClick={() => setViewingCreators(true)}
          onStoriesClick={() => setViewingStories(true)}
        />
        <main className="flex-grow">
          <Carousel
            campaigns={CAMPAIGNS}
            activeIndex={carouselIndex}
            setActiveIndex={setCarouselIndex}
            onShowcaseSelect={setSelectedCampaign}
          />
        </main>
        <Footer activeCampaign={activeCampaign} />
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
