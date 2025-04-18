import { Header, Hero, Info, Books, Contact, News, Footer } from './components';
import heroVertMobile from '@/assets/hero-vert-mobile.svg';
import heroHorMobile from '@/assets/hero-hor-mobile.svg';
import heroHorDesktop from '@/assets/hero-hor-desktop.svg';
import heroRightDesktop from '@/assets/hero-right-desktop.svg';
import heroVertDesktop from '@/assets/hero-vert-desktop.svg';
import infoFlower from '@/assets/info-flower.svg';
import { useState, useEffect } from 'react';
import flowerMobile from '@/assets/flower-mobile.svg';
import number1Mobile from '@/assets/number-1-mobile.svg';
import number2Mobile from '@/assets/number-2-mobile.svg';
import number3Mobile from '@/assets/number-3-mobile.svg';

function App() {
  const [endX, setEndX] = useState<number>();
  const [horizontalEndX, setHorizontalEndX] = useState<number>();
  const [topY, setTopY] = useState<number>();
  const [step1Distance, setStep1Distance] = useState<number>();
  const [step2Distance, setStep2Distance] = useState<number>();
  const [step3Distance, setStep3Distance] = useState<number>();

  useEffect(() => {
    const updatePath = () => {
      const svgContainer = document.querySelector('#svg-container') as HTMLElement;
      const contactForm = document.querySelector('form') as HTMLElement;
      const formContainer = document.querySelector('#form-container') as HTMLElement;

      const step1 = document.querySelector('#step-1') as HTMLElement;
      const step2 = document.querySelector('#step-2') as HTMLElement;
      const step3 = document.querySelector('#step-3') as HTMLElement;

      if (!contactForm || !svgContainer || !formContainer || !step1 || !step2 || !step3) return;

      const formRect = contactForm.getBoundingClientRect();
      const svgContainerRect = svgContainer.getBoundingClientRect();
      const formContainerRect = formContainer.getBoundingClientRect();

      const step1Rect = step1.getBoundingClientRect();
      const step2Rect = step2.getBoundingClientRect();
      const step3Rect = step3.getBoundingClientRect();

      const lineLength = formContainerRect.top - svgContainerRect.top;

      const step1Distance = step1Rect.top - svgContainerRect.top;
      const step2Distance = step2Rect.top - svgContainerRect.top;
      const step3Distance = step3Rect.top - svgContainerRect.top;

      console.log({
        formTopPosition: formRect.top,
        containerTopPosition: svgContainerRect.top,
        distanceBetween: lineLength,
        step1Distance,
        step2Distance,
        step3Distance,
      });

      setTopY(lineLength);
      setEndX(formRect.right + 90);
      setHorizontalEndX(svgContainer.clientWidth * 0.9);
      setStep1Distance(step1Distance);
      setStep2Distance(step2Distance);
      setStep3Distance(step3Distance);
    };

    const observer = new MutationObserver(() => {
      setTimeout(updatePath, 0);
    });

    const container = document.querySelector('#svg-container');
    if (container) {
      observer.observe(container, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
      });
    }

    updatePath();

    window.addEventListener('resize', updatePath);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updatePath);
    };
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
      <div id="svg-container" className="relative flex flex-col">
        <img src={infoFlower} className="absolute z-2 hidden xl:block"></img>
        <img src={flowerMobile} className="absolute z-2 block xl:hidden"></img>

        <img
          src={number1Mobile}
          className="absolute z-2 block xl:hidden"
          style={{ top: step1Distance, left: 10 }}
        ></img>
        <img
          src={number2Mobile}
          className="absolute z-2 block xl:hidden"
          style={{ top: step2Distance, left: 10 }}
        ></img>
        <img
          src={number3Mobile}
          className="absolute z-2 block xl:hidden"
          style={{ top: step3Distance, left: 10 }}
        ></img>
        <svg width="full" height="full" className="absolute xl:hidden">
          <line x1="58" x2="58" y1="0" y2={topY} stroke="var(--color-blue-main)"></line>
          <circle
            cx="58"
            cy={topY}
            r="8"
            stroke="var(--color-blue-main)"
            fill="var(--color-blue-main)"
          ></circle>
        </svg>

        <svg
          id="desktop"
          width="full"
          height="full"
          preserveAspectRatio="none"
          className="absolute hidden xl:block"
        >
          <path d="m 86 0 v 1180" stroke="var(--color-blue-main)"></path>
          <path d="m 86 1180 q 0 200 200 200" stroke="var(--color-blue-main)" fill="none"></path>
          <line x1="286" y1="1380" x2="90%" y2="1380" stroke="var(--color-blue-main)"></line>
          <path
            d={`m ${horizontalEndX && horizontalEndX + 100} 1480 q 0 -100 -100 -100 m 100 100 v 600 q 0 100 -100 100`}
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
