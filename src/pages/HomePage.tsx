// pages/HomePage.tsx

import Header from '../components/layout/Header';
import { HeroSection } from '../sections/HeroSection';


export const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
      </main>
    </>
  );
};