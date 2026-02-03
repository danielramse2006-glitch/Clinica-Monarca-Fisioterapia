
import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const waLink = "https://wa.me/528991259003?text=Hola%20Monarca%20Fisio,%20estoy%20listo%20para%20mi%20tratamiento.";

  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-transparent py-20">
      {/* CRUCES GIRATORIAS REPOSICIONADAS */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -left-20 md:left-10 top-[30%] text-neon/10 font-black text-[12rem] md:text-[20rem] pointer-events-none select-none z-0"
      >
        +
      </motion.div>
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute -right-20 md:right-10 bottom-[30%] text-neon/10 font-black text-[12rem] md:text-[20rem] pointer-events-none select-none z-0"
      >
        +
      </motion.div>

      <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.2 }
            }
          }}
        >
          <motion.h1 
            variants={{
              hidden: { y: 40, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
            className="text-6xl md:text-[9rem] font-black italic mb-6 tracking-tighter leading-[0.85] uppercase"
          >
            TU CUERPO. <br/>
            <motion.span 
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-neon drop-shadow-[0_0_30px_rgba(223,255,0,0.4)]"
            >
              TU REINO.
            </motion.span>
          </motion.h1>
          
          <motion.p 
            variants={{
              hidden: { y: 15, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
            className="text-zinc-500 text-sm md:text-xl mb-12 font-black tracking-[0.4em] uppercase max-w-3xl mx-auto"
          >
            REHABILITACIÓN DE ÉLITE PARA REYES DEL RENDIMIENTO
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(223,255,0,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-neon text-black px-12 py-5 rounded-xl font-black italic uppercase tracking-widest transition-all duration-300 text-xl overflow-hidden"
            >
              <span className="relative z-10">¡AGENDAR AHORA!</span>
              <motion.div 
                animate={{ x: ["-100%", "300%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-1/4 skew-x-12"
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
