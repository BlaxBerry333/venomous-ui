/**
 * @file DataTable —— docs 内通用列表渲染。
 */

import { Unstyled } from '@storybook/addon-docs/blocks';
import type { ReactNode } from 'react';

export interface DataTableColumn<T> {
  key: keyof T & string;
  header: ReactNode;
  width?: string | number;
}

export interface DataTableProps<T extends Record<string, ReactNode>> {
  columns: DataTableColumn<T>[];
  rows: T[];
}

const STYLE_ID = 'venomous-data-table-style';

const css = `
.venomous-data-table {
  width: 100% !important;
  border-collapse: separate !important;
  border-spacing: 0 !important;
  border: 1px solid var(--venomous-color-border-default) !important;
  border-radius: 8px !important;
  overflow: hidden !important;
  color: var(--venomous-color-fg-default) !important;
  background: transparent !important;
}
.venomous-data-table thead tr {
  background: var(--venomous-color-bg-surface) !important;
}
.venomous-data-table tbody tr {
  background: var(--venomous-color-bg-subtle) !important;
}
.venomous-data-table th,
.venomous-data-table td {
  padding: 10px 14px !important;
  border: 0 !important;
  border-right: 1px solid var(--venomous-color-border-default) !important;
  border-bottom: 1px solid var(--venomous-color-border-default) !important;
}
.venomous-data-table th:last-child,
.venomous-data-table td:last-child {
  border-right: 0 !important;
}
.venomous-data-table tbody tr:last-child td {
  border-bottom: 0 !important;
}
.venomous-data-table th {
  text-align: left !important;
  font-weight: 600 !important;
  font-size: 13px !important;
  color: var(--venomous-color-fg-muted) !important;
}
.venomous-data-table td {
  vertical-align: middle !important;
  font-size: 14px !important;
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

export function DataTable<T extends Record<string, ReactNode>>({
  columns,
  rows,
}: DataTableProps<T>) {
  ensureStyle();
  return (
    <Unstyled>
      <table className="venomous-data-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} style={col.width ? { width: col.width } : undefined}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td key={col.key}>{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Unstyled>
  );
}
