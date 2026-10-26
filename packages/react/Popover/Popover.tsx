'use client';

import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type HTMLAttributes,
  type MouseEvent,
  type ReactElement,
} from 'react';
import { devWarn } from '@internal/dev';
import { isEventInsideNodes, overlayStack } from '@internal/dom';
import { mergeIntoChild, mergeRefs, useFloating, type UseFloatingReturn } from '@internal/react';
import { mergeClassName } from '@internal/style';
import '@packages/styles/components/Popover.scss';
import type {
  PopoverContentProps,
  PopoverOpenChangeReason,
  PopoverProps,
  PopoverTriggerProps,
} from './Popover.type';

const BLOCK = 'venomous--Popover';

interface PopoverContextValue {
  open: boolean;
  setOpen: (next: boolean, reason: PopoverOpenChangeReason) => void;
  floating: UseFloatingReturn;
  contentId: string;
  contentRole: NonNullable<PopoverContentProps['role']>;
  setContentRole: (role: NonNullable<PopoverContentProps['role']>) => void;
}

const PopoverContext = createContext<PopoverContextValue | null>(null);

function usePopoverContext(component: string): PopoverContextValue {
  const context = useContext(PopoverContext);
  if (!context) throw new Error(`[venomous-ui] <${component}> must be used inside <Popover>.`);
  return context;
}

/**
 * Popover — 点击 trigger 打开的浮层。根组件不渲染 DOM，只提供状态。
 *
 * - content 带 `popover="manual"`，打开时进入 top layer：不被祖先 overflow / z-index 遮挡，
 *   在模态 Dialog 里也能正常显示与交互（content 渲染在 trigger 旁，仍是 Dialog 的后代，不会被设为 inert）。
 * - Esc / 点外部经全局浮层栈处理：嵌套时只关最上层，Esc 不会连带关闭外层 Dialog。
 */
export function Popover({
  defaultOpen = false,
  open: openProp,
  onOpenChange,
  placement = 'bottom',
  offset = 8,
  collisionPadding = 8,
  flip = true,
  shift = true,
  matchTriggerWidth = false,
  closeOnOutsideClick = true,
  closeOnEsc = true,
  returnFocusOnClose = true,
  children,
}: PopoverProps): ReactElement {
  const isControlled = openProp !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const open = isControlled ? openProp : uncontrolledOpen;

  useEffect(() => {
    if (defaultOpen && isControlled) {
      devWarn('Popover', '`defaultOpen` is ignored when `open` is controlled.');
    }
    // 仅首次挂载检查一次
  }, []);

  const setOpen = useCallback(
    (next: boolean, reason: PopoverOpenChangeReason) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange?.(next, reason);
    },
    [isControlled, onOpenChange],
  );

  const floating = useFloating({
    open,
    placement,
    offset,
    collisionPadding,
    flip,
    shift,
    matchTriggerWidth,
  });
  const { getTrigger, getContent } = floating;

  const contentId = `${useId()}-content`;
  const [contentRole, setContentRole] =
    useState<NonNullable<PopoverContentProps['role']>>('dialog');

  useEffect(() => {
    if (!open) return undefined;
    const id = contentId;
    overlayStack.push({
      id,
      closeFromEsc: () => {
        if (closeOnEsc) setOpen(false, 'esc-key');
      },
      closeFromOutside: (event) => {
        if (closeOnOutsideClick && !isEventInsideNodes(event, [getTrigger(), getContent()])) {
          setOpen(false, 'outside-click');
        }
        return true;
      },
    });
    return () => overlayStack.remove(id);
  }, [open, contentId, closeOnEsc, closeOnOutsideClick, setOpen, getTrigger, getContent]);

  // 关闭前焦点在 content 里才把焦点还给 trigger；焦点在别处（如点到了外面的输入框）时不抢
  const focusInsideRef = useRef(false);
  useEffect(() => {
    if (!open) return undefined;
    const onFocusIn = () => {
      focusInsideRef.current = !!getContent()?.contains(document.activeElement);
    };
    document.addEventListener('focusin', onFocusIn);
    return () => document.removeEventListener('focusin', onFocusIn);
  }, [open, getContent]);

  const prevOpenRef = useRef(open);
  useEffect(() => {
    const wasOpen = prevOpenRef.current;
    prevOpenRef.current = open;
    if (!wasOpen || open || !focusInsideRef.current) return;
    focusInsideRef.current = false;
    if (returnFocusOnClose) getTrigger()?.focus({ preventScroll: true });
  }, [open, returnFocusOnClose, getTrigger]);

  const context = useMemo<PopoverContextValue>(
    () => ({ open, setOpen, floating, contentId, contentRole, setContentRole }),
    [open, setOpen, floating, contentId, contentRole],
  );

  return <PopoverContext.Provider value={context}>{children}</PopoverContext.Provider>;
}

export const PopoverTrigger = forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  function PopoverTrigger({ className, children, onClick, style, ...rest }, ref) {
    const { open, setOpen, floating, contentId, contentRole } = usePopoverContext('PopoverTrigger');

    const triggerProps = {
      ...rest,
      ref: mergeRefs(ref, floating.triggerRef),
      className: mergeClassName(`${BLOCK}__trigger`, className),
      style: { ...floating.triggerStyle, ...style },
      'aria-haspopup': contentRole,
      'aria-expanded': open,
      'aria-controls': open ? contentId : undefined,
      'data-state': open ? 'open' : 'closed',
      onClick: (event: MouseEvent<HTMLButtonElement>) => {
        onClick?.(event);
        if (!event.defaultPrevented) setOpen(!open, 'trigger-click');
      },
    };

    return (
      mergeIntoChild(children, triggerProps) ?? (
        <button type="button" {...triggerProps}>
          {children}
        </button>
      )
    );
  },
);

export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
  function PopoverContent(
    { role = 'dialog', keepMounted = false, className, style, children, ...rest },
    ref,
  ) {
    const { open, floating, contentId, setContentRole } = usePopoverContext('PopoverContent');

    useEffect(() => {
      setContentRole(role);
    }, [role, setContentRole]);

    useEffect(() => {
      if (open && role === 'dialog' && !rest['aria-label'] && !rest['aria-labelledby']) {
        devWarn(
          'Popover',
          'role="dialog" content is missing `aria-label` or `aria-labelledby` — it has no accessible name.',
        );
      }
    }, [open, role, rest['aria-label'], rest['aria-labelledby']]);

    if (!open && !keepMounted) return null;

    return (
      <div
        {...rest}
        // @types/react 18 未声明 popover 属性，运行时会原样写到 DOM
        {...({ popover: 'manual' } as HTMLAttributes<HTMLDivElement>)}
        ref={mergeRefs(ref, floating.contentRef)}
        id={contentId}
        role={role}
        tabIndex={-1}
        hidden={!open}
        data-state={open ? 'open' : 'closed'}
        data-placement={floating.resolvedPlacement}
        className={mergeClassName(`${BLOCK}__content`, className)}
        style={{ ...floating.contentStyle, ...style }}
      >
        {children}
      </div>
    );
  },
);
