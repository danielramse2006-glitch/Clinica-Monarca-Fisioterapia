
import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const waLink = "https://wa.me/528991259003?text=Hola%20Monarca%20Fisio,%20estoy%20listo%20para%20mi%20tratamiento.";

  return (
    <div className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-transparent">
      {/* CRUCES GIRATORIAS - Una a cada lado */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -left-16 md:left-5 top-1/4 text-neon/10 font-black text-[18rem] md:text-[30rem] pointer-events-none select-none z-0"
      >
        +
      </motion.div>
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -right-16 md:right-5 bottom-1/4 text-neon/10 font-black text-[18rem] md:text-[30rem] pointer-events-none select-none z-0"
      >
        +
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Logo Central Cuadrado con animación de flotación y brillo */}
        <motion.div 
          initial={{ y: 50, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              filter: [
                "drop-shadow(0 0 10px rgba(223,255,0,0.1))", 
                "drop-shadow(0 0 40px rgba(223,255,0,0.4))", 
                "drop-shadow(0 0 10px rgba(223,255,0,0.1))"
              ]
            }}
            transition={{ 
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              filter: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="p-1 bg-neon/5 rounded-3xl"
          >
            <img 
              src="imagenes/logo.jpg" 
              alt="Logo Monarca Cuadrado" 
              className="w-52 md:w-80 h-auto rounded-2xl object-contain border-2 border-zinc-800/80 shadow-2xl" 
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/monarca/600/600'; }}
            />
          </motion.div>
        </motion.div>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.5 }
            }
          }}
        >
          <motion.h1 
            variants={{
              hidden: { y: 60, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
            className="text-6xl md:text-[10rem] font-black italic mb-6 tracking-tighter leading-[0.82] uppercase"
          >
            TU CUERPO. <br/>
            <motion.span 
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-neon drop-shadow-[0_0_40px_rgba(223,255,0,0.5)]"
            >
              TU REINO.
            </motion.span>
          </motion.h1>
          
          <motion.p 
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
            className="text-zinc-500 text-lg md:text-xl mb-14 font-black tracking-[0.3em] uppercase max-w-3xl mx-auto"
          >
            REHABILITACIÓN DE ÉLITE PARA REYES DEL RENDIMIENTO
          </motion.p>

          <motion.div 
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(223,255,0,0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-neon text-black px-14 py-6 rounded-xl font-black uppercase tracking-widest transition-all duration-300 text-xl italic overflow-hidden"
            >
              <span className="relative z-10">¡AGENDAR AHORA!</span>
              <motion.div 
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-1/3 skew-x-12"
              />
            </motion.a>
            
            <motion.button 
              whileHover={{ x: 10 }}
              onClick={() => document.getElementById('servicios')?.scrollIntoView({behavior: 'smooth'})}
              className="text-zinc-500 hover:text-white px-8 py-4 font-black uppercase tracking-widest transition-all text-xs border-b-2 border-transparent hover:border-neon flex items-center gap-3"
            >
              EXPLORAR SERVICIOS <span className="animate-bounce">↓</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Resplandor radial de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(223,255,0,0.05)_0%,transparent_70%)] pointer-events-none"></div>
    </div>
  );
};
