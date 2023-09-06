import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href='https://copyekspert.pl/'>
        <Image
          width={254}
          height={53}
          src='/copyekspert_logo.gif'
          alt='Copyekspert Logo'
        />
      </Link>

      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href='/'>Strona główna</Link>
        </li>
        <li className={styles.item}>
          <Link href='/oferta'>Oferta</Link>
        </li>
        <li className={styles.item}>
          <Link href='/serwis'>Serwis</Link>
        </li>
        <li className={styles.item}>
          <Link href='https://www.konicaminolta.pl/pl-pl/support/centrum-pobierania'>
            Sterowniki
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='/kariera'>Kariera</Link>
        </li>
        <li className={styles.item}>
          <Link href='/blog'>Blog</Link>
        </li>
        <li className={styles.item}>
          <Link href='/kontakt'>Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}
