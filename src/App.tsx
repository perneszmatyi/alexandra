import { Header, Hero, Info, Books, Contact, News, Footer } from './components';
import heroVertMobile from '@/assets/hero-vert-mobile.svg';
import heroHorMobile from '@/assets/hero-hor-mobile.svg';
import heroHorDesktop from '@/assets/hero-hor-desktop.svg';
import heroRightDesktop from '@/assets/hero-right-desktop.svg';
import heroVertDesktop from '@/assets/hero-vert-desktop.svg';
import infoLineMobile from '@/assets/info-line-mobile.svg';
import footerDesktop from '@/assets/footer-desktop.svg';
import infoFlower from '@/assets/info-flower.svg';
import infoLine from '@/assets/info-line.svg';
import { useState, useEffect } from 'react';

function App() {
  const [rightCurvePath, setRightCurvePath] = useState('');
  const [endX, setEndX] = useState<number>();
  const [horizontalEndX, setHorizontalEndX] = useState<number>();

  console.log(horizontalEndX);
  useEffect(() => {
    const updatePath = () => {
      const containerWidth = document.querySelector('svg')?.clientWidth || 0;
      const contactForm = document.querySelector('form');
      if (!contactForm) {
        return;
      }

      const horizontalEndX = containerWidth * 0.9;
      const formRect = contactForm?.getBoundingClientRect();
      const endX = formRect.right + 128;
      setEndX(endX);
      setRightCurvePath(`M ${horizontalEndX + 100} 1300 q 0 -100 -100 -100`);
      setHorizontalEndX(horizontalEndX);
    };

    updatePath();

    window.addEventListener('resize', updatePath);
    return () => window.removeEventListener('resize', updatePath);
  }, []);

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
        <img src={infoFlower} className="absolute z-2 hidden xl:block"></img>
        <img src={infoLineMobile} className="absolute xl:hidden"></img>
        <svg
          width="full"
          height="full"
          preserveAspectRatio="none"
          className="absolute hidden xl:block"
        >
          <path d="m 86 0 v 980" stroke="var(--color-blue-main)"></path>
          <path d="m 86 980 q 0 200 200 200" stroke="var(--color-blue-main)" fill="none"></path>
          <line x1="286" y1="1180" x2="90%" y2="1180" stroke="var(--color-blue-main)"></line>
          <path
            d={`m ${horizontalEndX && horizontalEndX + 100} 1280 q 0 -100 -100 -100 m 100 100 v 800 q 0 100 -100 100`}
            stroke="var(--color-blue-main)"
            fill="none"
          ></path>
          <line
            className="border"
            x1={endX}
            y1="2180"
            x2="90%"
            y2="2180"
            stroke="var(--color-blue-main)"
          ></line>
          <circle
            cx={endX}
            cy={2180}
            r={10}
            stroke="var(--color-blue-main)"
            fill="var(--color-blue-main)"
          ></circle>
        </svg>
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
