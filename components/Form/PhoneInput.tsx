import React from 'react';

import { Controller, Control } from 'react-hook-form';
import { Inputs, InputProps } from '@/interfaces';
import { formatPhone } from '@/helpers';
import SvgRedCross from '@/public/assets/icons/red-cross.svg';

export interface InputPhoneProps extends InputProps {
  formattedPhone: string | undefined;
  control: Control<Inputs, any>;
  savedData?: string | undefined;
  setFormattedPhone: (formattedValue: string | undefined) => void;
  handleInputChange: (field: string, value: string) => void;
}

export const PhoneInput: React.FC<InputPhoneProps> = ({
  errors,
  formattedPhone,
  control,
  savedData,
  setFormattedPhone,
  handleInputChange,
}) => {
  return (
    <label
      className={`relative flex flex-col ${
        errors.phone ? 'text-error-input' : ''
      }`}
    >
      <span className="font-extralight text-xs leading-[2] tracking-[2.4px]">
        Phone
      </span>

      <Controller
        name="phone"
        defaultValue={savedData}
        shouldUnregister
        rules={{
          required: true,
          pattern: /^\(\d{3}\) \d{2} \d{2} \d{3}$/,
        }}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            onChange={e => {
              field.onChange(e);
              setFormattedPhone(formatPhone(e.target.value));
              handleInputChange('phone', e.target.value);
            }}
            className="flex items-center pl-10 pr-2 text-[13px] outline-without leading-[1.85] bg-input xl:pl-14 xl:text-xl"
            type="text"
            value={formattedPhone}
            placeholder="(097) 12 34 567"
          />
        )}
      />

      {errors.phone && (
        <span className="absolute right-0 top-full flex justify-center items-center gap-[6px] font-extralight text-xs leading-[2] tracking-[2.4px]">
          <SvgRedCross className="h-[10px]" aria-hidden />
          Incorrect phone
        </span>
      )}

      <span className="absolute top-1/2 translate-y-[2px] left-2 text-[13px] xl:text-xl xl:-translate-y-[2px]">
        {'+ 38'}
      </span>
    </label>
  );
};
