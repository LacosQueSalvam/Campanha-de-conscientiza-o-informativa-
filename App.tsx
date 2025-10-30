import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Showcase from './components/Showcase';
import CampaignPage from './components/CampaignPage';
import HelpModal from './components/HelpModal';
import { CAMPAIGNS } from './constants';
import { Campaign } from './types';
import CreatorsPage from './components/CreatorsPage';
import StoriesPage from './components/StoriesPage';

function App() {
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [viewingCampaign, setViewingCampaign] = useState<Campaign | null>(null);
  const [viewingCreators, setViewingCreators] = useState(false);
  const [viewingStories, setViewingStories] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [scrollToSection, setScrollToSection] = useState<string | null>(null);
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
    setScrollToSection(null);
  };
  
  const handleBackToHome = () => {
    setViewingCampaign(null);
    setViewingCreators(false);
    setViewingStories(false);
    setScrollToSection(null);
  }
  
  const handleNavigateFromSearch = (campaignId: string, sectionId: string) => {
    const campaign = CAMPAIGNS.find(c => c.id === campaignId);
    if (campaign) {
      setViewingCampaign(campaign);
      setScrollToSection(sectionId);
    }
  };

  if (viewingCampaign) {
    return <CampaignPage campaign={viewingCampaign} onBack={handleBackToHome} campaigns={CAMPAIGNS} scrollToSectionId={scrollToSection} />
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
        <Navbar
          campaigns={CAMPAIGNS}
          activeIndex={carouselIndex}
          setActiveIndex={setCarouselIndex}
          onHelpClick={() => setIsHelpModalOpen(true)}
          onCreatorsClick={() => setViewingCreators(true)}
          onStoriesClick={() => setViewingStories(true)}
          onNavigateFromSearch={handleNavigateFromSearch}
        />
        <main className="flex-grow">
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