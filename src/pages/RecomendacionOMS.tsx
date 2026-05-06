import { motion } from 'motion/react';
import { ArrowLeft, Activity, ShieldCheck, AlertTriangle, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RecomendacionOMS() {
  const recommendations = [
    {
      id: "01",
      text: "Los adultos de 18 a 64 años dediquen como mínimo 150 minutos semanales a la práctica de actividad física aeróbica, de intensidad moderada."
    },
    {
      id: "02",
      text: "La actividad aeróbica se practicará en sesiones de 10 minutos de duración, como mínimo."
    },
    {
      id: "03",
      text: "Para mayores beneficios, aumentar hasta 300 minutos semanales de actividad moderada o 150 de actividad intensa."
    },
    {
      id: "04",
      text: "Dos veces o más por semana, realicen actividades de fortalecimiento de los grandes grupos musculares."
    }
  ];

  const concepts = [
    {
      title: "Actividad física aeróbica",
      desc: "Actividad en la cual los grandes músculos del cuerpo se mueven rítmicamente durante un período de tiempo. La actividad aeróbica -denominada también “de resistencia”- mejora la capacidad cardiorrespiratoria."
    },
    {
      title: "Actividad física moderada",
      desc: "Actividad realizada de 3,0 a 5,9 veces más intensamente que en estado de reposo. En escala relativa suele puntuar entre 5 y 6 (escala 0-10)."
    },
    {
      title: "Actividad física vigorosa",
      desc: "Intensidad 6,0 o más veces superior al reposo en adultos (7,0+ en jóvenes). En escala relativa suele puntuar entre 7 y 8 (escala 0-10)."
    },
    {
      title: "Fortalecimiento muscular",
      desc: "Ejercicio que incrementa la fuerza muscular ósea, la potencia, la resistencia y la masa (ej. entrenamiento de resistencia)."
    },
    {
      title: "Grandes grupos musculares",
      desc: "Incluye el trabajo de piernas, caderas, espalda, abdomen, tórax, hombros y brazos."
    },
    {
      title: "Inactividad física",
      desc: "Ausencia de actividad o de ejercicio físico. Factor determinante en el equilibrio energético y control de peso."
    },
    {
      title: "Intensidad",
      desc: "Grado en que se realiza una actividad o magnitud del esfuerzo necesario para realizarla."
    },
    {
      title: "Duración",
      desc: "Período de tiempo que se dedica a la realización de un ejercicio, usualmente expresado en minutos."
    },
    {
      title: "Frecuencia",
      desc: "Número de veces que se realiza un ejercicio o actividad, expresada en sesiones o tandas semanales."
    }
  ];

  const bibliography = [
    { id: 1, text: "2010 estrategia mundial sobre régimen alimentario, actividad física y salud; Recomendaciones mundiales sobre actividad física para la salud. Organización Mundial de la Salud (OMS).", url: "https://www.who.int/dietphysicalactivity/publications/9789241599979/es/" },
    { id: 2, text: "2008 Physical Activity Guidelines for Americans. Office of Disease Prevention & Health Promotion, US Department of Health and Human Services, October 2008.", url: "http://www.health.gov/paguidelines" },
    { id: 3, text: "Global health risks: mortality and burden of disease attributable to selected major risks. Geneva, Organización Mundial de la Salud, 2009." },
    { id: 4, text: "The global burden of disease: 2004 update. Geneva, Organización Mundial de la Salud, Ginebra, 2008." },
    { id: 5, text: "A guide for population-based approaches to increasing levels of physical activity: implementation of the WHO Global Strategy on Diet, Physical Activity and Health. Ginebra, Organización Mundial de la Salud, 2007." },
    { id: 6, text: "Preventing chronic diseases: a vital investment. Ginebra, Organización Mundial de la Salud, 2005." },
    { id: 7, text: "Resolución WHA57.17. Estrategia Mundial sobre Régimen Alimentario, Actividad Física y Salud. En: 57ª Asamblea Mundial de la Salud, Ginebra, 17 a 22 de mayo de 2004. Resoluciones y decisiones, anexos. Ginebra, OMS, 2004." },
    { id: 8, text: "Informe sobre la salud en el mundo 2002: Reducir los riesgos y promover una vida sana. Ginebra, Organización Mundial de la Salud, 2002." },
    { id: 9, text: "2008 Physical Activity Guidelines for Americans. Office of Disease Prevention & Health Promotion, US Department of Health and Human Services, October 2008.", url: "http://www.health.gov/paguidelines" }
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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Hero Section */}
          <div className="mb-24">
            <h2 className="text-4xl md:text-6xl font-serif font-black tracking-tight mb-8 uppercase leading-tight">
              Recomendaciones de la <span className="text-brand-accent-blue">OMS</span> sobre actividad física
            </h2>
            <div className="w-24 h-1 bg-brand-red mb-8" />
            <p className="text-xl text-brand-dark/70 font-traditional leading-relaxed max-w-2xl">
              Directrices sobre la relación dosis-respuesta entre la actividad física y los beneficios para la salud para adultos de 18 a 64 años.
            </p>
          </div>

          {/* Recommendations Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-32">
            {recommendations.map((rec) => (
              <div key={rec.id} className="bg-white p-8 border border-black/5 shadow-sm hover:shadow-md transition-all group">
                <div className="text-3xl font-serif font-black text-brand-red mb-6 group-hover:scale-110 transition-transform origin-left">{rec.id}</div>
                <p className="text-brand-dark/80 font-traditional leading-relaxed">
                  {rec.text}
                </p>
              </div>
            ))}
          </div>

          {/* Warning Section */}
          <div className="bg-brand-navy p-12 text-white mb-32 relative overflow-hidden">
            <AlertTriangle className="absolute -bottom-10 -right-10 w-48 h-48 opacity-5 -rotate-12" />
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-xs font-japanese font-bold tracking-[0.5em] uppercase mb-6 opacity-60">Alerta de Salud</h3>
              <h4 className="text-3xl font-serif font-black mb-6 uppercase tracking-tight">El riesgo de la inactividad</h4>
              <p className="font-traditional opacity-80 leading-relaxed mb-8">
                La inactividad física constituye el cuarto factor de riesgo más importante de mortalidad en todo el mundo (6% de defunciones). Es causa principal de enfermedades como cáncer de mama, colon y diabetes.
              </p>
              <div className="flex gap-12 border-t border-white/10 pt-8">
                <div>
                  <span className="block text-2xl font-serif font-black">25%</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-40">De cánceres</span>
                </div>
                <div>
                  <span className="block text-2xl font-serif font-black">30%</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-40">De cardiopatías</span>
                </div>
              </div>
            </div>
          </div>

          {/* Concepts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {concepts.map((concept) => (
              <div key={concept.title} className="bg-white/40 p-6 border border-black/5 hover:border-brand-red/20 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-brand-light-gray/50 text-brand-navy">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h5 className="font-serif font-black uppercase text-xs tracking-widest">{concept.title}</h5>
                </div>
                <p className="text-xs text-brand-dark/60 font-traditional leading-relaxed">
                  {concept.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Download Section */}
          <div className="mb-32 bg-white border border-black/5 p-10 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-brand-navy/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <div className="relative z-10">
              <h4 className="text-2xl font-serif font-black uppercase mb-4">Documento Completo</h4>
              <p className="text-brand-dark/60 font-traditional mb-8 max-w-xl mx-auto">
                Accede a la publicación original de la OMS con todas las directrices detalladas sobre actividad física para la salud.
              </p>
              <div className="flex gap-4 justify-center">
                <a 
                  href="/doc/recomendacion_oms.pdf" 
                  download="recomendacion_oms.pdf"
                  className="inline-flex items-center gap-3 bg-brand-red text-white px-10 py-4 rounded-none font-japanese font-bold tracking-[0.3em] uppercase text-xs hover:bg-brand-navy transition-all duration-300 shadow-lg hover:shadow-brand-navy/20"
                >
                  Descargar Archivo Original
                </a>
                <a 
                  href="https://agenda.saludybienestar.uc.cl/" 
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-brand-navy text-white px-10 py-4 rounded-none font-japanese font-bold tracking-[0.3em] uppercase text-xs hover:bg-brand-red transition-all duration-300 shadow-lg hover:shadow-brand-navy/20"
                >
                  Ir a la Agenda
                </a>
              </div>
            </div>
          </div>

          {/* Bibliography Section */}
          <section className="mb-32 pt-20 border-t border-black/5">
            <span className="text-[10px] font-japanese font-bold tracking-[0.5em] text-brand-red uppercase block mb-8">Fuentes y Referencias</span>
            <div className="space-y-6">
              {bibliography.map((bib) => (
                <div key={bib.id} className="flex gap-6 items-start text-xs font-traditional text-brand-dark/50 hover:text-brand-dark transition-colors">
                  <span className="shrink-0 font-serif font-black text-[10px]">{bib.id.toString().padStart(2, '0')}</span>
                  <div className="space-y-1">
                    <p>{bib.text}</p>
                    {bib.url && (
                      <a href={bib.url} target="_blank" rel="noreferrer" className="text-brand-accent-blue hover:underline break-all">
                        {bib.url}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Final Benefits */}
          <div className="border-t border-black/10 pt-12 text-center">
            <p className="text-sm font-traditional italic text-brand-dark/40 max-w-2xl mx-auto">
              "La actividad física practicada con regularidad reduce el riesgo de cardiopatías coronarias, accidentes cerebrovasculares, diabetes tipo II y depresión."
            </p>
            <div className="mt-8 flex justify-center gap-4 text-[10px] font-japanese font-bold tracking-widest opacity-30 uppercase">
              <span>Frecuencia</span>
              <span>•</span>
              <span>Intensidad</span>
              <span>•</span>
              <span>Duración</span>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
