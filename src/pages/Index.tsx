
import React, { useState, useEffect, lazy } from 'react';
import Preloader from '@/components/Preloader';
import ScrollProgress from '@/components/ScrollProgress';
import LazySection from '@/components/LazySection';
import EnhancedHeader from '@/components/EnhancedHeader';
import Hero3D from '@/components/Hero3D';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import FloatingCTA from '@/components/FloatingCTA';
import SectionNavigator from '@/components/SectionNavigator';
import FloatingElements3D from '@/components/FloatingElements3D';
import Section3D from '@/components/Section3D';

// Lazy load heavy components
const Authority = lazy(() => import('@/components/Authority'));
const TechnicalEvents = lazy(() => import('@/components/TechnicalEvents'));
const Comparison = lazy(() => import('@/components/Comparison'));
const CertificationBadges = lazy(() => import('@/components/CertificationBadges'));
const TechnologiesIntegration = lazy(() => import('@/components/TechnologiesIntegration'));
const FormSection = lazy(() => import('@/components/FormSection'));

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloadComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Preloader onComplete={handlePreloadComplete} />;
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative">
      <ScrollProgress />
      <FloatingElements3D />
      <EnhancedHeader />
      <Hero3D />
      
      <Section3D withParticles withGeometry intensity="heavy">
        <Benefits />
      </Section3D>
      
      <Section3D withParallax withParticles intensity="medium">
        <HowItWorks />
      </Section3D>
      
      <LazySection>
        <Section3D withParticles withGeometry withParallax intensity="heavy">
          <Authority />
        </Section3D>
      </LazySection>
      
      <LazySection>
        <Section3D withParallax withParticles withGeometry intensity="heavy">
          <TechnicalEvents />
        </Section3D>
      </LazySection>
      
      <LazySection>
        <Section3D withGeometry intensity="light">
          <Comparison />
        </Section3D>
      </LazySection>
      
      <LazySection>
        <Section3D withParticles withGeometry intensity="medium">
          <CertificationBadges />
        </Section3D>
      </LazySection>
      
      <LazySection>
        <Section3D withParallax withParticles intensity="medium">
          <TechnologiesIntegration />
        </Section3D>
      </LazySection>
      
      <LazySection>
        <Section3D withParticles withGeometry withParallax intensity="heavy">
          <FormSection />
        </Section3D>
      </LazySection>
      
      <FloatingCTA />
      <SectionNavigator />
    </div>
  );
};

export default Index;
