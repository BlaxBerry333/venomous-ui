import type { ComponentProps, CSSProperties } from 'react';
import type { VirtuosoGridProps } from 'react-virtuoso';
type GridColsType = {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
export type GridProps<T = unknown> = {
    width?: string | number;
    height?: string | number;
    items: T[];
    renderGridItem: (item: T, index: number) => React.ReactNode;
    gridStyle?: CSSProperties;
    gridItemStyle?: CSSProperties;
    cols?: Partial<GridColsType>;
};
export type VirtuosoGridComponentsType = VirtuosoGridProps<ComponentProps<'div'> & {
    style?: CSSProperties;
    children?: React.ReactNode;
}>['components'];
export declare const DEFAULT_COLS: GridColsType;
export declare const DEFAULT_ITEMS: never[];
export {};
