/**
 * @file Accent preset：toolbar 切换 primary 主色，用于演示主题变量可被消费方覆盖。
 * 注入一段 <style> 到 head，覆盖 --venomous-color-primary* 三件套。
 */

export type Accent = 'default' | 'red' | 'green';

export const ACCENT_KEY = 'accent';
export const DEFAULT_ACCENT: Accent = 'default';

interface AccentDef {
  /** toolbar 主标题 */
  title: string;
  /** 静止态色号（同时显示在 toolbar item 右侧） */
  rest: string;
  /** hover / active 色号 */
  hover: string;
  active: string;
}

export const ACCENT_PRESETS: Record<Accent, AccentDef> = {
  default: {
    title: 'Default ( Blue )',
    rest: '#3b82f6',
    hover: '#1d4ed8',
    active: '#1e3a8a',
  },
  red: {
    title: 'Red',
    rest: '#ef4444',
    hover: '#b91c1c',
    active: '#7f1d1d',
  },
  green: {
    title: 'Green',
    rest: '#22c55e',
    hover: '#15803d',
    active: '#14532d',
  },
};

export function narrowAccent(value: unknown): Accent | null {
  return value === 'default' || value === 'red' || value === 'green' ? value : null;
}

const STYLE_NODE_ID = 'venomous-storybook-accent-overrides';

export function applyAccent(accent: Accent): void {
  if (typeof document === 'undefined') return;
  const existing = document.getElementById(STYLE_NODE_ID);
  if (accent === 'default') {
    existing?.remove();
    return;
  }
  const def = ACCENT_PRESETS[accent];
  const node = existing ?? document.createElement('style');
  node.id = STYLE_NODE_ID;
  node.textContent = `:root {
  --venomous-color-primary: ${def.rest};
  --venomous-color-primary-hover: ${def.hover};
  --venomous-color-primary-active: ${def.active};
}`;
  if (!existing) document.head.appendChild(node);
}
