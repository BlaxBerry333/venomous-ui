/**
 * @file PreviewBlock —— mdx 表格 preview 列里通用的方块容器。
 * 默认 50×50，带 1px 灰边和 radius-2 圆角，可被各 prop 覆盖。
 */

import type { CSSProperties, ReactNode } from 'react';

export function PreviewBlock({
  width = 60,
  height = 60,
  background,
  boxShadow,
  borderRadius = 'var(--venomous-radius-2)',
  border = '1px solid var(--venomous-gray-300)',
  className,
  children,
}: {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  background?: CSSProperties['background'];
  boxShadow?: CSSProperties['boxShadow'];
  borderRadius?: CSSProperties['borderRadius'];
  border?: CSSProperties['border'];
  className?: string;
  children?: ReactNode;
}) {
  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width,
        height,
        background,
        boxShadow,
        borderRadius,
        border,
        verticalAlign: 'middle',
      }}
    >
      {children}
    </span>
  );
}
