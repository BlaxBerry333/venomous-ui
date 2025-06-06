import { memo } from 'react';
import { Controller as RHFController, useFormContext } from 'react-hook-form';
import { Switch } from '../Form';
import type { SwitchUncontrolledComponentType } from './index.types';

const SwitchUncontrolled: SwitchUncontrolledComponentType = memo(({ name, ...props }) => {
  const { control } = useFormContext();

  return (
    <RHFController
      control={control}
      name={name}
      render={({ field: { onChange, value, ref } }) => (
        <Switch {...props} value={value} onChange={onChange} inputRef={ref} />
      )}
    />
  );
});

SwitchUncontrolled.displayName = 'SwitchUncontrolled';
export default SwitchUncontrolled;
