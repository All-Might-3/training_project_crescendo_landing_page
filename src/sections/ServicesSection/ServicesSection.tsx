// src/sections/ServicesSection/ServicesSection.tsx
import { SERVICES } from '../../utils/services_constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/sections/services.css';

export const ServicesSection = () => {
  return (
    <section className="relative py-20 bg-[var(--light-2)] overflow-hidden">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Encabezado */}
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="font_title">{SERVICES.title}</h2>
          <p className="font_subtitle">{SERVICES.subtitle}</p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ">
          {SERVICES.services.map((service) => (
            <div
              key={service.id}
              className="servicio-card scroll-animate-delay-4 scroll-animate "  
            >
              {/* Icono (sin cambios) */}
              <div className="flex  w-14 h-14 rounded-lg bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-400/20 mb-4 text-amber-400 text-2xl icon-wrapper">
                <FontAwesomeIcon icon={service.icon} />
              </div>

              <strong className="card_title justify-center">
                {service.title}
              </strong>
              <p className="font_subtitle justify-center">
                {service.description}
              </p>

              {/* Enlace con la nueva clase */}
              <a
                href={service.link}
                className="font_link inline-flex items-center justify-center gap-2 mt-4" 
              >
                Saber más
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

