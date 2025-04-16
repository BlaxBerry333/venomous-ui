import MuiTooltip from '@mui/material/Tooltip';
import MuiTypography from '@mui/material/Typography';
import { memo, useMemo, type JSX } from 'react';
import type { TextComponentType } from './Text.types';

const Text: TextComponentType = memo(
  ({
    text,
    isLabel,
    isTitle = false,
    titleLevel = 'h6',
    ellipsis = false,
    textColor = 'inherit',
    sx,
    ...props
  }) => {
    const TextComponent = useMemo<JSX.Element>(
      () => (
        <MuiTypography
          id="VenomousUI-Text"
          component="div"
          variant={isTitle ? titleLevel : isLabel ? 'caption' : 'body1'}
          noWrap={ellipsis}
          sx={{
            fontWeight: isTitle || isLabel ? 'bold' : 'normal',
            color: (theme) =>
              textColor === 'error'
                ? theme.palette.error.main
                : textColor === 'primary'
                  ? theme.palette.primary.main
                  : textColor === 'success'
                    ? theme.palette.success.main
                    : textColor === 'grey'
                      ? theme.palette.text.secondary
                      : 'inherit',
            ...sx,
          }}
          {...props}
        >
          {text}
        </MuiTypography>
      ),
      [text, isTitle, titleLevel, ellipsis, sx, props],
    );

    if (ellipsis) {
      return (
        <MuiTooltip arrow title={text}>
          {TextComponent}
        </MuiTooltip>
      );
    }

    return TextComponent;
  },
);

Text.displayName = 'Text';
export default Text;
