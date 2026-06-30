// pages/HomePage.tsx

import Header from '../components/layout/Header';
import { HeroSection } from '../sections/HeroSection';
import { ServicesSection } from '../sections/ServicesSection'; // 👈 importar

export const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="servicios">   {/* 👈 ID para anclaje */}
          <ServicesSection />
        </section>
        {/* Más secciones vendrán después */}
      </main>
    </>
  );
};