import React from 'react';
import { formatNumber } from '@/helpers/formatNumber';

interface Props {
  activeSlide: number;
  total: number;
}

export const ServicesPagination = ({ activeSlide, total }: Props) => {
  return (
    <span className="flex justify-end mb-4 font-extralight text-[43px] leading-[1.21]">
      {formatNumber(activeSlide)}/
      <span className="font-thin opacity-20">{formatNumber(total)}</span>
    </span>
  );
};
