import React from 'react';

import { InputProps } from '@/interfaces';
import SvgRedCross from '@/public/assets/icons/red-cross.svg';

export const PositionInput: React.FC<InputProps> = ({ register, errors }) => {
  return (
    <label
      className={`relative flex flex-col ${
        errors.position ? 'text-error-input' : ''
      }`}
    >
      <span className="font-extralight text-xs leading-[2] tracking-[2.4px]">
        Position
      </span>

      <input
        {...register!('position', {
          required: true,
          pattern: /^[a-zA-Z\s,'-]+$/,
          minLength: 3,
        })}
        className="flex items-center px-2 text-[13px] outline-without leading-[1.85] bg-input xl:text-xl"
        type="text"
        placeholder="Movie maker"
      />

      {errors.position && (
        <span className="absolute right-0 top-full flex justify-center items-center gap-[6px] font-extralight text-xs leading-[2] tracking-[2.4px]">
          <SvgRedCross className="h-[10px]" aria-hidden />
          Incorrect position
        </span>
      )}
    </label>
  );
};
