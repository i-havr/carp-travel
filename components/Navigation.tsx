'use client';

import React, { useState } from 'react';
import { NavMenu } from './NavMenu';
import { useWindowWidth } from '@/hooks';

export const Navigation: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isScreenMobile } = useWindowWidth();

  const handleToggleMenu = () => {
    setIsModalOpen(!isModalOpen);
    document.body.classList.toggle('no-scroll');
  };

  return isScreenMobile ? (
    <>
      <button
        className="font-inter font-normal text-sm uppercase leading-[1.21] tracking-[1.4px] z-10"
        type="button"
        onClick={handleToggleMenu}
        aria-controls="menu-container"
      >
        {isModalOpen ? 'Close' : 'Menu'}
      </button>
      {isModalOpen && (
        <div className="menu-container absolute top-0 left-0 flex justify-center items-center w-screen h-screen">
          <NavMenu />
        </div>
      )}
    </>
  ) : (
    <NavMenu />
  );
};
