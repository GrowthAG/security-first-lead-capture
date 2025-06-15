
import React from 'react';
import EnhancedHeader from '@/components/EnhancedHeader';
import Hero3D from '@/components/Hero3D';
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
import FloatingElements3D from '@/components/FloatingElements3D';
import Section3D from '@/components/Section3D';

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative">
      <FloatingElements3D />
      <EnhancedHeader />
      <Hero3D />
      
      <Section3D withParticles withGeometry intensity="heavy">
        <Benefits />
      </Section3D>
      
      <Section3D withParallax withParticles intensity="medium">
        <HowItWorks />
      </Section3D>
      
      <Section3D withParticles withGeometry withParallax intensity="heavy">
        <Authority />
      </Section3D>
      
      <Section3D withParallax withParticles withGeometry intensity="heavy">
        <TechnicalEvents />
      </Section3D>
      
      <Section3D withGeometry intensity="light">
        <Comparison />
      </Section3D>
      
      <Section3D withParticles withGeometry intensity="medium">
        <CertificationBadges />
      </Section3D>
      
      <Section3D withParallax withParticles intensity="medium">
        <TechnologiesIntegration />
      </Section3D>
      
      <Section3D withParticles withGeometry withParallax intensity="heavy">
        <FormSection />
      </Section3D>
      
      <FloatingCTA />
      <SectionNavigator />
    </div>
  );
};

export default Index;
