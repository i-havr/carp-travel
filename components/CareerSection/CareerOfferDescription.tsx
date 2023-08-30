import React from 'react';
import { careerData } from '@/helpers';

export const CareerOfferDescription: React.FC = () => {
  return (
    <p
      className="mb-9 font-extralight text-sm leading-[1.43]
    md:mb-0 md:text-[13px] md:leading-[1.54] md:text-justify
    xl:text-lg xl:leading-[1.43]"
    >
      {careerData.careerOfferDescription}
    </p>
  );
};
