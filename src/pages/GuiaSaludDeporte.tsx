import React from 'react';
import { motion } from 'motion/react';
import { 
  Activity, 
  Dumbbell, 
  Trophy, 
  HeartPulse, 
  Timer, 
  ShieldCheck, 
  BookOpen, 
  Download,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GuiaSaludDeporte() {
   const sections = [
    {
      title: "Actividad Física",
      icon: <Activity className="w-8 h-8 text-brand-red" />,
      jp: "身体活動",
      content: "Según la OMS, consiste en actividades recreativas, desplazamientos, tareas domésticas o juegos en el contexto diario.",
      points: [
        "Recomendación: 150 a 300 min semanales de actividad moderada.",
        "Alternativa: 75 a 150 min semanales de actividad vigorosa.",
        "Fortalecimiento: Realizar ejercicios musculares al menos 2 veces por semana.",
        "Impacto: Fundamental para adultos de 18 a 64 años."
      ]
    },
    {
      title: "Ejercicio",
      icon: <Dumbbell className="w-8 h-8 text-brand-navy" />,
      jp: "運動",
      content: "Actividad física planificada, estructurada y repetitiva con el fin de mejorar o mantener la forma física.",
      points: [
        "Tipos: Aeróbico y anaeróbico según el metabolismo.",
        "Contracción: Isométrico o isotónico.",
        "Beneficios: Fortalece la psiquis, reduce ansiedad y estrés.",
        "Cerebro: Aumenta la circulación y mejora la alerta mental."
      ]
    },
    {
      title: "Deporte",
      icon: <Trophy className="w-8 h-8 text-brand-accent-blue" />,
      jp: "スポーツ",
      content: "Actividad física sujeta a normas, competitiva, que busca mejorar la condición física y habilidades.",
      points: [
        "Derecho Humano: Según el COI, debe ser sin discriminación.",
        "Valores: Espíritu de amistad, solidaridad y juego limpio.",
        "Integral: Requiere equipamiento e inteligencia estratégica.",
        "Social: Entretenimiento para practicantes y espectadores."
      ]
    }
  ];

  const sessionParts = [
    { title: "Calentamiento", desc: "Preparación psicofísica y motriz para prevenir lesiones musculares y articulares." },
    { title: "Parte Principal", desc: "El núcleo de la sesión basado en los objetivos específicos del programa." },
    { title: "Vuelta a la Calma", desc: "5-10 min de intensidad baja (<30%) para recuperación cardiovascular." }
  ];

  const prescription = [
    { label: "Intensidad", desc: "Grado de exigencia de la carga." },
    { label: "Duración", desc: "Tiempo total de la sesión." },
    { label: "Volumen", desc: "Cantidad total de ejercicio realizado." },
    { label: "Frecuencia", desc: "Mínimo 3 sesiones por semana para beneficios aeróbicos." },
    { label: "Progresión", desc: "Avance pedagógico de lo simple a lo complejo." },
    { label: "Descanso", desc: "Proporcional al esfuerzo (1-3 min entre series)." }
  ];

  const bibliography = [
    "OMS (2010). Recomendaciones mundiales sobre la actividad física para la salud.",
    "Salud180.com. Ejercicio físico y salud.",
    "Escolar Castellón, J. L., et al. (2003). Actividad física y enfermedad.",
    "González Chávez, A., et al. (2001). Ejercicio físico para la salud.",
    "Real Academia Española (www.rae.es).",
    "Conceptodefinicion.de/deporte.",
    "Ministerio de Salud de El Salvador (2014). Hábitos de salud y estilo de vida.",
    "Nutricionsinmas.cl",
    "Bupasalud.com",
    "Kidshealth.org (Sport safety)."
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <main className="max-w-5xl mx-auto px-6">
        <Link to="/salud" className="inline-flex items-center gap-2 text-xs font-japanese font-bold tracking-widest text-brand-navy hover:text-brand-red transition-colors mb-12 uppercase">
          <ArrowLeft className="w-4 h-4" /> Volver a Salud
        </Link>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <span className="text-[10px] font-japanese font-bold tracking-[0.5em] text-brand-red uppercase block mb-4">Guía Académica y Técnica</span>
          <h1 className="text-5xl md:text-7xl font-serif font-black uppercase tracking-tighter leading-none mb-8">
            Salud, Ejercicio <br /> <span className="text-brand-navy">y Deporte.</span>
          </h1>
          <div className="h-1 w-24 bg-brand-red mb-8" />
          <p className="text-xl text-brand-dark font-traditional leading-relaxed max-w-3xl italic">
            Resumen de directrices internacionales y fundamentos técnicos para la práctica segura y efectiva de la actividad física.
          </p>
        </motion.div>

        {/* Triple Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {sections.map((sec, i) => (
            <div key={i} className="bg-white border border-black/15 p-10 hover:border-brand-navy transition-all group flex flex-col h-full shadow-sm">
              <div className="mb-8">{sec.icon}</div>
              <h3 className="text-xl font-serif font-black uppercase tracking-tight mb-2 group-hover:text-brand-red transition-colors">{sec.title}</h3>
              <p className="text-[9px] font-japanese font-bold tracking-widest text-brand-navy/40 uppercase mb-6">{sec.jp}</p>
              <p className="text-sm font-traditional text-brand-dark/80 leading-relaxed mb-8 flex-grow italic">{sec.content}</p>
              <ul className="space-y-4 border-t border-black/15 pt-8">
                {sec.points.map((point, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-3 h-3 text-brand-red shrink-0 mt-1" />
                    <span className="text-xs font-traditional text-brand-dark">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Prescription of Exercise */}
        <section className="mb-32">
          <div className="flex items-center gap-6 mb-12">
            <div className="h-px flex-1 bg-black/10" />
            <h2 className="text-xs font-japanese font-bold tracking-[0.3em] text-brand-navy uppercase">Prescripción del Ejercicio</h2>
            <div className="h-px flex-1 bg-black/10" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prescription.map((item, i) => (
              <div key={i} className="bg-white p-8 border border-black/15 shadow-sm">
                <h4 className="text-xs font-serif font-black uppercase tracking-widest text-brand-red mb-2">{item.label}</h4>
                <p className="text-sm font-traditional text-brand-dark/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sessions & Safety */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-32">
          <div>
            <h2 className="text-2xl font-serif font-black uppercase mb-12 flex items-center gap-4">
              <Timer className="w-6 h-6 text-brand-red" /> Estructura de Sesión
            </h2>
            <div className="space-y-12">
              {sessionParts.map((part, i) => (
                <div key={i} className="relative pl-10">
                  <div className="absolute left-0 top-0 w-6 h-6 border border-brand-navy flex items-center justify-center">
                    <span className="text-[10px] font-bold">{i + 1}</span>
                  </div>
                  <h4 className="font-serif font-bold uppercase text-sm mb-2">{part.title}</h4>
                  <p className="text-sm font-traditional text-brand-dark/80 leading-relaxed">{part.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-10 lg:p-12 border border-black/10">
            <h2 className="text-2xl font-serif font-black uppercase mb-10 flex items-center gap-4">
              <ShieldCheck className="w-6 h-6 text-brand-red" /> Seguridad y Lesiones
            </h2>
            <div className="space-y-6">
              <div className="bg-brand-red/5 p-6 border border-brand-red/10 flex gap-4 items-start">
                <AlertTriangle className="w-5 h-5 text-brand-red shrink-0" />
                <p className="text-xs font-traditional text-brand-dark/70 italic leading-relaxed">
                  "Llevar el equipo adecuado y de la talla adecuada reducirá considerablemente las probabilidades de que te hagas daño."
                </p>
              </div>
              <ul className="space-y-4">
                <li className="text-xs font-traditional text-brand-dark/70 flex items-center gap-3">
                  <div className="w-1 h-1 bg-brand-red rounded-full" /> Incorpore estiramientos antes y después.
                </li>
                <li className="text-xs font-traditional text-brand-dark/70 flex items-center gap-3">
                  <div className="w-1 h-1 bg-brand-red rounded-full" /> Use protectores específicos según el deporte.
                </li>
                <li className="text-xs font-traditional text-brand-dark/70 flex items-center gap-3">
                  <div className="w-1 h-1 bg-brand-red rounded-full" /> Mantenga la hidratación en tres fases (pre, dur, post).
                </li>
                <li className="text-xs font-traditional text-brand-dark/70 flex items-center gap-3">
                  <div className="w-1 h-1 bg-brand-red rounded-full" /> Escuche a su cuerpo: no enmascare el dolor con analgésicos.
                </li>
                <li className="text-xs font-traditional text-brand-dark/70 flex items-center gap-3">
                  <div className="w-1 h-1 bg-brand-red rounded-full" /> Busque atención médica si la inflamación es persistente.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bibliography Section */}
        <section className="mb-32">
          <div className="flex items-center gap-6 mb-12">
            <div className="h-px flex-1 bg-black/10" />
            <h2 className="text-xs font-japanese font-bold tracking-[0.3em] text-brand-navy uppercase">Bibliografía</h2>
            <div className="h-px flex-1 bg-black/10" />
          </div>
          <div className="bg-white p-12 lg:p-20 border border-black/15 shadow-sm">
            <div className="grid md:grid-cols-2 gap-x-20 gap-y-6">
              {bibliography.map((bib, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <BookOpen className="w-3 h-3 text-brand-red shrink-0 mt-1 opacity-60 group-hover:opacity-100 transition-opacity" />
                    <p className="text-[10px] font-traditional text-brand-dark/60 leading-relaxed group-hover:text-brand-dark transition-colors">{bib}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download Section */}
        <div className="bg-brand-navy p-12 md:p-20 text-white text-center">
            <h4 className="text-3xl font-serif font-black uppercase mb-4 tracking-tighter">Material Original</h4>
            <p className="text-white/80 font-traditional mb-12 max-w-xl mx-auto">
              Descarga el manual completo en formato PDF para profundizar en las técnicas de prevención y entrenamiento deportivo.
            </p>
            <a 
              href="https://asuntosestudiantiles.uc.cl/images/Manual_GuÃ­a_Salud_Actividad_FÃ­sica.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-4 bg-brand-red text-white py-5 px-12 font-japanese font-bold tracking-[0.3em] uppercase text-xs hover:bg-white hover:text-brand-red transition-all shadow-2xl"
            >
              <Download className="w-4 h-4" /> Descargar PDF Original
            </a>
        </div>
      </main>
    </div>
  );
}
