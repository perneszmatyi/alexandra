import { NewsCard } from '@/components';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { CardVariant } from './news-card';
import newsMobile from '@/assets/news-mobile.svg';
import newsDesktop from '@/assets/news-desktop.svg';

import 'swiper/css';
import 'swiper/css/pagination';

const newsItems = [
  {
    title: 'Induló csoportok',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    cover: true,
  },
  {
    title: 'Kutatás 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    cover: true,
  },
  {
    title: 'Applikációk',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    cover: true,
  },
  {
    title: 'Kutatás 2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    cover: true,
  },
  {
    title: 'Cím',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    cover: false,
  },
];

export const News = () => {
  return (
    <section id="news" className="relative w-full overflow-hidden pt-10 pb-30 lg:pt-20 lg:pb-26">
      <img src={newsMobile} className="absolute w-full sm:hidden" />
      <img src={newsDesktop} className="absolute hidden sm:block" />
      <div className="relative">
        <div className="mb-16 flex justify-center xl:mb-4">
          <h1 className="font-montagu-slab text-white-text text-3xl font-semibold lg:text-5xl xl:text-7xl">
            Aktualitások
          </h1>
        </div>

        <div className="flex justify-center xl:hidden">
          <div className="relative flex max-w-3/4 flex-col items-center">
            <div className="relative w-full">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                modules={[Pagination, Navigation]}
                className="news-swiper"
              >
                {newsItems.map((item, index) => (
                  <SwiperSlide key={index} className="px-4 pb-10">
                    <NewsCard
                      title={item.title}
                      content={item.content}
                      variant={CardVariant.SMALL}
                      cover={item.cover}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="hidden grid-cols-4 grid-rows-10 gap-x-12 px-25 xl:grid xl:h-[750px] 2xl:h-full">
          <div className="col-start-1 row-span-6 row-start-1 w-full">
            <NewsCard
              title="Induló csoportok"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              variant={CardVariant.LARGE}
              cover
            />
          </div>
          <div className="col-start-1 row-span-4 mt-12 w-full">
            <NewsCard
              title="Cím"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              variant={CardVariant.LARGE}
            />
          </div>
          <div className="col-start-2 row-span-8 row-start-3 w-full">
            <NewsCard
              title="Kutatás 1"
              content="ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.ncididunt ut labore et dolore magna aliqua.  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              variant={CardVariant.LARGE}
              cover
            />
          </div>
          <div className="col-start-3 row-span-6 row-start-5 w-full">
            <NewsCard
              title="Applikációk"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              variant={CardVariant.LARGE}
              cover
            />
          </div>
          <div className="col-start-4 row-span-8 row-start-1 w-full">
            <NewsCard
              title="Kutatás 2"
              content="ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.ncididunt ut labore et dolore magna aliqua.  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              variant={CardVariant.LARGE}
              cover
            />
          </div>
        </div>
      </div>
    </section>
  );
};
