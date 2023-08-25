'use client';

import React, { useState, useEffect } from 'react';

import { GalleryTitle } from './GalleryTitle';
import { GallerySwiper } from './GallerySwiper';

import { useWindowWidth } from '@/hooks';

export const SectionGallery: React.FC = () => {
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);

  const { isScreenMobile, isScreenTablet } = useWindowWidth();

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
  }, [isFirstRender]);

  return (
    <section
      id="gallery"
      className={`
        ${!isFirstRender && isScreenMobile ? 'section-gallery' : ''}  ${
        !isFirstRender && !isScreenMobile ? 'section-gallery-desktop' : ''
      } block w-full`}
    >
      <div
        className="container max-w-[480px] ml-auto mr-auto pt-[56px] pr-5 pb-[56px] pl-5 
        md:pt-16 md:pr-8 md:pb-16 md:pl-8 md:max-w-3xl
        xl:max-w-7xl xl:pt-[104px] xl:pr-0 xl:pb-[104px] xl:pl-0"
      >
        {isScreenMobile ? (
          <>
            <GalleryTitle />
            <GallerySwiper
              isScreenMobile={isScreenMobile}
              isScreenTablet={isScreenTablet}
            />
          </>
        ) : (
          <>
            <GalleryTitle />
            <GallerySwiper
              isScreenMobile={isScreenMobile}
              isScreenTablet={isScreenTablet}
            />
          </>
        )}
      </div>
    </section>
  );
};

{
}
