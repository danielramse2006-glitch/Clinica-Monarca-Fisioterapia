
import React from 'react';

const items = [
  { title: "Sillón Recovery", desc: "Masaje inteligente de última generación", img: "imagenes/sillon.jpg" },
  { title: "Electroestimulador TENS", desc: "Tecnología alemana de precisión", img: "imagenes/electro.jpg" },
  { title: "Mesa Quiropráctica", desc: "Ajustes seguros y precisos", img: "imagenes/mesa.jpg" },
  { title: "Suspensión Vertical", desc: "Descompresión espinal efectiva", img: "imagenes/suspension.jpg" },
];

export const TeamEquipment: React.FC = () => {
  return (
    <div className="py-24 bg-black px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-5xl font-black italic">NUESTRO EQUIPO</h2>
            <p className="text-zinc-500 mt-2">Tecnología de punta para tu recuperación</p>
          </div>
          <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
            <span className="text-2xl">📸</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 aspect-[4/5]">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/monarca/400/500'; // Imagen de respaldo si no existe el archivo
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                <p className="text-zinc-400 text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
