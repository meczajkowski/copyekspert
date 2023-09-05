import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href='/'>Strona główna</Link>
      <Link href='/oferta'>Oferta</Link>
      <Link href='/serwis'>Serwis</Link>
      <Link href='https://www.konicaminolta.pl/pl-pl/support/centrum-pobierania'>
        Sterowniki
      </Link>
      <Link href='/kariera'>Kariera</Link>
      <Link href='/blog'>Blog</Link>
      <Link href='/kontakt'>Kontakt</Link>
    </nav>
  );
}
