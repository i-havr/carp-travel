import React from 'react';

export const ContactsPhone: React.FC = () => {
  return (
    <div
      className="flex justify-end items-baseline gap-5 mb-6 
    md:mb-0 xl:mb-16"
    >
      <ul
        className="font-normal text-sm leading-[1.71] 
      md:w-[221px] md:text-base md:text-end md:leading-[1.5] 
      xl:w-[317px] xl:text-lg xl:leading-[1.33]"
      >
        <li>
          <a href="tel:+380981234567">+38 (098) 12 34 567</a>
        </li>
        <li>
          <a href="tel:+380731234567">+38 (073) 12 34 567</a>
        </li>
      </ul>
      <h3 className="w-[81px] font-extralight text-xs leading-[1.67]">
        Phone number
      </h3>
    </div>
  );
};
