
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="gradient-bg py-12 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`text-white ${isMobile ? 'text-center' : ''}`}>
            <h1 className="font-montserrat text-2xl md:text-5xl font-bold leading-tight">
              Proteja sua Empresa com o SOC 24x7 Mais Ágil e Eficiente do Brasil.
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl font-light opacity-90">
              Ataques cibernéticos não têm hora para acontecer. A sua proteção também não <span className="text-security-red font-bold">!</span>
            </p>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative w-full max-w-lg animate-float">
              <img 
                src="/lovable-uploads/8994cf0b-3ecc-47f7-a0b8-6b8912da4e3e.png" 
                alt="Cybersecurity Interface" 
                className="w-full h-auto object-cover shadow-2xl transform hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
