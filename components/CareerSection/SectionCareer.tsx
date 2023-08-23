'use client';

import React, { useState, useEffect } from 'react';

import { CareerTitle } from './CareerTitle';
import { CareerOfferDescription } from './CareerOfferDescription';
import { CareerQuestionTitle } from './CareerQuestionTitle';
import { CareerFeatureTitle } from './CareerFeatureTitle';
import { CareerFeatureDescription } from './CareerFeatureDescription';
import { CareerMotto } from './CareerMotto';
import { CareerForm } from './CareerForm';

import { careerFeatures } from '@/helpers';
import { useWindowWidth } from '@/hooks';

export const SectionCareer: React.FC = () => {
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
  }, [isFirstRender]);

  const { isScreenMobile, isScreenTablet, isScreenDesktop } = useWindowWidth();

  return (
    <>
      {isScreenMobile ? (
        <>
          <section
            id="career"
            className={`${
              !isFirstRender && isScreenDesktop ? 'section-career-desktop' : ''
            } 
        ${
          !isFirstRender && !isScreenDesktop ? 'section-career' : ''
        } block w-full`}
          >
            <div
              className="container max-w-[480px] ml-auto mr-auto pt-[56px] pr-5 pb-[56px] pl-5 
            md:max-w-3xl md:pt-16 md:pr-8 md:pb-16 md:pl-8
            xl:max-w-7xl xl:pt-[104px] xl:pr-6 xl:pb-[104px] xl:pl-6"
            >
              <CareerTitle />
              <div className="mb-9">
                <div className="w-[180px] flex flex-col ml-auto items-end">
                  <CareerOfferDescription />
                  <CareerQuestionTitle />
                </div>
              </div>
              <ul className="flex flex-col gap-4 w-[182px]">
                {careerFeatures.map(feature => {
                  return (
                    <li key={feature.id}>
                      <div className="flex flex-col gap-2">
                        <CareerFeatureTitle title={feature.title} />
                        <CareerFeatureDescription
                          description={feature.description}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
          <section
            className={`${
              !isFirstRender && isScreenDesktop ? 'section-career-desktop' : ''
            } 
        ${
          !isFirstRender && !isScreenDesktop ? 'section-career' : ''
        } block w-full`}
          >
            <div
              className="container max-w-[480px] ml-auto mr-auto pt-[56px] pr-5 pb-[56px] pl-5 
            md:max-w-3xl md:pt-16 md:pr-8 md:pb-16 md:pl-8
            xl:max-w-7xl xl:pt-[104px] xl:pr-6 xl:pb-[104px] xl:pl-6"
            >
              <div className="flex flex-col gap-6">
                <div className="flex justify-end">
                  <CareerMotto />
                </div>
                <CareerForm />
              </div>
            </div>
          </section>
        </>
      ) : isScreenTablet ? (
        <div></div>
      ) : (
        <div></div>
      )}
    </>
  );
};

{
}
