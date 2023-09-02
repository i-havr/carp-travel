'use client';

import React, { useState } from 'react';
import { NavMenu } from './NavMenu';
import { NavButton } from './NavButton';
import { MenuModal } from './MenuModal';
import { useWindowWidth } from '@/hooks';

export const Navigation: React.FC = () => {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const { isScreenMobile } = useWindowWidth();

  const handleToggleMenu: () => void = () => {
    setIsMenuModalOpen(!isMenuModalOpen);
    document.body.classList.toggle('no-scroll');
  };

  return isScreenMobile ? (
    <>
      <NavButton handleToggleMenu={handleToggleMenu}>Menu</NavButton>

      {isMenuModalOpen && (
        <MenuModal>
          <div
            className={`menu-container absolute top-0 left-0 flex flex-col justify-center items-center w-screen h-screen`}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 max-w-[480px] w-full flex justify-end mx-auto pt-[44px] px-5">
              <NavButton handleToggleMenu={handleToggleMenu}>Close</NavButton>
            </div>
            <NavMenu closeMenu={isMenuModalOpen && handleToggleMenu} />
          </div>
        </MenuModal>
      )}
    </>
  ) : (
    <NavMenu />
  );
};
