
import React from 'react';

interface PageTemplateProps {
  name: string;
  onBack: () => void;
}

const LOGO_URL = "https://i.ibb.co/fz8KcFwQ/logo1.jpg";

export const PageTemplate: React.FC<PageTemplateProps> = ({ name, onBack }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-zinc-950 py-20">
      <img src={LOGO_URL} alt="Logo" className="w-48 h-auto mb-10 opacity-60 grayscale rounded-xl" />
      <h1 className="text-4xl md:text-7xl font-black italic text-neon mb-4 tracking-tighter">
        PÁGINA DE {name.toUpperCase()}
      </h1>
      <p className="text-zinc-500 max-w-md text-center mb-12 uppercase tracking-[0.3em] text-xs font-bold">
        Próximamente más información sobre este servicio.
      </p>
      <button 
        onClick={onBack}
        className="bg-white text-black px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-neon transition-colors"
      >
        ← Volver al Inicio
      </button>
    </div>
  );
};
