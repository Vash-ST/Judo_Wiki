import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Content {
  title: string;
  desc: string;
  image: string;
  nationality: string;
  judoRank: string;
  briefDesc: string;
}

const sections: Content[] = [
  {
    title: "Luis Parra G.",
    desc: "Descripción del primer movimiento que explica la técnica.",
    image: "/assets/equipo/sensei.png",
    nationality: "Chileno",
    judoRank: "6to Dan",
    briefDesc: "Sensei con más de 20 años de experiencia, formador de campeones nacionales y referente en la técnica de judo tradicional."
  },
  {
    title: "Sección de Movimiento 2",
    desc: "Descripción detallada del segundo paso en la mecánica.",
    image: "/assets/equipo/sensei.png",
    nationality: "Chileno",
    judoRank: "5to Dan",
    briefDesc: "Especialista en técnicas de suelo y transición, con enfoque en la enseñanza para jóvenes promesas."
  },
  {
    title: "Sección de Movimiento 3",
    desc: "Descripción final para cerrar el ciclo de movimiento.",
    image: "/assets/equipo/sensei.png",
    nationality: "Chileno",
    judoRank: "4to Dan",
    briefDesc: "Entrenador enfocado en la preparación física y táctica para competiciones internacionales de alto nivel."
  }
];

export default function InteractiveModal({ onClose }: { onClose: () => void }) {
  const [active, setActive] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-brand-navy flex items-center justify-center p-0"
    >
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 z-[201] text-white font-sans font-bold text-sm tracking-[0.2em] uppercase hover:text-brand-red transition-colors"
      >
        Cerrar
      </button>

      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Left Half: Image with Background */}
        <div 
          className="w-full md:w-1/2 flex items-center justify-center relative p-0 h-1/2 md:h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/fondos/fondo_01.jpg')" }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={active}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              src={sections[active].image}
              alt="section-image"
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        {/* Vertical/Horizontal Line with Circles */}
        <div className="w-full md:w-px h-px md:h-full bg-white/20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row md:flex-col gap-6">
            {sections.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                  active === i 
                    ? 'bg-brand-red border-brand-red scale-150' 
                    : i < active 
                      ? 'bg-white/60 border-white/60' 
                      : 'bg-transparent border-white/40 hover:border-white'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Half: Content (Brand Navy) */}
        <div className="w-full md:w-1/2 bg-brand-navy flex flex-col justify-center p-8 md:p-16 text-white h-1/2 md:h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-auto mb-auto"
            >
              <div className="text-4xl font-black leading-none opacity-50 mb-2 tracking-[0.2em] font-sans">SENSEI</div>
              <h2 className="text-6xl font-black font-sans uppercase mb-8 text-brand-red">{sections[active].title}</h2>
              
              <div className="flex gap-8 mb-8">
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-widest">Nacionalidad</p>
                  <p className="font-sans font-bold text-lg">{sections[active].nationality}</p>
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-widest">Rango Judo</p>
                  <p className="font-sans font-bold text-lg">{sections[active].judoRank}</p>
                </div>
              </div>
              
              <div className="border-l-2 border-brand-red pl-6 py-2">
                <p className="text-lg text-white/90 leading-relaxed italic">{sections[active].briefDesc}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
