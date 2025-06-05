import MuiOutlinedInput from '@mui/material/OutlinedInput';
import { memo, useId } from 'react';
import { Flex } from '../Flex';
import { Text, useText } from '../Text';
import type { InputComponentType } from './index.types';
import Label from './Label';
import useInput from './useInput';

const Input: InputComponentType = memo(
  ({
    label = '',
    tooltip,
    fullWidth = false,
    value,
    onChange,
    isRequired,
    isDisabled,
    isError,
    errorMessage = '',
    sx,
    ...props
  }) => {
    const id = useId();

    const { inputCommonStyle } = useInput({
      isDisabled,
      isError,
    });
    const { textCommonStyles: errorMessageStyles } = useText({
      isTitle: false,
      isLabel: true,
      textColor: isDisabled ? 'disabled' : isError ? 'error' : 'auto',
    });

    return (
      <Flex gap={0} width={fullWidth ? '100%' : 'auto'}>
        {label && (
          <Label
            label={label}
            elementId={id}
            tooltip={tooltip}
            isRequired={isRequired}
            isDisabled={isDisabled}
            isError={isError}
          />
        )}

        <MuiOutlinedInput
          id={id}
          autoComplete="off"
          fullWidth={fullWidth}
          size="small"
          error={isError}
          disabled={isDisabled}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          sx={{ ...inputCommonStyle, ...sx }}
          {...props}
        />

        {isError && (
          <Text
            text={isError ? errorMessage : ''}
            isLabel
            sx={{ ...errorMessageStyles, minHeight: '24px' }}
          />
        )}
      </Flex>
    );
  },
);

Input.displayName = 'Input';
export default Input;
