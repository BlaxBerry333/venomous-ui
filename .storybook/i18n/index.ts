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

// 把 en 的字面量类型放宽为 schema 约束 —— zh / ja 用 satisfies 这个类型
// 即可校验"key 结构一致"，但不要求字面量相等
export type Schema<T> = {
  [K in keyof T]: T[K] extends readonly string[]
    ? readonly string[]
    : T[K] extends string
      ? string
      : T[K] extends object
        ? Schema<T[K]>
        : never;
};

type DotPathByLeaf<T, L, P extends string = ''> = {
  [K in keyof T & string]: T[K] extends L
    ? P extends ''
      ? K
      : `${P}.${K}`
    : T[K] extends object
      ? DotPathByLeaf<T[K], L, P extends '' ? K : `${P}.${K}`>
      : never;
}[keyof T & string];

export type I18nKey = DotPathByLeaf<Dict, string>;
export type I18nListKey = DotPathByLeaf<Dict, readonly string[]>;

const dictionaries: Record<Locale, unknown> = { en, zh, ja };

function lookup(dict: unknown, key: string): unknown {
  const parts = key.split('.');
  let cur: unknown = dict;
  for (const p of parts) {
    if (cur && typeof cur === 'object' && p in cur) {
      cur = (cur as Record<string, unknown>)[p];
    } else {
      return undefined;
    }
  }
  return cur;
}

export function translate(locale: Locale, key: I18nKey): string {
  const v = lookup(dictionaries[locale] ?? dictionaries.en, key);
  return typeof v === 'string' ? v : key;
}

export function translateList(locale: Locale, key: I18nListKey): readonly string[] {
  const v = lookup(dictionaries[locale] ?? dictionaries.en, key);
  return Array.isArray(v) && v.every((x) => typeof x === 'string') ? (v as readonly string[]) : [];
}
