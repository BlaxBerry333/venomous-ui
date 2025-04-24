import MuiTooltip from '@mui/material/Tooltip';
import MuiTypography from '@mui/material/Typography';
import { memo, useMemo, type JSX } from 'react';
import type { TextComponentType } from './Text.types';
import useText from './useText';

const Text: TextComponentType = memo(
  ({
    text,
    isLabel,
    isTitle = false,
    titleLevel = 'h6',
    ellipsis = false,
    textColor = 'auto',
    bold,
    sx,
    ...props
  }) => {
    const { textCommonStyles } = useText({ isTitle, isLabel, titleLevel, textColor, bold });

    const TextComponent = useMemo<JSX.Element>(
      () => (
        <MuiTypography
          id="VenomousUI-Text"
          component="div"
          variant={isTitle ? titleLevel : isLabel ? 'caption' : 'body1'}
          noWrap={ellipsis}
          sx={{
            ...textCommonStyles,
            ...sx,
          }}
          {...props}
        >
          {text}
        </MuiTypography>
      ),
      [text, isTitle, titleLevel, ellipsis, sx, props, textCommonStyles],
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
