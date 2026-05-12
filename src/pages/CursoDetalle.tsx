import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import { Play, ArrowLeft } from 'lucide-react';

const courseRegistry: Record<string, { title: string, galleryData: Record<string, {jp: string, es: string, videoUrl: string, videos?: {title: string, url: string}[]}[]>}> = {
  '1': {
    title: 'Judo I',
    galleryData: {
      'Pie/Pierna': [
        { jp: 'De-ashi-harai', es: 'Barrido al pie de avance', videoUrl: 'https://www.youtube.com/watch?v=4BUUvqxi_Kk' },
        { jp: 'O-soto-gari', es: 'Gran siega exterior', videoUrl: 'https://www.youtube.com/watch?v=c-A_nP7mKAc' },
        { jp: 'O-soto-otoshi', es: 'Gran precipitación exterior', videoUrl: 'https://www.youtube.com/watch?v=2DsVvDw7b8g' },
        { jp: 'O-uchi-gari', es: 'Gran siega interior', videoUrl: 'https://www.youtube.com/watch?v=0itJFhV9pDQ' },
        { jp: 'Ko-soto-gari', es: 'Pequeña siega exterior', videoUrl: 'https://www.youtube.com/watch?v=jeQ541ScLB4' },
        { jp: 'Ko-uchi-gari', es: 'Pequeña siega interior', videoUrl: 'https://www.youtube.com/watch?v=3Jb3tZvr9Ng' }
      ],
      'Suelo': [
        { jp: 'Kesa-gatame', es: 'Control en bandolera (o de bufanda).', videoUrl: 'https://www.youtube.com/watch?v=NDaQuJOFBYk' },
        { jp: 'Kuzure-kesa-gatame', es: 'Variante del control en bandolera.', videoUrl: 'https://www.youtube.com/watch?v=Q2fb9jaoUFQ' },
        { jp: 'Yoko-shiho-gatame', es: 'Control lateral por cuatro puntos.', videoUrl: 'https://www.youtube.com/watch?v=TT7XJVSEQxA' },
        { jp: 'Mune-gatame', es: 'Control de pecho.', videoUrl: 'https://www.youtube.com/watch?v=lIt5vywPBF0' }
      ],
      'Escapes': [
        { jp: 'Escape de Kesa-gatame', es: 'Escape del control en bandolera.', videoUrl: 'https://www.youtube.com/watch?v=5_TS0YHdxcQ&t=0s' },
        { jp: 'Escape de Kuzure-kesa-gatame', es: 'Escape de la variante del control en bandolera.', videoUrl: 'https://www.youtube.com/watch?v=-zFQ6h4yKT4' },
        { jp: 'Escape de Yoko-shiho-gatame', es: 'Escape del control lateral.', videoUrl: 'https://www.youtube.com/watch?v=yK_GSamSPko' }
      ],
      'Cadera': [
        { jp: 'O-goshi', es: 'Gran proyección de cadera.', videoUrl: 'https://www.youtube.com/watch?v=yhu1mfy2vJ4' },
        { jp: 'Uki-goshi', es: 'Cadera flotante.', videoUrl: 'https://www.youtube.com/watch?v=bPKwtB4lyOQ' }
      ],
      'Mano/Brazo': [
        { jp: 'Ippon-seoi-nage', es: 'Proyección cargando sobre un hombro.', videoUrl: 'https://www.youtube.com/watch?v=FQnOlCxo4oI' },
        { jp: 'Tai-otoshi', es: 'Derribo de cuerpo por vacío (caída del cuerpo).', videoUrl: 'https://www.youtube.com/watch?v=4x6S3Q-Ktv8' }
      ]
    }
  },
  '2': {
    title: 'Judo II',
    galleryData: {
      'Nage-Waza': [
        { jp: 'Morote-Seoi-Nage', es: 'Proyección por el hombro a dos manos', videoUrl: 'https://www.youtube.com/watch?v=zIq0xI0ogxk' },
        { jp: 'Tsuri-Goshi', es: 'Cadera levantada', videoUrl: 'https://www.youtube.com/watch?v=51Htlp7xEvE' },
        { jp: 'Uki-Goshi O O-goshi', es: 'Cadera flotante o gran cadera', videoUrl: 'https://www.youtube.com/watch?v=bPKwtB4lyOQ', videos: [
          { title: 'Uki-Goshi', url: 'https://www.youtube.com/watch?v=bPKwtB4lyOQ'},
          { title: 'O-goshi', url: 'https://www.youtube.com/watch?v=yhu1mfy2vJ4'}
        ] },
        { jp: 'Koshi-Guruma', es: 'Rueda por la cadera', videoUrl: 'https://www.youtube.com/watch?v=SU7Id6uVJ44' },
        { jp: 'Tsuri-Komi-Goshi O Sode-Tsuri-Goshi', es: 'Cadera tirando y levantando o manga tirando', videoUrl: 'https://www.youtube.com/watch?v=McfzA0yRVt4', videos: [
          { title: 'Tsuri-Komi-Goshi', url: 'https://www.youtube.com/watch?v=McfzA0yRVt4'},
          { title: 'Sode-Tsuri-Goshi', url: 'https://www.youtube.com/watch?v=QsmAxpmYLOI'}
        ] },
        { jp: 'Sasae-Tsuri-Komi-Ashi', es: 'Bloqueo del pie tirando y levantando', videoUrl: 'https://www.youtube.com/watch?v=699i--pvYmE' },
        { jp: 'Tsubame-Gaeshi', es: 'Contraataque de la golondrina', videoUrl: 'https://www.youtube.com/watch?v=GwweWqqFB5g' },
        { jp: 'Okuri-Ashi-Barai', es: 'Barrido a los dos pies', videoUrl: 'https://www.youtube.com/watch?v=nw1ZdRjrdRI' },
        { jp: 'Ko-uchi-Gari O Ko-uchi-Gake', es: 'Pequeña siega o gancho interior', videoUrl: 'https://www.youtube.com/watch?v=3Jb3tZvr9Ng', videos: [
          { title: 'Ko-uchi-Gari', url: 'https://www.youtube.com/watch?v=3Jb3tZvr9Ng'},
          { title: 'Ko-uchi-Gake', url: 'https://www.youtube.com/watch?v=v-bPmFsDU7A'}
        ] },
        { jp: 'Ko-soto-gari O Ko-soto-Gake', es: 'Pequeña siega o gancho exterior', videoUrl: 'https://www.youtube.com/watch?v=jeQ541ScLB4', videos: [
          { title: 'Ko-soto-gari', url: 'https://www.youtube.com/watch?v=jeQ541ScLB4'},
          { title: 'Ko-soto-Gake', url: 'https://www.youtube.com/watch?v=8b6kY4s4zH4'}
        ] }
      ],
      'Ukemi': [
        { jp: 'Mae-Ukemi', es: 'Caída hacia adelante', videoUrl: 'https://www.youtube.com/watch?v=qalKtN1GlCo' },
        { jp: 'Yoko-Ukemi', es: 'Caída lateral', videoUrl: 'https://www.youtube.com/watch?v=RMYdKMDiPtI&t=23s' },
        { jp: 'Ushiro-Ukemi', es: 'Caída hacia atrás', videoUrl: 'https://www.youtube.com/watch?v=4DHgmH0aj8I' },
        { jp: 'Zempo Kaiten Ukemi', es: 'Caída de rodada hacia adelante', videoUrl: 'https://www.youtube.com/watch?v=pMUSsQnFtWo' }
      ],
      'Katame-Waza': [
        { jp: 'Kami-Shiho-Gatame / Kuzure', es: 'Control superior por cuatro puntos y salidas', videoUrl: 'https://www.youtube.com/watch?v=HFuMjOv0WN8' },
        { jp: 'Tate-Shiho-Gatame / Salida', es: 'Control longitudinal por cuatro puntos y salida', videoUrl: 'https://www.youtube.com/watch?v=55-rFmBx53g' },
        { jp: 'Nami-Juji-Jime', es: 'Estrangulación cruzada normal', videoUrl: 'https://www.youtube.com/watch?v=k2cHry9HByQ' },
        { jp: 'Gyaku-Juji-Jime', es: 'Estrangulación cruzada inversa', videoUrl: 'https://www.youtube.com/watch?v=t3tQriIPdlI' },
        { jp: 'Kata-Juji-Jime', es: 'Estrangulación cruzada media', videoUrl: 'https://www.youtube.com/watch?v=3VZVUAmiMD8' },
        { jp: 'Ude-Hishigi-Juji-Gatame', es: 'Luxación de codo en cruz', videoUrl: 'https://www.youtube.com/watch?v=OWgSOlCuMXw' }
      ],
      'Otras Técnicas': [
        { jp: 'Ne Waza (Ataque Piernas)', es: 'Ataque Entre Las Piernas', videoUrl: '' },
        { jp: 'Voltaretas Dorsal', es: '2 Voltaretas En Decubito Dorsal', videoUrl: '' },
        { jp: 'Voltareta Ventral', es: '1 Voltareta Con Uke En Decubito Ventral', videoUrl: '' }
      ]
    }
  }
};

