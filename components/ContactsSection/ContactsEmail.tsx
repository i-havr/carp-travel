import React from 'react';

export const ContactsEmail: React.FC = () => {
  return (
    <div
      className="flex justify-end items-baseline gap-5 mb-6 
    md:mb-0 xl:mb-[124px]"
    >
      <a
        href="mailto:support@carptravel.com"
        className="font-normal text-sm leading-[1.71]
      md:w-[221px] md:text-base md:text-end md:leading-[1.5]
      xl:w-[317px] xl:text-lg xl:leading-[1.33]"
      >
        support@carptravel.com
      </a>

      <h3 className="w-[81px] font-extralight text-xs leading-[1.67]">Email</h3>
    </div>
  );
};
