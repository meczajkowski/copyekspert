import Image from 'next/image';
import styles from './page.module.css';

// components
import HeroSection from '@/components/HeroSection/HeroSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}
