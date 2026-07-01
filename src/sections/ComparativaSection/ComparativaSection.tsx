// src/sections/ComparativaSection/ComparativaSection.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { COMPARATIVA } from '../../utils/comparativa_constants';
import '../../styles/sections/comparativa.css';

export const ComparativaSection = () => {
  const { title, subtitle, commitment, table } = COMPARATIVA;

  return (
    <section className="comparativa-section relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado */}
        <div className="comparativa-header max-w-4xl mx-auto text-center mb-14">
          <h2 className="font_title">{title}</h2>
          <p>{subtitle}</p>
        </div>

        {/* Bloque de compromiso */}
        <div className="max-w-5xl mx-auto mb-14">
          <div className="commitment-box scroll-animate">
            <h3>{commitment.heading}</h3>
            <p>{commitment.description}</p>
            <ul className="commitment-pillars">
              {commitment.pillars.map((pillar, index) => (
                <li
                  key={index}
                  className={`scroll-animate-delay-${
                    index + 2
                  } scroll-animate`}
                >
                  <span className="pillar-icon">
                    <FontAwesomeIcon icon={pillar.icon} />
                  </span>
                  {pillar.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tabla comparativa */}
        <div className="max-w-5xl mx-auto">
          <div className="comparison-table-wrapper scroll-animate">
            <table className="comparison-simple">
              <thead>
                <tr>
                  {table.headers.map((header, idx) => (
                    <th key={idx}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, index) => (
                  <tr
                    key={index}
                    className={`scroll-animate-delay-${
                      index + 2
                    } scroll-animate`}
                  >
                    <td>{row.commitment}</td>
                    <td>{row.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};