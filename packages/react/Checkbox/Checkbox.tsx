'use client';

import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
} from 'react';
import { devWarn } from '@internal/dev';
import { mergeRefs, useIsomorphicLayoutEffect } from '@internal/react';
import { mergeClassName } from '@internal/style';
import '@packages/styles/components/Checkbox.scss';
import { useFormFieldControl, useFormFieldLabelledBy } from '../FormField/FormField';
import type { CheckboxGroupProps, CheckboxProps } from './Checkbox.type';

const BLOCK = 'venomous--Checkbox';

interface CheckboxGroupContextValue {
  name: string | undefined;
  value: string[];
  disabled: boolean | undefined;
  toggle: (value: string, checked: boolean) => void;
}

const CheckboxGroupContext = createContext<CheckboxGroupContextValue | null>(null);

/**
 * Checkbox — 原生 checkbox 视觉隐藏但保留焦点与表单行为，外观由相邻的 __control 绘制。
 * 在 CheckboxGroup 内时选中状态由组管理；在 FormField 内时自动关联说明与错误信息。
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { indeterminate = false, className, style, children, onChange, ...props },
  ref,
) {
  const group = useContext(CheckboxGroupContext);
  const rest = useFormFieldControl(props);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // indeterminate 只能通过 DOM 属性设置
  useIsomorphicLayoutEffect(() => {
    inputRef.current!.indeterminate = indeterminate;
  }, [indeterminate]);

  const groupProps = group
    ? {
        name: group.name,
        checked: rest.value !== undefined && group.value.includes(rest.value),
        disabled: rest.disabled ?? group.disabled,
      }
    : {};

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
    if (group && rest.value !== undefined) group.toggle(rest.value, event.target.checked);
  };

  const disabled = groupProps.disabled ?? rest.disabled;

  return (
    <label
      className={mergeClassName(BLOCK, className)}
      style={style}
      data-disabled={disabled || undefined}
    >
      <input
        {...rest}
        {...groupProps}
        ref={mergeRefs(ref, inputRef)}
        type="checkbox"
        className={`${BLOCK}__input`}
        onChange={handleChange}
      />
      <span className={`${BLOCK}__control`} aria-hidden="true" />
      {children !== undefined && <span className={`${BLOCK}__label`}>{children}</span>}
    </label>
  );
});

/** CheckboxGroup — 多选组，role="group"；value 是选中项的数组 */
export const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(function CheckboxGroup(
  {
    defaultValue,
    value: valueProp,
    onValueChange,
    name,
    disabled: disabledProp,
    orientation = 'vertical',
    className,
    children,
    ...props
  },
  ref,
) {
  const fieldLabelledBy = useFormFieldLabelledBy();
  // group 角色不支持 required / aria-invalid，只接 FormField 的 id / 说明 / 禁用
  const {
    disabled,
    required: _required,
    'aria-invalid': _invalid,
    ...rest
  } = useFormFieldControl({ ...props, disabled: disabledProp });
  const isControlled = valueProp !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue ?? []);
  const value = isControlled ? valueProp : uncontrolledValue;

  useEffect(() => {
    if (isControlled && defaultValue !== undefined) {
      devWarn('CheckboxGroup', '`defaultValue` is ignored when `value` is controlled.');
    }
    // 仅首次挂载检查一次
  }, []);

  const toggle = useCallback(
    (item: string, checked: boolean) => {
      const next = checked ? [...value, item] : value.filter((v) => v !== item);
      if (!isControlled) setUncontrolledValue(next);
      onValueChange?.(next);
    },
    [value, isControlled, onValueChange],
  );

  const context = useMemo<CheckboxGroupContextValue>(
    () => ({ name, value, disabled, toggle }),
    [name, value, disabled, toggle],
  );

  return (
    <CheckboxGroupContext.Provider value={context}>
      <div
        aria-labelledby={fieldLabelledBy}
        {...rest}
        ref={ref}
        role="group"
        aria-disabled={disabled || undefined}
        data-orientation={orientation}
        className={mergeClassName(`${BLOCK}Group`, className)}
      >
        {children}
      </div>
    </CheckboxGroupContext.Provider>
  );
});
