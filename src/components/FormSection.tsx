
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShieldCheck } from 'lucide-react';
import FormDialog from './FormDialog';

const FormSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section id="formulario" className="py-6 md:py-20 gradient-bg min-h-screen md:min-h-0 flex items-center">
        <div className="container mx-auto px-4 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat font-bold text-lg md:text-4xl text-white mb-2 md:mb-6 leading-relaxed px-2">
              Nossos especialistas estão prontos para ajudar sua empresa a implementar um SOC eficiente e personalizado para as necessidades do seu negócio.
            </h2>
            <p className="text-white/90 text-sm md:text-lg mb-2 md:mb-8 px-3 leading-relaxed">
              Entre em contato conosco e descubra como podemos fortalecer a segurança da sua empresa.
            </p>
            <h3 className="text-white text-base md:text-2xl font-semibold mb-2 md:mb-4 px-2">
              Solicite uma Avaliação Gratuita
            </h3>
            <p className="text-white/90 text-xs md:text-lg mb-3 md:mb-8 px-4 leading-relaxed">
              Preencha o formulário e nossa equipe entrará em contato para agendar uma 
              avaliação especializada para sua empresa.
            </p>
            <div className="flex justify-center px-4">
              <Button 
                onClick={() => setIsFormOpen(true)}
                className="bg-security-red hover:bg-security-red/90 text-white text-sm md:text-lg py-3 md:py-6 px-6 md:px-8 w-full max-w-xs md:w-auto shadow-lg rounded-lg font-medium"
                size="lg"
              >
                <ShieldCheck className="mr-2 h-4 w-4 md:h-6 md:w-6" />
                Solicitar um Diagnóstico
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
};

export default FormSection;
