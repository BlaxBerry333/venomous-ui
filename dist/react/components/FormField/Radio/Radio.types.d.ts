import type { CSSProperties, InputHTMLAttributes, ReactNode } from "react";
import type { ITheme } from "../../../../core/theme";
import { FormFieldRadioSize } from "../../../../core/types";
export type FormFieldRadioElement = HTMLInputElement;
export interface RadioOption {
    /** Option value */
    value: string | number;
    /** Option label */
    label: ReactNode;
    /** Whether the option is disabled */
    disabled?: boolean;
}
export interface FormFieldRadioProps extends Omit<InputHTMLAttributes<FormFieldRadioElement>, "size" | "style" | "type" | "onChange"> {
    /** Radio options */
    options: RadioOption[];
    /** Current selected value (controlled) */
    value?: string | number;
    /** Default selected value (uncontrolled) */
    defaultValue?: string | number;
    /** Radio size */
    size?: FormFieldRadioSize;
    /** Whether to display options in a vertical column layout (default: true) */
    column?: boolean;
    /** Whether the radio group has an error state */
    error?: boolean;
    /** Callback when value changes */
    onChange?: (value: string | number) => void;
    /** Custom class name for the group wrapper */
    className?: string;
    /** Custom styles for the group wrapper, supports object or theme callback function */
    style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
//# sourceMappingURL=Radio.types.d.ts.map