import type { CSSProperties, InputHTMLAttributes, ReactNode } from "react";
import type { ITheme } from "../../../../core/theme";
import { FormFieldTextSize, FormFieldTextVariant } from "../../../../core/types";
export type FormFieldTextElement = HTMLInputElement;
export interface FormFieldTextProps extends Omit<InputHTMLAttributes<FormFieldTextElement>, "size" | "style" | "prefix"> {
    /** Input variant style */
    variant?: FormFieldTextVariant;
    /** Input size */
    size?: FormFieldTextSize;
    /** Whether the input has an error state */
    error?: boolean;
    /** Whether the input takes the full width of its container */
    fullWidth?: boolean;
    /** Prefix element (e.g., icon) */
    prefix?: ReactNode;
    /** Suffix element (e.g., icon) */
    suffix?: ReactNode;
    /** Custom class name for the wrapper */
    className?: string;
    /** Custom styles for the wrapper, supports object or theme callback function */
    style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
//# sourceMappingURL=Text.types.d.ts.map