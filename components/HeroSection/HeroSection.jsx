import Image from 'next/image';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.header}>
        <h1 className={styles.heading}>
          Urządzenia Wielofunkcyjne <span>Konica Minolta</span> we Wrocławiu
        </h1>
        <p className={styles.desc}>
          Jesteśmy ekspertami w dziedzinie biurowych urządzeń drukujących
        </p>
        <button className={styles.ctaButton}>Oferta</button>
      </div>
      <div className={styles.heroImgContainer}>
        <Image
          className={styles.heroImg}
          width={837}
          height={670}
          src='/hero-img.webp'
          alt='hero image'
        />
      </div>
    </section>
  );
}
