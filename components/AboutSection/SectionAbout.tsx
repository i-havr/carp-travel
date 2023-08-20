'use client';

import React from 'react';

import { AboutTitle } from './AboutTitle';
import { AboutLargeDescription } from './AboutLargeDescription';
import { AboutMotto } from './AboutMotto';
import { AboutMethods } from './AboutMethods';
import { useWindowWidth } from '@/hooks';

export const SectionAbout = () => {
  const {
    isScreenMobile,
    isLargeScreenMobile,
    isScreenTablet,
    isScreenDesktop,
  } = useWindowWidth();

  return (
    <section
      id="about"
      className={`${
        isLargeScreenMobile
          ? 'section-about-tablet'
          : isScreenTablet || isScreenDesktop
          ? 'section-about-desktop'
          : 'section-about'
      } block w-full`}
    >
      <div className="container max-w-[480px] ml-auto mr-auto pt-[55px] pr-5 pb-[54px] pl-5 md:max-w-3xl md:pt-16 md:pr-8 md:pb-16 md:pl-8 xl:max-w-7xl xl:pt-[104px] xl:pr-6 xl:pb-[104px] xl:pl-6">
        {isScreenMobile ? (
          <>
            <AboutTitle />
            <AboutLargeDescription />
            <AboutMotto />
            <AboutMethods />
          </>
        ) : isScreenTablet ? (
          <div className="flex flex-col gap-16">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col justify-between">
                <AboutTitle />
                <AboutMotto />
              </div>

              <AboutLargeDescription />
            </div>
            <AboutMethods />
          </div>
        ) : (
          <div className="flex flex-col gap-[72px]">
            <div className="flex flex-row justify-start gap-9">
              <AboutTitle />
              <AboutLargeDescription />
            </div>
            <div className="flex flex-row justify-between">
              <AboutMethods />
              <AboutMotto />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
