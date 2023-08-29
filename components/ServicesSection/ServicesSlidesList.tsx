import React from 'react';
import { Service } from '@/helpers';

interface Props {
  services: Service[];
  currentSlide: number;
  isScreenDesktop?: boolean;
  motto?: string;
  actionHandler: (id: number) => void;
}

export const ServicesSlidesList: React.FC<Props> = ({
  services,
  currentSlide,
  isScreenDesktop,
  motto,
  actionHandler,
}: Props) => {
  return (
    <ul
      className="flex flex-col gap-4 items-start w-[194px] mb-[34px] md:w-full md:gap-3 md:mb-6
    xl:mb-0"
    >
      {services.map(service => {
        return (
          <li key={service.id}>
            <button
              className={`${
                currentSlide === service.id
                  ? 'active-slide relative ml-5 font-medium opacity-100 pointer-events-none'
                  : 'font-extralight opacity-50 focus:opacity-80 hover:opacity-80 transition ease-out duration-300'
              } relative text-xl text-left leading-[0.85] uppercase md:text-[22px] md:leading-[0.82] xl:text-[28px] xl:leading-[0.86]`}
              onClick={() => actionHandler(service.id)}
            >
              {isScreenDesktop && currentSlide === service.id && (
                <p className="absolute left-[294px] top-1/2 -translate-y-2/4 flex w-[293px] mb font-extralight text-xs text-start normal-case leading-loose tracking-[2.4px]">
                  {motto}
                </p>
              )}
              {service.name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
