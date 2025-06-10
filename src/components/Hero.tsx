
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
    <section className={`gradient-bg ${isMobile ? 'py-6' : 'py-28 min-h-0'} flex items-center`}>
      <div className={`container mx-auto w-full ${isMobile ? 'px-4' : 'px-4'}`}>
        <div className="grid md:grid-cols-2 gap-4 md:gap-12 items-center">
          <div className={`text-white ${isMobile ? 'text-center' : ''}`}>
            <h1 className={`font-montserrat font-bold leading-tight text-white ${
              isMobile 
                ? 'text-xl mb-3 leading-tight' 
                : 'text-5xl mb-6'
            }`}>
              Proteja sua Empresa com o SOC 24x7 Mais Ágil e Eficiente do Brasil.
            </h1>
            <h2 className={`font-light opacity-90 leading-relaxed text-white ${
              isMobile 
                ? 'text-base mb-4 leading-normal' 
                : 'text-xl mb-8'
            }`}>
              Ataques cibernéticos não têm hora para acontecer. A sua proteção também não <span className="text-security-red font-bold">!</span>
            </h2>
            <div className={isMobile ? '' : ''}>
              <Button 
                onClick={scrollToForm}
                className={`bg-security-red hover:bg-security-red/90 text-white shadow-lg rounded-lg font-medium ${
                  isMobile 
                    ? 'text-base py-3 px-6 w-full max-w-xs mx-auto' 
                    : 'text-lg py-6 px-8 w-auto'
                }`}
                size="lg"
              >
                <ShieldCheck className={`mr-2 ${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} />
                Solicitar um Diagnóstico
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative w-full max-w-lg">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80" 
                alt="SOC Cybersecurity - Centro de Operações de Segurança com múltiplos monitores" 
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
