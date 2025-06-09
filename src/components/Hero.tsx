
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShieldCheck } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

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
            <div className={`mt-6 md:mt-8 flex ${isMobile ? 'flex-col items-center' : 'flex-row'} gap-4`}>
              <Button onClick={scrollToForm} className="bg-security-red hover:bg-security-red/90 text-white text-base md:text-lg py-5 md:py-6 px-6 md:px-8 w-full sm:w-auto" size="lg">
                <ShieldCheck className="mr-2 h-5 w-5 md:h-6 md:w-6" />
                Fale com um Especialista Agora
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="bg-white/10 p-8 rounded-lg border border-white/20 backdrop-blur-sm animate-float">
              <img src="/lovable-uploads/8994cf0b-3ecc-47f7-a0b8-6b8912da4e3e.png" alt="Cybersecurity Interface" className="rounded-lg shadow-lg w-full max-w-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
