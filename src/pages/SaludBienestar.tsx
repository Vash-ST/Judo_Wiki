import { motion } from 'motion/react';
import { ArrowLeft, ShieldCheck, Brain, Dumbbell } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SaludBienestar() {
  const pillars = [
    {
      title: "Recomendación OMS",
      jp: "世界保健機関",
      desc: "Directrices mundiales sobre la actividad física para la salud y la prevención de enfermedades.",
      icon: <ShieldCheck className="w-6 h-6" />,
      img: "/assets/logo_uc.png.jpg",
      path: "/recomendacion-oms"
    },
    {
      title: "Factores Protectores de la Salud",
      jp: "精神的幸福",
      desc: "Guía integral con herramientas y estrategias para fortalecer la salud y prevenir riesgos en la comunidad universitaria.",
      icon: <Brain className="w-6 h-6" />,
      img: "/assets/tarjeta.png",
      path: "/factores-salud"
    },
    {
      title: "Ejercicio y Deporte",
      jp: "健康、運動、スポーツ",
      desc: "Guía técnica sobre actividad física, entrenamiento y prevención de lesiones basada en estándares internacionales.",
      icon: <Dumbbell className="w-6 h-6" />,
      img: "/assets/tarjeta_3.jpg",
      path: "/guia-salud-deporte"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-brand-dark font-sans relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-[0.02]">
        <img 
          src="/assets/rei_saludos.jpg" 
          alt="Pattern"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* Space for the fixed Navbar */}
      <div className="h-24 md:h-32" />

      <main className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center max-w-2xl mx-auto">
             <motion.span 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="text-[11px] font-japanese font-bold tracking-[0.5em] text-brand-red uppercase block mb-4"
             >
               Jita Kyoei · Prosperidad Mutua
             </motion.span>
             <h2 className="text-4xl md:text-6xl font-serif font-black tracking-tight mb-8">Un equilibrio <span className="italic font-normal">integral.</span></h2>
             <p className="text-lg text-brand-dark/60 leading-relaxed font-traditional">
               En Uke Dojo, entendemos la salud no solo como la ausencia de enfermedad, sino como un estado de armonía completa entre el cuerpo, la mente y el espíritu.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div 
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex"
              >
                <Link 
                  to={pillar.path}
                  className="bg-white border border-black/5 p-8 flex flex-col relative group w-full cursor-pointer"
                >
                  <div className="absolute top-0 left-0 w-1 h-0 bg-brand-red group-hover:h-full transition-all duration-700" />
                  <div className="mb-12 flex justify-between items-start">
                     <div className="p-3 bg-brand-light-gray/50 text-brand-navy">
                        {pillar.icon}
                     </div>
                     <span className="text-[10px] font-japanese font-bold text-brand-medium-gray tracking-widest uppercase">{pillar.jp}</span>
                  </div>
                  
                  <h3 className="text-2xl font-serif font-black mb-4 uppercase">{pillar.title}</h3>
                  <p className="text-sm text-brand-dark/60 leading-relaxed mb-8 flex-1 font-traditional">
                    {pillar.desc}
                  </p>
                  
                  <div className="aspect-[16/10] overflow-hidden bg-white flex items-center justify-center relative group-hover:bg-brand-light-gray transition-colors duration-700">
                    <img 
                      src={pillar.img} 
                      alt={pillar.title} 
                      className={`${pillar.img.includes('OMS') || pillar.img.includes('logo') ? 'max-w-[80%] max-h-[80%] object-contain' : 'w-full h-full object-cover'} group-hover:scale-110 transition-transform duration-1000`} 
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
