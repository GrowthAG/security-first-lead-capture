
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShieldCheck } from 'lucide-react';
import FormDialog from './FormDialog';

const FormSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section id="formulario" className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title text-white mb-6">
              Nossos especialistas estão prontos para ajudar sua empresa a implementar um SOC eficiente e personalizado para as necessidades do seu negócio.
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Entre em contato conosco e descubra como podemos fortalecer a segurança da sua empresa.
            </p>
            <h3 className="text-white text-2xl font-semibold mb-4">
              Solicite uma Avaliação Gratuita
            </h3>
            <p className="text-white/90 text-lg mb-8">
              Preencha o formulário e nossa equipe entrará em contato para agendar uma 
              avaliação especializada para sua empresa.
            </p>
            <Button 
              onClick={() => setIsFormOpen(true)}
              className="bg-security-red hover:bg-security-red/90 text-white text-lg py-6 px-8"
              size="lg"
            >
              <ShieldCheck className="mr-2 h-6 w-6" />
              Solicitar um Diagnóstico
            </Button>
          </div>
        </div>
      </section>

      <FormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
};

export default FormSection;
