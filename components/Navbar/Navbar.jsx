import Image from 'next/image';
import Link from 'next/link';

// components
import Container from '../ui/Container';
import MobileNav from '../MobileNav/MobileNav';

export const routes = [
  {
    label: 'Strona główna',
    href: '/',
  },
  {
    label: 'Oferta',
    href: '/oferta',
  },
  {
    label: 'Serwis',
    href: '/serwis',
  },
  {
    label: 'Sterowniki',
    href: 'https://www.konicaminolta.pl/pl-pl/support/centrum-pobierania',
  },
  {
    label: 'Kariera',
    href: '/kariera',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Kontakt',
    href: '/kontakt',
  },
];

export default function Navbar() {
  return (
    <header className={'sm:flex sm:justify-between py-3 px-4 border-b'}>
      <Container>
        <nav className={'flex justify-between'}>
          <MobileNav className={'flex sm:flex lg:hidden'} />
          <Link href='https://copyekspert.pl/'>
            <Image
              width={254}
              height={53}
              src='/copyekspert_logo.gif'
              alt='Copyekspert Logo'
            />
          </Link>

          <ul className={'mx-6 hidden items-center lg:flex'}>
            {routes.map((route, index) => (
              <li key={index}>
                <Link
                  className={
                    'block px-4 py-2 rounded-lg transition-all hover:bg-primary hover:text-background hover:scale-110 hover:shadow-lg '
                  }
                  href={route.href}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
