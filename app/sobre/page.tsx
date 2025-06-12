"use client";

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then(m=>m.Player), { ssr: false });

const AboutExpi = dynamic(() => import('@/components/sections/AboutExpi'), { ssr: false });

export default function SobrePage() {
  return (
    <main className="overflow-hidden">
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold font-montserrat mb-6"
          >
            Nossa História
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            De um projeto universitário a referência em IA para hotelaria.
          </motion.p>
          <div className="w-full max-w-md mx-auto mt-10">
            <Player
              autoplay
              loop
              src="https://assets5.lottiefiles.com/packages/lf20_2glqweqs.json"
              style={{ height: '300px', width: '100%' }}
            />
          </div>
        </div>
      </section>

      <AboutExpi />
    </main>
  );
} 