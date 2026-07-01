import { POR_QUE } from '../../utils/porque_constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PorQueSection = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Columna izquierda: texto */}
          <div className="flex-1">
            <h2 className="font_title text-3xl md:text-4xl font-bold text-[var(--secondary)] leading-tight">
              {POR_QUE.title}
            </h2>
            <p className="text-[var(--gray)] text-lg mt-4 leading-relaxed">
              {POR_QUE.description}
            </p>
            <div className="grid grid-cols-1 gap-6 mt-10">
              {POR_QUE.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-4 bg-[var(--light-2)] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary-dark)] text-2xl">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-[var(--secondary)] text-lg">
                      {item.title}
                    </h4>
                    <p className="text-[var(--gray)] text-sm leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha: imagen */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={POR_QUE.image}
              alt="Crescendo Digital Marketing team working on digital marketing strategies"
              className="rounded-2xl shadow-lg w-full max-w-md lg:max-w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};