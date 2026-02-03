
import React from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const waLink = "https://wa.me/528991259003?text=Hola%20Monarca%20Fisio,%20me%20gustaría%20agendar%20una%20cita.";

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", damping: 20 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-2xl border-b border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-4 cursor-pointer"
          onClick={() => onNavigate('inicio')}
        >
          <motion.img 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src="imagenes/logo.jpg" 
            alt="Logo Monarca" 
            className="h-12 w-auto object-contain rounded-lg border border-neon/40 shadow-[0_0_15px_rgba(223,255,0,0.3)]" 
            onError={(e) => { (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/monarca-logo/200/200'; }}
          />
          <div className="flex flex-col leading-none">
            <span className="text-neon font-black text-2xl tracking-tighter italic">MONARCA</span>
            <span className="text-zinc-600 text-[9px] tracking-[0.3em] font-bold uppercase">Tu Cuerpo. Tu Reino.</span>
          </div>
        </motion.div>

        <div className="hidden lg:flex items-center space-x-10 text-[10px] font-black uppercase tracking-[0.2em]">
          {['fisioterapia', 'rehabilitacion', 'quiropractica', 'masajes'].map((page) => (
            <button 
              key={page}
              onClick={() => onNavigate(page)} 
              className={`${currentPage === page ? 'text-neon' : 'text-zinc-500'} hover:text-neon transition-all relative group py-2`}
            >
              {page}
              {currentPage === page && (
                <motion.div 
                  layoutId="nav-underline" 
                  className="absolute -bottom-0.5 left-0 w-full h-1 bg-neon shadow-[0_0_15px_#DFFF00]" 
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(223,255,0,0.4)" }}
            whileTap={{ scale: 0.95 }}
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neon text-black px-10 py-3 rounded-xl font-black italic tracking-widest shadow-lg"
          >
            AGENDAR
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};
