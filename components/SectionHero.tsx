'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Button } from './Button';
import { HeroTitle } from './HeroTitle';
import { HeroMotto } from './HeroMotto';
import { HeroPlacesList } from './HeroPlacesList';
import { HeroOfferDescription } from './HeroOfferDescription';
import { useWindowWidth } from '@/hooks';

export const SectionHero = () => {
  const { isScreenMobile } = useWindowWidth();

  const handleGoToContacts = () => {
    console.log('click on the JOIN button!');
  };
  return (
    <section className="section-hero block w-full">
      <div className="container max-w-[480px] ml-auto mr-auto pt-9 pr-5 pb-14 pl-5 md:max-w-[768px] md:pt-6 md:pr-8 md:pb-16 md:pl-8">
        <Header />

        {isScreenMobile ? (
          <>
            <HeroTitle />
            <HeroMotto />
            <HeroPlacesList />
            <HeroOfferDescription />
            <Button>Join now</Button>
          </>
        ) : (
          <div className="flex justify-between">
            <div className="flex flex-col w-[426px]">
              <HeroMotto />
              <HeroPlacesList />
            </div>

            <div className="flex flex-col w-[233px]">
              <HeroTitle />
              <HeroOfferDescription />
              <Button>Join now</Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
