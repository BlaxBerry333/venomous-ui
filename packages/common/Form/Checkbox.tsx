import MuiCheckbox from '@mui/material/Checkbox';
import MuiSvgIcon from '@mui/material/SvgIcon';
import { memo, useCallback, type JSX, type NamedExoticComponent } from 'react';
import type { CheckboxComponentType, CheckboxProps } from './Form.types';
import Labels from './Labels';

const Checkbox: CheckboxComponentType = memo(
  ({ value, onChange, isDisabled, isError, label, labelDirection = 'end' }) => {
    const renderCheckboxElement = useCallback(
      (id?: string): JSX.Element => (
        <MuiCheckbox
          id={id}
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
          disabled={isDisabled}
          icon={<CustomIcon isDisabled={isDisabled} isError={isError} />}
          checkedIcon={<CustomCheckedIcon isDisabled={isDisabled} isError={isError} />}
          sx={{
            '& .MuiSwitch-track': { transition: 'background-color 0s' },
            '& svg.MuiSvgIcon-root': { transform: 'translate(-1px, 0px)' },
          }}
        />
      ),
      [value, onChange, isDisabled, isError],
    );

    if (label) {
      return (
        <Labels
          labelsDirection="row"
          startLabel={labelDirection === 'start' ? label : ''}
          endLabel={labelDirection === 'end' ? label : ''}
          isDisabled={isDisabled}
          isError={isError}
          renderElement={renderCheckboxElement}
        />
      );
    }

    return renderCheckboxElement();
  },
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;

const CustomIcon: NamedExoticComponent<Pick<CheckboxProps, 'isDisabled' | 'isError'>> = memo(
  ({ isDisabled, isError }) => {
    return (
      <MuiSvgIcon
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 20 20"
        sx={{
          color: (theme) =>
            isError
              ? theme.palette.error.main
              : isDisabled
                ? theme.palette.action.disabled
                : 'auto',
        }}
      >
        <path
          fill="currentColor"
          d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
        />
      </MuiSvgIcon>
    );
  },
);

const CustomCheckedIcon: NamedExoticComponent<Pick<CheckboxProps, 'isDisabled' | 'isError'>> = memo(
  ({ isDisabled, isError }) => {
    return (
      <MuiSvgIcon
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        sx={{
          color: (theme) =>
            isError
              ? theme.palette.error.main
              : isDisabled
                ? theme.palette.action.disabled
                : 'auto',
        }}
      >
        <path
          fill="currentColor"
          d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zm11.03 6.28l-6.754 6.747a.75.75 0 0 1-1.06 0L6.72 13.28a.75.75 0 0 1 1.06-1.06l2.217 2.216l6.223-6.217a.75.75 0 1 1 1.06 1.062"
        />
      </MuiSvgIcon>
    );
  },
);
