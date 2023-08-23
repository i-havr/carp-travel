import React from 'react';
import { formatNumber } from '@/helpers/formatNumber';

interface Props {
  activeSlide: number;
  total: number;
}

export const ServicesPagination = ({ activeSlide, total }: Props) => {
  return (
    <span
      className="flex justify-end mb-4 font-thin text-[43px] leading-[1.21]
    md:text-[67px] md:justify-start md:mb-0 md:leading-[0.92]
    xl:text-[98px] xl:tracking-[-3.92px]"
    >
      {formatNumber(activeSlide)}/
      <span className="opacity-20">{formatNumber(total)}</span>
    </span>
  );
};
