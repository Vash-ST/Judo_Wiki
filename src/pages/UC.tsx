import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function UC() {
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
          className="max-w-5xl mx-auto"
        >
          {/* Main Title Section */}
          <div className="mb-24">
            <span className="text-brand-red font-japanese font-bold tracking-[0.5em] uppercase text-xs mb-4 block">Tradición y Futuro</span>
            <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tighter leading-none uppercase mb-8">
              Judo Femenino e <br className="hidden md:block" /> Historia en la <span className="text-brand-accent-blue">UC</span>
            </h2>
            <div className="w-24 h-1 bg-brand-navy" />
          </div>

          {/* History Section */}
          <section className="grid lg:grid-cols-12 gap-16 mb-32 items-start">
            <div className="lg:col-span-12 space-y-12">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-serif font-black uppercase tracking-tight border-l-4 border-brand-red pl-6">Fundación y Primeros Años</h3>
                  <p className="text-lg text-brand-dark/80 leading-relaxed font-traditional">
                    El judo de la Pontificia Universidad Católica de Chile fue fundado por el <span className="font-bold text-brand-navy">Profesor Jaime Carlos Fuentes Torres</span> (Cinturón rojo/blanco 6to Dan) en <span className="font-bold">1973</span>. Mantuvo sus actividades ligado a la universidad hasta el 2018. Ingeniero de profesión, su pasión lo llevó a dedicarse totalmente al arte marcial.
                  </p>
                  <p className="text-lg text-brand-dark/80 leading-relaxed font-traditional">
                    Alcanzó grandes logros, como ser campeón sudamericano y 8° del mundo. El "Sensei" se destacó por enseñar no sólo la técnica y disciplina, sino también por transmitir valores y experiencias de vida, siendo premiado en 2013 por su buen desempeño.
                  </p>
                </div>
                <div className="relative group">
                  <div className="aspect-video bg-black shadow-2xl relative z-10 overflow-hidden">
                    <iframe 
                      src="https://www.youtube.com/embed/5KYgiaw1sO8?autoplay=1&mute=1&loop=1&playlist=5KYgiaw1sO8" 
                      title="Sensei Jaime Fuentes" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-16 items-center pt-12">
                <div className="order-2 md:order-1 relative group">
                  <div className="aspect-[4/3] bg-white border border-black/5 p-4 shadow-2xl relative z-10 overflow-hidden">
                    <img 
                      src="/assets/tarjeta.png" 
                      alt="Historia Judo UC" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    />
                  </div>
                </div>
                <div className="order-1 md:order-2 space-y-6 text-right">
                  <h3 className="text-3xl font-serif font-black uppercase tracking-tight border-r-4 border-brand-navy pr-6">Liderazgo y Evolución</h3>
                  <p className="text-lg text-brand-dark/80 leading-relaxed font-traditional">
                    Presentamos al <span className="font-bold text-brand-navy">Sensei Francisco Ayala Poblete</span> (cinturón negro 3er Dan) como uno de los más contemporáneos, ligado a la selección hasta 2017. Formado en el área militar, destaca por su integridad como una de las mejores figuras competitivas de Chile.
                  </p>
                  <p className="text-base text-brand-dark/60 leading-relaxed font-traditional italic">
                    Desde 2018, el Profesor Luis Alejandro Parra Gaete lidera los cursos y la selección, integrando formación académica de magíster con pasantías internacionales en potencias como Japón y Brasil.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Stats / Achievement Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-32">
            <div className="bg-brand-navy p-8 text-white relative overflow-hidden group">
              <div className="relative z-10">
                <span className="text-4xl font-serif font-black block mb-2">#1</span>
                <p className="text-[10px] font-japanese font-bold tracking-widest uppercase opacity-60">Campeones Regionales</p>
                <p className="mt-4 text-xs font-traditional opacity-80 italic">Liderando con la mayor cantidad de preseas en torneos universitarios.</p>
              </div>
              <div className="absolute -bottom-4 -right-4 text-8xl font-japanese font-black opacity-5 rotate-12">勝</div>
            </div>
            <div className="bg-white border border-black/5 p-8 relative overflow-hidden group">
              <div className="relative z-10">
                <span className="text-4xl font-serif font-black block mb-2">2021</span>
                <p className="text-[10px] font-japanese font-bold tracking-widest uppercase opacity-40">Comunidad</p>
                <p className="mt-4 text-xs font-traditional text-brand-dark/60">Más de 90 participantes entre cursos y selección universitaria.</p>
              </div>
            </div>
            <div className="bg-brand-red p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-4xl font-serif font-black block mb-2">++</span>
                <p className="text-[10px] font-japanese font-bold tracking-widest uppercase opacity-60">Representación Femenina</p>
                <p className="mt-4 text-xs font-traditional opacity-80 italic">Un alza constante en la participación y liderazgo de mujeres en el dojo.</p>
              </div>
              <div className="absolute -bottom-4 -right-4 text-8xl font-japanese font-black opacity-5 rotate-12">女</div>
            </div>
          </div>

          {/* Female Judo Section */}
          <section className="bg-white p-12 md:p-24 shadow-sm border border-black/5 relative mb-32 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-red" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-16">
                <div className="md:w-1/2 space-y-12">
                  <div className="space-y-4">
                    <span className="text-[10px] font-japanese font-bold tracking-[0.5em] text-brand-red uppercase">Historia y Evolución</span>
                    <h3 className="text-4xl md:text-5xl font-serif font-black uppercase tracking-tight">Judo Femenino: <br /> Rompiendo <span className="italic font-normal">Paradigmas.</span></h3>
                  </div>
                  
                  <div className="space-y-8 text-lg text-brand-dark/70 font-traditional leading-relaxed">
                    <p className="bg-[#f8f8f8] p-6 border-l-4 border-brand-navy italic">
                      "La mujer no está hecha para luchar, sino para procrear" — Un paradigma superado que marcó el inicio de la lucha por la inclusión. Se creía que el ejercicio podía afectar la función reproductiva.
                    </p>
                    <p>
                      Jigoro Kano abrazó este concepto limitando el judo femenino a la educación física y moral, centrándose en el <span className="text-brand-navy font-bold">Kata y Randori</span> para que no fuera "dañino para sus cuerpos". Sin embargo, la historia demostró una realidad muy distinta.
                    </p>
                    <p>
                      En la <span className="font-bold">UC</span>, nuestra selección cuenta con una gran representatividad. En 2018, las damas obtuvieron el tercer lugar nacional LDES y segundas en FENAUDE, demostrando un alza constante en la participación femenina que hoy suma más de 50 estudiantes en cursos y seleccionadas.
                    </p>
                  </div>
                </div>

                <div className="md:w-1/2 space-y-12">
                  <div className="space-y-6">
                    <div className="flex gap-6 items-start">
                      <div className="shrink-0 w-12 h-12 bg-brand-red/10 flex items-center justify-center font-serif font-black text-brand-red">01</div>
                      <div>
                        <h4 className="font-serif font-bold uppercase mb-2">Keiko Fukuda</h4>
                        <p className="text-sm opacity-70 leading-relaxed">La única mujer en obtener el grado de honor 10 DAN. Nieta de Fukuda Hachinosuke (instructor de Kano), decidió entrenar tras ver una sesión con su madre. Se convirtió en una experta mundial, desafiando la expectativa social del matrimonio.</p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start">
                      <div className="shrink-0 w-12 h-12 bg-brand-navy/10 flex items-center justify-center font-serif font-black text-brand-navy">02</div>
                      <div>
                        <h4 className="font-serif font-bold uppercase mb-2">Rusty Kanokogi</h4>
                        <p className="text-sm opacity-70 leading-relaxed">Embajadora mundial que compitió contra hombres en 1959. A pesar de ganar, le negaron la medalla por ser mujer. Su lucha incansable fue la semilla para el primer mundial femenino en 1980.</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-12 border-t border-black/5">
                    <div className="text-center">
                      <span className="text-2xl font-serif font-black block">1974</span>
                      <span className="text-[7px] font-japanese font-bold tracking-widest uppercase opacity-40 leading-none">Revolución en competencia internacional</span>
                    </div>
                    <div className="text-center">
                      <span className="text-2xl font-serif font-black block">1980</span>
                      <span className="text-[7px] font-japanese font-bold tracking-widest uppercase opacity-40 leading-none">Primer Mundial Femenino</span>
                    </div>
                    <div className="text-center">
                      <span className="text-2xl font-serif font-black block">1992</span>
                      <span className="text-[7px] font-japanese font-bold tracking-widest uppercase opacity-40 leading-none">Incorporación Olímpica (Barcelona)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer of Content */}
          <div className="text-center pb-20">
            <p className="text-sm font-traditional italic text-brand-dark/40 max-w-2xl mx-auto">
              "Conocer la historia nos permite desarrollar nuestra práctica desde la transversalidad del respeto y la integridad académica."
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
