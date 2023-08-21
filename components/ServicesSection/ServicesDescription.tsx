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
    md:w-[222px] md:text-base 
    xl:w-[292px] xl:text-lg md:mb-4 md:leading-[1.25] xl:mb-6 xl:leading-[1.33]"
    >
      {description}
    </p>
  );
};
