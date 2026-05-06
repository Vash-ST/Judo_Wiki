import { useState } from 'react';
import Hero from '../components/Hero';
import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import VideoPlayer from '../components/VideoPlayer';
import InteractiveModal from '../components/InteractiveModal';

export default function Home() {
  const [isInteractiveModalOpen, setIsInteractiveModalOpen] = useState(false);
  return (
    <>
      <Hero />
      
      {/* Page Title / History Section */}
      <section className="bg-white pt-24 pb-12" id="history-section">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-black uppercase tracking-tighter text-brand-navy">
              Historia <span className="text-brand-red">Judo</span>
            </h2>
            <div className="h-1 w-20 bg-brand-red mx-auto mt-6" />
            <p className="mt-8 text-[10px] font-japanese font-bold tracking-[0.5em] text-brand-medium-gray uppercase">
              柔道の歴史
            </p>
          </motion.div>

          {/* New Custom Video Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <VideoPlayer 
              src="https://www.youtube.com/watch?v=4w5dl_Sk4Ck" 
              isYoutube={true}
            />
          </motion.div>
        </div>
      </section>

      {/* Ticket Grid Section */}
      <section className="py-24 px-4 bg-white text-brand-dark" id="ticket-section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Card 1: Rangos */}
            <UkeTicket 
              time="10:00"
              title="RANGOS"
              date="26'04'26"
              subtitle="Niveles de Maestría"
              japaneseText="日本人こんにちは"
              city="Uke HQ"
              content={
                <div className="flex flex-col items-center justify-center h-full space-y-4">
                  <div className="w-24 h-24 bg-brand-light-gray flex items-center justify-center p-4 border border-black/5">
                    <div className="text-brand-dark font-serif text-3xl font-bold">壺</div>
                  </div>
                  <div className="text-center space-y-1">
                    <p className="text-xs font-japanese font-bold uppercase tracking-widest text-brand-dark">INICIADO / SHODAN</p>
                    <p className="text-[10px] font-traditional opacity-40">El comienzo del camino</p>
                  </div>
                </div>
              }
            />

            {/* Card 2: Calendario */}
            <UkeTicket 
              time="11:30"
              title="CALENDARIO"
              date="26'04'26"
              subtitle="Eventos y Fechas"
              japaneseText="行事カレンダー"
              city="Global"
              content={
                <div className="flex flex-col items-center justify-center h-full space-y-6">
                  <div className="flex gap-3">
                    {[1, 2, 3].map(i => <div key={i} className="w-3 h-3 bg-brand-red opacity-60" />)}
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-japanese font-bold text-brand-dark uppercase tracking-[0.3em]">Protocolos de Destino</p>
                  </div>
                </div>
              }
            />

            {/* Card 3: Técnicas */}
            <UkeTicket 
              time="15:45"
              title="TÉCNICAS"
              date="26'04'26"
              subtitle="Metodología Zen"
              japaneseText="計画方法"
              city="Kyoto"
              content={
                <div className="flex flex-col items-center justify-center h-full space-y-4">
                  <div className="relative p-6 border border-brand-medium-gray/30">
                    <div className="absolute top-0 left-0 w-2 h-2 bg-brand-red" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-brand-red" />
                    <span className="text-[10px] font-traditional uppercase tracking-widest italic text-brand-medium-gray">Eficiencia Pura</span>
                  </div>
                </div>
              }
            />

            {/* Card 4: Equipo */}
            <UkeTicket 
              time="09:00"
              title="EQUIPO"
              date="ACTIVO"
              subtitle="Liderazgo y Mentoría"
              japaneseText="チーム"
              city="Uke"
              onClick={() => setIsInteractiveModalOpen(true)}
              content={
                <div className="flex flex-col items-center justify-center h-full space-y-4">
                  <div className="flex -space-x-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-brand-light-gray flex items-center justify-center overflow-hidden shadow-sm">
                        <div className="w-full h-full bg-brand-navy/10 flex items-center justify-center text-[10px] font-japanese text-brand-navy">人</div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-japanese font-bold text-brand-dark uppercase tracking-[0.2em]">Liderazgo y Mentoría</p>
                    <p className="text-[8px] font-traditional opacity-40 italic mt-1">Sabiduría compartida</p>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </section>
      
      {isInteractiveModalOpen && (
        <InteractiveModal onClose={() => setIsInteractiveModalOpen(false)} />
      )}
    </>
  );
}

function UkeTicket({ time, title, date, subtitle, content, japaneseText, city, onClick }: { 
  time: string; 
  title: string; 
  date: string; 
  subtitle: string;
  content: ReactNode;
  japaneseText: string;
  city: string;
  onClick?: () => void;
}) {
  return (
    <div onClick={onClick} className={`aspect-[5/4] md:aspect-[4/3] bg-white border border-brand-light-gray shadow-sm p-3 md:p-6 flex flex-col relative overflow-hidden group hover:shadow-xl transition-all duration-500 ${onClick ? 'cursor-pointer' : ''}`}>
      {/* Blue Ribbon Flag */}
      <div className="absolute top-0 left-3 md:left-6 w-3 md:w-5 h-6 md:h-8 bg-brand-accent-blue z-20 shadow-md">
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-brand-accent-blue [clip-path:polygon(0%_0%,100%_0%,50%_100%)] translate-y-full" />
      </div>

      <div className="flex justify-between items-start text-[8px] md:text-[10px] font-japanese text-brand-medium-gray uppercase tracking-widest mb-2 md:mb-4">
        <span className="pl-6 md:pl-10">{time}</span>
        <span className="text-brand-dark font-bold">{japaneseText}</span>
        <span>{date}</span>
      </div>

      <div className="flex-1 border-x border-dashed border-brand-light-gray mx-3 md:mx-6 relative flex items-center justify-center">
        {/* Accent Corner Lines */}
        <div className="absolute top-0 left-0 w-3 h-[1px] bg-brand-accent-blue" />
        <div className="absolute bottom-0 right-0 w-3 h-[1px] bg-brand-accent-blue" />
        
        {content}
      </div>

      <div className="flex justify-between items-end mt-2 md:mt-4 text-[8px] md:text-[10px] font-japanese tracking-widest leading-none">
        <div className="flex flex-col gap-0.5">
          <span className="font-serif font-black text-xs md:text-md text-brand-dark">{title}</span>
          <span className="text-brand-medium-gray text-[7px] md:text-[8px] uppercase">{subtitle}</span>
        </div>
        <span className="text-brand-medium-gray uppercase text-[7px] md:text-[10px]">{city}</span>
      </div>

      <div className="absolute top-1/2 -right-2 -translate-y-1/2 [writing-mode:vertical-lr] text-[8px] opacity-10 font-japanese uppercase tracking-[0.3em] text-brand-accent-blue">
        {japaneseText} {japaneseText}
      </div>
    </div>
  );
}
