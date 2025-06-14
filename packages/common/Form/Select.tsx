import MuiAutocomplete from '@mui/material/Autocomplete';
import MuiBox from '@mui/material/Box';
import MuiCircularProgress from '@mui/material/CircularProgress';
import MuiTextField from '@mui/material/TextField';
import { memo, useId, useMemo } from 'react';

import { Flex } from '../Flex';
import { usePaper } from '../Paper';
import { Text, useText } from '../Text';
import type { OptionType, SelectComponentType } from './index.types';
import Label from './Label';
import useInput from './useInput';

const DEFAULT_OPTIONS: OptionType[] = [];

const Select: SelectComponentType = memo(
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
    isLoadingOptions = false,
    renderOption,
    sx,
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
          multiple={false}
          id={id}
          fullWidth={fullWidth}
          disabled={isDisabled || isLoadingOptions}
          value={selectedOption}
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
                  sx: { ...inputCommonStyle, ...sx },
                  endAdornment: (
                    <>
                      {isLoadingOptions ? (
                        <MuiCircularProgress color="primary" disableShrink size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                },
              }}
            />
          )}
          loading={isLoadingOptions}
          options={options}
          noOptionsText={hideOptions ? null : emptyOptionMessage}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          getOptionDisabled={(option) => !!option.isDisabled}
          getOptionLabel={(option) => option.label}
          renderOption={({ key, ...optionProps }, option) => (
            <MuiBox
              component="li"
              key={key}
              {...optionProps}
              style={{ minHeight: 40, padding: 0, borderRadius: '8px' }}
              sx={{ mb: '4px', '&:last-child': { mb: 0 } }}
            >
              {renderOption ? (
                renderOption(option)
              ) : (
                <Text
                  text={option.label}
                  sx={{
                    width: 1,
                    flex: 1,
                    padding: 0,
                    paddingLeft: '6px',
                    paddingRight: '6px',
                  }}
                />
              )}
            </MuiBox>
          )}
          slotProps={{
            paper: {
              sx: { ...paperCommonStyles, display: hideOptions ? 'none' : 'display' },
            },
            listbox: {
              sx: { p: 0 },
            },
          }}
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

Select.displayName = 'Select';
export default Select;
