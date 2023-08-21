import React, { ReactNode } from 'react';
import { Link } from 'react-scroll';

interface Props {
  children?: ReactNode;
  actionHandler: () => void;
}

export const LinkButton = ({ children, actionHandler }: Props) => {
  return (
    <div className="button-wrapper w-[280px] ml-auto mr-auto md:w-full">
      <Link
        to="contacts"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="button-hero block w-full h-[53px] font-bold text-lg leading-[2.67] uppercase md:h-[50px] xl:flex xl:justify-center xl:items-center xl:h-[71px] xl:text-[32px] xl:leading-[1.21]"
        onClick={actionHandler}
      >
        {children}
      </Link>
    </div>
  );
};
