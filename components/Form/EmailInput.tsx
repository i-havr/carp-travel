import React from 'react';

import { InputProps } from '@/interfaces';
import SvgRedCross from '@/public/assets/icons/red-cross.svg';

interface Props {
  extraStyles?: string | undefined;
}

export const EmailInput: React.FC<InputProps & Props> = ({
  register,
  errors,
  extraStyles,
}) => {
  return (
    <label
      className={`relative flex flex-col ${
        errors.email ? 'text-error-input' : ''
      }`}
    >
      <span className="font-extralight text-xs leading-[2] tracking-[2.4px]">
        E-mail
      </span>

      <input
        {...register!('email', {
          required: true,
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        })}
        className={`bg-input input-autofill flex items-center px-2 text-[13px] outline-without leading-[1.85] xl:text-xl ${extraStyles}`}
        type="text"
        placeholder="johnsmith@email.com"
      />

      {errors.email && (
        <span className="absolute right-0 top-full flex items-center gap-[6px] font-extralight text-xs text-error-input leading-[2] tracking-[2.4px]">
          <SvgRedCross className="h-[10px]" aria-hidden />
          Incorrect E-mail
        </span>
      )}
    </label>
  );
};
