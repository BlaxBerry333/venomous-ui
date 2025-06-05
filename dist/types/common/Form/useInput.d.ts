import type { Theme as MuiTheme } from '@mui/material/styles';
import type { InputProps } from './index.types';
export default function useInput({ isDisabled, isError, }: Pick<InputProps, 'isDisabled' | 'isError'>): {
    inputCommonStyle: {
        borderRadius: string;
        minWidth: string;
        '& input': {
            cursor: string;
            color: (theme: MuiTheme) => string;
        };
    };
};
