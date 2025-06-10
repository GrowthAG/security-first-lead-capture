
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
      <section id="formulario" className={`gradient-bg ${isMobile ? 'py-8' : 'py-20 min-h-0'} flex items-center`}>
        <div className={`container mx-auto w-full ${isMobile ? 'px-6' : 'px-4'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`font-montserrat font-bold text-white leading-tight ${
              isMobile 
                ? 'text-xl mb-6 leading-tight' 
                : 'text-4xl mb-8 max-w-3xl'
            } mx-auto`}>
              {isMobile ? (
                'Entre em contato e fortaleça a segurança'
              ) : (
                'Nossos especialistas estão prontos para ajudar sua empresa a implementar um SOC eficiente e personalizado.'
              )}
            </h2>
            
            <div className={`flex justify-center ${isMobile ? 'px-4 mb-6' : 'mb-8'}`}>
              <Button 
                onClick={() => setIsFormOpen(true)}
                className={`bg-security-red hover:bg-security-red/90 text-white shadow-lg rounded-lg font-medium ${
                  isMobile 
                    ? 'text-base py-4 px-6 w-full max-w-xs mx-auto' 
                    : 'text-lg py-6 px-8 w-auto'
                }`}
                size="lg"
              >
                <ShieldCheck className={`mr-2 ${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} />
                Solicitar Diagnóstico
              </Button>
            </div>

            <h3 className={`text-white font-semibold ${
              isMobile 
                ? 'text-lg mb-3' 
                : 'text-2xl mb-4 px-2'
            }`}>
              Solicite uma Avaliação Gratuita
            </h3>
            <p className={`text-white/90 leading-relaxed max-w-2xl mx-auto ${
              isMobile 
                ? 'text-sm leading-normal px-2' 
                : 'text-lg px-4'
            }`}>
              {isMobile ? (
                'Preencha o formulário'
              ) : (
                'Preencha o formulário e nossa equipe entrará em contato para agendar uma avaliação especializada para sua empresa.'
              )}
            </p>
          </div>
        </div>
      </section>

      <FormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
};

export default FormSection;
