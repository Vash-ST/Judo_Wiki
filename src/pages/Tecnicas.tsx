import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Tecnicas() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white">
      {/* Background Image (Floral Pattern) */}
      <div className="h-24 md:h-32" />

      <div className="fixed inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1596700021651-7f8d689622ed?auto=format&fit=crop&q=80&w=2000" 
          alt="Camellia Background"
          className="w-full h-full object-cover opacity-60 scale-110"
        />
        <div className="absolute inset-0 bg-white/20" />
      </div>



      <div className="relative z-10 pt-24 md:pt-32 pb-24 px-6 md:px-12">
        {/* Main Title Banner */}
        <div className="flex flex-col items-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row items-center gap-4 md:gap-12"
          >
            <h1 className="text-3xl md:text-7xl font-serif font-black tracking-[0.3em] md:tracking-[0.5em] text-brand-dark uppercase">TÉCNICAS</h1>
            <div className="hidden md:block w-px h-16 bg-black/10" />
            <span className="text-xl md:text-5xl font-japanese tracking-[0.3em] text-brand-dark opacity-30 italic">テクニック</span>
          </motion.div>
        </div>

        {/* Two Main Blocks Section */}
        <div className="container mx-auto max-w-7xl px-4 xl:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16">
            
            {/* Block 1: Nage-waza */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col group gap-6"
            >
              <Link to="/nage-waza" className="block aspect-[16/10] w-full bg-brand-navy overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <img 
                  src="/assets/logo_uc.png.jpg" 
                  alt="Nage-waza style"
                  className="w-full h-full object-cover bg-[#eb1212] opacity-60 group-hover:opacity-80 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                />
              </Link>

              <div>
                <span className="text-[9px] font-japanese font-bold text-brand-red tracking-[0.3em] uppercase mb-1 block">Técnicas de Proyección</span>
                <h2 className="text-2xl md:text-4xl font-serif font-black tracking-tighter text-brand-dark uppercase">Nage-waza</h2>
                <p className="text-brand-dark/70 font-traditional text-md mt-2 md:text-lg leading-snug max-w-sm">
                  El arte de proyectar al oponente mediante el desequilibrio.
                </p>
                <Link to="/nage-waza" className="mt-4 text-[10px] font-japanese font-bold text-brand-red tracking-[0.2em] uppercase hover:text-brand-dark transition-colors flex items-center gap-2">
                  Explorar <div className="w-6 h-px bg-brand-red/30" />
                </Link>
              </div>
            </motion.div>

            {/* Block 2: Katame-waza */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col group gap-6"
            >
              <Link to="/katame-waza" className="block aspect-[16/10] w-full bg-brand-dark overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <img 
                  src="/assets/logo_uc.png.jpg" 
                  alt="Katame-waza style"
                  className="w-full h-full object-cover bg-[#eb1212] opacity-60 group-hover:opacity-80 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                />
              </Link>

              <div>
                <span className="text-[9px] font-japanese font-bold text-brand-accent-blue tracking-[0.3em] uppercase mb-1 block">Técnicas de Control</span>
                <h2 className="text-2xl md:text-4xl font-serif font-black tracking-tighter text-brand-dark uppercase">Katame-waza</h2>
                <p className="text-brand-dark/70 font-traditional text-md mt-2 md:text-lg leading-snug max-w-sm">
                  Dominio en el suelo: inmovilizaciones, estrangulaciones, luxaciones.
                </p>
                <Link to="/katame-waza" className="mt-4 text-[10px] font-japanese font-bold text-brand-accent-blue tracking-[0.2em] uppercase hover:text-brand-dark transition-colors flex items-center gap-2">
                  Explorar <div className="w-6 h-px bg-brand-accent-blue/30" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Aesthetic Accents */}
      <div className="fixed bottom-10 left-10 z-0 opacity-10 hidden xl:block">
        <span className="text-8xl font-serif font-black text-brand-dark uppercase tracking-tighter select-none">Uke Dojo</span>
      </div>
    </div>
  );
}

