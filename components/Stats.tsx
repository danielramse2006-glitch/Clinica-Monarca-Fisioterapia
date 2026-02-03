
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { val: "+5,000", label: "PACIENTES ATENDIDOS" },
  { val: "98%", label: "SATISFACCIÓN" },
  { val: "10+", label: "AÑOS DE EXPERIENCIA" },
  { val: "2", label: "SUCURSALES" },
];

export const Stats: React.FC = () => {
  return (
    <div className="py-32 bg-zinc-950 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-7xl md:text-8xl font-black italic mb-6 uppercase tracking-tighter"
          >
            CONÓCENOS
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-500 max-w-2xl mx-auto text-lg font-medium uppercase tracking-widest"
          >
            Liderando la fisioterapia en la región con resultados comprobados.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {stats.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-900/50 border border-zinc-800 p-12 rounded-[2.5rem] text-center group hover:border-neon transition-all duration-500"
            >
              <div className="text-6xl font-black text-neon mb-3 group-hover:drop-shadow-[0_0_15px_rgba(223,255,0,0.5)] transition-all">{s.val}</div>
              <div className="text-zinc-500 text-xs font-black tracking-[0.2em]">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-zinc-900 border border-zinc-800 p-12 rounded-[3rem] hover:bg-zinc-900/80 transition-colors">
               <h3 className="text-3xl font-black italic flex items-center mb-6 uppercase">
                 <span className="text-neon mr-4">🎗️</span> Misión Monarca
               </h3>
               <p className="text-zinc-400 leading-relaxed italic text-lg">
                 Brindar atención de élite, utilizando técnicas innovadoras y un enfoque personalizado. Nuestro objetivo es que recuperes tu trono físico.
               </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-12 rounded-[3rem] hover:bg-zinc-900/80 transition-colors">
               <h3 className="text-3xl font-black italic flex items-center mb-6 uppercase">
                 <span className="text-neon mr-4">👥</span> Equipo Pro
               </h3>
               <p className="text-zinc-400 leading-relaxed italic text-lg">
                 Fisioterapeutas y quiroprácticos certificados con pasión por la excelencia y la salud de nuestros pacientes.
               </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group cursor-none"
          >
            <img 
              src="imagenes/instalaciones.jpg" 
              alt="Instalaciones" 
              className="rounded-[3rem] grayscale group-hover:grayscale-0 transition-all duration-1000 border border-zinc-800 w-full object-cover aspect-video"
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'; }}
            />
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="absolute -bottom-6 -right-6 bg-neon text-black p-8 rounded-[2rem] font-black shadow-2xl"
            >
               <p className="text-[10px] tracking-widest uppercase mb-1 opacity-70">Sede Central</p>
               <p className="text-xl italic uppercase">TECNOLOGÍA PUNTA</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
