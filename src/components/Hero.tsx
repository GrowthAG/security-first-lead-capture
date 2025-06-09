
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
              SOC 24x7 que age antes do caos
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl font-light opacity-90">
              Monitoramento em tempo real, integração com qualquer ambiente IP e sem cobrança por PPS.
            </p>
            <p className="mt-2 text-base md:text-lg font-medium">
              🔍 Implemente em dias, não meses. Reduza riscos invisíveis com visibilidade total do seu ambiente.
            </p>
            <div className={`mt-6 md:mt-8 flex ${isMobile ? 'flex-col items-center' : 'flex-row'} gap-4`}>
              <Button onClick={scrollToForm} className="bg-security-red hover:bg-security-red/90 text-white text-base md:text-lg py-5 md:py-6 px-6 md:px-8 w-full sm:w-auto" size="lg">
                <ShieldCheck className="mr-2 h-5 w-5 md:h-6 md:w-6" />
                Fale com um Especialista Agora
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-security-blue text-base md:text-lg py-5 md:py-6 px-6 md:px-8 w-full sm:w-auto" size="lg">
                Saiba Mais
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="bg-white/10 p-8 rounded-lg border border-white/20 backdrop-blur-sm animate-float">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Cybersecurity Circuit Board" className="rounded-lg shadow-lg w-full max-w-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
