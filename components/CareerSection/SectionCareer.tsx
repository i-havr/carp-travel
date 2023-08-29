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

  const { isScreenMobile } = useWindowWidth();

  return (
    <>
      {isScreenMobile ? (
        <>
          <section
            id="career"
            className={`
        ${
          !isFirstRender ? 'section-career' : ''
        } block w-full pt-[56px] pb-[56px]`}
          >
            <div className="container max-w-[480px] ml-auto mr-auto pr-5 pl-5">
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
            className={`
        ${
          !isFirstRender ? 'section-career' : ''
        } block w-full pt-[56px] pb-[56px]`}
          >
            <div className="container max-w-[480px] ml-auto mr-auto pr-5 pl-5">
              <h2 className="visually-hidden">Section Career</h2>
              <div className="flex flex-col gap-6">
                <div className="flex justify-end">
                  <CareerMotto />
                </div>
                <CareerForm />
              </div>
            </div>
          </section>
        </>
      ) : (
        <section
          id="career"
          className={`
        ${
          !isFirstRender ? 'section-career-desktop' : ''
        } block w-full pt-16 pb-16 xl:pt-[104px] xl:pb-[104px]`}
        >
          <div
            className="container ml-auto mr-auto max-w-3xl pr-8 pl-8
            xl:max-w-7xl xl:pr-6 xl:pl-6"
          >
            <div className="grid-career-tablet">
              <div className="grid-career-item-1">
                <CareerTitle />
              </div>

              <div className="grid-career-item-2">
                <CareerOfferDescription />
              </div>

              <div className="grid-career-item-3 flex flex-col">
                <CareerQuestionTitle />
                <ul className="flex flex-col gap-6">
                  {careerFeatures.map(feature => {
                    return (
                      <li key={feature.id}>
                        <div className="flex flex-col gap-2 xl:flex-row xl:gap-6">
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

              <div className="grid-career-item-4">
                <CareerMotto />
              </div>
              <div className="grid-career-item-5">
                <CareerForm />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

{
}
