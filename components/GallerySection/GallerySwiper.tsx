import React, { useRef, useState, useEffect } from 'react';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { GalleryImage } from './GalleryImage';
import { pictures } from '@/helpers';

interface Props {
  isScreenMobile: boolean;
  isScreenTablet: boolean;
}

export const GallerySwiper: React.FC<Props> = ({ isScreenMobile }: Props) => {
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  const [swiperWidth, setSwiperWidth] = useState<number | undefined>();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSwiperWidth(divRef.current?.offsetWidth);
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
  }, [isFirstRender, divRef.current?.offsetWidth]);

  return !isFirstRender && isScreenMobile ? (
    <div ref={divRef}>
      <Swiper
        direction={'vertical'}
        loop
        lazyPreloadPrevNext={1}
        slidesPerView={3}
        className="max-h-[1000px]"
        style={{
          height: (swiperWidth! / 1.41) * 3 + 48 + 'px',
        }}
        speed={1000}
        spaceBetween={24}
      >
        {pictures.map(picture => {
          return (
            <SwiperSlide key={picture.id} className="overflow-hidden">
              <GalleryImage picture={picture} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  ) : !isFirstRender && !isScreenMobile ? (
    <Swiper
      modules={[Navigation]}
      navigation
      loop
      centeredSlides={true}
      slidesPerView={3}
      speed={500}
      spaceBetween={24}
      className="relative h-[294px] outline-none xl:h-[447px]"
    >
      {pictures.map(picture => {
        return (
          <SwiperSlide key={picture.id}>
            {({ isActive }) => (
              <GalleryImage picture={picture} isActive={isActive} />
            )}
          </SwiperSlide>
        );
      })}
    </Swiper>
  ) : null;
};
