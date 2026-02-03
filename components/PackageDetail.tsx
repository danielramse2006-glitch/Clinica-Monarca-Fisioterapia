
import React from 'react';
import { motion } from 'framer-motion';

interface PackageDetailProps {
  title: string;
  id: string;
  onBack: () => void;
}

export const PackageDetail: React.FC<PackageDetailProps> = ({ title, id, onBack }) => {
  const waLink = `https://wa.me/528991259003?text=Hola%20Monarca%20Fisio,%20me%20interesa%20el%20paquete%20de%20${encodeURIComponent(title)}.`;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="text-zinc-500 hover:text-neon transition-colors mb-12 flex items-center space-x-2 font-bold uppercase tracking-widest text-xs"
        >
          <span>←</span> <span>Volver al inicio</span>
        </button>

        <div className="flex items-center space-x-6 mb-12">
          <img src="imagenes/logo.jpg" alt="Logo" className="w-20 h-20 rounded-full border border-neon" />
          <h1 className="text-5xl md:text-8xl font-black italic uppercase leading-none tracking-tighter">
            {title} <br/><span className="text-neon">MONARCA</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl">
              <h3 className="text-neon font-black mb-4 uppercase tracking-widest text-sm">¿Qué incluye?</h3>
              <ul className="space-y-4 text-zinc-300">
                <li className="flex items-start space-x-3">
                  <span className="text-neon mt-1">✓</span>
                  <span>Evaluación completa inicial por especialistas certificados.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-neon mt-1">✓</span>
                  <span>Uso de equipos de alta tecnología (TENS, Termoterapia).</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-neon mt-1">✓</span>
                  <span>Sesión personalizada de 50 minutos.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-neon mt-1">✓</span>
                  <span>Seguimiento digital de progreso.</span>
                </li>
              </ul>
            </div>

            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-neon text-black py-5 rounded-2xl font-black italic uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-lg shadow-neon/10"
            >
              AGENDAR ESTE PAQUETE
            </a>
          </motion.div>

          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="aspect-square bg-zinc-900 border border-zinc-800 rounded-3xl relative overflow-hidden group"
          >
            <img 
              src={`https://picsum.photos/seed/${id}/800/800`} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              alt={title} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            <div className="absolute bottom-6 left-6">
              <p className="text-neon font-bold text-xs tracking-[0.3em] uppercase mb-1">Elite Care</p>
              <p className="text-white font-black text-xl italic uppercase">Resultados Garantizados</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
