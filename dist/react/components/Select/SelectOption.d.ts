import type { ReactNode } from "react";
import type { TSelectOptionBaseProps } from "../../../core/types";
export interface TSelectOptionProps extends TSelectOptionBaseProps {
    /** Option content */
    children: ReactNode;
}
/**
 * Select.Option component for custom rendering mode
 *
 * Use this when you need custom option rendering (e.g., with virtual list)
 *
 * @example
 * ```tsx
 * <Select value={value} onChange={setValue}>
 *   <VirtualList items={options}>
 *     {(option) => (
 *       <Select.Option value={option.value} disabled={option.disabled}>
 *         {option.label}
 *       </Select.Option>
 *     )}
 *   </VirtualList>
 * </Select>
 * ```
 */
export declare function SelectOption({ value, disabled, className, children }: TSelectOptionProps): import("react/jsx-runtime").JSX.Element;
export declare namespace SelectOption {
    var displayName: string;
}
//# sourceMappingURL=SelectOption.d.ts.map