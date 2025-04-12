import { type GridProps } from './Grid.types';
declare const Grid: <T>({ height, width, items, renderGridItem, gridStyle, gridItemStyle, cols, }: GridProps<T>) => import("react/jsx-runtime").JSX.Element;
declare const GridMemo: typeof Grid;
export default GridMemo;
