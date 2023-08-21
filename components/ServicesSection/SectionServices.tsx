'use client';

import React, { useState, useEffect } from 'react';

import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { ServicesTitle } from './ServicesTitle';
import { ServicesPagination } from './ServicesPagination';
import { ServicesSwiper } from './ServicesSwiper';
import { ServicesMotto } from './ServicesMotto';
import { ServicesSlidesList } from './ServicesSlidesList';
import { ServicesDescription } from './ServicesDescription';
import { useWindowWidth } from '@/hooks';
import { services, changeBackground } from '@/helpers';

export const SectionServices: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(1);
  const [currentSectionBg, setCurrentSectionBg] = useState<string | undefined>(
    ''
  );
  const [swiper, setSwiper] = useState<SwiperCore>();
  const {
    isScreenMobile,
    isLargeScreenMobile,
    isScreenTablet,
    isScreenDesktop,
  } = useWindowWidth();

  const currentSlide = services.find(slide => slide.id === activeSlide);

  const sectionBgStyle = {
    backgroundImage: `linear-gradient(
      to bottom,
      rgba(0, 24, 38, 0.8),
      rgba(0, 37, 49, 0)
    ),
    linear-gradient(rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), url(${currentSectionBg})`,
    backgroundSize: '100% 247px, cover, cover',
    backgroundPosition: '0 0, center, center',
    backgroundRepeat: 'no-repeat',
  };

  useEffect(() => {
    if (currentSlide) {
      changeBackground(
        currentSlide,
        isScreenMobile,
        isScreenTablet,
        setCurrentSectionBg
      );
    }
  }, [currentSlide, currentSlide?.id, isScreenMobile, isScreenTablet]);

  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveSlide(swiper.activeIndex + 1);
  };

  const handleGoToSlideByClick = (slideId: number) => {
    if (swiper) {
      swiper.slideTo(slideId - 1);
    }
    setActiveSlide(slideId);
  };

  return (
    <section
      id="services"
      className="section-services block w-full"
      style={sectionBgStyle}
    >
      <div className="container max-w-[480px] ml-auto mr-auto pt-[54px] pr-5 pb-14 pl-5 md:max-w-3xl md:pt-16 md:pr-8 md:pb-16 md:pl-8 xl:max-w-7xl xl:pt-[104px] xl:pr-6 xl:pb-[104px] xl:pl-6">
        {isScreenMobile ? (
          <>
            <ServicesTitle />
            <ServicesPagination
              activeSlide={activeSlide}
              total={services.length}
            />
            <ServicesSwiper
              services={services}
              handleSlideChange={handleSlideChange}
              setSwiper={setSwiper}
            />
            <ServicesMotto motto={currentSlide?.motto} />
            <ServicesSlidesList
              services={services}
              currentSlide={activeSlide}
              actionHandler={handleGoToSlideByClick}
            />
            <ServicesDescription description={currentSlide?.description} />
          </>
        ) : isScreenTablet ? (
          <div className="flex flex-col">
            <div className="flex justify-between">
              <ServicesTitle />
              <ServicesPagination
                activeSlide={activeSlide}
                total={services.length}
              />
            </div>
            <div className="flex justify-between">
              <ServicesSwiper
                services={services}
                handleSlideChange={handleSlideChange}
                setSwiper={setSwiper}
              />
              <div className="flex flex-col">
                <ServicesSlidesList
                  services={services}
                  currentSlide={activeSlide}
                  actionHandler={handleGoToSlideByClick}
                />
                <ServicesMotto motto={currentSlide?.motto} />
                <ServicesDescription />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-[72px]">
            <div className="flex flex-row justify-start gap-9">
              <ServicesTitle />
              <ServicesDescription />
            </div>
            <div className="flex flex-row justify-between"></div>
          </div>
        )}
      </div>
    </section>
  );
};
