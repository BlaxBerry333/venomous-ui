/**
 * @file StoryVueWrapper —— 在 React-based Storybook 中挂载 Vue 组件。
 *
 * 用 reactive() 让 props 变化时不重新 mount，保留 Vue 实例状态。
 * Slot 用法：传 string 渲染默认 slot；传 { default: () => h(...) } 渲染具名/嵌套 slot。
 */

import { useEffect, useRef } from 'react';
import { createApp, h, reactive, type Component, type VNode } from 'vue';

type SlotFunction = () => VNode | VNode[] | string;
type SlotsObject = Record<string, SlotFunction>;

interface StoryVueWrapperProps {
  component: Component;
  props?: Record<string, unknown>;
  children?: string | SlotsObject;
}

export function StoryVueWrapper({ component, props = {}, children }: StoryVueWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<ReturnType<typeof createApp> | null>(null);
  const reactivePropsRef = useRef<Record<string, unknown> | null>(null);

  const slots: SlotsObject | undefined = (() => {
    if (!children) return undefined;
    if (typeof children === 'string') return { default: () => children };
    return children;
  })();

  // 仅当 component 或 children 结构变化时才 remount
  const childrenKey =
    typeof children === 'string' ? children : JSON.stringify(Object.keys(children ?? {}));

  useEffect(() => {
    if (!containerRef.current) return;

    if (appRef.current) {
      appRef.current.unmount();
      appRef.current = null;
      reactivePropsRef.current = null;
    }

    reactivePropsRef.current = reactive({ ...props });
    const reactiveProps = reactivePropsRef.current;

    appRef.current = createApp({
      render() {
        return h(component, reactiveProps, slots);
      },
    });
    appRef.current.mount(containerRef.current);

    return () => {
      if (appRef.current) {
        appRef.current.unmount();
        appRef.current = null;
        reactivePropsRef.current = null;
      }
    };
  }, [component, childrenKey]);

  // props 变化时只更新 reactive 对象，不重新 mount
  useEffect(() => {
    if (!reactivePropsRef.current) return;
    Object.keys(props).forEach((key) => {
      reactivePropsRef.current![key] = props[key];
    });
    Object.keys(reactivePropsRef.current).forEach((key) => {
      if (!(key in props)) {
        delete reactivePropsRef.current![key];
      }
    });
  }, [props]);

  return <div ref={containerRef} />;
}
