// src/sections/ComparativaSection/ComparativaSection.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { COMPARATIVA } from '../../utils/comparativa_constants';

export const ComparativaSection = () => {
  const { title, subtitle, commitment, table } = COMPARATIVA;

  return (
    <section className="py-20 bg-[var(--light)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* === Línea ámbar decorativa  === */}
        <div className="flex justify-center mb-8">
          <div className="w-12 h-1 bg-[var(--primary)] rounded-full" />
        </div>

        {/* === Encabezado === */}
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-6xl md:text-4xl font-bold text-[var(--secondary)] leading-tight">
            {title}
          </h2>
          <p className="text-[var(--gray)] text-lg max-w-3xl mx-auto mt-4">
            {subtitle}
          </p>
        </div>

        {/* === Bloque de compromiso (más ancho) === */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-white to-[#f7f9ff] border-l-4 border-[var(--primary)] rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl font-semibold text-[var(--secondary)] mb-2">
              {commitment.heading}
            </h3>
            <p className="text-[var(--gray)] text-lg mb-4 max-w-3xl">
              {commitment.description}
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 list-none p-0">
              {commitment.pillars.map((pillar, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 bg-white border border-[var(--border)] rounded-xl p-3 shadow-sm"
                >
                  <span className="text-[var(--primary-dark)] mt-1">
                    <FontAwesomeIcon icon={pillar.icon} />
                  </span>
                  <span className="text-[var(--dark)] font-medium">
                    {pillar.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* === Tabla comparativa (más ancha) === */}
        <div className="max-w-6xl mx-auto">
          <div className="overflow-x-auto bg-white rounded-2xl shadow-md border border-[var(--border)]">
            <table className="w-full border-collapse table-auto">
              <thead className="bg-gradient-to-r from-[var(--secondary)] via-[#1a2f5e] to-[var(--accent)] text-white">
                <tr>
                  {table.headers.map((header, idx) => (
                    <th
                      key={idx}
                      className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-[var(--border)] last:border-b-0 hover:bg-[var(--light-2)] transition-colors"
                  >
                    <td className="px-6 py-4 font-bold text-[var(--secondary)] w-[36%]">
                      {row.commitment}
                    </td>
                    <td className="px-6 py-4 text-[var(--dark)]">
                      {row.meaning}
                    </td>
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