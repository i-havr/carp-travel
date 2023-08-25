import React from 'react';

interface Props {
  description: string;
}

export const CareerFeatureDescription: React.FC<Props> = ({
  description,
}: Props) => {
  return (
    <p
      className="font-extralight text-xs text-right leading-[1.67] 
    xl:w-[285px] xl:text-left"
    >
      {description}
    </p>
  );
};
