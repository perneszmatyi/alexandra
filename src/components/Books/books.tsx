import arrow from '@/assets/arrow.svg';
import arrowBig from '@/assets/arrow-big.svg';
import flower from '@/assets/info-flower.svg';
import kep1 from '@/assets/kep1.png';
import kep2 from '@/assets/kep2.png';
import kep3 from '@/assets/kep3.png';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import './books.css';
import { useState } from 'react';

const books = [
  {
    id: 1,
    image: kep1,
    title: 'KÖNYV ÍRÓ - CÍM 2023',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 2,
    image: kep2,
    title: 'MÁSIK KÖNYV - MÁS ÍRÓ 2022',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 3,
    image: kep3,
    title: 'HARMADIK KÖNYV - HARMADIK ÍRÓ 2021',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
];

export const Books = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMove = (splide: any) => {
    setActiveIndex(splide.index);
  };

  return (
    <section id="books" className="bg-white-text">
      <div className="flex flex-col px-9 py-9 lg:px-40 2xl:px-86">
        <div className="mb-16 flex justify-center lg:mb-18">
          <h2 className="font-montagu-slab text-blue-main text-3xl font-semibold lg:text-4xl xl:text-5xl 2xl:text-7xl">
            Könyvespolc
          </h2>
        </div>

        <div className="> relative mb-16 flex justify-center xl:max-w-full">
          <Splide
            options={{
              type: 'loop',
              perPage: 3,
              arrows: true,
              focus: 'center',
              pagination: false,
              arrowPath: 'M14.5117 1.14209L1.29883 14.355L14.5117 27.5679',
              breakpoints: {
                1024: {
                  perPage: 1,
                  pagination: true,
                },
              },
            }}
            onMoved={handleMove}
          >
            {books.map((book) => (
              <SplideSlide key={book.id}>
                <img src={book.image} alt={book.title} />
              </SplideSlide>
            ))}
          </Splide>
        </div>

        <div className="flex flex-col px-8 lg:mx-auto lg:max-w-sm lg:px-0">
          <h2 className="font-montagu-slab text-blue-main mb-4 text-xl lg:text-2xl xl:text-3xl">
            {books[activeIndex].title}
          </h2>

          <p className="font-raleway text-blue-main text-lg leading-tight">
            {books[activeIndex].description}
          </p>
        </div>
      </div>
    </section>
  );
};
