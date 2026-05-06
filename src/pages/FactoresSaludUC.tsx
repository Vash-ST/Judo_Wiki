import { motion } from 'motion/react';
import { 
  Brain, Heart, Moon, Users, Apple, Info, Mail, Phone, MapPin, 
  CheckCircle2, Wind, ShieldAlert, Coffee, Smartphone, Bed, 
  Droplets, GraduationCap, Scale, Globe, Download, ExternalLink,
  ShieldCheck, Zap, Activity
} from 'lucide-react';

export default function FactoresSaludUC() {
  const sections = [
    {
      id: "activity",
      title: "Actividad Física",
      jp: "身体活動",
      subtitle: "¡Cada movimiento cuenta!",
      icon: <Activity className="w-6 h-6 text-brand-red" />,
      desc: "La actividad física regular reduce el riesgo de cardiopatías, diabetes, hipertensión y depresión.",
      items: [
        "Beneficios: Mejora niveles de presión arterial, glicemia y colesterol.",
        "Bienestar: Libera el estrés y permite dormir mejor.",
        "Salud: Mejora la calidad respiratoria y la resistencia muscular.",
        "Acciones: Sube escaleras, pasea a tu perro, camina ágilmente.",
        "Integración: Anda en bicicleta como medio de transporte cotidiano."
      ],
      color: "border-brand-red"
    },
    {
      id: "asociatividad",
      title: "Asociatividad",
      jp: "提携",
      subtitle: "Colaboración y Comunidad",
      icon: <Users className="w-6 h-6 text-brand-navy" />,
      desc: "Colaboración y cooperación entre individuos para alcanzar objetivos comunes y redes de apoyo.",
      items: [
        "Pertenencia: Fomenta un sentido de comunidad y apoyo mutuo.",
        "Eficiencia: La colaboración aumenta la capacidad de producción.",
        "Costos: Reducción de gastos individuales al compartir recursos.",
        "Negociación: Un grupo unido tiene más poder y competitividad.",
        "Deporte: Desarrolla habilidades sociales y bienestar emocional."
      ],
      color: "border-brand-navy"
    },
    {
      id: "food",
      title: "Alimentación",
      jp: "食生活",
      subtitle: "Nutrición para el Aprendizaje",
      icon: <Apple className="w-6 h-6 text-brand-accent-blue" />,
      desc: "Una dieta equilibrada mejora la concentración, el rendimiento académico y previene enfermedades.",
      items: [
        "Hábitos: Disfruta tu alimentación sin culpa ni distracciones.",
        "Selección: Prefiere alimentos naturales y evita los procesados con sellos.",
        "Planificación: Organiza tu alimentación semanal y prefiere cocinar.",
        "Plato Saludable: Proteína (1/4), Cereales (1/4), Vegetales (1/2).",
        "Hidratación: Toma al menos 2 litros de agua al día (clave para estudiar)."
      ],
      color: "border-brand-accent-blue"
    },
    {
      id: "smoke-free",
      title: "Espacios Libres de Humo",
      jp: "煙のない空間",
      subtitle: "Compromiso Institucional",
      icon: <Wind className="w-6 h-6 text-brand-red" />,
      desc: "Protección contra los efectos nocivos del humo de segunda mano y fomento del bienestar.",
      items: [
        "Impacto: El humo daña a fumadores y no fumadores directamente.",
        "Tóxicos: El humo contiene más de 7,000 compuestos químicos nocivos.",
        "Normativa: Involucra a todos quienes trabajan, estudian y visitan los campus.",
        "Valores: Promovemos el cuidado del medio ambiente y la salud pública.",
        "Cifras: 1.3 millones mueren al año por causas atribuibles al tabaco pasivo."
      ],
      color: "border-brand-red"
    }
  ];

  const sleepHabits = [
    { text: "Dormir 8 horas con horario regular (fines de semana incluidos)." },
    { text: "Siestas de máximo 30 min y antes de las 18:00 hrs." },
    { text: "Ejercicio en el día para regular el patrón sueño-vigilia." },
    { text: "Cena ligera 2 horas antes de acostarte. Lácteos favorecen sueño." },
    { text: "Habitación cómoda, acogedora y ordenada (confort personal)." },
    { text: "Evita pantallas 1 hora antes de dormir (melatonina)." },
    { text: "Regula cafeína y evita alcohol tras las 17:00 hrs." },
    { text: "Utiliza la cama específicamente para dormir (asociación mental)." },
    { text: "Anota tus preocupaciones para vaciar la mente antes del descanso." },
    { text: "Usa relajación o agenda consejería individual: buendormir@uc.cl." }
  ];

  const portionsData = [
    { title: "Vegetales", desc: "Llenar 1/2 plato con verduras de hoja verde y otros vegetales.", icon: <Droplets className="w-4 h-4" /> },
    { title: "Carnes/Proteínas", desc: "Llenar 1/4 del plato con una porción saludable.", icon: <Heart className="w-4 h-4" /> },
    { title: "Cereales", desc: "Llenar no más de 1/4 del plato con granos y/o cereales.", icon: <CheckCircle2 className="w-4 h-4" /> },
    { title: "Mediciones", desc: "Usa la palma de la mano para la carne y el puño para pasta o cereales.", icon: <Scale className="w-4 h-4" /> }
  ];

  const supportNetworks = [
    { name: "Salud Mental Studentil (USM)", email: "saludmentalestudiantil@uc.cl", encargado: "Constanza Trejo" },
    { name: "Ansiedad y Estrés", email: "ansiedad@uc.cl", encargado: "Andrea Torres" },
    { name: "Prevención del Suicidio", email: "masopciones@uc.cl", encargado: "Diego Soto" },
    { name: "Autocuidado en Drogas", email: "padeu@uc.cl", encargado: "Gerardo Cabello" },
    { name: "Relaciones Saludables", email: "relacionessaludables@uc.cl", encargado: "Consuelo Achiardi" },
    { name: "Diversidad Sexual", email: "diversidad@uc.cl", encargado: "Pía Vallejo" },
    { name: "Adaptación a cambios", email: "adaptacionycambios@uc.cl", encargado: "Valentina Hughes" },
    { name: "Cuida tu Ánimo", email: "prevenciondepresion@uc.cl", encargado: "Bernardita Peralta" },
    { name: "Buen Dormir", email: "saludmentalestudiantil@uc.cl", encargado: "Lucas Bobadilla" },
    { name: "Derivación Asistida", email: "orientacion.social@uc.cl", encargado: "Priscila Castro" }
  ];

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-brand-dark font-sans relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-[0.02]">
        <img 
          src="https://images.unsplash.com/photo-1596700021651-7f8d689622ed?auto=format&fit=crop&q=80&w=2000" 
          alt="Pattern"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      <div className="h-24 md:h-32" />

      <main className="container mx-auto px-6 py-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/5 pb-12">
            <div className="max-w-3xl">
              <span className="text-[10px] font-japanese font-bold tracking-[0.5em] text-brand-red uppercase block mb-4">Manual de Bienestar Universitario</span>
              <h1 className="text-5xl md:text-8xl font-serif font-black uppercase tracking-tighter leading-[0.8] mb-8">
                Factores <br /> <span className="text-brand-navy">Protectores.</span>
              </h1>
              <p className="text-xl text-brand-dark/70 font-traditional leading-relaxed">
                Herramientas diseñadas por la Pontificia Universidad Católica de Chile para fortalecer la salud integral y la prevención de riesgos en la comunidad.
              </p>
            </div>
          </div>

          {/* Detailed Factors Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
            {sections.map((cat, idx) => (
              <motion.div 
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-white border-t-8 ${cat.color} p-10 shadow-sm flex flex-col`}
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 bg-brand-light-gray/20">
                    {cat.icon}
                  </div>
                  <span className="text-[10px] font-japanese font-bold text-brand-dark/20 tracking-[0.3em] uppercase">{cat.jp}</span>
                </div>
                
                <h3 className="text-3xl font-serif font-black uppercase tracking-tight mb-2">{cat.title}</h3>
                <p className="text-brand-red text-xs font-japanese font-bold tracking-widest uppercase mb-6">{cat.subtitle}</p>
                
                <p className="text-base text-brand-dark/70 font-traditional mb-10 leading-relaxed italic border-l-2 border-brand-light-gray pl-6">
                  {cat.desc}
                </p>

                <div className="space-y-4">
                  {cat.items.map((item, i) => (
                    <div key={i} className="flex gap-4 items-start group">
                      <CheckCircle2 className="w-4 h-4 text-brand-navy/30 group-hover:text-brand-red transition-colors mt-1 shrink-0" />
                      <p className="text-sm text-brand-dark/70 font-traditional leading-relaxed group-hover:text-brand-dark transition-colors">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Portions Detail - New Content from PDF */}
          <section className="mb-32">
            <h3 className="text-xs font-japanese font-bold tracking-[0.5em] text-brand-red uppercase mb-12 text-center">Plato Saludable y Porciones</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {portionsData.map((portion, i) => (
                <div key={i} className="bg-white p-8 border border-black/5 hover:border-brand-navy transition-colors">
                  <div className="mb-6 opacity-40">{portion.icon}</div>
                  <h4 className="font-serif font-black uppercase text-sm mb-4 tracking-wider">{portion.title}</h4>
                  <p className="text-xs font-traditional text-brand-dark/60 leading-relaxed">{portion.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sleep Habits Section */}
          <section className="bg-brand-navy p-12 md:p-24 text-white mb-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 pointer-events-none">
              <Moon className="w-64 h-64" />
            </div>
            
            <div className="relative z-10">
              <div className="max-w-2xl mb-16">
                <span className="text-[10px] font-japanese font-bold tracking-[0.5em] text-brand-red uppercase block mb-6">Salud Mental USM</span>
                <h3 className="text-4xl md:text-6xl font-serif font-black uppercase tracking-tight leading-none mb-4">
                  10 Hábitos <br /><span className="text-brand-accent-blue italic font-normal">Buen Dormir.</span>
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-x-20 gap-y-8">
                {sleepHabits.map((habit, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="w-8 h-8 border border-white/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-red group-hover:border-brand-red transition-all">
                      <span className="text-[11px] font-bold">{i + 1}</span>
                    </div>
                    <p className="text-sm font-traditional opacity-80 leading-relaxed group-hover:opacity-100">{habit.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Multi-Network and Contacts */}
          <div className="mb-32">
            <div className="flex items-center gap-6 mb-12">
              <div className="h-px flex-1 bg-black/5" />
              <h3 className="text-xs font-japanese font-bold tracking-[0.5em] text-brand-medium-gray uppercase">Redes de Apoyo y Contactos USM</h3>
              <div className="h-px flex-1 bg-black/5" />
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {supportNetworks.map((net, i) => (
                <div key={i} className="bg-white border border-black/5 p-6 hover:border-brand-red transition-all group">
                   <h4 className="font-serif font-black uppercase tracking-wider text-[11px] mb-3 truncate">{net.name}</h4>
                   <div className="space-y-3 opacity-60 group-hover:opacity-100 transition-opacity">
                      {net.encargado && (
                        <div className="flex items-center gap-2">
                          <Users className="w-3 h-3 text-brand-navy" />
                          <span className="text-[9px] font-traditional truncate">{net.encargado}</span>
                        </div>
                      )}
                      <a href={`mailto:${net.email}`} className="flex items-center gap-2 hover:text-brand-red transition-colors">
                        <Mail className="w-3 h-3 text-brand-navy" />
                        <span className="text-[9px] font-traditional truncate">{net.email}</span>
                      </a>
                   </div>
                </div>
              ))}
            </div>
          </div>

          {/* Central Call to Action */}
          <div className="bg-white border border-black/5 p-12 md:p-20 relative text-center">
            <h4 className="text-3xl font-serif font-black uppercase mb-4 tracking-tighter">Central de Bienestar</h4>
            <p className="text-brand-dark/50 font-traditional mb-12 max-w-xl mx-auto">
              Si necesitas apoyo, consulta o quieres profundizar en estos factores, utiliza los canales oficiales de la universidad.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-16 opacity-70">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-red" />
                <span className="text-xs font-traditional">9 5504 5700 opción 3</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-red" />
                <span className="text-xs font-traditional">agenda.saludybienestar.uc.cl</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="https://agenda.saludybienestar.uc.cl" 
                target="_blank" 
                rel="noreferrer"
                className="bg-brand-red text-white py-5 px-12 font-japanese font-bold tracking-[0.3em] uppercase text-xs hover:bg-brand-navy transition-all shadow-xl"
              >
                Agendar Consejería
              </a>
              <a 
                href="https://asuntosestudiantiles.uc.cl/images/Manual_Factores_Protectores_UC_2025.pdf" 
                target="_blank"
                rel="noreferrer"
                className="bg-brand-navy text-white py-5 px-12 font-japanese font-bold tracking-[0.3em] uppercase text-xs hover:bg-brand-red transition-all shadow-xl flex items-center justify-center gap-3"
              >
                <Download className="w-4 h-4" />
                Archivo Original PDF
              </a>
            </div>
          </div>

          <div className="text-center py-20 opacity-20">
            <p className="text-[9px] font-japanese tracking-[0.6em] uppercase">Pontificia Universidad Católica de Chile · Bienestar Estudiantil 2025</p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}


