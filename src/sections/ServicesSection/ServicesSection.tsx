// src/sections/ServicesSection/ServicesSection.tsx
import { SERVICES } from '../../utils/services_constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/sections/services.css';

export const ServicesSection = () => {
  return (
    <section className="relative py-20 bg-[var(--light-2)] overflow-hidden">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Encabezado global */}
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="font_title">{SERVICES.title}</h2>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto bg-[var(--light-2)]">
          {SERVICES.services.map((service) => (
            <div
              key={service.id}
              className="servicio-card scroll-animate-delay-4 scroll-animate"
            >
              {/* Icono con gradiente */}
              <div
                className="flex w-14 h-14 rounded-full icon-wrapper"
                style={{
                  background: service.gradient,
                  border: 'none',
                }}
              >
                <FontAwesomeIcon
                  icon={service.icon}
                  style={{ color: 'white', fontSize: '1.5rem' }}
                />
              </div>

              {/* Título */}
              <strong className="card_title">{service.title}</strong>

              {/* Subtítulo específico */}
              <p className="service-subtitle">{service.subtitle}</p>

              {/* Lista de características con palomita */}
              <ul className="feature-list">
                {service.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <svg
                      className="feature-check"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Enlace con flecha */}
              <a href={service.link} className="service-link">
                {service.linkText}
                <svg
                  className="service-arrow"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};