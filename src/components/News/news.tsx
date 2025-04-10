import { NewsCard } from '@/components';
import { useState } from 'react';
import { CardVariant } from './news-card';

export const News = () => {
  return (
    <section className="w-full pt-10 pb-30 lg:pt-20 lg:pb-26">
      <div className="h-full">
        <div className="mb-16 flex justify-center xl:mb-4">
          <h1 className="font-montagu-slab text-white-text text-3xl font-semibold lg:text-5xl xl:text-7xl">
            Aktualitások
          </h1>
        </div>

        <div className="flex justify-center xl:hidden">
          <div className="relative flex flex-col items-center gap-14">
            <div className="relative overflow-hidden">
              <div className="flex transition-transform duration-300">
                <NewsCard
                  title="Induló csoportok"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                  cover={true}
                  variant={CardVariant.SMALL}
                />
              </div>
            </div>

            <div className="flex gap-1">
              <div className="border-white-text h-3 w-3 rounded-full border"></div>
              <div className="border-white-text h-3 w-3 rounded-full border"></div>
              <div className="border-white-text h-3 w-3 rounded-full border"></div>
              <div className="border-white-text h-3 w-3 rounded-full border"></div>
              <div className="border-white-text h-3 w-3 rounded-full border"></div>
            </div>
          </div>
        </div>

        <div className="hidden grid-cols-4 grid-rows-10 gap-x-12 px-25 xl:grid xl:h-full">
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
