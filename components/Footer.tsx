
import React from 'react';
import { motion } from 'framer-motion';

const LOGO_URL = "https://i.ibb.co/fz8KcFwQ/logo1.jpg";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              src={LOGO_URL} 
              alt="Logo Monarca" 
              className="h-14 w-auto min-w-[180px] object-contain grayscale hover:grayscale-0 transition-all duration-700" 
            />
            <div className="flex flex-col leading-none text-center md:text-left">
              <span className="text-neon font-black text-3xl tracking-tighter italic">MONARCA</span>
              <span className="text-zinc-800 text-[10px] tracking-[0.4em] font-bold uppercase mt-1">Tu Cuerpo. Tu Reino.</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-10 text-zinc-700">
            {['WhatsApp', 'Instagram', 'Facebook', 'TikTok'].map((social) => (
               <a 
                key={social} 
                href="#" 
                className="hover:text-neon transition-all text-[10px] font-black uppercase tracking-[0.3em] hover:tracking-[0.5em]"
               >
                 {social}
               </a>
            ))}
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-8 text-center">
          <p className="text-zinc-800 text-[10px] font-black tracking-[0.3em] uppercase">
            © 2026 MONARCA FISIO & REHAB. REYNOSA, TAMAULIPAS.
          </p>
          <div className="flex items-center space-x-3 opacity-30">
             <div className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse"></div>
             <p className="text-white text-[10px] font-black tracking-widest uppercase italic">
               ELITE PERFORMANCE REHABILITATION
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
