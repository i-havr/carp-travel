import React from 'react';

interface Props {
  description?: string;
}

export const ServicesDescription: React.FC<Props> = ({
  description,
}: Props) => {
  return (
    <p
      className="min-h-[120px] font-extralight text-sm text-start leading-[1.43]
    md:w-full md:min-h-0 md:text-[13px] md:leading-[1.54]
    xl:w-full xl:text-justify xl:text-lg xl:leading-[1.33]"
    >
      {description}
    </p>
  );
};
