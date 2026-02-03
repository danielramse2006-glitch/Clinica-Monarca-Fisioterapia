
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { icon: "💪", title: "FISIOTERAPIA AVANZADA", desc: "Tratamientos personalizados de rehabilitación con equipo de última generación." },
  { icon: "⚡", title: "REHABILITACIÓN POST-LESIÓN", desc: "Recuperación completa con seguimiento especializado y terapias manuales." },
  { icon: "🦴", title: "AJUSTE QUIROPRÁCTICO", desc: "Alineación vertebral profesional para alivio del dolor y mejor postura." },
  { icon: "💆", title: "MASAJE DESCONTRACTURANTE", desc: "Liberación de tensión muscular profunda con técnicas especializadas." },
  { icon: "🔌", title: "ELECTROESTIMULACIÓN TENS", desc: "Tecnología TENS para recuperación muscular y alivio del dolor." },
  { icon: "👑", title: "SERVICIO PREMIUM", desc: "Experiencia completa: ajuste + sillón Recovery + suspensión vertical.", highlight: true }
];

export const Services: React.FC = () => {
  return (
    <div className="py-24 bg-black px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-4"
        >
          <h2 className="text-6xl font-black mb-8 italic uppercase tracking-tighter">SERVICIOS</h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-10">
            Contamos con los tratamientos más avanzados. Nuestro equipo de especialistas está comprometido con tu rendimiento supremo.
          </p>
          <div className="space-y-4">
             <div className="glass-card p-5 rounded-2xl flex items-center space-x-4 border-l-4 border-l-neon">
               <span className="text-2xl">🏆</span>
               <span className="text-sm font-black text-white uppercase tracking-widest">Tecnología de Élite</span>
             </div>
             <div className="glass-card p-5 rounded-2xl flex items-center space-x-4 border-l-4 border-l-neon">
               <span className="text-2xl">👨‍⚕️</span>
               <span className="text-sm font-black text-white uppercase tracking-widest">Especialistas Certificados</span>
             </div>
          </div>
        </motion.div>

        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`p-8 rounded-3xl transition-all duration-500 group relative overflow-hidden ${s.highlight ? 'bg-neon/5 border border-neon/50 shadow-[0_0_30px_rgba(223,255,0,0.1)]' : 'bg-zinc-900/40 border border-zinc-800/50 hover:border-neon/30'}`}
            >
              <div className="text-5xl mb-6 group-hover:rotate-12 transition-transform duration-500 inline-block">{s.icon}</div>
              <h3 className="text-2xl font-black mb-4 tracking-tight uppercase italic">{s.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-medium">{s.desc}</p>
              {s.highlight && (
                <div className="mt-6 inline-block bg-neon text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                  Más Popular
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
