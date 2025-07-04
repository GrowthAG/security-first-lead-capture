
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const SectionNavigator = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  const sections = [
    { id: 'hero', name: 'Início' },
    { id: 'beneficios', name: 'Benefícios' },
    { id: 'como-funciona', name: 'Como Funciona' },
    { id: 'authority', name: 'Autoridade' },
    { id: 'technical-events', name: 'Reconhecimento' },
    { id: 'formulario', name: 'Contato' }
  ];

  useEffect(() => {
    if (isMobile) return; // Desabilita no mobile para evitar tremores
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);

      // Find current section
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setCurrentSection(index);
          }
        }
      });
    };

    let timeoutId: NodeJS.Timeout;
    const debouncedScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 16); // ~60fps
    };

    window.addEventListener('scroll', debouncedScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      clearTimeout(timeoutId);
    };
  }, [isMobile]);

  const navigateToSection = (direction: 'up' | 'down') => {
    const newIndex = direction === 'up' 
      ? Math.max(0, currentSection - 1)
      : Math.min(sections.length - 1, currentSection + 1);
    
    document.getElementById(sections[newIndex].id)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  if (!isVisible || isMobile) return null;

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 py-2 px-1">
        <button
          onClick={() => navigateToSection('up')}
          disabled={currentSection === 0}
          className="block p-2 text-gray-600 hover:text-security-red disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          <ChevronUp className="w-4 h-4" />
        </button>

        <div className="py-2">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
              className={`block w-2 h-2 rounded-full mb-2 last:mb-0 transition-all duration-200 ${
                index === currentSection
                  ? 'bg-security-red scale-125'
                  : 'bg-gray-300 hover:bg-security-red/50'
              }`}
              title={section.name}
            />
          ))}
        </div>

        <button
          onClick={() => navigateToSection('down')}
          disabled={currentSection === sections.length - 1}
          className="block p-2 text-gray-600 hover:text-security-red disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default SectionNavigator;
