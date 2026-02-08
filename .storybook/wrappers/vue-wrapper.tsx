import { useEffect, useRef } from "react";
import { createApp, h, reactive, type Component, type VNode } from "vue";

type SlotFunction = () => VNode | VNode[] | string;
type SlotsObject = Record<string, SlotFunction>;

interface VueWrapperProps {
  component: Component;
  props?: Record<string, unknown>;
  /**
   * Slot content - supports:
   * - string: rendered as default slot text
   * - object with slot functions: { default: () => h('div', ...), named: () => ... }
   */
  children?: string | SlotsObject;
}

/**
 * Wrapper for rendering Vue components in React Storybook
 * Creates a Vue app instance and mounts it to a container
 *
 * Uses Vue's reactive() to update props without remounting the entire app,
 * preserving component state and event listeners.
 *
 * IMPORTANT: For slot content with nested elements, use Vue's h() function:
 * @example
 * <VueWrapper
 *   component={Modal}
 *   children={{
 *     default: () => h('div', { class: 'content' }, 'Hello')
 *   }}
 * />
 */
export function VueWrapper({ component, props = {}, children }: VueWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<ReturnType<typeof createApp> | null>(null);
  const reactivePropsRef = useRef<Record<string, unknown> | null>(null);

  // Resolve slots from children
  const slots: SlotsObject | undefined = (() => {
    if (!children) return undefined;
    if (typeof children === "string") {
      return { default: () => children };
    }
    return children;
  })();

  // Only remount when component or children structure changes
  const childrenKey = typeof children === "string" ? children : JSON.stringify(Object.keys(children || {}));

  // Create Vue app once, update props reactively
  useEffect(() => {
    if (!containerRef.current) return;

    // Cleanup previous instance
    if (appRef.current) {
      appRef.current.unmount();
      appRef.current = null;
      reactivePropsRef.current = null;
    }

    // Create reactive props object
    reactivePropsRef.current = reactive({ ...props });

    // Create Vue app instance with reactive props
    const reactiveProps = reactivePropsRef.current;
    appRef.current = createApp({
      render() {
        return h(component, reactiveProps, slots);
      },
    });

    // Mount to container
    appRef.current.mount(containerRef.current);

    // Cleanup on unmount
    return () => {
      if (appRef.current) {
        appRef.current.unmount();
        appRef.current = null;
        reactivePropsRef.current = null;
      }
    };
    // Only remount when component or children structure changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [component, childrenKey]);

  // Update reactive props when React props change (without remounting)
  useEffect(() => {
    if (reactivePropsRef.current) {
      // Update existing reactive props
      Object.keys(props).forEach((key) => {
        reactivePropsRef.current![key] = props[key];
      });
      // Remove keys that are no longer in props
      Object.keys(reactivePropsRef.current).forEach((key) => {
        if (!(key in props)) {
          delete reactivePropsRef.current![key];
        }
      });
    }
  }, [props]);

  return <div ref={containerRef} />;
}
