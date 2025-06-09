
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Authority from '@/components/Authority';
import TechnologiesIntegration from '@/components/TechnologiesIntegration';
import HowItWorks from '@/components/HowItWorks';
import TechnicalEvents from '@/components/TechnicalEvents';
import MediaPresence from '@/components/MediaPresence';
import LeadForm from '@/components/LeadForm';
import FloatingCTA from '@/components/FloatingCTA';

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <Hero />
      <Benefits />
      <Authority />
      <TechnologiesIntegration />
      <HowItWorks />
      <TechnicalEvents />
      <MediaPresence />
      <LeadForm />
      <FloatingCTA />
    </div>
  );
};

export default Index;
