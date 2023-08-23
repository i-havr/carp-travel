'use client';

import React, { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import { formatPhone } from '@/helpers';
import Image from 'next/image';
import svgRedCross from '@/public/assets/icons/red-cross.svg';

type Inputs = {
  fullName: string;
  email: string;
  position: string;
  phone: string;
  message: string;
  agree: boolean;
};

export const CareerForm = () => {
  const [formattedPhone, setFormattedPhone] = useState<string | undefined>('');

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log('You have just sent data => ', data);
    setFormattedPhone('');
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
    <form
      className="flex flex-col gap-4"
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* FULL NAME */}
      <label
        className={`flex flex-col ${errors.fullName ? 'text-error-input' : ''}`}
      >
        <span className="font-extralight text-sm leading-[2] tracking-[2.4px]">
          Full name
        </span>
        <div className="relative flex flex-col">
          <input
            {...register('fullName', {
              required: true,
              pattern: /^[a-zA-Z\s'-]+$/,
              minLength: 3,
            })}
            className="flex items-center pl-2 pr-2 text-[13px] outline-none leading-[1.85] bg-input"
            type="text"
            placeholder="John Smith"
          />

          {errors.fullName && (
            <span className="error-message">
              <Image
                src={svgRedCross}
                alt="Red cross icon"
                className="h-full"
                width={0}
                height={0}
                aria-hidden="true"
                priority
              />
              Incorrect name
            </span>
          )}
        </div>
      </label>

      {/* E-MAIL */}
      <label
        className={`flex flex-col ${errors.email ? 'text-error-input' : ''}`}
      >
        <span className="font-extralight text-sm leading-[2] tracking-[2.4px]">
          E-mail
        </span>
        <div className="relative flex flex-col">
          <div className="bg-input">
            <input
              {...register('email', {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              })}
              className="input-autofill flex items-center pl-2 pr-2 text-[13px] outline-none leading-[1.85] bg-transparent"
              type="text"
              placeholder="johnsmith@email.com"
            />
          </div>

          {errors.email && (
            <span className="error-message">
              <Image
                src={svgRedCross}
                alt="Red cross icon"
                className="h-full"
                width={0}
                height={0}
                aria-hidden="true"
                priority
              />
              Incorrect E-mail
            </span>
          )}
        </div>
      </label>

      {/* POSITION */}
      <label
        className={`flex flex-col ${errors.position ? 'text-error-input' : ''}`}
      >
        <span className="font-extralight text-sm leading-[2] tracking-[2.4px]">
          Position
        </span>
        <div className="relative flex flex-col">
          <input
            {...register('position', {
              required: true,
              pattern: /^[a-zA-Z\s,'-]+$/,
              minLength: 3,
            })}
            className="flex items-center pl-2 pr-2 text-[13px] outline-none leading-[1.85] bg-input"
            type="text"
            placeholder="Movie maker"
          />

          {errors.position && (
            <span className="error-message">
              <Image
                src={svgRedCross}
                alt="Red cross icon"
                className="h-full"
                width={0}
                height={0}
                aria-hidden="true"
                priority
              />
              Incorrect position
            </span>
          )}
        </div>
      </label>

      {/*PHONE*/}
      <label
        className={`flex flex-col ${errors.phone ? 'text-error-input' : ''}`}
      >
        <span className="font-extralight text-sm leading-[2] tracking-[2.4px]">
          Phone
        </span>
        <div className="relative flex flex-col">
          <Controller
            name="phone"
            defaultValue=""
            shouldUnregister
            rules={{
              onChange: handlePhoneChange,
              required: true,
              pattern: /^\(\d{3}\) \d{2} \d{2} \d{3}$/,
            }}
            control={control}
            render={({ field }) => (
              <input
                {...field}
                className="flex items-center pl-10 pr-2 text-[13px] outline-none leading-[1.85] bg-input"
                type="text"
                value={formattedPhone}
                placeholder="(097) 12 34 567"
              />
            )}
          />

          <span className="absolute left-2 text-[13px] top-1/2 -translate-y-1/2">
            {'+ 38'}
          </span>
          {errors.phone && (
            <span className="error-message">
              <Image
                src={svgRedCross}
                alt="Red cross icon"
                className="h-full"
                width={0}
                height={0}
                aria-hidden="true"
                priority
              />
              Incorrect phone
            </span>
          )}
        </div>
      </label>

      {/* MESSAGE */}
      <label
        className={`flex flex-col ${errors.message ? 'text-error-input' : ''}`}
      >
        <span className="font-extralight text-sm leading-[2] tracking-[2.4px]">
          Message
        </span>
        <div className="relative flex flex-col">
          <textarea
            {...register('message', { required: true, minLength: 5 })}
            className="flex items-center h-[196px] pl-2 pr-2 text-[13px] outline-none leading-[1.85] bg-input"
            rows={8}
          />

          {errors.message && (
            <span className="absolute right-0 top-full flex items-center gap-[6px] font-extralight text-xs leading-[2] tracking-[2.4px]">
              <Image
                src={svgRedCross}
                alt="Red cross icon"
                className="h-full"
                width={0}
                height={0}
                aria-hidden="true"
                priority
              />
              Incorrect message
            </span>
          )}
        </div>
      </label>

      {/* AGREEMENT CHECKBOX */}
      <label className="relative flex items-start pl-[30px] font-extralight text-xs leading-[1.83]">
        <input
          {...register('agree', { required: true })}
          className="hidden-checkbox"
          type="checkbox"
        />
        <span className="custom-checkbox flex justify-center items-center p-[3px] bg-black">
          <span className="inner-checkbox-marker"></span>
        </span>
        I confirm my consent to the processing of personal data.
        {errors.agree && (
          <span
            className={`absolute right-0 top-full flex items-center gap-[6px] font-extralight text-xs tracking-[2.4px] ${
              errors.agree ? 'text-error-input' : ''
            }`}
          >
            <Image
              src={svgRedCross}
              alt="Red cross icon"
              className="h-full"
              width={0}
              height={0}
              aria-hidden="true"
              priority
            />
            You must accept the terms
          </span>
        )}
      </label>
      <button
        className="w-[82px] ml-auto font-medium text-3xl leading-[1.21] uppercase"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};
