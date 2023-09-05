import Link from 'next/link';

export default function Navbar() {
  return (
    <nav class='h-16 mx-auto px-5 flex items-center justify-between'>
      <Link href='https://copyekspert.pl/' className='flex items-center'>
        <img
          src='copyekspert_logo.gif'
          className='h-8 mr-3'
          alt='Copyekspert Logo'
        />
      </Link>

      <ul class='flex items-center gap-5'>
        <li>
          <Link
            href='/'
            className='hover:text-primary transition-colors'
            aria-current='page'
          >
            Strona główna
          </Link>
        </li>
        <li>
          <Link href='/oferta' className='hover:text-primary transition-colors'>
            Oferta
          </Link>
        </li>
        <li>
          <Link href='/serwis' className='hover:text-primary transition-colors'>
            Serwis
          </Link>
        </li>
        <li>
          <Link
            href='https://www.konicaminolta.pl/pl-pl/support/centrum-pobierania'
            className='hover:text-primary transition-colors'
          >
            Sterowniki
          </Link>
        </li>
        <li>
          <a href='/kontakt' className='hover:text-primary transition-colors'>
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
}
