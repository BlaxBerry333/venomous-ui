import MuiTypography from '@mui/material/Typography';
import { memo, useEffect, useMemo, useRef, useState, type JSX } from 'react';
import { Tooltip } from '../Tooltip';
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
    const { textCommonStyles } = useText({
      isTitle,
      isLabel,
      titleLevel,
      textColor,
      bold,
      ellipsis,
    });

    const textRef = useRef<HTMLDivElement>(null);
    const [isOverflowing, setIsOverflowing] = useState<boolean>(false);

    useEffect(() => {
      if (ellipsis && textRef.current) {
        const { scrollWidth, clientWidth } = textRef.current;
        setIsOverflowing(scrollWidth > clientWidth);
      }
    }, [text, ellipsis]);

    const TextComponent = useMemo<JSX.Element>(
      () => (
        <MuiTypography
          className="VenomousUI-Text"
          component="div"
          ref={textRef}
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

    if (ellipsis && isOverflowing) {
      return <Tooltip tooltip={text}>{TextComponent}</Tooltip>;
    }

    return TextComponent;
  },
);

Text.displayName = 'Text';
export default Text;
