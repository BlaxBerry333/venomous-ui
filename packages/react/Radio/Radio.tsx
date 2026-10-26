'use client';

import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useState,
  type ChangeEvent,
} from 'react';
import { devWarn } from '@internal/dev';
import { mergeClassName } from '@internal/style';
import '@packages/styles/components/Radio.scss';
import { useFormFieldControl, useFormFieldLabelledBy } from '../FormField/FormField';
import type { RadioGroupProps, RadioProps } from './Radio.type';

const BLOCK = 'venomous--Radio';

interface RadioGroupContextValue {
  name: string;
  value: string | undefined;
  disabled: boolean | undefined;
  required: boolean | undefined;
  select: (value: string) => void;
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

/**
 * Radio — 原生 radio 视觉隐藏但保留焦点与表单行为。
 * 同组的 radio 共用 name，方向键切换由浏览器原生处理。
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { className, style, children, onChange, ...rest },
  ref,
) {
  const group = useContext(RadioGroupContext);

  const groupProps = group
    ? {
        name: group.name,
        checked: group.value === rest.value,
        disabled: rest.disabled ?? group.disabled,
        required: rest.required ?? group.required,
      }
    : {};
  const disabled = groupProps.disabled ?? rest.disabled;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
    // radio 只在被选中时触发 change
    group?.select(rest.value);
  };

  return (
    <label
      className={mergeClassName(BLOCK, className)}
      style={style}
      data-disabled={disabled || undefined}
    >
      <input
        {...rest}
        {...groupProps}
        ref={ref}
        type="radio"
        className={`${BLOCK}__input`}
        onChange={handleChange}
      />
      <span className={`${BLOCK}__control`} aria-hidden="true" />
      {children !== undefined && <span className={`${BLOCK}__label`}>{children}</span>}
    </label>
  );
});

/** RadioGroup — 单选组，role="radiogroup"；在 FormField 内时标题经 aria-labelledby 关联 */
export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(function RadioGroup(
  {
    defaultValue,
    value: valueProp,
    onValueChange,
    name: nameProp,
    disabled: disabledProp,
    required: requiredProp,
    orientation = 'vertical',
    className,
    children,
    ...props
  },
  ref,
) {
  const fieldLabelledBy = useFormFieldLabelledBy();
  const { disabled, required, ...rest } = useFormFieldControl({
    ...props,
    disabled: disabledProp,
    required: requiredProp,
  });
  const generatedName = useId();
  const name = nameProp ?? generatedName;
  const isControlled = valueProp !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const value = isControlled ? valueProp : uncontrolledValue;

  useEffect(() => {
    if (isControlled && defaultValue !== undefined) {
      devWarn('RadioGroup', '`defaultValue` is ignored when `value` is controlled.');
    }
    // 仅首次挂载检查一次
  }, []);

  const select = useCallback(
    (next: string) => {
      if (!isControlled) setUncontrolledValue(next);
      onValueChange?.(next);
    },
    [isControlled, onValueChange],
  );

  const context = useMemo<RadioGroupContextValue>(
    () => ({ name, value, disabled, required, select }),
    [name, value, disabled, required, select],
  );

  return (
    <RadioGroupContext.Provider value={context}>
      <div
        aria-labelledby={fieldLabelledBy}
        {...rest}
        ref={ref}
        role="radiogroup"
        aria-disabled={disabled || undefined}
        aria-required={required || undefined}
        data-orientation={orientation}
        className={mergeClassName(`${BLOCK}Group`, className)}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
});
