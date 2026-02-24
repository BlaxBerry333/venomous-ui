import type { ReactNode } from "react";
import type { TRadioGroupBaseProps, TSelectOption } from "../../../core/types";
export interface TRadioGroupProps extends TRadioGroupBaseProps {
    /** Icon to display when radio is checked (enables custom mode) */
    checkedIcon?: ReactNode;
    /** Icon to display when radio is unchecked (enables custom mode) */
    uncheckedIcon?: ReactNode;
    /** Called when value changes */
    onChange?: (value: string | number, option: TSelectOption) => void;
}
//# sourceMappingURL=RadioGroup.types.d.ts.map