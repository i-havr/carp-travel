import React from 'react';
import { Navigation } from './Navigation';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className="w-full flex justify-between items-center mb-9 md:mb-16 xl:mb-[72px]">
      <div className="w-full flex justify-between items-center">
        <Image
          src="/assets/icons/logo.svg"
          alt="CarpTravel logo"
          className="w-[61px] h-auto"
          width={0}
          height={0}
          aria-label="CarpTravel logo"
          priority
        />
        <Navigation />
      </div>
    </header>
  );
};
