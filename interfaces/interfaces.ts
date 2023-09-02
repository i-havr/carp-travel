import { FieldErrors, UseFormRegister } from 'react-hook-form';

export type Inputs = {
  fullName: string;
  email: string;
  position: string;
  phone: string;
  message: string;
  agree: boolean;
};

export interface InputProps {
  register?: UseFormRegister<Inputs> | undefined;
  errors: FieldErrors<Inputs>;
}
