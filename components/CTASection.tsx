
import React from 'react';
import { motion } from 'framer-motion';

export const CTASection: React.FC = () => {
  const waLink = "https://wa.me/528991259003?text=Hola%20Monarca%20Fisio,%20estoy%20listo%20para%20mi%20primera%20sesión.";

  return (
    <div className="py-32 bg-black px-4 relative overflow-hidden">
      {/* Decorative background element */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute right-0 bottom-0 pointer-events-none translate-x-1/4 translate-y-1/4"
      >
         <svg width="600" height="600" viewBox="0 0 100 100">
            <path d="M50 5L65 35L95 50L65 65L50 95L35 65L5 50L35 35L50 5Z" fill="#DFFF00"/>
         </svg>
      </motion.div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-6xl md:text-9xl font-black mb-10 italic tracking-tighter uppercase leading-[0.85]"
        >
          ¿LISTO PARA <br/><span className="text-neon underline decoration-neon underline-offset-8">RECUPERARTE?</span>
        </motion.h2>
        <p className="text-zinc-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium uppercase tracking-widest">
          No dejes que el dolor detenga tu ritmo. Tu reino te necesita al 100%.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <motion.a 
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-neon text-black px-12 py-6 rounded-2xl font-black italic uppercase tracking-widest text-lg shadow-[0_0_30px_rgba(223,255,0,0.3)]"
          >
            AGENDAR POR WHATSAPP
          </motion.a>
          <a 
            href="tel:8991259003"
            className="w-full sm:w-auto border-2 border-zinc-800 text-white px-12 py-6 rounded-2xl font-black italic uppercase tracking-widest flex items-center justify-center space-x-3 hover:bg-zinc-900 transition-colors text-lg"
          >
            <span>📞</span>
            <span>LLAMAR AHORA</span>
          </a>
        </div>
      </div>
    </div>
  );
};
