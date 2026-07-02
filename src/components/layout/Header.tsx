// src/components/layout/Header.tsx
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

// Definimos las traducciones
const translations = {
  es: {
    inicio: 'Inicio',
    servicios: 'Servicios',
    casos: 'Casos de Éxito',
    testimonios: 'Testimonios',
    blog: 'Blog',
    nosotros: 'Nosotros',
    contacto: 'Contacto',
    agenda: 'Agenda una llamada',
    // submenú servicios
    localSeo: 'SEO Local',
    ads: 'Google Ads y Meta Ads',
    webDesign: 'Diseño Web',
    aiChat: 'Chat IA 24/7',
    social: 'Social Media',
    reputation: 'Reputación Online',
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
    localSeo: 'Local SEO',
    ads: 'Google Ads & Meta Ads',
    webDesign: 'Web Design',
    aiChat: 'AI Chat 24/7',
    social: 'Social Media',
    reputation: 'Online Reputation',
  },
};

const serviceItems = [
  { key: 'localSeo', href: '/seo-local' },
  { key: 'ads', href: '/google-ads' },
  { key: 'webDesign', href: '/web-design' },
  { key: 'aiChat', href: '/ia-chat-24-7' },
  { key: 'social', href: '/social-media' },
  { key: 'reputation', href: '/reputacion-online' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState<'es' | 'en'>('es');

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
    // Servicios con dropdown lo manejamos aparte
    { key: 'casos', href: '/casos-de-exito', type: 'link' },
    { key: 'testimonios', to: 'testimonials', type: 'scroll' },
    { key: 'blog', to: 'blog', type: 'scroll' },
    { key: 'nosotros', href: '/nosotros', type: 'link' },
  ];

  const changeLanguage = (lang: 'es' | 'en') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.08)]'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around items-center py-3">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="/src/assets/images/logodorado.png" 
              alt="Crescendo Digital Marketing"
              className="h-11 w-auto object-contain"
            />
          </a>

          {/* Menú desktop */}
          <nav className="hidden lg:flex items-center space-x-8 ">
            <ScrollLink
              to="hero"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-[var(--dark)] hover:text-amber-400 cursor-pointer text-sm font-medium transition-colors"
              activeClass="text-amber-400"
            >
              {t.inicio}
            </ScrollLink>

            {/* Dropdown Servicios */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-[var(--dark)] hover:text-amber-400 text-sm font-medium transition-colors"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {t.servicios}
                <FontAwesomeIcon icon={faChevronDown} className="text-xs ml-1 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2">
                  {serviceItems.map((item) => (
                    <a
                      key={item.key}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-[var(--dark)] hover:bg-amber-50 hover:text-amber-500 transition-colors"
                    >
                      {t[item.key as keyof typeof t]}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {navItems.map((item) => {
              if (item.type === 'link') {
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    className="text-[var(--dark)] hover:text-amber-400 text-sm font-medium transition-colors"
                  >
                    {t[item.key as keyof typeof t]}
                  </a>
                );
              }
              
            })}

            {/* Botón Contacto (estilo nav-cta) */}
            <a
  href="https://wa.me/17867556238"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-[#f9ce4f] to-[#f5b82a] text-[var(--secondary)] shadow-[0_14px_28px_rgba(245,184,42,0.32)] border border-[var(--secondary)]/10 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
>
  {t.contacto}
  <FontAwesomeIcon
    icon={faArrowRight}
    className="text-xs transition-transform duration-300 group-hover:translate-x-1 "
  />
</a>

            {/* Selector de idioma */}
            <div className="flex items-center gap-1 ml-2">
              <button
                onClick={() => changeLanguage('es')}
                className={`px-2.5 py-1 text-xs font-bold rounded-sm border transition-colors ${
                  language === 'es'
                    ? 'bg-gradient-to-r from-[#f9ce4f] to-[#f5b82a] text-[var(--secondary)] border-[var(--secondary)]/20 shadow-md'
                    : 'bg-transparent border-slate-200 text-slate-600 hover:border-amber-300 hover:text-amber-500'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-2.5 py-1 text-xs font-bold rounded-sm border transition-colors ${
                  language === 'en'
                    ? 'bg-gradient-to-r from-[#f9ce4f] to-[#f5b82a] text-[var(--secondary)] border-[var(--secondary)]/20 shadow-md'
                    : 'bg-transparent border-slate-200 text-slate-600 hover:border-amber-300 hover:text-amber-500'
                }`}
              >
                EN
              </button>
            </div>
          </nav>

          {/* Botón hamburguesa */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-1 rounded-lg text-[var(--dark)] hover:text-amber-400 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>

        {/* Menú móvil */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-slate-100 space-y-3">
            <ScrollLink
              to="hero"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block text-[var(--dark)] hover:text-amber-400 text-base font-medium py-2"
              activeClass="text-amber-400"
            >
              {t.inicio}
            </ScrollLink>

            {/* Servicios en móvil (sin dropdown, solo enlaces) */}
            <div className="pl-4 space-y-2 border-l-2 border-amber-200">
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{t.servicios}</p>
              {serviceItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-[var(--dark)] hover:text-amber-400 text-sm py-1.5"
                >
                  {t[item.key as keyof typeof t]}
                </a>
              ))}
            </div>

            {navItems.map((item) => {
              if (item.type === 'link') {
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-[var(--dark)] hover:text-amber-400 text-base font-medium py-2"
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
                  className="block text-[var(--dark)] hover:text-amber-400 text-base font-medium py-2"
                  activeClass="text-amber-400"
                >
                  {t[item.key as keyof typeof t]}
                </ScrollLink>
              );
            })}

            <a
              href="https://wa.me/17867556238"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-3 text-sm font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-[#f9ce4f] to-[#f5b82a] text-[var(--secondary)] shadow-md"
            >
              {t.contacto}
            </a>

            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={() => changeLanguage('es')}
                className={`px-4 py-1.5 text-xs font-bold rounded border transition-colors ${
                  language === 'es'
                    ? 'bg-gradient-to-r from-[#f9ce4f] to-[#f5b82a] text-[var(--secondary)] border-[var(--secondary)]/20'
                    : 'bg-transparent border-slate-200 text-slate-600'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-4 py-1.5 text-xs font-bold rounded border transition-colors ${
                  language === 'en'
                    ? 'bg-gradient-to-r from-[#f9ce4f] to-[#f5b82a] text-[var(--secondary)] border-[var(--secondary)]/20'
                    : 'bg-transparent border-slate-200 text-slate-600'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;