import React, { useRef } from 'react';

import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import SwiperCore from 'swiper';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { ServicesImage } from './ServicesImage';
import { Service } from '@/helpers';

SwiperCore.use([EffectFade]);

interface Props {
  services: Service[];
  handleSlideChange: (swiper: SwiperCore) => void;
  setSwiper: (swiper: SwiperCore) => void;
}

export const ServicesSwiper: React.FC<Props> = ({
  services,
  handleSlideChange,
  setSwiper,
}: Props) => {
  const swiperRef = useRef<SwiperRef>(null);
  return (
    <Swiper
      ref={swiperRef}
      lazyPreloadPrevNext={1}
      slidesPerView={1}
      allowTouchMove={false}
      onSlideChange={handleSlideChange}
      onSwiper={swiper => setSwiper(swiper)}
      className="w-full h-full mb-3"
      effect="fade"
      speed={1000}
      spaceBetween={20}
    >
      {services.map(service => {
        return (
          <SwiperSlide key={service.id} className="overflow-hidden">
            <ServicesImage service={service} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
