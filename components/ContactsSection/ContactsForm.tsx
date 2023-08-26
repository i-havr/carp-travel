'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

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

export const ContactsForm = () => {
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
          {/* FULL NAME */}
          <label
            className={`flex flex-col ${
              errors.fullName ? 'text-error-input' : ''
            }`}
          >
            <span className="font-extralight text-xs leading-[2] tracking-[2.4px]">
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
                <span className="error-message-contacts">
                  <SvgRedCross style={{ height: '10px' }} aria-hidden />
                  Incorrect name
                </span>
              )}
            </div>
          </label>

          {/* E-MAIL */}
          <label
            className={`flex flex-col ${
              errors.email ? 'text-error-input' : ''
            }`}
          >
            <span className="font-extralight text-xs leading-[2] tracking-[2.4px]">
              E-mail
            </span>
            <div className="relative flex flex-col">
              <div className="bg-input">
                <input
                  {...register('email', {
                    required: true,
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  })}
                  className="w-full input-autofill flex items-center pl-2 pr-2 text-[13px] outline-none leading-[1.85] bg-transparent"
                  type="text"
                  placeholder="johnsmith@email.com"
                />
              </div>

              {errors.email && (
                <span className="error-message-contacts">
                  <SvgRedCross style={{ height: '10px' }} aria-hidden />
                  Incorrect E-mail
                </span>
              )}
            </div>
          </label>

          {/* MESSAGE */}
          <label
            className={`flex flex-col ${
              errors.message ? 'text-error-input' : ''
            }`}
          >
            <span className="font-extralight text-xs leading-[2] tracking-[2.4px]">
              Message
            </span>
            <div className="relative flex flex-col">
              <textarea
                {...register('message', { required: true, minLength: 5 })}
                className="flex items-center h-[196px] pl-2 pr-2 text-[13px] resize-none outline-none leading-[1.85] bg-input"
                rows={8}
              />

              {errors.message && (
                <span className="absolute right-0 top-full flex justify-center items-center gap-[6px] font-extralight text-xs leading-[2] tracking-[2.4px]">
                  <SvgRedCross
                    style={{
                      height: '10px',
                    }}
                    aria-hidden
                  />
                  Incorrect message
                </span>
              )}
            </div>
          </label>

          <button
            className="w-[82px] mt-[-9px] ml-auto font-medium text-3xl leading-[1.21] uppercase"
            type="submit"
          >
            Send
          </button>
        </form>
      ) : (
        <form
          className="w-full flex flex-row gap-5 xl:w-[607px] xl:flex-col xl:gap-10"
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-4 xl:flex-row xl:w-full xl:justify-between">
            {/* FULL NAME */}
            <label
              className={`flex flex-col ${
                errors.fullName ? 'text-error-input' : ''
              }`}
            >
              <span className="font-extralight text-xs leading-[2] tracking-[2.4px]">
                Full name
              </span>
              <div className="relative flex flex-col">
                <input
                  {...register('fullName', {
                    required: true,
                    pattern: /^[a-zA-Z\s'-]+$/,
                    minLength: 3,
                  })}
                  className="w-[221px] flex items-center pl-2 pr-2 text-[13px] outline-none leading-[1.85] bg-input 
                  xl:w-[293px] xl:h-7 xl:text-xl xl:leading-[1.2]"
                  type="text"
                  placeholder="John Smith"
                />

                {errors.fullName && (
                  <span className="error-message-contacts">
                    <SvgRedCross style={{ height: '10px' }} aria-hidden />
                    Incorrect name
                  </span>
                )}
              </div>
            </label>

            {/* E-MAIL */}
            <label
              className={`flex flex-col ${
                errors.email ? 'text-error-input' : ''
              }`}
            >
              <span className="font-extralight text-xs leading-[2] tracking-[2.4px]">
                E-mail
              </span>
              <div className="relative flex flex-col">
                <div className="bg-input">
                  <input
                    {...register('email', {
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    })}
                    className="w-full input-autofill flex items-center pl-2 pr-2 text-[13px] outline-none leading-[1.85] bg-transparent 
                    xl:w-[293px] xl:h-7 xl:text-xl xl:leading-[1.2]"
                    type="text"
                    placeholder="johnsmith@email.com"
                  />
                </div>

                {errors.email && (
                  <span className="error-message-contacts">
                    <SvgRedCross style={{ height: '10px' }} aria-hidden />
                    Incorrect E-mail
                  </span>
                )}
              </div>
            </label>
          </div>

          <div className="w-full flex flex-col">
            {/* MESSAGE */}
            <label
              className={`flex flex-col ${
                errors.message ? 'text-error-input' : ''
              } mb-[16px] xl:mb-6`}
            >
              <span className="font-extralight text-xs leading-[2] tracking-[2.4px]">
                Message
              </span>
              <div className="relative flex flex-col">
                <textarea
                  {...register('message', { required: true, minLength: 5 })}
                  className="flex items-center h-[215px] pl-2 pr-2 text-[13px] outline-none leading-[1.85] bg-input resize-none xl:text-xl xl:h-[174px] xl:leading-[1.2]"
                  rows={8}
                />

                {errors.message && (
                  <span className="absolute right-0 top-full flex items-center gap-[6px] font-extralight text-xs leading-[2] tracking-[2.4px]">
                    <SvgRedCross style={{ height: '10px' }} aria-hidden />
                    Incorrect message
                  </span>
                )}
              </div>
            </label>

            <button
              className="w-[82px] ml-auto font-medium text-3xl leading-[1.21] uppercase xl:text-[32px]"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      )}
    </>
  );
};
