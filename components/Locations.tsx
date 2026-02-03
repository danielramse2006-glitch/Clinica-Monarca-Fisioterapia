
import React, { useState } from 'react';

const locations = {
  occidental: {
    name: "Sucursal Occidental",
    address: "Calle Occidental #995, Col. Rodríguez",
    map: "https://goo.gl/maps/example1"
  },
  plazanorte: {
    name: "Sucursal Plaza Norte",
    address: "Carretera a Mty #100, Col. Granjas Económicas del Norte (Detrás de Café Moots)",
    map: "https://goo.gl/maps/example2"
  }
};

export const Locations: React.FC = () => {
  const [active, setActive] = useState<keyof typeof locations>('occidental');

  return (
    <div className="py-24 bg-zinc-950 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-6xl font-black italic mb-8">UBICACIONES</h2>
            <p className="text-zinc-500 mb-10 leading-relaxed">Visítanos en cualquiera de nuestras dos sucursales estratégicamente ubicadas para tu comodidad.</p>
            
            <div className="space-y-4">
              {Object.entries(locations).map(([key, loc]) => (
                <button 
                  key={key}
                  onClick={() => setActive(key as any)}
                  className={`w-full p-6 rounded-2xl border text-left flex items-center justify-between transition-all ${active === key ? 'bg-zinc-900 border-neon text-white' : 'bg-transparent border-zinc-800 text-zinc-500 hover:border-zinc-700'}`}
                >
                  <span className="font-bold">{loc.name}</span>
                  <span className="text-xl">›</span>
                </button>
              ))}
            </div>

            <div className="mt-12">
               <p className="text-zinc-600 text-xs font-bold tracking-widest uppercase mb-4">Síguenos</p>
               <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-zinc-900 rounded-full border border-zinc-800 flex items-center justify-center hover:border-neon cursor-pointer text-neon">📸</div>
                  <div className="w-10 h-10 bg-zinc-900 rounded-full border border-zinc-800 flex items-center justify-center hover:border-neon cursor-pointer text-neon">f</div>
                  <div className="w-10 h-10 bg-zinc-900 rounded-full border border-zinc-800 flex items-center justify-center hover:border-neon cursor-pointer text-neon">💬</div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-neon p-12 rounded-[2.5rem] text-black flex flex-col justify-between shadow-[0_0_50px_rgba(223,255,0,0.1)]">
             <div>
               <span className="text-4xl mb-6 inline-block">📍</span>
               <h3 className="text-4xl font-black italic mb-6">Ubicación</h3>
               <p className="text-lg font-bold leading-relaxed mb-10">{locations[active].address}</p>
             </div>
             <a href={locations[active].map} className="flex items-center space-x-2 font-black uppercase tracking-widest text-sm hover:underline">
               <span>VER EN GOOGLE MAPS</span>
               <span>→</span>
             </a>
          </div>

          <div className="lg:col-span-4 bg-zinc-900/50 border border-zinc-800 p-12 rounded-[2.5rem] flex flex-col justify-between">
             <div>
               <span className="text-4xl mb-6 inline-block text-neon">🕒</span>
               <h3 className="text-4xl font-black italic mb-6">Horarios</h3>
               
               <div className="space-y-6">
                 <div>
                   <p className="text-neon text-[10px] font-black uppercase tracking-widest mb-1">Lunes a Viernes</p>
                   <p className="text-xl font-black">9:00 AM – 8:00 PM</p>
                 </div>
                 <div className="pt-4 border-t border-zinc-800">
                   <p className="text-neon text-[10px] font-black uppercase tracking-widest mb-1">Sábado</p>
                   <p className="text-xl font-black">9:00 AM – 4:00 PM</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
