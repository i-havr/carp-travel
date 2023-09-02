import React from 'react';

import { InputProps } from '@/interfaces';
import SvgRedCross from '@/public/assets/icons/red-cross.svg';

interface Props {
  extraStyles?: string | undefined;
}

export const FullNameInput: React.FC<InputProps & Props> = ({
  register,
  errors,
  extraStyles,
}) => {
  return (
    <label
      className={`relative flex flex-col ${
        errors.fullName ? 'text-error-input' : ''
      }`}
    >
      <span className="font-extralight text-xs leading-[2] tracking-[2.4px]">
        Full name
      </span>

      <input
        {...register!('fullName', {
          required: true,
          pattern: /^[a-zA-Z\s'-]+$/,
          minLength: 3,
        })}
        className={`w-full flex items-center px-2 text-[13px] outline-without leading-[1.85] bg-input xl:text-xl ${extraStyles}`}
        type="text"
        placeholder="John Smith"
      />

      {errors.fullName && (
        <span className="absolute right-0 top-full flex items-center gap-[6px] font-extralight text-xs leading-[2] tracking-[2.4px]">
          <SvgRedCross className="h-[10px]" aria-hidden />
          Incorrect name
        </span>
      )}
    </label>
  );
};
