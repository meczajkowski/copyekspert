const cards = [
  {
    title: 'Kopiarki nowe',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    img: '/kserokopiarka-nowa-wroclaw.jpg',
  },
  {
    title: 'Kopiarki poleasingowe',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    img: '/kserokopiarka-dzierzawa-wroclaw.jpg',
  },
  {
    title: 'Kopiarki dzierżawa',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    img: '/kserokopiarka-poleasingowa-wroclaw.jpg',
  },
];

export default function FeaturesSection() {
  return (
    <section className='bg-secondary'>
      <div className='flex justify-center items-center gap-10 w-full h-full p-10'>
        <div className='flex justify-center gap-10 w-full h-fit p-10'>
          {cards.map((card, index) => (
            <div
              key={index}
              className='flex flex-col items-center justify-between text-center bg-background  max-w-sm rounded-lg shadow-2xl transition-transform  | hover:scale-105'
            >
              <img className='rounded-t-lg w-full' src={card.img} alt='' />
              <div className='p-5'>
                <h2 className='text-3xl mb-2'>{card.title}</h2>
                <p className='text-base mb-3'>{card.desc}</p>
                <button className='bg-primary text-background w-full py-4 rounded-lg shadow-md'>
                  Sprawdź
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
