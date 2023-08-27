'use client';

import React from 'react';
import {
  useForm,
  SubmitHandler,
  FieldErrors,
  UseFormRegister,
} from 'react-hook-form';

import { ContactsFormFullName } from './ContactsFormFullName';
import { ContactsFormEmail } from './ContactsFormEmail';
import { ContactsFormMessage } from './ContactsFormMessage';
import { ContactsFormButton } from './ContactsFormButton';

import toast from 'react-hot-toast';
import { useWindowWidth } from '@/hooks';
import SvgRedCross from '@/public/assets/icons/red-cross.svg';

type Inputs = {
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
          <ContactsFormFullName register={register} errors={errors} />
          <ContactsFormEmail register={register} errors={errors} />
          <ContactsFormMessage register={register} errors={errors} />
          <ContactsFormButton />
        </form>
      ) : (
        <form
          className="w-full flex flex-row gap-5 xl:w-[607px] xl:flex-col xl:gap-10"
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-4 xl:flex-row xl:w-full xl:justify-between">
            <ContactsFormFullName register={register} errors={errors} />
            <ContactsFormEmail register={register} errors={errors} />
          </div>
          <div className="w-full flex flex-col">
            <ContactsFormMessage register={register} errors={errors} />
            <ContactsFormButton />
          </div>
        </form>
      )}
    </>
  );
};
