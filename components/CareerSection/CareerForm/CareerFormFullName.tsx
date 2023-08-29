import React from 'react';

import { InputProps } from './';
import SvgRedCross from '@/public/assets/icons/red-cross.svg';

export const CareerFormFullName: React.FC<InputProps> = ({
  register,
  errors,
}) => {
  return (
    <label
      className={`flex flex-col ${errors.fullName ? 'text-error-input' : ''}`}
    >
      <span className="font-extralight text-xs leading-[2] tracking-[2.4px]">
        Full name
      </span>

      <div className="relative flex flex-col">
        <input
          {...register!('fullName', {
            required: true,
            pattern: /^[a-zA-Z\s'-]+$/,
            minLength: 3,
          })}
          className="flex items-center pl-2 pr-2 text-[13px] outline-without leading-[1.85] bg-input xl:text-xl"
          type="text"
          placeholder="John Smith"
        />

        {errors.fullName && (
          <span className="absolute right-0 top-full flex justify-center items-center gap-[6px] font-extralight text-xs leading-[2] tracking-[2.4px]">
            <SvgRedCross className="h-[10px]" aria-hidden />
            Incorrect name
          </span>
        )}
      </div>
    </label>
  );
};
