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

export const FullNameInput: React.FC<InputProps & Props> = ({
  errors,
  extraStyles,
  control,
  savedData,
  handleInputChange,
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

      <Controller
        name="fullName"
        defaultValue={savedData}
        shouldUnregister
        rules={{
          required: true,
          pattern: /^[a-zA-Z\s'-]+$/,
          minLength: 3,
        }}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            onChange={e => {
              field.onChange(e);
              handleInputChange('fullName', e.target.value);
            }}
            className={`w-full flex items-center px-2 text-[13px] outline-without leading-[1.85] bg-input xl:text-xl ${extraStyles}`}
            type="text"
            placeholder="John Smith"
          />
        )}
      />

      {errors.fullName && (
        <span className="absolute right-0 top-full flex items-center gap-[6px] font-extralight text-xs leading-[2] tracking-[2.4px]">
          <SvgRedCross className="h-[10px]" aria-hidden />
          Incorrect name
        </span>
      )}
    </label>
  );
};
