import React from 'react';
import { Service } from '@/helpers';

interface Props {
  service: Service;
}

export const ServicesImage: React.FC<Props> = ({ service }: Props) => {
  return (
    <div className="overflow-hidden">
      <picture>
        <source
          srcSet={`${service.imageDesktopUrl} 1x, ${service.imageDesktopRetinaUrl} 2x`}
          media="(min-width: 1280px)"
        />
        <source
          srcSet={`${service.imageMobileTabletUrl} 1x, ${service.imageMobileTabletRetinaUrl} 2x`}
          media="(max-width: 1280px)"
        />
        <img
          // loading={service.id === 1 ? undefined : 'lazy'}
          className="scale-[1.01]"
          data-src={`${service.imageMobileTabletUrl}`}
          alt={service.name}
        />
      </picture>
    </div>
  );
};
