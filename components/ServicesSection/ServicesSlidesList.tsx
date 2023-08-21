import React from 'react';
import { Service } from '@/helpers/services-info';

interface Props {
  services: Service[];
  currentSlide: number;
  actionHandler: (id: number) => void;
}

export const ServicesSlidesList: React.FC<Props> = ({
  services,
  currentSlide,
  actionHandler,
}: Props) => {
  return (
    <ul className="flex flex-col gap-4 items-start w-[194px] mb-[34px]">
      {services.map(service => {
        return (
          <li key={service.id}>
            <button
              className={`${
                currentSlide === service.id
                  ? 'active-slide relative ml-5 font-medium opacity-100'
                  : 'font-extralight opacity-50'
              } text-xl text-left leading-[0.85] uppercase`}
              onClick={() => actionHandler(service.id)}
            >
              {service.name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

// <p className="mb-6 font-extralight text-xs text-end leading-loose tracking-[2.4px]">
//   {motto}
// </p>
