import { type GridProps } from './Grid.types';
export default function useGridComponents({ gridStyle, cols, }: Pick<GridProps, 'gridStyle' | 'cols'>): {
    gridComponents: import("react-virtuoso").GridComponents<unknown> | undefined;
};
