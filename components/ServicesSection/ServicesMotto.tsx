import React from 'react';

interface Props {
  motto?: string;
}

export const ServicesMotto: React.FC<Props> = ({ motto }: Props) => {
  return (
    <p className="mb-6 font-extralight text-xs text-end leading-loose tracking-[2.4px] md:text-start md:mb-0">
      {motto}
    </p>
  );
};
