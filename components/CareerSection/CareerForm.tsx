'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Inputs } from '@/interfaces';

import {
  FullNameInput,
  EmailInput,
  PositionInput,
  PhoneInput,
  AgreementCheckbox,
  MessageInput,
  SubmitButton,
} from '@/components/Form';

import { useWindowWidth } from '@/hooks';
import toast from 'react-hot-toast';

export const CareerForm: React.FC = () => {
  const [formattedPhone, setFormattedPhone] = useState<string | undefined>('');

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const { isScreenMobile } = useWindowWidth();

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log('You have just sent data => ', data);

    setFormattedPhone('');

    toast.success('You have just sent data', {
      duration: 4000,
      className: 'font-medium',
    });

    reset();
  };

  return (
    <>
      {isScreenMobile ? (
        <form
          className="flex flex-col gap-4"
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FullNameInput register={register} errors={errors} />
          <EmailInput register={register} errors={errors} />
          <PositionInput register={register} errors={errors} />
          <PhoneInput
            errors={errors}
            formattedPhone={formattedPhone}
            control={control}
            setFormattedPhone={setFormattedPhone}
          />
          <MessageInput register={register} errors={errors} />
          <AgreementCheckbox register={register} errors={errors} />
          <SubmitButton />
        </form>
      ) : (
        <form
          className="w-full flex flex-row gap-6"
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-[222px] flex flex-col gap-4 xl:w-[290px] xl:gap:6">
            <FullNameInput register={register} errors={errors} />
            <EmailInput register={register} errors={errors} />
            <PositionInput register={register} errors={errors} />
            <PhoneInput
              errors={errors}
              formattedPhone={formattedPhone}
              control={control}
              setFormattedPhone={setFormattedPhone}
            />
            <AgreementCheckbox register={register} errors={errors} />
          </div>
          <div className="w-full flex flex-col">
            <MessageInput
              register={register}
              errors={errors}
              labelExtraStyles="md:mb-[9px]"
              errorExtraStyles="md:top-[98%]"
              inputExtraStyles="xl:h-[232px]"
            />
            <SubmitButton />
          </div>
        </form>
      )}
    </>
  );
};
