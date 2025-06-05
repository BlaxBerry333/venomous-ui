import MuiSwitch from '@mui/material/Switch';
import { memo, useCallback, type JSX } from 'react';
import type { SwitchComponentType } from './index.types';
import Labels from './Labels';

const Switch: SwitchComponentType = memo(
  ({ value, onChange, startLabel, endLabel, labelsDirection = 'row', isDisabled }) => {
    const renderSwitchElement = useCallback(
      (id?: string): JSX.Element => (
        <MuiSwitch
          id={id}
          color="primary"
          checked={value}
          disabled={isDisabled}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.checked)}
          sx={{
            '& .MuiSwitch-track': {
              transition: 'background-color 0s',
            },
          }}
        />
      ),
      [value, onChange],
    );

    if (startLabel || endLabel) {
      return (
        <Labels
          labelsDirection={labelsDirection}
          startLabel={startLabel}
          endLabel={endLabel}
          isDisabled={isDisabled}
          renderElement={renderSwitchElement}
        />
      );
    }

    return renderSwitchElement();
  },
);

Switch.displayName = 'Switch';
export default Switch;
