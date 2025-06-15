
import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { PhoneCall, Shield, CheckCircle2 } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const EnhancedHeader = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const isMobile = useIsMobile();

  // Debounced scroll handler for better performance
  const handleScroll = useCallback(() => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);

    // Detect active section with optimized performance
    const sections = ['hero', 'beneficios', 'como-funciona', 'authority', 'technical-events', 'formulario'];
    const currentSection = sections.find(id => {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });
    
    if (currentSection && currentSection !== activeSection) {
      setActiveSection(currentSection);
    }
  }, [activeSection]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const debouncedScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 10);
    };

    window.addEventListener('scroll', debouncedScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  const scrollToForm = useCallback(() => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const navigationItems = [
    { id: 'beneficios', label: 'Benefícios' },
    { id: 'como-funciona', label: 'Como Funciona' },
    { id: 'authority', label: 'Reconhecimento' },
    { id: 'formulario', label: 'Contato' }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-gray-100 will-change-transform">
      {/* Optimized Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-security-red to-security-blue transition-all duration-150 ease-out will-change-transform" 
        style={{ transform: `scaleX(${scrollProgress / 100})`, transformOrigin: 'left' }}
      ></div>
      
      <div className="container mx-auto py-2 px-3 md:py-3 md:px-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/359006b6-e80f-4854-9503-167db1c6429d.png" 
            alt="Security First Logo" 
            className="h-7 md:h-8 hover:scale-105 transition-transform duration-300 will-change-transform" 
            loading="eager"
            decoding="async"
          />
          
          {/* Enhanced Real-time Status Indicator */}
          <div className="hidden md:flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full border border-green-200 hover:bg-green-100 transition-colors duration-200">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-700 text-xs font-medium">SOC Ativo 24/7</span>
            <div className="w-1 h-1 bg-green-400 rounded-full opacity-60"></div>
          </div>
        </div>

        {!isMobile && (
          <nav className="flex items-center space-x-6">
            <ul className="flex space-x-6">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`text-security-blue hover:text-security-red font-medium transition-all duration-300 relative group focus:outline-none focus:ring-2 focus:ring-security-red/20 rounded px-2 py-1 ${
                      activeSection === item.id ? 'text-security-red' : ''
                    }`}
                  >
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-security-red transition-all duration-300 ${
                      activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </button>
                </li>
              ))}
            </ul>
            
            <Button 
              onClick={scrollToForm}
              className="bg-security-red hover:bg-security-red/90 text-white flex items-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-security-red/25 focus:ring-2 focus:ring-security-red/20 active:scale-95"
            >
              <PhoneCall size={18} className="mr-2" />
              Fale com um Especialista
            </Button>
          </nav>
        )}

        {isMobile && (
          <Button 
            onClick={scrollToForm}
            className="bg-security-red hover:bg-security-red/90 text-white text-xs py-2 px-3 hover:scale-105 transition-all duration-300 focus:ring-2 focus:ring-security-red/20 active:scale-95"
            size="sm"
          >
            <PhoneCall size={16} />
          </Button>
        )}
      </div>

      {/* Enhanced Mobile Navigation Dots */}
      {isMobile && (
        <div className="flex justify-center space-x-2 pb-2">
          {navigationItems.slice(0, 4).map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-security-red/30 ${
                activeSection === item.id ? 'bg-security-red scale-125' : 'bg-gray-300 hover:bg-security-red/50 active:scale-110'
              }`}
              aria-label={`Ir para ${item.label}`}
            />
          ))}
        </div>
      )}
    </header>
  );
};

export default EnhancedHeader;
