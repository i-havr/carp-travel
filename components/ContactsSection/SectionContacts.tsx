'use client';

import React, { useState, useEffect } from 'react';

import { ContactsTitle } from './ContactsTitle';
import { ContactsPhone } from './ContactsPhone';
import { ContactsForm } from './ContactsForm';
import { ContactsEmail } from './ContactsEmail';
import { ContactsSocialNetworks } from './ContactsSocialNetworks';

import { useWindowWidth } from '@/hooks';

export const SectionContacts: React.FC = () => {
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
  }, [isFirstRender]);

  const { isScreenMobile, isScreenTablet } = useWindowWidth();

  return (
    <>
      {isScreenMobile ? (
        <section
          id="contacts"
          className={`
        ${!isFirstRender ? 'section-contacts' : ''} block w-full`}
        >
          <div className="container max-w-[480px] ml-auto mr-auto pt-[56px] pr-5 pb-[56px] pl-5">
            <ContactsTitle />
            <ContactsPhone />
            <ContactsEmail />
            <ContactsSocialNetworks />
            <ContactsForm />
          </div>
        </section>
      ) : isScreenTablet ? (
        <section
          id="contacts"
          className={`
        ${!isFirstRender ? 'section-contacts-desktop' : ''} block w-full`}
        >
          <div
            className="container ml-auto mr-auto max-w-3xl pt-16 pr-8 pb-16 pl-8
            xl:max-w-7xl xl:pt-[104px] xl:pr-6 xl:pb-[104px] xl:pl-6"
          >
            <ContactsTitle />
            <div className="flex gap-[90px] mb-16">
              <div className="flex flex-col gap-6">
                <ContactsPhone />
                <ContactsEmail />
              </div>
              <ContactsSocialNetworks />
            </div>

            <ContactsForm />
          </div>
        </section>
      ) : (
        <section
          id="contacts"
          className={`
        ${!isFirstRender ? 'section-contacts-desktop' : ''} block w-full`}
        >
          <div className="container ml-auto mr-auto max-w-7xl pt-[104px] pr-6 pb-[104px] pl-6">
            <ContactsTitle />

            <div className="flex justify-between">
              <div className="flex flex-col">
                <ContactsPhone />
                <ContactsEmail />
                <ContactsSocialNetworks />
              </div>

              <ContactsForm />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

{
}
