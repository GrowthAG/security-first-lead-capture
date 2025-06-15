
import React from 'react';
import Header from '@/components/Header';
import CinematicHero from '@/components/CinematicHero';
import InteractiveBenefits from '@/components/InteractiveBenefits';
import SOCProcess from '@/components/SOCProcess';
import Authority from '@/components/Authority';
import Comparison from '@/components/Comparison';
import CertificationBadges from '@/components/CertificationBadges';
import TechnicalEvents from '@/components/TechnicalEvents';
import TrustSection from '@/components/TrustSection';
import ModernFAQ from '@/components/ModernFAQ';
import FormSection from '@/components/FormSection';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <CinematicHero />
      <InteractiveBenefits />
      <SOCProcess />
      <Authority />
      <Comparison />
      <CertificationBadges />
      <TechnicalEvents />
      <TrustSection />
      <ModernFAQ />
      <FormSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
