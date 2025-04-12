import { type GridProps } from './Grid.types';
export default function useGridComponents({ gridStyle, gridItemStyle, cols, }: Pick<GridProps, 'gridStyle' | 'gridItemStyle' | 'cols'>): {
    gridComponents: import("react-virtuoso").GridComponents<unknown> | undefined;
};
