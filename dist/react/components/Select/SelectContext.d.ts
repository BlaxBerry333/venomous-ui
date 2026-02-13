export interface TSelectContext {
    /** Currently selected value */
    value?: string | number;
    /** Called when an option is selected */
    onSelect: (value: string | number) => void;
    /** Currently highlighted index (for keyboard navigation) */
    highlightedValue?: string | number;
    /** Called when an option is hovered */
    onHighlight: (value: string | number) => void;
    /** Icon to show for selected option */
    selectedIcon?: React.ReactNode;
}
export declare const SelectContext: import("react").Context<TSelectContext | null>;
export declare function useSelectContext(): TSelectContext;
//# sourceMappingURL=SelectContext.d.ts.map