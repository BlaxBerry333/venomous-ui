import { MuiOtpInput } from 'mui-one-time-password-input';
import { memo } from 'react';
import { Flex } from '../Flex';
import { Text, useText } from '../Text';
import type { OtpInputComponentType } from './index.types';
import Label from './Label';

const OtpInput: OtpInputComponentType = memo(
  ({
    label = '',
    tooltip,
    value,
    onChange,
    isRequired,
    isDisabled,
    isError,
    errorMessage = '',
  }) => {
    const { textCommonStyles: errorMessageStyles } = useText({
      isTitle: false,
      isLabel: true,
      textColor: isDisabled ? 'disabled' : isError ? 'error' : 'auto',
    });

    return (
      <Flex gap={0}>
        <Label
          label={label}
          elementId={undefined}
          tooltip={tooltip}
          isRequired={isRequired}
          isDisabled={isDisabled}
          isError={isError}
        />
        <MuiOtpInput
          value={value}
          onChange={onChange}
          length={6}
          TextFieldsProps={{
            disabled: isDisabled,
            error: isError,
          }}
          sx={{
            '& .MuiInputBase-root': {
              borderRadius: '8px',
            },
            '& input': {
              width: '8px',
              height: '8px',
              p: '16px',
              borderRadius: '8px',
            },
          }}
        />
        <Text
          text={isError ? errorMessage : ''}
          isLabel
          sx={{ ...errorMessageStyles, minHeight: '24px' }}
        />
      </Flex>
    );
  },
);

OtpInput.displayName = 'OtpInput';
export default OtpInput;
