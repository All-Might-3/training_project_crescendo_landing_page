// src/sections/FaqSection/FaqSection.tsx
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FAQ } from '../../constants/faq_constants';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[var(--light)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Línea ámbar decorativa */}
        <div className="flex justify-center mb-8">
          <div className="w-12 h-1 bg-[var(--primary)] rounded-full" />
        </div>

        {/* Encabezado */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] leading-tight">
            {FAQ.title}
          </h2>
          <p className="text-[var(--gray)] text-lg max-w-2xl mx-auto mt-4">
            {FAQ.subtitle}
          </p>
        </div>

        {/* Lista de preguntas */}
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {FAQ.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`
                  bg-white border border-[var(--border)] rounded-xl overflow-hidden shadow-sm
                  transition-all duration-300
                  ${isOpen ? 'shadow-md' : ''}
                  scroll-animate
                  ${index < 3 ? `scroll-animate-delay-${index + 3}` : `scroll-animate-delay-${index - 2}`}
                `}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className={`
                    w-full px-6 py-5 flex justify-between items-center text-left gap-4
                    font-semibold text-[var(--dark)] text-base
                    transition-all duration-300
                    ${isOpen ? 'pl-5 border-l-4 border-[var(--primary)]' : ''}
                  `}
                  style={
                    isOpen
                      ? {
                          background: 'linear-gradient(135deg, var(--secondary) 0%, var(--secondary-mid) 100%)',
                          color: 'white',
                        }
                      : {}
                  }
                >
                  <span className="flex-1">{item.question}</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`
                      transition-all duration-300 text-sm
                      ${isOpen ? 'rotate-180 text-[var(--primary)]' : 'text-[var(--gray)]'}
                    `}
                  />
                </button>

                <div
                  className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${isOpen ? 'max-h-96' : 'max-h-0'}
                  `}
                >
                  <div
                    className="px-6 py-6 bg-[var(--light)] text-[var(--gray)] text-sm leading-relaxed"
                  >
                    <p className="mb-0">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};