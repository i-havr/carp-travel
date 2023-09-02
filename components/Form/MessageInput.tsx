import React from 'react';

import { InputProps } from '@/interfaces';
import SvgRedCross from '@/public/assets/icons/red-cross.svg';

interface Props {
  labelExtraStyles?: string | undefined;
  errorExtraStyles?: string | undefined;
  inputExtraStyles?: string | undefined;
}

export const MessageInput: React.FC<InputProps & Props> = ({
  register,
  errors,
  labelExtraStyles,
  errorExtraStyles,
  inputExtraStyles,
}) => {
  return (
    <label
      className={`relative flex flex-col ${
        errors.message ? 'text-error-input' : ''
      } ${labelExtraStyles}`}
    >
      <span className="font-extralight text-xs leading-[2] tracking-[2.4px]">
        Message
      </span>

      {errors.message && (
        <span
          className={`absolute right-0 top-full flex items-center gap-[6px] font-extralight text-xs leading-[2] tracking-[2.4px] ${errorExtraStyles}`}
        >
          <SvgRedCross className="h-[10px]" aria-hidden />
          Incorrect message
        </span>
      )}

      <textarea
        {...register!('message', { required: true, minLength: 5 })}
        className={`flex items-center h-[196px] px-2 text-[13px] resize-none outline-without leading-[1.85] bg-input 
        md:h-[215px] xl:text-xl ${inputExtraStyles}`}
        rows={8}
      />
    </label>
  );
};
