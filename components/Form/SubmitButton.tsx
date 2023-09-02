import React from 'react';

interface Props {
  extraStyles?: string | undefined;
}

export const SubmitButton: React.FC<Props> = ({ extraStyles }) => {
  return (
    <button
      className={`w-[82px] ml-auto font-medium text-3xl leading-[1.21] uppercase xl:text-[32px] hover:opacity-50 focus:opacity-50 transition ease-out duration-300 ${extraStyles}`}
      type="submit"
    >
      Send
    </button>
  );
};
