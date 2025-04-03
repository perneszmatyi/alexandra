import portrait from '../../assets/portrait.png';
import quoteUp from '../../assets/quote-up.svg';
import quoteLine from '../../assets/quote-line.svg';

export const Hero = () => {
  return (
    <section className="w-full flex-grow border-t border-white pt-18 pb-18 lg:pb-34">
      <div className="mx-auto max-w-7xl pr-6 pl-20 xl:pr-40">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:grid-rows-2 lg:gap-20">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <img
              src={quoteUp}
              className="absolute -top-4 right-0 h-4 w-6 lg:top-0 lg:h-10 lg:w-13"
            />
            <div className="relative flex flex-col gap-1 lg:gap-12">
              <div className="pr-6 pl-6 lg:ml-14 lg:w-1/2 lg:pr-0 lg:pl-0">
                <blockquote className="font-raleway text-white-text text-center text-left text-base leading-tight italic lg:text-3xl lg:not-italic">
                  Alattad a föld, fölötted az ég, benned a létra.
                </blockquote>
              </div>

              <div className="flex w-full items-center justify-end gap-4 pr-6 pl-6 lg:justify-end lg:gap-8">
                <div className="bg-white-text h-px w-12 lg:w-20 xl:w-30" />
                <span className="font-raleway text-white-text lg:text-3xl">Weöres Sándor</span>
              </div>

              <img
                src={quoteUp}
                className="absolute -bottom-4 left-0 h-4 w-6 rotate-180 lg:bottom-0 lg:h-10 lg:w-13"
              />
            </div>
          </div>

          <div className="relative flex justify-center lg:col-start-1 lg:row-span-2 lg:row-start-1">
            <img
              src={portrait}
              className="max-w-[220px] rounded-t-full shadow-[-1rem_1.25rem_0_0_#e5f0f5] lg:max-w-[420px] xl:max-w-[530px]"
            />
          </div>

          <div className="lg:col-start-2 lg:row-start-2">
            <h1 className="font-montagu-slab text-white-text mb-4 text-4xl font-medium md:text-7xl xl:text-8xl">
              Boldov Alexandra
            </h1>
            <p className="font-raleway text-white-text max-w-[15ch] md:max-w-[20ch] md:text-2xl xl:text-4xl">
              Felnőtt klinikai és mentálhigiéniai szakpszichológus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
