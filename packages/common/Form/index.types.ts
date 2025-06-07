import type { OutlinedInputProps as MuiOutlinedInputProp } from '@mui/material/OutlinedInput';
import type { NamedExoticComponent } from 'react';

type CommonFormFieldProps = {
  isDisabled?: boolean;
  isError?: boolean;
  errorMessage?: string;
};

export type LabelProps = {
  label: string;
  tooltip?: string;
  elementId: undefined | string;
  isDisabled?: CommonFormFieldProps['isDisabled'];
  isError?: CommonFormFieldProps['isError'];
  isRequired?: boolean;
};

export type LabelsProps = Pick<LabelProps, 'isDisabled' | 'isError'> & {
  startLabel?: string;
  endLabel?: string;
  labelsDirection?: 'row' | 'column';
  renderElement: (id: string) => React.ReactNode;
};

export type SwitchProps = {
  value?: boolean;
  onChange: (checked: boolean) => void;
  isDisabled?: CommonFormFieldProps['isDisabled'];
  startLabel?: LabelsProps['startLabel'];
  endLabel?: LabelsProps['endLabel'];
  labelsDirection?: LabelsProps['labelsDirection'];
  inputRef?: React.Ref<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
};

export type CheckboxProps = {
  value?: boolean;
  onChange: (value: boolean) => void;
  isError?: CommonFormFieldProps['isError'];
  isDisabled?: CommonFormFieldProps['isDisabled'];
  label?: LabelProps['label'];
  labelDirection?: 'start' | 'end';
  tooltip?: LabelProps['tooltip'];
  inputRef?: React.Ref<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
};

export type OptionType = {
  value: string | number;
  label: string;
  isDisabled?: boolean;
  isSelected?: boolean;
};

export type RadiosOptionType = Pick<OptionType, 'value' | 'label' | 'isDisabled'>;

export type RadiosProps = {
  value?: RadiosOptionType['value'];
  onChange: (radiosOption: RadiosOptionType) => void;
  isError?: CommonFormFieldProps['isError'];
  isDisabled?: CommonFormFieldProps['isDisabled'];
  label?: LabelProps['label'];
  tooltip?: LabelProps['tooltip'];
  name: string;
  options: Array<RadiosOptionType>;
  optionLabelDirection?: 'start' | 'end';
  inputRef?: React.Ref<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
};

export type InputProps = Omit<MuiOutlinedInputProp, 'value' | 'onChange'> &
  CommonFormFieldProps & {
    value?: string;
    onChange: (
      value: string,
      e?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    label?: LabelProps['label'];
    tooltip?: LabelProps['tooltip'];
    isRequired?: LabelProps['isRequired'];
  };

export type NumberInputProps = Omit<InputProps, 'value' | 'onChange'> & {
  value?: number;
  onChange: (value: number) => void;
  max?: number;
  min?: number;
  step?: number;
  inputRef?: React.Ref<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
};

export type SelectProps = Omit<InputProps, 'value' | 'onChange'> & {
  options: Array<OptionType>;
  value?: OptionType['value'];
  onChange: (option: OptionType | null, e?: React.SyntheticEvent<Element, Event>) => void;
  inputRef?: React.Ref<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
  emptyOptionMessage?: string;
  hideOptionsWhenEmpty?: boolean;
  isLoadingOptions?: boolean;
  renderOption?: (option: OptionType) => React.ReactNode;
};

export type LabelsComponentType = NamedExoticComponent<LabelsProps>;
export type LabelComponentType = NamedExoticComponent<LabelProps>;
export type SwitchComponentType = NamedExoticComponent<SwitchProps>;
export type CheckboxComponentType = NamedExoticComponent<CheckboxProps>;
export type RadiosComponentType = NamedExoticComponent<RadiosProps>;
export type InputComponentType = NamedExoticComponent<InputProps>;
export type PasswordComponentType = NamedExoticComponent<InputProps>;
export type NumberInputComponentType = NamedExoticComponent<NumberInputProps>;
export type OtpInputComponentType = NamedExoticComponent<InputProps>;
export type SelectComponentType = NamedExoticComponent<SelectProps>;
