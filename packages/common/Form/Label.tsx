import MuiBox from '@mui/material/Box';
import MuiTooltip from '@mui/material/Tooltip';
import { memo } from 'react';
import { Icon } from '../Icon';
import { useText } from '../Text';
import type { LabelComponentType } from './index.types';

const Label: LabelComponentType = memo(
  ({ label, elementId, tooltip, isDisabled, isError, isRequired }) => {
    const { textCommonStyles } = useText({
      isTitle: false,
      isLabel: true,
      textColor: isDisabled ? 'disabled' : isError ? 'error' : 'auto',
    });

    return (
      <MuiBox
        className="VenomousUI-Label"
        component="label"
        htmlFor={elementId}
        sx={{
          ...textCommonStyles,
          cursor: isDisabled ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          lineHeight: '1.5rem',
        }}
      >
        <MuiBox
          component="i"
          sx={{
            width: '14px',
            marginLeft: '-14px',
            fontSize: '1.5rem',
            transform: 'translateY(0.35rem)',
            opacity: isRequired ? 1 : 0,
            color: 'error.main',
          }}
        >
          *
        </MuiBox>

        {label}

        {tooltip && (
          <MuiTooltip title={tooltip} arrow placement="top">
            <Icon
              icon="solar:info-circle-bold"
              width={16}
              color={isError ? 'error' : 'primary'}
              ml={'4px'}
            />
          </MuiTooltip>
        )}
      </MuiBox>
    );
  },
);

Label.displayName = 'Label';
export default Label;
