// sections/HeroSection/HeroSection.tsx

import heroVideo from '../../assets/videos/hero-background..mp4';
import { HERO } from '../../utils/hero_constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden ">
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

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenido */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 z-10">
        {/* Badge header */}
        <div className="max-w-xl mx-auto text-center mb-4">
          <div className="inline-block px-6 py-1.5 text-white text-center text-sm sm:text-base font-medium border border-white/15 rounded-2xl bg-white/5 backdrop-blur-sm">
            {HERO.header}
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Título */}
          <h1 className="hero_title text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {HERO.title}
          </h1>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl text-blue-100/90 max-w-2xl mx-auto mb-10">
            {HERO.subtitle}
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {HERO.buttons.map((btn) => {
              const baseClasses =
                'inline-block font-semibold px-8 py-4 rounded-full text-lg shadow-lg transition-all duration-300 ease-out transform hover:scale-105';

              const variantClasses =
                btn.variant === 'primary'
                  ? 'bg-[linear-gradient(135deg,#fcd96a_0%,#f5b82a_55%,#d9a21b_100%)] text-slate-900 hover:shadow-xl'
                  : 'bg-transparent border-2 border-white/80 text-white hover:bg-white/10 hover:border-white/100 hover:text-white';

              return (
                <a key={btn.text} href={btn.href} className={`${baseClasses} ${variantClasses}`}>
                  {btn.text}
                </a>
              );
            })}
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-4 w-full  justify-center gap-4 max-w-4xl mx-auto  ">
            {HERO.stats.map((stat, index) => (
              <div key={index} className="text-center ">
                <div className="  flex items-center justify-center py-1.5 text-white text-[13px] sm:text-[13px] border border-white/15 rounded-2xl bg-white/5 backdrop-blur-sm "  >
                  <FontAwesomeIcon icon={stat.icon} className="text-amber-400 mr-2" />
                  {stat.text}
                </div>
              </div>
            ))}
          </div>

          {/* TOP BOXES */}
          <div className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {HERO.top_boxes.map((box) => (
                <div
                  key={box.label}
                  className="flex flex-col items-start justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl overflow-hidden h-[220px]"
                >
                  <img
                    src={box.image}
                    alt={box.label}
                    className="w-full h-full object-cover"
                  />
                  <span className="w-full text-center text-white text-sm font-medium pb-2">
                    {box.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* MIDDLE BOXES */}
          
<div className="mt-8">
  <div className="grid grid-cols-[20%_20%_20%_30%] justify-between max-w-4xl mx-auto h-[310px]">
    {HERO.middle_boxes.map((box, index) => {
      if (box.type === 'icon') {
        let variantClass = 'midle-icon-color-1';
        if (index === 1) variantClass = 'midle-icon-color-2';
        else if (index === 2) variantClass = 'midle-icon-color-3';

        return (
          <div
            key={index}
            className="stat bg-white/10 backdrop-blur-sm border-x border-b border-white/15 rounded-2xl flex flex-col items-center p-4 h-full border-top-gradient"
          >
            <div className={`midle-icon-base ${variantClass}`}>
              <FontAwesomeIcon icon={box.icon} className="scroll-animate-delay-3 scroll-animate" />
            </div>
            <span className="text-white text-sm font-medium text-center">{box.text}</span>
          </div>
        );
      }

      // type === 'text'
      return (
        <div
          key={index}
          className="hero-value-card bg-white/10 backdrop-blur-sm border-x border-b border-white/15 rounded-2xl flex flex-col p-4 h-full justify-between border-top-gradient"
        >
          <strong className="text-white text-base font-semibold text-center mb-2">
            {box.title}
          </strong>
          <ul className="flex flex-col gap-2 flex-1">
            {box.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-white text-sm">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={box.link.href}
            className="mt-3 inline-flex items-center justify-center gap-2 text-amber-400 font-medium text-sm hover:text-amber-300 transition-colors duration-200 group"
          >
            {box.link.text}
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      );
    })}
  </div>
</div>

          {/* BOTTOM BOXES */}
<div className="mt-8">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
    {HERO.bottom_boxes.map((box) => (
      <div
        key={box.title}
        className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-3 py-2 h-[80px] transition-all duration-300 ease-out hover:bg-white/20 hover:scale-105"
      >
        
        <div className="flex-shrink-0 w-[30%] h-full rounded-2xl overflow-hidden bg-white/5">
          <img
            src={box.image}
            alt={box.title}
            className="w-full h-full object-cover"
          />
        </div>

        
        <div className="flex flex-col justify-center flex-1 min-w-0">
          <strong className="text-white text-sm font-semibold truncate">
            {box.title}
          </strong>
          <span className="text-amber-400 text-xs truncate">
            {box.subtitle}
          </span>
        </div>
      </div>
    ))}
  </div>
</div>

        </div>
      </div>
    </section>
  );
};