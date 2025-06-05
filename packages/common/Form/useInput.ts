import type { Theme as MuiTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import type { InputProps } from './index.types';

export default function useInput({
  isDisabled,
  isError,
}: Pick<InputProps, 'isDisabled' | 'isError'>) {
  const inputCommonStyle = useMemo(
    () => ({
      borderRadius: '8px',
      minWidth: '200px',
      '& input': {
        cursor: isDisabled ? 'not-allowed' : 'text',
        color: (theme: MuiTheme) =>
          isDisabled ? 'disabled' : isError ? theme.palette.error.main : 'inherit',
      },
    }),
    [isDisabled, isError],
  );

  return {
    inputCommonStyle,
  };
}
