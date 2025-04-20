import type { Theme as MuiTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import type { TextProps } from './Text.types';

export default function useText({
  isTitle = false,
  isLabel = false,
  titleLevel = 'h6',
  textColor = 'auto',
}: Pick<TextProps, 'isTitle' | 'isLabel' | 'titleLevel' | 'textColor'>) {
  const textCommonStyles = useMemo(
    () => ({
      typography: isTitle ? titleLevel : isLabel ? 'caption' : 'body1',
      fontWeight: isTitle || isLabel ? 'bold' : 'normal',
      color: (theme: MuiTheme) =>
        textColor === 'error'
          ? theme.palette.error.main
          : textColor === 'primary'
            ? theme.palette.primary.main
            : textColor === 'success'
              ? theme.palette.success.main
              : textColor === 'disabled'
                ? theme.palette.action.disabled
                : 'inherit',
    }),
    [isTitle, isLabel, textColor],
  );

  return {
    textCommonStyles,
  };
}
