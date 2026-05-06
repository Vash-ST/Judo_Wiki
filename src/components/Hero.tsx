import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section 
      className="relative min-h-[60vh] flex flex-col items-center justify-center pt-32 pb-48 overflow-hidden bg-brand-navy" 
      id="hero-section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070" 
          alt="Mountain Sunset"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-brand-navy/20" />
      </div>

      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center text-center" id="hero-content">
        {/* All text and buttons removed per user request for a cleaner minimalist look */}
      </div>

      {/* Sidebar Elements */}
      <div className="absolute top-1/2 left-8 -translate-y-1/2 flex flex-col space-y-6 z-10 opacity-30">
        <div className="w-px h-32 bg-white" />
        <span className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.5em] font-japanese text-white">探検する</span>
      </div>
    </section>
  );
}
