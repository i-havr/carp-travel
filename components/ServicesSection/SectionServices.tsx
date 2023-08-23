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
import { services, changeBackground, setSectionBgStyle } from '@/helpers';

export const SectionServices: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(1);
  const [currentSectionBg, setCurrentSectionBg] = useState<string | undefined>(
    ''
  );
  const [swiper, setSwiper] = useState<SwiperCore>();
  const { isScreenMobile, isScreenTablet, isScreenDesktop } = useWindowWidth();

  const currentSlide = services.find(slide => slide.id === activeSlide);

  useEffect(() => {
    if (currentSlide) {
      changeBackground(currentSlide, setCurrentSectionBg);
    }
  }, [currentSlide, isScreenMobile, isScreenTablet]);

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
      style={setSectionBgStyle(currentSectionBg).services}
      className="block w-full"
    >
      <div className="container max-w-[480px] ml-auto mr-auto pt-[54px] pr-5 pb-14 pl-5 md:flex md:justify-between md:max-w-3xl md:pt-16 md:pr-8 md:pb-16 md:pl-8 xl:max-w-7xl xl:pt-[104px] xl:pr-6 xl:pb-[104px] xl:pl-6">
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
          <>
            <div className="flex flex-col gap-9 w-[463px]">
              <ServicesTitle />
              <ServicesSwiper
                services={services}
                handleSlideChange={handleSlideChange}
                setSwiper={setSwiper}
              />
            </div>
            <div className="flex flex-col gap-9 w-[222px]">
              <ServicesPagination
                activeSlide={activeSlide}
                total={services.length}
              />
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col">
                  <ServicesSlidesList
                    services={services}
                    currentSlide={activeSlide}
                    actionHandler={handleGoToSlideByClick}
                  />
                  <ServicesMotto motto={currentSlide?.motto} />
                </div>
                <ServicesDescription description={currentSlide?.description} />
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row gap-5 w-[900px]">
              <div className="flex flex-col gap-6 w-[607px]">
                <ServicesTitle />
                <ServicesSwiper
                  services={services}
                  handleSlideChange={handleSlideChange}
                  setSwiper={setSwiper}
                />
              </div>

              <div className="flex flex-col gap-6 w-auto">
                <ServicesPagination
                  activeSlide={activeSlide}
                  total={services.length}
                />

                <ServicesSlidesList
                  services={services}
                  currentSlide={activeSlide}
                  isScreenDesktop={isScreenDesktop}
                  motto={currentSlide?.motto}
                  actionHandler={handleGoToSlideByClick}
                />
              </div>
            </div>

            <div className="flex flex-col justify-end w-[293px]">
              <ServicesDescription description={currentSlide?.description} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
