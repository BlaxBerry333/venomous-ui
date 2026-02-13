import type { TFormFieldProps } from "./FormField.types";
/**
 * FormField component for React
 *
 * A smart layout container that auto-injects id and aria props to form controls
 *
 * @example
 * ```tsx
 * <FormField label="Email" required error={errors.email}>
 *   <Input type="email" value={email} onChange={setEmail} />
 * </FormField>
 *
 * // Horizontal layout with control position
 * <FormField label="Remember me" orientation="horizontal" controlPosition="start">
 *   <Checkbox checked={remember} onChange={setRemember} />
 * </FormField>
 * ```
 */
export declare function FormField({ label, required, error, tooltip, tooltipIcon, size, orientation, controlPosition, className, children, }: TFormFieldProps): import("react/jsx-runtime").JSX.Element;
export declare namespace FormField {
    var displayName: "VenomousUI.FormField";
}
//# sourceMappingURL=FormField.d.ts.map