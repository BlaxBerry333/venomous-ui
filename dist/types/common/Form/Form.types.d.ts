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
    inputRef?: React.Ref<any>;
};
export type CheckboxProps = {
    value?: boolean;
    onChange: (value: boolean) => void;
    isError?: CommonFormFieldProps['isError'];
    isDisabled?: CommonFormFieldProps['isDisabled'];
    label?: LabelProps['label'];
    labelDirection?: 'start' | 'end';
    tooltip?: LabelProps['tooltip'];
    inputRef?: React.Ref<any>;
};
export type RadoisOptionType = {
    value: string | number;
    label: string;
    isDisabled?: boolean;
};
export type RadiosProps = {
    value?: RadoisOptionType['value'];
    onChange: (radiosOption: RadoisOptionType) => void;
    isError?: CommonFormFieldProps['isError'];
    isDisabled?: CommonFormFieldProps['isDisabled'];
    label?: LabelProps['label'];
    tooltip?: LabelProps['tooltip'];
    name: string;
    options: Array<RadoisOptionType>;
    optionLabelDirection?: 'start' | 'end';
    inputRef?: React.Ref<any>;
};
export type InputProps = Omit<MuiOutlinedInputProp, 'value' | 'onChange'> & CommonFormFieldProps & {
    value?: string;
    onChange: (value: string) => void;
    label?: LabelProps['label'];
    tooltip?: LabelProps['tooltip'];
    isRequired?: LabelProps['isRequired'];
};
export type NumberProps = Omit<InputProps, 'value' | 'onChange'> & {
    value?: number;
    onChange: (value: number) => void;
    max?: number;
    min?: number;
    step?: number;
    inputRef?: React.Ref<any>;
};
export type LabelsComponentType = NamedExoticComponent<LabelsProps>;
export type LabelComponentType = NamedExoticComponent<LabelProps>;
export type SwitchComponentType = NamedExoticComponent<SwitchProps>;
export type CheckboxComponentType = NamedExoticComponent<CheckboxProps>;
export type RadiosComponentType = NamedExoticComponent<RadiosProps>;
export type InputComponentType = NamedExoticComponent<InputProps>;
export type PasswordComponentType = NamedExoticComponent<InputProps>;
export type NumberComponentType = NamedExoticComponent<NumberProps>;
export type OtpInputComponentType = NamedExoticComponent<InputProps>;
export {};
