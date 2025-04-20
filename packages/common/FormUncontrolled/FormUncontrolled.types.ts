import type { NamedExoticComponent, PropsWithChildren } from 'react';
import type {
  FieldValues as RHFFieldValues,
  UseFormReturn as RHFUseFormReturn,
} from 'react-hook-form';
import type { CheckboxProps, InputProps, RadiosProps, SwitchProps } from '../Form';

export type FormUncontrolledProps<T extends RHFFieldValues> = PropsWithChildren<{
  formInstance: RHFUseFormReturn<T>;
  onSubmit: (formValue: T) => void;
  width?: string | number;
}>;

export type FormUncontrolledActionProps = {
  submitButtonText?: string;
  cancelButtonText?: string;
  isSubmitting?: boolean;
};

export type SwitchUncontrolledComponentType = NamedExoticComponent<
  Partial<SwitchProps> & { name: string }
>;
export type CheckboxUncontrolledComponentType = NamedExoticComponent<
  Partial<CheckboxProps> & { name: string }
>;
export type RadiosUncontrolledComponentType = NamedExoticComponent<
  Partial<RadiosProps> & { name: string }
>;
export type InputUncontrolledComponentType = NamedExoticComponent<
  Partial<InputProps> & { name: string }
>;
export type PasswordUncontrolledComponentType = NamedExoticComponent<
  Partial<InputProps> & { name: string }
>;
export type OtpInputUncontrolledComponentType = NamedExoticComponent<
  Partial<InputProps> & { name: string }
>;
