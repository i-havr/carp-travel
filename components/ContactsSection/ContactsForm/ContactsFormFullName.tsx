import React from 'react';

import { InputProps } from './ContactsForm';
import SvgRedCross from '@/public/assets/icons/red-cross.svg';

export const ContactsFormFullName: React.FC<InputProps> = ({
  register,
  errors,
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

      {errors.fullName && (
        <span className="absolute right-0 top-full flex items-center gap-[6px] font-extralight text-xs leading-[2] tracking-[2.4px]">
          <SvgRedCross className="h-[10px]" aria-hidden />
          Incorrect name
        </span>
      )}

      <div className="relative">
        <input
          {...register!('fullName', {
            required: true,
            pattern: /^[a-zA-Z\s'-]+$/,
            minLength: 3,
          })}
          className="w-full flex items-center pl-2 pr-2 text-[13px] outline-none leading-[1.85] bg-input md:w-[221px] xl:w-[293px] xl:h-7 xl:text-xl xl:leading-[1.2]"
          type="text"
          placeholder="John Smith"
        />
      </div>
    </label>
  );
};
