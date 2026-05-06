import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { RectangleHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

const cursosData = [
  { id: 1, title: 'DPT6000-3 (Judo 1)', desc: 'Electivo de Judo I: Podrás aprender los principios fundamentales y la técnica del Judo.', image: '/assets/cursos/fondo_curso_01.jpg' },
  { id: 2, title: 'Judo 2', desc: 'Continuación del aprendizaje técnico y táctico basado en los principios de Judo I.', image: '/assets/cursos/fondo_curso_02.jpg' },
  { id: 3, title: 'Judo para defensa personal', desc: 'Aplicación de técnicas de Judo para situaciones reales de defensa personal.', image: '/assets/cursos/fondo_curso_02.jpg' },
];

export default function Cursos() {
  return (
    <div className="min-h-screen bg-[#F5E6D3] py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        {cursosData.map((curso) => (
          <div key={curso.id} className="bg-white shadow-2xl flex flex-col md:flex-row h-auto min-h-[400px]">
            {/* Content Box */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h1 className="text-3xl font-black text-brand-navy mb-6 uppercase">{curso.title}</h1>
              <p className="text-brand-navy/70 text-lg mb-8">{curso.desc}</p>
              <Link to={`/cursos/${curso.id}`} className="bg-brand-red text-white py-3 px-8 font-bold uppercase hover:bg-brand-navy transition-colors rounded-full flex items-center justify-center gap-2 self-start">
                Ver curso
                <RectangleHorizontal className="w-4 h-4 rotate-90 text-white" />
              </Link>
            </div>
            
            {/* Image Box */}
            <div className={`w-full md:w-1/2 bg-[#0e0101] min-h-[300px] flex items-center justify-center p-4 ${curso.id === 1 ? '' : 'p-0'}`}>
              {curso.id === 1 ? (
                <div className="flex gap-4 w-full justify-center">
                    <img src="/assets/cursos/fondo_curso_01.jpg" alt="Curso 1" className="w-[120px] h-[200px] md:w-[200px] md:h-[320px] object-cover" />
                    <img src="/assets/cursos/fondo_curso_02.jpg" alt="Curso 2" className="w-[120px] h-[200px] md:w-[200px] md:h-[320px] object-cover" />
                </div>
              ) : (
                <img src={curso.image} alt={curso.title} className="w-full h-full object-cover max-h-[400px]" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
