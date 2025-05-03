import type { Theme as MuiTheme } from '@mui/material/styles';
import type { TextProps } from './Text.types';
export default function useText({ isTitle, isLabel, titleLevel, textColor, bold, ellipsis, }: Pick<TextProps, 'isTitle' | 'isLabel' | 'titleLevel' | 'textColor' | 'bold' | 'ellipsis'>): {
    textCommonStyles: {
        width?: string | undefined;
        whiteSpace?: string | undefined;
        overflow?: string | undefined;
        textOverflow?: string | undefined;
        typography: string;
        fontWeight: string;
        color: (theme: MuiTheme) => string;
    };
};
