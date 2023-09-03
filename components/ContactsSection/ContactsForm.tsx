'use client';

import React, { useState, useEffect } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';

import { Inputs } from '@/interfaces';

import {
  FullNameInput,
  EmailInput,
  MessageInput,
  SubmitButton,
} from '@/components/Form';

import toast from 'react-hot-toast';
import { useWindowWidth } from '@/hooks';

export const ContactsForm: React.FC = () => {
  const [formData, setFormData] = useState<Inputs | any>();

  const {
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    const storedData = sessionStorage.getItem('contactsForm');

    if (storedData) {
      const savedData = JSON.parse(storedData);
      setFormData(savedData);
    }
  }, []);

  useEffect(() => {
    if (formData) {
      for (const field in formData) {
        setValue(field as keyof Inputs, formData[field]);
      }
    }
  }, [formData, setValue]);

  const { isScreenMobile } = useWindowWidth();

  const handleInputChange = (field: string, value: string) => {
    const storedData = sessionStorage.getItem('contactsForm');

    if (storedData) {
      const updatedData = { ...JSON.parse(storedData), [field]: value };
      sessionStorage.setItem('contactsForm', JSON.stringify(updatedData));
    } else {
      sessionStorage.setItem(
        'contactsForm',
        JSON.stringify({ [field]: value })
      );
    }
  };

  const onSubmit: SubmitHandler<Inputs> = data => {
    toast.success('You have just sent data', {
      duration: 4000,
      className: 'font-medium',
    });

    console.log('You have just sent data => ', data);

    setFormData(undefined);

    reset();

    sessionStorage.removeItem('contactsForm');
  };

  return (
    <>
      {isScreenMobile ? (
        <form
          className="flex flex-col gap-6"
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FullNameInput
            errors={errors}
            control={control}
            savedData={formData ? formData.fullName : ''}
            handleInputChange={handleInputChange}
          />
          <EmailInput
            errors={errors}
            extraStyles="w-full"
            control={control}
            savedData={formData ? formData.email : ''}
            handleInputChange={handleInputChange}
          />
          <MessageInput
            errors={errors}
            errorExtraStyles="justify-center"
            control={control}
            savedData={formData ? formData.message : ''}
            handleInputChange={handleInputChange}
          />
          <SubmitButton extraStyles="mt-[-9px]" />
        </form>
      ) : (
        <form
          className="w-full flex flex-row gap-5 xl:w-[607px] xl:flex-col xl:gap-10"
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-4 xl:flex-row xl:w-full xl:justify-between">
            <FullNameInput
              errors={errors}
              extraStyles="md:w-[221px] xl:w-[293px] xl:h-7 xl:leading-[1.2]"
              control={control}
              savedData={formData ? formData.fullName : ''}
              handleInputChange={handleInputChange}
            />
            <EmailInput
              errors={errors}
              extraStyles="w-full xl:w-[293px] xl:h-7 xl:leading-[1.2]"
              control={control}
              savedData={formData ? formData.email : ''}
              handleInputChange={handleInputChange}
            />
          </div>
          <div className="w-full flex flex-col">
            <MessageInput
              errors={errors}
              labelExtraStyles="md:mb-[16px] xl:mb-6"
              errorExtraStyles="justify-center"
              inputExtraStyles="xl:h-[174px] xl:leading-[1.2]"
              control={control}
              savedData={formData ? formData.message : ''}
              handleInputChange={handleInputChange}
            />
            <SubmitButton />
          </div>
        </form>
      )}
    </>
  );
};
