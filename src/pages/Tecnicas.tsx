import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Play, Info } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';

export default function Tecnicas() {
  const [activeMobileMenu, setActiveMobileMenu] = useState<'nage' | 'katame' | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleCardClick = (type: 'nage' | 'katame', e: React.MouseEvent) => {
    // If mobile, prevent navigation and scroll to menu
    if (window.innerWidth < 768) {
      e.preventDefault();
      setActiveMobileMenu(type);
      setTimeout(() => {
        mobileMenuRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const menuData = {
    nage: {
      title: 'Técnicas de Proyección (Nage-Waza)',
      desc: 'El arte de proyectar al oponente mediante el desequilibrio.',
      link: '/nage-waza',
      categories: [
        { name: 'Te-waza', desc: 'Técnicas de brazo/mano' },
        { name: 'Koshi-waza', desc: 'Técnicas de cadera' },
        { name: 'Ashi-waza', desc: 'Técnicas de pie/pierna' },
        { name: 'Sutemi-waza', desc: 'Técnicas de sacrificio' }
      ]
    },
    katame: {
      title: 'Técnicas de Control (Katame-Waza)',
      desc: 'Dominio en el suelo: inmovilizaciones, estrangulaciones, luxaciones.',
      link: '/katame-waza',
      categories: [
        { name: 'Osaekomi-waza', desc: 'Inmovilizaciones' },
        { name: 'Shime-waza', desc: 'Estrangulaciones' },
        { name: 'Kansetsu-waza', desc: 'Luxaciones' }
      ]
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white pb-20">
      {/* Background Image (Floral Pattern) */}
      <div className="h-24 md:h-32" />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <img 
          src="/assets/fondo_tecnicas.jpg" 
          alt="Camellia Background"
          className="w-full h-full object-cover opacity-60 scale-110"
        />
        <div className="absolute inset-0 bg-white/20" />
      </div>

      <div className="relative z-10 pt-12 md:pt-32 pb-12 px-6 md:px-12">
        {/* Main Title Banner */}
        <div className="flex flex-col items-center mb-10 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row items-center gap-2 md:gap-12 text-center"
          >
            <h1 className="text-4xl md:text-7xl font-serif font-black tracking-[0.2em] md:tracking-[0.5em] text-brand-dark uppercase">TÉCNICAS</h1>
            <div className="hidden md:block w-px h-16 bg-black/10" />
            <span className="text-xl md:text-5xl font-japanese tracking-[0.3em] text-brand-dark opacity-30 italic">テクニック</span>
          </motion.div>
        </div>

        {/* Two Main Blocks Section */}
        <div className="container mx-auto max-w-7xl px-4 xl:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 lg:gap-16">
            
            {/* Block 1: Nage-waza */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col group gap-4 md:gap-6"
            >
              <Link 
                to="/nage-waza" 
                onClick={(e) => handleCardClick('nage', e)}
                className={`relative flex md:block flex-col md:flex-row items-center md:items-stretch aspect-auto md:aspect-[16/10] w-full bg-white md:bg-brand-navy border md:border-none border-gray-200 overflow-hidden shadow-sm md:shadow-lg hover:shadow-md md:group-hover:shadow-2xl transition-all duration-300 md:duration-500 rounded-[2rem] md:rounded-none md:hover:scale-[1.02] p-5 md:p-0 ${activeMobileMenu === 'nage' ? 'ring-2 md:ring-4 ring-brand-red md:ring-offset-4 bg-brand-red/5' : ''}`}
              >
                {/* Mobile Icon & Title Area */}
                <div className="md:hidden flex flex-col items-center justify-center w-full py-4">
                  <div className="w-16 h-16 rounded-full bg-brand-red/10 flex items-center justify-center mb-4">
                    <img src="/assets/logo_uc.jpg" alt="Icon" className="w-8 h-8 object-cover rounded-full mix-blend-multiply opacity-50 grayscale" />
                  </div>
                  <h3 className="font-serif font-black text-2xl text-brand-dark uppercase tracking-wide">Nage-Waza</h3>
                  <p className="text-[10px] font-japanese tracking-widest text-brand-red uppercase font-bold mt-1 text-center">Técnicas de Proyección</p>
                  
                  {/* Subtle indication to click */}
                  <div className="mt-5 px-4 py-2 bg-[#f4f4f4] text-brand-dark rounded-full text-[10px] uppercase tracking-widest flex items-center gap-2 border border-gray-200 font-bold">
                    Toca para expandir menu <Info className="w-3 h-3" />
                  </div>
                </div>

                {/* Desktop Background Image (Hidden on Mobile) */}
                <img 
                  src="/assets/logo_uc.jpg" 
                  alt="Nage-waza style"
                  className="hidden md:block absolute inset-0 w-full h-full object-cover bg-[#eb1212] opacity-60 md:group-hover:opacity-80 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                />
              </Link>

              {/* Desktop Text Details */}
              <div className="hidden md:block">
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
              className="flex flex-col group gap-4 md:gap-6"
            >
              <Link 
                to="/katame-waza" 
                onClick={(e) => handleCardClick('katame', e)}
                className={`relative flex md:block flex-col md:flex-row items-center md:items-stretch aspect-auto md:aspect-[16/10] w-full bg-white md:bg-brand-dark border md:border-none border-gray-200 overflow-hidden shadow-sm md:shadow-lg hover:shadow-md md:group-hover:shadow-2xl transition-all duration-300 md:duration-500 rounded-[2rem] md:rounded-none md:hover:scale-[1.02] p-5 md:p-0 ${activeMobileMenu === 'katame' ? 'ring-2 md:ring-4 ring-brand-accent-blue md:ring-offset-4 bg-brand-accent-blue/5' : ''}`}
              >
                {/* Mobile Icon & Title Area */}
                <div className="md:hidden flex flex-col items-center justify-center w-full py-4">
                  <div className="w-16 h-16 rounded-full bg-brand-accent-blue/10 flex items-center justify-center mb-4">
                    <img src="/assets/logo_uc.jpg" alt="Icon" className="w-8 h-8 object-cover rounded-full mix-blend-multiply opacity-50 grayscale" />
                  </div>
                  <h3 className="font-serif font-black text-2xl text-brand-dark uppercase tracking-wide">Katame-Waza</h3>
                  <p className="text-[10px] font-japanese tracking-widest text-brand-accent-blue uppercase font-bold mt-1 text-center">Técnicas de Control (Suelo)</p>
                  
                  {/* Subtle indication to click */}
                  <div className="mt-5 px-4 py-2 bg-[#f4f4f4] text-brand-dark rounded-full text-[10px] uppercase tracking-widest flex items-center gap-2 border border-gray-200 font-bold">
                    Toca para expandir menu <Info className="w-3 h-3" />
                  </div>
                </div>

                {/* Desktop Background Image (Hidden on Mobile) */}
                <img 
                  src="/assets/logo_uc.jpg" 
                  alt="Katame-waza style"
                  className="hidden md:block absolute inset-0 w-full h-full object-cover bg-[#eb1212] opacity-60 md:group-hover:opacity-80 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                />
              </Link>

              {/* Desktop Text Details */}
              <div className="hidden md:block">
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

        {/* Mobile Didactic Menu section (appended below) */}
        <AnimatePresence mode="wait">
          {activeMobileMenu && (
             <motion.div
               ref={mobileMenuRef}
               key={activeMobileMenu}
               initial={{ opacity: 0, height: 0, y: 20 }}
               animate={{ opacity: 1, height: 'auto', y: 0 }}
               exit={{ opacity: 0, height: 0 }}
               className="md:hidden mt-8 w-full"
             >
                <div className={`rounded-3xl p-6 ${activeMobileMenu === 'nage' ? 'bg-brand-red/5 border border-brand-red/10' : 'bg-brand-accent-blue/5 border border-brand-accent-blue/10'}`}>
                   <div className="flex items-center gap-3 mb-4">
                     <div className={`p-2 rounded-full text-white ${activeMobileMenu === 'nage' ? 'bg-brand-red' : 'bg-brand-accent-blue'}`}>
                        <Info className="w-5 h-5" />
                     </div>
                     <h3 className="text-xl font-serif font-black text-brand-dark tracking-tight">{menuData[activeMobileMenu].title}</h3>
                   </div>
                   
                   <p className="text-sm text-brand-dark/70 mb-6 leading-relaxed">
                     {menuData[activeMobileMenu].desc}
                   </p>

                   <div className="flex flex-col gap-3 mb-8">
                     {menuData[activeMobileMenu].categories.map((cat, i) => (
                       <div key={i} className="flex flex-col bg-white p-4 rounded-2xl shadow-sm border border-black/5">
                         <span className="font-bold text-brand-dark text-md">{cat.name}</span>
                         <span className="text-xs text-brand-dark/50 mt-1">{cat.desc}</span>
                       </div>
                     ))}
                   </div>

                   <button 
                     onClick={() => navigate(menuData[activeMobileMenu].link)}
                     className={`w-full py-4 rounded-full flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-widest text-white shadow-xl transition-transform active:scale-95 ${activeMobileMenu === 'nage' ? 'bg-brand-red shadow-brand-red/20' : 'bg-brand-accent-blue shadow-brand-accent-blue/20'}`}
                   >
                     Entrar a {activeMobileMenu === 'nage' ? 'Nage-Waza' : 'Katame-Waza'} <Play className="w-4 h-4 fill-current" />
                   </button>
                </div>
             </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Aesthetic Accents */}
      <div className="fixed bottom-10 left-10 z-0 opacity-10 hidden xl:block pointer-events-none">
        <span className="text-8xl font-serif font-black text-brand-dark uppercase tracking-tighter select-none">Uke Dojo</span>
      </div>
    </div>
  );
}
