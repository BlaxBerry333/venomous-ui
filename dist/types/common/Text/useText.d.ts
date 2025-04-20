import type { Theme as MuiTheme } from '@mui/material/styles';
import type { TextProps } from './Text.types';
export default function useText({ isTitle, isLabel, titleLevel, textColor, }: Pick<TextProps, 'isTitle' | 'isLabel' | 'titleLevel' | 'textColor'>): {
    textCommonStyles: {
        typography: string;
        fontWeight: string;
        color: (theme: MuiTheme) => string;
    };
};
