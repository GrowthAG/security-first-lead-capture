
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
  
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511000000000?text=Olá! Gostaria de saber mais sobre os serviços de SOC da Security First.", "_blank");
  };

  return (
    <section className="gradient-bg py-12 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`text-white ${isMobile ? 'text-center' : ''}`}>
            <h1 className="font-montserrat text-2xl md:text-5xl font-bold leading-tight">
              SOC 24x7 que age antes do caos
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-2xl font-light opacity-90 line-clamp-3">
              Monitoramento em tempo real, integração com qualquer ambiente IP e sem cobrança por PPS.
            </p>
            <p className="mt-3 md:mt-4 text-base md:text-lg font-light opacity-80">
              🔍 Implemente em dias, não meses. Reduza riscos invisíveis com visibilidade total do seu ambiente.
            </p>
            <div className={`mt-6 md:mt-8 flex ${isMobile ? 'flex-col items-center' : 'flex-col sm:flex-row'} gap-4`}>
              <Button onClick={scrollToForm} className="bg-security-red hover:bg-security-red/90 text-white text-base md:text-lg py-5 md:py-6 px-6 md:px-8 w-full sm:w-auto" size="lg">
                <ShieldCheck className="mr-2 h-5 w-5 md:h-6 md:w-6" />
                Fale com um especialista e saiba se o seu ambiente está realmente seguro
              </Button>
              <p className="text-sm md:text-base text-white/80 text-center">
                Em 15 minutos mostramos onde estão os riscos invisíveis.
              </p>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="bg-white/10 p-8 rounded-lg border border-white/20 backdrop-blur-sm animate-float">
              <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Cybersecurity Operations Center" className="rounded-lg shadow-lg w-full max-w-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
