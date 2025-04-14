import MuiTooltip from '@mui/material/Tooltip';
import MuiTypography from '@mui/material/Typography';
import { memo, useMemo, type JSX } from 'react';
import type { TextComponentType } from './Text.types';

const Text: TextComponentType = memo(
  ({
    text,
    isLabel,
    isTitle = false,
    titleLevel = 'h5',
    ellipsis = false,
    color,
    sx,
    ...props
  }) => {
    const TextComponent = useMemo<JSX.Element>(
      () => (
        <MuiTypography
          component="div"
          variant={isTitle ? titleLevel : isLabel ? 'caption' : 'body1'}
          noWrap={ellipsis}
          sx={{
            fontWeight: isTitle ? 'bold' : 'normal',
            color: (theme) =>
              color === 'error'
                ? theme.palette.error.main
                : color === 'primary'
                  ? theme.palette.primary.main
                  : color === 'success'
                    ? theme.palette.success.main
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
