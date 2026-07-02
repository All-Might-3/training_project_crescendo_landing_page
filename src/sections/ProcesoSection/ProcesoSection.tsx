// src/sections/ProcesoSection/ProcesoSection.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useEffect } from 'react';
import { PROCESO } from '../../constants/proceso_constants';
import logo from '../../assets/images/logodorado.png'; // Ajusta la ruta

export const ProcesoSection = () => {
  const { title, subtitle, steps } = PROCESO;

  // Referencia para el elemento que debe animarse (la mascota)
  const mascotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Agregamos la clase 'animate' al elemento con clase 'proceso-mascot'
            entry.target.classList.add('animate');
            observer.disconnect(); // Solo una vez
          }
        });
      },
      { threshold: 0.3 } // Ajusta si es necesario (0.2 o 0.1 para activar antes)
    );

    if (mascotRef.current) {
      observer.observe(mascotRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Contenedor de la mascota (sin ref) */}
      <div
        className="hidden lg:block absolute inset-0 pointer-events-none z-[4]"
        style={
          {
            '--p1-x': '268px',
            '--p1-y': '200px',
            '--a12-x': '440px',
            '--a12-y': '100px',
            '--p2-x': '640px',
            '--p2-y': '200px',
            '--a23-x': '840px',
            '--a23-y': '100px',
            '--p3-x': '1050px',
            '--p3-y': '200px',
          } as React.CSSProperties
        }
      >
        {/* La ref se asigna directamente al elemento con clase 'proceso-mascot' */}
        <div ref={mascotRef} className="proceso-mascot">
          <img src={logo} alt="Crescendo" width="54" height="54" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Línea ámbar */}
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
              {/* Número */}
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
    </section>
  );
};