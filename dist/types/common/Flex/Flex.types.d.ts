import type { BoxProps as MuiMuiBoxProps } from '@mui/material/Box';
export interface FlexProps extends MuiMuiBoxProps {
    row?: boolean;
    gap?: number | [number, number];
}
export type FlexComponentType = React.NamedExoticComponent<FlexProps>;
