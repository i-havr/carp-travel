import React from 'react';

import { InputProps } from './ContactsForm';
import SvgRedCross from '@/public/assets/icons/red-cross.svg';

export const ContactsFormEmail: React.FC<InputProps> = ({
  register,
  errors,
}) => {
  return (
    <label
      className={`flex flex-col ${errors.email ? 'text-error-input' : ''}`}
    >
      <span className="font-extralight text-xs leading-[2] tracking-[2.4px]">
        E-mail
      </span>

      <div className="relative bg-input">
        <input
          {...register!('email', {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          })}
          className="w-full input-autofill flex items-center pl-2 pr-2 text-[13px] outline-without leading-[1.85] bg-transparent xl:w-[293px] xl:h-7 xl:text-xl xl:leading-[1.2]"
          type="text"
          placeholder="johnsmith@email.com"
        />

        {errors.email && (
          <span className="absolute right-0 top-full flex items-center gap-[6px] font-extralight text-xs text-error-input leading-[2] tracking-[2.4px]">
            <SvgRedCross className="h-[10px]" aria-hidden />
            Incorrect E-mail
          </span>
        )}
      </div>
    </label>
  );
};
