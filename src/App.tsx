import { Header, Hero, Info, Books, Contact, News, Footer } from './components';
import heroVertMobile from '@/assets/hero-vert-mobile.svg';
import heroHorMobile from '@/assets/hero-hor-mobile.svg';
import heroHorDesktop from '@/assets/hero-hor-desktop.svg';
import heroRightDesktop from '@/assets/hero-right-desktop.svg';
import heroVertDesktop from '@/assets/hero-vert-desktop.svg';
import infoFlower from '@/assets/info-flower.svg';
import { useState, useEffect, useRef } from 'react';
import flowerMobile from '@/assets/flower-mobile.svg';
import number1Mobile from '@/assets/number-1-mobile.svg';
import number2Mobile from '@/assets/number-2-mobile.svg';
import number3Mobile from '@/assets/number-3-mobile.svg';
import { useScrollDrawSVG } from './hooks/useScrollDrawSVG';

function App() {
  const [endX, setEndX] = useState<number>(0);
  const [horizontalEndX, setHorizontalEndX] = useState<number>(0);

  const [topY, setTopY] = useState<number>(0);

  const [step1Distance, setStep1Distance] = useState<number>(0);
  const [step2Distance, setStep2Distance] = useState<number>(0);
  const [step3Distance, setStep3Distance] = useState<number>(0);

  const [layoutKey, setLayoutKey] = useState<number>(0);

  const { containerRef, partRefs, dashoffsets, lengths } = useScrollDrawSVG({
    layoutKey: layoutKey,
    numParts: 6,
  });

  const svgContainerRef = useRef<HTMLDivElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const contactFormRef = useRef<HTMLFormElement>(null);

  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);

  const gridElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const updatePath = () => {
      if (
        !contactFormRef.current ||
        !svgContainerRef.current ||
        !formContainerRef.current ||
        !step1Ref.current ||
        !step2Ref.current ||
        !step3Ref.current
      )
        return;

      const step1Rect = step1Ref.current.getBoundingClientRect();
      const step2Rect = step2Ref.current.getBoundingClientRect();
      const step3Rect = step3Ref.current.getBoundingClientRect();

      const formRect = contactFormRef.current.getBoundingClientRect();
      const svgContainerRect = svgContainerRef.current.getBoundingClientRect();
      const formContainerRect = formContainerRef.current.getBoundingClientRect();

      const lineLength = formContainerRect.top - svgContainerRect.top;

      const step1Distance = step1Rect.top - svgContainerRect.top;
      const step2Distance = step2Rect.top - svgContainerRect.top;
      const step3Distance = step3Rect.top - svgContainerRect.top;

      setTopY(lineLength);
      setEndX(formRect.right + 90);
      setHorizontalEndX(svgContainerRef.current.clientWidth * 0.9);
      setStep1Distance(step1Distance);
      setStep2Distance(step2Distance);
      setStep3Distance(step3Distance);

      setLayoutKey((k) => k + 1);
    };

    let animationFrameId: number;
    let transitionStartTime: number;

    const trackDuringTransition = () => {
      const currentTime = Date.now();
      if (currentTime - transitionStartTime > 5000) {
        cancelAnimationFrame(animationFrameId);
        return;
      }
      updatePath();
      animationFrameId = requestAnimationFrame(trackDuringTransition);
    };

    const handleGridTransition = (isStart: boolean) => (e: Event) => {
      if (!(e instanceof TransitionEvent) || e.propertyName !== 'grid-template-rows') return;

      if (isStart) {
        transitionStartTime = Date.now();
        trackDuringTransition();
      } else {
        cancelAnimationFrame(animationFrameId);
        requestAnimationFrame(updatePath);
      }
    };

    gridElementsRef.current.forEach((ref) => {
      if (ref) {
        ref.addEventListener('transitionstart', handleGridTransition(true));
        ref.addEventListener('transitionend', handleGridTransition(false));
      }
    });

    updatePath();

    window.addEventListener('resize', updatePath);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      gridElementsRef.current.forEach((ref) => {
        if (ref) {
          ref.removeEventListener('transitionstart', handleGridTransition(true));
          ref.removeEventListener('transitionend', handleGridTransition(false));
        }
      });

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
      <div ref={containerRef} className="aflex relative flex-col">
        <div ref={svgContainerRef}>
          <img src={infoFlower} className="absolute z-2 hidden xl:block"></img>
          <img src={flowerMobile} className="absolute z-2 block xl:hidden"></img>

          <img
            src={number1Mobile}
            className={`absolute z-2 block xl:hidden`}
            style={{ top: step1Distance, left: 10 }}
          ></img>
          <img
            src={number2Mobile}
            className={`absolute z-2 block xl:hidden`}
            style={{ top: step2Distance, left: 10 }}
          ></img>
          <img
            src={number3Mobile}
            className={`absolute z-2 block xl:hidden`}
            style={{ top: step3Distance, left: 10 }}
          ></img>

          <svg width="100%" height="100%" className="absolute xl:hidden">
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
            strokeDasharray={100}
            id="desktop"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            className="absolute hidden xl:block"
          >
            <path
              ref={partRefs[0]}
              d="m 86 0 v 1180"
              stroke="var(--color-blue-main)"
              style={{
                strokeDasharray: lengths[0],
                strokeDashoffset: dashoffsets[0],
                transition: 'storke-dashoffset 0.1s linear',
              }}
            ></path>
            <path
              ref={partRefs[1]}
              d="m 86 1180 q 0 200 200 200"
              stroke="var(--color-blue-main)"
              fill="none"
              style={{
                strokeDasharray: lengths[1],
                strokeDashoffset: dashoffsets[1],
                transition: 'stroke-dashoffset 0.1s linear',
              }}
            ></path>
            <line
              ref={partRefs[2]}
              x1="286"
              y1="1380"
              x2="90%"
              y2="1380"
              stroke="var(--color-blue-main)"
              style={{
                strokeDasharray: lengths[2],
                strokeDashoffset: dashoffsets[2],
                transition: 'stroke-dashoffset 0.1s linear',
              }}
            ></line>
            <path
              ref={partRefs[3]}
              d={`m ${horizontalEndX && horizontalEndX} 1380 q 100 0 100 100 v 600 q 0 100 -100 100`}
              stroke="var(--color-blue-main)"
              fill="none"
              style={{
                strokeDasharray: lengths[3],
                strokeDashoffset: dashoffsets[3],
                transition: 'stroke-dashoffset 0.1s linear',
              }}
            ></path>
            <line
              ref={partRefs[4]}
              className="border"
              x2={endX}
              y1="2180"
              x1="90%"
              y2="2180"
              stroke="var(--color-blue-main)"
              style={{
                strokeDasharray: lengths[4],
                strokeDashoffset: dashoffsets[4],
                transition: 'stroke-dashoffset 0.1s linear',
              }}
            ></line>
            <path
              ref={partRefs[5]}
              d={`M ${endX - 10} 2180 a 10 10 0 1 0 20 0 a 10 10 0 1 0 -20 0`}
              stroke="var(--color-blue-main)"
              fill="var(--color-blue-main)"
              style={{
                strokeDasharray: lengths[5],
                strokeDashoffset: dashoffsets[5],
                transition: 'stroke-dashoffset 0.1s linear',
              }}
            />
          </svg>

          <Info
            step1Ref={step1Ref}
            step2Ref={step2Ref}
            step3Ref={step3Ref}
            gridElementsRef={gridElementsRef}
          />
          <Contact containerRef={formContainerRef} formRef={contactFormRef} />
        </div>
      </div>
      <News />
      <Books />
      <Footer />
    </div>
  );
}

export default App;
