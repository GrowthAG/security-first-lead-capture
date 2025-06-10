
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  fullName: z.string().min(3, { message: "Nome completo é obrigatório" }),
  email: z.string().email({ message: "E-mail corporativo válido é obrigatório" }),
  phone: z.string().min(10, { message: "Telefone/WhatsApp é obrigatório" }),
  company: z.string().min(2, { message: "Nome da empresa é obrigatório" }),
  sector: z.string().min(2, { message: "Setor da empresa é obrigatório" }),
  position: z.string().min(2, { message: "Cargo é obrigatório" }),
  customPosition: z.string().optional(),
});

const WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/5C2Mxuu479dGArGRG36G/webhook-trigger/53bba7ba-599a-4c29-afa3-2a82930af303";
const BOOKING_URL = "https://pages.securityfirst.com.br/booking";

const sectorOptions = [
  { value: "bancos-instituicoes-financeiras", label: "🏦 Bancos e Instituições Financeiras" },
  { value: "fintechs-meios-pagamento", label: "🏦 Fintechs e Meios de Pagamento" },
  { value: "cooperativas-credito-consorcios", label: "🏦 Cooperativas de Crédito / Consórcios" },
  { value: "hospitais-clinicas", label: "🏥 Hospitais / Clínicas" },
  { value: "laboratorios-operadoras-plano-saude", label: "🏥 Laboratórios / Operadoras de Plano de Saúde" },
  { value: "healthtechs", label: "🏥 HealthTechs" },
  { value: "industria-geral", label: "🏭 Indústria Geral" },
  { value: "industria-farmaceutica", label: "🏭 Indústria Farmacêutica" },
  { value: "industria-alimentos-bebidas", label: "🏭 Indústria de Alimentos / Bebidas" },
  { value: "marketplaces-lojas-virtuais", label: "🛒 Marketplaces / Lojas Virtuais" },
  { value: "plataformas-logistica-transporte", label: "🛒 Plataformas de Logística / Transporte" },
  { value: "universidades-ensino-superior", label: "🎓 Universidades / Ensino Superior" },
  { value: "plataformas-ead-edtechs", label: "🎓 Plataformas EAD / EdTechs" },
  { value: "energia-saneamento-telecom", label: "⚡ Energia / Saneamento / Telecom" },
  { value: "concessionarias-servicos-publicos", label: "⚡ Concessionárias de Serviços Públicos" },
  { value: "seguradoras", label: "🔐 Seguradoras" },
  { value: "previdencia-complementar", label: "🔐 Previdência Complementar" },
  { value: "transportadoras", label: "🚛 Transportadoras" },
  { value: "plataformas-rastreamento", label: "🚛 Plataformas de Rastreamento" },
  { value: "saas-plataformas-digitais", label: "🏢 SaaS / Plataformas Digitais" },
  { value: "consultorias-ti", label: "🏢 Consultorias de TI" },
  { value: "governo-setor-publico", label: "🏛 Governo e Setor Público" },
  { value: "outro", label: "🧩 Outro (especificar no campo de mensagem)" }
];

const LeadForm = () => {
  const [showCustomPosition, setShowCustomPosition] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      sector: "",
      position: "",
      customPosition: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Prepare the final data to be submitted
    const finalValues = {
      ...values,
      // If "Outro" is selected, use the custom position value
      position: values.position === "Outro" ? values.customPosition : values.position,
    };

    try {
      // Send the data to the webhook
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalValues),
      });
      
      if (!response.ok) {
        throw new Error('Falha ao enviar os dados');
      }
      
      console.log('Dados enviados com sucesso:', finalValues);
      
      // Redirect to the booking page without appending parameters
      window.location.href = BOOKING_URL;
    } catch (error) {
      console.error('Erro ao enviar dados para o CRM:', error);
      toast.error("Erro ao enviar formulário. Por favor, tente novamente.");
      setIsSubmitting(false);
    }
  }

  // Handle position change to show/hide custom position field
  const handlePositionChange = (value: string) => {
    setShowCustomPosition(value === "Outro");
    form.setValue("position", value);
    
    if (value !== "Outro") {
      form.setValue("customPosition", "");
    }
  };

  return (
    <div className="p-4">
      <p className="text-center text-gray-600 mb-6">
        Preencha o formulário abaixo e nossa equipe entrará em contato para agendar uma 
        avaliação especializada para sua empresa.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome Completo</FormLabel>
                <FormControl>
                  <Input placeholder="Digite seu nome completo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail Corporativo</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="seu.nome@empresa.com.br" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone / WhatsApp</FormLabel>
                <FormControl>
                  <Input placeholder="(00) 00000-0000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome da Empresa</FormLabel>
                <FormControl>
                  <Input placeholder="Nome da sua empresa" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sector"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Setor da Empresa</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o setor da sua empresa" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {sectorOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="position"
            render={() => (
              <FormItem>
                <FormLabel>Cargo</FormLabel>
                <Select onValueChange={handlePositionChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione seu cargo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="CTO (Chief Technology Officer)">CTO (Chief Technology Officer)</SelectItem>
                    <SelectItem value="CISO (Chief Information Security Officer)">CISO (Chief Information Security Officer)</SelectItem>
                    <SelectItem value="Gerente de TI">Gerente de TI</SelectItem>
                    <SelectItem value="Gerente de Compliance">Gerente de Compliance</SelectItem>
                    <SelectItem value="Diretor de Tecnologia">Diretor de Tecnologia</SelectItem>
                    <SelectItem value="Coordenador de Infraestrutura">Coordenador de Infraestrutura</SelectItem>
                    <SelectItem value="Especialista em Segurança Cibernética">Especialista em Segurança Cibernética</SelectItem>
                    <SelectItem value="Responsável por LGPD">Responsável por LGPD</SelectItem>
                    <SelectItem value="Outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {showCustomPosition && (
            <FormField
              control={form.control}
              name="customPosition"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Especifique seu Cargo</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu cargo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-security-red hover:bg-security-red/90 text-white font-semibold py-3 text-lg"
          >
            {isSubmitting ? "Enviando..." : "Solicitar Atendimento"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LeadForm;
