/**
 * @file StoryCodeBlockGroup —— docs 内多代码块 tab 切换组件。
 */

import { Source, Unstyled } from '@storybook/addon-docs/blocks';
import { useState, type ComponentProps, type ReactNode } from 'react';
import { DEFAULT_THEME, narrowTheme, THEME_KEY } from '../../../lib';
import { useGlobal } from '../../../lib/globals-react';

type SourceLanguage = ComponentProps<typeof Source>['language'];

export interface StoryCodeBlockTab {
  title: string;
  code: string;
  /** 代码语言，传给 storybook <Source>。默认 typescript。 */
  lang?: SourceLanguage;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface StoryCodeBlockGroupProps {
  tabs: StoryCodeBlockTab[];
  /** 默认选中的 tab index，默认 0；若该 index 是 disabled 则取下一个非 disabled */
  defaultIndex?: number;
}

const STYLE_ID = 'venomous-code-block-group-style';

const css = `
.venomous-code-block-group {
  border: 1px solid var(--venomous-color-gray-300) !important;
  border-radius: 8px !important;
  overflow: hidden !important;
  background: #fff !important;
  margin: 1em 0 !important;
}
.venomous-code-block-group__tabs {
  display: flex !important;
  gap: 0 !important;
  border-bottom: 1px solid var(--venomous-color-gray-300) !important;
  background: var(--venomous-color-gray-100) !important;
}
.venomous-code-block-group__tab {
  appearance: none !important;
  -webkit-appearance: none !important;
  background: transparent !important;
  border: 0 !important;
  border-right: 1px solid var(--venomous-color-gray-300) !important;
  padding: 8px 14px !important;
  font-size: 13px !important;
  font-weight: 500 !important;
  color: var(--venomous-color-gray-500) !important;
  cursor: pointer !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 6px !important;
  transition: color 120ms, background 120ms !important;
}
.venomous-code-block-group__tab:hover:not(:disabled):not([aria-selected='true']) {
  color: var(--venomous-color-gray-900) !important;
  background: #fff !important;
}
.venomous-code-block-group__tab[aria-selected='true'] {
  color: var(--venomous-color-blue-500) !important;
  background: #fff !important;
  box-shadow: inset 0 -2px 0 var(--venomous-color-blue-500) !important;
}
.venomous-code-block-group__tab:disabled {
  color: var(--venomous-color-gray-300) !important;
  cursor: not-allowed !important;
  opacity: 0.6 !important;
}
.venomous-code-block-group__panel {
  background: #fff !important;
}
.venomous-code-block-group__panel > * {
  margin: 0 !important;
  border-radius: 0 !important;
  border: 0px !important;
}
/* 强制内嵌 <Source>（storybook 自带 emotion runtime 注入的背景）跟随 panel 底色。
   只覆盖容器层（pre/code/wrapper），避免覆盖 prism syntax token 自身的高亮背景。 */
.venomous-code-block-group__panel > *,
.venomous-code-block-group__panel pre,
.venomous-code-block-group__panel pre[class*='language-'],
.venomous-code-block-group__panel code,
.venomous-code-block-group__panel code[class*='language-'] {
  background: #fff !important;
}
.venomous-code-block-group__panel *:focus,
.venomous-code-block-group__panel *:focus-visible {
  outline: none !important;
  box-shadow: none !important;
}

:root.dark .venomous-code-block-group,
[data-theme='dark'] .venomous-code-block-group {
  border-color: var(--venomous-color-gray-700) !important;
  background: var(--venomous-color-gray-900) !important;
}
:root.dark .venomous-code-block-group__tabs,
[data-theme='dark'] .venomous-code-block-group__tabs {
  border-bottom-color: var(--venomous-color-gray-700) !important;
  background: var(--venomous-color-gray-700) !important;
}
:root.dark .venomous-code-block-group__tab,
[data-theme='dark'] .venomous-code-block-group__tab {
  border-right-color: var(--venomous-color-gray-700) !important;
  color: var(--venomous-color-gray-300) !important;
}
:root.dark .venomous-code-block-group__tab:hover:not(:disabled):not([aria-selected='true']),
[data-theme='dark'] .venomous-code-block-group__tab:hover:not(:disabled):not([aria-selected='true']) {
  color: var(--venomous-color-gray-100) !important;
  background: var(--venomous-color-gray-900) !important;
}
:root.dark .venomous-code-block-group__tab[aria-selected='true'],
[data-theme='dark'] .venomous-code-block-group__tab[aria-selected='true'] {
  color: var(--venomous-color-blue-500) !important;
  background: var(--venomous-color-gray-900) !important;
  box-shadow: inset 0 -2px 0 var(--venomous-color-blue-500) !important;
}
:root.dark .venomous-code-block-group__tab:disabled,
[data-theme='dark'] .venomous-code-block-group__tab:disabled {
  color: var(--venomous-color-gray-500) !important;
}
:root.dark .venomous-code-block-group__panel,
[data-theme='dark'] .venomous-code-block-group__panel,
:root.dark .venomous-code-block-group__panel > *,
[data-theme='dark'] .venomous-code-block-group__panel > *,
:root.dark .venomous-code-block-group__panel pre,
[data-theme='dark'] .venomous-code-block-group__panel pre,
:root.dark .venomous-code-block-group__panel pre[class*='language-'],
[data-theme='dark'] .venomous-code-block-group__panel pre[class*='language-'],
:root.dark .venomous-code-block-group__panel code,
[data-theme='dark'] .venomous-code-block-group__panel code,
:root.dark .venomous-code-block-group__panel code[class*='language-'],
[data-theme='dark'] .venomous-code-block-group__panel code[class*='language-'] {
  background: var(--venomous-color-gray-900) !important;
}
`;

function ensureStyle() {
  if (typeof document === 'undefined') return;
  if (document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = css;
  document.head.appendChild(el);
}

function pickInitialIndex(tabs: StoryCodeBlockTab[], desired: number): number {
  if (!tabs[desired]?.disabled) return Math.max(0, Math.min(desired, tabs.length - 1));
  const fallback = tabs.findIndex((t) => !t.disabled);
  return fallback >= 0 ? fallback : 0;
}

export function StoryCodeBlockGroup({ tabs, defaultIndex = 0 }: StoryCodeBlockGroupProps) {
  ensureStyle();
  const [active, setActive] = useState(() => pickInitialIndex(tabs, defaultIndex));
  const theme = useGlobal(THEME_KEY, narrowTheme, DEFAULT_THEME);

  const current = tabs[active];

  return (
    <Unstyled>
      <div className="venomous-code-block-group">
        <div className="venomous-code-block-group__tabs" role="tablist">
          {tabs.map((tab, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === active}
              disabled={tab.disabled}
              onClick={() => !tab.disabled && setActive(i)}
              className="venomous-code-block-group__tab"
            >
              {tab.icon}
              <strong>{tab.title}</strong>
            </button>
          ))}
        </div>
        <div className="venomous-code-block-group__panel" role="tabpanel">
          {current && (
            <Source
              key={theme}
              code={current.code}
              language={current.lang ?? 'typescript'}
              dark={theme === 'dark'}
            />
          )}
        </div>
      </div>
    </Unstyled>
  );
}
