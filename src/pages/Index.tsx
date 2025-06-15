
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import Authority from '@/components/Authority';
import Comparison from '@/components/Comparison';
import CertificationBadges from '@/components/CertificationBadges';
import Testimonials from '@/components/Testimonials';
import FormSection from '@/components/FormSection';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Authority />
      <Comparison />
      <CertificationBadges />
      <Testimonials />
      <FormSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
