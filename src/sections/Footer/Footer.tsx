// src/sections/Footer/Footer.tsx
import { useEffect } from 'react';
import { FOOTER } from '../../utils/footer_constants';

export const Footer = () => {
  const { map, reviews, columns, logo, copyright } = FOOTER;

  // Cargar script de reseñas
  useEffect(() => {
    const scriptId = 'review-widget-script-footer';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'text/javascript';
      script.src = reviews.scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }
  }, [reviews.scriptSrc]);

  return (
    <footer className="bg-gradient-to-br from-[#0b1120] via-[#0f172a] to-[#0c1e30] text-white py-20 px-4 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mapa + Reseñas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-16">
          {/* Mapa de Google */}
          <div className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
            <iframe
              src={map.src}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={map.title}
              className="w-full h-[400px] block"
            />
          </div>

          {/* Widget de reseñas */}
          <div className="rounded-xl overflow-hidden shadow-lg bg-white min-h-[400px] flex items-center justify-center">
            <iframe
              className="lc_reviews_widget w-full min-w-full"
              src={reviews.widgetSrc}
              frameBorder="0"
              scrolling="no"
              style={{ minWidth: '100%', width: '100%', height: '100%', minHeight: '400px' }}
              title="Client reviews"
              loading="lazy"
            />
          </div>
        </div>

        {/* Columnas de enlaces */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {columns.map((col, idx) => (
            <div key={idx} className="footer-column">
              <h4 className="text-white text-lg font-semibold mb-4">{col.title}</h4>
              <ul className="list-none space-y-2">
                {col.items.map((item, i) => (
                  <li key={i}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white/90 hover:text-[var(--primary)] transition-colors duration-300"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="text-white/70">{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer inferior: copyright + logo */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-white/45 text-lg">
          <p className="text-center sm:text-left">{copyright}</p>
          <img
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            loading="lazy"
            className="opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </footer>
  );
};