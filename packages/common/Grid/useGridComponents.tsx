import { useThemeBreakpoint } from '@packages/helpers';
import { useMemo } from 'react';

import { DEFAULT_COLS, type GridProps, type VirtuosoGridComponentsType } from './Grid.types';

export default function useGridComponents({
  gridStyle,
  cols,
}: Pick<GridProps, 'gridStyle' | 'cols'>) {
  const { isXs, isSm, isMd, isLg } = useThemeBreakpoint();

  const itemWidth = useMemo<string>(() => {
    let currentCols: number;
    if (isXs) currentCols = cols?.xs ?? DEFAULT_COLS.xs;
    else if (isSm) currentCols = cols?.sm ?? DEFAULT_COLS.sm;
    else if (isMd) currentCols = cols?.md ?? DEFAULT_COLS.md;
    else if (isLg) currentCols = cols?.lg ?? DEFAULT_COLS.lg;
    else currentCols = cols?.xl ?? DEFAULT_COLS.xl;
    return `${100 / currentCols}%`;
  }, [isXs, isSm, isMd, isLg, cols]);

  const gridComponents = useMemo<VirtuosoGridComponentsType>(
    () => ({
      List: ({ ref, style, children, ...props }) => (
        <div
          ref={ref}
          {...props}
          style={{ display: 'flex', flexWrap: 'wrap', ...style, ...gridStyle }}
        >
          {children}
        </div>
      ),
      Item: ({ children, ...props }) => {
        return (
          <div
            {...props}
            style={{
              width: itemWidth,
              display: 'flex',
              boxSizing: 'border-box',
              flex: 'none',
              alignContent: 'stretch',
            }}
          >
            {children}
          </div>
        );
      },
    }),
    [itemWidth, gridStyle],
  );

  return {
    gridComponents,
  };
}
