import type { CSSProperties, InputHTMLAttributes } from "react";
import type { ITheme } from "../../../../core/theme";
import { FormFieldSwitchSize } from "../../../../core/types";
export type FormFieldSwitchElement = HTMLInputElement;
export interface FormFieldSwitchProps extends Omit<InputHTMLAttributes<FormFieldSwitchElement>, "size" | "style" | "type"> {
    /** Switch size */
    size?: FormFieldSwitchSize;
    /** Whether the switch has an error state */
    error?: boolean;
    /** Custom class name for the wrapper */
    className?: string;
    /** Custom styles for the wrapper, supports object or theme callback function */
    style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
//# sourceMappingURL=Switch.types.d.ts.map