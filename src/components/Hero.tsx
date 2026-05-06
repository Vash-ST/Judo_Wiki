export default function Hero() {
  return (
    <section 
      className="relative min-h-[60vh] flex flex-col items-center justify-center pt-32 pb-48 overflow-hidden bg-brand-navy" 
      id="hero-section"
    >
      {/* Background Color */}
      <div className="absolute inset-0 z-0 bg-brand-navy" />

      {/* Sidebar Elements */}
      <div className="absolute top-1/2 left-8 -translate-y-1/2 flex flex-col space-y-6 z-10 opacity-30">
        <div className="w-px h-32 bg-white" />
        <span className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.5em] font-japanese text-white">探検する</span>
      </div>
    </section>
  );
}
