'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { LinkButton } from './LinkButton';
import { HeroTitle } from './HeroTitle';
import { HeroMotto } from './HeroMotto';
import { HeroPlacesList } from './HeroPlacesList';
import { HeroOfferDescription } from './HeroOfferDescription';

import SvgLeftMobile from '@/public/assets/icons/1svgFrame-mobile.svg';
import SvgRightMobile from '@/public/assets/icons/2svgFrame-mobile.svg';
import SvgLeftTablet from '@/public/assets/icons/1svgFrame-tablet.svg';
import SvgRightTablet from '@/public/assets/icons/2svgFrame-tablet.svg';
import SvgLeftDesktop from '@/public/assets/icons/1svgFrame-desktop.svg';
import SvgRightDesktop from '@/public/assets/icons/2svgFrame-desktop.svg';

import { useWindowWidth } from '@/hooks';

export const SectionHero: React.FC = () => {
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  const { isScreenMobile, isScreenTablet, isScreenDesktop } = useWindowWidth();

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
  }, [isFirstRender]);

  return (
    <section
      id="hero"
      className={`${
        !isFirstRender && isScreenDesktop ? 'section-hero-desktop' : ''
      } 
        ${
          !isFirstRender && !isScreenDesktop ? 'section-hero' : ''
        } block w-full pt-[105px] pb-14 md:pt-[121px] md:pb-16 xl:pt-[106px] xl:pb-[104px]`}
    >
      <div className="container max-w-[480px] ml-auto mr-auto pr-5 pl-5 md:max-w-3xl md:pr-8 md:pl-8 xl:max-w-7xl xl:pr-6 xl:pl-6">
        {isScreenMobile ? (
          <>
            <HeroTitle />
            <HeroMotto />
            <HeroPlacesList />
            <HeroOfferDescription />
            <LinkButton>
              <SvgLeftMobile
                style={{ position: 'absolute', left: 0 }}
                aria-hidden
              />
              <SvgRightMobile
                style={{ position: 'absolute', right: 0 }}
                aria-hidden
              />
              Join now
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
                {isScreenTablet ? (
                  <>
                    <SvgLeftTablet
                      style={{ position: 'absolute', left: 0 }}
                      aria-hidden
                    />
                    <SvgRightTablet
                      style={{ position: 'absolute', right: 0 }}
                      aria-hidden
                    />
                  </>
                ) : (
                  <>
                    <SvgLeftDesktop
                      style={{ position: 'absolute', left: 0 }}
                      aria-hidden
                    />
                    <SvgRightDesktop
                      style={{ position: 'absolute', right: 0 }}
                      aria-hidden
                    />
                  </>
                )}
                Join now
              </LinkButton>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
