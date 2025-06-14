import type { ButtonProps } from '../Button';
import type { PaperProps } from '../Paper';
export type CollapsedSidebarProps = {
    defaultIsCollapsed?: boolean;
    collapsedWidth?: number;
    width?: number;
    headerHeight?: number;
    renderHeader?: (params: {
        isCollapsed: boolean;
        toggleCollapsed: () => void;
    }) => React.ReactNode;
    renderContent?: (params: {
        isCollapsed: boolean;
        toggleCollapsed: () => void;
    }) => React.ReactNode;
    sx?: PaperProps['sx'];
    collapseButtonSx?: ButtonProps['sx'];
};
export type CollapseProps = React.PropsWithChildren<{
    defaultIsCollapsed?: boolean;
    renderTrigger: (params: {
        isCollapsed: boolean;
        toggleCollapsed: () => void;
    }) => React.ReactNode;
    style?: React.CSSProperties;
}>;
export type CollapseSidebarComponentType = React.NamedExoticComponent<CollapsedSidebarProps>;
export type CollapseComponentType = React.NamedExoticComponent<CollapseProps>;
