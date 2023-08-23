import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import Image from 'next/image';
import svgRedCross from '@/public/assets/icons/red-cross.svg';

type Inputs = {
  //   example: string;
  fullName: string;
  email: string;
};

export const CareerForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  //   console.log(watch('example'));

  return (
    <form
      className="flex flex-col gap-4"
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* FULL NAME */}
      <label className="flex flex-col">
        <span className="font-extralight text-sm leading-[2] tracking-[2.4px]">
          Full name
        </span>
        <div className="relative flex flex-col">
          <input
            {...register('fullName', { required: true })}
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
      <label className="flex flex-col">
        <span className="font-extralight text-sm leading-[2] tracking-[2.4px]">
          E-mail
        </span>
        <div className="relative flex flex-col">
          <input
            {...register('email', { required: true })}
            className="flex items-center pl-2 pr-2 text-[13px] outline-none leading-[1.85] bg-input"
            type="email"
            placeholder="johnsmith@email.com"
          />

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

      {/* <input defaultValue="test" {...register('example')} /> */}

      <button
        className="w-[82px] ml-auto font-medium text-3xl leading-[1.21] uppercase"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};
