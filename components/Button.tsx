import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export const Button = ({ children }: Props) => {
  return (
    <div className="button-wrapper w-[280px] ml-auto mr-auto md:w-full">
      <button
        type="button"
        className="button-hero block w-full h-[53px] font-bold text-lg leading-[2.67] uppercase md:h-[50px]"
      >
        {children}
      </button>
    </div>
  );
};
