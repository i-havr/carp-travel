import React from 'react';

import { Controller, Control } from 'react-hook-form';
import { Inputs, InputProps } from '@/interfaces';
import SvgRedCross from '@/public/assets/icons/red-cross.svg';

interface Props {
  extraStyles?: string | undefined;
  control: Control<Inputs, any>;
  savedData?: string | undefined;
  handleInputChange: (field: string, value: string) => void;
}

export const EmailInput: React.FC<InputProps & Props> = ({
  errors,
  extraStyles,
  control,
  savedData,
  handleInputChange,
}) => {
  return (
    <label
      className={`relative flex flex-col ${
        errors.email ? 'text-error-input' : ''
      }`}
    >
      <span className="font-extralight text-xs leading-[2] tracking-[2.4px]">
        E-mail
      </span>

      <Controller
        name="email"
        defaultValue={savedData}
        shouldUnregister
        rules={{
          required: true,
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        }}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            onChange={e => {
              field.onChange(e);
              handleInputChange('email', e.target.value);
            }}
            className={`bg-input input-autofill flex items-center px-2 text-[13px] outline-without leading-[1.85] xl:text-xl ${extraStyles}`}
            type="text"
            placeholder="johnsmith@email.com"
          />
        )}
      />

      {errors.email && (
        <span className="absolute right-0 top-full flex items-center gap-[6px] font-extralight text-xs text-error-input leading-[2] tracking-[2.4px]">
          <SvgRedCross className="h-[10px]" aria-hidden />
          Incorrect E-mail
        </span>
      )}
    </label>
  );
};
