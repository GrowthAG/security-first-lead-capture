
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-20 bg-security-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6">
          Pronto para começar?
        </h2>
        <p className="text-xl mb-2">
          Nossos especialistas estão prontos para ajudar sua empresa a
        </p>
        <p className="text-xl mb-8">
          implementar um SOC eficiente e <span className="bg-security-red px-2 py-1 rounded">personalizada para as</span> necessidades <span className="bg-security-red px-2 py-1 rounded">do seu negócio.</span>
        </p>
        
        <Button onClick={scrollToForm} className="bg-security-red hover:bg-security-red/90 text-white text-lg py-6 px-8" size="lg">
          Solicitar Diagnóstico Gratuito
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
