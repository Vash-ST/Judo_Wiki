import { motion } from 'motion/react';
import { Search, MapPin, MessageSquare, History, Award, HelpCircle } from 'lucide-react';
import { type ReactNode } from 'react';

export default function MobilePreview() {
  return (
    <div className="relative w-full max-w-5xl mx-auto -mt-32 px-4 z-20 pb-32" id="preview-container">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative aspect-video md:aspect-[21/9] bg-[#0a0a0a] border border-white/10 shadow-[0_-40px_80px_-20px_rgba(0,0,0,0.8)] overflow-hidden"
        id="app-preview-frame"
      >
        {/* App Content Interface */}
        <div className="w-full h-full p-8 md:p-12 flex flex-col gap-8 bg-black" id="app-content">
          <div className="flex items-center justify-between" id="app-header">
            <div className="flex items-center gap-4" id="app-nav">
              <NavIcon active icon={<MessageSquare className="w-4 h-4" />} label="CHAT" />
              <NavIcon icon={<History className="w-4 h-4" />} label="HISTORIA" />
              <NavIcon icon={<Award className="w-4 h-4" />} label="LOGROS" />
              <NavIcon icon={<HelpCircle className="w-4 h-4" />} label="AYUDA" />
            </div>
            <div className="flex items-center gap-6" id="user-actions">
              <span className="text-[10px] font-traditional opacity-30 uppercase tracking-[0.2em]">Conexión Estable</span>
              <div className="w-8 h-8 rounded-full border border-white/20 p-0.5" id="user-avatar">
                <img 
                  src="/assets/uniforme.png" 
                  alt="User" 
                  className="w-full h-full rounded-full object-cover grayscale brightness-125"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8 h-full" id="app-main-grid">
            <div className="col-span-8 bg-white/[0.01] border border-white/5 p-8 flex flex-col gap-6" id="chat-interface">
               <div className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 bg-orange-400" />
                 <span className="text-[10px] font-serif font-bold text-white/40 tracking-widest uppercase">Canal de Consulta</span>
               </div>
               <div className="space-y-4">
                 <div className="h-4 w-3/4 bg-white/10" />
                 <div className="h-4 w-1/2 bg-white/5 opacity-50" />
                 <div className="h-4 w-2/3 bg-white/5 opacity-30" />
               </div>
               <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-6">
                  <span className="text-[10px] font-serif opacity-20 uppercase tracking-widest">Sincronización de Datos en Tiempo Real</span>
                  <div className="h-1 w-32 bg-white/5 overflow-hidden">
                    <div className="h-full w-2/3 bg-white/20" />
                  </div>
               </div>
            </div>
            <div className="col-span-4 flex flex-col gap-8">
              <div className="flex-1 bg-white/[0.01] border border-white/5 p-6 flex flex-col items-center justify-center">
                 <div className="w-12 h-12 border border-white/10 flex items-center justify-center mb-4">
                   <MapPin className="w-6 h-6 text-white/40" />
                 </div>
                 <span className="text-[9px] font-serif opacity-30 uppercase tracking-[0.3em]">Interfaz de Mapa</span>
              </div>
              <div className="p-6 bg-white/[0.03] border border-white/10">
                <span className="text-[10px] font-serif font-black text-white/60 uppercase tracking-widest mb-2 block">Estado del Viaje</span>
                <p className="text-[11px] font-traditional opacity-30 uppercase tracking-tight">Confirmando rutas...</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function NavIcon({ icon, label, active = false }: { icon: ReactNode; label: string; active?: boolean }) {
  return (
    <div className={`flex items-center gap-2 px-6 py-2 cursor-pointer transition-all border ${active ? 'bg-white text-black border-white' : 'text-white/30 border-white/5 hover:text-white/50'}`}>
      {icon}
      <span className="text-[9px] font-serif font-black tracking-[0.1em] uppercase">{label}</span>
    </div>
  );
}

