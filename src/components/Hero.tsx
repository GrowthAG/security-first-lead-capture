
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
    <section className="gradient-bg py-2 md:py-28 min-h-screen md:min-h-0 flex items-center">
      <div className="container mx-auto px-4 w-full">
        <div className="grid md:grid-cols-2 gap-4 md:gap-12 items-center">
          <div className={`text-white ${isMobile ? 'text-center' : ''}`}>
            <h1 className="font-montserrat text-3xl md:text-5xl font-bold leading-tight mb-3 md:mb-6">
              Proteja sua Empresa com o SOC 24x7 Mais Ágil e Eficiente do Brasil.
            </h1>
            <h2 className="text-lg md:text-xl font-light opacity-90 leading-relaxed mb-4 md:mb-8">
              Ataques cibernéticos não têm hora para acontecer. A sua proteção também não <span className="text-security-red font-bold">!</span>
            </h2>
            <div>
              <Button 
                onClick={scrollToForm}
                className="bg-security-red hover:bg-security-red/90 text-white text-base md:text-lg py-4 md:py-6 px-8 md:px-8 w-full max-w-xs mx-auto md:w-auto shadow-lg rounded-lg font-medium"
                size="lg"
              >
                <ShieldCheck className="mr-2 h-5 w-5 md:h-6 md:w-6" />
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
