
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
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title text-white mb-6">Solicite uma Avaliação Gratuita</h2>
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
              Abrir Formulário de Avaliação
            </Button>
          </div>
        </div>
      </section>

      <FormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
};

export default FormSection;
