import { useState, useEffect } from 'react';
import infoUnderline from '@/assets/info-underline.svg';

import { InfoItem } from '@/components';

export const Info = () => {
  const [selectedItem, setSelectedItem] = useState<number>();

  useEffect(() => {
    console.log('selectedItem changed to:', selectedItem);
  }, [selectedItem]);

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
    <section className="bg-white-text relative flex h-auto flex-col justify-center pt-38 pr-10 pb-30 pl-24 md:flex-row lg:pt-80 lg:pb-66">
      <div className="relative space-y-10 md:space-x-16 lg:space-y-18 lg:space-x-18">
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
              <p
                className={`text-blue-main font-raleway md:hidden ${selectedItem === item.id ? 'h-auto pt-8 opacity-100' : 'h-0 opacity-0'} `}
              >
                {item.text}
              </p>
            </div>
          );
        })}
      </div>

      <div className="hidden w-1/2 md:flex lg:w-[590px]">
        <p className={`text-blue-main font-raleway lg:text-3xl`}>
          {infoItems.find((item) => item.id === selectedItem)?.text}
        </p>
      </div>
    </section>
  );
};
