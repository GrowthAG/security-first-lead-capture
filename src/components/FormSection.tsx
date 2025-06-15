
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Clock, CheckCircle2, Shield, Zap, Users } from 'lucide-react';
import FormDialog from './FormDialog';
import { useIsMobile } from '@/hooks/use-mobile';

const FormSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();

  return (
    <>
      <section id="formulario" className={`gradient-bg ${isMobile ? 'py-8 pb-20' : 'py-24 min-h-0'} flex items-center relative overflow-hidden`}>
        {/* Enhanced background pattern with performance optimization */}
        <div className="absolute inset-0 opacity-5 will-change-transform">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm16 0c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16z'/%3E%3C/g%3E%3C/svg%3E")`,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.3s ease-out'
          }}></div>
        </div>

        <div className={`container mx-auto w-full ${isMobile ? 'px-6' : 'px-4'} relative z-10`}>
          <div className="max-w-4xl mx-auto text-center">
            {/* Enhanced urgency indicator */}
            <div className={`inline-flex items-center bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-full px-4 py-2 mb-6 ${isMobile ? 'text-sm' : 'text-base'} animate-pulse hover:animate-none transition-all duration-300`}>
              <Users className={`mr-2 text-red-300 ${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} />
              <span className="text-red-200 font-medium">Apenas 7 vagas restantes este mês</span>
              <div className="w-2 h-2 bg-red-400 rounded-full ml-2 animate-pulse"></div>
            </div>

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
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`group bg-security-red hover:bg-security-red/90 text-white shadow-lg hover:shadow-xl hover:shadow-security-red/30 rounded-lg font-medium transition-all duration-500 hover:scale-105 hover:-translate-y-1 focus:ring-2 focus:ring-white/20 active:scale-95 will-change-transform ${
                  isMobile 
                    ? 'text-base py-4 px-6 w-full max-w-xs mx-auto' 
                    : 'text-lg py-6 px-8 w-auto'
                }`}
                size="lg"
              >
                <ShieldCheck className={`mr-2 group-hover:animate-pulse transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'} ${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} />
                Solicitar Diagnóstico Gratuito
                <Zap className={`ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} />
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
            
            {/* Enhanced benefits with better micro-interactions */}
            <div className={`grid ${isMobile ? 'grid-cols-1 gap-3' : 'grid-cols-3 gap-6'} max-w-2xl mx-auto`}>
              <div className="flex items-center justify-center text-white/90 group hover:text-white transition-all duration-300 hover:scale-105 cursor-default">
                <Shield className={`mr-2 text-security-red group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 ${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} />
                <span className={`font-medium ${isMobile ? 'text-sm' : 'text-base'}`}>
                  Não enviamos spam
                </span>
              </div>
              
              <div className="flex items-center justify-center text-white/90 group hover:text-white transition-all duration-300 hover:scale-105 cursor-default">
                <Clock className={`mr-2 text-security-red group-hover:scale-110 group-hover:animate-spin transition-all duration-300 ${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} />
                <span className={`font-medium ${isMobile ? 'text-sm' : 'text-base'}`}>
                  Relatório em 24h
                </span>
              </div>
              
              <div className="flex items-center justify-center text-white/90 group hover:text-white transition-all duration-300 hover:scale-105 cursor-default">
                <CheckCircle2 className={`mr-2 text-security-red group-hover:scale-110 group-hover:animate-bounce transition-all duration-300 ${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} />
                <span className={`font-medium ${isMobile ? 'text-sm' : 'text-base'}`}>
                  100% gratuito
                </span>
              </div>
            </div>

            {/* Enhanced trust indicator */}
            <div className="mt-8 flex justify-center">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 hover:bg-white/15 transition-all duration-300">
                <Shield className={`text-green-400 ${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} />
                <span className={`text-white/90 font-medium ${isMobile ? 'text-xs' : 'text-sm'}`}>
                  Seus dados estão protegidos • SSL Certificado
                </span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Optimized floating particles with better performance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-float will-change-transform"
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
