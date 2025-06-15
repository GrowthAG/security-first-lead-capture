
import React from 'react';
import ModernHeader from '@/components/ModernHeader';
import CinematicHero from '@/components/CinematicHero';
import SOCProcess from '@/components/SOCProcess';
import InteractiveBenefits from '@/components/InteractiveBenefits';
import TrustSection from '@/components/TrustSection';
import ModernFAQ from '@/components/ModernFAQ';
import FloatingChat from '@/components/FloatingChat';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 font-inter overflow-x-hidden">
      <ModernHeader />
      <CinematicHero />
      <SOCProcess />
      <InteractiveBenefits />
      <TrustSection />
      <ModernFAQ />
      <FloatingChat />
    </div>
  );
};

export default Index;
