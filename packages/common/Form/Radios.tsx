import MuiRadio from '@mui/material/Radio';
import { memo } from 'react';
import { Flex } from '../Flex';
import type { RadiosComponentType } from './index.types';
import Label from './Label';
import Labels from './Labels';

const Radios: RadiosComponentType = memo(
  ({ label = '', tooltip, name, options, optionLabelDirection = 'end', value, onChange }) => {
    return (
      <Flex gap={0}>
        <Label label={label} elementId={undefined} tooltip={tooltip} />
        <Flex gap={0}>
          {options.map((option) => (
            <Labels
              key={option.value}
              labelsDirection="row"
              startLabel={optionLabelDirection === 'start' ? option.label : ''}
              endLabel={optionLabelDirection === 'end' ? option.label : ''}
              isDisabled={option.isDisabled}
              renderElement={(id) => (
                <MuiRadio
                  id={id}
                  name={name}
                  value={option.value}
                  checked={value === option.value}
                  disabled={option.isDisabled}
                  onChange={(e) => onChange(options.find(({ value }) => value === e.target.value)!)}
                  sx={{
                    py: '6px',
                    px: 0,
                    mr: optionLabelDirection === 'start' ? '2px' : '8px',
                    ml: optionLabelDirection === 'end' ? '2px' : '8px',
                  }}
                />
              )}
            />
          ))}
        </Flex>
      </Flex>
    );
  },
);

Radios.displayName = 'Radios';
export default Radios;
