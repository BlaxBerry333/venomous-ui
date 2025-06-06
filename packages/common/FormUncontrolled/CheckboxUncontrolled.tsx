import { memo } from 'react';
import { Controller as RHFController, useFormContext } from 'react-hook-form';
import { Checkbox } from '../Form';
import type { CheckboxUncontrolledComponentType } from './index.types';

const CheckboxUncontrolled: CheckboxUncontrolledComponentType = memo(({ name, ...props }) => {
  const { control } = useFormContext();

  return (
    <RHFController
      control={control}
      name={name}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <Checkbox
          {...props}
          value={value}
          onChange={onChange}
          inputRef={ref}
          isError={Boolean(error)}
        />
      )}
    />
  );
});

CheckboxUncontrolled.displayName = 'CheckboxUncontrolled';
export default CheckboxUncontrolled;
