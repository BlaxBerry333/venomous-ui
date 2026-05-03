// 通用类型工具（占位为主，后续按需扩展）

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyFunction = (...args: any[]) => any;

/** 把交叉类型展开为更易读的对象类型，用于改善 IDE 提示 */
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type MaybeArray<T> = T | T[];

export type Nullable<T> = T | null;

export type Maybe<T> = T | null | undefined;

export * from './components';
