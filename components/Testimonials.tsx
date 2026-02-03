
import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  { name: "Roberto Hernández", text: "Excelente servicio y atención personalizada. La rehabilitación post-lesión me ayudó a volver a mis actividades deportivas en tiempo récord.", tag: "DEPORTIVA" },
  { name: "María González", text: "El ajuste quiropráctico cambió mi vida. Tenía dolores crónicos de espalda que desaparecieron tras un par de sesiones. ¡Recomendadísimo!", tag: "BIENESTAR" },
  { name: "Carlos Slim", text: "Atención de primer nivel. El equipo y las instalaciones son lo mejor que he visto en México. El sillón recovery es una maravilla.", tag: "PREMIUM" },
  { name: "Ana Paula Luna", text: "Mi recuperación de rodilla fue mucho más rápida de lo esperado. Los fisios son profesionales y muy dedicados.", tag: "FISIOTERAPIA" },
];

export const Testimonials: React.FC = () => {
  return (
    <div className="py-24 bg-zinc-950 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-6xl font-black italic mb-4 uppercase text-center">LO QUE DICEN NUESTROS PACIENTES</h2>
        <div className="w-24 h-1 bg-neon mx-auto"></div>
      </div>

      <div className="relative flex overflow-x-hidden">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {/* Duplicamos los testimoniales para el loop infinito */}
          {[...reviews, ...reviews].map((r, i) => (
            <div key={i} className="inline-block w-[350px] md:w-[450px] mx-4 whitespace-normal">
              <div className="bg-zinc-900 border border-zinc-800 p-10 rounded-[2rem] h-full flex flex-col justify-between hover:border-neon transition-colors">
                <div className="mb-8">
                  <div className="flex text-neon mb-4">{"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}</div>
                  <p className="text-zinc-300 italic text-lg leading-relaxed">"{r.text}"</p>
                </div>
                <div className="flex items-center justify-between border-t border-zinc-800 pt-6">
                  <div>
                    <h4 className="font-black text-white uppercase">{r.name}</h4>
                    <span className="text-neon text-[10px] font-bold tracking-widest">{r.tag}</span>
                  </div>
                  <span className="text-3xl opacity-20">“</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
