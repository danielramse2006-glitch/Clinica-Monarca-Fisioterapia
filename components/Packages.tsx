
import React from 'react';
import { motion } from 'framer-motion';

const packs = [
  { id: "paquete-quiro", icon: "🦴", title: "Ajuste Quiropráctico Completo", price: "$400" },
  { id: "paquete-fisica", icon: "🧘", title: "Terapia Física Especializada", price: "$400" },
  { id: "paquete-masaje", icon: "💆", title: "Masaje Descontracturante", price: "$600" },
  { id: "paquete-premium", icon: "👑", title: "Servicio Premium Monarca", price: "$800", rec: true },
];

interface PackagesProps {
  onSelectPackage: (id: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  return (
    <div className="py-24 bg-black px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl font-black italic mb-4 uppercase"
          >
            NUESTROS PAQUETES
          </motion.h2>
          <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Selecciona un servicio para ver detalles exclusivos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packs.map((p, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => onSelectPackage(p.id)}
              className={`p-10 rounded-[2.5rem] border transition-all duration-300 flex items-center justify-between group cursor-pointer relative overflow-hidden ${p.rec ? 'bg-zinc-900/60 border-neon/50 shadow-[0_0_40px_rgba(223,255,0,0.1)]' : 'bg-zinc-900/20 border-zinc-800 hover:border-neon/30'}`}
            >
              {p.rec && (
                <div className="absolute top-0 right-0 bg-neon text-black text-[10px] font-black px-6 py-2 rounded-bl-3xl uppercase tracking-tighter">
                  Recomendado
                </div>
              )}
              
              <div className="flex items-center space-x-8">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-500">{p.icon}</span>
                <div>
                  <h3 className="text-3xl font-black italic leading-tight uppercase max-w-[250px]">{p.title}</h3>
                </div>
              </div>
              <div className="text-right">
                <div className="text-5xl font-black text-neon group-hover:scale-110 transition-transform">{p.price}</div>
                <div className="text-zinc-600 text-[10px] font-bold mt-1">MXN</div>
                <motion.div 
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mt-4 text-neon"
                >→</motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
