import React from 'react';

interface Props {
  title: string;
}

export const CareerFeatureTitle: React.FC<Props> = ({ title }) => {
  return (
    <h4
      className="font-normal text-sm text-right leading-[1.43] 
    md:text-base md:leading-[1.25]
    xl:w-[317px] xl:text-lg xl:leading-[1.33]"
    >
      {title}
    </h4>
  );
};
