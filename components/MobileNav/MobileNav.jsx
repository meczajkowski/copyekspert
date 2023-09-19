import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { routes } from '../Navbar/Navbar';
import Link from 'next/link';

const MobileNav = (props) => {
  return (
    <div className={props.className}>
      <Sheet>
        <SheetTrigger>
          <Menu size={36} />
        </SheetTrigger>
        <SheetContent side='left'>
          <nav className={'h-4/6'}>
            <ul
              className={
                'py-6 px-4 h-full flex flex-col justify-between overflow-y-visible'
              }
            >
              {routes.map((route, index) => (
                <li key={index}>
                  <SheetClose asChild>
                    <Link
                      className={
                        'block px-4 py-4 text-center rounded-lg transition-all hover:bg-primary hover:text-background hover:scale-110 hover:shadow-lg'
                      }
                      href={route.href}
                    >
                      {route.label}
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
