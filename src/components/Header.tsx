
import React from 'react';
import { Button } from '@/components/ui/button';
import { PhoneCall } from 'lucide-react';

const Header = () => {
  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511000000000?text=Olá! Gostaria de saber mais sobre os serviços de SOC da Security First.", "_blank");
  };

  return (
    <header className="bg-white sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/359006b6-e80f-4854-9503-167db1c6429d.png" 
            alt="Security First Logo" 
            className="h-12" 
          />
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#beneficios" className="text-security-blue hover:text-security-red font-medium transition-colors">Benefícios</a></li>
              <li><a href="#como-funciona" className="text-security-blue hover:text-security-red font-medium transition-colors">Como Funciona</a></li>
              <li><a href="#depoimentos" className="text-security-blue hover:text-security-red font-medium transition-colors">Depoimentos</a></li>
              <li><a href="#formulario" className="text-security-blue hover:text-security-red font-medium transition-colors">Contato</a></li>
            </ul>
          </nav>
          <Button 
            onClick={scrollToForm}
            className="bg-security-red hover:bg-security-red/90 text-white flex items-center"
          >
            <PhoneCall size={18} className="mr-2" />
            Fale com um Especialista
          </Button>
        </div>
        <div className="md:hidden">
          <Button 
            onClick={scrollToForm}
            className="bg-security-red hover:bg-security-red/90 text-white"
            size="sm"
          >
            <PhoneCall size={16} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
