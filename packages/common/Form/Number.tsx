import { memo, useCallback } from 'react';
import type { NumberComponentType } from './Form.types';
import Input from './Input';

const Number: NumberComponentType = memo(
  ({ isError, fullWidth, value = 0, onChange, sx, min = 0, max = 1000, step = 1, ...props }) => {
    const handleOnChange = useCallback(
      (value: string) => {
        if (!value || isNaN(parseInt(value, 10))) {
          onChange(min);
          return;
        }
        const v = Math.abs(parseInt(value, 10));
        onChange(v);
      },
      [min, onChange],
    );

    return (
      <Input
        type="number"
        fullWidth={fullWidth}
        isError={isError}
        value={Math.abs(value).toString()}
        onChange={handleOnChange}
        sx={{
          ...sx,
        }}
        slotProps={{
          input: {
            type: 'number',
            min,
            max,
            step,
          },
        }}
        {...props}
      />
    );
  },
);

Number.displayName = 'Number';
export default Number;
