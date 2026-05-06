import { motion, AnimatePresence } from 'motion/react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [hasVisitedSubpage, setHasVisitedSubpage] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'UC / Institución', href: '/uc' },
    { name: 'Salud', href: '/salud' },
    { name: 'Técnicas', href: '/tecnicas' },
    { name: 'Principios', href: '/principios' },
    { name: 'Cursos', href: '/cursos' },
  ];

  useEffect(() => {
    if (location.pathname !== '/') {
      setHasVisitedSubpage(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const isHome = location.pathname === '/';

  return (
    <>
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-24 py-4 md:py-6 bg-brand-navy/95 backdrop-blur-md text-white border-b border-white/5"
      id="navbar"
    >
      <div className="flex items-center">
        <Link to="/" className="flex items-center space-x-4 group cursor-pointer" id="logo-container">
          <div className="relative w-10 h-10 md:w-14 md:h-14 flex items-center justify-center transition-transform duration-1000 group-hover:scale-110">
            {/* Zen Circle SVG */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-white opacity-40">
              <path 
                d="M 50,10 A 40,40 0 1,1 49.9,10" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
                strokeDasharray="200 50"
                className="animate-[spin_20s_linear_infinite]"
              />
            </svg>
            {/* Meditating Figure SVG */}
            <svg viewBox="0 0 100 100" className="w-5 h-5 md:w-8 md:h-8 text-white z-10">
              <path 
                d="M50 30c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm10 26c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-20 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm18.5-12.5c-1.4-1.4-3.1-2.5-5-3.3-1-.4-2.1-.6-3.5-.7-1.4 0-2.5.2-3.5.7-1.9.8-3.6 1.9-5 3.3-1.4 1.4-2.5 3.1-3.3 5-1.1 2.5-1.1 5.3 0 7.8.8 1.9 1.9 3.6 3.3 5 1 1 2.1 1.8 3.3 2.5-1.6 1.1-3.6 1.7-5.8 1.7-4.4 0-8-3.6-8-8s3.6-8 8-8c1.1 0 2.1.2 3.1.6 1.1-.9 2.4-1.5 3.9-1.9 1.4-.4 2.9-.6 4.5-.6s3.1.2 4.5.6c1.5.4 2.8 1 3.9 1.9 1-.4 2-.6 3.1-.6 4.4 0 8 3.6 8 8s-3.6 8-8 8c-2.2 0-4.2-.6-5.8-1.7 1.2-.7 2.3-1.5 3.3-2.5 1.4-1.4 2.5-3.1 3.3-5 1.1-2.5 1.1-5.3 0-7.8-.8-1.9-1.9-3.6-3.3-5z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-xl md:text-3xl font-serif font-black tracking-[0.1em] uppercase" id="logo-text">Uke</span>
            <span className="text-[8px] md:text-[10px] font-japanese font-bold tracking-[0.3em] uppercase opacity-40">Zen & Budo</span>
          </div>
        </Link>
        <div className="hidden lg:block h-10 w-px bg-white/10 mx-12 lg:mx-20" id="logo-divider" />
      </div>

      <div className="hidden md:flex items-center gap-8 lg:gap-14" id="nav-links">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.href}
            end={link.href === '/'}
            className={({ isActive }) => {
              let colorClasses = 'text-white opacity-80';
              
              if (isHome) {
                if (!hasVisitedSubpage) {
                  colorClasses = 'text-brand-red opacity-100';
                } else {
                  colorClasses = 'text-white opacity-80';
                }
              } else {
                if (isActive) {
                  colorClasses = 'text-brand-red opacity-100';
                } else {
                  colorClasses = 'text-white opacity-80';
                }
              }

              return `text-[10px] font-japanese font-bold uppercase tracking-[0.2em] transition-all hover:opacity-100 ${colorClasses}`;
            }}
            id={`nav-link-${link.name.toLowerCase()}`}
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 text-white z-[60]"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

    </motion.nav>
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] md:hidden flex flex-col"
        >
          {/* Header / Close Bar (Pastel White) */}
          <div className="px-6 py-6 flex items-center justify-between border-b border-brand-navy/10 shrink-0" style={{ backgroundColor: '#FCFAF2' }}>
            <span className="text-brand-navy font-serif font-black uppercase tracking-widest opacity-80">Menú</span>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-brand-navy hover:rotate-90 transition-transform duration-300"
            >
              <X className="w-8 h-8" strokeWidth={1.5} />
            </button>
          </div>

          {/* Content Container */}
          <div className="flex-1 px-8 pt-8 pb-12 flex flex-col overflow-y-auto w-full bg-brand-navy">
            <div className="flex flex-col">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4,
                    delay: index * 0.05
                  }}
                  className="border-b border-white/10"
                >
                  <NavLink
                    to={link.href}
                    end={link.href === '/'}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) => {
                      const activeStyle = isActive ? 'text-brand-red opacity-100' : 'text-white/60';
                      return `block py-6 text-3xl font-serif font-black uppercase tracking-wider transition-all active:bg-white/5 ${activeStyle}`;
                    }}
                  >
                    {link.name.split(' / ')[0]}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-auto flex flex-col gap-1 pt-12"
            >
              <span className="text-[10px] font-japanese font-bold text-white/40 uppercase tracking-[0.2em]">
                Kodokan Judō · Tokyo
              </span>
              <span className="text-[9px] tracking-[0.1em] text-white/30 font-medium uppercase">
                Tradition · Technique · Spirit
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
