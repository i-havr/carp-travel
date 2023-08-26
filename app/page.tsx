import { SectionHero } from '@/components/HeroSection/SectionHero';
import { SectionAbout } from '@/components/AboutSection/SectionAbout';
import { SectionServices } from '@/components/ServicesSection/SectionServices';
import { SectionCareer } from '@/components/CareerSection/SectionCareer';
import { SectionGallery } from '@/components/GallerySection/SectionGallery';
import { SectionContacts } from '@/components/ContactsSection/SectionContacts';
import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between font-inter font-extralight">
      <SectionHero />
      <SectionAbout />
      <SectionServices />
      <SectionCareer />
      <SectionGallery />
      <SectionContacts />
      <Toaster />
    </main>
  );
}
