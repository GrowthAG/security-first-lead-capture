
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from "sonner";
import { FileText } from 'lucide-react';

const LeadMagnet = () => {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulação de envio para API
    setTimeout(() => {
      toast.success("Material enviado com sucesso! Verifique seu email.");
      setEmail('');
      setNome('');
      setEmpresa('');
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-security-blue/10 rounded-lg p-6 relative">
              <div className="absolute -top-6 -right-6 bg-security-red text-white rounded-full px-4 py-2 font-bold">
                GRÁTIS
              </div>
              <img 
                src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Ebook Security First" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div>
            <h2 className="section-title">10 Passos para Blindar seu Ambiente Tecnológico</h2>
            <p className="text-lg text-gray-600 mb-6">
              Baixe nosso e-book gratuito e descubra como proteger sua empresa contra as principais ameaças cibernéticas.
            </p>
            
            <ul className="mb-8 space-y-2">
              <li className="flex items-center text-gray-700">
                <FileText className="text-security-red mr-2" size={18} />
                <span>Guia completo para aumentar sua segurança</span>
              </li>
              <li className="flex items-center text-gray-700">
                <FileText className="text-security-red mr-2" size={18} />
                <span>Checklist prático para implementação imediata</span>
              </li>
              <li className="flex items-center text-gray-700">
                <FileText className="text-security-red mr-2" size={18} />
                <span>Dicas exclusivas dos nossos especialistas</span>
              </li>
            </ul>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Seu melhor email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Nome da empresa"
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-security-red hover:bg-security-red/90 text-white"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Baixar E-book Gratuito"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
