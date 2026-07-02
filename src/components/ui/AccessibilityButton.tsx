import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons';

export const AccessibilityButton = () => {
  return (
    <button
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-2xl shadow-[0_4px_15px_rgba(245,184,42,0.4)] hover:scale-105 hover:shadow-[0_6px_24px_rgba(245,184,42,0.5)] transition-all duration-300 border-none cursor-pointer"
      aria-label="Opciones de accesibilidad"
      onClick={() => {
        // Aquí puedes agregar la lógica de accesibilidad
        console.log('Accesibilidad activada');
      }}
    >
      <FontAwesomeIcon icon={faUniversalAccess} />
    </button>
  );
};