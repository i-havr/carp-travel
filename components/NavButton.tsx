import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  handleToggleMenu: () => void;
}

export const NavButton: React.FC<Props> = ({
  children,
  handleToggleMenu,
}: Props) => {
  return (
    <button
      className="font-inter font-normal text-sm uppercase leading-[1.21] tracking-[1.4px] z-10 hover:opacity-50 focus:opacity-50 transition ease-out duration-300"
      type="button"
      onClick={handleToggleMenu}
    >
      {children}
    </button>
  );
};
