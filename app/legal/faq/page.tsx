"use client";

import { motion } from 'framer-motion';
import { 
  Code, Settings, Shield, Users, Clock, CreditCard, 
  Laptop, Cloud, Database, HeartHandshake, Rocket,
  MessageSquare, Globe, Zap, Server
} from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '@/components/providers/ThemeProvider';
import { cn } from '@/lib/utils';

const faqs = [
  {
    category: "Plataforma",
    icon: Code,
    questions: [
      {
        q: "Como a Expi coleta avaliações dos hóspedes?",
        a: "Integramos nativamente com:\n• Booking.com e TripAdvisor\n• Google Reviews e outras OTAs\n• Formulários internos do hotel\n• Upload manual via CSV/XLSX\n• APIs de sistemas de gestão hoteleira"
      },
      {
        q: "A IA é específica para hotelaria?",
        a: "Sim, nossos modelos foram treinados exclusivamente com dados do setor hoteleiro:\n• Vocabulário específico de hóspedes\n• Classificação por setores (A&B, Governança, Manutenção, etc.)\n• Análise de sentimento contextualizada\n• Benchmark interno do setor"
      },
      {
        q: "Quantas avaliações a plataforma processa?",
        a: "A Expi processa:\n• Centenas de comentários em minutos\n• Análise em tempo real\n• Suporte a múltiplos idiomas\n• Histórico ilimitado de dados\n• Processamento em lote para grandes volumes"
      },
      {
        q: "Como funciona a classificação por setores?",
        a: "Nossa IA identifica automaticamente:\n• A&B (Alimentos e Bebidas)\n• Governança (Limpeza e quartos)\n• Manutenção e infraestrutura\n• Lazer e entretenimento\n• Atendimento e recepção\n• Localização e acesso"
      }
    ]
  },
  {
    category: "Implementação",
    icon: Server,
    questions: [
      {
        q: "Quanto tempo leva para implementar?",
        a: "Implementação rápida e simples:\n• Setup inicial: 1-2 dias\n• Integração com fontes: 3-5 dias\n• Treinamento da equipe: 1 dia\n• Ambiente de produção: 1 semana\n• Suporte contínuo incluso"
      },
      {
        q: "Quais integrações estão disponíveis?",
        a: "Oferecemos múltiplas opções:\n• APIs REST documentadas\n• Webhooks para atualizações automáticas\n• Conectores nativos para OTAs\n• Integração com PMSs populares\n• Export/import via CSV e Excel"
      },
      {
        q: "Como é feito o backup dos dados?",
        a: "Segurança e disponibilidade garantidas:\n• Backup diário automático\n• Replicação geográfica\n• Retenção de 5 anos\n• Disaster recovery testado\n• Conformidade LGPD"
      }
    ]
  },
  {
    category: "Insights e Relatórios",
    icon: HeartHandshake,
    questions: [
      {
        q: "Que tipo de insights a Expi gera?",
        a: "Insights acionáveis e estratégicos:\n• Prioridades de melhoria por setor\n• Tendências de satisfação ao longo do tempo\n• Comparativo entre unidades da rede\n• Alertas automáticos para problemas críticos\n• Recomendações de ações específicas"
      },
      {
        q: "Como acompanho múltiplos hotéis?",
        a: "Visão consolidada para redes:\n• Dashboard unificado multi-hotel\n• Benchmark interno entre unidades\n• Relatórios por região ou marca\n• KPIs padronizados\n• Drill-down por propriedade"
      },
      {
        q: "Posso exportar os relatórios?",
        a: "Total flexibilidade de exportação:\n• PDF executivo para diretoria\n• Excel detalhado para análises\n• Relatórios automáticos por email\n• API para integração com BI\n• Dashboards embarcados"
      }
    ]
  },
  {
    category: "Segurança",
    icon: Shield,
    questions: [
      {
        q: "Como garantem a segurança dos dados?",
        a: "Múltiplas camadas de proteção:\n• Criptografia AES-256\n• Autenticação Firebase\n• Isolamento por unidade hoteleira\n• Auditoria completa de acessos\n• Conformidade LGPD garantida"
      },
      {
        q: "Os dados ficam no Brasil?",
        a: "Sim, infraestrutura 100% nacional:\n• Servidores AWS São Paulo\n• Backup em múltiplas regiões brasileiras\n• Conformidade com legislação local\n• Suporte em português\n• SLA garantido 99.9%"
      }
    ]
  },
  {
    category: "Preços e Planos",
    icon: CreditCard,
    questions: [
      {
        q: "Como funciona o modelo de preços?",
        a: "Preços transparentes e flexíveis:\n• Cobrança por unidade hoteleira\n• Desconto progressivo para redes\n• Período de teste gratuito\n• Sem taxa de implementação\n• Cancelamento sem multa"
      },
      {
        q: "Posso testar antes de contratar?",
        a: "Sim, oferecemos:\n• Demo personalizada de 30 minutos\n• Ambiente sandbox com dados reais\n• Teste gratuito de 14 dias\n• Suporte durante o trial\n• Análise de ROI inclusa"
      },
      {
        q: "Há desconto para redes hoteleiras?",
        a: "Descontos especiais para redes:\n• 5+ hotéis: 15% de desconto\n• 10+ hotéis: 25% de desconto\n• 20+ hotéis: negociação personalizada\n• Implementação em fases\n• Account manager dedicado"
      }
    ]
  }
];

