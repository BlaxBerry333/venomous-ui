import type { TOrientation, TTabsBaseProps, TTabsListBaseProps, TTabsPanelBaseProps, TTabsTabBaseProps, TTabsUnmountStrategy, TTabsVariant } from "../../../core/types";
import type { InjectionKey, Ref } from "vue";
/**
 * Props for Tabs root component
 */
export interface TTabsProps extends TTabsBaseProps {
    /** Additional CSS class name */
    className?: string;
}
/**
 * Props for Tabs.List component
 */
export type TTabsListProps = TTabsListBaseProps;
/**
 * Props for Tabs.Tab component
 */
export type TTabsTabProps = TTabsTabBaseProps;
/**
 * Props for Tabs.Panel component
 */
export type TTabsPanelProps = TTabsPanelBaseProps;
/**
 * Context value shared between Tabs components via provide/inject
 */
export interface TTabsContextValue {
    /** Current active tab value */
    value: Ref<string>;
    /** Update active tab */
    onValueChange: (value: string) => void;
    /** Tabs orientation */
    orientation: Ref<TOrientation>;
    /** Visual variant */
    variant: Ref<TTabsVariant>;
    /** Panel unmount strategy */
    unmountStrategy: Ref<TTabsUnmountStrategy>;
    /** Register a tab for keyboard navigation */
    registerTab: (value: string, disabled: boolean) => void;
    /** Unregister a tab */
    unregisterTab: (value: string) => void;
    /** Get all registered tabs for keyboard navigation */
    getTabs: () => Array<{
        value: string;
        disabled: boolean;
    }>;
}
/**
 * Injection key for Tabs context
 */
export declare const TABS_INJECTION_KEY: InjectionKey<TTabsContextValue>;
//# sourceMappingURL=Tabs.types.d.ts.map