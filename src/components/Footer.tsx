
import React from 'react';
import { ShieldCheck, PhoneCall, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-security-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <img 
              src="/lovable-uploads/359006b6-e80f-4854-9503-167db1c6429d.png" 
              alt="Security First Logo" 
              className="h-10 mb-4" 
            />
            <p className="text-white/80 mb-4">
              Soluções avançadas de cibersegurança para proteger o que é mais valioso: seus dados e sua reputação.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-xl mb-5">Nossos Serviços</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white">SOC 24x7</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Pentest</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Consultoria LGPD</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Advisor de Segurança</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Treinamentos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-xl mb-5">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#beneficios" className="text-white/80 hover:text-white">Benefícios</a></li>
              <li><a href="#como-funciona" className="text-white/80 hover:text-white">Como Funciona</a></li>
              <li><a href="#depoimentos" className="text-white/80 hover:text-white">Depoimentos</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Sobre Nós</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-xl mb-5">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <PhoneCall className="mr-3 flex-shrink-0 mt-1" size={18} />
                <span>(11) 0000-0000</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 flex-shrink-0 mt-1" size={18} />
                <span>contato@securityfirst.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 flex-shrink-0 mt-1" size={18} />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/70">
          <p>© {new Date().getFullYear()} Security First. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
