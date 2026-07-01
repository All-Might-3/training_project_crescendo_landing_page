// src/sections/ClientesLogosSection/ClientesLogosSection.tsx
import { CLIENTES } from '../../utils/clientes_constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ClientesLogosSection = () => {
  return (
    <section className="clientes-logos-section py-12 bg-white flex justify-center shadow-[var(--shadow)] border border-gray-300">
      <div className="container text-center p-12 bg-[var(--light)] rounded-[var(--radius-xl)] shadow-[var(--shadow)] border border-gray-300">
        
          <p className="text-[var(--dark)] text-lg font-semibold mb-8">
            {CLIENTES.title}
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-5 justify-center mx-auto">
            {CLIENTES.logos.map((logo) => (
              <div
                key={logo.id}
                className="logo-item flex items-center justify-center w-full h-20 bg-gradient-to-br from-[var(--secondary)] to-[var(--accent)] rounded-lg shadow-sm hover:transform hover:-translate-y-2 hover:scale-[1.08] hover:shadow-[0_15px_35px_rgba(245,184,42,0.4),0_15px_35px_rgba(0,0,0,0.2)] transition-all duration-200"
              >
                <FontAwesomeIcon
                  icon={logo.icon}
                  className="text-white text-2xl"
                />
              </div>
            ))}
          </div>
        
      </div>
    </section>
  );
};