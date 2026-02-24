import type { ReactNode } from "react";
import type { TToasterBaseProps, TToastType } from "../../../core/types";
/** Icon configuration for toast types and close button */
export type TToastIcons = Partial<Record<TToastType, ReactNode>> & {
    /** Close button icon */
    close?: ReactNode;
};
export interface TToasterProps extends TToasterBaseProps {
    /** Custom icons for each toast type and close button. No icons shown by default. */
    icons?: TToastIcons;
}
//# sourceMappingURL=Toast.types.d.ts.map