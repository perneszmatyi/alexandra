import arrow from '@/assets/arrow.svg';
import arrowBig from '@/assets/arrow-big.svg';
import kep1 from '@/assets/kep1.png';
import kep2 from '@/assets/kep2.png';
import kep3 from '@/assets/kep3.png';

export const Books = () => {
  return (
    <section className="bg-white-text">
      <div className="flex flex-col px-9 py-9 lg:px-40 2xl:px-86">
        <div className="mb-16 flex justify-center lg:mb-18">
          <h2 className="font-montagu-slab text-blue-main text-3xl font-semibold lg:text-4xl xl:text-5xl 2xl:text-7xl">
            Könyvespolc
          </h2>
        </div>

        <div className="mb-8 flex items-center justify-between lg:gap-16 xl:gap-36">
          <div className="cursor-pointer">
            <img src={arrow} className="lg:hidden" />
            <img src={arrowBig} className="hidden lg:block" />
          </div>

          <div className="flex h-full items-center lg:gap-12 xl:gap-20">
            <div className="hidden lg:block">
              <img src={kep2}></img>
            </div>

            <div>
              <img src={kep1} className="w-[160px] lg:w-[450px] xl:w-[480px]"></img>
            </div>

            <div className="hidden lg:block">
              <img src={kep3}></img>
            </div>
          </div>

          <div className="cursor-pointer">
            <img src={arrow} className="rotate-180 lg:hidden" />
            <img src={arrowBig} className="hidden rotate-180 lg:block" />
          </div>
        </div>

        <div className="flex flex-col px-8 lg:mx-auto lg:max-w-sm lg:px-0">
          <h2 className="font-montagu-slab text-blue-main mb-4 text-xl lg:text-2xl xl:text-3xl">
            KÖNYV ÍRÓ - CÍM 2023
          </h2>

          <p className="font-raleway text-blue-main text-lg leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>

          <div className="mx-auto mt-8 flex gap-1 lg:hidden">
            <div className="border-blue-main h-3 w-3 rounded-full border"></div>
            <div className="border-blue-main h-3 w-3 rounded-full border"></div>
            <div className="border-blue-main bg-blue-main border» h-3 w-3 rounded-full"></div>
            <div className="border-blue-main h-3 w-3 rounded-full border"></div>
            <div className="border-blue-main h-3 w-3 rounded-full border"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
