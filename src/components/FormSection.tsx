
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Clock, CheckCircle2, Shield } from 'lucide-react';
import FormDialog from './FormDialog';
import { useIsMobile } from '@/hooks/use-mobile';

const FormSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <>
      <section id="formulario" className={`gradient-bg ${isMobile ? 'py-8 pb-20' : 'py-24 min-h-0'} flex items-center relative overflow-hidden`}>
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm16 0c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className={`container mx-auto w-full ${isMobile ? 'px-6' : 'px-4'} relative z-10`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`font-montserrat font-bold text-white leading-tight ${
              isMobile 
                ? 'text-xl mb-6 leading-tight' 
                : 'text-4xl mb-8 max-w-3xl'
            } mx-auto animate-fade-in`}>
              {isMobile ? (
                'Entre em contato e fortaleça a segurança'
              ) : (
                'Nossos especialistas estão prontos para ajudar sua empresa a implementar um SOC eficiente e personalizado.'
              )}
            </h2>
            
            <div className={`flex justify-center ${isMobile ? 'px-4 mb-8' : 'mb-10'}`}>
              <Button 
                onClick={() => setIsFormOpen(true)}
                className={`group bg-security-red hover:bg-security-red/90 text-white shadow-lg hover:shadow-xl hover:shadow-security-red/30 rounded-lg font-medium transition-all duration-500 hover:scale-105 hover:-translate-y-1 ${
                  isMobile 
                    ? 'text-base py-4 px-6 w-full max-w-xs mx-auto' 
                    : 'text-lg py-6 px-8 w-auto'
                }`}
                size="lg"
              >
                <ShieldCheck className={`mr-2 group-hover:animate-pulse ${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} />
                Solicitar Diagnóstico Gratuito
              </Button>
            </div>

            <div className="mb-6">
              <h3 className={`text-white font-semibold ${
                isMobile 
                  ? 'text-lg mb-4' 
                  : 'text-2xl mb-6 px-2'
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
            
            {/* Enhanced benefits with icons */}
            <div className={`grid ${isMobile ? 'grid-cols-1 gap-3' : 'grid-cols-3 gap-6'} max-w-2xl mx-auto`}>
              <div className="flex items-center justify-center text-white/90 group hover:text-white transition-colors duration-300">
                <Shield className={`mr-2 text-security-red group-hover:scale-110 transition-transform duration-300 ${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} />
                <span className={`font-medium ${isMobile ? 'text-sm' : 'text-base'}`}>
                  Não enviamos spam
                </span>
              </div>
              
              <div className="flex items-center justify-center text-white/90 group hover:text-white transition-colors duration-300">
                <Clock className={`mr-2 text-security-red group-hover:scale-110 transition-transform duration-300 ${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} />
                <span className={`font-medium ${isMobile ? 'text-sm' : 'text-base'}`}>
                  Relatório em 24h
                </span>
              </div>
              
              <div className="flex items-center justify-center text-white/90 group hover:text-white transition-colors duration-300">
                <CheckCircle2 className={`mr-2 text-security-red group-hover:scale-110 transition-transform duration-300 ${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} />
                <span className={`font-medium ${isMobile ? 'text-sm' : 'text-base'}`}>
                  100% gratuito
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating particles for subtle animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </section>

      <FormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
};

export default FormSection;
