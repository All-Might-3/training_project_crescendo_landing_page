// components/layout/Header.tsx

import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

// Definimos las traducciones
const translations = {
  es: {
    inicio: 'Inicio',
    servicios: 'Servicios',
    casos: 'Casos de éxito',
    testimonios: 'Testimonios',
    blog: 'Blog',
    nosotros: 'Nosotros',
    contacto: 'Contacto',
    agenda: 'Agenda una llamada',
  },
  en: {
    inicio: 'Home',
    servicios: 'Services',
    casos: 'Success Stories',
    testimonios: 'Testimonials',
    blog: 'Blog',
    nosotros: 'About Us',
    contacto: 'Contact',
    agenda: 'Book a call',
  },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState<'es' | 'en'>('es'); // estado del idioma

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 
  const t = translations[language];


  const navItems = [
    { key: 'inicio', to: 'hero', type: 'scroll' },
    { key: 'servicios', to: 'services', type: 'scroll' },
    { key: 'casos', href: 'http://tudominio.com/casos', type: 'link' }, // URL fija
    { key: 'testimonios', to: 'testimonials', type: 'scroll' },
    { key: 'blog', to: 'blog', type: 'scroll' },
    { key: 'nosotros', to: 'about-us', type: 'scroll' },
  ];

  // Función para cambiar idioma
  const changeLanguage = (lang: 'es' | 'en') => {
    setLanguage(lang);
    // Opcional: cerrar menú móvil al cambiar idioma
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-[10px] w-[100%] py-3 px-[26px] text-[0.92rem] justify-around font-bold uppercase tracking-[0.04em] rounded-full">
          {/* Logo */}
          <div className="flex-shrink-0 ">
            <a href="/" className="text-2xl font-bold text-slate-900">
              Crescendo
            </a>
          </div>

          {/* Navegación desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              if (item.type === 'link') {
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-900 hover:text-amber-400 cursor-pointer transition-colors text-sm font-medium"
                  >
                    {t[item.key as keyof typeof t]}
                  </a>
                );
              }
              return (
                <ScrollLink
                  key={item.to}
                  to={item.to!}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-slate-900 hover:text-amber-400 cursor-pointer transition-colors text-sm font-medium"
                  activeClass="text-amber-400"
                >
                  {t[item.key as keyof typeof t]}
                </ScrollLink>
              );
            })}

            {/* Botón Contacto (ahora más grande) */}
            <a
              href="#contact"
              className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold px-6 py-2.5 rounded-full text-base transition duration-300 hover:scale-105"
            >
              {t.contacto}
            </a>

            {/* Botones de idioma (cuadrados) */}
            <div className="flex items-center space-x-1 ml-2">
              <button
                onClick={() => changeLanguage('es')}
                className={`w-8 h-8 text-sm font-bold rounded border transition-colors ${
                  language === 'es'
                    ? 'bg-amber-400 border-amber-400 text-slate-900'
                    : 'bg-transparent border-slate-300 text-slate-600 hover:border-amber-400 hover:text-amber-400'
                }`}
                aria-label="Español"
              >
                ES
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`w-8 h-8 text-sm font-bold rounded border transition-colors ${
                  language === 'en'
                    ? 'bg-amber-400 border-amber-400 text-slate-900'
                    : 'bg-transparent border-slate-300 text-slate-600 hover:border-amber-400 hover:text-amber-400'
                }`}
                aria-label="English"
              >
                EN
              </button>
            </div>
          </nav>

          {/* Botón menú móvil */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center p-2 rounded-lg text-slate-900 hover:text-amber-400 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      <div
        className={`md:hidden bg-white transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[500px] border-t border-slate-200' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-3">
          {navItems.map((item) => {
            if (item.type === 'link') {
              return (
                <a
                  key={item.key}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block text-slate-900 hover:text-amber-400 text-base font-medium py-2"
                >
                  {t[item.key as keyof typeof t]}
                </a>
              );
            }
            return (
              <ScrollLink
                key={item.to}
                to={item.to!}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block text-slate-900 hover:text-amber-400 text-base font-medium py-2"
                activeClass="text-amber-400"
              >
                {t[item.key as keyof typeof t]}
              </ScrollLink>
            );
          })}

          {/* Botón de contacto en móvil */}
          <a
            href="#contact"
            className="block w-full text-center bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold px-4 py-2.5 rounded-lg transition duration-300 text-base"
            onClick={() => setIsOpen(false)}
          >
            {t.agenda}
          </a>

          {/* Botones de idioma en móvil (alineados a la derecha o centrados) */}
          <div className="flex justify-center space-x-3 pt-2">
            <button
              onClick={() => changeLanguage('es')}
              className={`w-9 h-9 text-sm font-bold rounded border transition-colors ${
                language === 'es'
                  ? 'bg-amber-400 border-amber-400 text-slate-900'
                  : 'bg-transparent border-slate-300 text-slate-600 hover:border-amber-400 hover:text-amber-400'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`w-9 h-9 text-sm font-bold rounded border transition-colors ${
                language === 'en'
                  ? 'bg-amber-400 border-amber-400 text-slate-900'
                  : 'bg-transparent border-slate-300 text-slate-600 hover:border-amber-400 hover:text-amber-400'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;