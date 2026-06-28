import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: 'hero' },
    { label: 'Servicios', href: 'services' },
    { label: 'Testimonios', href: 'testimonials' },
    { label: 'Contacto', href: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-slate-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}

       

        <div className="flex items-center">
            
          <a href="/" className="text-2xl font-bold text-white">
            Crescendo
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center text-sm ">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={`#${link.href}`}
                className="text-slate-300 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-amber-400 hover:bg-amber-300 text-slate-900 px-5 py-2 rounded-md font-semibold transition-colors duration-200 "
          >
            Schedule a Call
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white focus:outline-none"
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-sm border-t border-slate-800">
          <ul className="container mx-auto px-4 py-4 space-y-4 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={`#${link.href}`}
                  className="block text-slate-300 hover:text-white transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="block bg-amber-400 hover:bg-amber-300 text-slate-900 px-5 py-2 rounded-md font-semibold text-center transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Schedule a Call
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;