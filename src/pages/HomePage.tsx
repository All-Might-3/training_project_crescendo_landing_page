// pages/HomePage.tsx
import Header from '../components/layout/Header';
import { HeroSection } from '../sections/HeroSection';
import { ServicesSection } from '../sections/ServicesSection';
import { PorQueSection } from '../sections/Por-que-Section'; // 👈 importar

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
        <section id="por-que">   {/* 👈 ID para anclaje si lo necesitas */}
          <PorQueSection />
        </section>
        {/* Más secciones vendrán después */}
      </main>
    </>
  );
};