// src/sections/ReviewsSection/ReviewsSection.tsx
import { useEffect } from 'react';
import { REVIEWS } from '../../utils/reviews_constants';

export const ReviewsSection = () => {
  const { title, subtitle, widgetSrc, scriptSrc } = REVIEWS;

  useEffect(() => {
    // Cargar el script del widget solo una vez
    const scriptId = 'review-widget-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'text/javascript';
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }
  }, [scriptSrc]);

  return (
    <section className="py-20 bg-[var(--light)] ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Línea ámbar decorativa */}
        <div className="flex justify-center mb-8">
          <div className="w-12 h-1 bg-[var(--primary)] rounded-full" />
        </div>

        {/* Encabezado */}
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5sxl font-bold text-[var(--dark)] leading-tight">
            {title}
          </h2>
          <p className="text-[var(--gray)] text-lg max-w-2xl mx-auto mt-4">
            {subtitle}
          </p>
        </div>

        {/* Widget de reseñas */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md border-3 border-[var(--primary)] p-4 md:p-6">
          <iframe
            className="w-full min-w-full"
            src={widgetSrc}
            frameBorder="0"
            scrolling="no"
            title="Client reviews"
            loading="lazy"
            style={{ minWidth: '100%', width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  );
};