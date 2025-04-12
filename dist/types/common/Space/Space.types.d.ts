import type { BoxProps as MuiMuiBoxProps } from '@mui/material/Box';
export interface SpaceProps extends MuiMuiBoxProps {
    row?: boolean;
    gap?: number | [number, number];
}
export type SpaceComponentType = React.NamedExoticComponent<SpaceProps>;
