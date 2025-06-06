import MuiAutocomplete from '@mui/material/Autocomplete';
import { memo, useId, useMemo } from 'react';

import MuiTextField from '@mui/material/TextField';
import { Flex } from '../Flex';
import { usePaper } from '../Paper';
import { Text, useText } from '../Text';
import type { OptionType, SelectInputComponentType } from './index.types';
import Label from './Label';
import useInput from './useInput';

const DEFAULT_OPTIONS: OptionType[] = [];

const SelectInput: SelectInputComponentType = memo(
  ({
    label = '',
    tooltip,
    fullWidth = false,
    options = DEFAULT_OPTIONS,
    value,
    onChange,
    isRequired,
    isDisabled,
    isError,
    errorMessage = '',
    emptyOptionMessage = 'No Options',
    hideOptionsWhenEmpty = false,
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
    const { paperCommonStyles } = usePaper();

    const hideOptions = useMemo<boolean>(() => {
      return hideOptionsWhenEmpty ? options.length === 0 : false;
    }, [hideOptionsWhenEmpty, options]);

    const selectedOption = useMemo<OptionType | null>(() => {
      return options.find((option) => option.value === value) || null;
    }, [value, options]);

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

        <MuiAutocomplete
          className="VenomousUI-SelectInput"
          id={id}
          value={selectedOption}
          fullWidth={fullWidth}
          disabled={isDisabled}
          onChange={(e, newValue) => onChange?.(newValue, e)}
          renderInput={(params) => (
            <MuiTextField
              {...params}
              autoComplete="off"
              size="small"
              error={isError}
              slotProps={{
                input: {
                  ...params.InputProps,
                  sx: { ...inputCommonStyle },
                },
              }}
            />
          )}
          options={options}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          getOptionLabel={(option) => option.label}
          getOptionDisabled={(option) => !!option.isDisabled}
          slotProps={{
            paper: {
              sx: { ...paperCommonStyles, py: 0.25, display: hideOptions ? 'none' : 'display' },
            },
          }}
          noOptionsText={hideOptions ? null : emptyOptionMessage}
        />

        {isError && (
          <Text
            text={isError ? errorMessage : ''}
            isLabel
            sx={{ ...errorMessageStyles, lineHeight: '1.5rem' }}
          />
        )}
      </Flex>
    );
  },
);

SelectInput.displayName = 'SelectInput';
export default SelectInput;
