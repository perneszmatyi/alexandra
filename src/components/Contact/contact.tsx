import formMobile from '@/assets/form-mobile.svg';
import formDesktop from '@/assets/form-desktop.svg';

export const Contact = () => {
  return (
    <section id="contact" className="bg-white-text pr-11 pb-25 pl-9 xl:pl-30">
      <div id="form-container" className="flex w-full flex-col gap-6 xl:flex-row">
        <div className="mt-12 w-full lg:mt-22 xl:w-[30%]">
          <h1 className="font-montagu-slab text-blue-main relative inline-block text-3xl font-bold lg:text-4xl xl:text-5xl xl:leading-[70px] 2xl:text-6xl">
            Vegye fel velem a kapcsolatot
            <img src={formMobile} alt="form-mobile" className="absolute top-5 -right-8 xl:hidden" />
            <img
              src={formDesktop}
              alt="form-desktop"
              className="absolute right-0 hidden xl:block"
            />
          </h1>
        </div>

        <div className="z-99 w-full">
          <div className="max-w-[450px] md:max-w-[450px] lg:max-w-[550px] xl:max-w-[600px] 2xl:max-w-[700px]">
            <form className="bg-blue-main flex flex-col gap-3 rounded-3xl px-5 py-6 shadow-[0.5rem_0.625rem_0_0_#A6CCDE] lg:gap-6 lg:px-9 lg:py-7 lg:shadow-[0.8rem_0.8rem_0_0_#A6CCDE] xl:gap-8 xl:px-11 xl:py-8 xl:shadow-[1rem_1rem_0_0_#A6CCDE]">
              <div className="flex flex-col gap-2 lg:gap-2 xl:gap-3">
                <label className="font-raleway text-white-text text-xl font-medium lg:text-2xl xl:text-3xl">
                  név:
                </label>
                <input
                  type="text"
                  className="bg-white-text text-blue-main font-raleway h-8 w-full rounded-lg p-2 lg:h-12 lg:p-3 lg:text-lg xl:h-16 xl:p-4 xl:text-xl"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-raleway text-white-text text-xl font-medium lg:text-2xl xl:text-3xl">
                  email cím:
                </label>
                <input
                  type="email"
                  className="bg-white-text text-blue-main font-raleway h-8 w-full rounded-lg p-2 lg:h-12 lg:p-3 lg:text-lg xl:h-16 xl:p-4 xl:text-xl"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-raleway text-white-text text-xl font-medium lg:text-2xl xl:text-3xl">
                  üzenet:
                </label>
                <textarea
                  rows={5}
                  className="bg-white-text text-blue-main font-raleway w-full resize-none rounded-lg p-2 lg:h-48 lg:p-3 lg:text-lg xl:h-62 xl:p-4 xl:text-xl"
                />
                <span className="font-raleway text-white-text hidden lg:block">
                  Adatait bizalmasan kezeljük
                </span>
              </div>
            </form>

            <div className="flex w-full justify-center">
              <button
                type="submit"
                className="bg-brown-1 font-montagu-slab text-blue-main mt-9 rounded-3xl px-7 py-3 text-center text-xl font-medium shadow-[0.5rem_0.625rem_0_0_#2F3E5B] lg:mt-11 lg:px-16 lg:py-4 lg:text-2xl lg:shadow-[0.8rem_0.8rem_0_0_#2F3E5B] xl:mt-14 xl:px-22 xl:py-6 xl:text-3xl"
              >
                Küldés
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
