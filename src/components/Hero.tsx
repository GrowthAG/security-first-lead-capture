
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
    <section className="gradient-bg py-12 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`text-white ${isMobile ? 'text-center' : ''}`}>
            <div className="mb-8">
              <img 
                src="/lovable-uploads/021f51b5-1f46-480a-9325-bf2dc11324ce.png" 
                alt="Security First Logo" 
                className="h-16 md:h-20 mx-auto md:mx-0"
              />
            </div>
            <h1 className="font-montserrat text-2xl md:text-5xl font-bold leading-tight">
              Proteja sua Empresa com o SOC 24x7 Mais Ágil e Eficiente do Brasil.
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl font-light opacity-90">
              Ataques cibernéticos não têm hora para acontecer. A sua proteção também não <span className="text-security-red font-bold">!</span>
            </p>
            <Button 
              onClick={scrollToForm}
              className="mt-8 bg-security-red hover:bg-security-red/90 text-white text-lg py-6 px-8"
              size="lg"
            >
              <ShieldCheck className="mr-2 h-6 w-6" />
              Solicitar um Diagnóstico
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
