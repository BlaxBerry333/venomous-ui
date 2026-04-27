/**
 * @file CodeBlockGroup —— docs 内多代码块 tab 切换组件。
 */

import { Source, Unstyled } from '@storybook/addon-docs/blocks';
import { useState, type ComponentProps, type ReactNode } from 'react';
import { DEFAULT_THEME, narrowTheme, THEME_KEY } from '../lib';
import { useGlobal } from '../lib/globals-react';

type SourceLanguage = ComponentProps<typeof Source>['language'];

export interface CodeBlockTab {
  title: string;
  code: string;
  /** 代码语言，传给 storybook <Source>。默认 typescript。 */
  lang?: SourceLanguage;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface CodeBlockGroupProps {
  tabs: CodeBlockTab[];
  /** 默认选中的 tab index，默认 0；若该 index 是 disabled 则取下一个非 disabled */
  defaultIndex?: number;
}

const STYLE_ID = 'venomous-code-block-group-style';

const css = `
.venomous-code-block-group {
  border: 1px solid var(--venomous-color-border-default) !important;
  border-radius: 8px !important;
  overflow: hidden !important;
  background: var(--venomous-color-bg-subtle) !important;
  margin: 1em 0 !important;
}
.venomous-code-block-group__tabs {
  display: flex !important;
  gap: 0 !important;
  border-bottom: 1px solid var(--venomous-color-border-default) !important;
  background: var(--venomous-color-bg-surface) !important;
}
.venomous-code-block-group__tab {
  appearance: none !important;
  -webkit-appearance: none !important;
  background: transparent !important;
  border: 0 !important;
  border-right: 1px solid var(--venomous-color-border-default) !important;
  padding: 8px 14px !important;
  font-size: 13px !important;
  font-weight: 500 !important;
  color: var(--venomous-color-fg-muted) !important;
  cursor: pointer !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 6px !important;
  transition: color 120ms, background 120ms !important;
}
.venomous-code-block-group__tab:hover:not(:disabled) {
  color: var(--venomous-color-fg-default) !important;
  background: var(--venomous-color-bg-subtle) !important;
}
.venomous-code-block-group__tab[aria-selected='true'] {
  color: var(--venomous-color-action-primary) !important;
  background: var(--venomous-color-bg-subtle) !important;
  box-shadow: inset 0 -2px 0 var(--venomous-color-action-primary) !important;
}
.venomous-code-block-group__tab:disabled {
  color: var(--venomous-color-fg-subtle) !important;
  cursor: not-allowed !important;
  opacity: 0.6 !important;
}
.venomous-code-block-group__panel {
  background: var(--venomous-color-bg-subtle) !important;
}
.venomous-code-block-group__panel > * {
  margin: 0 !important;
  border-radius: 0 !important;
  border: 0px !important;
}
.venomous-code-block-group__panel *:focus,
.venomous-code-block-group__panel *:focus-visible {
  outline: none !important;
  box-shadow: none !important;
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

function pickInitialIndex(tabs: CodeBlockTab[], desired: number): number {
  if (!tabs[desired]?.disabled) return Math.max(0, Math.min(desired, tabs.length - 1));
  const fallback = tabs.findIndex((t) => !t.disabled);
  return fallback >= 0 ? fallback : 0;
}

export function CodeBlockGroup({ tabs, defaultIndex = 0 }: CodeBlockGroupProps) {
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
