import React from 'react';

import { InputProps } from './ContactsForm';
import SvgRedCross from '@/public/assets/icons/red-cross.svg';

export const ContactsFormMessage: React.FC<InputProps> = ({
  register,
  errors,
}) => {
  return (
    <label
      className={`flex flex-col ${
        errors.message ? 'text-error-input' : ''
      } md:mb-[16px] xl:mb-6`}
    >
      <span className="font-extralight text-xs leading-[2] tracking-[2.4px]">
        Message
      </span>
      <div className="relative flex flex-col">
        <textarea
          {...register!('message', { required: true, minLength: 5 })}
          className="flex items-center h-[196px] pl-2 pr-2 text-[13px] resize-none outline-none leading-[1.85] bg-input md:h-[215px] xl:text-xl xl:h-[174px] xl:leading-[1.2]"
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
  );
};
