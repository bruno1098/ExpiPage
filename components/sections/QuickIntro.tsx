"use client";

import { motion } from 'framer-motion';
import { useTheme } from '@/components/providers/ThemeProvider';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

export default function QuickIntro() {
  const { theme } = useTheme();
  return (
    <section className="section-padding">
      <div className="container text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            'inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm mb-6',
            theme === 'light' ? 'bg-white/10' : 'bg-card/50'
          )}
        >
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium">IA que entende seu hóspede</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-montserrat mb-4"
        >
          A maneira mais rápida de transformar avaliações em ações.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg text-muted-foreground"
        >
          Conecte suas fontes de feedback, deixe a Expi analisar e receba recomendações práticas para elevar a satisfação do hóspede e otimizar custos operacionais.
        </motion.p>
      </div>
    </section>
  );
} 