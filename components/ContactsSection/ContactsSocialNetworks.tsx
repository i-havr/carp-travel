import React from 'react';

export const ContactsSocialNetworks = () => {
  return (
    <div
      className="flex justify-end items-baseline gap-5 mb-3 
    xl:flex-row-reverse xl:mb-0"
    >
      <h3 className="font-extralight text-xs leading-[1.67]">Follow us</h3>
      <ul
        className="w-[81px] font-normal text-sm leading-[1.71]
      md:w-auto md:text-base md:leading-[1.5]
      xl:w-[317px] xl:text-lg xl:text-end xl:leading-[1.33]"
      >
        <li>
          <a href="#">facebook</a>
        </li>
        <li>
          <a href="#">instagram</a>
        </li>
        <li>
          <a href="#">youtube</a>
        </li>
        <li>
          <a href="#">tiktok</a>
        </li>
      </ul>
    </div>
  );
};
