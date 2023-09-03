'use client';

import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Inputs } from '@/interfaces';

import {
  FullNameInput,
  EmailInput,
  PositionInput,
  PhoneInput,
  AgreementCheckbox,
  MessageInput,
  SubmitButton,
} from '@/components/Form';

import toast from 'react-hot-toast';
import { useWindowWidth } from '@/hooks';

export const CareerForm: React.FC = () => {
  const [formData, setFormData] = useState<Inputs | any>();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [formattedPhone, setFormattedPhone] = useState<string | undefined>('');

  const {
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    const storedData = sessionStorage.getItem('careerForm');

    if (storedData) {
      const savedData = JSON.parse(storedData);
      setIsChecked(savedData.agree);
      setFormattedPhone(savedData.phone);
      setFormData(savedData);
    }
  }, []);

  useEffect(() => {
    if (formData) {
      for (const field in formData) {
        setValue(field as keyof Inputs, formData[field]);
      }
    }
  }, [formData, setValue]);

  const { isScreenMobile } = useWindowWidth();

  const handleInputChange = (field: string, value: string | boolean) => {
    const storedData = sessionStorage.getItem('careerForm');

    if (storedData) {
      const updatedData = { ...JSON.parse(storedData), [field]: value };
      sessionStorage.setItem('careerForm', JSON.stringify(updatedData));
    } else {
      sessionStorage.setItem('careerForm', JSON.stringify({ [field]: value }));
    }
  };

  const onSubmit: SubmitHandler<Inputs> = data => {
    toast.success('You have just sent data', {
      duration: 4000,
      className: 'font-medium',
    });

    console.log('You have just sent data => ', data);

    setFormattedPhone('');
    setIsChecked(false);
    setFormData(undefined);
    reset();

    sessionStorage.removeItem('careerForm');
  };

  return (
    <>
      {isScreenMobile ? (
        <form
          className="flex flex-col gap-4"
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FullNameInput
            errors={errors}
            control={control}
            handleInputChange={handleInputChange}
            savedData={formData ? formData.fullName : ''}
          />
          <EmailInput
            errors={errors}
            control={control}
            savedData={formData ? formData.email : ''}
            handleInputChange={handleInputChange}
          />
          <PositionInput
            errors={errors}
            control={control}
            handleInputChange={handleInputChange}
            savedData={formData ? formData.position : ''}
          />
          <PhoneInput
            errors={errors}
            formattedPhone={formattedPhone}
            setFormattedPhone={setFormattedPhone}
            control={control}
            handleInputChange={handleInputChange}
            savedData={formData ? formData.phone : ''}
          />
          <MessageInput
            errors={errors}
            control={control}
            savedData={formData ? formData.message : ''}
            handleInputChange={handleInputChange}
          />
          <AgreementCheckbox
            errors={errors}
            control={control}
            handleInputChange={handleInputChange}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
          />
          <SubmitButton />
        </form>
      ) : (
        <form
          className="w-full flex flex-row gap-6"
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-[222px] flex flex-col gap-4 xl:w-[290px] xl:gap:6">
            <FullNameInput
              errors={errors}
              control={control}
              handleInputChange={handleInputChange}
              savedData={formData ? formData.fullName : ''}
            />
            <EmailInput
              errors={errors}
              control={control}
              savedData={formData ? formData.email : ''}
              handleInputChange={handleInputChange}
            />
            <PositionInput
              errors={errors}
              control={control}
              handleInputChange={handleInputChange}
              savedData={formData ? formData.position : ''}
            />
            <PhoneInput
              errors={errors}
              formattedPhone={formattedPhone}
              setFormattedPhone={setFormattedPhone}
              control={control}
              handleInputChange={handleInputChange}
              savedData={formData ? formData.phone : ''}
            />
            <AgreementCheckbox
              errors={errors}
              control={control}
              handleInputChange={handleInputChange}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
            />
          </div>
          <div className="w-full flex flex-col">
            <MessageInput
              errors={errors}
              labelExtraStyles="md:mb-[9px]"
              errorExtraStyles="md:top-[98%]"
              inputExtraStyles="xl:h-[232px]"
              control={control}
              savedData={formData ? formData.message : ''}
              handleInputChange={handleInputChange}
            />
            <SubmitButton />
          </div>
        </form>
      )}
    </>
  );
};
