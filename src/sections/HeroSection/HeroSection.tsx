// sections/HeroSection/HeroSection.tsx
import { HERO } from '../../utils/constants';
import heroVideo from '../../assets/videos/hero-background..mp4';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
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
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {HERO.title}
          </h1>
          <p className="text-lg sm:text-xl text-blue-100/90 max-w-2xl mx-auto mb-10">
            {HERO.subtitle}
          </p>

          {/* === DOS BOTONES === */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {HERO.buttons.map((btn) => (
              <a
                key={btn.text}
                href={btn.href}
                className="btn-hover-effect inline-block bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold px-8 py-4 rounded-full text-lg shadow-lg"
              >
                {btn.text}
              </a>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-10">
            {HERO.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-blue-200/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};