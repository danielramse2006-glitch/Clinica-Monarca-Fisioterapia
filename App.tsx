
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Services } from './components/Services.tsx';
import { Stats } from './components/Stats.tsx';
import { TeamEquipment } from './components/TeamEquipment.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { Packages } from './components/Packages.tsx';
import { Locations } from './components/Locations.tsx';
import { CTASection } from './components/CTASection.tsx';
import { Footer } from './components/Footer.tsx';
import { PageTemplate } from './components/PageTemplate.tsx';
import { PackageDetail } from './components/PackageDetail.tsx';
import { motion, AnimatePresence } from 'framer-motion';

export type PageType = 'inicio' | 'fisioterapia' | 'rehabilitacion' | 'quiropractica' | 'masajes' | 'paquete-quiro' | 'paquete-fisica' | 'paquete-masaje' | 'paquete-premium';

// URL del logo principal y fondo
const LOGO_URL = "https://i.ibb.co/WWFfSFv1/logo.jpg";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('inicio');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'fisioterapia':
        return <PageTemplate name="Fisioterapia" onBack={() => setCurrentPage('inicio')} />;
      case 'rehabilitacion':
        return <PageTemplate name="Rehabilitación" onBack={() => setCurrentPage('inicio')} />;
      case 'quiropractica':
        return <PageTemplate name="Quiropráctica" onBack={() => setCurrentPage('inicio')} />;
      case 'masajes':
        return <PageTemplate name="Masajes" onBack={() => setCurrentPage('inicio')} />;
      case 'paquete-quiro':
        return <PackageDetail title="Ajuste Quiropráctico" id="quiro" onBack={() => setCurrentPage('inicio')} />;
      case 'paquete-fisica':
        return <PackageDetail title="Terapia Física" id="fisica" onBack={() => setCurrentPage('inicio')} />;
      case 'paquete-masaje':
        return <PackageDetail title="Masaje Descontracturante" id="masaje" onBack={() => setCurrentPage('inicio')} />;
      case 'paquete-premium':
        return <PackageDetail title="Servicio Premium Monarca" id="premium" onBack={() => setCurrentPage('inicio')} />;
      default:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <section id="inicio">
              <Hero />
            </section>
            <section id="servicios">
              <Services />
            </section>
            <section id="conocenos">
              <Stats />
            </section>
            <TeamEquipment />
            <section id="reseñas">
              <Testimonials />
            </section>
            <section id="paquetes">
              <Packages onSelectPackage={(id) => setCurrentPage(id as PageType)} />
            </section>
            <section id="contactos">
              <Locations />
            </section>
            <CTASection />
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* 
          MARCA DE AGUA DEL FONDO - TAMAÑO SOLICITADO: 241px
          Se ajustó para que sea un detalle elegante y proporcional.
      */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <img 
          src={LOGO_URL} 
          alt="Monarca Marca de Agua" 
          style={{ 
            width: '241px', 
            height: 'auto',
            minWidth: '241px',
            maxWidth: '241px'
          }}
          className="grayscale opacity-[0.12] brightness-110 drop-shadow-[0_0_40px_rgba(223,255,0,0.05)] object-contain"
          onError={(e) => { 
            const img = e.target as HTMLImageElement;
            img.style.display = 'none';
          }}
        />
      </div>

      <Navbar onNavigate={(p) => setCurrentPage(p as PageType)} currentPage={currentPage} />
      
      <main className="pt-24 relative z-10">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};
