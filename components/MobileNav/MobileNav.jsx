import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
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
          <nav>
            <ul className={'py-6 px-4'}>
              {routes.map((route, index) => (
                <li key={index}>
                  <Link
                    className={
                      'block px-4 py-4 text-center rounded-lg transition-all hover:bg-primary hover:text-background hover:scale-110 hover:shadow-lg'
                    }
                    href={route.href}
                  >
                    {route.label}
                  </Link>
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
