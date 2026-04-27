/**
 * @file 侧边栏顶层分组图标（SVG，零依赖）。
 *
 * 用 React.createElement 显式构造，避开 manager bundle 对 jsx auto-import 的不确定性。
 * 16x16 / currentColor / 1.75 stroke。
 */

import React from 'react';

const svgProps = {
  width: 16,
  height: 16,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const svg = (...children: React.ReactNode[]) => React.createElement('svg', svgProps, ...children);

const path = (d: string) => React.createElement('path', { d, key: d });

const circle = (cx: number, cy: number, r: number) =>
  React.createElement('circle', { cx, cy, r, key: `${cx}-${cy}-${r}` });

const rect = (x: number, y: number, width: number, height: number, rx: number) =>
  React.createElement('rect', { x, y, width, height, rx, key: `${x}-${y}` });

const ellipse = (rx: number, ry: number, rotate?: number) =>
  React.createElement('ellipse', {
    cx: 12,
    cy: 12,
    rx,
    ry,
    transform: rotate ? `rotate(${rotate} 12 12)` : undefined,
    key: `e-${rotate ?? 0}`,
  });

export const IconIntroduction = () =>
  svg(
    path('M2 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2z'),
    path('M22 4h-6a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h7z'),
  );

export const IconTokens = () =>
  svg(
    circle(13.5, 6.5, 2.5),
    circle(19, 14.5, 2.5),
    circle(5, 14.5, 2.5),
    circle(12, 19.5, 1.5),
    path('M12 2a10 10 0 1 0 10 10'),
  );

export const IconPresets = () =>
  svg(rect(3, 3, 7, 7, 1), rect(14, 3, 7, 7, 1), rect(3, 14, 7, 7, 1), rect(14, 14, 7, 7, 1));

export const IconReact = () =>
  svg(circle(12, 12, 2), ellipse(10, 4), ellipse(10, 4, 60), ellipse(10, 4, 120));

export const IconVue = () => svg(path('M2 4h5l5 8 5-8h5L12 22z'), path('M7 4l5 8 5-8'));

export const sidebarRootIcons: Record<string, () => React.ReactElement> = {
  Introduction: IconIntroduction,
  'Design Tokens': IconTokens,
  Presets: IconPresets,
  React: IconReact,
  Vue: IconVue,
};
