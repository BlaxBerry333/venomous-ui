import type { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import type { NamedExoticComponent } from 'react';
export type TextProps = Omit<MuiTypographyProps, 'children' | 'variant' | 'noWrap' | 'color'> & {
    text: string;
    textColor?: 'auto' | 'primary' | 'error' | 'success' | 'disabled';
    isLabel?: boolean;
    isTitle?: boolean;
    titleLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    ellipsis?: boolean;
    bold?: boolean;
};
export type TextComponentType = NamedExoticComponent<TextProps>;
