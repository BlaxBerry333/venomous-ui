import React from "react";
/**
 * FormControl context value
 */
export interface FormControlContextValue {
    /**
     * ID for helper/error text, used for aria-describedby
     */
    helperTextId?: string;
    /**
     * Whether the form control has an error
     */
    error?: boolean;
}
/**
 * FormControl context
 * Provides accessibility attributes to child form fields
 */
export declare const FormControlContext: React.Context<FormControlContextValue | null>;
/**
 * Hook to access FormControl context
 * Returns null when used outside of FormControl
 */
export declare const useFormControlContext: () => FormControlContextValue | null;
//# sourceMappingURL=FormControlContext.d.ts.map