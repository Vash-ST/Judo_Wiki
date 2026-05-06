import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Users, Zap, Shield, Target, BookOpen, ArrowRight, Info, X, Download } from 'lucide-react';
import InteractiveModal from '../components/InteractiveModal';

export default function PrincipiosJudo() {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);
  const [activeUkemiVideo, setActiveUkemiVideo] = useState<string | null>(null);
  const [isInteractiveModalOpen, setIsInteractiveModalOpen] = useState(false);

  const principles = [
    {
      title: "",
      jp: "",
      meaning: "",
      desc: "",
      image: "/assets/fondo_tarjeta_01.jpg",
      action: "Ver Dojo"
    },
    {
      title: "",
      jp: "",
      meaning: "",
      desc: "",
      image: "/assets/fondo_tarjeta_02.jpg",
      action: "Ver Judogi"
    },
    {
      title: "",
      jp: "",
      meaning: "",
      desc: "",
      image: "/assets/fondo_tarjeta_03.jpg",
      action: "Ver Saludos"
    },
    {
      title: "",
      jp: "",
      meaning: "",
      desc: "",
      image: "/assets/fondo_tarjeta_04.jpg",
      action: "Ver Posturas"
    },
    {
      title: "",
      jp: "",
      meaning: "",
      desc: "",
      image: "/assets/fondo_tarjeta_05.jpg",
      action: "Ver Desplazamientos"
    }
  ];

  const pillars = [
    { icon: <Shield className="w-5 h-5" />, text: "Respeto (Rei)" },
    { icon: <Target className="w-5 h-5" />, text: "Autocontrol" },
    { icon: <BookOpen className="w-5 h-5" />, text: "Disciplina" },
    { icon: <Sparkles className="w-5 h-5" />, text: "Humildad" },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white text-brand-navy relative overflow-hidden" id="principios-judo-page">
      {/* Background Zen Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-red rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-navy rounded-full blur-[150px]" />
      </div>

      <div className="max-w-[100vw] overflow-hidden py-12 md:py-20 relative z-10" style={{ backgroundColor: '#ffffff' }}>
        {/* Header section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="px-6 md:px-24 mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-brand-red" />
            <span className="text-[10px] font-japanese font-bold tracking-[0.5em] text-brand-red uppercase">Principios de Judo</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-black uppercase tracking-tighter leading-none mb-8">
            Filosofía <br /> <span className="text-brand-navy/10">Sistémica</span>
          </h1>
        </motion.div>

        {/* Horizontal Carousel */}
        <div className="grid md:grid-cols-[300px,1fr] gap-8 px-6 md:px-24 mb-16">
          <div className="flex flex-col justify-center">
             <h2 className="text-4xl font-serif font-black text-brand-navy mb-4">Principios del Judo</h2>
             <p className="text-brand-navy/70">Fundamentos y valores que guían la práctica y la vida fuera del tatami.</p>
          </div>
          <div className="flex overflow-x-auto pb-10 gap-6 no-scrollbar snap-x snap-mandatory">
            {principles.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={idx >= 0 && idx <= 4 ? () => setActiveModal(idx) : undefined}
                className={`flex-shrink-0 w-[280px] md:w-[320px] aspect-[4/5] rounded-[2rem] relative overflow-hidden snap-center group shadow-xl ${idx >= 0 && idx <= 4 ? 'cursor-pointer' : ''}`}
              >
                <img 
                  src={p.image} 
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div>
                    {p.meaning && (
                      <h2 className="text-2xl font-serif font-black leading-tight mb-2 text-white uppercase drop-shadow-md">
                        {p.meaning}
                      </h2>
                    )}
                    {p.title && (
                      <p className="text-[9px] font-japanese tracking-[0.3em] font-bold text-brand-red uppercase">
                        {p.title}
                      </p>
                    )}
                  </div>

                  <div>
                    {p.desc && (
                      <p className="text-[13px] text-white/70 font-light leading-relaxed mb-6 line-clamp-3">
                        {p.desc}
                      </p>
                    )}
                    
                    <div className={`flex items-center ${p.desc ? 'justify-between' : 'justify-center border-t border-transparent pt-6'}`}>
                      <button className="px-5 py-2 bg-black text-white hover:bg-white hover:text-black rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 transition-all duration-300">
                        {p.action} <ArrowRight className="w-3 h-3" />
                      </button>
                      {p.desc && (
                        <button className="w-9 h-9 rounded-full bg-black text-white hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300">
                          <Info className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Caídas (Ukemis) Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 mb-32 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-sm font-japanese tracking-[1em] text-brand-navy/30 uppercase mb-4">Caídas</h3>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-brand-navy tracking-tight">
              Ukemis
            </h2>
            <p className="mt-4 text-brand-navy/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              El arte de caer correctamente. Aprender a caer es el primer paso en el Judo, fundamental para evitar lesiones, quitar el miedo a ser proyectado y ejecutar las técnicas con plena confianza y seguridad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {[
              {
                title: "Ushiro Ukemi",
                subtitle: "Caída de espaldas",
                desc: "Aprenda a caer hacia atrás, protegiendo la cabeza pegando la barbilla al pecho y golpeando el tatami con los brazos a 45 grados.",
                image: "/assets/caida_01.jpg",
                videoId: "4DHgmH0aj8I",
                stats: [
                  { label: "Atrás", value: "Dirección" },
                  { label: "Brazos", value: "Impacto" }
                ]
              },
              {
                title: "Yoko Ukemi",
                subtitle: "Caída de costado",
                desc: "Caída lateral (Migi o Hidari), extendiendo un brazo y la pierna del mismo lado para amortiguar el impacto contra el suelo.",
                image: "/assets/caida_02.jpg",
                videoId: "RMYdKMDiPtI",
                stats: [
                  { label: "Iz/Der", value: "Lados" },
                  { label: "Lateral", value: "Impacto" }
                ]
              },
              {
                title: "Mae Ukemi",
                subtitle: "Caída de frente",
                desc: "Técnica para caer hacia adelante protegiendo el rostro de un impacto frontal, amortiguando con los antebrazos y las palmas.",
                image: "/assets/caida_03.jpg",
                videoId: "qalKtN1GlCo",
                stats: [
                  { label: "Frente", value: "Dirección" },
                  { label: "Antebrazos", value: "Impacto" }
                ]
              },
              {
                title: "Zempo Kaiten",
                subtitle: "Caída de frente rodando",
                desc: "Rodada hacia adelante (Mae Mawari Ukemi), disipando la energía proyectada en el movimiento para volver a ponerse de pie al instante.",
                image: "/assets/caida_04.jpg",
                videoId: "lflox2BS1oE",
                stats: [
                  { label: "Rodando", value: "Lado" },
                  { label: "De pie", value: "Postura" }
                ]
              }
            ].map((ukemi, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] p-4 shadow-xl shadow-brand-navy/5 border border-gray-100 flex flex-col group hover:-translate-y-2 transition-all duration-300">
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative">
                  <img src={ukemi.image} alt={ukemi.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-2xl" />
                </div>
                <div className="px-2 pb-2 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-serif text-xl font-bold text-brand-navy">{ukemi.title}</h4>
                      <p className="text-brand-red font-medium text-xs mt-1">{ukemi.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-6 line-clamp-3 mt-2 leading-relaxed h-[72px]">
                    {ukemi.desc}
                  </p>

                  <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100">
                     <div className="flex gap-4">
                       {ukemi.stats.map((stat, i) => (
                         <div key={i}>
                            <p className="font-bold text-xs text-brand-navy">{stat.label}</p>
                            <p className="text-[10px] text-gray-500">{stat.value}</p>
                         </div>
                       ))}
                     </div>
                     <button 
                       onClick={(e) => {
                         e.stopPropagation();
                         if(ukemi.videoId) setActiveUkemiVideo(ukemi.videoId);
                       }}
                       className={`px-5 py-2 rounded-full font-medium text-[11px] uppercase tracking-wider transition-colors duration-300 h-9 ${
                         ukemi.videoId ? 'bg-brand-navy text-white hover:bg-brand-red' : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                       }`}
                       disabled={!ukemi.videoId}
                     >
                       Ver
                     </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fundamentos de Caída Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-32 relative z-10">
          <div className="bg-brand-navy rounded-[2.5rem] p-8 md:p-16 text-white overflow-hidden relative shadow-2xl">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              {/* Text content */}
              <div>
                <h3 className="font-serif text-3xl md:text-4xl font-black mb-6 leading-tight">
                  Fundamentos básicos de toda caída en judo
                </h3>
                <p className="text-white/80 leading-relaxed text-lg mb-8 text-justify">
                  Las caídas en el judo son el aspecto técnico más importante para la prevención y cuidado de nuestro cuerpo en relación con la práctica del judo, pues este gesto técnico pretende disminuir el impacto que se ejerce sobre la persona que la realiza, dispersando toda fuerza ejercida hacia el sistema musculoesquelético apendicular (brazos y piernas o pies), cuidando la cabeza y columna vertebral (Sistema nervioso central) para que este no se vea afectado o dañado.
                </p>
              </div>

              {/* Fundamentos List */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-serif text-lg md:text-xl font-bold mb-6 text-brand-red uppercase tracking-wider">Los fundamentos principales de los ukemis son:</h4>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 flex gap-4 items-start group hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1">Disipar el impacto</h5>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Golpear fuertemente al tatami con manos/brazos y/o piernas/pie.
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 flex gap-4 items-start group hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1">Cuidar la cabeza</h5>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Mentón pegado al pecho, para que la nuca no toque el tatami o suelo.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Biomecánica Section Rediseñado */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-32 relative z-10">
          <div className="bg-[#f0ece3] rounded-[3rem] p-8 md:p-12 lg:p-20 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center overflow-hidden relative shadow-lg shadow-brand-navy/5">
            
            {/* Left Image Section */}
            <div className="w-full lg:w-[45%] relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
              {/* Brown pill backdrop */}
              <div className="absolute top-0 bottom-0 w-[65%] bg-[#b5a395] rounded-[4rem] z-0 left-1/2 -translate-x-1/2"></div>
              {/* Foreground Image */}
              <div className="relative z-10 w-[85%] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-[#f0ece3]">
                 <img 
                   src="/assets/portada_01.jpg" 
                   alt="Judo Biomechanics" 
                   className="w-full h-full object-cover"
                 />
              </div>
            </div>

            {/* Right Text Section */}
            <div className="w-full lg:w-[55%] text-[#2c323a] z-10 py-6">
              <h2 className="text-5xl lg:text-6xl font-serif font-black mb-2 tracking-tight text-[#1a1f26]">Estabilidad y Equilibrio</h2>
              <p className="text-xl italic text-[#6a7280] mb-6 font-serif">Biomecánica del Judo</p>
              
              <div className="mb-8">
                <span className="inline-flex items-center justify-center bg-[#fac2c2] text-[#d34545] px-4 py-1.5 rounded-full text-sm font-bold tracking-wide">
                  Fundamentales
                </span>
              </div>

              <div className="space-y-6 text-[#5b6471] leading-relaxed text-justify text-base lg:text-lg mb-12">
                <p>
                  <strong className="text-[#1a1f26] font-black">Estabilidad:</strong> Es la conservación del equilibrio estático, y la recuperación del equilibrio dinámico de las posiciones del cuerpo en el espacio.
                </p>
                <p>
                  <strong className="text-[#1a1f26] font-black">Equilibrio:</strong> Es la capacidad de mantener la estabilidad de un cuerpo, y considera dos componentes básicos a nivel humano:
                </p>
                <ul className="list-none space-y-4 ml-0">
                  <li className="flex gap-4">
                    <span className="text-[#d34545] font-bold mt-1">a)</span>
                    <span><strong className="text-[#1a1f26]">Estático:</strong> Es la capacidad de mantener la estabilidad del cuerpo desde las posturas estáticas. Para los judocas son las posiciones <span className="italic">Shizen tai</span> y <span className="italic">Jigo tai</span>.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#d34545] font-bold mt-1">b)</span>
                    <span><strong className="text-[#1a1f26]">Dinámico:</strong> Es la capacidad de mantener la estabilidad modificando la posición en el espacio. Ej: <span className="italic">tsuri ashi</span>, <span className="italic">Ayumi ashi</span> y <span className="italic">Tsugi ashi</span> en 8 direcciones.</span>
                  </li>
                </ul>
              </div>

              {/* Stats Row */}
              <div className="pt-8 border-t border-[#d8d0c5] grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <p className="text-xl lg:text-2xl font-black text-[#1a1f26] mb-1">Shizen tai</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#8a92a3] font-bold">Estático</p>
                </div>
                <div>
                  <p className="text-xl lg:text-2xl font-black text-[#1a1f26] mb-1">Jigo tai</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#8a92a3] font-bold">Defensivo</p>
                </div>
                <div>
                  <p className="text-xl lg:text-2xl font-black text-[#1a1f26] mb-1">Ayumi ashi</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#8a92a3] font-bold">Dinámico</p>
                </div>
                <div>
                  <p className="text-xl lg:text-2xl font-black text-[#1a1f26] mb-1">Tsugi ashi</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#8a92a3] font-bold">Dinámico</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Conceptos Adicionales UI (Fuego-style Minimalist Design) */}
        <div className="w-full flex flex-col items-center">
          
          {/* Row 1: Formas de Practica */}
          <div className="w-full bg-white py-24 lg:py-32 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16">
               <div className="w-full md:w-1/2 relative flex justify-center">
                 {/* Abstract Graphic - Torii (Dojo/Formas) */}
                 <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full max-w-[300px] text-[#2c323a]">
                    <path d="M50 180 L 50 40 M150 180 L 150 40" />
                    <path d="M40 180 L 60 180 M140 180 L 160 180" />
                    <path d="M30 40 L 170 40" strokeWidth="4"/>
                    <path d="M20 55 L 180 55" />
                    <path d="M50 80 L 150 80" />
                    <path d="M100 55 L 100 80" />
                    <circle cx="100" cy="80" r="10" />
                    <path d="M100 80 L 100 100" opacity="0.5"/>
                    <path d="M20 120 C 60 90, 80 180, 100 140 C 120 100, 160 190, 180 120" strokeDasharray="5 5" opacity="0.3" strokeWidth="1" />
                 </svg>
                 {/* Orange Dots */}
                 <div className="absolute top-10 right-10 w-3 h-3 bg-[#fc654c] rounded-full"></div>
                 <div className="absolute top-24 left-10 w-2 h-2 bg-[#fc654c] rounded-full"></div>
                 <div className="absolute bottom-10 right-20 w-4 h-4 bg-[#fc654c] rounded-full"></div>
               </div>
               <div className="w-full md:w-1/3 flex flex-col items-center text-center text-[#1a1f26]">
                 <h2 className="text-2xl md:text-3xl font-sans font-bold mb-4 uppercase tracking-[0.2em]">Formas de Práctica</h2>
                 <p className="text-[#6a7280] mb-10 leading-relaxed font-sans text-sm">
                   <strong className="text-[#2c323a] text-base mb-1 block">Tandoku renshu:</strong> Práctica solo.<br/><br/>
                   <strong className="text-[#2c323a] text-base mb-1 block">Sotai Renshu:</strong> Práctica con compañera (o, os).
                 </p>
               </div>
            </div>
          </div>

          {/* Row 2: Kumikatas */}
          <div className="w-full bg-[#18181b] py-24 lg:py-32 relative overflow-hidden text-white">
            <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-16">
               <div className="w-full md:w-1/3 flex flex-col items-center text-center">
                 <h2 className="text-2xl md:text-3xl font-sans font-bold mb-4 uppercase tracking-[0.2em]">Kumikatas</h2>
                 <p className="text-gray-400 mb-10 leading-relaxed font-sans text-sm">
                   <strong className="text-white text-base mb-1 block">Tsurite:</strong> Agarre que tiene el fundamento de proximidad del uke.<br/><br/>
                   <strong className="text-white text-base mb-1 block">Hikite:</strong> Agarre que tiene principalmente la responsabilidad de llevar la dirección de la técnica.
                 </p>
               </div>
               <div className="w-full md:w-1/2 relative flex justify-center">
                 {/* Abstract Graphic - Obi (Agarres/Grips) */}
                 <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full max-w-[300px] text-white">
                    <path d="M20 100 Q 100 70, 180 100" opacity="0.5"/>
                    <path d="M20 110 Q 100 130, 180 110" opacity="0.5"/>
                    <path d="M80 90 L 120 90 L 110 120 L 90 120 Z" strokeWidth="3" />
                    <path d="M40 100 Q 80 100, 80 90" />
                    <path d="M160 100 Q 120 100, 120 90" />
                    <path d="M90 120 Q 80 160, 50 180" />
                    <path d="M100 120 Q 95 150, 75 170" opacity="0.5" />
                    <path d="M110 120 Q 120 160, 150 180" />
                    <path d="M120 120 Q 125 150, 145 170" opacity="0.5" />
                 </svg>
                 {/* Orange Dots */}
                 <div className="absolute top-0 right-1/4 w-3 h-3 bg-[#fc654c] rounded-full"></div>
                 <div className="absolute top-10 right-10 w-2 h-2 bg-[#fc654c] rounded-full"></div>
                 <div className="absolute top-16 right-[-10px] w-4 h-4 bg-[#fc654c] rounded-full"></div>
                 <div className="absolute bottom-20 left-10 w-3 h-3 bg-[#fc654c] rounded-full"></div>
               </div>
            </div>
          </div>

          {/* Row 3: Roles */}
          <div className="w-full bg-white py-24 lg:py-32 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16">
               <div className="w-full md:w-1/2 relative flex justify-center">
                 {/* Abstract Graphic - Enso Yin-Yang (Tori & Uke) */}
                 <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full max-w-[300px] text-[#2c323a]">
                    <path d="M100 20 A 80 80 0 1 1 95 20" strokeDasharray="30 5" strokeWidth="3" />
                    <path d="M100 25 A 75 75 0 1 1 98 25" opacity="0.5" />
                    <path d="M100 40 C 130 40, 130 100, 100 100 C 70 100, 70 160, 100 160" />
                    <circle cx="100" cy="70" r="10" />
                    <circle cx="100" cy="130" r="10" fill="currentColor" />
                 </svg>
                 <div className="absolute -top-10 left-1/4 w-3 h-3 bg-[#fc654c] rounded-full"></div>
                 <div className="absolute -top-4 left-1/5 w-2 h-2 bg-[#fc654c] rounded-full"></div>
                 <div className="absolute bottom-1/4 right-10 w-2 h-2 bg-[#fc654c] rounded-full"></div>
               </div>
               <div className="w-full md:w-1/3 flex flex-col items-center text-center text-[#1a1f26]">
                 <h2 className="text-2xl md:text-3xl font-sans font-bold mb-4 uppercase tracking-[0.2em] whitespace-nowrap">Tori & Uke</h2>
                 <p className="text-[#6a7280] mb-10 leading-relaxed font-sans text-sm">
                   <strong className="text-[#2c323a] text-base mb-1 block">Tori:</strong> Persona quien realiza una acción o técnica.<br/><br/>
                   <strong className="text-[#2c323a] text-base mb-1 block">Uke:</strong> Persona quien ayuda o recibe una técnica.
                 </p>
               </div>
            </div>
          </div>

          {/* Row 4: Waza */}
          <div className="w-full bg-[#18181b] py-24 lg:py-32 relative overflow-hidden text-white">
            <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-16">
               <div className="w-full md:w-1/3 flex flex-col items-center text-center">
                 <h2 className="text-2xl md:text-3xl font-sans font-bold mb-4 uppercase tracking-[0.2em]">Waza</h2>
                 <p className="text-gray-400 mb-10 leading-relaxed font-sans text-sm">
                   <strong className="text-white text-base mb-1 block">Tachi Waza:</strong> Técnicas desde posición parado o de pie.<br/><br/>
                   <strong className="text-white text-base mb-1 block">Nague waza:</strong> Técnicas de proyección.<br/><br/>
                   <strong className="text-white text-base mb-1 block">Katame waza:</strong> Técnicas de suelo.
                 </p>
               </div>
               <div className="w-full md:w-1/2 relative flex justify-center">
                 {/* Abstract Graphic - Fuji & Nague (Técnicas / Waza) */}
                 <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full max-w-[300px] text-white">
                    <path d="M20 160 Q 100 60, 100 60 Q 100 60, 180 160" strokeWidth="3"/>
                    <path d="M65 105 L 85 130 L 100 115 L 115 130 L 135 105" />
                    <path d="M10 180 L 190 180" />
                    <path d="M30 100 C 50 30, 150 30, 170 100" strokeDasharray="6 6"/>
                    <path d="M45 110 L 30 100 L 45 85" />
                    <path d="M120 70 L 160 70" opacity="0.6"/>
                    <path d="M140 80 L 170 80" opacity="0.4"/>
                    <path d="M40 80 L 70 80" opacity="0.6"/>
                 </svg>
                 <div className="absolute top-20 right-1/4 w-3 h-3 bg-[#fc654c] rounded-full"></div>
                 <div className="absolute top-12 right-[20%] w-4 h-4 bg-[#fc654c] rounded-full"></div>
                 <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-[#fc654c] rounded-full"></div>
               </div>
            </div>
          </div>

          {/* Row 5: Estructura */}
          <div className="w-full bg-white py-24 lg:py-32 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16">
               <div className="w-full md:w-1/2 relative flex justify-center">
                 {/* Abstract Graphic - Bamboo Structure (Kuzushi/Tsukuri/Kake) */}
                 <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full max-w-[300px] text-[#2c323a]">
                    <path d="M60 180 L 60 20 M55 180 L 55 20" />
                    <path d="M50 40 L 65 40 M50 80 L 65 80 M50 120 L 65 120 M50 160 L 65 160" />
                    <path d="M100 180 L 100 40 M95 180 L 95 40" opacity="0.8"/>
                    <path d="M90 60 L 105 60 M90 100 L 105 100 M90 140 L 105 140" opacity="0.8"/>
                    <path d="M140 180 L 140 60 M135 180 L 135 60" opacity="0.6"/>
                    <path d="M130 80 L 145 80 M130 120 L 145 120 M130 160 L 145 160" opacity="0.6"/>
                    <path d="M60 40 Q 80 50, 90 80" />
                    <path d="M60 80 Q 80 90, 85 110" />
                    <path d="M100 60 Q 120 70, 130 100" />
                    <path d="M100 100 Q 120 110, 125 130" opacity="0.8"/>
                    <path d="M140 80 Q 160 90, 170 120" opacity="0.6"/>
                    <path d="M140 120 Q 160 130, 165 150" opacity="0.6"/>
                 </svg>
                 <div className="absolute top-0 right-1/4 w-3 h-3 bg-[#fc654c] rounded-full"></div>
                 <div className="absolute top-10 right-1/3 w-2 h-2 bg-[#fc654c] rounded-full"></div>
                 <div className="absolute bottom-4 left-10 w-4 h-4 bg-[#fc654c] rounded-full"></div>
               </div>
               <div className="w-full md:w-1/3 flex flex-col items-center text-center text-[#1a1f26]">
                 <h2 className="text-2xl md:text-3xl font-sans font-bold mb-4 uppercase tracking-[0.2em] whitespace-nowrap">Tachi o Nague Waza</h2>
                 <p className="text-[#6a7280] mb-10 leading-relaxed font-sans text-sm">
                   <strong className="text-[#2c323a] text-base mb-1 block">Kusushi:</strong> Desequilibrio.<br/><br/>
                   <strong className="text-[#2c323a] text-base mb-1 block">Tsukurei:</strong> Preparación de la técnica.<br/><br/>
                   <strong className="text-[#2c323a] text-base mb-1 block">Kake:</strong> Proyección.
                 </p>
               </div>
            </div>
          </div>
        </div>

        {/* Happo No Kuzushi (Hafan-style Design) */}
        <div className="w-full bg-[#f8f6f0] py-32 relative overflow-hidden text-[#1a1f26]">
          {/* Header */}
          <div className="text-center mb-32 relative z-10 flex flex-col items-center">
            <h3 className="text-sm font-sans font-bold tracking-[0.4em] text-[#8c8273] mb-4 uppercase">Los 8 Desequilibrios Básicos</h3>
            <h2 className="text-4xl md:text-6xl font-serif font-black tracking-widest uppercase">
              Happo No Kuzushi
            </h2>
          </div>

          <div className="max-w-[1000px] mx-auto px-6 flex flex-col gap-32">
            
            {/* Story 1: Mae & Ushiro */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 relative">
              
              {/* Decorative Ink Drops */}
              <div className="absolute top-0 left-10 w-24 h-24 opacity-20 pointer-events-none text-[#5c554c]">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="20" cy="20" r="4" />
                  <circle cx="35" cy="15" r="2" />
                  <circle cx="15" cy="40" r="1.5" />
                  <circle cx="80" cy="80" r="1" />
                </svg>
              </div>

              {/* Text Content */}
              <div className="w-full max-w-2xl text-center flex flex-col items-center justify-center">
                <h3 className="text-2xl md:text-3xl font-sans font-black mb-4 uppercase tracking-widest text-[#1a1f26]">Frente y Atrás</h3>
                <p className="text-[#6c675e] font-serif text-sm md:text-base leading-relaxed mb-6 italic">
                  Ejes de desequilibrio primarios en línea directa y sagital. Base fundamental para técnicas como Seoi Nage u O Soto Gari.
                </p>
                <ul className="text-[#8c8273] font-sans text-sm md:text-base leading-relaxed space-y-3 mb-8">
                   <li><strong className="text-[#1a1f26]">Mae-Kuzushi:</strong> Desequilibrio directo hacia adelante.</li>
                   <li><strong className="text-[#1a1f26]">Ushiro-Kuzushi:</strong> Desequilibrio directo hacia atrás.</li>
                </ul>
              </div>
            </div>

            {/* Story 2: Yoko */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 md:gap-24 relative">
              <div className="absolute top-20 right-0 w-32 h-32 opacity-10 pointer-events-none text-[#5c554c]">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="50" cy="50" r="3" />
                  <circle cx="70" cy="20" r="1.5" />
                  <circle cx="20" cy="80" r="2" />
                </svg>
              </div>

              <div className="w-full max-w-2xl text-center flex flex-col items-center justify-center">
                <h3 className="text-2xl md:text-3xl font-sans font-black mb-4 uppercase tracking-widest text-[#1a1f26]">Laterales (Yoko)</h3>
                <p className="text-[#6c675e] font-serif text-sm md:text-base leading-relaxed mb-6 italic">
                  Ejes de desequilibrio en el plano transversal. Esencial para técnicas de cadera y proyecciones de sacrificio.
                </p>
                <ul className="text-[#8c8273] font-sans text-sm md:text-base leading-relaxed space-y-3 mb-8">
                   <li><strong className="text-[#1a1f26]">Migi-Kuzushi:</strong> Hacia la derecha del Uke.</li>
                   <li><strong className="text-[#1a1f26]">Hidari-Kuzushi:</strong> Hacia la izquierda del Uke.</li>
                </ul>
              </div>
            </div>

            {/* Story 3: Diagonals */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 relative">
              <div className="absolute bottom-0 right-1/4 w-32 h-32 opacity-15 pointer-events-none text-[#5c554c]">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="20" cy="50" r="2.5" />
                  <circle cx="40" cy="80" r="1.5" />
                  <circle cx="80" cy="20" r="2" />
                </svg>
              </div>

              <div className="w-full max-w-2xl text-center flex flex-col items-center justify-center">
                <h3 className="text-2xl md:text-3xl font-sans font-black mb-4 uppercase tracking-widest text-[#1a1f26]">Diagonales (Sumi)</h3>
                <p className="text-[#6c675e] font-serif text-sm md:text-base leading-relaxed mb-6 italic">
                  Combinación de vectores. Proporcionan el máximo desequilibrio con el menor esfuerzo, al comprometer múltiples ejes de la base.
                </p>
                <ul className="text-[#8c8273] font-sans text-sm md:text-base leading-relaxed space-y-3 mb-8">
                   <li><strong className="text-[#1a1f26]">Mae-Migi & Mae-Hidari:</strong> Diagonales delanteras (5 y 6).</li>
                   <li><strong className="text-[#1a1f26]">Ushiro-Migi & Ushiro-Hidari:</strong> Diagonales traseras (7 y 8).</li>
                </ul>
              </div>
            </div>

            {/* Video Section */}
            <div className="mt-20 md:mt-32 flex flex-col items-center relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-4xl h-[120%] bg-[#e3ded5] rounded-[40%_60%_50%_50%/50%_50%_60%_40%] mix-blend-multiply opacity-50 blur-2xl animate-[spin_30s_linear_infinite]"></div>
              
              <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
                <div className="mb-10 flex items-center justify-center gap-4 text-[#8c8273]">
                  <div className="w-16 h-px bg-[#d1cbc0]"></div>
                  <span className="font-sans text-xs font-bold tracking-[0.3em] uppercase">Demostración Visual</span>
                  <div className="w-16 h-px bg-[#d1cbc0]"></div>
                </div>
                
                <div className="w-full aspect-video p-3 md:p-6 bg-white/80 backdrop-blur-sm rounded-3xl md:rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative border border-[#e3ded5]">
                  {/* Decorative corners */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#1a1f26] rounded-tl-[10px] opacity-20"></div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-[#1a1f26] rounded-tr-[10px] opacity-20"></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-[#1a1f26] rounded-bl-[10px] opacity-20"></div>
                  <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#1a1f26] rounded-br-[10px] opacity-20"></div>
                  
                  {/* Inner masking for video */}
                  <div className="w-full h-full rounded-2xl md:rounded-[1.5rem] overflow-hidden bg-black/5">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/S-ABLJhWB0o"
                      title="Happo No Kuzushi Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Pillars of Character */}
        <div className="px-6 md:px-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-brand-navy/10 pt-20"
          >
            <div className="text-center mb-16">
              <h3 className="text-sm font-japanese tracking-[1em] text-brand-navy/30 uppercase">Pilares de Conducta</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {pillars.map((item) => (
                <div key={item.text} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-brand-navy/5 flex items-center justify-center mb-6 text-brand-red">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-japanese font-bold tracking-[0.3em] uppercase text-brand-navy/70">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Final Quote Section */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mt-32 text-center max-w-4xl mx-auto"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-[8px] font-japanese font-bold tracking-[0.4em] uppercase mb-12">
              La Visión de Jigoro Kano
            </div>
            <blockquote className="text-2xl md:text-4xl font-serif italic text-brand-navy/80 leading-snug">
              "No se trata de ser mejor que otro hombre, sino de ser mejor que tú mismo ayer."
            </blockquote>
            <div className="w-12 h-px bg-brand-navy/20 mx-auto my-12" />
          </motion.div>

          {/* Download Original File Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center max-w-2xl mx-auto pb-32"
          >
            <div className="p-8 md:p-12 rounded-3xl bg-[#f8f6f0] border border-[#e3ded5] flex flex-col items-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm border border-[#e3ded5]">
                <Download className="w-6 h-6 text-[#1a1f26]" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-black text-[#1a1f26] mb-4">¿Quieres profundizar más?</h3>
              <p className="text-[#6c675e] font-sans text-sm md:text-base leading-relaxed mb-8 max-w-md">
                Descarga el archivo original con toda la información detallada sobre los principios, técnicas y la historia completa del Judo.
              </p>
              <button
                onClick={() => setIsInteractiveModalOpen(true)}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#1a1f26] text-white rounded-full font-sans text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#fc654c] transition-colors duration-300 group"
              >
                <span>Descargar PDF Original</span>
                <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Modal */}
      <AnimatePresence>
        {activeModal === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="w-full h-full relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <button
                  onClick={() => setActiveModal(null)}
                  className="p-2 text-brand-navy hover:text-brand-red transition-all duration-300 hover:scale-110"
                >
                  <X className="w-8 h-8" strokeWidth={1.5} />
                </button>
              </div>
              <div className="flex flex-col md:flex-row gap-8 flex-grow items-start justify-start p-6 md:p-12 max-w-7xl mx-auto h-full">
                <div className="w-full md:w-5/12 flex items-start justify-center">
                  <img
                    src="/assets/dojo.png"
                    alt="Dojo"
                    className="w-full h-auto object-contain max-w-md rounded-2xl shadow-sm"
                  />
                </div>
                <div className="flex flex-col gap-6 text-brand-navy w-full md:w-6/12 h-auto max-h-[80vh] overflow-y-auto pr-2 custom-scrollbar">
                  <h3 className="font-serif text-4xl font-black tracking-tight">Conceptos en el Dojo</h3>
                  <div className="space-y-4 w-full max-w-xl">
                    {[{
                      term: "REISHIKI",
                      desc: "Etiqueta del judo - Dojo, Partes y ubicación para el saludo inicial y final."
                    }, {
                      term: "KAMIZA",
                      desc: "Parte superior del Dojo - Pared donde se encuentra la foto de Jigoro Kano, en ese lugar se ubican los prof. y maestros, mirando al Kamiza. A la derecha el grado superior o el Sensei del Dojo (director o titular)."
                    }, {
                      term: "SHIMOZA",
                      desc: "Parte inferior del Dojo, es el ingreso del alumnado, se ubicarán en Seiza ordenados por grado, los grados más elevados más cerca de Kamiza y más cerca de Joseki."
                    }, {
                      term: "JOSEKI",
                      desc: "Lado derecho del Kamiza, lugar para los grados Dan."
                    }, {
                      term: "SHIMOSEKI",
                      desc: "Lado izquierdo del Kamiza, lugar para los grados Kyu."
                    }, {
                      term: "INVITADOS O AYUDANTES",
                      desc: "Se ubicarán de lado en la esquina superior de la fila mirando hacia Shimoseki y cerca del Joseki."
                    }].map(item => (
                      <div key={item.term} className="p-6 bg-gray-50 rounded-xl w-full border border-gray-100">
                        <p className="font-bold text-brand-navy mb-2 text-sm tracking-wide uppercase">{item.term}:</p>
                        <p className="text-sm text-brand-navy/70 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeModal === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="w-full h-full relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <button
                  onClick={() => setActiveModal(null)}
                  className="p-2 text-brand-navy hover:text-brand-red transition-all duration-300 hover:scale-110"
                >
                  <X className="w-8 h-8" strokeWidth={1.5} />
                </button>
              </div>
              <div className="flex flex-col gap-12 flex-grow items-center justify-start p-6 md:p-12 max-w-7xl mx-auto h-full overflow-y-auto custom-scrollbar w-full">
                <h3 className="font-serif text-4xl md:text-5xl font-black tracking-tight text-brand-navy mb-4">
                  El Judogi y los Cinturones
                </h3>

                <div className="flex flex-col md:flex-row gap-12 w-full items-start">
                  {/* Judogi Section with Image */}
                  <div className="flex-1 flex flex-col gap-6 w-full">
                    <h4 className="font-serif text-2xl font-bold text-brand-navy border-b border-brand-navy/10 pb-4">
                      Partes del Judogi
                    </h4>
                    <div className="bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center p-6 md:p-10 w-full mb-8">
                      <img 
                        src="/assets/uniforme.png" 
                        alt="Partes del Judogi" 
                        className="w-full h-auto max-h-[600px] object-contain mix-blend-multiply drop-shadow-xl" 
                      />
                    </div>
                  </div>

                  {/* Belts Section */}
                  <div className="flex-1 flex flex-col gap-6 w-full">
                    <h4 className="font-serif text-2xl font-bold text-brand-navy border-b border-brand-navy/10 pb-4">
                      Los Grados (Kyu / Dan)
                    </h4>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4">
                      {[
                        { term: "6° Kyu", colorName: "Blanco", desc: "Pureza", color: "#ffffff", border: true },
                        { term: "5° Kyu", colorName: "Amarillo", desc: "Descubrimiento", color: "#FDE047" },
                        { term: "4° Kyu", colorName: "Naranja", desc: "Ilusión / Amor", color: "#F97316" },
                        { term: "3° Kyu", colorName: "Verde", desc: "Esperanza / Fe", color: "#22C55E" },
                        { term: "2° Kyu", colorName: "Azul", desc: "Idealismo", color: "#3B82F6" },
                        { term: "1° Kyu", colorName: "Marrón", desc: "Camino del conocimiento", color: "#8B4513" },
                        { term: "1° al 6° Dan", colorName: "Negro", desc: "Grados Dan", color: "#000000" },
                        { term: "6° al 8° Dan", colorName: "Rojo y Blanco", desc: "Grados Superiores", color: "repeating-linear-gradient(45deg, #EF4444 0px, #EF4444 10px, #ffffff 10px, #ffffff 20px)", border: true },
                        { term: "9° y 10° Dan", colorName: "Rojo", desc: "Grados Máximos", color: "#EF4444" }
                      ].map(item => (
                        <div key={item.term} className="flex items-center gap-4 border-b border-gray-200 last:border-0 pb-3 last:pb-0">
                          <div 
                            className={`w-6 h-6 rounded-full flex-shrink-0 ${item.border ? 'border border-gray-300' : ''}`}
                            style={{ background: item.color }}
                          />
                          <div className="flex flex-col">
                            <span className="font-bold text-brand-navy text-sm uppercase tracking-wider">{item.term} - {item.colorName}</span>
                            <span className="text-brand-navy/70 text-sm">{item.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeModal === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="w-full h-full relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <button
                  onClick={() => setActiveModal(null)}
                  className="p-2 text-brand-navy hover:text-brand-red transition-all duration-300 hover:scale-110"
                >
                  <X className="w-8 h-8" strokeWidth={1.5} />
                </button>
              </div>
              <div className="flex flex-col gap-8 flex-grow items-center justify-start p-6 md:p-12 max-w-7xl mx-auto h-full overflow-y-auto custom-scrollbar w-full">
                
                <div className="text-center w-full max-w-4xl mb-4">
                  <span className="text-[10px] font-japanese tracking-[0.5em] font-bold text-brand-red uppercase mb-4 block">Rei</span>
                  <h3 className="font-serif text-4xl md:text-5xl font-black tracking-tight text-brand-navy mb-6">
                    Saludos
                  </h3>
                  <p className="text-lg text-brand-navy/80 leading-relaxed text-justify md:text-center">
                    En judo el saludo se traduce a la palabra <strong className="font-black text-brand-navy">Rei</strong>, lo que nos hace considerar no solo que este sea un acto inconsciente o repetido, pues estos simbolizan o representan el amor y respeto. Desde una concepción cultural, más simbólica y reflexiva, es que a través de estos buenos modales es que la vida humana se embellece y se establecen las relaciones sociales. Ahora bien, para nuestra práctica cotidiana existen dos tipos de saludos:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl mb-8">
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-serif text-2xl font-bold text-brand-navy border-b border-brand-navy/10 pb-4">
                      Saludo arrodillado o sentado <br className="hidden md:block"/><span className="text-brand-red text-xl">(Za rei)</span>
                    </h4>
                    <p className="text-brand-navy/80 leading-relaxed text-sm text-justify">
                      Para esto el practicante desde una posición arrodillado, se sienta en los glúteos sobre las plantas de los pies o talones, con las rodillas separadas dos puños y columna o tren superior erguida, posteriormente deberá realizar una reverencia o inclinación que no permita despegar el glúteo de los pies, estos últimos debe estar los tobillos en dorsiflexión, separados sus talones y el dedo pulgar del pie derecho sobre el izquierdo.
                    </p>
                    <p className="text-brand-navy/80 leading-relaxed text-sm text-justify">
                      Las palmas de las manos descansan en esta posición inicial en los muslos anteriores, y al realizar la reverencia o inclinación con el tronco, la cabeza frontalmente se dispone a una distancia de 30 cm con las manos, estas últimas dibujaran una figura de triángulo equilátero.
                    </p>
                    <div className="mt-2 p-4 bg-brand-navy/5 rounded-xl">
                      <p className="text-xs text-brand-navy/60 italic text-justify">
                        * Para algunos profesores o autores, esta forma representa el arquetipo educativo de Jigoro Kano, de Ética, Moral y Educación física.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-serif text-2xl font-bold text-brand-navy border-b border-brand-navy/10 pb-4">
                      Saludo de Pie <br className="hidden md:block"/><span className="text-brand-red text-xl">(Ritsu Rei)</span>
                    </h4>
                    <p className="text-brand-navy/80 leading-relaxed text-sm text-justify">
                      Para esto el practicante en primera instancia se dispone a dos metros con una posición <span className="italic font-medium">shizen tai</span>. Donde la diferencia es que los talones de los pies se juntaran y la punta de los pies están separadas (posición <span className="italic font-medium">chokoritsu</span>). Las manos se encuentran de forma natural a los lados del cuerpo cuya palma solamente tendrá contacto con el cuerpo.
                    </p>
                    <p className="text-brand-navy/80 leading-relaxed text-sm text-justify">
                      Posteriormente se inclinará el tronco hacia adelante en unos treinta grados, las manos pasan naturalmente hacia la parte anterior del muslo, y el practicante mirará siempre a su oponente a los ojos, en el caso de ser una persona con más grado o figura de respeto cultural no deberá haber contacto visual (Ej; Shihan, Sensei).
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center bg-white border border-gray-200 p-8 md:p-12 rounded-3xl w-full max-w-6xl shadow-sm mb-12">
                  <div className="flex-1 flex flex-col gap-6">
                    <div className="flex items-center gap-4 mb-2">
                       <Shield className="w-8 h-8 text-brand-red" />
                       <h4 className="font-serif text-3xl font-bold text-brand-navy">
                         ¿Cuándo se debe saludar?
                       </h4>
                    </div>
                    <ul className="space-y-4">
                      {[
                        "Al entrar y salir del dojo o tatami.",
                        "Al comenzar y/o terminar una clase.",
                        "Al profesor.",
                        "Antes y después de una práctica compartida, o al comenzar y/o terminar un randori (lucha de entrenamiento) o en un Shiai (lucha de competencia)."
                      ].map((item, i) => (
                         <li key={i} className="flex items-start gap-4">
                           <div className="w-2 h-2 rounded-full bg-brand-red mt-2 shrink-0 shadow-[0_0_0_4px_rgba(239,68,68,0.1)]" />
                           <span className="text-brand-navy/80 font-medium leading-relaxed">{item}</span>
                         </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full md:w-5/12 flex flex-col gap-6 justify-center mt-6 md:mt-0">
                    <img src="/assets/rei_saludos.jpg" alt="Saludos y Reverencias" className="w-full h-auto object-contain max-h-[500px] mix-blend-multiply opacity-90" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}

        {activeModal === 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="w-full h-full relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <button
                  onClick={() => setActiveModal(null)}
                  className="p-2 text-brand-navy hover:text-brand-red transition-all duration-300 hover:scale-110"
                >
                  <X className="w-8 h-8" strokeWidth={1.5} />
                </button>
              </div>
              <div className="flex flex-col gap-8 flex-grow items-center justify-start p-6 md:p-12 max-w-7xl mx-auto h-full overflow-y-auto custom-scrollbar w-full">
                
                <div className="text-center w-full max-w-4xl mb-4">
                  <h3 className="font-serif text-4xl md:text-5xl font-black tracking-tight text-brand-navy mb-6">
                    Direcciones y Posturas
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl mb-12">
                  {/* Direcciones Básicas */}
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-6 border-b border-brand-navy/10 pb-4">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-red">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </div>
                      <h4 className="font-serif text-2xl font-bold text-brand-navy">
                        Direcciones Básicas
                      </h4>
                    </div>
                    <ul className="space-y-4">
                      {[
                        { term: "Mae", desc: "Adelante o al frente." },
                        { term: "Migi", desc: "Derecha." },
                        { term: "Yoko", desc: "Costado, lado o lateral." },
                        { term: "Hidari", desc: "Izquierda." },
                        { term: "Ushiro", desc: "Atrás." }
                      ].map((item, i) => (
                        <li key={i} className="flex gap-4 p-3 bg-white rounded-xl border border-gray-100 relative overflow-hidden group">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="flex-1">
                            <span className="font-black text-brand-navy text-lg">{item.term}:</span>
                            <span className="text-brand-navy/80 ml-2">{item.desc}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Posiciones o posturas */}
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-6 border-b border-brand-navy/10 pb-4">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-red">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
                      </div>
                      <h4 className="font-serif text-2xl font-bold text-brand-navy">
                        Posiciones o Posturas <span className="text-brand-red text-xl">(Shisen)</span>
                      </h4>
                    </div>
                    <div className="space-y-6">
                      <div className="bg-white rounded-xl p-5 border border-gray-100 flex flex-col gap-2 relative overflow-hidden group">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-navy opacity-50" />
                        <h5 className="font-black text-brand-navy text-lg border-b border-gray-100 pb-2">Shizen Tai</h5>
                        <p className="text-brand-navy/80 text-sm leading-relaxed text-justify">
                          <strong className="text-brand-navy font-bold">Posición Natural.</strong> Mantener los pies dentro de los anchos de los hombros, con cadera y rodillas flexionadas, sin inclinar el tronco.
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-xl p-5 border border-gray-100 flex flex-col gap-2 relative overflow-hidden group">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-red opacity-50" />
                        <h5 className="font-black text-brand-navy text-lg border-b border-gray-100 pb-2">Jigotai</h5>
                        <p className="text-brand-navy/80 text-sm leading-relaxed text-justify">
                          <strong className="text-brand-navy font-bold">Posición Defensiva.</strong> Mantener los pies separados que permitan una flexión mayor de rodillas y cadera que Shizen tai, buscando donde se logre mayor estabilidad (Separación pie entre 70 a 90 cm).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}

        {activeModal === 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="w-full h-full relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <button
                  onClick={() => setActiveModal(null)}
                  className="p-2 text-brand-navy hover:text-brand-red transition-all duration-300 hover:scale-110"
                >
                  <X className="w-8 h-8" strokeWidth={1.5} />
                </button>
              </div>
              <div className="flex flex-col gap-8 flex-grow items-center justify-start p-6 md:p-12 max-w-7xl mx-auto h-full overflow-y-auto custom-scrollbar w-full">
                
                <div className="text-center w-full max-w-4xl mb-4">
                  <h3 className="font-serif text-4xl md:text-5xl font-black tracking-tight text-brand-navy mb-6">
                    Desplazamientos <span className="text-brand-red text-3xl md:text-4xl">(Shintai)</span>
                  </h3>
                  <p className="text-lg text-brand-navy/80 leading-relaxed text-justify md:text-center">
                    <strong className="font-black text-brand-navy">Forma de caminar de judo.</strong>
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl mb-12">
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-6 border-b border-brand-navy/10 pb-4">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-red">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                      </div>
                      <h4 className="font-serif text-2xl font-bold text-brand-navy">
                        Suri Ashi
                      </h4>
                    </div>
                    <p className="text-brand-navy/80 leading-relaxed text-sm text-justify">
                      Forma de desplazarse de un punto a otro del tatami, levantando ligeramente los talones, sin despegar en su totalidad los dedos de los pies.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-6 border-b border-brand-navy/10 pb-4">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-red">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 21V9a3 3 0 0 1 3-3h7"/><path d="m16 2-4 4 4 4"/><path d="M10 3v4"/><path d="M3 14h7"/><path d="m6 11 4 3-4 3"/></svg>
                      </div>
                      <h4 className="font-serif text-2xl font-bold text-brand-navy">
                        Tipos de desplazamientos
                      </h4>
                    </div>
                    <ul className="space-y-4">
                      {[
                        { term: "Ayumi ashi", desc: "Caminar o desplazarse en suri ashi." },
                        { term: "Tsugi Ashi", desc: "Siguiendo un pie al otro, sin rebasar el pie que va a delante del otro en cada movimiento." },
                        { term: "Tai sabaki", desc: "Desplazamientos en círculos." }
                      ].map((item, i) => (
                        <li key={i} className="flex gap-4 p-3 bg-white rounded-xl border border-gray-100 relative overflow-hidden group">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="flex-1">
                            <span className="font-black text-brand-navy text-lg">{item.term}:</span>
                            <span className="text-brand-navy/80 ml-2 text-sm">{item.desc}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Video Section */}
                <div className="w-full max-w-7xl grid md:grid-cols-3 gap-8 mb-12">
                  <div className="flex flex-col gap-6 items-center">
                    <div className="flex items-center gap-4 border-b border-brand-navy/10 pb-4 w-full justify-center">
                      <h4 className="font-serif text-2xl font-bold text-brand-navy">
                        Ayumi Ashi
                      </h4>
                    </div>
                    <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-black">
                      <iframe 
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/n5jhPKeZD2U" 
                        title="Ayumi Ashi" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 items-center">
                    <div className="flex items-center gap-4 border-b border-brand-navy/10 pb-4 w-full justify-center">
                      <h4 className="font-serif text-2xl font-bold text-brand-navy">
                        Tsugi Ashi
                      </h4>
                    </div>
                    <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-black">
                      <iframe 
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/dYJEKG23wLQ" 
                        title="Tsugi Ashi" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 items-center">
                    <div className="flex items-center gap-4 border-b border-brand-navy/10 pb-4 w-full justify-center">
                      <h4 className="font-serif text-2xl font-bold text-brand-navy">
                        Tai Sabaki
                      </h4>
                    </div>
                    <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-black">
                      <iframe 
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/9g3emg_WZAw" 
                        title="Tai Sabaki" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Video Modal */}
        {activeUkemiVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/90 backdrop-blur-sm flex py-10 flex-col items-center justify-center p-4"
            onClick={() => setActiveUkemiVideo(null)}
          >
            <button
              onClick={() => setActiveUkemiVideo(null)}
              className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-all duration-300 hover:scale-110 z-[120]"
            >
              <X className="w-8 h-8" strokeWidth={1.5} />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black relative z-[110]"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${activeUkemiVideo}?autoplay=1`} 
                title="YouTube Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
        {isInteractiveModalOpen && (
          <InteractiveModal onClose={() => setIsInteractiveModalOpen(false)} />
        )}
      </AnimatePresence>

    </div>
  );
}
