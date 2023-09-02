import React from 'react';

import { InputProps } from '@/interfaces';
import SvgRedCross from '@/public/assets/icons/red-cross.svg';

export const AgreementCheckbox: React.FC<InputProps> = ({
  register,
  errors,
}) => {
  return (
    <label className="relative flex items-start pl-[30px] font-extralight text-xs leading-[1.83] cursor-pointer xl:mt-3">
      <input
        {...register!('agree', { required: true })}
        className="hidden-checkbox outline-without"
        type="checkbox"
      />
      <span className="custom-checkbox flex justify-center items-center p-[3px] bg-black">
        <span className="inner-checkbox-marker"></span>
      </span>
      {errors.agree && (
        <span
          className={`absolute right-0 top-full flex items-center gap-[6px] font-extralight text-xs tracking-[2.4px] ${
            errors.agree ? 'text-error-input' : ''
          } cursor-default`}
        >
          <SvgRedCross className="h-[10px]" aria-hidden />
          Must be accepted
        </span>
      )}
      I confirm my consent to the processing of personal data.
    </label>
  );
};