const modulesData = [
  { id: 1, title: 'TEORÍA', shape: 'circle' },
  { id: 2, title: 'TÉCNICAS', shape: 'lines' },
  { id: 3, title: 'TEST', shape: 'rectangle' }
];

const AbstractLeafSVG = () => (
  <svg viewBox="0 0 200 350" className="w-[180px] h-[315px] md:w-[200px] md:h-[350px] opacity-90 mix-blend-darken">
    {Array.from({ length: 20 }).map((_, i) => (
      <path key={`s1-${i}`} d={`M110 ${100 - i*1.2} C80 ${50 - i*2}, 40 ${60}, 60 ${120}`} fill="none" stroke="#000" strokeWidth="0.4" />
    ))}
    {Array.from({ length: 35 }).map((_, i) => (
      <path key={`L-${i}`} d={`M100 180 C${30 + i} 110, ${10 + i * 1.5} 190, ${70 + i * 0.5} 230`} fill="none" stroke="#000" strokeWidth="0.4" />
    ))}
    {Array.from({ length: 35 }).map((_, i) => (
      <path key={`R-${i}`} d={`M90 185 C${160 - i} 120, ${190 - i * 1.5} 200, ${130 - i * 0.5} 240`} fill="none" stroke="#000" strokeWidth="0.4" />
    ))}
    <circle cx="95" cy="182" r="2" fill="#000" />
    <path d="M95 182 L70 230 M95 182 L130 240 M95 182 L60 120 M95 182 L80 120" stroke="#000" strokeWidth="1" />
    {Array.from({ length: 20 }).map((_, i) => (
      <path key={`s2-${i}`} d={`M90 ${240 + i*1.2} C120 ${290 + i*2}, 160 ${280}, 140 ${220}`} fill="none" stroke="#000" strokeWidth="0.4" />
    ))}
  </svg>
);

