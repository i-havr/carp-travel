import React from 'react';

export const HeroTitle = () => {
  return (
    <h1 className="flex flex-col justify-center items-end mb-6 text-left font-inter font-thin text-[37px] uppercase tracking-[0.54px] overflow-hidden md:items-start md:mb-[56px] md:text-[67px] md:tracking-[8.71px] xl:mb-[181px] xl:text-[98px] xl:tracking-[3px]">
      <span className="text-left leading-none md:text-right md:leading-[1.21] xl:leading-[1.21]">
        <span className="font-medium">7</span>Days
      </span>
      <span className="inline-block w-[118px] mr-[-4px] text-justify font-light text-xs leading-[1.21] tracking-[9.18px] md:w-[221px] md:ml-auto md:mr-auto md:text-sm md:tracking-[26px] md:leading-[0.6] xl:w-[310px] xl:mt-[-12px] xl:mr-[-4px] xl:text-base xl:leading-[1.5] xl:tracking-[36.5px]">
        Journey
      </span>
    </h1>
  );
};
