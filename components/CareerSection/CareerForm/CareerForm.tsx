'use client';

import React, { useState } from 'react';
import {
  useForm,
  SubmitHandler,
  FieldErrors,
  UseFormRegister,
} from 'react-hook-form';

import { CareerFormFullName } from './CareerFormFullName';
import { CareerFormEmail } from './CareerFormEmail';
import { CareerFormPosition } from './CareerFormPosition';
import { CareerFormPhone } from './CareerFormPhone';
import { CareerFormMessage } from './CareerFormMessage';
import { CareerFormAgreementCheckbox } from './CareerFormAgreementCheckbox';
import { CareerFormButton } from './CareerFormButton';

import { formatPhone } from '@/helpers';
import { useWindowWidth } from '@/hooks';
import toast from 'react-hot-toast';

export type Inputs = {
  fullName: string;
  email: string;
  position: string;
  phone: string;
  message: string;
  agree: boolean;
};

export interface InputProps {
  register?: UseFormRegister<Inputs> | undefined;
  errors: FieldErrors<Inputs>;
}

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

  const handlePhoneChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;

    const formattedValue = formatPhone(value);

    setFormattedPhone(formattedValue);
  };

  return (
    <>
      {isScreenMobile ? (
        <form
          className="flex flex-col gap-4"
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <CareerFormFullName register={register} errors={errors} />
          <CareerFormEmail register={register} errors={errors} />
          <CareerFormPosition register={register} errors={errors} />
          <CareerFormPhone
            errors={errors}
            formattedPhone={formattedPhone}
            control={control}
            setFormattedPhone={setFormattedPhone}
          />
          <CareerFormMessage register={register} errors={errors} />
          <CareerFormAgreementCheckbox register={register} errors={errors} />
          <CareerFormButton />
        </form>
      ) : (
        <form
          className="w-full flex flex-row gap-6"
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-[222px] flex flex-col gap-4 xl:w-[290px] xl:gap:6">
            <CareerFormFullName register={register} errors={errors} />
            <CareerFormEmail register={register} errors={errors} />
            <CareerFormPosition register={register} errors={errors} />
            <CareerFormPhone
              errors={errors}
              formattedPhone={formattedPhone}
              control={control}
              setFormattedPhone={setFormattedPhone}
            />
            <CareerFormAgreementCheckbox register={register} errors={errors} />
          </div>
          <div className="w-full flex flex-col">
            <CareerFormMessage register={register} errors={errors} />
            <CareerFormButton />
          </div>
        </form>
      )}
    </>
  );
};
