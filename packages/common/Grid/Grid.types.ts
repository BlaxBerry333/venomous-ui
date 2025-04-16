import type { ComponentProps, CSSProperties } from 'react';
import type { VirtuosoGridProps } from 'react-virtuoso';

type GridColsType = {
  xs: number; // < sm
  sm: number; // sm ~ md
  md: number; // md ~ lg
  lg: number; // lg ~ xl
  xl: number; // > xl
};

export type GridProps<T = unknown> = {
  width?: string | number;
  height?: string | number;
  items: T[];
  renderGridItem: (item: T, index: number) => React.ReactNode;
  gridStyle?: CSSProperties;
  cols?: Partial<GridColsType>;
};

export type VirtuosoGridComponentsType = VirtuosoGridProps<
  ComponentProps<'div'> & {
    style?: CSSProperties;
    children?: React.ReactNode;
  }
>['components'];

export const DEFAULT_COLS: GridColsType = {
  xs: 1, // 1行1个
  sm: 1, // 1行1个
  md: 2, // 1行2个
  lg: 3, // 1行3个
  xl: 4, // 1行4个
};

export const DEFAULT_ITEMS: never[] = [];
