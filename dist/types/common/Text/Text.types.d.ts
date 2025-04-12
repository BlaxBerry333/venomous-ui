import type { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import type { NamedExoticComponent } from 'react';
export type TextProps = Omit<MuiTypographyProps, 'children' | 'variant' | 'noWrap'> & {
    text: string;
    isLabel?: boolean;
    isTitle?: boolean;
    titleLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    ellipsis?: boolean;
};
export type TextComponentType = NamedExoticComponent<TextProps>;
