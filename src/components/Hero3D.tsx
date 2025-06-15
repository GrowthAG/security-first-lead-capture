
import React from 'react';
import { useMouse3D } from '@/hooks/use-mouse-3d';
import { useScrollObserver } from '@/hooks/use-scroll-observer';
import Hero3DBackground from './Hero3DBackground';
import HeroCircuitAnimation from './HeroCircuitAnimation';
import HeroContent from './HeroContent';
import HeroScrollIndicator from './HeroScrollIndicator';

const Hero3D = () => {
  const heroRef = useMouse3D();
  useScrollObserver(heroRef);

  return (
    <section id="hero" ref={heroRef} className="relative gradient-bg text-white py-16 sm:py-20 overflow-hidden min-h-screen flex items-center">
      {/* 3D Background Elements */}
      <Hero3DBackground />

      {/* Enhanced Circuit Lines with 3D Effect */}
      <HeroCircuitAnimation />

      {/* Hero Content */}
      <HeroContent />

      {/* Enhanced 3D scroll indicator */}
      <HeroScrollIndicator />
    </section>
  );
};

export default Hero3D;
