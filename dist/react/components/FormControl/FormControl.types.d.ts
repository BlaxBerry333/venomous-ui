import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import type { ITheme } from "../../../core/theme";
export type FormControlElement = HTMLDivElement;
export type FormControlSize = "small" | "medium" | "large";
export interface FormControlProps extends Omit<HTMLAttributes<FormControlElement>, "style"> {
    /** Form field element (Input, Select, Checkbox, etc.) */
    children: ReactNode;
    /** Label text */
    label?: ReactNode;
    /** Whether to display horizontally (label on the left) */
    row?: boolean;
    /** Label width when row=true */
    labelWidth?: string | number;
    /** Label text alignment when row=true */
    labelAlign?: "left" | "right";
    /** Tooltip content to show next to label */
    labelTooltip?: ReactNode;
    /** Whether the field is required */
    required?: boolean;
    /** Helper text shown below the field */
    helperText?: ReactNode;
    /** Whether the field has an error */
    error?: boolean;
    /** Error message (overrides helperText when error=true) */
    errorMessage?: ReactNode;
    /** Size of the form control */
    size?: FormControlSize;
    /** Custom class name */
    className?: string;
    /** Custom styles, supports object or theme callback function */
    style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
//# sourceMappingURL=FormControl.types.d.ts.map