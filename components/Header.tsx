import React from 'react';
import { Navigation } from './Navigation';
import Link from 'next/link';
import Image from 'next/image';

export const Header: React.FC = () => {
  return (
    <header
      className="absolute left-1/2 -translate-x-1/2 max-w-[480px] w-full flex justify-between items-center pt-9 px-5
    md:max-w-3xl md:px-8 md:pt-6 xl:max-w-7xl xl:px-6"
    >
      <div className="w-full flex justify-between items-center">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="CarpTravel logo"
            className="h-auto hover:opacity-50 focus:opacity-50 transition ease-out duration-300"
            width={61}
            height={35}
            aria-label="CarpTravel logo"
            priority
          />
        </Link>
        <Navigation />
      </div>
    </header>
  );
};
