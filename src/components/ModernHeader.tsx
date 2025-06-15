
import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ModernHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-cyan-400" />
            <span className="text-white font-bold text-xl">Security First</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {['SOC', 'Benefícios', 'Confiança', 'FAQ'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(['soc-process', 'beneficios', 'confianca', 'faq'][index])}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <Button 
            onClick={() => scrollToSection('faq')}
            className="hidden md:flex bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Diagnóstico Gratuito
          </Button>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-cyan-500/20 py-4">
            <nav className="flex flex-col space-y-4">
              {['SOC', 'Benefícios', 'Confiança', 'FAQ'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(['soc-process', 'beneficios', 'confianca', 'faq'][index])}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-left"
                >
                  {item}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('faq')}
                className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold w-full"
              >
                Diagnóstico Gratuito
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default ModernHeader;
