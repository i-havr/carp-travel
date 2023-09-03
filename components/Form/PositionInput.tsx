import React from 'react';

import { Controller, Control } from 'react-hook-form';
import { Inputs, InputProps } from '@/interfaces';
import SvgRedCross from '@/public/assets/icons/red-cross.svg';

interface Props {
  control: Control<Inputs, any>;
  savedData?: string | undefined;
  handleInputChange: (field: string, value: string) => void;
}

export const PositionInput: React.FC<InputProps & Props> = ({
  errors,
  control,
  savedData,
  handleInputChange,
}) => {
  return (
    <label
      className={`relative flex flex-col ${
        errors.position ? 'text-error-input' : ''
      }`}
    >
      <span className="font-extralight text-xs leading-[2] tracking-[2.4px]">
        Position
      </span>

      <Controller
        name="position"
        defaultValue={savedData}
        shouldUnregister
        rules={{
          required: true,
          pattern: /^[a-zA-Z\s,'-]+$/,
          minLength: 3,
        }}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            onChange={e => {
              field.onChange(e);
              handleInputChange('position', e.target.value);
            }}
            className="flex items-center px-2 text-[13px] outline-without leading-[1.85] bg-input xl:text-xl"
            type="text"
            placeholder="Movie maker"
          />
        )}
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
