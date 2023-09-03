import React from 'react';

import { Controller, Control } from 'react-hook-form';
import { Inputs, InputProps } from '@/interfaces';
import SvgRedCross from '@/public/assets/icons/red-cross.svg';

interface Props {
  labelExtraStyles?: string | undefined;
  errorExtraStyles?: string | undefined;
  inputExtraStyles?: string | undefined;
  control: Control<Inputs, any>;
  savedData?: string | undefined;
  handleInputChange: (field: string, value: string) => void;
}

export const MessageInput: React.FC<InputProps & Props> = ({
  errors,
  labelExtraStyles,
  errorExtraStyles,
  inputExtraStyles,
  control,
  savedData,
  handleInputChange,
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

      <Controller
        name="message"
        defaultValue={savedData}
        shouldUnregister
        rules={{
          required: true,
          minLength: 5,
        }}
        control={control}
        render={({ field }) => (
          <textarea
            {...field}
            onChange={e => {
              field.onChange(e);
              handleInputChange('message', e.target.value);
            }}
            className={`flex items-center h-[196px] px-2 text-[13px] resize-none outline-without leading-[1.85] bg-input 
        md:h-[215px] xl:text-xl ${inputExtraStyles}`}
            rows={8}
          />
        )}
      />
    </label>
  );
};
