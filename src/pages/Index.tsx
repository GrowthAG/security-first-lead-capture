
import React from 'react';
import EnhancedHeader from '@/components/EnhancedHeader';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import Authority from '@/components/Authority';
import TechnicalEvents from '@/components/TechnicalEvents';
import Comparison from '@/components/Comparison';
import CertificationBadges from '@/components/CertificationBadges';
import TechnologiesIntegration from '@/components/TechnologiesIntegration';
import FormSection from '@/components/FormSection';
import FloatingCTA from '@/components/FloatingCTA';
import SectionNavigator from '@/components/SectionNavigator';

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <EnhancedHeader />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Authority />
      <TechnicalEvents />
      <Comparison />
      <CertificationBadges />
      <TechnologiesIntegration />
      <FormSection />
      <FloatingCTA />
      <SectionNavigator />
    </div>
  );
};

export default Index;
