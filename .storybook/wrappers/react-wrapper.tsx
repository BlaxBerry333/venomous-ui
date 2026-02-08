import type { ComponentType, ReactNode } from "react";

interface ReactWrapperProps<P = Record<string, unknown>> {
  component: ComponentType<P>;
  props?: P;
  children?: ReactNode;
}

/**
 * Wrapper for rendering React components in Storybook
 * Provides a consistent interface for both React and Vue stories
 */
export function ReactWrapper<P extends Record<string, unknown>>({
  component: Component,
  props,
  children,
}: ReactWrapperProps<P>) {
  return <Component {...(props as P)}>{children}</Component>;
}
