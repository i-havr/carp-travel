import React from 'react';
import { careerData } from '@/helpers';

export const CareerQuestionTitle: React.FC = () => {
  return (
    <h3
      className="w-full font-extralight text-3xl md:leading-[1.21] uppercase
    md:mb-14 md:text-end
    xl:w-[317px] xl:text-4xl xl:md:leading-[1.08]"
    >
      {careerData.careerQuestionTitle}
    </h3>
  );
};