export default function FAQPage() {
  const { theme } = useTheme();
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const toggleQuestion = (question: string) => {
    setOpenQuestions(prev => 
      prev.includes(question) 
        ? prev.filter(q => q !== question)
        : [...prev, question]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto"
    >
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-8 text-center text-gradient-animated"
      >
        Dúvidas sobre a <span className="text-gradient-animated">Expi</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={cn(
          "text-center mb-12",
          theme === 'light' ? "text-white/80" : "text-muted-foreground"
        )}
      >
        Respostas rápidas sobre nossa plataforma de IA para hotelaria
      </motion.p>

      <div className="space-y-6">
        {faqs.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1 }}
            className={cn(
              "rounded-lg overflow-hidden backdrop-blur-md transition-all duration-300",
              theme === 'light' 
                ? "bg-white/10" 
                : "bg-card/50"
            )}
          >
            <button
              onClick={() => toggleCategory(category.category)}
              className={cn(
                "w-full p-6 flex items-center gap-4 transition-colors",
                theme === 'light'
                  ? "hover:bg-white/5"
                  : "hover:bg-card/80"
              )}
            >
              <category.icon className={cn(
                "w-6 h-6",
                theme === 'light' ? "text-white" : "text-primary"
              )} />
              <h2 className={cn(
                "text-2xl font-semibold flex-1 text-left",
                theme === 'light' ? "text-white" : "text-foreground"
              )}>
                {category.category}
              </h2>
              <motion.div
                animate={{ rotate: openCategory === category.category ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "w-6 h-6 flex items-center justify-center",
                  theme === 'light' ? "text-white" : "text-primary"
                )}
              >
                +
              </motion.div>
            </button>

            {openCategory === category.category && (
              <div className="px-6 pb-6 space-y-4">
                {category.questions.map((item, questionIndex) => (
                  <motion.div
                    key={item.q}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: questionIndex * 0.1 }}
                    className={cn(
                      "border-b last:border-0 pb-4 last:pb-0",
                      theme === 'light' ? "border-white/10" : "border-border"
                    )}
                  >
                    <button
                      onClick={() => toggleQuestion(item.q)}
                      className="w-full text-left flex items-center justify-between gap-4 py-2"
                    >
                      <span className={cn(
                        "font-medium",
                        theme === 'light' ? "text-white" : "text-foreground"
                      )}>
                        {item.q}
                      </span>
                      <motion.div
                        animate={{ rotate: openQuestions.includes(item.q) ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className={cn(
                          "w-4 h-4 flex items-center justify-center flex-shrink-0",
                          theme === 'light' ? "text-white" : "text-primary"
                        )}
                      >
                        +
                      </motion.div>
                    </button>
                    {openQuestions.includes(item.q) && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className={cn(
                          "mt-2 whitespace-pre-line",
                          theme === 'light' ? "text-white/80" : "text-muted-foreground"
                        )}
                      >
                        {item.a}
                      </motion.p>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className={cn(
          "rounded-lg p-6 backdrop-blur-md text-center mt-8",
          theme === 'light' 
            ? "bg-white/10" 
            : "bg-card/50"
        )}
      >
        <p className={cn(
          theme === 'light' ? "text-white/80" : "text-muted-foreground"
        )}>
          Não encontrou o que procurava? Entre em contato:{' '}
          <a 
            href="mailto:experienceia1@gmail.com" 
            className={cn(
              "transition-colors",
              theme === 'light' 
                ? "text-white hover:text-white/80" 
                : "text-primary hover:text-primary/80"
            )}
          >
            experienceia1@gmail.com
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
} 