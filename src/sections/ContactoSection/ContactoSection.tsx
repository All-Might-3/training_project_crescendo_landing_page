// src/sections/ContactoSection/ContactoSection.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CONTACTO } from '../../constants/contacto_constants';

export const ContactoSection = () => {
  const { info } = CONTACTO;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
       

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Columna de información de contacto */}
          <div className="md:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] mb-8">
              {info.title}
            </h2>

            {info.items.map((item, index) => (
              <div
                key={index}
                className={`flex items-start gap-5 mb-8 scroll-animate scroll-animate-delay-${
                  index + 3
                }`}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0
                             bg-gradient-to-br from-[var(--secondary)] to-[var(--secondary-mid)]
                             text-white text-xl shadow-[0_4px_14px_rgba(16,29,59,0.2)]"
                >
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[var(--dark)] mb-1">
                    {item.title}
                  </h4>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-[var(--secondary)] font-semibold hover:text-[var(--primary)] transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[var(--gray)] mb-0">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Redes sociales */}
            <div className="flex gap-4 mt-8 pt-8 border-t border-[var(--border)]">
              {info.social.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-lg shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-md"
                  style={{ background: social.bg }}
                  title={social.icon.iconName}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};