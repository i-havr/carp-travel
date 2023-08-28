import React from 'react';

import { InputProps } from './';
import SvgRedCross from '@/public/assets/icons/red-cross.svg';

export const CareerFormMessage: React.FC<InputProps> = ({
  register,
  errors,
}) => {
  return (
    <label
      className={`flex flex-col ${
        errors.message ? 'text-error-input' : ''
      } md:mb-[9px]`}
    >
      <span className="font-extralight text-xs leading-[2] tracking-[2.4px]">
        Message
      </span>

      <div className="relative flex flex-col">
        <textarea
          {...register!('message', { required: true, minLength: 5 })}
          className="flex items-center h-[196px] pl-2 pr-2 text-[13px] resize-none outline-without leading-[1.85] bg-input
          md:h-[215px] xl:text-xl xl:h-[232px]"
          rows={8}
        />

        {errors.message && (
          <span
            className="absolute right-0 top-full flex items-center gap-[6px] font-extralight text-xs leading-[2] tracking-[2.4px]
          md:top-[98%]"
          >
            <SvgRedCross className="h-[10px]" aria-hidden />
            Incorrect message
          </span>
        )}
      </div>
    </label>
  );
};
