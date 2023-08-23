import { SectionHero } from '@/components/HeroSection/SectionHero';
import { SectionAbout } from '@/components/AboutSection/SectionAbout';
import { SectionServices } from '@/components/ServicesSection/SectionServices';
import { SectionCareer } from '@/components/CareerSection/SectionCareer';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between font-inter font-extralight">
      <SectionHero />
      <SectionAbout />
      <SectionServices />
      <SectionCareer />
    </main>
  );
}
