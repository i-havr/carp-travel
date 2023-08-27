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
      <div className="relative flex flex-col">
        <div className="bg-input">
          <input
            {...register!('email', {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            })}
            className="w-full input-autofill flex items-center pl-2 pr-2 text-[13px] outline-none leading-[1.85] bg-transparent xl:w-[293px] xl:h-7 xl:text-xl xl:leading-[1.2]"
            type="text"
            placeholder="johnsmith@email.com"
          />
        </div>

        {errors.email && (
          <span className="error-message-contacts">
            <SvgRedCross style={{ height: '10px' }} aria-hidden />
            Incorrect E-mail
          </span>
        )}
      </div>
    </label>
  );
};
