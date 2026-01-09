import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import type { ITheme } from "../../../core/theme";
import type { TabsOrientation, TabsSize, TabsVariant } from "../../../core/types";
/**
 * Tabs root props
 */
export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "style"> {
    /** Current active tab value (controlled) */
    value?: string;
    /** Default active tab value (uncontrolled) */
    defaultValue?: string;
    /** Callback when tab changes */
    onChange?: (value: string) => void;
    /** Visual variant */
    variant?: TabsVariant;
    /** Size of tabs */
    size?: TabsSize;
    /** Orientation */
    orientation?: TabsOrientation;
    /** Whether tabs should take full width */
    fullWidth?: boolean;
    /** Disable all tabs */
    disabled?: boolean;
    /** Children (Tabs.List and Tabs.Panel) */
    children?: ReactNode;
    /** Custom class name */
    className?: string;
    /** Custom styles */
    style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
/**
 * Tabs.List props
 */
export interface TabsListProps extends Omit<HTMLAttributes<HTMLDivElement>, "style"> {
    /** Tab buttons */
    children: ReactNode;
    /** Custom class name */
    className?: string;
    /** Custom styles */
    style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
/**
 * Tabs.Tab props
 */
export interface TabsTabProps extends Omit<HTMLAttributes<HTMLButtonElement>, "style"> {
    /** Unique identifier for this tab */
    value: string;
    /** Whether this tab is disabled */
    disabled?: boolean;
    /** Icon displayed before label */
    StartIcon?: ReactNode;
    /** Icon/element displayed after label */
    EndIcon?: ReactNode;
    /** Tab label content */
    children: ReactNode;
    /** Custom class name */
    className?: string;
    /** Custom styles */
    style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
/**
 * Tabs.Panel props
 */
export interface TabsPanelProps extends Omit<HTMLAttributes<HTMLDivElement>, "style"> {
    /** Corresponding tab value */
    value: string;
    /** Keep panel mounted when inactive (for preserving state) */
    keepMounted?: boolean;
    /** Panel content */
    children: ReactNode;
    /** Custom class name */
    className?: string;
    /** Custom styles */
    style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
//# sourceMappingURL=Tabs.types.d.ts.map