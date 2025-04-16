import type { Theme as MuiTheme } from '@mui/material/styles';
export default function usePaper(): {
    paperCommonStyles: {
        p: string;
        borderRadius: string;
        backgroundColor: ({ palette }: MuiTheme) => string;
        backgroundImage: string;
    };
};
