"use client";

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles, TrendingUp, Users, BarChart3, Star, MessageSquare, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Múltiplos efeitos de parallax para diferentes elementos
  const yText = useTransform(scrollY, [0, 1000], [0, 200]);
  const yImage = useTransform(scrollY, [0, 1000], [0, -150]);
  const yCards = useTransform(scrollY, [0, 1000], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.8]);
  const rotate = useTransform(scrollY, [0, 1000], [0, -5]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação escalonada para o título
      gsap.from(".hero-title-line", {
        y: 120,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.15
      });

      gsap.from(".hero-subtitle", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        delay: 0.6,
        ease: "power4.out",
      });

      gsap.from(".hero-cta", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        delay: 0.9,
        ease: "power4.out",
      });

      // Animação para a badge
      gsap.from(".hero-badge", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "back.out(1.7)",
      });

      // Animação paralax suave para cards flutuantes
      gsap.to(".floating-card", {
        y: "random(-20, 20)",
        rotation: "random(-5, 5)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="home" className="min-h-screen pt-20 md:pt-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      
      {/* Elementos de fundo animados com parallax */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ y: useTransform(scrollY, [0, 1000], [0, 300]) }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </motion.div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          <motion.div 
            style={{ y: yText, opacity, scale }} 
            className="space-y-6 lg:space-y-8 py-8"
          >
            <motion.div 
              className="hero-badge inline-flex items-center gap-2 glass px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                IA para Hotelaria
              </span>
            </motion.div>

            <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-montserrat leading-[1.1]">
              <div className="hero-title-line overflow-hidden">
                <motion.div 
                  className="text-gradient-animated"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  Transforme feedbacks
                </motion.div>
              </div>
              <div className="hero-title-line overflow-hidden mt-1">
                <motion.div 
                  className="text-gradient-animated"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  de hóspedes
                </motion.div>
              </div>
              <div className="hero-title-line overflow-hidden mt-1">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  em decisões estratégicas
                </motion.div>
              </div>
              <div className="hero-title-line overflow-hidden mt-1">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  em minutos, não dias.
                </motion.div>
              </div>
            </h1>
            
            <p className="hero-subtitle text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              A Expi analisa centenas de avaliações do Booking, TripAdvisor e formulários internos, gera insights acionáveis por setor e ajuda gestores a aumentar a satisfação dos hóspedes enquanto reduzem custos operacionais.
            </p>

            {/* CTA removido conforme solicitado */}
          </motion.div>

          <motion.div 
            className="relative py-8"
            style={{ y: yImage, rotate }}
          >
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.5, 
                ease: [0.25, 0.46, 0.45, 0.94] // cubic-bezier equivalent to power4.out
              }}
            >
              <div className="relative group">
                {/* Imagem principal 3D de hotel */}
                <motion.div
                  className="relative overflow-hidden rounded-3xl shadow-2xl transform perspective-1000"
                  whileHover={{ rotateY: 5, rotateX: 5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Hotel Moderno com IA"
                    className="w-full h-auto rounded-3xl"
                  />
                  
                  {/* Overlay com gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-purple-600/20 rounded-3xl" />
                </motion.div>

                {/* Cards flutuantes relacionados a hotelaria com parallax */}
                <motion.div
                  className="floating-card absolute -right-4 lg:-right-8 top-1/4 glass p-4 rounded-xl shadow-xl backdrop-blur-md"
                  style={{ y: yCards }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <TrendingUp className="w-8 h-8 text-primary" />
                    </motion.div>
                    <div>
                      <p className="text-sm font-semibold">95% Satisfação</p>
                      <p className="text-xs text-muted-foreground">Análise em Tempo Real</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="floating-card absolute -left-4 lg:-left-8 top-1/2 glass p-4 rounded-xl shadow-xl backdrop-blur-md"
                  style={{ y: useTransform(scrollY, [0, 1000], [0, 80]) }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Star className="w-8 h-8 text-yellow-500" />
                    </motion.div>
                    <div>
                      <p className="text-sm font-semibold">4.8★ Avaliação</p>
                      <p className="text-xs text-muted-foreground">Booking & TripAdvisor</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="floating-card absolute -right-4 lg:-right-8 bottom-1/4 glass p-4 rounded-xl shadow-xl backdrop-blur-md"
                  style={{ y: useTransform(scrollY, [0, 1000], [0, 120]) }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotateY: 180 }}
                      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    >
                      <MessageSquare className="w-8 h-8 text-purple-600" />
                    </motion.div>
                    <div>
                      <p className="text-sm font-semibold">1000+ Reviews</p>
                      <p className="text-xs text-muted-foreground">Processadas/dia</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="floating-card absolute -left-4 lg:-left-8 bottom-12 glass p-4 rounded-xl shadow-xl backdrop-blur-md"
                  style={{ y: useTransform(scrollY, [0, 1000], [0, 60]) }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.9, duration: 0.8, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    >
                      <Clock className="w-8 h-8 text-green-500" />
                    </motion.div>
                    <div>
                      <p className="text-sm font-semibold">Insights em Minutos</p>
                      <p className="text-xs text-muted-foreground">Velocidade IA</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Efeito de glow com parallax */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-3xl blur-3xl opacity-50"
              style={{ y: useTransform(scrollY, [0, 1000], [0, -100]) }}
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}