
import React from 'react';

const testimonials = [
  {
    name: "Carlos Mendes",
    position: "CTO, Empresa de E-commerce",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    quote: "Depois de sofrermos um ransomware que nos custou 3 dias de operação, implementamos o SOC da Security First. Em menos de um mês, eles já detectaram e bloquearam 6 tentativas de ataque que poderiam ter sido catastróficas."
  },
  {
    name: "Mariana Sousa",
    position: "CISO, Indústria Farmacêutica",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    quote: "A implementação do SOC 24x7 foi fundamental para nossa adequação à LGPD. A expertise do time da Security First nos deu segurança em todo o processo, e hoje temos visibilidade completa sobre nosso ambiente."
  },
  {
    name: "Ricardo Gomes",
    position: "Diretor de TI, Empresa de Manufatura",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    quote: "Impressionante como a solução da Security First se integrou facilmente com toda nossa infraestrutura. O modelo sem cobrança por eventos nos permitiu reduzir em 30% nossos custos com segurança."
  }
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-security-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">O que dizem nossos clientes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empresas que já contam com nossa proteção 24x7 contra ameaças cibernéticas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="security-card">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="text-security-red text-5xl opacity-70">"</div>
                  <p className="italic text-gray-700">{testimonial.quote}</p>
                </div>
                <div className="mt-auto pt-6 border-t border-gray-200 flex items-center">
                  <img 
                    src={testimonial.photo} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <h4 className="font-montserrat font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
