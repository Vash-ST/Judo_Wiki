import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Menu as MenuIcon, X, Play, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import VideoPlayer from '../components/VideoPlayer';

export default function KatameWaza() {
  const [activeSubCategory, setActiveSubCategory] = useState<string>('OSAEKOMI-WAZA');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const subCategoryInfo: Record<string, { label: string; jp: string; range: number }> = {
    'OSAEKOMI-WAZA': { label: 'Inmovilización', jp: '押込', range: 10 },
    'SHIME-WAZA': { label: 'Estrangulación', jp: '絞', range: 12 },
    'KANSETSU-WAZA': { label: 'Luxación', jp: '関節', range: 10 },
  };

  const osaekomiWazaNames = [
    "Kesa-gatame (Inmovilización en bandolera o bufanda)",
    "Kuzure-kesa-gatame (Variante de inmovilización en bandolera)",
    "Ushiro-kesa-gatame (Inmovilización en bandolera invertida)",
    "Kata-gatame (Inmovilización por el hombro)",
    "Kami-shiho-gatame (Inmovilización de cuatro puntos por encima)",
    "Kuzure-kami-shiho-gatame (Variante de inmovilización de cuatro puntos por encima)",
    "Yoko-shiho-gatame (Inmovilización de cuatro puntos lateral)",
    "Tate-shiho-gatame (Inmovilización de cuatro puntos longitudinal)",
    "Ura-gatame (Inmovilización por la espalda)",
    "Uki-gatame (Inmovilización flotante)"
  ];

  const osaekomiWazaVideoIds = [
    "NDaQuJOFBYk", // 1
    "Q2fb9jaoUFQ", // 2
    "SBapox2M2dE", // 3
    "zQR3IOXxO_Q", // 4
    "HFuMjOv0WN8", // 5
    "YUrogQWdwiY", // 6
    "TT7XJVSEQxA", // 7
    "55-rFmBx53g", // 8
    "eeAHZB0v3XY", // 9
    "e_lAjik1SUM"  // 10
  ];

  const shimeWazaNames = [
    "Nami-juji-jime (Estrangulación cruzada normal; un tipo de Juji-jime)",
    "Gyaku-juji-jime (Estrangulación cruzada inversa)",
    "Kata-juji-jime (Estrangulación cruzada media)",
    "Hadaka-jime (Estrangulación desnuda)",
    "Okuri-eri-jime (Estrangulación de solapas en deslizamiento)",
    "Kata-ha-jime (Estrangulación de un ala)",
    "Do-jime (Estrangulación del cuerpo — técnica prohibida en competición)",
    "Sode-guruma-jime (Estrangulación de rueda de manga)",
    "Katate-jime (Estrangulación con una mano)",
    "Ryote-jime (Estrangulación con dos manos)",
    "Tsukkomi-jime (Estrangulación por empuje)",
    "Sankaku-jime (Estrangulación triangular)"
  ];

  const shimeWazaVideoIds = [
    "k2cHry9HByQ", // 1
    "t3tQriIPdlI", // 2
    "3VZVUAmiMD8", // 3
    "9f0n8jez7iA", // 4
    "EiqyoVcIAi8", // 5
    "yaTGgRjnwB8", // 6
    "D_0fFcoIbvY", // 7
    "E3nvQzClcAU", // 8
    "cHeIs-fSqwE", // 9
    "-RHC4V7TQiY", // 10
    "dKKpnD3eLcY", // 11
    "lq1CUBRAm7s"  // 12
  ];

  const kansetsuWazaNames = [
    "Ude-hishigi-juji-gatame (Luxación cruzada de brazo)",
    "Ude-garami (Entrelazado de brazos)",
    "Ude-hishigi-ude-gatame (Luxación de brazo con el brazo)",
    "Ude-hishigi-hiza-gatame (Luxación de brazo con la rodilla)",
    "Ude-hishigi-waki-gatame (Luxación de brazo con la axila)",
    "Ude-hishigi-hara-gatame (Luxación de brazo con el vientre)",
    "Ashi-garami (Entrelazado de piernas — técnica prohibida en competición)",
    "Ude-hishigi-ashi-gatame (Luxación de brazo con la pierna)",
    "Ude-hishigi-te-gatame (Luxación de brazo con la mano)",
    "Ude-hishigi-sankaku-gatame (Luxación de brazo en triángulo)"
  ];

  const kansetsuWazaVideoIds = [
    "OWgSOlCuMXw", // 1
    "AIlTvZb4RlE", // 2
    "SBf0aTma1VI", // 3
    "H2HtAJdiJcE", // 4
    "8F5p1zuJRG0", // 5
    "ZzEycg8R_9M", // 6
    "BWWb0GoAtZw", // 7
    "ClY7g_pX-4s", // 8
    "6DnvhY0tQVM", // 9
    "WefAmW4azhk"  // 10
  ];

  const subCategories = [
    { name: 'OSAEKOMI-WAZA', range: '1-10' },
    { name: 'SHIME-WAZA', range: '1-12' },
    { name: 'KANSETSU-WAZA', range: '1-10' },
  ];

  const [selectedTech, setSelectedTech] = useState<any | null>(null);

  const currentInfo = subCategoryInfo[activeSubCategory];
  const techniques = Array.from({ length: currentInfo.range }, (_, i) => {
    let rawName = `Técnica ${i + 1} (Japonés)`;
    let videoId = "zIq0xI0ogxk"; // Default
    if (activeSubCategory === 'OSAEKOMI-WAZA') {
      rawName = osaekomiWazaNames[i] || rawName;
      videoId = osaekomiWazaVideoIds[i] || videoId;
    } else if (activeSubCategory === 'SHIME-WAZA') {
      rawName = shimeWazaNames[i] || rawName;
      videoId = shimeWazaVideoIds[i] || videoId;
    } else if (activeSubCategory === 'KANSETSU-WAZA') {
      rawName = kansetsuWazaNames[i] || rawName;
      videoId = kansetsuWazaVideoIds[i] || videoId;
    }

    const match = rawName.match(/(.*?)\((.*?)\)/);
    const name = match ? match[1].trim() : rawName;
    const translation = match ? match[2].trim() : "";

    return {
      id: i + 1,
      name,
      translation,
      range: `${i * 8 + 1}-${(i + 1) * 8}`,
      img: (activeSubCategory === 'OSAEKOMI-WAZA') ? '/assets/tarjeta_6.jpg' : (activeSubCategory === 'SHIME-WAZA') ? '/assets/tarjeta_7.jpg' : (activeSubCategory === 'KANSETSU-WAZA') ? '/assets/tarjeta_8.jpg' : '/assets/tarjeta.png',
      jp: `${currentInfo.jp}${i + 1}`,
      videoUrl: `https://www.youtube.com/embed/${videoId}`
    };
  });

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollLeft = 0;
    el.scrollTop = 0;
    setScrollProgress(0);

    const onScroll = () => {
      const isDesktop = window.innerWidth >= 768;
      if (isDesktop) {
        const maxScroll = el.scrollHeight - el.clientHeight;
        if (maxScroll <= 0) {
          setScrollProgress(1);
          return;
        }
        setScrollProgress(el.scrollTop / maxScroll);
      } else {
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (maxScroll <= 0) {
          setScrollProgress(1);
          return;
        }
        setScrollProgress(el.scrollLeft / maxScroll);
      }
    };

    const onWheel = (e: WheelEvent) => {
      if (window.innerWidth < 768 && e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 1.5;
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('scroll', onScroll);
    return () => {
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('scroll', onScroll);
    };
  }, [activeSubCategory]);

  return (
    <div className="relative h-screen w-full bg-[#f8f8f8] overflow-hidden text-brand-dark font-sans flex flex-col">
      {/* Background Camellia Pattern (Subtle) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.02]">
        <img 
          src="/assets/rei_saludos.jpg" 
          alt="Camellia pattern"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* Space for global Navbar */}
      <div className="h-16 md:h-24" />
      <Link to="/tecnicas" className="fixed top-28 left-6 z-50 p-2 text-black hover:text-brand-red transition-colors">
         <ArrowLeft className="w-6 h-6" />
      </Link>

      {/* Mobile Navigation Block (Visible only on mobile) */}
      <div className="md:hidden pt-4 pb-8 px-6 flex flex-col items-center z-40 bg-[#f8f8f8]">
        <div className="w-full max-w-sm bg-white rounded-[2.5rem] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex flex-col gap-6">
          <div className="flex gap-2 w-full">
            {['OSAEKOMI-WAZA', 'SHIME-WAZA', 'KANSETSU-WAZA'].map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubCategory(sub)}
                className={`flex-1 py-3 rounded-full text-[10px] font-japanese font-bold tracking-widest transition-all border-none ${activeSubCategory === sub ? 'bg-brand-red text-white shadow-lg' : 'bg-brand-dark/5 text-brand-dark/40'}`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>
      </div>


      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isNavOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsNavOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-[#f8f8f8] z-[61] md:hidden p-8 flex flex-col pt-24 overflow-y-auto"
            >
              <button 
                onClick={() => setIsNavOpen(false)}
                className="absolute top-8 right-8 p-2"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-12">
                <div className="space-y-6">
                  <h4 className="text-[10px] font-japanese font-bold tracking-[0.4em] opacity-30 uppercase border-b border-black/5 pb-2">Sub-categoría</h4>
                  <div className="flex flex-col gap-8">
                    {subCategories.map((sub) => (
                      <button 
                        key={sub.name}
                        onClick={() => {
                          setActiveSubCategory(sub.name);
                          setIsNavOpen(false);
                        }}
                        className={`text-left transition-all ${activeSubCategory === sub.name ? 'scale-105 origin-left' : 'opacity-40'}`}
                      >
                        <span className={`block text-[11px] font-japanese font-bold tracking-[0.2em] mb-1 ${activeSubCategory === sub.name ? 'text-brand-red' : ''}`}>
                          {sub.name}
                        </span>
                        <span className="text-sm font-serif italic tracking-tighter opacity-60">
                          {sub.range} Técnicas
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="flex flex-col md:flex-row flex-1 md:h-[calc(100vh-6rem)] overflow-hidden">
        {/* Navigation Column (Combined for Katame) (Desktop Only) */}
        <div className="hidden md:flex w-1/3 relative flex flex-col justify-center z-10 px-16 bg-[#f8f8f8]/50 backdrop-blur-sm">
           <div className="space-y-20">
              {subCategories.map((sub) => (
                <div 
                  key={sub.name}
                  onClick={() => setActiveSubCategory(sub.name)}
                  className="flex items-center group cursor-pointer relative"
                >
                  <div className="w-[60%] pr-8 text-right">
                    <span className={`text-[11px] font-japanese font-bold tracking-[0.2em] transition-all duration-300 ${activeSubCategory === sub.name ? 'text-brand-red transform -translate-x-2' : 'text-brand-dark/40 group-hover:text-brand-dark'}`}>
                      {sub.name}
                    </span>
                  </div>
                  <div className="w-[40%] pl-8 flex items-center">
                    <span className={`text-2xl font-serif tracking-tighter italic transition-all duration-300 ${activeSubCategory === sub.name ? 'text-brand-dark scale-110' : 'text-brand-dark/20'}`}>
                      {sub.range}
                    </span>
                  </div>
                  
                  {activeSubCategory === sub.name && (
                    <motion.div 
                      layoutId="subcat-active-katame"
                      className="absolute left-[60%] -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-red"
                    />
                  )}
                </div>
              ))}
           </div>
        </div>

        {/* Right Area: Showcase with dynamic scroll direction */}
        <div 
          ref={scrollRef}
          className="flex-1 w-full overflow-y-auto z-10 pt-0 px-6 md:px-16 pb-20"
        >
          {/* Category Labels (Heading) */}
          <div className="w-full text-center sticky top-0 z-20 bg-[#f8f8f8] pt-10 pb-4">
            <motion.div 
              key={activeSubCategory}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center opacity-60"
            >
              <h1 className="text-xl md:text-2xl font-serif font-black tracking-widest uppercase leading-none text-brand-dark">
                {currentInfo.label} <span className="text-brand-red">/</span> <span className="font-japanese tracking-normal text-sm md:text-lg">{currentInfo.jp}</span>
              </h1>
              <div className="text-[8px] font-japanese mt-2 tracking-[0.3em] uppercase font-bold text-brand-dark/50">Katame-Waza</div>
            </motion.div>
          </div>
          
          <div className="flex flex-row flex-wrap gap-6 md:gap-12 justify-center items-center p-8 md:p-12">
            <AnimatePresence mode="popLayout">
              {techniques.map((tech, index) => (
                <motion.div
                  key={`${activeSubCategory}-${tech.id}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.02, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="relative shrink-0 group flex flex-col items-center"
                >
                  <motion.div 
                    initial="initial"
                    whileHover="active"
                    whileTap="active"
                    className="relative cursor-pointer group"
                    onClick={() => setSelectedTech(tech)}
                  >
                    <div className="w-32 h-32 md:w-48 md:h-48 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] p-2 border border-black/[0.05] rounded-xl overflow-hidden">
                       <div className="w-full h-full overflow-hidden bg-[#f0f0f0] rounded-lg">
                          <img 
                            src={tech.img} 
                            alt={tech.name}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                       </div>
                    </div>
                  </motion.div>
                  
                  <div className="mt-8 flex flex-col items-center gap-1 text-center">
                    <span className="text-[11px] font-japanese font-bold text-brand-dark/80 tracking-[0.2em]">{tech.jp} ○</span>
                    <h3 className="text-sm font-serif font-black tracking-[0.05em] text-brand-dark/40 uppercase group-hover:text-brand-dark transition-colors duration-500">
                      {tech.name}
                    </h3>
                    {tech.translation && (
                      <span className="text-[10px] font-sans font-medium text-brand-dark/30 normal-case italic group-hover:text-brand-dark/60 transition-colors duration-500">
                        {tech.translation}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Video Overlay Modal */}
      <AnimatePresence>
        {selectedTech && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black transition-colors"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full bg-black relative flex flex-col justify-between"
            >
              <div className="w-full flex-1 flex items-center justify-center bg-black relative top-0 [@media(max-height:600px)_and_(orientation:landscape)]:top-0">
                <div className="w-full h-full md:aspect-video md:w-[70vw] md:h-auto max-h-[100vh] md:max-h-[80vh] md:rounded-[2rem] overflow-hidden [@media(max-height:600px)_and_(orientation:landscape)]:w-[100vw] [@media(max-height:600px)_and_(orientation:landscape)]:h-[100vh] [@media(max-height:600px)_and_(orientation:landscape)]:max-h-[100vh] [@media(max-height:600px)_and_(orientation:landscape)]:rounded-none">
                  <VideoPlayer 
                    src={selectedTech.videoUrl} 
                    title={selectedTech.name}
                    imageUrl={selectedTech.img}
                    showSaludo={true}
                    onClose={() => setSelectedTech(null)}
                    section="KATAME-WAZA"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
