"use client";

import { motion } from 'framer-motion';
import dynamicImport from 'next/dynamic';
import { useTheme } from '@/components/providers/ThemeProvider';
import { cn } from '@/lib/utils';
import { 
  MessageSquare, 
  Target, 
  Rocket, 
  Code,
  Presentation,
  Users,
  CheckCircle
} from 'lucide-react';

const Player = dynamicImport(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { ssr: false }
);

const steps = [
  {
    icon: MessageSquare,
    title: '1. Conecte suas Fontes',
    description: 'Importe automaticamente avaliações do Booking, TripAdvisor, Google e formulários internos ou faça upload em CSV/XLSX.',
    video: 'https://assets2.lottiefiles.com/packages/lf20_49rdyysj.json'
  },
  {
    icon: Code,
    title: '2. IA Analisa em Minutos',
    description: 'Modelos de IA treinados para hotelaria identificam sentimento, tema e setor em cada comentário.',
    video: 'https://assets10.lottiefiles.com/packages/lf20_w51pcehl.json'
  },
  {
    icon: Presentation,
    title: '3. Receba Insights Acionáveis',
    description: 'Dashboards mostram prioridades, tendências e alertas – tudo classificado por setor e impacto.',
    video: '/animations/AnimationProposal.json'
  },
  {
    icon: Target,
    title: '4. Aja e Meça Resultados',
    description: 'Crie planos de ação, acompanhe a execução e veja a evolução da satisfação do hóspede em tempo real.',
    video: 'https://assets3.lottiefiles.com/packages/lf20_obhph3sh.json'
  }
];

export default function HowItWorks() {
  const { theme } = useTheme();

  return (
    <section id="funciona" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            Como a <span className="text-gradient-animated">Plataforma Expi</span> Funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Da coleta de avaliações à ação, em um fluxo totalmente automatizado
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "rounded-xl p-6 backdrop-blur-md relative group hover:transform hover:-translate-y-2 transition-all duration-300",
                theme === 'light' 
                  ? "bg-white/10" 
                  : "bg-card/50"
              )}
            >
              <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
                <Player
                  autoplay
                  loop
                  src={step.video}
                  style={{ 
                    position: 'absolute',
                    width: '120%',
                    height: '120%',
                    left: '-10%',
                    top: '-10%',
                    objectFit: 'contain',
                    padding: '0.5rem'
                  }}
                />
              </div>
              
              <step.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Agende uma Demonstração
            <CheckCircle className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
} 