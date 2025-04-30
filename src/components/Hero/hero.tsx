import portrait from '@/assets/portrait.jpg';
import quoteUp from '@/assets/quote-up.svg';
import heroCircles from '@/assets/hero-circles.svg';

export const Hero = () => {
  return (
    <section className="w-full flex-grow pt-18 pb-18 lg:pb-24 xl:pb-34">
      <div className="mx-auto max-w-7xl pr-6 pl-20 xl:max-w-4xl 2xl:max-w-7xl 2xl:pr-40">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:grid-rows-2 lg:gap-20">
          <div className="relative sm:mx-auto sm:w-2/3 md:w-2/3 lg:col-start-2 lg:row-start-1 lg:w-auto xl:w-full">
            <img
              src={quoteUp}
              className="absolute -top-4 right-0 h-4 w-6 lg:top-0 lg:h-10 lg:w-12 xl:h-6 xl:w-8 2xl:h-10 2xl:w-12"
            />
            <div className="relative flex flex-col gap-1 lg:gap-6 2xl:gap-12">
              <div className="pr-6 pl-6 lg:w-2/3 lg:pr-0 lg:pl-0 2xl:ml-14 2xl:w-1/2">
                <blockquote className="font-raleway text-white-text text-center text-left text-base leading-tight italic sm:text-2xl lg:text-2xl lg:not-italic xl:text-xl 2xl:text-3xl">
                  Alattad a föld, fölötted az ég, benned a létra.
                </blockquote>
              </div>

              <div className="flex w-full items-center justify-end gap-4 pr-6 pl-6 lg:justify-end lg:gap-8">
                <div className="bg-white-text h-px w-12 lg:w-20 2xl:w-30" />
                <span className="font-raleway text-white-text xg:text-3xl sm:text-2xl lg:text-2xl xl:text-xl">
                  Weöres Sándor
                </span>
              </div>

              <img
                src={quoteUp}
                className="absolute -bottom-4 left-0 h-4 w-6 rotate-180 lg:bottom-0 lg:h-10 lg:w-12 xl:h-6 xl:w-8 2xl:h-10 2xl:w-12"
              />
            </div>
          </div>

          <div className="relative flex justify-center lg:col-start-1 lg:row-span-2 lg:row-start-1">
            <img
              src={portrait}
              className="relative max-w-[220px] rounded-t-full shadow-[-1rem_1.25rem_0_0_#e5f0f5] md:max-w-[320px] lg:max-w-[420px] 2xl:max-w-[530px]"
            ></img>
            <img
              src={heroCircles}
              className="absolute hidden md:translate-x-2/3 md:translate-y-1/2 lg:block lg:translate-x-5/6 lg:translate-y-5/6 xl:translate-x-2/3 xl:translate-y-5/6 2xl:translate-x-5/6 2xl:translate-y-70"
            ></img>
          </div>

          <div className="lg:col-start-2 lg:row-start-2">
            <h1 className="font-montagu-slab text-white-text md:text-5cxl mb-4 text-4xl font-medium lg:text-5xl xl:text-5xl 2xl:text-8xl">
              Boldov Alexandra
            </h1>
            <p className="font-raleway text-white-text max-w-[15ch] md:max-w-[20ch] md:text-2xl 2xl:text-4xl">
              Felnőtt klinikai és mentálhigiéniai szakpszichológus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
