import React from 'react';

import { Controller, Control } from 'react-hook-form';
import { Inputs, InputProps } from './';
import { formatPhone } from '@/helpers';
import SvgRedCross from '@/public/assets/icons/red-cross.svg';

export interface InputPhoneProps extends InputProps {
  formattedPhone: string | undefined;
  control: Control<Inputs, any>;
  setFormattedPhone: (formattedValue: string | undefined) => void;
}

export const CareerFormPhone: React.FC<InputPhoneProps> = ({
  errors,
  formattedPhone,
  control,
  setFormattedPhone,
}) => {
  const handlePhoneChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;

    const formattedValue = formatPhone(value);

    setFormattedPhone(formattedValue);
  };

  return (
    <label
      className={`flex flex-col ${errors.phone ? 'text-error-input' : ''}`}
    >
      <span className="font-extralight text-xs leading-[2] tracking-[2.4px]">
        Phone
      </span>
      <div className="relative flex flex-col">
        <Controller
          name="phone"
          defaultValue=""
          shouldUnregister
          rules={{
            onChange: handlePhoneChange,
            required: true,
            pattern: /^\(\d{3}\) \d{2} \d{2} \d{3}$/,
          }}
          control={control}
          render={({ field }) => (
            <input
              {...field}
              className="flex items-center pl-10 pr-2 text-[13px] outline-none leading-[1.85] bg-input xl:pl-14 xl:text-xl"
              type="text"
              value={formattedPhone}
              placeholder="(097) 12 34 567"
            />
          )}
        />

        <span className="absolute left-2 text-[13px] top-1/2 -translate-y-1/2 xl:text-xl">
          {'+ 38'}
        </span>
        {errors.phone && (
          <span className="error-message">
            <SvgRedCross style={{ height: '10px' }} aria-hidden />
            Incorrect phone
          </span>
        )}
      </div>
    </label>
  );
};
