import React from 'react';
import { Navigation } from './Navigation';
import Link from 'next/link';
import Image from 'next/image';

export const Header: React.FC = () => {
  return (
    <header className="w-full flex justify-between items-center mb-9 md:mb-16 xl:mb-[72px]">
      <div className="w-full flex justify-between items-center">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="CarpTravel logo"
            className="h-auto"
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
