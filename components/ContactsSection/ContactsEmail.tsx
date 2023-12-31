import React from 'react';
import { contactsData } from '@/helpers';

export const ContactsEmail: React.FC = () => {
  return (
    <div
      className="flex justify-end items-baseline gap-5 mb-6 
    md:mb-0 xl:mb-[124px]"
    >
      <a
        href={`mailto:${contactsData.email}`}
        className="font-normal text-sm leading-[1.71]
      md:w-[221px] md:text-base md:text-end md:leading-[1.5]
      xl:w-[317px] xl:text-lg xl:leading-[1.33] hover:opacity-50 focus:opacity-50 transition ease-out duration-300"
      >
        {contactsData.email}
      </a>

      <h3 className="w-[81px] font-extralight text-xs leading-[1.67]">
        {contactsData.titles.emailTitle}
      </h3>
    </div>
  );
};
