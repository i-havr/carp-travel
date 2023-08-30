import React from 'react';
import { contactsData } from '@/helpers';

export const ContactsSocialNetworks: React.FC = () => {
  return (
    <div
      className="flex justify-end items-baseline gap-5 mb-3 
    xl:flex-row-reverse xl:mb-0"
    >
      <h3 className="font-extralight text-xs leading-[1.67]">
        {contactsData.titles.socialNetworksTitle}
      </h3>
      <ul
        className="w-[81px] font-normal text-sm leading-[1.71]
      md:w-auto md:text-base md:leading-[1.5]
      xl:w-[317px] xl:text-lg xl:text-end xl:leading-[1.33]"
      >
        {contactsData.socialNetworks.map(network => {
          return (
            <li
              key={network.id}
              className="hover:opacity-50 focus:opacity-50 transition ease-out duration-300"
            >
              <a
                href={network.url}
                target="_blank"
                rel="noopener nofollow noreferrer"
              >
                {network.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
