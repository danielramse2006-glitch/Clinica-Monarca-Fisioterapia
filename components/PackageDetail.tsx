
import React from 'react';
import { motion } from 'framer-motion';

interface PackageDetailProps {
  title: string;
  id: string;
  onBack: () => void;
}

const LOGO_URL = "https://i.ibb.co/fz8KcFwQ/logo1.jpg";

export const PackageDetail: React.FC<PackageDetailProps> = ({ title, id, onBack }) => {
  const waLink = `https://wa.me/528991259003?text=Hola%20Monarca%20Fisio,%20me%20interesa%20el%20paquete%20de%20${encodeURIComponent(title)}.`;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="text-zinc-500 hover:text-neon transition-colors mb-12 flex items-center space-x-2 font-bold uppercase tracking-widest text-xs"
        >
          <span>←</span> <span>Volver al inicio</span>
        </button>

        <div className="flex flex-col lg:flex-row lg:items-center space-y-8 lg:space-y-0 lg:space-x-12 mb-16">
          <img src={LOGO_URL} alt="Logo" className="w-[200px] lg:w-[350px] h-auto object-contain" />
          <h1 className="text-5xl md:text-8xl font-black italic uppercase leading-[0.85] tracking-tighter">
            {title} <br/><span className="text-neon">MONARCA</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-10"
          >
            <div className="bg-zinc-900/40 border border-zinc-800 p-10 rounded-[2.5rem]">
              <h3 className="text-neon font-black mb-6 uppercase tracking-widest text-sm">¿Qué incluye?</h3>
              <ul className="space-y-5 text-zinc-300">
                <li className="flex items-start space-x-4">
                  <span className="text-neon text-xl">✓</span>
                  <span className="text-lg">Evaluación completa inicial por especialistas certificados.</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-neon text-xl">✓</span>
                  <span className="text-lg">Uso de equipos de alta tecnología (TENS, Termoterapia).</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-neon text-xl">✓</span>
                  <span className="text-lg">Sesión personalizada de élite de 50 minutos.</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-neon text-xl">✓</span>
                  <span className="text-lg">Seguimiento digital de progreso.</span>
                </li>
              </ul>
            </div>

            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-neon text-black py-7 rounded-2xl font-black italic uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-2xl shadow-neon/20 text-xl"
            >
              AGENDAR ESTE PAQUETE
            </a>
          </motion.div>

          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="aspect-video bg-zinc-900 border border-zinc-800 rounded-[2.5rem] relative overflow-hidden group"
          >
            <img 
              src={`https://picsum.photos/seed/${id}/1080/564`} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
              alt={title} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-10 left-10">
              <p className="text-neon font-bold text-xs tracking-[0.4em] uppercase mb-2">Elite Care</p>
              <p className="text-white font-black text-3xl italic uppercase">Resultados Garantizados</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
