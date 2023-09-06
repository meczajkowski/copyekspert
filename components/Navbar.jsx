import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href='https://copyekspert.pl/'>
        <Image
          width={254}
          height={53}
          src='/copyekspert_logo.gif'
          alt='Copyekspert Logo'
        />
      </Link>

      <ul>
        <li>
          <Link href='/'>Strona główna</Link>
        </li>
        <li>
          <Link href='/oferta'>Oferta</Link>
        </li>
        <li>
          <Link href='/serwis'>Serwis</Link>
        </li>
        <li>
          <Link href='https://www.konicaminolta.pl/pl-pl/support/centrum-pobierania'>
            Sterowniki
          </Link>
        </li>
        <li>
          <a href='/kariera'>Kariera</a>
        </li>

        <li>
          <a href='/blog'>Blog</a>
        </li>

        <li>
          <a href='/kontakt'>Kontakt</a>
        </li>
      </ul>
    </nav>
  );
}
