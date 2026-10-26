/**
 * @file Storybook 文档 / story 共用的 i18n 字典骨架。
 * 当前内容极简（占位），真有翻译需求时按需扩展。
 *
 * 用法（stories tsx 内）：
 *   const { locale } = context.globals;
 *   const t = dicts[(locale ?? 'en') as Locale];
 *   t.common.description // "Description" / "描述" / "説明"
 */

export type Locale = 'en' | 'zh' | 'ja';

export interface Dict {
  common: {
    description: string;
    usage: string;
    api: string;
    examples: string;
  };
}

const dicts: Record<Locale, Dict> = {
  en: {
    common: { description: 'Description', usage: 'Usage', api: 'API', examples: 'Examples' },
  },
  zh: {
    common: { description: '描述', usage: '用法', api: 'API', examples: '示例' },
  },
  ja: {
    common: { description: '説明', usage: '使い方', api: 'API', examples: '例' },
  },
};

export default dicts;
