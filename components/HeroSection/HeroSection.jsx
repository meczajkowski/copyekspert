import Image from 'next/image';
import Link from 'next/link';

import Container from '../ui/Container';
import { buttonVariants } from '@/components/ui/button';

import heroImg from '/public/hero-img.png';

const HeroSection = () => {
  return (
    <>
      <Container>
        {/* Hero */}
        {/* Grid */}
        <section className='grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center my-10 min-h-[70vh]'>
          <div>
            <h1 className='block text-3xl font-bold text-foreground sm:text-4xl lg:text-6xl lg:leading-tight'>
              Urządzenia Wielofunkcyjne
              <span className='text-primary block'>Konica Minolta</span>we
              Wrocławiu
            </h1>
            <p className='mt-3 text-lg text-foreground'>
              Jesteśmy ekspertami w dziedzinie biurowych urządzeń drukujących.
            </p>
            {/* Buttons */}
            <div className='mt-7 grid gap-3 w-full md:inline-flex'>
              <Link
                className={`${buttonVariants({
                  variant: 'default',
                  size: 'lg',
                })} `}
                href='#'
              >
                Dowiedz się więcej
              </Link>
              <Link
                className={`${buttonVariants({
                  variant: 'outline',
                  size: 'lg',
                })} `}
                href='#'
              >
                Skontaktuj się z działem sprzedaży
              </Link>
            </div>
            {/* End Buttons */}
            {/* Review */}
            {/* End Review */}
          </div>
          {/* End Col */}

          <Image
            width={683}
            height={564}
            className='w-full rounded-md'
            src={heroImg}
            alt='Image Description'
          />

          {/* End Col */}
        </section>
        {/* End Grid */}
        {/* End Hero */}
      </Container>
    </>
  );
};

export default HeroSection;
