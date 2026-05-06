import { useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const hideFooterPaths = ['/nage-waza', '/katame-waza'];
  const shouldHide = hideFooterPaths.includes(location.pathname);

  if (shouldHide) return null;

  return (
    <footer className="relative border-t border-black/5 py-16 px-10 bg-brand-navy text-white flex flex-col md:flex-row justify-between items-center z-20" id="app-footer">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div id="footer-logo">
          <span className="text-2xl font-serif font-black tracking-[0.2em] uppercase text-white">Uke</span>
        </div>
        <div className="flex gap-8 text-[10px] font-japanese font-bold uppercase tracking-widest opacity-60" id="footer-links">
          <a href="#" className="hover:text-brand-red transition-colors">Privacidad</a>
          <a href="#" className="hover:text-brand-red transition-colors">Términos</a>
          <a href="#" className="hover:text-brand-red transition-colors">Contacto</a>
        </div>
      </div>

      <div className="text-right mt-8 md:mt-0" id="footer-copyright">
        <p className="text-[10px] font-serif uppercase tracking-[0.3em] opacity-40 text-white">© 2026 Uke S.A. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
