import type { Theme as MuiTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import type { TextProps } from './Text.types';

export default function useText({
  isTitle = false,
  isLabel = false,
  titleLevel = 'h6',
  textColor = 'auto',
  bold = false,
  ellipsis = false,
}: Pick<TextProps, 'isTitle' | 'isLabel' | 'titleLevel' | 'textColor' | 'bold' | 'ellipsis'>) {
  const textCommonStyles = useMemo(
    () => ({
      typography: isTitle ? titleLevel : isLabel ? 'caption' : 'body1',
      fontWeight: isTitle || isLabel || bold ? 'bold' : 'normal',
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
      ...(!ellipsis
        ? {}
        : {
            width: '100%',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }),
    }),
    [isTitle, isLabel, textColor, bold, ellipsis],
  );

  return {
    textCommonStyles,
  };
}
