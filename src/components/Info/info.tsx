import { useState } from 'react';
import infoUnderline from '@/assets/info-underline.svg';
import number1 from '@/assets/number-1.svg';
import number2 from '@/assets/number-2.svg';
import number3 from '@/assets/number-3.svg';
import { RefObject } from 'react';

interface InofProps {
  step1Ref: RefObject<HTMLDivElement | null>;
  step2Ref: RefObject<HTMLDivElement | null>;
  step3Ref: RefObject<HTMLDivElement | null>;
  gridElementsRef: RefObject<HTMLDivElement | null>;
}

export const Info = ({ step1Ref, step2Ref, step3Ref, gridElementsRef }: InofProps) => {
  const [selectedItem, setSelectedItem] = useState<number>();

  const infoItems = [
    {
      id: 1,
      title: 'Motiváció',
      text: ' Szakmai és személyes meggyőződésem, hogy a dilemmák és kétségek mindannyiunk életének megkerülhetetlen velejárói. Munkám során is arratörekszem, hogy a hozzám forduló emberek elfogadják, nem önmagában anehézség felbukkanása jelenti azt, hogy rossz úton járunk, hanem a törekvés akétségek láthatatlanná tételére. Ha képesek vagyunk szembenézni mindazzal, amitől igazán félünk, akkor a  legjobbat hozhatjuk ki magunkból és mindez egy komoly, de igazán szép  felelősség.',
    },
    {
      id: 2,
      title: 'Szakmai Életút',
      text: ' Szakmai és személyes meggyőződésem, hogy a dilemmák és kétségek mindannyiunk életének megkerülhetetlen velejárói. Munkám során is arratörekszem, hogy a hozzám forduló emberek elfogadják, nem önmagában anehézség felbukkanása jelenti azt, hogy rossz úton járunk, hanem a törekvés akétségek láthatatlanná tételére. Ha képesek vagyunk szembenézni mindazzal, amitől igazán félünk, akkor a  legjobbat hozhatjuk ki magunkból és mindez egy komoly, de igazán szép  felelősség.',
    },
    {
      id: 3,
      title: 'Pályafutásom',
      text: ' Szakmai és személyes meggyőződésem, hogy a dilemmák és kétségek mindannyiunk életének megkerülhetetlen velejárói. Munkám során is arratörekszem, hogy a hozzám forduló emberek elfogadják, nem önmagában anehézség felbukkanása jelenti azt, hogy rossz úton járunk, hanem a törekvés akétségek láthatatlanná tételére. Ha képesek vagyunk szembenézni mindazzal, amitől igazán félünk, akkor a  legjobbat hozhatjuk ki magunkból és mindez egy komoly, de igazán szép  felelősség.',
    },
    {
      id: 4,
      title: 'Segítségnyújtás',
      text: ' Szakmai és személyes meggyőződésem, hogy a dilemmák és kétségek mindannyiunk életének megkerülhetetlen velejárói. Munkám során is arratörekszem, hogy a hozzám forduló emberek elfogadják, nem önmagában anehézség felbukkanása jelenti azt, hogy rossz úton járunk, hanem a törekvés akétségek láthatatlanná tételére. Ha képesek vagyunk szembenézni mindazzal, amitől igazán félünk, akkor a  legjobbat hozhatjuk ki magunkból és mindez egy komoly, de igazán szép  felelősség.',
    },
    {
      id: 5,
      title: 'Titoktartás',
      text: ' Szakmai és személyes meggyőződésem, hogy a dilemmák és kétségek mindannyiunk életének megkerülhetetlen velejárói. Munkám során is arratörekszem, hogy a hozzám forduló emberek elfogadják, nem önmagában anehézség felbukkanása jelenti azt, hogy rossz úton járunk, hanem a törekvés akétségek láthatatlanná tételére. Ha képesek vagyunk szembenézni mindazzal, amitől igazán félünk, akkor a  legjobbat hozhatjuk ki magunkból és mindez egy komoly, de igazán szép  felelősség.',
    },
    {
      id: 6,
      title: 'Bejelentkezés',
      text: ' Szakmai és személyes meggyőződésem, hogy a dilemmák és kétségek mindannyiunk életének megkerülhetetlen velejárói. Munkám során is arratörekszem, hogy a hozzám forduló emberek elfogadják, nem önmagában anehézség felbukkanása jelenti azt, hogy rossz úton járunk, hanem a törekvés akétségek láthatatlanná tételére. Ha képesek vagyunk szembenézni mindazzal, amitől igazán félünk, akkor a  legjobbat hozhatjuk ki magunkból és mindez egy komoly, de igazán szép  felelősség.',
    },
  ];

  const handleItemClick = (id: number) => {
    setSelectedItem(selectedItem === id ? undefined : id);
  };

  return (
    <section id="about" className="bg-white-text pt-38 pr-10 pb-46 pl-24 lg:pt-80">
      <div className="relative flex h-auto flex-col justify-center md:flex-row">
        <div className="relative space-y-10 pb-30 md:space-x-16 lg:space-y-18 lg:space-x-18 lg:pb-66">
          {infoItems.map((item) => {
            return (
              <div key={item.title} className="group">
                <div className="relative">
                  <h2
                    className="font-montagu-slab text-blue-main group-hover:text-blue-light transition-color cursor-pointer text-xl font-medium duration-200 lg:text-3xl"
                    onClick={() => handleItemClick(item.id)}
                  >
                    {item.title}
                  </h2>
                  <img
                    src={infoUnderline}
                    className="absolute opacity-0 transition-opacity duration-200 group-hover:opacity-100 lg:ml-8 lg:h-[30] lg:w-[180px]"
                  />
                </div>
                <div
                  ref={gridElementsRef}
                  className={`grid transition-all duration-300 lg:hidden ${selectedItem === item.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-blue-main font-raleway pt-8">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div id="login" className="hidden w-1/2 pb-30 lg:flex lg:w-[590px] lg:pb-66">
          <p
            className={`text-blue-main font-raleway transition-opacity duration-300 lg:text-3xl ${
              selectedItem ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {infoItems.find((item) => item.id === selectedItem)?.text}
          </p>
        </div>
      </div>

      <div className="bg-white-text mx-auto flex flex-col gap-20 lg:justify-between lg:gap-10 lg:pl-30 xl:mt-90 xl:w-3/4 xl:flex-row xl:gap-20 xl:pl-6">
        <div ref={step1Ref} className="relative flex-1 lg:space-y-8">
          <img
            src={number1}
            className="absolute hidden translate-x-1/2 -translate-y-50 xl:block"
          ></img>
          <h1 className="font-montagu-slab text-blue-main pb-2 text-xl font-medium lg:text-3xl 2xl:text-4xl">
            Időpontkérés
          </h1>
          <p className="font-raleway text-blue-main text-lg lg:text-xl 2xl:text-xl">
            Időpontkérés az alábbi email címen lehetséges.
          </p>
        </div>

        <div ref={step2Ref} className="relative flex-1 lg:space-y-8">
          <img
            src={number2}
            className="absolute hidden translate-x-1/3 -translate-y-50 xl:block"
          ></img>
          <h1 className="font-montagu-slab text-blue-main pb-2 text-xl font-medium lg:text-3xl 2xl:text-4xl">
            Első alkalom
          </h1>
          <p className="font-raleway text-blue-main text-lg lg:text-xl 2xl:text-xl">
            Az első egy-két alkalom célja meghatározni az Ön problémáját, illetve megállapításra
            kerül, hogy szükséges-e gyógyszeres kezelés, csoportterápia, vagy égyéb terápiás
            megközelítés.
          </p>
        </div>

        <div ref={step3Ref} className="relative flex-1 lg:space-y-8">
          <img src={number3} className="absolute hidden -translate-y-50 xl:block"></img>
          <h1 className="font-montagu-slab text-blue-main pb-2 text-xl font-medium lg:text-3xl 2xl:text-4xl">
            Terápia
          </h1>
          <p className="font-raleway text-blue-main text-lg lg:text-xl 2xl:text-xl">
            A probléma jellegétől és részben az Ön igényeitől függően a terápia néhány alkalmat,
            vagy hosszabb távú elköteleződést jelenthet.
          </p>
        </div>
      </div>
    </section>
  );
};
