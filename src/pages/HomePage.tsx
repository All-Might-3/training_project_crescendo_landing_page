// pages/HomePage.tsx
// Página principal que agrupa todas las secciones del landing.
// Cada sección está envuelta en un <section> con un id para navegación interna.

import Header from '../components/layout/header/Header';
import { FloatingSocialButtons } from '../components/ui/FloatingSocialButtons';
import { AccessibilityButton } from '../components/ui/AccessibilityButton';
import { HeroSection } from '../sections/HeroSection';
import { ServicesSection } from '../sections/ServicesSection';
import { PorQueSection } from '../sections/Por-que-Section'; 
import { ClientesLogosSection } from '../sections/ClientesLogosSection';
import { ComparativaSection } from '../sections/ComparativaSection';
import { ReviewsSection } from '../sections/ReviewsSection';
import { ProcesoSection } from '../sections/ProcesoSection';
import { FaqSection } from '../sections/FaqSection';
import { CtaFinalSection } from '../sections/CtaFinalSection';
import { ContactoSection } from '../sections/ContactoSection';
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
          <section id="reviews">  
          <ReviewsSection />
        </section>
        <section id="comparativa">   
          <ComparativaSection />
        </section>
                <section id="proceso">   
          <ProcesoSection />
        </section>
                <section id="faq">   
          <FaqSection />
        </section>
        <section id="cta-final">
          <CtaFinalSection />
        </section>
                <section id="contacto">   
          <ContactoSection />
        </section>
        
      </main>
        <FloatingSocialButtons />
      <AccessibilityButton />
    </>
  );
};