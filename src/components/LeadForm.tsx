
import React, { useState, useEffect } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Clock, Shield, CheckCircle2, Users } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().optional(),
  email: z.string().email({ message: "E-mail válido é obrigatório" }).or(z.literal("")),
  phone: z.string().optional(),
  company: z.string().optional(),
  sector: z.string().optional(),
  position: z.string().optional(),
  customPosition: z.string().optional(),
});

const WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/5C2Mxuu479dGArGRG36G/webhook-trigger/53bba7ba-599a-4c29-afa3-2a82930af303";
const AGENDA_URL = "https://pages.securityfirst.com.br/agenda-diagnostico";

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
  const [vagas, setVagas] = useState(7); // Simulando vagas restantes
  const [progress, setProgress] = useState(0);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange', // Validação em tempo real
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

  // Calcular progresso baseado nos campos preenchidos
  const watchedFields = form.watch();
  useEffect(() => {
    const totalFields = 6; // fullName, email, phone, company, sector, position
    let filledFields = 0;
    
    if (watchedFields.fullName?.trim()) filledFields++;
    if (watchedFields.email?.trim()) filledFields++;
    if (watchedFields.phone?.trim()) filledFields++;
    if (watchedFields.company?.trim()) filledFields++;
    if (watchedFields.sector?.trim()) filledFields++;
    if (watchedFields.position?.trim() || watchedFields.customPosition?.trim()) filledFields++;
    
    setProgress((filledFields / totalFields) * 100);
  }, [watchedFields]);

  // Autosave - salvar no localStorage
  useEffect(() => {
    const subscription = form.watch((value) => {
      localStorage.setItem('leadFormDraft', JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [form]);

  // Carregar dados salvos
  useEffect(() => {
    const savedData = localStorage.getItem('leadFormDraft');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        form.reset(parsedData);
      } catch (error) {
        console.error('Erro ao carregar dados salvos:', error);
      }
    }
  }, [form]);

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
      
      // Limpar dados salvos
      localStorage.removeItem('leadFormDraft');
      
      // Redirect to the agenda page
      window.location.href = AGENDA_URL;
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

  const hasMinimumInfo = watchedFields.email?.trim() || watchedFields.phone?.trim();

  return (
    <div className="p-4">
      {/* Contador de Vagas e Benefícios */}
      <div className="mb-6 space-y-4">
        <div className="flex items-center justify-center mb-4">
          <Badge variant="destructive" className="px-4 py-2 text-sm font-medium">
            <Users className="w-4 h-4 mr-2" />
            Apenas {vagas} vagas restantes este mês
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <div className="flex items-center text-sm text-gray-600 bg-green-50 p-3 rounded-lg">
            <Clock className="w-4 h-4 mr-2 text-green-600" />
            <span className="font-medium text-green-700">Relatório em 24h</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
            <CheckCircle2 className="w-4 h-4 mr-2 text-blue-600" />
            <span className="font-medium text-blue-700">100% gratuito</span>
          </div>
        </div>
      </div>

      {/* Indicador de Progresso */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Progresso do formulário</span>
          <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

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
                <FormLabel>Nome Completo <span className="text-gray-400 text-sm">(opcional)</span></FormLabel>
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
                <FormLabel>Telefone / WhatsApp <span className="text-gray-400 text-sm">(opcional)</span></FormLabel>
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
                <FormLabel>Nome da Empresa <span className="text-gray-400 text-sm">(opcional)</span></FormLabel>
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
                <FormLabel>Setor da Empresa <span className="text-gray-400 text-sm">(opcional)</span></FormLabel>
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
                <FormLabel>Cargo <span className="text-gray-400 text-sm">(opcional)</span></FormLabel>
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

          <div className="pt-4">
            <Button 
              type="submit" 
              disabled={isSubmitting || !hasMinimumInfo}
              className="w-full bg-security-red hover:bg-security-red/90 text-white font-semibold py-3 text-lg"
            >
              {isSubmitting ? "Enviando..." : "Solicitar Atendimento"}
            </Button>
            <p className="text-center text-sm text-gray-500 mt-2">
              Sem compromisso • 100% gratuito
            </p>
          </div>
        </form>
      </Form>

      {/* Texto de Segurança */}
      <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
        <Shield className="w-4 h-4 mr-2" />
        <span>Seus dados estão protegidos conosco</span>
      </div>
    </div>
  );
};

export default LeadForm;
