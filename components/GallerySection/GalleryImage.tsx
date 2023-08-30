import React from 'react';
import Image from 'next/image';
import { Picture } from '@/helpers';

interface Props {
  picture: Picture;
  isActive?: boolean;
}

export const GalleryImage: React.FC<Props> = ({ picture, isActive }: Props) => {
  return (
    <div
      className={`animated-image-wrapper scale-[1.01] overflow-hidden md:absolute md:top-1/2 md:-translate-y-1/2 ${
        isActive
          ? 'md:w-[415px] md:left-1/2 md:-translate-x-1/2 before:hidden xl:w-[606px]'
          : 'md:w-[121px] xl:w-[313px]'
      }      
      `}
    >
      <Image
        className="object-cover w-full h-full"
        src={picture.imageRetinaUrl}
        width={280}
        height={187}
        alt={picture.name}
        quality={90}
        priority
      />
    </div>
  );
};
