import React from 'react';
import { Picture } from '@/helpers';

interface Props {
  picture: Picture;
  isActive?: boolean;
  isPrev?: boolean;
  isNext?: boolean;
}

export const GalleryImage: React.FC<Props> = ({
  picture,
  isActive,
  isPrev,
  isNext,
}: Props) => {
  return (
    <div
      className={`animated-image-wrapper overflow-hidden md:absolute md:top-1/2 md:-translate-y-1/2 ${
        isActive
          ? 'md:w-[415px] md:left-1/2 md:-translate-x-1/2 before:hidden xl:w-[606px]'
          : 'md:w-[121px] xl:w-[313px]'
      }      
      `}
    >
      <picture>
        <source
          srcSet={`${picture.imageUrl} 1x, ${picture.imageRetinaUrl} 2x`}
          media="(min-width: 200px)"
        />
        <img
          loading={isActive || isPrev || isNext ? 'eager' : 'lazy'}
          className="md:pointer-events-none scale-[1.01]"
          data-src={`${picture.imageUrl}`}
          alt={picture.name}
        />
      </picture>
    </div>
  );
};
