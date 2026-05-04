/**
 * @file useTranslation(key) —— mdx / docs 内根据 globals.locale 翻译。
 * 不用 storybook 的 useGlobals（限制只能在 decorator / story render 内调用）。
 */

import { useGlobal } from '../lib/globals-react';
import {
  DEFAULT_LOCALE,
  LOCALE_KEY,
  narrowLocale,
  translate,
  translateList,
  type I18nKey,
  type I18nListKey,
} from './index';

export function useTranslation(key: I18nKey): string {
  const locale = useGlobal(LOCALE_KEY, narrowLocale, DEFAULT_LOCALE);
  return translate(locale, key);
}

export function useTranslationList(key: I18nListKey): readonly string[] {
  const locale = useGlobal(LOCALE_KEY, narrowLocale, DEFAULT_LOCALE);
  return translateList(locale, key);
}
