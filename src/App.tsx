import { Header, Hero, Info, Books, Contact, News, Footer } from './components';
import heroVertMobile from '@/assets/hero-vert-mobile.svg';
import heroHorMobile from '@/assets/hero-hor-mobile.svg';
import heroHorDesktop from '@/assets/hero-hor-desktop.svg';
import heroRightDesktop from '@/assets/hero-right-desktop.svg';
import heroVertDesktop from '@/assets/hero-vert-desktop.svg';
import infoLineMobile from '@/assets/info-line-mobile.svg';
import footerDesktop from '@/assets/footer-desktop.svg';
import infoLine from '@/assets/info-line.svg';

function App() {
  return (
    <div className="bg-blue-main">
      <div className="relative flex flex-col">
        <img className="absolute top-0 xl:hidden" src={heroVertMobile} />
        <img className="absolute top-26 right-0 hidden xl:block" src={heroRightDesktop} />

        <img className="absolute hidden xl:block" src={heroVertDesktop} />

        <img className="absolute top-[72.5px] w-full md:hidden" src={heroHorMobile} />
        <img
          className="absolute hidden w-full md:top-[72.5px] md:block xl:top-26"
          src={heroHorDesktop}
        />
        <Header />
        <Hero />
      </div>
      <div className="relative flex flex-col">
        <img src={infoLineMobile} className="absolute xl:hidden"></img>
        {/* <img src={infoLine} className="absolute hidden xl:block"></img> */}
        <Info />
        <Contact />
      </div>
      <News />
      <Books />

      <Footer />
    </div>
  );
}

export default App;
