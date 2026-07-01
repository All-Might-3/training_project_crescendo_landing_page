// pages/HomePage.tsx
import Header from '../components/layout/Header';
import { HeroSection } from '../sections/HeroSection';
import { ServicesSection } from '../sections/ServicesSection';
import { PorQueSection } from '../sections/Por-que-Section'; 
import { ClientesLogosSection } from '../sections/ClientesLogosSection';
import { ComparativaSection } from '../sections/ComparativaSection';
export const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="servicios">
          <ServicesSection />
        </section>
        <section id="por-que">   
          <PorQueSection />
        </section>
        <section id="clientes">
        <ClientesLogosSection />
        </section>
        <section id="comparativa">   {/* <-- nuevo */}
          <ComparativaSection />
        </section>
      </main>
    </>
  );
};