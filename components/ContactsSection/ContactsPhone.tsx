import React from 'react';
import { contactsData } from '@/helpers';

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
        {contactsData.phones.map(phone => {
          return (
            <li
              key={phone.id}
              className="hover:opacity-50 focus:opacity-50 transition ease-out duration-300"
            >
              <a href="tel:+380981234567">{phone.number}</a>
            </li>
          );
        })}
      </ul>
      <h3 className="w-[81px] font-extralight text-xs leading-[1.67]">
        {contactsData.titles.phoneTitle}
      </h3>
    </div>
  );
};
