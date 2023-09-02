'use client';

import React from 'react';

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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const { isScreenMobile } = useWindowWidth();

  const onSubmit: SubmitHandler<Inputs> = data => {
    toast.success('You have just sent data', {
      duration: 4000,
      className: 'font-medium',
    });

    console.log('You have just sent data => ', data);

    reset();
  };

  return (
    <>
      {isScreenMobile ? (
        <form
          className="flex flex-col gap-6"
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FullNameInput register={register} errors={errors} />
          <EmailInput
            register={register}
            errors={errors}
            extraStyles="w-full"
          />
          <MessageInput
            register={register}
            errors={errors}
            errorExtraStyles="justify-center"
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
              register={register}
              errors={errors}
              extraStyles="md:w-[221px] xl:w-[293px] xl:h-7 xl:leading-[1.2]"
            />
            <EmailInput
              register={register}
              errors={errors}
              extraStyles="w-full xl:w-[293px] xl:h-7 xl:leading-[1.2]"
            />
          </div>
          <div className="w-full flex flex-col">
            <MessageInput
              register={register}
              errors={errors}
              labelExtraStyles="md:mb-[16px] xl:mb-6"
              errorExtraStyles="justify-center"
              inputExtraStyles="xl:h-[174px] xl:leading-[1.2]"
            />
            <SubmitButton />
          </div>
        </form>
      )}
    </>
  );
};
