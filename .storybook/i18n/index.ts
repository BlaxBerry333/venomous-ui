/**
 * @file i18n —— Storybook docs / sidebar 多语言。
 *
 * 三个 locale：en / zh / ja。
 * en 是 schema 模板：I18nKey 由 typeof en 推导，zh / ja 必须覆盖 en 全部 key。
 * mdx 内用 useTranslation('a.b.c')，sidebar / toolbar 等非 React 处用 translate()。
 */

import { en } from './translations.en';
import { ja } from './translations.ja';
import { zh } from './translations.zh';

export type Locale = 'en' | 'zh' | 'ja';

export const LOCALE_KEY = 'locale';
export const DEFAULT_LOCALE: Locale = 'en';

export const locales: Record<Locale, string> = {
  en: 'EN',
  zh: '中文',
  ja: '日本語',
};

export function narrowLocale(value: unknown): Locale | null {
  return value === 'en' || value === 'zh' || value === 'ja' ? value : null;
}

type Dict = typeof en;

type DotPath<T, P extends string = ''> = {
  [K in keyof T & string]: T[K] extends object
    ? DotPath<T[K], P extends '' ? K : `${P}.${K}`>
    : P extends ''
      ? K
      : `${P}.${K}`;
}[keyof T & string];

export type I18nKey = DotPath<Dict>;

const dictionaries: Record<Locale, unknown> = { en, zh, ja };

function lookup(dict: unknown, key: string): string {
  const parts = key.split('.');
  let cur: unknown = dict;
  for (const p of parts) {
    if (cur && typeof cur === 'object' && p in cur) {
      cur = (cur as Record<string, unknown>)[p];
    } else {
      return key;
    }
  }
  return typeof cur === 'string' ? cur : key;
}

export function translate(locale: Locale, key: I18nKey): string {
  return lookup(dictionaries[locale] ?? dictionaries.en, key);
}
