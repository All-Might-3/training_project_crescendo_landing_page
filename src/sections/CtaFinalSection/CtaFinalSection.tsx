// src/sections/CtaFinalSection/CtaFinalSection.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { CTA } from '../../constants/cta_constants';
import heroVideo from '/videos/hero-background..mp4';

export const CtaFinalSection = () => {
  const { title, subtitle, primaryButton, secondaryButton,  } = CTA;

  return (
    <section className="relative bg-[#080f1e] text-white py-28 px-4 overflow-hidden isolate">
      {/* Video de fondo */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              <source src={heroVideo} type="video/mp4" />
              Tu navegador no soporta videos.
            </video>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Línea ámbar decorativa */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-1 bg-[var(--primary)] rounded-full" />
        </div>

        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold max-w-4xl mx-auto leading-tight mb-5">
          {title}
        </h2>
        <p className="text-white/75 text-lg max-w-lg mx-auto mb-11 leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          {/* Botón primario */}
          <a
            href={primaryButton.link}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base md:text-lg 
                       bg-gradient-to-r from-[#fcd96a] via-[#f5b82a] to-[#d9a21b] text-[var(--secondary)] 
                       shadow-[0_8px_36px_rgba(245,184,42,0.5)] hover:shadow-[0_12px_48px_rgba(245,184,42,0.7)] 
                       transition-all duration-300 hover:scale-105"
          >
            {primaryButton.text}
          </a>

          {/* Botón secundario (WhatsApp) */}
          <a
            href={secondaryButton.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base md:text-lg 
                       bg-white/20 text-white border border-white 
                       hover:bg-white/30 transition-all duration-300 hover:scale-105"
          >
            {secondaryButton.text}
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
    </section>
  );
};