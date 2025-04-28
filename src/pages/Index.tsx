
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Authority from '@/components/Authority';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import LeadForm from '@/components/LeadForm';
import FloatingCTA from '@/components/FloatingCTA';

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <Hero />
      <Benefits />
      <Authority />
      <HowItWorks />
      <Testimonials />
      <LeadForm />
      <FloatingCTA />
    </div>
  );
};

export default Index;
