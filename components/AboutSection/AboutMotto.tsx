import React from 'react';

export const AboutMotto: React.FC = () => {
  return (
    <p
      className="flex flex-col items-end text-start mb-10 ml-auto font-normal text-sm leading-[1.43] uppercase md:items-start md:mb-0 md:ml-0 md:text-base md:leading-5
    xl:text-lg xl:leading-[1.33]"
    >
      <span>
        <span className="block">From vacationers</span>
        <span className="block text-end">to active travelers</span>
        <span className="block font-extralight lowercase tracking-[-0.14px] md:tracking-[0.32px] xl:tracking-[2.16px]">
          we have a tour for everyone.
        </span>
      </span>
    </p>
  );
};
