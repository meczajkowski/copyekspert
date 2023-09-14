export default function FeaturesSection() {
  return (
    <section className='bg-primary h-screen'>
      <div className='flex justify-center items-center gap-10 w-full h-full p-10'>
        {/* Card 1 */}
        <div className='flex flex-col items-center justify-between text-center bg-background  max-w-xs rounded-lg shadow-2xl'>
          <img
            class='rounded-t-lg'
            src='https://flowbite.com/docs/images/blog/image-1.jpg'
            alt=''
          />
          <div className='p-5'>
            <h2 className='text-3xl mb-2'>Kopiarki nowe</h2>
            <p className='text-base mb-3'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.{' '}
            </p>
            <button className='bg-primary text-background w-full py-4 rounded-lg shadow-md'>
              Sprawdź
            </button>
          </div>
        </div>
        {/* Card 2 */}
        <div className='flex flex-col items-center justify-between text-center bg-background  max-w-xs rounded-lg shadow-2xl'>
          <img
            class='rounded-t-lg'
            src='https://flowbite.com/docs/images/blog/image-1.jpg'
            alt=''
          />
          <div className='p-5'>
            <h2 className='text-3xl mb-2'>Kopiarki poleasingowe</h2>
            <p className='text-base mb-3'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.{' '}
            </p>
            <button className='bg-primary text-background w-full py-4 rounded-lg shadow-md'>
              Sprawdź
            </button>
          </div>
        </div>
        {/* Card 3 */}
        <div className='flex flex-col items-center justify-between text-center bg-background  max-w-xs rounded-lg shadow-2xl'>
          <img
            class='rounded-t-lg'
            src='https://flowbite.com/docs/images/blog/image-1.jpg'
            alt=''
          />
          <div className='p-5'>
            <h2 className='text-3xl mb-2'>Kopiarki dzierżawa</h2>
            <p className='text-base mb-3'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.{' '}
            </p>
            <button className='bg-primary text-background w-full py-4 rounded-lg shadow-md'>
              Sprawdź
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
