import React from 'react';
import { useWindowWidth } from '@/hooks';

export const HeroPlacesList: React.FC = () => {
  const { isScreenDesktop } = useWindowWidth();

  return (
    <p className="mb-6 font-extralight text-[10px] leading-[1.6] md:mb-0 md:text-sm md:leading-[1.14] md:tracking-[1.26px] xl:text-base xl:leading-6 xl:tracking-[1.44px]">
      Hoverla / Yaremche / Zakarpattia / {!isScreenDesktop && <br />}
      Vorokhta / Synevyr Lake / Bukovel
    </p>
  );
};
