import React from 'react';

interface Props {
  title: string;
}

export const CareerFeatureTitle: React.FC<Props> = ({ title }) => {
  return (
    <h4 className="font-normal text-sm text-right leading-[1.43]">{title}</h4>
  );
};
