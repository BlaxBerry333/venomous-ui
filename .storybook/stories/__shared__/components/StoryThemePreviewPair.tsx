/**
 * @file StoryThemePreviewPair —— 主题色 docs 专用，并排展示 light/dark 两个色块。
 * 解决用户切换主题时 preview 列只显示当前一态的对照问题：直接同时展示。
 */

import type { CSSProperties } from 'react';
import { StorySampleBlock } from './StorySampleBlock';

export function StoryThemePreviewPair({
  light,
  dark,
}: {
  light: CSSProperties['background'];
  dark: CSSProperties['background'];
}) {
  return (
    <span style={{ display: 'inline-flex', gap: 12, alignItems: 'center' }}>
      <span
        style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}
      >
        <StorySampleBlock background={light} />
        <span style={{ fontSize: 11, color: 'var(--venomous-color-gray-500)' }}>Light</span>
      </span>
      <span
        style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}
      >
        <StorySampleBlock background={dark} />
        <span style={{ fontSize: 11, color: 'var(--venomous-color-gray-500)' }}>Dark</span>
      </span>
    </span>
  );
}
