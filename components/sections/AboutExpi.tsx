"use client";

import { motion } from 'framer-motion';
import { Lightbulb, Users, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/providers/ThemeProvider';

export default function AboutExpi() {
  const { theme } = useTheme();

  return (
    <section id="sobre" className="section-padding">
      <div className="container max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold font-montserrat mb-10 text-center"
        >
          Sobre a <span className="text-gradient-animated">Expi</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg leading-relaxed text-muted-foreground mb-12 text-center"
        >
          A Expi nasceu dentro da universidade, quando dois colegas transformaram um projeto de chatbots em uma missão: revolucionar a hotelaria com inteligência artificial. De lá pra cá, evoluímos para uma plataforma SaaS que traduz a voz do hóspede em ações concretas para gestores.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={cn(
              'rounded-lg p-6 backdrop-blur-md text-center',
              theme === 'light' ? 'bg-white/10' : 'bg-card/50'
            )}
          >
            <Lightbulb className="w-8 h-8 text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Inovação em IA</h3>
            <p className="text-sm text-muted-foreground">
              Pesquisa constante para manter nossos modelos específicos ao setor hoteleiro.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={cn(
              'rounded-lg p-6 backdrop-blur-md text-center',
              theme === 'light' ? 'bg-white/10' : 'bg-card/50'
            )}
          >
            <Users className="w-8 h-8 text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Foco no Hóspede</h3>
            <p className="text-sm text-muted-foreground">
              Cada insight é pensado para melhorar a experiência do viajante.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className={cn(
              'rounded-lg p-6 backdrop-blur-md text-center',
              theme === 'light' ? 'bg-white/10' : 'bg-card/50'
            )}
          >
            <Heart className="w-8 h-8 text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Parceria de Longo Prazo</h3>
            <p className="text-sm text-muted-foreground">
              Crescemos junto com nossos clientes, apoiando redes e hotéis independentes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 