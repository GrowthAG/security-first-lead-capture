
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShieldCheck } from 'lucide-react';
import FormDialog from './FormDialog';
import { useIsMobile } from '@/hooks/use-mobile';

const FormSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <>
      <section id="formulario" className={`gradient-bg ${isMobile ? 'py-1 min-h-[calc(100vh-2rem)]' : 'py-20 min-h-0'} flex items-center`}>
        <div className={`container mx-auto w-full ${isMobile ? 'px-2' : 'px-4'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`font-montserrat font-bold text-white leading-tight ${
              isMobile 
                ? 'text-xl mb-3 px-1 leading-[1.2]' 
                : 'text-4xl mb-6 max-w-3xl'
            } mx-auto`}>
              Nossos especialistas estão prontos para ajudar sua empresa a implementar um SOC eficiente e personalizado.
            </h2>
            <p className={`text-white/90 leading-relaxed ${
              isMobile 
                ? 'text-sm mb-3 px-1 leading-[1.3]' 
                : 'text-lg mb-8 px-3'
            }`}>
              Entre em contato conosco e descubra como podemos fortalecer a segurança da sua empresa.
            </p>
            <h3 className={`text-white font-semibold ${
              isMobile 
                ? 'text-lg mb-3 px-1' 
                : 'text-2xl mb-4 px-2'
            }`}>
              Solicite uma Avaliação Gratuita
            </h3>
            <p className={`text-white/90 leading-relaxed max-w-2xl mx-auto ${
              isMobile 
                ? 'text-sm mb-4 px-1 leading-[1.3]' 
                : 'text-lg mb-8 px-4'
            }`}>
              Preencha o formulário e nossa equipe entrará em contato para agendar uma 
              avaliação especializada para sua empresa.
            </p>
            <div className={`flex justify-center ${isMobile ? 'px-1' : 'px-4'}`}>
              <Button 
                onClick={() => setIsFormOpen(true)}
                className={`bg-security-red hover:bg-security-red/90 text-white shadow-lg rounded-lg font-medium ${
                  isMobile 
                    ? 'text-base py-3 px-6 w-full max-w-sm' 
                    : 'text-lg py-6 px-8 w-auto'
                }`}
                size="lg"
              >
                <ShieldCheck className={`mr-2 ${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} />
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
