
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShieldCheck } from 'lucide-react';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511000000000?text=Olá! Gostaria de saber mais sobre os serviços de SOC da Security First.", "_blank");
  };

  return (
    <section className="gradient-bg py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold leading-tight">
              Proteja sua Empresa com o SOC 24x7 Mais Ágil e Eficiente do Brasil.
            </h1>
            <p className="mt-6 text-xl md:text-2xl font-light opacity-90">
              Ataques cibernéticos não têm hora para acontecer. A sua proteção também não.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-security-red hover:bg-security-red/90 text-white text-lg py-6 px-8"
                size="lg"
              >
                <ShieldCheck className="mr-2 h-6 w-6" />
                Fale com um Especialista Agora
              </Button>
              <Button 
                onClick={() => document.getElementById('beneficios')?.scrollIntoView({behavior: 'smooth'})}
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 text-lg py-6 px-8"
                size="lg"
              >
                Saiba Mais
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="bg-white/10 p-8 rounded-lg border border-white/20 backdrop-blur-sm animate-float">
              <img 
                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Cybersecurity Operations Center" 
                className="rounded-lg shadow-lg w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
