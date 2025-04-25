import quoteMark from '@/assets/quote-2.svg';
import logo from '@/assets/logo.svg';
import footerMobile from '@/assets/footer-mobile.svg';
import footerDesktop from '@/assets/footer-desktop.svg';
import footerButton from '@/assets/footer-button.svg';

export const Footer = () => {
  return (
    <footer role="contentinfo" className="bg-blue-main relative overflow-hidden">
      <img src={footerMobile} className="absolute w-full translate-y-1/2 md:hidden" />
      <img
        src={footerDesktop}
        style={{ objectFit: 'cover', width: '100%' }}
        className="absolute bottom-0 hidden md:block"
      />

      <div className="relative px-9 pt-12 md:pb-60 lg:pt-36 lg:pb-60 xl:pb-100">
        <div className="relative mx-auto flex flex-col px-3 md:max-w-lg">
          <img
            src={quoteMark}
            className="absolute right-0 w-6 translate-x-full -translate-y-full lg:w-12"
          ></img>

          <blockquote className="font-raleway text-white-text text-lg italic md:text-3xl md:not-italic">
            Mielőtt az élet nyilvános harcterein győznél, először önmagaddal kell megvívnod a
            csatát. Minden változás <span className="font-bold">Veled</span> kezdődik.
          </blockquote>

          <div className="mt-4 flex items-center justify-end gap-3 text-lg">
            <div className="bg-white-text h-px w-16 lg:w-32"></div>
            <span className="text-white-text font-raleway lg:text-3xl">Sean Covey</span>
          </div>

          <img
            src={quoteMark}
            className="left-0 w-6 -translate-x-full -translate-y-full rotate-180 lg:w-12"
          />
        </div>

        <div className=":gap-15 mt-60 flex flex-col items-start gap-3 md:mt-40 md:flex-row md:justify-center lg:mt-65">
          <a
            href="#about"
            className="text-white-text font-raleway cursor-pointer text-sm lg:text-base"
          >
            Rólam
          </a>
          <a
            href="#login"
            className="text-white-text font-raleway cursor-pointer text-sm lg:text-base"
          >
            Bejelentkezés
          </a>
          <a
            href="#news"
            className="text-white-text font-raleway cursor-pointer text-sm lg:text-base"
          >
            Aktualitások
          </a>
          <a
            href="#books"
            className="text-white-text font-raleway cursor-pointer text-sm lg:text-base"
          >
            Könyvespolc
          </a>
          <a className="text-white-text font-raleway cursor-pointer text-sm lg:text-base">
            Adatkezelési tájékoztató{' '}
          </a>
        </div>

        <div className="mt-10 flex gap-2 md:justify-center lg:pb-10">
          <span className="text-white-text font-raleway text-sm md:text-base">
            Webpage designed by
          </span>
          <a target="_blank" rel="noopener noreferrer" href="https://lizardprojects.com/">
            <img src={logo} className="md:w-50" alt="Lizard Projects logo" />
          </a>
        </div>
        <div className="relative my-10 flex justify-end md:hidden">
          <a
            href="#header"
            aria-label="Vissza a lap tetejére"
            className="bg-brown-1 flex h-15 w-16 cursor-pointer items-center justify-center rounded-full"
          >
            <img src={footerButton} alt="" aria-hidden={true} />
          </a>
        </div>
      </div>
    </footer>
  );
};
