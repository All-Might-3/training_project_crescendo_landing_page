// src/sections/ProcesoSection/ProcesoSection.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PROCESO } from '../../utils/proceso_constants';
// Importa la imagen de la mascota (favicon o logo)
import logo from '../../assets/images/logodorado.png';

export const ProcesoSection = () => {
  const { title, subtitle, steps } = PROCESO;

  return (
    <section className="py-20 bg-white relative overflow-hidden">
                    {/* Mascota con animación personalizada */}
      <div 
        className="hidden lg:block absolute inset-0 pointer-events-none z-[4]"
        style={{
          // Variables para las posiciones
          '--p1-x': '0px',
          '--p1-y': '0px',
          '--a12-x': '200px',
          '--a12-y': '200px',
          '--p2-x': '480px',
          '--p2-y': '150px',
          '--a23-x': '800px',
          '--a23-y': '200px',
          '--p3-x': '1050px',  
          '--p3-y': '200px',   
        } as React.CSSProperties}
      >
        
        <div className="proceso-mascot">
          <img src={logo} alt="Crescendo" width="54" height="54" />
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Línea ámbar decorativa */}
        <div className="flex justify-center mb-8">
          <div className="w-12 h-1 bg-[var(--primary)] rounded-full" />
        </div>

        {/* Encabezado */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] leading-tight">
            {title}
          </h2>
          <p className="text-[var(--gray)] text-lg max-w-2xl mx-auto mt-4">
            {subtitle}
          </p>
        </div>

        {/* Grid de pasos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`
                bg-white rounded-2xl p-8 text-center 
                border border-[var(--border)]
                transition-all duration-300 
                hover:bg-gradient-to-br hover:from-white/30 hover:to-white/10
                hover:border-white/55
                hover:shadow-[0_10px_24px_rgba(245,184,42,0.16)]
                hover:-translate-y-1
                scroll-animate 
                ${index === 0 ? 'scroll-animate-delay-6' : `scroll-animate-delay-${index}`}
                group
              `}
            >
              {/* Círculo numérico con efecto de elevación en hover de la tarjeta */}
              <div
                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center
                           bg-gradient-to-br from-[var(--primary-light)] to-[var(--primary)]
                           text-[var(--secondary)] text-3xl font-extrabold
                           shadow-[0_8px_24px_rgba(245,184,42,0.35)]
                           transition-all duration-300 
                           group-hover:scale-110 group-hover:-translate-y-1
                           group-hover:shadow-[0_12px_32px_rgba(245,184,42,0.45)]
                           relative z-10"
              >
                {step.number}
              </div>

              <h3 className="text-xl font-semibold text-[var(--dark)] mb-3 transition-colors group-hover:text-[var(--secondary)]">
                {step.title}
              </h3>
              <p className="text-[var(--gray)] text-sm leading-relaxed mb-4">
                {step.description}
              </p>

              {/* Enlace con efectos independientes */}
              {step.link && (
                <a
                  href={step.link}
                  className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold 
                             transition-all duration-300 ease-in-out
                             hover:scale-105"
                >
                  <span className="transition-transform duration-300 hover:-translate-x-1">
                    {step.linkText}
                  </span>
                  <FontAwesomeIcon 
                    icon={step.linkIcon} 
                    className="transition-transform duration-300 hover:translate-x-1" 
                  />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mascota decorativa (posicionada absolutamente) */}
      
    </section>
  );
};