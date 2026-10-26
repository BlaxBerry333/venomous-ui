import {
  cloneElement,
  isValidElement,
  version,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
  type Ref,
  type RefCallback,
} from 'react';
import { mergeClassName } from '@internal/style';

type AnyProps = Record<string, unknown>;

/** 合并多个 ref（函数 ref / 对象 ref / null）为一个回调 ref */
export function mergeRefs<T>(...refs: Array<Ref<T> | undefined>): RefCallback<T> {
  return (node) => {
    for (const ref of refs) {
      if (typeof ref === 'function') ref(node);
      else if (ref) (ref as { current: T | null }).current = node;
    }
  };
}

// React 19 起 ref 是普通 prop；18 及以前挂在 element 上
function getElementRef(element: ReactElement): Ref<unknown> | undefined {
  const major = Number.parseInt(version, 10);
  return major >= 19
    ? ((element.props as AnyProps).ref as Ref<unknown> | undefined)
    : (element as unknown as { ref?: Ref<unknown> }).ref;
}

/**
 * 把 slotProps 合并到唯一的子元素上并返回克隆，不额外渲染 DOM。
 * - on* 事件：先调子元素自己的，未 preventDefault 时再调 slot 的
 * - className / aria-describedby 拼接；style 浅合并（子元素优先）；ref 合并
 * - 其余属性子元素优先
 * 子元素必须把 ref 与其余 props 转发到 DOM（本库组件均满足）。
 * children 不是单个元素时返回 null，由调用方决定回退渲染。
 */
export function mergeIntoChild(
  children: ReactNode,
  slotProps: AnyProps & { ref?: Ref<HTMLElement> },
): ReactElement | null {
  if (!isValidElement(children)) return null;
  const childProps = children.props as AnyProps;
  const merged: AnyProps = { ...slotProps };

  for (const [key, childValue] of Object.entries(childProps)) {
    const slotValue = slotProps[key];
    if (
      /^on[A-Z]/.test(key) &&
      typeof slotValue === 'function' &&
      typeof childValue === 'function'
    ) {
      merged[key] = (event: { defaultPrevented?: boolean }) => {
        childValue(event);
        if (!event.defaultPrevented) slotValue(event);
      };
    } else if (key === 'className' || key === 'aria-describedby') {
      // 都是空格分隔的 token 列表，拼接而不是覆盖
      merged[key] = mergeClassName(
        slotValue as string | undefined,
        childValue as string | undefined,
      );
    } else if (key === 'style') {
      merged[key] = { ...(slotValue as CSSProperties), ...(childValue as CSSProperties) };
    } else if (key !== 'ref' && key !== 'children') {
      merged[key] = childValue;
    }
  }

  merged.ref = mergeRefs(slotProps.ref, getElementRef(children));
  return cloneElement(children, merged);
}
