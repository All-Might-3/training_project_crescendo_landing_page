// src/App.tsx
import { HomePage } from './pages/HomePage';
import { Footer } from './components/layout/Footer'; // <-- nuevo

function App() {
  return (
    <>
      <HomePage />
      <Footer /> {/* <-- Aquí va el pie de página */}
    </>
  );
}

export default App;