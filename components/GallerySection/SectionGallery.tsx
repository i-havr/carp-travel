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
      } block w-full pt-[56px] pb-[56px] md:pt-16 md:pb-16 xl:pt-[104px] xl:pb-[104px]`}
    >
      <div
        className="container max-w-[480px] ml-auto mr-auto pr-5 pl-5 md:pr-8 md:pl-8 md:max-w-3xl
        xl:max-w-7xl xl:pr-0 xl:pl-0"
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
