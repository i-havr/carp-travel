'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { LinkButton } from './LinkButton';
import { HeroTitle } from './HeroTitle';
import { HeroMotto } from './HeroMotto';
import { HeroPlacesList } from './HeroPlacesList';
import { HeroOfferDescription } from './HeroOfferDescription';

import Image from 'next/image';
import svgLeftMobile from '@/public/assets/icons/1svgFrame-mobile.svg';
import svgRightMobile from '@/public/assets/icons/2svgFrame-mobile.svg';
import svgLeftTablet from '@/public/assets/icons/1svgFrame-tablet.svg';
import svgRightTablet from '@/public/assets/icons/2svgFrame-tablet.svg';
import svgLeftDesktop from '@/public/assets/icons/1svgFrame-desktop.svg';
import svgRightDesktop from '@/public/assets/icons/2svgFrame-desktop.svg';
import { useWindowWidth } from '@/hooks';

export const SectionHero: React.FC = () => {
  const { isScreenMobile, isScreenTablet, isScreenDesktop } = useWindowWidth();

  return (
    <section
      id="hero"
      className={`${
        isScreenDesktop ? 'section-hero-desktop' : 'section-hero'
      } block w-full`}
    >
      <div className="container max-w-[480px] ml-auto mr-auto pt-9 pr-5 pb-14 pl-5 md:max-w-3xl md:pt-6 md:pr-8 md:pb-16 md:pl-8 xl:max-w-7xl xl:pt-6 xl:pr-6 xl:pb-[104px] xl:pl-6">
        <Header />

        {isScreenMobile ? (
          <>
            <HeroTitle />
            <HeroMotto />
            <HeroPlacesList />
            <HeroOfferDescription />
            <LinkButton>
              <Image
                src={svgLeftMobile}
                alt="Left frame"
                className="absolute top-0 left-0 w-auto h-full"
                width={0}
                height={0}
                aria-hidden="true"
                priority
              />
              Join now
              <Image
                src={svgRightMobile}
                alt="Right frame"
                className="absolute top-0 right-0 w-auto h-full"
                width={0}
                height={0}
                aria-hidden="true"
                priority
              />
            </LinkButton>
          </>
        ) : (
          <div className="flex justify-between">
            <div className="flex flex-col w-[426px] xl:w-[650px]">
              <HeroMotto />
              <HeroPlacesList />
            </div>

            <div className="flex flex-col w-[233px] xl:w-[310px]">
              <HeroTitle />
              <HeroOfferDescription />
              <LinkButton>
                <Image
                  src={isScreenTablet ? svgLeftTablet : svgLeftDesktop}
                  alt="Left frame"
                  className="absolute top-0 left-0 w-auto h-full"
                  width={0}
                  height={0}
                  aria-hidden="true"
                  priority
                />
                Join now
                <Image
                  src={isScreenTablet ? svgRightTablet : svgRightDesktop}
                  alt="Right frame"
                  className="absolute top-0 right-0 w-auto h-full"
                  width={0}
                  height={0}
                  aria-hidden="true"
                  priority
                />
              </LinkButton>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