export default function CursoDetalle() {
  const { id } = useParams();
  const courseInfo = courseRegistry[id || '1'] || courseRegistry['1'];
  const galleryData = courseInfo.galleryData;
  const initialMenu = Object.keys(galleryData)[0] || '';
  
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState(initialMenu);
  const [selectedVideo, setSelectedVideo] = useState<{jp: string, es: string, videoUrl: string, videos?: {title: string, url: string}[]} | null>(null);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveMenu(Object.keys(galleryData)[0] || '');
  }, [id, galleryData]);

  // Test states
  const [isTestActive, setIsTestActive] = useState(false);
  const [testTechniques, setTestTechniques] = useState<{jp: string, es: string, videoUrl: string}[]>([]);
  const [currentTestIdx, setCurrentTestIdx] = useState(0);
  const [testPhase, setTestPhase] = useState<'countdown' | 'video'>('countdown');
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTestActive && testPhase === 'countdown' && countdown > 0) {
      timer = setTimeout(() => setCountdown(c => c - 1), 1000);
    } else if (isTestActive && testPhase === 'countdown' && countdown === 0) {
      setTestPhase('video');
    }
    return () => clearTimeout(timer);
  }, [isTestActive, testPhase, countdown]);

  const startTest = (category?: string) => {
    let all: {jp: string, es: string, videoUrl: string}[] = [];
    if (category && galleryData[category]) {
      all = [...galleryData[category]];
    } else {
      all = Object.values(galleryData).flat();
    }
    const shuffled = [...all].sort(() => 0.5 - Math.random());
    setTestTechniques(shuffled);
    setCurrentTestIdx(0);
    setTestPhase('countdown');
    setCountdown(10);
    setIsTestActive(true);
  };

  const nextTestTechnique = () => {
    if (currentTestIdx < testTechniques.length - 1) {
      setCurrentTestIdx(idx => idx + 1);
      setTestPhase('countdown');
      setCountdown(10);
    } else {
      setIsTestActive(false); // test finished
    }
  };

  useEffect(() => {
    if (activeModule && contentRef.current) {
      setTimeout(() => {
        contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [activeModule]);

  // Mock data for detail, could be fetched based on id
  return (
    <div className="min-h-screen bg-[#D62828] p-8 md:p-16 text-white">
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => { setSelectedVideo(null); setActiveVideoUrl(null); }}>
          <div className="bg-white rounded-lg max-w-4xl w-full h-[80vh] text-black overflow-hidden flex flex-col items-center justify-center relative p-4 md:p-8" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-gray-500 hover:text-black font-bold uppercase tracking-widest text-xs" onClick={() => { setSelectedVideo(null); setActiveVideoUrl(null); }}>Cerrar ✕</button>

            {selectedVideo.videos && !activeVideoUrl ? (
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 uppercase tracking-widest text-[#2a4d69]">{selectedVideo.jp}</h2>
                <p className="text-lg md:text-xl mb-8 font-medium">Elige una variación para ver:</p>
                <div className="flex flex-col gap-4">
                  {selectedVideo.videos.map((vid, idx) => (
                    <button 
                      key={idx}
                      className="px-6 py-4 md:px-8 md:py-4 bg-[#E51B24] text-white text-lg md:text-xl font-bold uppercase tracking-wider rounded border-b-4 border-black hover:bg-black hover:border-[#E51B24] transition-colors flex items-center justify-center gap-4"
                      onClick={() => setActiveVideoUrl(vid.url)}
                    >
                      <Play className="w-6 h-6" />
                      {vid.title}
                    </button>
                  ))}
                </div>
              </div>
            ) : (selectedVideo.videoUrl || activeVideoUrl) ? (
              <div className="w-full h-full flex flex-col">
                {selectedVideo.videos && (
                   <div className="mb-4 flex items-center justify-between">
                     <button className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-[#E51B24] transition-colors flex items-center gap-2" onClick={() => setActiveVideoUrl(null)}>
                        <ArrowLeft className="w-4 h-4" /> Volver a variaciones
                     </button>
                   </div>
                )}
                <div className="flex-1 overflow-hidden relative">
                  <VideoPlayer 
                    src={activeVideoUrl || selectedVideo.videoUrl} 
                    title={selectedVideo.jp}
                    onClose={() => { setSelectedVideo(null); setActiveVideoUrl(null); }}
                    showSaludo={true}
                    section="NAGE-WAZA"
                  />
                </div>
              </div>
            ) : (
              <div className="text-center p-8">
                <h2 className="text-2xl font-bold mb-4 text-[#2a4d69]">{selectedVideo.jp}</h2>
                <p className="text-gray-600 font-medium">Video próximamente disponible.</p>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="max-w-5xl mx-auto">
        <Link to="/cursos" className="mb-8 block underline">Volver a Cursos</Link>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold mb-12 uppercase tracking-tighter"
        >
          Detalle del curso {courseInfo.title}
        </motion.h1>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
           {modulesData.map((module) => (
             <motion.div
               key={module.id}
               onClick={() => setActiveModule(module.title)}
               whileHover={{ y: -10 }}
               className={`bg-[#f2f0eb] w-full max-w-[300px] h-[550px] relative shadow-[0_15px_40px_rgba(0,0,0,0.15)] flex flex-col justify-between p-6 cursor-pointer overflow-hidden border transition-colors ${activeModule === module.title ? 'border-[#E51B24]' : 'border-[#e5e0d8]'} text-black`}
             >
               {/* Top Right text */}
               <div className="absolute top-10 right-6 text-right w-4 z-30">
                 <p className="[writing-mode:vertical-rl] text-[9px] tracking-[0.4em] text-gray-800 font-medium uppercase font-sans">
                   JAPANESE
                 </p>
                 <p className="[writing-mode:vertical-rl] text-[9px] tracking-[0.4em] text-gray-500 font-light uppercase font-sans mt-2">
                   MARTIAL ART
                 </p>
               </div>

               {/* Center Graphics Container */}
               <div className="flex-grow flex items-center justify-center relative mt-8">
                 {/* Red Geometry */}
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                   {module.shape === 'circle' && (
                     <div className="w-[150px] h-[150px] rounded-full bg-[#E51B24]" />
                   )}
                   {module.shape === 'lines' && (
                     <div className="flex gap-4 h-[320px]">
                        <div className="w-3 h-full bg-[#E51B24]"></div>
                        <div className="w-3 h-full bg-[#E51B24]"></div>
                     </div>
                   )}
                   {module.shape === 'rectangle' && (
                     <div className="w-[120px] h-[220px] bg-[#E51B24]" />
                   )}
                 </div>

                 {/* Abstract Leaves/Lines */}
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                    <AbstractLeafSVG />
                 </div>
               </div>

               {/* Bottom Text */}
               <div className="pb-6 text-center relative z-30">
                 <h3 className="text-2xl font-light tracking-[0.3em] font-sans text-gray-900">{module.title}</h3>
               </div>
             </motion.div>
           ))}
        </div>

        {/* Content Section based on selected module */}
        <div ref={contentRef} className="scroll-mt-8">
          <AnimatePresence mode="wait">
          {activeModule === 'TEORÍA' && (
            <motion.div 
              key="teoria"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-16 bg-white p-8 border-t-4 border-[#E51B24] text-black shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-[#E51B24] uppercase tracking-widest text-center">Resumen para el Examen Teórico</h3>
              <div className="flex flex-col gap-6 text-lg leading-relaxed">
                <div>
                  <h4 className="text-xl font-semibold text-[#E51B24]">1. Fundamentos e Historia</h4>
                  <p>Fundado por Jigoro Kano en 1882 en el Kodokan. El Judo se basa en el Código Moral: cortesía, coraje, amistad, honestidad, honor, modestia, respeto y autocontrol.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#E51B24]">2. Principios Filosóficos y Técnicos</h4>
                  <p><strong>Filosofía:</strong> Seiryoku Zen'yo (máxima eficiencia empleando la energía de forma óptima) y Jita Kyoei (ayuda y prosperidad mutua como objetivo final de la práctica del Judo).</p>
                  <p className="mt-2"><strong>Técnica:</strong> Todo movimiento se basa en la coordinación de tres fases esenciales: <strong>Kuzushi</strong> (romper el equilibrio del oponente), <strong>Tsukuri</strong> (colocarse en la posición óptima para la técnica) y <strong>Kake</strong> (ejecutar la proyección con fuerza y control).</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#E51B24]">3. Clasificación de Técnicas</h4>
                  <p>Divididas principalmente en: Nage-waza (proyecciones: pie, cadera, sacrificio, mano) y Katame-waza (suelo: Osaekomi-waza/inmovilizaciones, Shime-waza/estrangulaciones, Kansetsu-waza/luxaciones).</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#E51B24]">4. Etiqueta y Estructura</h4>
                  <p>Conocimiento básico de: Dojo (lugar de práctica), Tatami, Judogi, Obi (cinturón), Reiho (etiqueta) y los saludos (Zarei: de rodillas, Ritsurei: de pie).</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#E51B24]">5. Prohibiciones</h4>
                  <p>Conocer las acciones prohibidas (Hansoku-make) es crucial para la seguridad y la correcta práctica. Incluye técnicas prohibidas tanto en pie como en suelo para evitar lesiones.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#E51B24]">6. Sistema de Grados</h4>
                  <p>Entender la jerarquía de los cinturones (Kyu y Dan) y los requisitos mínimos para avanzar de grado, demostrando progreso tanto técnico como en actitud conforme al código moral.</p>
                </div>
              </div>
            </motion.div>
          )}

          {activeModule === 'TÉCNICAS' && (
            <motion.div 
              key="tecnicas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-16 bg-white p-4 md:p-8 border-t-4 border-[#2a4d69] shadow-xl"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#2a4d69] uppercase tracking-widest text-center">Explora las técnicas</h3>
              {/* Gallery Section with pill menu */}
              <div className="mt-8 flex flex-col items-center w-full">
                {/* Responsive Pill Menu */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-10 w-full">
                  {Object.keys(galleryData).map((item) => (
                    <button 
                      key={item} 
                      onClick={() => setActiveMenu(item)}
                      className={`px-4 py-2 md:px-6 md:py-3 rounded-full border-2 flex items-center justify-center text-center font-bold text-xs md:text-sm transition-all hover:-translate-y-0.5 ${
                        activeMenu === item 
                          ? 'bg-[#2a4d69] text-white border-[#2a4d69] shadow-md' 
                          : 'bg-white border-gray-200 text-[#2a4d69] hover:border-[#2a4d69] hover:bg-gray-50'
                      }`}>
                      {item}
                    </button>
                  ))}
                </div>

                <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 w-full max-w-5xl px-4">
                  {galleryData[activeMenu].map((item, idx) => (
                    <motion.div
                      key={item.jp + idx}
                      onClick={() => { setSelectedVideo(item); setActiveVideoUrl(null); }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      className="p-4 md:p-6 bg-[#2a4d69] text-white flex flex-col items-center justify-center text-center shadow-lg hover:bg-[#1f3a52] cursor-pointer transition-colors duration-300 w-[150px] h-[170px] sm:w-[170px] sm:h-[190px] md:w-[200px] md:h-[220px]"
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      }}
                    >
                      <span className="font-bold text-base sm:text-lg mb-1">{item.jp}</span>
                      <span className="text-xs sm:text-sm md:text-sm opacity-90 leading-tight md:leading-tight px-1">{item.es}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeModule === 'TEST' && (
            <motion.div 
              key="test"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-16 bg-white p-4 md:p-8 border-t-4 border-[#2a4d69] text-black shadow-xl"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#2a4d69] uppercase tracking-widest text-center">Test de Conocimientos</h3>
              
              {!isTestActive ? (
                <div className="text-center p-8 bg-gray-50 border border-gray-200">
                  <p className="text-lg mb-8 text-gray-700">Pon a prueba todo lo que has aprendido. Se mostrará el nombre de una técnica en Japonés durante 10 segundos, intenta visualizar la técnica en tu mente, seguido por el video para que confirmes tu respuesta. ¿Qué técnicas deseas practicar?</p>
                  <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                    <button onClick={() => startTest()} className="px-6 py-3 w-full md:w-auto bg-[#E51B24] text-white font-bold tracking-wider hover:bg-red-800 transition-colors uppercase shadow-md flex items-center justify-center gap-2">
                       <Play className="w-5 h-5" /> Todas las Técnicas
                    </button>
                    {Object.keys(galleryData).map(category => (
                      <button key={category} onClick={() => startTest(category)} className="px-6 py-3 w-full md:w-auto bg-[#2a4d69] text-white font-bold tracking-wider hover:bg-[#1a3346] transition-colors uppercase shadow-md flex items-center justify-center gap-2">
                         <Play className="w-4 h-4 opacity-70" /> {category}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center p-4 md:p-8 bg-black text-white min-h-[400px] flex flex-col items-center justify-center relative shadow-2xl rounded-xl border border-gray-800 pt-16 md:pt-8">
                  <button 
                    onClick={() => setIsTestActive(false)} 
                    className="absolute top-4 left-4 text-xs font-bold bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-full uppercase tracking-widest transition-colors flex items-center gap-2"
                  >
                    <ArrowLeft className="w-3 h-3" /> <span className="hidden sm:inline">Volver</span>
                  </button>
                  <div className="absolute top-4 right-4 text-xs font-bold bg-[#E51B24] px-3 py-1.5 rounded-full uppercase tracking-widest">
                    {currentTestIdx + 1} / {testTechniques.length}
                  </div>
                  
                  {testPhase === 'countdown' ? (
                    <motion.div 
                      key={`countdown-${currentTestIdx}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center"
                    >
                      <h4 className="text-2xl md:text-5xl font-bold text-white mb-4 leading-tight">{testTechniques[currentTestIdx].jp}</h4>
                      <p className="text-gray-400 mb-12 text-sm md:text-base uppercase tracking-widest">Visualiza la técnica...</p>
                      
                      <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center mb-8">
                        <svg className="absolute inset-0 w-full h-full -rotate-90">
                          <circle className="text-gray-800" strokeWidth="8" stroke="currentColor" fill="transparent" r="58" cx="50%" cy="50%" />
                          <circle className="text-[#E51B24] transition-all duration-1000 ease-linear" strokeWidth="8" strokeDasharray={364.4} strokeDashoffset={364.4 - (countdown / 10) * 364.4} strokeLinecap="round" stroke="currentColor" fill="transparent" r="58" cx="50%" cy="50%" />
                        </svg>
                        <span className="text-5xl md:text-6xl font-black">{countdown}</span>
                      </div>
                      
                      <button onClick={() => setTestPhase('video')} className="text-gray-400 hover:text-white underline text-sm transition-colors">
                        Mostrar video ahora
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`video-${currentTestIdx}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="w-full max-w-3xl flex flex-col items-center pt-8 md:pt-0"
                    >
                       <h4 className="text-xl md:text-3xl font-bold text-white mb-2">{testTechniques[currentTestIdx].jp}</h4>
                       <p className="text-[#E51B24] mb-6 text-sm md:text-lg font-medium">{testTechniques[currentTestIdx].es}</p>
                       <div className="w-full aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl mb-8 border border-gray-800">
                          <VideoPlayer src={testTechniques[currentTestIdx].videoUrl} autoStart={true} />
                       </div>
                       
                       <button onClick={nextTestTechnique} className="px-8 py-3 bg-white text-black font-bold tracking-wider hover:bg-gray-200 transition-colors uppercase flex items-center gap-2 rounded-full">
                         {currentTestIdx < testTechniques.length - 1 ? 'Siguiente Técnica' : 'Finalizar Test'} <Play className="w-4 h-4" />
                       </button>
                    </motion.div>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
