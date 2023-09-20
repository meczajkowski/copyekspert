import Image from 'next/image';
import styles from './page.module.css';

// components
import HeroSection from '@/components/HeroSection/HeroSection';
import FeaturesSection from '@/components/FeaturesSection/FeaturesSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}
