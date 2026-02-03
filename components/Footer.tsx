
import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
          <div className="flex items-center space-x-8">
            <motion.img 
              whileHover={{ rotate: 5, scale: 1.1 }}
              src="imagenes/logo.jpg" 
              alt="Logo Monarca" 
              className="h-24 w-auto rounded-xl grayscale hover:grayscale-0 transition-all duration-700 border border-zinc-800" 
            />
            <div className="flex flex-col leading-none">
              <span className="text-neon font-black text-4xl tracking-tighter italic">MONARCA</span>
              <span className="text-zinc-700 text-[12px] tracking-[0.4em] font-bold uppercase">Tu Cuerpo. Tu Reino.</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 text-zinc-600">
            {['WhatsApp', 'Instagram', 'Facebook', 'TikTok'].map((social) => (
               <a 
                key={social} 
                href="#" 
                className="hover:text-neon transition-all text-xs font-black uppercase tracking-[0.3em] hover:tracking-[0.5em]"
               >
                 {social}
               </a>
            ))}
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-6 text-center">
          <p className="text-zinc-800 text-[11px] font-black tracking-widest uppercase">
            © 2026 MONARCA FISIO & REHAB. REYNOSA, TAMAULIPAS.
          </p>
          <p className="text-neon/10 text-[11px] font-black tracking-widest uppercase italic">
            ELITE PERFORMANCE REHABILITATION
          </p>
        </div>
      </div>
    </footer>
  );
};
