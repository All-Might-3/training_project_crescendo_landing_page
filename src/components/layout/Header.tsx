// components/layout/Header.tsx

import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  const navItems = [
    { label: 'Inicio', to: 'hero', type: 'scroll' },
    { label: 'Servicios', to: 'services', type: 'scroll' },
    { label: 'Casos de éxito', href: 'http://tudominio.com/casos', type: 'link' }, // Cambia la URL
    { label: 'Testimonios', to: 'testimonials', type: 'scroll' },
    { label: 'Blog', to: 'blog', type: 'scroll' },
    { label: 'Nosotros', to: 'about-us', type: 'scroll' },
  ];

  return (
    <header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-white/80 backdrop-blur-sm'
  }`}
>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-slate-900">
              Crescendo
            </a>
          </div>

          {/* Navegación desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              // Si es un enlace externo, usamos <a>
              if (item.type === 'link') {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-900 hover:text-amber-400 cursor-pointer transition-colors text-sm font-medium"
                  >
                    {item.label}
                  </a>
                );
              }
              // Si es scroll interno, usamos ScrollLink
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
                  {item.label}
                </ScrollLink>
              );
            })}
          </nav>

          {/* Botón CTA desktop */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold px-6 py-2 rounded-full text-sm transition duration-300 hover:scale-105"
            >
              Contactanos
            </a>
          </div>

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
          isOpen ? 'max-h-96 border-t border-slate-200' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-3">
          {navItems.map((item) => {
            if (item.type === 'link') {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block text-slate-900 hover:text-amber-400 text-base font-medium py-2"
                >
                  {item.label}
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
                {item.label}
              </ScrollLink>
            );
          })}
          <a
            href="#contact"
            className="block w-full text-center bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold px-4 py-2 rounded-lg transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Agenda una llamada
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;