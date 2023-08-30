import React from 'react';
import { careerData } from '@/helpers';

export const CareerMotto: React.FC = () => {
  return (
    <p
      className="w-[179px] font-extralight text-sm leading-[1.43]
      md:text-[13px] md:leading-[1.54]
      xl:w-[234px] xl:text-lg xl:leading-[1.33]"
    >
      {careerData.motto}
    </p>
  );
};
