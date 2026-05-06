import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Menu as MenuIcon, X, Play, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import VideoPlayer from '../components/VideoPlayer';

export default function NageWaza() {
  const [activeCategory, setActiveCategory] = useState<'tachi' | 'sutemi'>('tachi');
  const [activeSubCategory, setActiveSubCategory] = useState<string>('TE-WAZA');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const subCategoryInfo: Record<string, { label: string; jp: string; range: number }> = {
    'TE-WAZA': { label: 'Mano', jp: '手', range: 16 },
    'KOSHI-WAZA': { label: 'Cadera', jp: '腰', range: 10 },
    'ASHI-WAZA': { label: 'Pie', jp: '足', range: 21 },
    'MA-SUTEMI-WAZA': { label: 'Sacrificio Frontal', jp: '真捨身', range: 5 },
    'YOKO-SUTEMI-WAZA': { label: 'Sacrificio Lateral', jp: '横捨身', range: 16 },
  };

  const tachiSubCategories = [
    { name: 'TE-WAZA', range: '1-16' },
    { name: 'KOSHI-WAZA', range: '1-10' },
    { name: 'ASHI-WAZA', range: '1-21' },
  ];

  const sutemiSubCategories = [
    { name: 'MA-SUTEMI-WAZA', range: '1-5' },
    { name: 'YOKO-SUTEMI-WAZA', range: '1-16' },
  ];

  const [selectedTech, setSelectedTech] = useState<any | null>(null);

  const teWazaNames = [
    "Seoi-nage (Proyección cargando sobre la espalda)",
    "Ippon-seoi-nage (Proyección sobre la espalda con un solo brazo)",
    "Seoi-otoshi (Caída sobre la espalda)",
    "Tai-otoshi (Caída del cuerpo)",
    "Kata-guruma (Rueda por los hombros)",
    "Sukui-nage (Proyección de cuchara o recogida)",
    "Kibisu-gaeshi (Reversión por el talón)",
    "Morote-gari (Segado con ambas manos / doble pierna)",
    "Kuchiki-taoshi (Derribo del árbol muerto / a una mano)",
    "Uchi-mata-sukashi (Evasión de Uchi-mata)",
    "Uki-otoshi (Caída flotante)",
    "Sumi-otoshi (Caída en la esquina)",
    "Obi-otoshi (Caída por el cinturón)",
    "Yama-arashi (Tormenta en la montaña)",
    "Obi-tori-gaeshi (Reversión por agarre de cinturón)",
    "Ko-uchi-gaeshi (Contrataque de pequeño segado interior)"
  ];

  const teWazaVideoIds = [
    "zIq0xI0ogxk", // 1 (Seoi-nage)
    "FQnOlCxo4oI", // 2
    "vu1TMVNnq34", // 3
    "4x6S3Q-Ktv8", // 4
    "cnHRhSy8yi4", // 5
    "vU6aJ2kFxoI", // 6
    "tJylJYfBliA", // 7
    "BHLQS4K85bs", // 8
    "ZNL47q1aJNY", // 9
    "V-RS3uhtVWM", // 10
    "6H5tmncOY4Q", // 11
    "lLU9wv52ni0", // 12
    "ff8U2TVZIYI", // 13
    "MGlyKmSuzdc", // 14
    "bpc82SrunUU", // 15
    "_MWAdYi_LC4"  // 16
  ];

  const ashiWazaNames = [
    "De-ashi-harai (Barrido de pie adelantado)",
    "Hiza-guruma (Rueda por la rodilla)",
    "Sasae-tsurikomi-ashi (Apoyo del pie tirando hacia arriba)",
    "O-soto-gari (Gran segado exterior)",
    "O-uchi-gari (Gran segado interior)",
    "Ko-soto-gari (Pequeño segado exterior)",
    "Ko-uchi-gari (Pequeño segado interior)",
    "Okuri-ashi-harai (Barrido de ambos pies)",
    "Uchi-mata (Salto al muslo interior)",
    "Ko-soto-gake (Pequeño enganche exterior)",
    "Ashi-guruma (Rueda por la pierna)",
    "Harai-tsurikomi-ashi (Barrido del pie tirando hacia arriba)",
    "O-soto-guruma (Gran rueda exterior)",
    "O-soto-otoshi (Gran caída exterior)",
    "Tsubame-gaeshi (Contrataque de golondrina)",
    "O-soto-gaeshi (Contrataque de gran segado exterior)",
    "O-uchi-gaeshi (Contrataque de gran segado interior)",
    "Hane-goshi-gaeshi (Contrataque de cadera saltada)",
    "Harai-goshi-gaeshi (Contrataque de barrido de cadera)",
    "Uchi-mata-gaeshi (Contrataque de proyecciones al muslo)",
    "O-uchi-gari-gaeshi (Contrataque de gran segado interior)"
  ];

  const ashiWazaVideoIds = [
    "4BUUvqxi_Kk", // 1
    "JPJx9-oAVns", // 2
    "699i--pvYmE", // 3
    "c-A_nP7mKAc", // 4
    "0itJFhV9pDQ", // 5
    "jeQ541ScLB4", // 6
    "3Jb3tZvr9Ng", // 7
    "nw1ZdRjrdRI", // 8
    "iUpSu5J-bgw", // 9
    "8b6kY4s4zH4", // 10
    "ROeayhvom9U", // 11
    "gGPXvWL8VbE", // 12
    "92KbCm6pQeI", // 13
    "2DsVvDw7b8g", // 14
    "GwweWqqFB5g", // 15
    "8ZjM3X_EANo", // 16
    "dCyZTXyjIXE", // 17
    "9bZAZSBtnGs", // 18
    "4U3It-7PPsc", // 19
    "Sy6sLWxkWYw", // 20
    "dCyZTXyjIXE"  // 21
  ];

  const koshiWazaVideoIds = [
    "bPKwtB4lyOQ", // 1
    "yhu1mfy2vJ4", // 2
    "SU7Id6uVJ44", // 3
    "McfzA0yRVt4", // 4
    "QsmAxpmYLOI", // 5
    "qTo8HlAAkOo", // 6
    "51Htlp7xEvE", // 7
    "M9_7De6A1kk", // 8
    "ORIYstuxYT8", // 9
    "4pQd_bEnlf0"  // 10
  ];

  const yokoSutemiWazaVideoIds = [
    "MnNG67pF_a0", // 1
    "3b9Me3Fohpk", // 2
    "6CRBGLGz9j8", // 3
    "bWG9O1BVKtQ", // 4
    "5BowcjduxVc", // 5
    "weVOpJ63gII", // 6
    "bp1tscHlePI", // 7
    "MehP6I5cY2c", // 8
    "tP1Sj1uDfSo", // 9
    "Hr0cOMGBDYo", // 10
    "jZXENTLpJCI", // 11
    "OR-HGHnarYc", // 12
    "DGDv2oMwmas", // 13
    "w6G57bWACi0", // 14
    "VBaHzKaCXss", // 15
    "6CRBGLGz9j8"  // 16
  ];

  const maSutemiWazaNames = [
    "Tomoe-nage (Proyección circular)",
    "Sumi-gaeshi (Inversión en la esquina)",
    "Hikkomi-gaeshi (Inversión tirando hacia adentro)",
    "Tawara-gaeshi (Inversión de saco de arroz)",
    "Ura-nage (Proyección hacia atrás)"
  ];

  const maSutemiWazaVideoIds = [
    "880WbHvHv6A", // 1
    "5VhduA5xkbA", // 2
    "92zUYWBp5N8", // 3
    "TmTWgrmViZc", // 4
    "Fgi9b8DJ5sQ"  // 5
  ];

  const koshiWazaNames = [
    "Uki-goshi (Cadera flotante)",
    "O-goshi (Gran proyección de cadera)",
    "Koshi-guruma (Rueda por la cadera)",
    "Tsurikomi-goshi (Proyección de cadera tirando hacia arriba)",
    "Sode-tsurikomi-goshi (Proyección de cadera tirando de la manga)",
    "Harai-goshi (Barrido de cadera)",
    "Tsuri-goshi (Proyección de cadera levantando)",
    "Hane-goshi (Cadera saltada)",
    "Ushiro-goshi (Proyección de cadera hacia atrás)",
    "Utsuri-goshi (Cambio de cadera)"
  ];

  const yokoSutemiWazaNames = [
    "Yoko-otoshi (Caída lateral)",
    "Tani-otoshi (Caída al valle)",
    "Hane-makikomi (Salto envolvente)",
    "Soto-makikomi (Envolvimiento exterior)",
    "Uchi-makikomi (Envolvimiento interior)",
    "Uki-waza (Técnica flotante)",
    "Yoko-wakare (Separación lateral)",
    "Yoko-guruma (Rueda lateral)",
    "Yoko-gake (Enganche lateral)",
    "Daki-wakare (Separación en abrazo)",
    "Uchi-mata-makikomi (Envolvimiento por el muslo interior)",
    "Kani-basami (Pinza de cangrejo) — Prohibida en competición oficial (IJF)",
    "O-soto-makikomi (Gran envolvimiento exterior)",
    "Kawazu-gake (Enganche entrelazado) — Prohibida en competición oficial (IJF)",
    "Harai-makikomi (Barrido envolvente)",
    "Hane-goshi-makikomi (Envolvimiento de cadera saltada)"
  ];

  // Generate techniques based on the range
  const currentInfo = subCategoryInfo[activeSubCategory];
  const techniques = Array.from({ length: currentInfo.range }, (_, i) => {
    let rawName = `Técnica ${i + 1} (Japonés)`;
    
    if (activeSubCategory === 'TE-WAZA' && teWazaNames[i]) {
      rawName = teWazaNames[i];
    } else if (activeSubCategory === 'ASHI-WAZA' && ashiWazaNames[i]) {
      rawName = ashiWazaNames[i];
    } else if (activeSubCategory === 'KOSHI-WAZA' && koshiWazaNames[i]) {
      rawName = koshiWazaNames[i];
    } else if (activeSubCategory === 'YOKO-SUTEMI-WAZA' && yokoSutemiWazaNames[i]) {
      rawName = yokoSutemiWazaNames[i];
    } else if (activeSubCategory === 'MA-SUTEMI-WAZA' && maSutemiWazaNames[i]) {
      rawName = maSutemiWazaNames[i];
    }
    
    const match = rawName.match(/(.*?)\((.*?)\)/);
    const name = match ? match[1].trim() : rawName;
    const translation = match ? match[2].trim() : "";

     // Card image: Use the new asset for TE-WAZA, KOSHI-WAZA, ASHI-WAZA, MA-SUTEMI-WAZA and YOKO-SUTEMI-WAZA
    const img = (activeSubCategory === 'TE-WAZA')
      ? '/assets/tarjeta.png'
      : (activeSubCategory === 'KOSHI-WAZA')
      ? '/assets/tarjeta_2.jpg'
      : (activeSubCategory === 'ASHI-WAZA')
      ? '/assets/tarjeta_3.jpg'
      : (activeSubCategory === 'MA-SUTEMI-WAZA')
      ? '/assets/tarjeta_4.jpg'
      : (activeSubCategory === 'YOKO-SUTEMI-WAZA')
      ? '/assets/targeta_5.jpg'
      : '/assets/tarjeta.png';

    // Video URL: Use specific IDs for TE-WAZA, ASHI-WAZA and KOSHI-WAZA
    let videoId = "zIq0xI0ogxk"; // Default
    
    if (activeSubCategory === 'TE-WAZA' && teWazaVideoIds[i]) {
      videoId = teWazaVideoIds[i];
    } else if (activeSubCategory === 'ASHI-WAZA' && ashiWazaVideoIds[i]) {
      videoId = ashiWazaVideoIds[i];
    } else if (activeSubCategory === 'KOSHI-WAZA' && koshiWazaVideoIds[i]) {
      videoId = koshiWazaVideoIds[i];
    } else if (activeSubCategory === 'YOKO-SUTEMI-WAZA' && yokoSutemiWazaVideoIds[i]) {
      videoId = yokoSutemiWazaVideoIds[i];
    } else if (activeSubCategory === 'MA-SUTEMI-WAZA' && maSutemiWazaVideoIds[i]) {
      videoId = maSutemiWazaVideoIds[i];
    }

    return {
      id: i + 1,
      name,
      translation,
      range: `${i * 10 + 1}-${(i + 1) * 10}`,
      img,
      jp: `${currentInfo.jp}${i + 1}`,
      videoUrl: `https://www.youtube.com/watch?v=${videoId}`
    };
  });

  // Horizontal scroll handling
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollLeft = 0;
    el.scrollTop = 0;

    const onScroll = () => {
      const isDesktop = window.innerWidth >= 768;
      if (isDesktop) {
        const maxScroll = el.scrollHeight - el.clientHeight;
        if (maxScroll <= 0) return;
        setScrollProgress(el.scrollTop / maxScroll);
      } else {
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (maxScroll <= 0) return;
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
  }, [activeSubCategory, activeCategory]);

  return (
    <div className="relative h-screen w-full bg-[#f8f8f8] overflow-hidden text-brand-dark font-sans flex flex-col">
      {/* Background Camellia Pattern (Subtle) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.02]">
        <img 
          src="/assets/rei.png" 
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
          <div className="flex bg-brand-dark/5 backdrop-blur-md rounded-full p-1.5">
            <button 
              onClick={() => { setActiveCategory('tachi'); setActiveSubCategory('TE-WAZA'); }}
              className={`flex-1 py-3 text-[10px] font-japanese font-bold tracking-widest rounded-full transition-all ${activeCategory === 'tachi' ? 'bg-brand-red text-white shadow-lg' : 'text-brand-dark/40'}`}
            >
              TACHI-WAZA
            </button>
            <button 
              onClick={() => { setActiveCategory('sutemi'); setActiveSubCategory('MA-SUTEMI-WAZA'); }}
              className={`flex-1 py-3 text-[10px] font-japanese font-bold tracking-widest rounded-full transition-all ${activeCategory === 'sutemi' ? 'bg-brand-red text-white shadow-lg' : 'text-brand-dark/40'}`}
            >
              SUTEMI-WAZA
            </button>
          </div>
          
          <div className="flex gap-2 w-full">
            {(activeCategory === 'tachi' ? ['TE-WAZA', 'KOSHI-WAZA', 'ASHI-WAZA'] : ['MA-SUTEMI-WAZA', 'YOKO-SUTEMI-WAZA']).map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubCategory(sub)}
                className={`flex-1 py-2 rounded-full text-[9px] font-mono tracking-wider transition-all border-none flex items-center justify-center text-center ${activeSubCategory === sub ? 'bg-brand-dark text-white shadow-md' : 'bg-brand-dark/5 text-brand-dark/40'}`}
              >
                {sub.toLowerCase().split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('-')}
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
                  <h4 className="text-[10px] font-japanese font-bold tracking-[0.4em] opacity-30 uppercase border-b border-black/5 pb-2">Clase</h4>
                  <div className="flex flex-col gap-4">
                    {['tachi', 'sutemi'].map((cat) => (
                      <button 
                        key={cat}
                        onClick={() => {
                          setActiveCategory(cat as any);
                          setActiveSubCategory(cat === 'tachi' ? 'TE-WAZA' : 'MA-SUTEMI-WAZA');
                        }}
                        className={`text-left text-lg font-serif font-black tracking-widest uppercase transition-colors ${activeCategory === cat ? 'text-brand-red' : 'text-brand-dark/40'}`}
                      >
                        {cat === 'tachi' ? 'Tachi-Waza' : 'Sutemi-Waza'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-[10px] font-japanese font-bold tracking-[0.4em] opacity-30 uppercase border-b border-black/5 pb-2">Sub-categoría</h4>
                  <div className="flex flex-col gap-6">
                    {(activeCategory === 'tachi' ? tachiSubCategories : sutemiSubCategories).map((sub) => (
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
        {/* Left Column: Tachi vs Sutemi (Desktop Only) */}
        <div className="hidden md:flex w-1/5 flex-col justify-center items-center gap-24 z-10 bg-[#f8f8f8]">
          <button 
            onClick={() => { setActiveCategory('tachi'); setActiveSubCategory('TE-WAZA'); }}
            className="group relative"
          >
            <motion.div 
              animate={{ color: activeCategory === 'tachi' ? '#E60012' : '#1A1A1A' }}
              className="text-[11px] font-japanese font-bold tracking-[0.5em] [writing-mode:vertical-lr] uppercase transition-colors"
            >
              TACHI-WAZA
            </motion.div>
            {activeCategory === 'tachi' && (
              <motion.div 
                layoutId="cat-indicator"
                className="absolute -right-4 top-0 bottom-0 w-px bg-brand-red"
              />
            )}
          </button>

          <button 
            onClick={() => { setActiveCategory('sutemi'); setActiveSubCategory('MA-SUTEMI-WAZA'); }}
            className="group relative"
          >
            <motion.div 
              animate={{ color: activeCategory === 'sutemi' ? '#E60012' : '#1A1A1A' }}
              className="text-[11px] font-japanese font-bold tracking-[0.5em] [writing-mode:vertical-lr] uppercase transition-colors"
            >
              SUTEMI-WAZA
            </motion.div>
            {activeCategory === 'sutemi' && (
              <motion.div 
                layoutId="cat-indicator"
                className="absolute -right-4 top-0 bottom-0 w-px bg-brand-red"
              />
            )}
          </button>
        </div>

        {/* Middle Column: Sub-categories List (Desktop Only) */}
        <div className="hidden md:flex w-1/4 relative flex flex-col justify-center z-10 px-12 bg-[#f8f8f8]">
           <div className="space-y-16 py-20">
              {(activeCategory === 'tachi' ? tachiSubCategories : sutemiSubCategories).map((sub) => (
                <div 
                  key={sub.name}
                  onClick={() => setActiveSubCategory(sub.name)}
                  className="flex items-center group cursor-pointer relative"
                >
                  <div className="w-[50%] pr-6 text-right">
                    <span className={`text-[10px] font-japanese font-bold tracking-[0.2em] transition-all duration-300 ${activeSubCategory === sub.name ? 'text-brand-red transform -translate-x-2' : 'text-brand-dark/40 group-hover:text-brand-dark'}`}>
                      {sub.name}
                    </span>
                  </div>
                  <div className="w-[50%] pl-6 flex items-center">
                    <span className={`text-xl font-serif tracking-tighter italic transition-all duration-300 ${activeSubCategory === sub.name ? 'text-brand-dark scale-110' : 'text-brand-dark/20'}`}>
                      {sub.range}
                    </span>
                  </div>
                  
                  {activeSubCategory === sub.name && (
                    <motion.div 
                      layoutId="subcat-active"
                      className="absolute left-[50%] -translate-x-1/2 w-2 h-2 rounded-full bg-brand-red"
                    />
                  )}
                </div>
              ))}
           </div>
        </div>

        {/* Right Area: Showcase with dynamic scroll direction */}
        <div 
          ref={scrollRef}
          className="flex-1 w-full overflow-y-auto z-10 pt-24 px-6 md:px-16 pb-20"
        >
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
                    section="NAGE-WAZA"
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
