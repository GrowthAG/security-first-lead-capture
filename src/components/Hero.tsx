
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { ShieldCheck } from 'lucide-react';

const Hero = () => {
  const isMobile = useIsMobile();

  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="gradient-bg py-8 md:py-28 min-h-screen md:min-h-0 flex items-center">
      <div className="container mx-auto px-4 w-full">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className={`text-white ${isMobile ? 'text-center' : ''}`}>
            <h1 className="font-montserrat text-xl md:text-5xl font-bold leading-tight mb-4 md:mb-0">
              Proteja sua Empresa com o SOC 24x7 Mais Ágil e Eficiente do Brasil.
            </h1>
            <p className="mt-4 md:mt-6 text-sm md:text-xl font-light opacity-90 leading-relaxed mb-6">
              Ataques cibernéticos não têm hora para acontecer. A sua proteção também não <span className="text-security-red font-bold">!</span>
            </p>
            <div className="mt-6 md:mt-8">
              <Button 
                onClick={scrollToForm}
                className="bg-security-red hover:bg-security-red/90 text-white text-sm md:text-lg py-3 md:py-6 px-6 md:px-8 w-full max-w-xs mx-auto md:w-auto shadow-lg rounded-lg font-medium"
                size="lg"
              >
                <ShieldCheck className="mr-2 h-4 w-4 md:h-6 md:w-6" />
                Solicitar um Diagnóstico
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative w-full max-w-lg">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80" 
                alt="Cybersecurity Protection - Data Security and Network Defense" 
                className="w-full h-auto object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-security-blue/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
